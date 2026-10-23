<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Chiang_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Chiang1986_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-09 06:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clonidine record was rejected because the ocular clearance of 14.9 microliter/min and steady-state volume of distribution of 0.53 ml fall outside physiological plausibility, suggesting a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Chiang1986_reference" status="rejected" stale="true" population="New Zealand white rabbits" measured-compound="clonidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Chiang CH, Schoenwald RD. Ocular pharmacokinetic models of clonidine-3H hydrochloride. Journal of pharmacokinetics and biopharmaceutics 14(2):175–211 (1986).
  ·  DOI: [10.1007/BF01065260](https://doi.org/10.1007/BF01065260)

## Population and dosing

**Population:** rabbits · condition healthy · age group adult.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| corneal absorption rate constant ka | kabs | 0.00139 | min-1 |
| aqueous humor elimination rate constant k10 | kel | 0.0658 | min-1 |
| mean residence time MRTd | MRT | 35.6 | min |
| apparent steady-state volume of distribution Vss | Vss | 0.53 | ml |
| ocular clearance Qe | CL | 14.9 | microliter/min |
| mean volume of distribution | V | 2.8 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clonidine record was rejected because the ocular clearance of 14.9 microliter/min and steady-state volume of distribution of 0.53 ml fall outside physiological plausibility, suggesting a unit or scale extraction error.**

The record for clonidine in rabbits was built from the paper's abstract only, so reported summary statistics stood in for a fitted model. The clearance/volume check failed: the ocular clearance Qe of 14.9 microliter/min and the apparent steady-state volume of distribution Vss of 0.53 ml were judged implausible in magnitude, consistent with a unit or scale extraction error. A second reader returned null for all five parameter values (kabs 0.00139 min-1, kel 0.0658 min-1, MRT 35.6 min, Vss 0.53 ml, CL 14.9 microliter/min), so the disagreement on the values could not be resolved. Extracted — clonidine: kabs 0.00139 min-1, kel 0.0658 min-1, MRT 35.6 min, Vss 0.53 ml, CL 14.9 microliter/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonidine, the second reading clonidine hydrochloride; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| corneal absorption rate constant ka | `Q49` · kabs | 0.00139 | min-1 | 2.317e-05 | 1/s | 1/min | boundary_llm_dim_refused (0.8) | Chiang_1986:abstract |
| aqueous humor elimination rate constant k10 | `Q47` · kel | 0.0658 | min-1 | 0.001097 | 1/s | 1/min | llm_confirmed (0.6) | Chiang_1986:abstract |
| mean residence time MRTd | `Q53` · MRT | 35.6 | min | 2136 | s | min | llm_confirmed (0.6) | Chiang_1986:abstract |
| apparent steady-state volume of distribution Vss | `Q65` · Vss | 0.53 | ml | 5.3e-07 | m3 | ml | llm_corrected (0.6) | Chiang_1986:abstract |
| ocular clearance Qe | `Q22` · CL | 14.9 | microliter/min | 2.483e-10 | m3/s | µl/min | llm_confirmed (0.6) | Chiang_1986:abstract |
| mean volume of distribution | `Q61` · V | 2.8 | L/kg | 0.196 | m3 | L | review_gapfill (0.7) | Tang_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (ocular clearance Qe)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Tang_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chiang_1986_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent steady-state volume of distribution vss]` | 0.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aqueous humor elimination rate constant k10]` | 0.0658 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[corneal absorption rate constant ka]` | 0.00139 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean residence time mrtd]` | 35.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean volume of distribution]` | 2.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ocular clearance qe]` | 14.9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clonidine | clonidine hydrochloride | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Chiang_1986:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Chiang_1986:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chiang_1986:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Chiang_1986:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tang_2021:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Chiang_1986:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.9 | ['Chiang_1986:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000894 L/h | ['Chiang_1986:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 196 L | ['Tang_2021:review'] |
| C9_phys_window_Q65 | fail | volume within physiological range | 0.00053 L | ['Chiang_1986:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Chiang1986_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Chiang1986_reference%0APaper%3A%20Chiang_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clonidine/Clonidine_Chiang1986_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-09 06:08 UTC</sub>
