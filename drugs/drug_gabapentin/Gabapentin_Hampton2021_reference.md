<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;gabapentin&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/&quot;},{&quot;label&quot;:&quot;Hampton_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gabapentin_Siao2010_reference&quot;,&quot;label&quot;:&quot;Siao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gabapentin/Gabapentin_Siao2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gabapentin — `Gabapentin_Hampton2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 06:11 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The gabapentin record from Hampton_2021 was rejected because the clearance parameter carries a dimensionally invalid unit (kg*min) instead of a flow unit, a structural-parameter dimension mismatch.

<div class="pk-model-meta" hidden drug="gabapentin" model-id="Gabapentin_Hampton2021_reference" status="rejected" stale="true" population="healthy adult Duroc pigs" measured-compound="gabapentin" parameterization="mechanistic" topology="1C"></div>

## Citation
Hampton CE, Queiroz-Williams P, Oubre MJ, Martin A, Gisclair AT, Pypendop BH. Pharmacokinetics of oral and compounded intravenous gabapentin in Duroc swine (Sus Scrofa). Journal of veterinary pharmacology and therapeutics 44(5):776–782 (2021).
  ·  DOI: [10.1111/jvp.12977](https://doi.org/10.1111/jvp.12977)

## Population and dosing

**Population:** healthy adult Duroc pigs · condition healthy · age group adult · n = 6.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of the central compartment | V | 170 | ml/kg |
| clearance | CL | 1.2 | kg*min |
| calculated volume of distribution at steady-state | Vss | 594 | ml/kg |
| terminal half-life | t1/2z | 360 | min |
| absorption half-life | t1/2ka | 58 | min |
| estimated maximal plasma concentration | Cmax | 9155 | ng/ml |
| time to reach maximal plasma concentration | tmax | 194 | min |
| oral bioavailability | Fab | 47 | % |
| K01 (1/hr) | kabs | 5.24 | 1/hr |
| TLAG (hr) | tlag | 0.45 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.13). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The gabapentin record from Hampton_2021 was rejected because the clearance parameter carries a dimensionally invalid unit (kg*min) instead of a flow unit, a structural-parameter dimension mismatch.**

The clearance for gabapentin is recorded as 1.2 with unit 'kg*min', which is not a valid unit for a clearance parameter and fails the dimensional check on structural parameters. The record was also built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. A second reader returned null for all extracted values, including clearance 1.2, Vss 594 ml/kg, terminal half-life 360 min, and bioavailability 47%, leaving the extraction unconfirmed. Extracted — gabapentin: V 170 ml/kg, CL 1.2 kg*min, Vss 594 ml/kg, t1/2z 360 min, t1/2ka 58 min, Cmax 9.16e+03 ng/ml, tmax 194 min, Fab 47 %, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has gabapentin, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of the central compartment | `Q61` · V | 170 | ml/kg | 0.0119 | m3 | ml/kg | exact (1) | Hampton_2021:abstract |
| clearance | `Q22` · CL | 1.2 | kg*min |  |  | min·kg | exact (1) | Hampton_2021:abstract |
| calculated volume of distribution at steady-state | `Q65` · Vss | 594 | ml/kg | 0.04158 | m3 | ml/kg | llm_corrected (0.6) | Hampton_2021:abstract |
| terminal half-life | `Q57` · t1/2z | 360 | min | 2.16e+04 | s | min | llm (0.6) | Hampton_2021:abstract |
| absorption half-life | `Q95` · t1/2ka | 58 | min | 3480 | s | min | llm_corrected (0.6) | Hampton_2021:abstract |
| estimated maximal plasma concentration | `Q32` · Cmax | 9155 | ng/ml |  |  | ng/ml | llm (0.6) | Hampton_2021:abstract |
| time to reach maximal plasma concentration | `Q56` · tmax | 194 | min | 1.164e+04 | s | min | llm (0.6) | Hampton_2021:abstract |
| oral bioavailability | `Q40` · Fab | 47 | % |  |  |  | exact (1) | Hampton_2021:abstract |
| K01 (1/hr) | `Q49` · kabs | 5.24 | 1/hr | 0.001456 | 1/s | 1/h | review_gapfill (0.7) | Adrian_2018:review |
| TLAG (hr) | `Q83` · tlag | 0.45 | hr | 1620 | s | h | review_gapfill (0.7) | Adrian_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'clearance' → Q22 (unit '[mass] * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gabapentin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of the central compartment' is the general volume)
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adrian_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Adrian_2018's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hampton_2021_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.13 (3/23 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption half-life]` | 58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption half-life]` |  | 58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[calculated volume of distribution at steady-state]` | 594 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[calculated volume of distribution at steady-state]` |  | 594 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 1.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated maximal plasma concentration]` | 9155 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated maximal plasma concentration]` |  | 9155 | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated oral bioavailability]` |  | 47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k01]` | 5.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability]` | 47 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` | 360 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` |  | 360 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to reach maximal plasma concentration]` | 194 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to reach maximal plasma concentration]` |  | 194 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment]` | 170 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment]` |  | 170 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | gabapentin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | gabapentin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [mass] * [time] | kg*min | ['Hampton_2021:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Hampton_2021:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adrian_2018:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Hampton_2021:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hampton_2021:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hampton_2021:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Hampton_2021:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Adrian_2018:review'] |
| C5_dimension_Q95 | pass | [time] |  | ['Hampton_2021:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.2 | ['Hampton_2021:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.9 L | ['Hampton_2021:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 41.6 L | ['Hampton_2021:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgabapentin%5D%20Gabapentin_Hampton2021_reference&body=Drug%3A%20gabapentin%0ARecord%3A%20Gabapentin_Hampton2021_reference%0APaper%3A%20Hampton_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gabapentin/Gabapentin_Hampton2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:11 UTC</sub>
