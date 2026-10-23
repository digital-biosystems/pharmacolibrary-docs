<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;levocetirizine&quot;,&quot;href&quot;:&quot;drugs/drug_levocetirizine/&quot;},{&quot;label&quot;:&quot;Hussein_2005 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levocetirizine — `Levocetirizine_Hussein2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Levocetirizine apparent clearance and volume parameters caused double correction, rejecting the abstract-derived model record.

<div class="pk-model-meta" hidden drug="levocetirizine" model-id="Levocetirizine_Hussein2005_reference" status="rejected" stale="false" population="atopic children (12-24 months)" measured-compound="levocetirizine" parameterization="apparent" topology="1C"></div>

## Citation
Hussein Z, Pitsiu M, Majid O, Aarons L, de Longueville M, Stockis A. Retrospective population pharmacokinetics of levocetirizine in atopic children receiving cetirizine: the ETAC study. British journal of clinical pharmacology 59(1):28–37 (2005).
  ·  DOI: [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x)

## Population and dosing

**Population:** atopic children (12-24 months) · age group infant · n = &gt;.

**Dosed compound ≠ measured compound:** dosed cetirizine, measured levocetirizine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F increased linearly with weight by | CL/F | 0.044 | L/h/kg |
| V/F increased linearly with weight by | Vnorm | 0.639 | l kg(-1) |
| Population estimates in children with weights of 8 and 20 kg were | CL | 0.6 | l h(-1) |
| The estimated relative bioavailability was | Frel | 0.28 | in |
| AUC(ss), calculated in compliant subjects using posterior estimates of the final model, was | AUCSS | 1952 | ng·h/mL |
| in adults after intake of 5 mg oral solution | AUC/dose | 2036 | microg l(-1) h |
| ka (h−1) | kabs | 0.095 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Levocetirizine apparent clearance and volume parameters caused double correction, rejecting the abstract-derived model record.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. The apparent clearance and volume of distribution parameters caused double correction, violating parameter coherence. Fitted pharmacokinetic estimates were unavailable because only the abstract was read. Extracted — levocetirizine: CL/F 0.044 L/h/kg, Vnorm 0.639 l kg(-1), CL 0.6 l h(-1), Frel 0.28 in, AUCSS 1.95e+03 ng·h/mL, AUC/dose 2.04e+03 microg l(-1) h, kabs 0.095 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cetirizine, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F increased linearly with weight by | `Q27` · CL/F | 0.044 | L/h/kg | 8.556e-07 | m3/s | L/h | llm_confirmed (0.6) | Hussein_2005:abstract |
| V/F increased linearly with weight by | `Q352` · Vnorm | 0.639 | l kg(-1) | 0.04473 | m3 | l/kg | llm_corrected (0.6) | Hussein_2005:abstract |
| Population estimates in children with weights of 8 and 20 kg were | `Q22` · CL | 0.6 | l h(-1) | 1.667e-07 | m3/s | l/h | llm (0.6) | Hussein_2005:abstract |
| The estimated relative bioavailability was | `Q87` · Frel | 0.28 | in |  |  |  | llm_confirmed (0.6) | Hussein_2005:abstract |
| AUC(ss), calculated in compliant subjects using posterior estimates of the final model, was | `Q18` · AUCSS | 1952 | ng·h/mL |  |  | ng·h/mL | llm_corrected (0.6) | Hussein_2005:abstract |
| in adults after intake of 5 mg oral solution | `Q189` · AUC/dose | 2036 | microg l(-1) h |  |  | µg/(h·l) | llm (0.6) | Hussein_2005:abstract |
| ka (h−1) | `Q49` · kabs | 0.095 | h−1 | 2.639e-05 | 1/s | 1/h | review_gapfill (0.7) | Melander_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l h(-1) kg(-1)' (CL/F)
- dropped unlinked row (NIL): 'intercept' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'and' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract', 'Hussein_2005:abstract', 'Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'for' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- dropped unlinked row (NIL): 'with' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- unit_dimension_unknown: 'microg l(-1) h' (AUCSS)
- unit_dimension_unknown: 'microg l(-1) h' (AUC/dose)
- dropped unlinked row (NIL): 'CONCLUSIONS: The model suggests that administration of levocetirizine' — extend the ontology if this is a real PK parameter (source ['Hussein_2005:abstract'])
- implicit units: 'CL/F increased linearly with weight by' → L/h/kg (from the popPK convention: "The parameter is CL/F (clearance) and it 'increased linearly with weight by = 0.044'. This implies the parameter is weig")
- implicit units: 'AUC(ss), calculated in compliant subjects using posterior estimates of the final model, was' → ng·h/mL (from the popPK convention: 'AUCSS is the area under the concentration-time curve at steady state. In population PK for drugs dosed in milligrams (as')
- implicit units: 'in adults after intake of 5 mg oral solution' — the LLM proposed 'ng·h/mL/mg', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=levocetirizine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Melander_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hussein_2005_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc(ss) in compliant subjects]` |  | 1952 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(ss), calculated in compliant subjects using posterior estimates of the final model, was]` | 1952 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f increased linearly with weight by]` | 0.044 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f increased linearly with weight by]` |  | 0.044 | only_one_extracted |
| `gpt-oss-120b` | `parameters[estimated relative bioavailability]` |  | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[in adults after intake of 5 mg oral solution]` | 2036 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercept of]` |  | 0.244 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.095 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[population estimates in children with weights of 8 and 20 kg were]` | 0.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the estimated relative bioavailability was]` | 0.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f increased linearly with weight by]` | 0.639 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f increased linearly with weight by]` |  | 0.639 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cetirizine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levocetirizine | unknown | mismatch |

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
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  | ['Hussein_2005:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hussein_2005:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Hussein_2005:abstract'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Hussein_2005:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Melander_2025:review'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | microg l(-1) h | ['Hussein_2005:abstract'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.28 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.6 L/h | ['Hussein_2005:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.08 L/h | ['Hussein_2005:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevocetirizine%5D%20Levocetirizine_Hussein2005_reference&body=Drug%3A%20levocetirizine%0ARecord%3A%20Levocetirizine_Hussein2005_reference%0APaper%3A%20Hussein_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levocetirizine/Levocetirizine_Hussein2005_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:17 UTC</sub>
