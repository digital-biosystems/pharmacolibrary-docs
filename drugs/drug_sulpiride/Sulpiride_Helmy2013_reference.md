<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/&quot;},{&quot;label&quot;:&quot;Helmy_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulpiride — `Sulpiride_Helmy2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The sulpiride two-compartment record was rejected because the peripheral volume V2/F is reported as 392.0 L/kg while the other volumes are in L, and the peripheral compartment has no input path from the dose since only k21 (0.68 h⁻¹) is given.

<div class="pk-model-meta" hidden drug="sulpiride" model-id="Sulpiride_Helmy2013_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="sulpiride" parameterization="apparent" topology="2C"></div>

## Citation
Helmy SA. Therapeutic drug monitoring and pharmacokinetic compartmental analysis of sulpiride double-peak absorption profile after oral administration to human volunteers. Biopharmaceutics & drug disposition 34(5):288–301 (2013).
  ·  DOI: [10.1002/bdd.1843](https://doi.org/10.1002/bdd.1843)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 16.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k | kel | 0.079 | h(-1) |
| t1/2 | t1/2z | 9.0 | h |
| Vd /F | V/F | 330.5 | L |
| Cl/F | CL/F | 38.2 | L/h |
| AUC0→∞ | AUC∞ | 1402.5 | ng.h/mL |
| k21 | k21 | 0.68 | h(-1) |
| ka1 | kabs | 0.7 | h(-1) |
| Vc/F | V1/F | 45.1 | L |
| α | λ1 | 33.3 | h(-1) |
| Vp,sul/F | V2/F | 392.0 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.929). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sulpiride two-compartment record was rejected because the peripheral volume V2/F is reported as 392.0 L/kg while the other volumes are in L, and the peripheral compartment has no input path from the dose since only k21 (0.68 h⁻¹) is given.**

The structural parameter V2/F carries the unit L/kg, inconsistent with V1/F (45.1 L) and V/F (330.5 L), a dimension mismatch on a structural parameter. The model structure lists a transfer from the peripheral to the central compartment (k21 = 0.68 h⁻¹) but no corresponding outward transfer, leaving the peripheral compartment unreachable from the dose. The record was built from the abstract alone, so the reported summary statistics (kel 0.079 h⁻¹, t1/2z 9.0 h, CL/F 38.2 L/h, AUC∞ 1402.5 ng·h/mL, kabs 0.7 h⁻¹, λ1 33.3 h⁻¹) stood in for a fitted model. Extracted — sulpiride: kel 0.079 h(-1), t1/2z 9 h, V/F 330 L, CL/F 38.2 L/h, AUC∞ 1.4e+03 ng.h/mL, k21 0.68 h(-1), kabs 0.7 h(-1), V1/F 45.1 L, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of vp,sul/f: this record has 392.0, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k | `Q47` · kel | 0.079 | h(-1) | 2.194e-05 | 1/s | 1/h | exact (1) | Helmy_2013:abstract |
| t1/2 | `Q57` · t1/2z | 9.0 | h | 3.24e+04 | s | h | exact (1) | Helmy_2013:abstract |
| Vd /F | `Q76` · V/F | 330.5 | L | 0.3305 | m3 | l | space_fold (0.95) | Helmy_2013:abstract |
| Cl/F | `Q27` · CL/F | 38.2 | L/h | 1.061e-05 | m3/s | l/h | exact (1) | Helmy_2013:abstract |
| AUC0→∞ | `Q17` · AUC∞ | 1402.5 | ng.h/mL |  |  | (h·ng)/ml | exact (1) | Helmy_2013:abstract |
| k21 | `Q302` · k21 | 0.68 | h(-1) | 0.0001889 | 1/s | 1/h | exact (1) | Helmy_2013:abstract |
| ka1 | `Q49` · kabs | 0.7 | h(-1) | 0.0001944 | 1/s | 1/h | llm (0.6) | Helmy_2013:abstract |
| Vc/F | `Q290` · V1/F | 45.1 | L | 0.0451 | m3 | l | exact (1) | Helmy_2013:abstract |
| α | `Q67` · λ1 | 33.3 | h(-1) |  |  | 1/h | exact (1) | Helmy_2013:abstract |
| Vp,sul/F | `Q82` · V2/F | 392.0 | L/kg | 27.44 | m3 | L | review_gapfill (0.7) | Yao_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka2', value 2.7) — already have one for this compound
- unit_dimension_mismatch: 'α' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q47 ('β', value 0.11) — already have one for this compound
- covariate category for tlag from footnote/prose kept as documentation only (['Helmy_2013:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulpiride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q82 (V2/F) from Yao_2019's review values (primary lacked it)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Helmy_2013_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[vp,sul/f]` | 392.0 |  | only_one_extracted |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q67 | fail | 1 / [time] | h(-1) | ['Helmy_2013:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Helmy_2013:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Yao_2019:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.2 L/h | ['Helmy_2013:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 45.1 L | ['Helmy_2013:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 330 L | ['Helmy_2013:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.74e+04 L | ['Yao_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulpiride%5D%20Sulpiride_Helmy2013_reference&body=Drug%3A%20sulpiride%0ARecord%3A%20Sulpiride_Helmy2013_reference%0APaper%3A%20Helmy_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulpiride/Sulpiride_Helmy2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 17:33 UTC</sub>
