<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Gao_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# exenatide — `Exenatide_Gao2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> The receptor binding association rate constant for exenatide has an invalid unit, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="exenatide" model-id="Exenatide_Gao2011_reference" status="rejected" stale="false" population="type 2 diabetic Goto-Kakizaki rats" measured-compound="exendin-4" parameterization="mechanistic" topology="1C"></div>

## Citation
Gao W, Jusko WJ. Pharmacokinetic and pharmacodynamic modeling of exendin-4 in type 2 diabetic Goto-Kakizaki rats. The Journal of pharmacology and experimental therapeutics 336(3):881–890 (2011).
  ·  DOI: [10.1124/jpet.110.175752](https://doi.org/10.1124/jpet.110.175752)

## Population and dosing

**Population:** type 2 diabetic Goto-Kakizaki rats · condition type 2 diabetes.

**Dosing:** 35000, 70000, 350000, 700000 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V c (ml/kg) | V | 90.5 | ml/kg |
| k on ͓l/(nM ⅐ min)͔ Second-order receptor binding | kon | 0.0794 | 38 |
| k off (min Ϫ1 ) | koff | 0.0150 | 38 |
| k int (min Ϫ1 ) | kint | 0.00358 | 38 |
| R tot (nM) | Rtot | 5.17 | nM |
| F | Fab | 0.507 |  |
| CL | CL | 0.059 | L/h |
| ka | kabs | 0.006 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.765). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The receptor binding association rate constant for exenatide has an invalid unit, causing a dimension mismatch.**

The association rate constant is recorded with a unit value of '38', which is not a recognized pharmacokinetic unit. This invalid unit prevented the conversion to SI units, triggering a dimension mismatch check on the structural parameter. The record was rejected due to this inability to validate the parameter's physical dimensions. Extracted — exenatide: V 90.5 ml/kg, kon 0.0794 38, koff 0.015 38, kint 0.00358 38, Rtot 5.17 nM, Fab 0.507, CL 0.059 L/h, kabs 0.006 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading none → not captured (not captured); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V c (ml/kg) | `Q61` · V | 90.5 | ml/kg | 0.006335 | m3 | ml/kg | space_fold (0.95) | tab_0:row2:col2 |
| k on ͓l/(nM ⅐ min)͔ Second-order receptor binding | `Q329` · kon | 0.0794 | 38 |  |  | 38 | llm (0.6) | tab_0:row3:col2, tab_0:row3:col2 |
| k off (min Ϫ1 ) | `Q330` · koff | 0.0150 | 38 |  |  | 38 | space_fold (0.95) | tab_0:row5:col2, tab_0:row5:col2 |
| k int (min Ϫ1 ) | `Q334` · kint | 0.00358 | 38 |  |  | 38 | space_fold (0.95) | tab_0:row7:col2, tab_0:row7:col2 |
| R tot (nM) | `Q333` · Rtot | 5.17 | nM |  |  | nM | space_fold (0.95) | tab_0:row8:col2 |
| F | `Q40` · Fab | 0.507 |  |  |  |  | exact (1) | tab_0:row11:col2, tab_0:row11:col2 |
| CL | `Q22` · CL | 0.059 | L/h | 1.639e-08 | m3/s | L/h | review_gapfill (0.7) | Choi_2025:review |
| ka | `Q49` · kabs | 0.006 | h-1 | 1.667e-06 | 1/s | 1/h | review_gapfill (0.7) | Choi_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k on ͓l/(nM ⅐ min)͔ Second-order receptor binding' → Q329 (unit 'dimensionless' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- unit_dimension_mismatch: 'k off (min Ϫ1 )' → Q330 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k int (min Ϫ1 )' → Q334 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'R tot (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped PD-category row 'k deg (min Ϫ1 )' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row10:col2', 'tab_0:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exendin-4
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c (ml/kg)' is the general volume)
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Choi_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Choi_2025's review values (primary lacked it)

**Extraction notes:**
- table tab_0: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.765 (13/17 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[clearance]` | 12.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c].parameter_id` | Q61 | Q63 | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Choi_2025:review'] |
| C5_dimension_Q329 | fail | dimensionless | 38 | ['tab_0:row3:col2', 'tab_0:row3:col2'] |
| C5_dimension_Q330 | fail | dimensionless | 38 | ['tab_0:row5:col2', 'tab_0:row5:col2'] |
| C5_dimension_Q333 | fail | [length] | nM | ['tab_0:row8:col2'] |
| C5_dimension_Q334 | fail | dimensionless | 38 | ['tab_0:row7:col2', 'tab_0:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Choi_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.059 | ['Choi_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.059 L/h | ['Choi_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.33 L | ['tab_0:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bexenatide%5D%20Exenatide_Gao2011_reference&body=Drug%3A%20exenatide%0ARecord%3A%20Exenatide_Gao2011_reference%0APaper%3A%20Gao_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_exenatide/Exenatide_Gao2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:39 UTC</sub>
