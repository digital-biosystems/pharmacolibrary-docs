<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Nelson_1980 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Nelson1980_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected because Km has no unit, preventing SI conversion, despite being a structural parameter in the model.

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Nelson1980_reference" status="rejected" stale="false" population="advanced cancer patients" measured-compound="vinblastine" parameterization="apparent" topology="1C"></div>

## Citation
Nelson RL, Dyke RW, Root MA. Comparative pharmacokinetics of vindesine, vincristine and vinblastine in patients with cancer. Cancer treatment reviews 7 Suppl 1:17–24 (1980).
  ·  DOI: [10.1016/s0305-7372(80)80003-x](https://doi.org/10.1016/s0305-7372(80)80003-x)

## Population and dosing

**Population:** advanced cancer patients · condition cancer · age group adult · n = 12.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| h, alpha, h | λ1 | 0.037 | h |
| t t beta, h | t1/2β | 0.912 | h |
| t; gamma, h | t1/2γ | 24.2 | h |
| k31, h-l | k31 | 0.098 | 1/h |
| km~, h-t | Km | 0.527 |  |
| t~., \|/kg | V/F | 0.054 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because Km has no unit, preventing SI conversion, despite being a structural parameter in the model.**

The Michaelis constant Km is listed with a value of 0.527 but lacks a unit, which prevented conversion to SI units for dimensional checking. This unit absence caused the record to fail a dimension consistency check on this structural parameter. Additionally, the second reader disputed the model's apparent parameterization, arguing it should be mechanistic, and noted several missing parameter values that the current record lists as null. Extracted — vinblastine: λ1 0.037 h, t1/2β 0.912 h, t1/2γ 24.2 h, k31 0.098 1/h, Km 0.527, V/F 0.054.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| h, alpha, h | `Q67` · λ1 | 0.037 | h |  |  | h | llm_confirmed (0.6) | tab_0:row4:col1 |
| t t beta, h | `Q60` · t1/2β | 0.912 | h | 3283 | s | h | llm_corrected (0.6) | tab_0:row5:col1 |
| t; gamma, h | `Q89` · t1/2γ | 24.2 | h | 8.712e+04 | s | h | llm_corrected (0.6) | tab_0:row6:col1 |
| k31, h-l | `Q304` · k31 | 0.098 | 1/h | 2.722e-05 | 1/s | 1/h | llm_confirmed (0.6) | tab_0:row10:col1 |
| km~, h-t | `Q1` · Km | 0.527 |  |  |  |  | llm_confirmed (0.6) | tab_0:row11:col1 |
| t~., \|/kg | `Q76` · V/F | 0.054 |  |  |  |  | llm (0.6) | tab_0:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'h, alpha, h' → Q67 (unit '[time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'kt~, h -l' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1'])
- dropped unlinked row (NIL): 'k2h h -I' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1'])
- dropped unlinked row (NIL): 'kta, h-t' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- dropped unlinked row (NIL): 'VI, gamma, l/kg' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1'])
- implicit units: 'k31, h-l' → 1/h (from the paper text: 'Table 3 displays rate constants (labeled t~ alpha, t; beta, etc. which correspond to k values in context) with the unit ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vinblastine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[h, alpha].parameter_id` | Q67 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[kt-, h -l]` |  | 12.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kta, h-t]` |  | 8.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t-., |/kg].parameter_id` | Q76 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[vi, gamma]` |  | 8.84 | only_one_extracted |

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
| C5_dimension_Q304 | pass | 1 / [time] |  | ['tab_0:row10:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_0:row5:col1'] |
| C5_dimension_Q67 | fail | [time] | h | ['tab_0:row4:col1'] |
| C5_dimension_Q89 | pass | [time] |  | ['tab_0:row6:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['tab_0:row11:col1'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['tab_0:row12:col1'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Nelson1980_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Nelson1980_reference%0APaper%3A%20Nelson_1980%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Nelson1980_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 18:40 UTC</sub>
