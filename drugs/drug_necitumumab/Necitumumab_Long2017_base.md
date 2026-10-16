<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;necitumumab&quot;,&quot;href&quot;:&quot;drugs/drug_necitumumab/&quot;},{&quot;label&quot;:&quot;Long_2017 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# necitumumab — `Necitumumab_Long2017_base`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5), gpt-oss:120b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Km and Vmax), so that value has no SI equivalent. Extracted — necitumumab: CL 32.4 L/h, Km 9.96 mg/L, Vmax 0.626 mg/h, V1 3.6 L, Q 0.0198 L/h, V2 3.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of central volume of distribution, v 1 (l)b: this record has 3.6, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Long A et al., Population Pharmacokinetics of Necitumu…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-016-0452-x](https://doi.org/10.1007/s40262-016-0452-x)

<div class="pk-model-meta" hidden drug="necitumumab" model-id="Necitumumab_Long2017_base" status="rejected" stale="false" population="cancer patients" measured-compound="necitumumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLa (CLtot) | `Q22` · CL | 32.4 | L/h | 9e-06 | L/h | not captured | llm (0.6) | Tab4:row2:col2 | — | not captured |
| K m (mg/L) | `Q1` · Km | 9.96 | mg/L | not captured | [mg] / [l] | not captured | space_fold (0.95) | Tab4:row4:col1 | — | not captured |
| V max (mg/h) | `Q66` · Vmax | 0.626 | mg/h | not captured | [mg] / [h] | not captured | special_case (0.95) | Tab4:row5:col1 | — | not captured |
| Central volume of distribution, V 1 (L)b | `Q63` · V1 | 3.60 | L | 0.0036000000000000003 | [l] | not captured | boundary_compartment (0.9) | Tab4:row6:col1, Tab4:row6:col2 | — | not captured |
| Inter-compartmental CL, Q (L/h) | `Q30` · Q | 0.0198 | L/h | 5.500000000000001e-09 | [l] / [h] | not captured | llm_corrected (0.6) | Tab4:row7:col1 | — | not captured |
| Peripheral volume of distribution, V 2 (L)b | `Q64` · V2 | 3.31 | L | 0.00331 | [l] | not captured | boundary_compartment (0.9) | Tab4:row8:col1, Tab4:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive (µg/mL)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table representations disagree for 'CLa (CLtot)'; source reconciliation required
- table representations disagree for 'CL (L/h)'; source reconciliation required
- table representations disagree for 'K m (mg/L)'; source reconciliation required
- table representations disagree for 'V max (mg/h)'; source reconciliation required
- table representations disagree for 'Central volume of distribution, V 1 (L)b'; source reconciliation required
- table representations disagree for 'Inter-compartmental CL, Q (L/h)'; source reconciliation required
- table representations disagree for 'Peripheral volume of distribution, V 2 (L)b'; source reconciliation required
- table representations disagree for 'Inter-patient variability correlation Coefficient (CLtot and V 1)'; source reconciliation required
- unit_dimension_unknown: 'CLtot' (CL)
- dropped duplicate Q22 ('CL (L/h)', value '0.0113') — already have one for this compound
- unit_dimension_mismatch: 'V max (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- routed 'Inter-patient variability correlation Coefficient (CLtot and V 1)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'CLa (CLtot)' → L/h (from the paper text: "The paper explicitly states in the text: 'Simulations were used to calculate the population estimates of V ss (6.97 L) a")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=necitumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Long_2017 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: none found for 'necitumumab' — its concentrations stay mass-only

**Extraction notes:**
- table Tab4: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (4/8 fields) | 4 |
| `gpt-oss:120b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution, v 1 (l)b]` | 3.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltot]` | not captured | 0.0141 | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental cl, q]` | 0.0198 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution, v 2 (l)b]` | 3.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution, v 1 (l) b]` | not captured | 3.60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution, v 1 (l)b]` | 3.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 0.0113 | only_one_extracted |
| `gpt-oss:120b` | `parameters[inter-compartmental cl, q]` | 0.0198 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution, v 2 (l) b]` | not captured | 3.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution, v 2 (l)b]` | 3.31 | not captured | only_one_extracted |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row8:col1', 'Tab4:row8:col2'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Tab4:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.4 | not captured | not captured | ['Tab4:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.4 L/h | not captured | not captured | ['Tab4:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.6 L | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.31 L | not captured | not captured | ['Tab4:row8:col1', 'Tab4:row8:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_necitumumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Long_2017` / `Long_2017::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:44 UTC</sub>
