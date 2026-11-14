<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Telithromycin&quot;,&quot;href&quot;:&quot;drugs/toxin_telithromycin/&quot;},{&quot;label&quot;:&quot;Ikawa_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telithromycin_Ciervo2005_reference&quot;,&quot;label&quot;:&quot;Ciervo_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_telithromycin/Telithromycin_Ciervo2005_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telithromycin_Namour2001_reference&quot;,&quot;label&quot;:&quot;Namour_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_telithromycin/Telithromycin_Namour2001_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Telithromycin — `Telithromycin_Ikawa2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Telithromycin" model-id="Telithromycin_Ikawa2014_reference" status="rejected" stale="false" population="humans with bronchopulmonary drug concentration data" measured-compound="telithromycin" parameterization="apparent" topology="2C"></div>

## Citation
Ikawa K, Kikuchi E, Kikuchi J, Nishimura M, Derendorf H, Morikawa N. Pharmacokinetic modelling of serum and bronchial concentrations for clarithromycin and telithromycin, and site-specific pharmacodynamic simulation for their dosages. Journal of clinical pharmacy and therapeutics 39(4):411-417 (2014).
  ·  DOI: [10.1111/jcpt.12157](https://doi.org/10.1111/jcpt.12157)

## Population and dosing

**Population:** humans with bronchopulmonary drug concentration data · condition healthy · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 /F | V1/F | 204.7 | L |
| V2 /F | V2/F | 168.9 | L |
| V3 /F | V3/F | 67.1 | L |
| CL/F | CL/F | 34.4 | L/h |
| Ka | kabs | 0.68 | 1/h |
| K12 | k12 | 0.0193 | 1/h |
| K21 | k21 | 0.434 | 1/h |
| K13 | k13 | 0.667 | 1/h |
| K31 | k31 | 0.26 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 /F | `Q290` · V1/F | 204.7 | L | 0.2047 | m3 | l | space_fold (0.95) | Ikawa_2014:abstract |
| V2 /F | `Q82` · V2/F | 168.9 | L | 0.1689 | m3 | l | space_fold (0.95) | Ikawa_2014:abstract |
| V3 /F | `Q78` · V3/F | 67.1 | L | 0.0671 | m3 | l | space_fold (0.95) | Ikawa_2014:abstract |
| CL/F | `Q27` · CL/F | 34.4 | L/h | 9.556e-06 | m3/s | l/h | exact (1) | Ikawa_2014:abstract |
| Ka | `Q49` · kabs | 0.68 | 1/h | 0.0001889 | 1/s | 1/h | exact (1) | Ikawa_2014:abstract |
| K12 | `Q301` · k12 | 0.0193 | 1/h | 5.361e-06 | 1/s | 1/h | exact (1) | Ikawa_2014:abstract |
| K21 | `Q302` · k21 | 0.434 | 1/h | 0.0001206 | 1/s | 1/h | exact (1) | Ikawa_2014:abstract |
| K13 | `Q303` · k13 | 0.667 | 1/h | 0.0001853 | 1/s | 1/h | exact (1) | Ikawa_2014:abstract |
| K31 | `Q304` · k31 | 0.26 | 1/h | 7.222e-05 | 1/s | 1/h | exact (1) | Ikawa_2014:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telithromycin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ikawa_2014_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl/f]` | 34.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 0.0193 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k13]` | 0.667 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | 0.434 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k31]` | 0.26 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.68 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1 /f]` | 204.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2 /f]` | 168.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3 /f]` | 67.1 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Ikawa_2014:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Ikawa_2014:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 34.4 L/h | ['Ikawa_2014:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 205 L | ['Ikawa_2014:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 169 L | ['Ikawa_2014:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelithromycin%5D%20Telithromycin_Ikawa2014_reference&body=Drug%3A%20telithromycin%0ARecord%3A%20Telithromycin_Ikawa2014_reference%0APaper%3A%20Ikawa_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_telithromycin/Telithromycin_Ikawa2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 00:09 UTC</sub>
