<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nortriptyline&quot;,&quot;href&quot;:&quot;drugs/drug_nortriptyline/&quot;},{&quot;label&quot;:&quot;Usach_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nortriptyline — `Nortriptyline_Usach2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-06 23:52 UTC (Rejected), but the paper was screened again on 2026-10-07 18:49 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The nortriptyline rat percutaneous-gel model was rejected because its clearance and volume parameters fall outside physiological plausibility, suggesting a unit or scale extraction error (CL 1580 mL/h, V1 488 mL, VT 1568 mL).

<div class="pk-model-meta" hidden drug="nortriptyline" model-id="Nortriptyline_Usach2022_reference" status="rejected" stale="true" population="rats" measured-compound="nortriptyline" parameterization="mechanistic" topology="2C"></div>

## Citation
Usach I, Di Marco S, Díez O, Alós M, Peris JE. The Usefulness of In Vitro Percutaneous Absorption Experiments Applying the Infinite Dose Technique to Predict In Vivo Plasma Levels: Comparison of Model-Predicted and Observed Plasma Concentrations of Nortriptyline in Rats. Pharmaceutics 14(7) (2022).
  ·  DOI: [10.3390/pharmaceutics14071457](https://doi.org/10.3390/pharmaceutics14071457)

## Population and dosing

**Population:** rats · condition healthy · n = &gt;=4.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (mL/h) | CL | 1580 | mL/h |
| V1 (mL) | V1 | 488 | mL |
| VT (mL) | V | 1568 | mL |
| ka | kabs | 0.24 | h−1 |
| tlag | tlag | 1.33 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nortriptyline rat percutaneous-gel model was rejected because its clearance and volume parameters fall outside physiological plausibility, suggesting a unit or scale extraction error (CL 1580 mL/h, V1 488 mL, VT 1568 mL).**

The record reports total clearance of 1580 mL/h, a central volume of 488 mL and a steady-state volume of 1568 mL for nortriptyline in rats, magnitudes flagged as physiologically implausible and consistent with a unit or scale extraction error. The structure is a one-compartment model (1C), yet two-compartment parameters are also present: intercompartmental clearance Q of 3340 mL/h and peripheral volume VT of 1568 mL, which exceeds the central volume. Absorption parameters (ka 0.24 h−1, tlag 1.33 h) were extracted without issue. Extracted — nortriptyline: CL 1.58e+03 mL/h, V 488 mL, Vss 1.57e+03 mL, Q 3.34e+03 mL/h, kabs 0.24 h−1, tlag 1.33 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.24, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (mL/h) | `Q22` · CL | 1580 | mL/h | 4.389e-07 | m3/s | ml/h | exact (1) | pharmaceutics-14-01457-t001:row1:col1 |
| V1 (mL) | `Q63` · V1 | 488 | mL | 0.000488 | m3 | ml | exact (1) | pharmaceutics-14-01457-t001:row2:col1 |
| VT (mL) | `Q61` · V | 1568 | mL | 0.001568 | m3 | ml | llm (0.6) | pharmaceutics-14-01457-t001:row3:col1 |
| ka | `Q49` · kabs | 0.24 | h−1 | 6.667e-05 | 1/s | 1/h | review_gapfill (0.7) | Tylutki_2018:review |
| tlag | `Q83` · tlag | 1.33 | h | 4788 | s | h | review_gapfill (0.7) | Tylutki_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLic (mL/h)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01457-t001:row4:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nortriptyline
- gap-filled Q49 (kabs) from Tylutki_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tylutki_2018's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 1.33 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-01457-t001:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tylutki_2018:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-14-01457-t001:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-14-01457-t001:row2:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tylutki_2018:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1580 | ['pharmaceutics-14-01457-t001:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.58 L/h | ['pharmaceutics-14-01457-t001:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.57 L | ['pharmaceutics-14-01457-t001:row3:col1'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.488 L | ['pharmaceutics-14-01457-t001:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnortriptyline%5D%20Nortriptyline_Usach2022_reference&body=Drug%3A%20nortriptyline%0ARecord%3A%20Nortriptyline_Usach2022_reference%0APaper%3A%20Usach_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nortriptyline/Nortriptyline_Usach2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:49 UTC</sub>
