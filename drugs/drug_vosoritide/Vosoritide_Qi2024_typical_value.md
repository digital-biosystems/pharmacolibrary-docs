<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;vosoritide&quot;,&quot;href&quot;:&quot;drugs/drug_vosoritide/&quot;},{&quot;label&quot;:&quot;Qi_2024 \u00b7 typical_value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vosoritide — `Vosoritide_Qi2024_typical_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Vosoritide's absorption rate constant was rejected because its reported unit could not be converted to SI, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="vosoritide" model-id="Vosoritide_Qi2024_typical_value" status="rejected" stale="false" population="children with achondroplasia" measured-compound="vosoritide" parameterization="apparent" topology="1C"></div>

## Citation
Qi Y, Chan ML, Mould DR, Larimore K, Fisheleva E, Cherukuri A et al. Development of a Weight-Band Dosing Approach for Vosoritide in Children with Achondroplasia Using a Population Pharmacokinetic Model. Clinical pharmacokinetics 63(5):707–719 (2024).
  ·  DOI: [10.1007/s40262-024-01371-6](https://doi.org/10.1007/s40262-024-01371-6)

## Population and dosing

**Population:** children with achondroplasia · condition achondroplasia · age group child · n = &lt;unknown&gt;.

**Dosing:** 0.175, 0.525, 1.05, 2.1 mg, sc, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 47.47 | L/h |
| V/F (L) | V/F | 17.99 | L |
| Ka1 (1/h) | kabs | 2.21 | units |
| Ka2 (1/h) | λ2 | 0.06 | units |
| theta_cl_f_weight | theta_cl_f_weight | 0.356 |  |
| theta_v_f_weight | theta_v_f_weight | 1.09 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vosoritide's absorption rate constant was rejected because its reported unit could not be converted to SI, causing a dimension mismatch.**

The record lists the absorption rate constant with a value of 2.21 and units of 'units', which lacks a defined conversion to standard international units. This missing conversion prevented the system from assigning a valid SI value to the parameter. Consequently, the structural check failed due to the resulting dimensional inconsistency. Extracted — vosoritide: CL/F 47.5 L/h, V/F 18 L, kabs 2.21 units, λ2 0.06 units.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of change-point: this record has none, the second reading 0.31; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 47.47 | L/h | 1.319e-05 | m3/s | l/h | exact (1) | Tab5:row1:col1 |
| V/F (L) | `Q76` · V/F | 17.99 | L | 0.01799 | m3 | l | exact (1) | Tab5:row2:col1 |
| Ka1 (1/h) | `Q49` · kabs | 2.21 | units |  |  | units | llm (0.6) | Tab5:row3:col1 |
| Ka2 (1/h) | `Q68` · λ2 | 0.06 | units |  |  | units | llm (0.6) | Tab5:row4:col1 |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.356 |  |  |  |  |  | Tab5:row9:col1 |
| theta_v_f_weight | `Q900` · theta_v_f_weight | 1.09 |  |  |  |  |  | Tab5:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka1 (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Ka2 (1/h)' → Q68 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Change-point (h)' — extend the ontology if this is a real PK parameter (source ['Tab5:row5:col1'])
- dropped unlinked row (NIL): 'Effect of SOLNC (0.2 mg/mL)' — extend the ontology if this is a real PK parameter (source ['Tab5:row8:col1'])
- dropped unlinked row (NIL): 'Effect of time on F' — extend the ontology if this is a real PK parameter (source ['Tab5:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vosoritide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- model equation 'ilabilityF = exp(θ' not bound — neither LHS nor base term 'θ' linked to an ontology parameter
- status held at route_to_review — not promoted
- population split: 'typical value' subgroup of Qi_2024 (paper reports 2 populations: median, typical value)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 5
- captured model equation ilabilityF = exp(θ

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[change-point]` |  | 0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of time on f]` |  | 0.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka2]` | 0.06 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab5:row1:col1'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | ['Tab5:row3:col1'] |
| C5_dimension_Q68 | fail | [luminosity] / [length] ** 2 | units | ['Tab5:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab5:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 47.5 L/h | ['Tab5:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 18 L | ['Tab5:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvosoritide%5D%20Vosoritide_Qi2024_typical_value&body=Drug%3A%20vosoritide%0ARecord%3A%20Vosoritide_Qi2024_typical_value%0APaper%3A%20Qi_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vosoritide/Vosoritide_Qi2024_typical_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:23 UTC</sub>
