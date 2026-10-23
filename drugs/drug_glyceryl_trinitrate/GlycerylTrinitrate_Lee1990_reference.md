<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;glyceryl trinitrate&quot;,&quot;href&quot;:&quot;drugs/drug_glyceryl_trinitrate/&quot;},{&quot;label&quot;:&quot;Lee_1990 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;GlycerylTrinitrate_ElNabarawy2019_reference&quot;,&quot;label&quot;:&quot;El-Nabarawy_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glyceryl_trinitrate/GlycerylTrinitrate_ElNabarawy2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;GlycerylTrinitrate_Kielbasa2019_reference&quot;,&quot;label&quot;:&quot;Kielbasa_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glyceryl_trinitrate/GlycerylTrinitrate_Kielbasa2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glyceryl trinitrate — `GlycerylTrinitrate_Lee1990_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

> The glyceryl trinitrate record was rejected because apparent parameters (CL/F 16 ml/min/kg, V/F 6.5 L) were combined with an explicit bioavailability Fab of 0.015, double-correcting for F; Fab's unit is also given as mg/kg instead of a fraction.

<div class="pk-model-meta" hidden drug="glyceryl trinitrate" model-id="GlycerylTrinitrate_Lee1990_reference" status="rejected" stale="false" population="conscious dogs" measured-compound="glyceryl_trinitrate" parameterization="apparent" topology="general_linear"></div>

## Citation
Lee FW, Salmonson T, Metzler CH, Benet LZ. Pharmacokinetics and pharmacodynamics of glyceryl trinitrate and its two dinitrate metabolites in conscious dogs. The Journal of pharmacology and experimental therapeutics 255(3):1222–1229 (1990).

## Population and dosing

**Population:** conscious dogs · condition healthy · age group adult · n = 6.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bioavailability of oral GTN (0.25 mg/kg) | Fab | 0.015 | mg/kg |
| half-lives | t1/2z | 45 | min |
| apparent clearances | CL/F | 16 | ml/min/kg |
| V/F | V/F | 6.5 | L |
| ka | kabs | 0.02 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The glyceryl trinitrate record was rejected because apparent parameters (CL/F 16 ml/min/kg, V/F 6.5 L) were combined with an explicit bioavailability Fab of 0.015, double-correcting for F; Fab's unit is also given as mg/kg instead of a fraction.**

The record, built from the abstract of Lee_1990 alone so summary statistics stood in for a fitted model, reports CL/F and V/F as bioavailability-adjusted apparent parameters while also carrying Fab = 0.015, which the coherence check flagged as a double correction for F. The bioavailability value 0.015 is labelled with unit mg/kg although it is defined as the fraction of drug reaching systemic circulation. A second reader disputed the parameterization (apparent vs mechanistic) and left the values 0.015, 16, 45 min, 0.02 h−1 and 6.5 L unmatched. Extracted — glyceryl trinitrate: Fab 0.015 mg/kg, t1/2z 45 min, CL/F 16 ml/min/kg, V/F 6.5 L, kabs 0.02 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bioavailability of oral GTN (0.25 mg/kg) | `Q40` · Fab | 0.015 | mg/kg |  |  |  | llm_confirmed (0.6) | Lee_1990:abstract |
| half-lives | `Q57` · t1/2z | 45 | min | 2700 | s | min | llm (0.6) | Lee_1990:abstract |
| apparent clearances | `Q27` · CL/F | 16 | ml/min/kg | 1.867e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Lee_1990:abstract |
| V/F | `Q76` · V/F | 6.5 | L | 0.0065 | m3 | L | review_gapfill (0.7) | Kielbasa_2019:review |
| ka | `Q49` · kabs | 0.02 | h−1 | 5.556e-06 | 1/s | 1/h | review_gapfill (0.7) | Kielbasa_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'apparent fractional GTN clearances to 1,2-GDN (CLapp,m1)' (captured trailing unit 'CLapp,m1' for child rows)
- dropped value-less row: 'apparent fractional GTN clearances to 1,3-GDN (CLapp,m2)' (captured trailing unit 'CLapp,m2' for child rows)
- dropped unlinked row (NIL): 'GTN doses' — extend the ontology if this is a real PK parameter (source ['Lee_1990:abstract'])
- dropped unlinked row (NIL): 'high i.v.' — extend the ontology if this is a real PK parameter (source ['Lee_1990:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=glyceryl_trinitrate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q76 (V/F) from Kielbasa_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kielbasa_2019's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lee_1990_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.015 |  | only_one_extracted |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[apparent clearances]` | 16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability of oral gtn]` | 0.015 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-lives]` | 45 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.02 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | 6.5 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Lee_1990:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kielbasa_2019:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lee_1990:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kielbasa_2019:review'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.015 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 67.2 L/h | ['Lee_1990:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 6.5 L | ['Kielbasa_2019:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglyceryl_trinitrate%5D%20GlycerylTrinitrate_Lee1990_reference&body=Drug%3A%20glyceryl_trinitrate%0ARecord%3A%20GlycerylTrinitrate_Lee1990_reference%0APaper%3A%20Lee_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glyceryl_trinitrate/GlycerylTrinitrate_Lee1990_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-16 13:48 UTC</sub>
