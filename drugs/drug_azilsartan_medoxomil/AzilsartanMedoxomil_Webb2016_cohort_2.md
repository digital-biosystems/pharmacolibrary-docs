<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;azilsartan medoxomil&quot;,&quot;href&quot;:&quot;drugs/drug_azilsartan_medoxomil/&quot;},{&quot;label&quot;:&quot;Webb_2016 \u00b7 cohort_2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azilsartan medoxomil — `AzilsartanMedoxomil_Webb2016_cohort_2`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615), gpt-oss:120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model was rejected because the metabolite azilsartan is unlinked from the dose and the apparent clearance parameter has a dimension mismatch.**

The record defines a one-compartment structure for the parent drug but lists azilsartan as a metabolite without a formation path from the dose, making it an orphan. Additionally, the apparent clearance parameter (0.03 L/h/kg) failed a dimensional consistency check. A second reader disagreed on the identification of the dose compound and primary analyte, marking them as unknown. Extracted — azilsartan: AUC∞ 2.93e+04 mg/kg, Cmax 4.6e+03 ng/mL, CLm,norm/F 0.03 L/h/kg, V2/F 0.23 L/kg; M-II: Cmax 768 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azilsartan_medoxomil, the second reading azilsartan medoxomil; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> **Dose compound ≠ measured compound:** dosed `azilsartan_medoxomil`, measured `azilsartan`.

## Citation
Webb NJ et al., Single-dose pharmacokinetics and safety…, European journal of clinica… (2016)
  ·  DOI: [10.1007/s00228-015-1987-8](https://doi.org/10.1007/s00228-015-1987-8)

<div class="pk-model-meta" hidden drug="azilsartan medoxomil" model-id="AzilsartanMedoxomil_Webb2016_cohort_2" status="rejected" stale="false" population="children and adolescents with hypertension and healthy adults" measured-compound="azilsartan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CLm,norm/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0-∞, [ng⋅h/mL]/[mg/kg] | `Q17` · AUC∞ | 29337 | mg/kg | not captured | [mg] / [kg] | not captured | llm_confirmed (0.6) | Tab1:row4:col5, Tab1:row4:col7, Tab1:row4:col8, Tab1:row9:col5, Tab1:row9:col7, Tab1:row9:col8 | — | not captured |
| C max, [ng/mL]/[mg/kg] | `Q32` · Cmax | 4600 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Tab1:row5:col5, Tab1:row5:col7, Tab1:row5:col8 | — | not captured |
| CL/F, L/h/kg | `Q375` · CLm,norm/F | 0.03 | L/h/kg | 5.833333333333334e-07 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Tab1:row6:col5, Tab1:row6:col7, Tab1:row6:col8 | — | not captured |
| Vz/F, L/kg | `Q82` · V2/F | 0.23 | L/kg | 0.0161 | [l] / [kg] | not captured | exact (1.0) | Tab1:row7:col5, Tab1:row7:col7, Tab1:row7:col8 | — | not captured |
| C max, [ng/mL]/[mg/kg | `Q32` · Cmax | 768 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Tab1:row10:col5, Tab1:row10:col7, Tab1:row10:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col5', 'Tab1:row2:col6', 'Tab1:row2:col7', 'Tab1:row2:col8'])
- unit_dimension_mismatch: 'AUC0-∞, [ng⋅h/mL]/[mg/kg]' → Q17 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- metabolite azilsartan: Q27→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=azilsartan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'cohort 2' subgroup of Webb_2016 (paper reports 3 populations: cohort 1, cohort 2, cohort 3)
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 16 linked by role; re-tagged azilsartan→M-II ×8
- review gap-fill skipped: this record measures 'azilsartan', not azilsartan_medoxomil — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab1:row4:col6 = '22,360 (NA)'
- unparsed cell Tab1:row5:col6 = '3794 (NA)'
- unparsed cell Tab1:row6:col6 = '0.04 (NA)'
- unparsed cell Tab1:row7:col6 = '0.26 (NA)'
- unparsed cell Tab1:row9:col6 = '12,097 (NA)'
- unparsed cell Tab1:row10:col6 = '694 (NA)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf, [ng⋅h/ml]/[mg/kg]].parameter_id` | Q17 | Q189 | mismatch |
| `gpt-oss-120b` | `parameters[c max, [ng/ml]/[mg/kg].parameter_id` | Q32 | Q174 | mismatch |
| `gpt-oss-120b` | `parameters[c max, [ng/ml]/[mg/kg]].parameter_id` | Q32 | Q174 | mismatch |
| `gpt-oss-120b` | `parameters[vz/f].parameter_id` | Q82 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | azilsartan_medoxomil | azilsartan medoxomil | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf, [ng⋅h/ml]/[mg/kg]].parameter_id` | Q17 | Q189 | mismatch |
| `gpt-oss:120b` | `parameters[c max, [ng/ml]/[mg/kg].parameter_id` | Q32 | Q174 | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].parameter_id` | Q375 | Q27 | mismatch |
| `gpt-oss:120b` | `parameters[vz/f].parameter_id` | Q82 | Q76 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | azilsartan_medoxomil | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | azilsartan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [mass] | mg/kg | not captured | not captured | ['Tab1:row4:col5', 'Tab1:row4:col7', 'Tab1:row4:col8', 'Tab1:row9:col5', 'Tab1:row9:col7', 'Tab1:row9:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab1:row5:col5', 'Tab1:row5:col7', 'Tab1:row5:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab1:row10:col5', 'Tab1:row10:col7', 'Tab1:row10:col8'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row6:col5', 'Tab1:row6:col7', 'Tab1:row6:col8'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row7:col5', 'Tab1:row7:col7', 'Tab1:row7:col8'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q82 | pass | volume within physiological range | 16.1 L | not captured | not captured | ['Tab1:row7:col5', 'Tab1:row7:col7', 'Tab1:row7:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_azilsartan_medoxomil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Webb_2016` / `Webb_2016::cohort_2`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:09 UTC</sub>
