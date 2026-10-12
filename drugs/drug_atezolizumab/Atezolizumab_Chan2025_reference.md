<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/&quot;},{&quot;label&quot;:&quot;Chan_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atezolizumab — `Atezolizumab_Chan2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.542). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Atezolizumab’s absorption rate constant, kabs (0.304), was rejected after its reported unit caused a structural-parameter dimension mismatch.**

For atezolizumab, kabs is reported as 0.304 with unit “unit,” although its label gives KA (1/d) and its meaning is absorption rate constant. That reported unit could not be converted to SI, and the structural parameter failed the dimension check. Extracted — atezolizumab: CL 0.2 L/d, V1 3.28 L, V2 3.63 L, Q 0.546 L/d, kabs 0.304 unit, Fab 0.718.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].covariate_forms`: this record has ['additive_shift', 'linear_fractional'], the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Chan P et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025)
  ·  DOI: [10.1002/psp4.13310](https://doi.org/10.1002/psp4.13310)

<div class="pk-model-meta" hidden drug="atezolizumab" model-id="Atezolizumab_Chan2025_reference" status="rejected" stale="false" population="patients with locally advanced or metastatic non-small cell lung cancer" measured-compound="atezolizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/d) | `Q22` · CL | 0.200 | L/d | 2.3148148148148148e-09 | [l] / [d] | not captured | exact (1.0) | psp413310-tbl-0002:row1:col1 | — | 8.23 (None% RSE) |
| Vc (L) | `Q63` · V1 | 3.28 | L | 0.00328 | [l] | not captured | exact (1.0) | psp413310-tbl-0002:row2:col1 | — | 39.0 (None% RSE) |
| Vp (L) | `Q64` · V2 | 3.63 | L | 0.00363 | [l] | not captured | exact (1.0) | psp413310-tbl-0002:row3:col1 | — | 15.6 (None% RSE) |
| Q (L/d) | `Q30` · Q | 0.546 | L/d | 6.319444444444445e-09 | [l] / [d] | not captured | exact (1.0) | psp413310-tbl-0002:row4:col1 | — | not captured |
| KA (1/d) | `Q49` · kabs | 0.304 | unit | not captured | [unit] | 3.0 | exact (1.0) | psp413310-tbl-0002:row13:col1, psp413310-tbl-0002:row13:col2 | — | 23.7 (None% RSE) |
| F1 | `Q40` · Fab | 0.718 | not captured | not captured | not captured | 1.8 | exact (1.0) | psp413310-tbl-0002:row14:col1, psp413310-tbl-0002:row14:col2 | — | 18.7 (None% RSE) |
| theta_cl_albumin | `Q900` · theta_cl_albumin | -1.12 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413310-tbl-0002:row5:col1 | — | not captured |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.159 | L/d | not captured | not captured | not captured | not captured (not captured) | psp413310-tbl-0002:row6:col1 | — | not captured |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.350 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413310-tbl-0002:row9:col1 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | -0.129 | L | not captured | not captured | not captured | not captured (not captured) | psp413310-tbl-0002:row11:col1 | — | not captured |
| theta_v2_sex | `Q900` · theta_v2_sex | -0.272 | L | not captured | not captured | not captured | not captured (not captured) | psp413310-tbl-0002:row12:col1 | — | not captured |
| theta_kabs_albumin | `Q900` · theta_kabs_albumin | 0.795 | not captured | not captured | not captured | 33.1 | not captured (not captured) | psp413310-tbl-0002:row15:col1, psp413310-tbl-0002:row15:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'POPIIV CL' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV Vc' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV Vp' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV KA' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section iiv: 'POPIIV F1' routed out of structural estimates ('Omega (standard deviation scale)—Between subject variability')
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Sigma (residual error)')
- table section residual_error: 'Additive error (μg/mL)' routed out of structural estimates ('Sigma (residual error)')
- unit_dimension_unknown: 'Tumor burden/63 mm' (CL)
- dropped duplicate Q22 ('Tumor burden on CL (Tumor burden/63 mm)', value '0.125') — already have one for this compound
- dropped unlinked row (NIL): 'Bodyweight on CL (BWT/77 in kg)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Bodyweight on Vc (BWT/77 in kg)' — extend the ontology if this is a real PK parameter (source ['psp413310-tbl-0002:row10:col1'])
- unit_dimension_mismatch: 'KA (1/d)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'HGB/123 in g/L' (Fab)
- dropped duplicate Q40 ('Hemoglobin on F1 On logit scale (HGB/123 in g/L)', value '1.76') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atezolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'atezolizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413310-tbl-0002:row18:col1 = '29.4%'
- unparsed cell psp413310-tbl-0002:row19:col1 = '18.1%'
- unparsed cell psp413310-tbl-0002:row20:col1 = '33.8%'
- unparsed cell psp413310-tbl-0002:row21:col1 = '34.6%'
- unparsed cell psp413310-tbl-0002:row22:col1 = '83.0%'
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model
- LLM region Chan_2025:results_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.542 (13/24 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['additive_shift', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[ka].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada]` | 0.159 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` | -1.12 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_kabs_albumin]` | 0.795 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q301_sex]` | not captured | -0.272 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_bodyweight]` | not captured | 0.808 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin]` | -0.350 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_sex]` | -0.272 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc].covariate_forms` | ['additive_shift', 'linear_fractional'] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[vp].covariate_forms` | ['additive_shift'] | [] | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413310-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413310-tbl-0002:row4:col1'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['psp413310-tbl-0002:row13:col1', 'psp413310-tbl-0002:row13:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413310-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413310-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | not captured | not captured | ['psp413310-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00833 L/h | not captured | not captured | ['psp413310-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.28 L | not captured | not captured | ['psp413310-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.63 L | not captured | not captured | ['psp413310-tbl-0002:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_atezolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chan_2025` / `Chan_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:21 UTC</sub>
