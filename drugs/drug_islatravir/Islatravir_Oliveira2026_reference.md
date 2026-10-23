<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Islatravir&quot;,&quot;href&quot;:&quot;drugs/drug_islatravir/&quot;},{&quot;label&quot;:&quot;Oliveira_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Islatravir — `Islatravir_Oliveira2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> Isaltavir's macro-rate constant Alpha (0.6) was rejected due to a dimension mismatch in its structural parameter.

<div class="pk-model-meta" hidden drug="Islatravir" model-id="Islatravir_Oliveira2026_reference" status="rejected" stale="false" population="NZW rabbits" measured-compound="islatravir" parameterization="mechanistic" topology="1C"></div>

## Citation
Oliveira D, Cruz D, Levin LPK, Li L, Norton CA, Dobek G et al. Harnessing Pharmacokinetic Modeling to Develop a Long-Acting Subcutaneous HIV Treatment Platform for Young Children. Pharmaceutics 18(5) (2026).
  ·  DOI: [10.3390/pharmaceutics18050522](https://doi.org/10.3390/pharmaceutics18050522)

## Population and dosing

**Population:** NZW rabbits · condition healthy · n = 30.

**Dosing:** 52.5, 350, 2100 mg, iv, single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng/mL) | equation variable | 25323.5 | ng/mL |
| Alpha (1/h) | λ1 | 0.6 | 1/h |
| Beta (1/h) | kel | 0.1 | 1/h |
| Ka | kabs | 12.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Isaltavir's macro-rate constant Alpha (0.6) was rejected due to a dimension mismatch in its structural parameter.**

The record lists the macro-rate constant Alpha as 0.6 1/h, representing the fast disposition phase. A reported unit for this structural parameter could not be converted to standard SI units. Consequently, the model lacked a valid physical value for this parameter, leading to its rejection. Extracted — islatravir: λ1 0.6 1/h, kel 0.1 1/h, kabs 12 h−1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q900` · equation variable | 25323.5 | ng/mL |  |  | ng/ml | llm (0.6) | Oliveira_2026_table_p9_2:row0:col2, Oliveira_2026_table_p9_2:row4:col2, Oliveira_2026_table_p9_2:row8:col2 |
| Alpha (1/h) | `Q67` · λ1 | 0.6 | 1/h |  |  | 1/h | exact (1) | Oliveira_2026_table_p9_2:row1:col2, Oliveira_2026_table_p9_2:row5:col2, Oliveira_2026_table_p9_2:row9:col2 |
| Beta (1/h) | `Q47` · kel | 0.1 | 1/h | 2.778e-05 | 1/s | 1/h | exact (1) | Oliveira_2026_table_p9_2:row3:col2, Oliveira_2026_table_p9_2:row7:col2, Oliveira_2026_table_p9_2:row11:col2 |
| Ka | `Q49` · kabs | 12.0 | h−1 | 0.003333 | 1/s | 1/h | review_gapfill (0.7) | Kinsale_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'A (ng/mL)'; source reconciliation required
- table representations disagree for 'Alpha (1/h)'; source reconciliation required
- table representations disagree for 'B (ng/mL)'; source reconciliation required
- table representations disagree for 'Beta (1/h)'; source reconciliation required
- unit_dimension_mismatch: 'Alpha (1/h)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'B (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Oliveira_2026_table_p9_2:row2:col2', 'Oliveira_2026_table_p9_2:row6:col2', 'Oliveira_2026_table_p9_2:row10:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=islatravir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Kinsale_2024's review values (primary lacked it)

**Extraction notes:**
- table Oliveira_2026_table_p9_2: ambiguous_numeric_format
- table pharmaceutics-18-00522-t003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Oliveira_2026_table_p9_2:row3:col2', 'Oliveira_2026_table_p9_2:row7:col2', 'Oliveira_2026_table_p9_2:row11:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kinsale_2024:review'] |
| C5_dimension_Q67 | fail | 1 / [time] | 1/h | ['Oliveira_2026_table_p9_2:row1:col2', 'Oliveira_2026_table_p9_2:row5:col2', 'Oliveira_2026_table_p9_2:row9:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bislatravir%5D%20Islatravir_Oliveira2026_reference&body=Drug%3A%20islatravir%0ARecord%3A%20Islatravir_Oliveira2026_reference%0APaper%3A%20Oliveira_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_islatravir/Islatravir_Oliveira2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:23 UTC</sub>
