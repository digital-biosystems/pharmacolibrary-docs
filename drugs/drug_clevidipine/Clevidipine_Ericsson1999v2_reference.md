<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;clevidipine&quot;,&quot;href&quot;:&quot;drugs/drug_clevidipine/&quot;},{&quot;label&quot;:&quot;Ericsson_1999_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clevidipine_Bailey2002_reference&quot;,&quot;label&quot;:&quot;Bailey_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clevidipine/Clevidipine_Bailey2002_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clevidipine_Ericsson2001_reference&quot;,&quot;label&quot;:&quot;Ericsson_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clevidipine/Clevidipine_Ericsson2001_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clevidipine_Vuylsteke2000_reference&quot;,&quot;label&quot;:&quot;Vuylsteke_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clevidipine/Clevidipine_Vuylsteke2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clevidipine — `Clevidipine_Ericsson1999v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-07 02:59 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clevidipine record was rejected because the steady-state volume of distribution (Vss = 0.6 l x kg(-1)) is reported per kilogram body weight, a dimension mismatch with the blood clearance (CLb = 0.14 L/h) in the same parent–metabolite structure.

<div class="pk-model-meta" hidden drug="clevidipine" model-id="Clevidipine_Ericsson1999v2_reference" status="rejected" stale="true" population="healthy male volunteers" measured-compound="clevidipine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ericsson H, Fakt C, Höglund L, Jolin-Mellgård A, Nordlander M, Sunzel M et al. Pharmacokinetics and pharmacodynamics of clevidipine in healthy volunteers after intravenous infusion. European journal of clinical pharmacology 55(1):61–67 (1999).
  ·  DOI: [10.1007/s002280050594](https://doi.org/10.1007/s002280050594)

## Population and dosing

**Population:** healthy male volunteers · age group adult · n = &gt;=8.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean blood clearance | CLb | 0.14 | L/h |
| mean volume of distribution at steady state | Vss | 0.6 | l x kg(-1) |
| initial half-life | t1/2α | 1.6 | min |
| terminal half-life | t1/2z | 15 | min |
| mean terminal half-life of the inactive primary metabolite | t1/2z | 9.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clevidipine record was rejected because the steady-state volume of distribution (Vss = 0.6 l x kg(-1)) is reported per kilogram body weight, a dimension mismatch with the blood clearance (CLb = 0.14 L/h) in the same parent–metabolite structure.**

The record, built from the paper's abstract only, contains clevidipine with metabolite H 152/81 formed in the central compartment, and summary statistics standing in for a fitted model. The Vss unit l x kg(-1) is body-weight normalized while CLb is given in L/h, so the structural parameters are dimensionally inconsistent. A second reader also disagreed on whether the clevidipine–H 152/81 metabolism link belongs in the model, and on the values of the initial half-life (1.6 min), blood clearance (0.14 L/h), Vss (0.6 l x kg(-1)), terminal half-life (15 min) and metabolite terminal half-life (9.5 h), which the second reader left as null. Extracted — clevidipine: CLb 0.14 L/h, Vss 0.6 l x kg(-1), t1/2α 1.6 min, t1/2z 15 min; H 152/81: t1/2z 9.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has clevidipine → h 152/81 (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean blood clearance | `Q23` · CLb | 0.14 | L/h | 3.889e-08 | m3/s | L/h | llm_confirmed (0.6) | Ericsson_1999_2:abstract |
| mean volume of distribution at steady state | `Q65` · Vss | 0.6 | l x kg(-1) |  |  | l/kg | llm_corrected (0.6) | Ericsson_1999_2:abstract |
| initial half-life | `Q59` · t1/2α | 1.6 | min | 96 | s | min | llm (0.6) | Ericsson_1999_2:abstract |
| terminal half-life | `Q57` · t1/2z | 15 | min | 900 | s | min | llm (0.6) | Ericsson_1999_2:abstract |
| mean terminal half-life of the inactive primary metabolite | `Q57` · t1/2z | 9.5 | h | 3.42e+04 | s | h | llm (0.6) | Ericsson_1999_2:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l x min(-1) x kg(-1)' (CLb)
- unit_dimension_mismatch: 'mean volume of distribution at steady state' → Q65 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'mean recovery of the radioactive dose' — extend the ontology if this is a real PK parameter (source ['Ericsson_1999_2:abstract'])
- implicit units: 'mean blood clearance' → L/h (from the popPK convention: 'Blood clearance is a volume flow rate. In population pharmacokinetics, clearance parameters are conventionally expressed')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clevidipine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 1 linked by role; re-tagged clevidipine→parent ×4, clevidipine→H 152/81 ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ericsson_1999_2_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['clevidipine', 'h 152/81', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[initial half-life]` | 1.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean blood clearance]` | 0.14 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean terminal half-life of the inactive primary metabolite]` | 9.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean volume of distribution at steady state]` | 0.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` | 15 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Ericsson_1999_2:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ericsson_1999_2:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ericsson_1999_2:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Ericsson_1999_2:abstract'] |
| C5_dimension_Q65 | fail | [luminosity] / [length] ** 2 | l x kg(-1) | ['Ericsson_1999_2:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.14 | ['Ericsson_1999_2:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.14 L/h | ['Ericsson_1999_2:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclevidipine%5D%20Clevidipine_Ericsson1999v2_reference&body=Drug%3A%20clevidipine%0ARecord%3A%20Clevidipine_Ericsson1999v2_reference%0APaper%3A%20Ericsson_1999_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clevidipine/Clevidipine_Ericsson1999v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 02:59 UTC</sub>
