<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;lithium chloride&quot;,&quot;href&quot;:&quot;drugs/drug_lithium_chloride/&quot;},{&quot;label&quot;:&quot;Martin_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lithium chloride — `LithiumChloride_Martin2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> The lithium chloride record was rejected because the reported AUClast of 550 h*ng/mL is dimensionally inconsistent with the other lithium parameters, which are given in mmol/L (C0 = 2.19 mmol/L), so the structural parameter check failed on a unit mismatch.

<div class="pk-model-meta" hidden drug="lithium chloride" model-id="LithiumChloride_Martin2018_reference" status="rejected" stale="false" population="healthy adult horses" measured-compound="lithium" parameterization="mechanistic" topology="1C"></div>

## Citation
Martin LM, Bukoski AD, Whelchel DD, Evans TJ, Wiedmeyer CE, Black SJ et al. Pharmacokinetics of intravenous lithium chloride and assessment of agreement between two methods of lithium concentration measurement in the horse. Equine veterinary journal 50(4):537–543 (2018).
  ·  DOI: [10.1111/evj.12778](https://doi.org/10.1111/evj.12778)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult · n = 8.

**Dosed compound ≠ measured compound:** dosed lithium chloride, measured lithium.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| plasma Li+ concentration at time zero | C0 | 2.19 | mmol/L |
| terminal elimination half-life | t1/2z | 25.68 | h |
| area under the plasma concentration-time curve from time zero to the limit of quantification | AUClast | 550 | h*ng/mL |
| clearance | CL | 0.273 | mL/min/kg |
| mean residence time | MRT | 31.22 | h |
| volume of distribution at steady state | Vss | 511 | mL/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lithium chloride record was rejected because the reported AUClast of 550 h*ng/mL is dimensionally inconsistent with the other lithium parameters, which are given in mmol/L (C0 = 2.19 mmol/L), so the structural parameter check failed on a unit mismatch.**

The record for lithium in healthy adult horses, built from the abstract of Martin_2018 alone, reports C0 as 2.19 mmol/L while AUClast is given as 550 h*ng/mL; these concentration units do not match, producing a dimension mismatch on a structural parameter. The remaining parameters (t1/2z 25.68 h, CL 0.273 mL/min/kg, MRT 31.22 h, Vss 511 mL/kg) are internally consistent, but the abstract-only source means summary statistics stood in for a fitted model. Extracted — lithium chloride: C0 2.19 mmol/L, t1/2z 25.7 h, AUClast 550 h*ng/mL, CL 0.273 mL/min/kg, MRT 31.2 h, Vss 511 mL/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lithium chloride, the second reading lithium_chloride; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| plasma Li+ concentration at time zero | `Q86` · C0 | 2.19 | mmol/L |  |  | mM/l | llm (0.6) | Martin_2018:abstract |
| terminal elimination half-life | `Q57` · t1/2z | 25.68 | h | 9.245e+04 | s | h | llm (0.6) | Martin_2018:abstract |
| area under the plasma concentration-time curve from time zero to the limit of quantification | `Q74` · AUClast | 550 | h*ng/mL |  |  | h*ng/mL | llm (0.6) | Martin_2018:abstract |
| clearance | `Q22` · CL | 0.273 | mL/min/kg | 3.185e-07 | m3/s | ml/(min·kg) | exact (1) | Martin_2018:abstract |
| mean residence time | `Q53` · MRT | 31.22 | h | 1.124e+05 | s | h | exact (1) | Martin_2018:abstract |
| volume of distribution at steady state | `Q65` · Vss | 511 | mL/kg | 0.03577 | m3 | ml/kg | llm_corrected (0.6) | Martin_2018:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'plasma Li+ concentration at time zero' → Q86 (unit '[substance] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'mmol/L min' (AUClast)
- implicit units: 'area under the plasma concentration-time curve from time zero to the limit of quantification' → h*ng/mL (from the popPK convention: 'No unit stated in text or footnotes; AUC is conventionally reported as concentration x time (e.g., ng/mL x h), consisten')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lithium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'lithium' ('lithium') — left in mass units
- molar mass: none found for 'lithium' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Martin_2018_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['lithium_chloride', 'lithium', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | lithium chloride | lithium_chloride | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Martin_2018:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Martin_2018:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Martin_2018:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Martin_2018:abstract'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  | ['Martin_2018:abstract'] |
| C5_dimension_Q86 | fail | [substance] / [length] ** 3 | mmol/L | ['Martin_2018:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.273 | ['Martin_2018:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.15 L/h | ['Martin_2018:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 35.8 L | ['Martin_2018:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blithium_chloride%5D%20LithiumChloride_Martin2018_reference&body=Drug%3A%20lithium_chloride%0ARecord%3A%20LithiumChloride_Martin2018_reference%0APaper%3A%20Martin_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lithium_chloride/LithiumChloride_Martin2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:46 UTC</sub>
