<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;copanlisib&quot;,&quot;href&quot;:&quot;drugs/drug_copanlisib/&quot;},{&quot;label&quot;:&quot;Morcos_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# copanlisib — `Copanlisib_Morcos2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Copanlisib’s CL/F is −0.204, an implausible negative clearance that led to rejection.**

The record defines CL/F as total clearance after oral administration adjusted for bioavailability and reports it as −0.204 THETA; the finding flags a negative clearance. The reported unit, THETA, could not be converted to SI, leaving this parameter without an SI value. Extracted — copanlisib: CL 22.2 L/h, V1 92.1 L, Q 79.3 L/h, V2 508 L, Q3 7.34 L/h, V3 522 L, CL/F -0.204 THETA.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000)

<div class="pk-model-meta" hidden drug="copanlisib" model-id="Copanlisib_Morcos2023_reference" status="rejected" stale="false" population="patients across nine phase I–III studies" measured-compound="copanlisib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpop | `Q22` · CL | 22.2 | L/h | 6.166666666666667e-06 | L/h | 3.18 | llm (0.6) | psp413000-tbl-0002:row2:col2, psp413000-tbl-0002:row2:col3, psp413000-tbl-0002:row2:col4, psp413000-tbl-0002:row2:col5 | — | 0.124 (6.07% RSE) |
| V1pop | `Q63` · V1 | 92.1 | L | 0.0921 | L | 7.47 | llm (0.6) | psp413000-tbl-0002:row3:col2, psp413000-tbl-0002:row3:col3, psp413000-tbl-0002:row3:col4, psp413000-tbl-0002:row3:col5 | — | 0.846 (8.94% RSE) |
| Q2 | `Q30` · Q | 79.3 | L/h | 2.2027777777777775e-05 | L/h | 1.58 | special_case (0.95) | psp413000-tbl-0002:row4:col2, psp413000-tbl-0002:row4:col3, psp413000-tbl-0002:row4:col4, psp413000-tbl-0002:row4:col5 | — | not captured |
| V2 | `Q64` · V2 | 508 | L | 0.508 | L | 2.54 | exact (1.0) | psp413000-tbl-0002:row5:col2, psp413000-tbl-0002:row5:col3, psp413000-tbl-0002:row5:col4, psp413000-tbl-0002:row5:col5 | — | not captured |
| Q3 | `Q308` · Q3 | 7.34 | L/h | 2.038888888888889e-06 | L/h | 6.96 | exact (1.0) | psp413000-tbl-0002:row6:col2, psp413000-tbl-0002:row6:col3, psp413000-tbl-0002:row6:col4, psp413000-tbl-0002:row6:col5 | — | not captured |
| V3 | `Q77` · V3 | 522 | L | 0.522 | L | 4.26 | exact (1.0) | psp413000-tbl-0002:row7:col2, psp413000-tbl-0002:row7:col3, psp413000-tbl-0002:row7:col4, psp413000-tbl-0002:row7:col5 | — | not captured |
| ΘRIFCL | `Q900` · equation variable | 1.91 | THETA | not captured | [theta] | 3.56 | llm (0.6) | psp413000-tbl-0002:row8:col2, psp413000-tbl-0002:row8:col3, psp413000-tbl-0002:row8:col4, psp413000-tbl-0002:row8:col5 | — | not captured |
| ΘJAPCL | `Q27` · CL/F | -0.204 | THETA | not captured | [theta] | 29.3 | llm (0.6) | psp413000-tbl-0002:row15:col2, psp413000-tbl-0002:row15:col3, psp413000-tbl-0002:row15:col4, psp413000-tbl-0002:row15:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ 2' routed out of structural estimates ('Residual error (SIGMA)')
- table section residual_error: 'CV g' routed out of structural estimates ('Residual error (SIGMA)')
- unit_dimension_unknown: 'THETA' (CL)
- unit_dimension_unknown: 'THETA' (V1)
- unit_dimension_unknown: 'THETA' (equation variable)
- dropped duplicate Q900 ('ΘITRACL', value '-0.361') — already have one for this compound
- dropped duplicate Q900 ('Θ17067CL', value '-0.184') — already have one for this compound
- dropped duplicate Q900 ('ΘSEXV1', value '-0.429') — already have one for this compound
- dropped duplicate Q900 ('ΘSEXCL', value '-0.167') — already have one for this compound
- dropped duplicate Q22 ('ΘNCICL', value '-0.192') — already have one for this compound
- dropped duplicate Q900 ('ΘRIFV1', value '1.08') — already have one for this compound
- unit_dimension_unknown: 'THETA' (CL/F)
- unit_dimension_unknown: 'CV f' (CL)
- dropped duplicate Q22 ('CL (CV f )', value '36.3') — already have one for this compound
- unit_dimension_unknown: 'shrinkage' (CL)
- dropped duplicate Q22 ('CL (shrinkage)', value '22.5') — already have one for this compound
- unit_dimension_unknown: 'CV f' (V1)
- dropped duplicate Q63 ('V1 (CV f )', value '115') — already have one for this compound
- unit_dimension_unknown: 'shrinkage' (V1)
- dropped duplicate Q63 ('V1 (shrinkage)', value '27.3') — already have one for this compound
- implicit units: 'CLpop' → L/h (from the popPK convention: 'No unit is stated in the supplied text. CL is total clearance, conventionally reported in L/h; 22.2 is consistent with t')
- implicit units: 'V1pop' → L (from the popPK convention: 'No unit is stated in the supplied text. V1 is a compartment volume, conventionally reported in L; 92.1 is consistent wit')
- implicit units: 'Q2' → L/h (from the popPK convention: 'No unit is stated in the supplied text. Q2 is an intercompartmental clearance, conventionally reported in L/h; 79.3 is c')
- implicit units: 'V2' → L (from the popPK convention: 'No unit is stated in the supplied text. V2 is a compartment volume, conventionally reported in L; 508 is consistent with')
- implicit units: 'Q3' → L/h (from the popPK convention: 'No unit is stated in the supplied text. Q3 is an intercompartmental clearance, conventionally reported in L/h; 7.34 is c')
- implicit units: 'V3' → L (from the popPK convention: 'No unit is stated in the supplied text. V3 is a compartment volume, conventionally reported in L; 522 is consistent with')
- implicit units: 'ΘJAPCL' — the LLM proposed '1', whose dimension does not fit Q27; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=copanlisib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell psp413000-tbl-0002:row3:col6 = 'Volume of distribution for compartment 1 for a patient with reference values of covariates e'
- unparsed cell psp413000-tbl-0002:row4:col6 = 'Inter‐compartment clearance for compartments 1 and 2'
- unparsed cell psp413000-tbl-0002:row5:col6 = 'Volume of distribution for compartment 2'
- unparsed cell psp413000-tbl-0002:row6:col6 = 'Inter‐compartment clearance for compartments 1 and 3'
- unparsed cell psp413000-tbl-0002:row7:col6 = 'Volume of distribution for compartment 3'
- unparsed cell psp413000-tbl-0002:row10:col6 = 'Parameter describing influence of study 17067 (CHRONOS‐3) on clearance'
- unparsed cell psp413000-tbl-0002:row11:col6 = 'Parameter describing influence of sex on V1'
- unparsed cell psp413000-tbl-0002:row14:col6 = 'Parameter describing influence of rifampin on V1'
- unparsed cell psp413000-tbl-0002:row20:col6 = 'Variance of exponential inter‐individual variability on V1pop'
- unparsed cell psp413000-tbl-0002:row24:col6 = 'Variance of additive residual error for log‐transformed observations during first 20 min of an infusion'
- unparsed cell psp413000-tbl-0002:row26:col6 = 'Variance of additive residual error for log‐transformed observations in phase I and phase II studies after first 20 min of an infusion'
- unparsed cell psp413000-tbl-0002:row28:col6 = 'Variance of additive residual error for log‐transformed observations in phase III for study 17067 (CHRONOS‐3) after first 20 min of an infusion'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.6 (15/25 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `qwen3.8-27b` | `parameters[cl]` | not captured | 36.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clpop]` | 22.2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θitracl]` | not captured | -0.361 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θjapcl].parameter_id` | Q27 | Q900 | mismatch |
| `qwen3.8-27b` | `parameters[θjapcl].rse_percent` | 29.3 | not captured | mismatch |
| `qwen3.8-27b` | `parameters[θncicl]` | not captured | -0.192 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θrifcl].rse_percent` | 3.56 | not captured | mismatch |
| `qwen3.8-27b` | `parameters[θrifv1]` | not captured | 1.08 | only_one_extracted |
| `qwen3.8-27b` | `parameters[θsexcl]` | not captured | -0.167 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q27 | fail | not captured | -0.204 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row2:col2', 'psp413000-tbl-0002:row2:col3', 'psp413000-tbl-0002:row2:col4', 'psp413000-tbl-0002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row4:col2', 'psp413000-tbl-0002:row4:col3', 'psp413000-tbl-0002:row4:col4', 'psp413000-tbl-0002:row4:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413000-tbl-0002:row6:col2', 'psp413000-tbl-0002:row6:col3', 'psp413000-tbl-0002:row6:col4', 'psp413000-tbl-0002:row6:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row3:col2', 'psp413000-tbl-0002:row3:col3', 'psp413000-tbl-0002:row3:col4', 'psp413000-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row5:col2', 'psp413000-tbl-0002:row5:col3', 'psp413000-tbl-0002:row5:col4', 'psp413000-tbl-0002:row5:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413000-tbl-0002:row7:col2', 'psp413000-tbl-0002:row7:col3', 'psp413000-tbl-0002:row7:col4', 'psp413000-tbl-0002:row7:col5'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | THETA | not captured | not captured | ['psp413000-tbl-0002:row15:col2', 'psp413000-tbl-0002:row15:col3', 'psp413000-tbl-0002:row15:col4', 'psp413000-tbl-0002:row15:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.2 L/h | not captured | not captured | ['psp413000-tbl-0002:row2:col2', 'psp413000-tbl-0002:row2:col3', 'psp413000-tbl-0002:row2:col4', 'psp413000-tbl-0002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 92.1 L | not captured | not captured | ['psp413000-tbl-0002:row3:col2', 'psp413000-tbl-0002:row3:col3', 'psp413000-tbl-0002:row3:col4', 'psp413000-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 508 L | not captured | not captured | ['psp413000-tbl-0002:row5:col2', 'psp413000-tbl-0002:row5:col3', 'psp413000-tbl-0002:row5:col4', 'psp413000-tbl-0002:row5:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_copanlisib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Morcos_2023` / `Morcos_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:58 UTC</sub>
