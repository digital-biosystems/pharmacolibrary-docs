<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Koue_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Koue2007_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit h ([time]) vs 1 / [time]; Q99 unit l/kg ([length] ** 3) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Koue2007_reference" status="rejected" stale="false" population="healthy Japanese males" measured-compound="aripiprazole" parameterization="apparent" topology="2C"></div>

## Citation
Koue T, Kubo M, Funaki T, Fukuda T, Azuma J, Takaai M et al. Nonlinear mixed effects model analysis of the pharmacokinetics of aripiprazole in healthy Japanese males. Biological & pharmaceutical bulletin 30(11):2154–2158 (2007).
  ·  DOI: [10.1248/bpb.30.2154](https://doi.org/10.1248/bpb.30.2154)

## Population and dosing

**Population:** healthy Japanese males · condition healthy · age group adult.

**Dosing:** 3, 6 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ₁ (h) | λ1 | 0.805 | h |
| θ₂ (h⁻¹) | λ2 | 2.65 | h⁻¹ |
| θ₃ (l/kg) | V2 | 3.84 | l/kg |
| θ₄ (l/h/kg) | Q | 0.0645 | l/h/kg |
| θ₈ (l/kg) | Q2 | 1.54 | l/kg |
| ω_V₁/F | V1/F | 0.381 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.562). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit h ([time]) vs 1 / [time]; Q99 unit l/kg ([length] ** 3) vs [length] ** 3 / [time].**

A reported unit could not be converted (λ1 and Q2), so that value has no SI equivalent. Extracted — aripiprazole: λ1 0.805 h, λ2 2.65 h⁻¹, V2 3.84 l/kg, Q 0.0645 l/h/kg, Q2 1.54 l/kg, V1/F 0.381.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[θ1].parameter_id`: this record has Q67, the second reading Q57; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ₁ (h) | `Q67` · λ1 | 0.805 | h |  |  | h | llm (0.6) | Koue_2007_table_2:row0:col1 |
| θ₂ (h⁻¹) | `Q68` · λ2 | 2.65 | h⁻¹ | 0.0007361 | 1/s | 1/h | llm (0.6) | Koue_2007_table_2:row1:col1 |
| θ₃ (l/kg) | `Q64` · V2 | 3.84 | l/kg | 0.2688 | m3 | l/kg | llm (0.6) | Koue_2007_table_2:row2:col1 |
| θ₄ (l/h/kg) | `Q30` · Q | 0.0645 | l/h/kg | 1.254e-06 | m3/s | l/(h·kg) | llm (0.6) | Koue_2007_table_2:row3:col1 |
| θ₈ (l/kg) | `Q99` · Q2 | 1.54 | l/kg |  |  | l/kg | llm (0.6) | Koue_2007_table_2:row7:col1 |
| ω_V₁/F | `Q290` · V1/F | 0.381 |  |  |  |  | llm (0.6) | Koue_2007_table_2:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θ₁ (h)' → Q67 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q30 ('θ₅ (l/h/kg)', value '0.0135') — already have one for this compound
- dropped unlinked row (NIL): 'θ₆ (l/h/kg)' — extend the ontology if this is a real PK parameter (source ['Koue_2007_table_2:row5:col1'])
- dropped unlinked row (NIL): 'θ₇ (l/h/kg)' — extend the ontology if this is a real PK parameter (source ['Koue_2007_table_2:row6:col1'])
- unit_dimension_mismatch: 'θ₈ (l/kg)' → Q99 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'θ₉ (l/h/kg)' — extend the ontology if this is a real PK parameter (source ['Koue_2007_table_2:row8:col1'])
- routed 'ω_ALAG' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_KA' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_CL/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_V₂/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Q/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=aripiprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.562 (9/16 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ1].parameter_id` | Q67 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[θ2].parameter_id` | Q68 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[θ3].parameter_id` | Q64 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ4].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ8]` | 1.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_cl/f]` |  | 0.397 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_q/f]` |  | 0.262 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Koue_2007_table_2:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Koue_2007_table_2:row2:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | h ([time]) | ['Koue_2007_table_2:row0:col1'] |
| C5_dimension_Q68 | pass | 1 / [time] |  | ['Koue_2007_table_2:row1:col1'] |
| C5_dimension_Q99 | fail | [length] ** 3 / [time] | l/kg ([length] ** 3) | ['Koue_2007_table_2:row7:col1'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 |  | ['Koue_2007_table_2:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 269 L | ['Koue_2007_table_2:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Koue2007_reference&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Koue2007_reference%0APaper%3A%20Koue_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Koue2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:26 UTC</sub>
