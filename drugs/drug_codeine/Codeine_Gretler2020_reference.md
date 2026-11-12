<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Gretler_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Guay1987_reference&quot;,&quot;label&quot;:&quot;Guay_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Guay1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019v2_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Gretler2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> This record was reviewed on 2026-11-07 14:36 UTC (Rejected), but the paper was screened again on 2026-11-03 19:30 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Codeine model rejected because no metabolic rate constants were defined and the absorption unit could not be converted to SI.

<div class="pk-model-meta" hidden drug="codeine" model-id="Codeine_Gretler2020_reference" status="rejected" stale="true" population="Thoroughbred horses" measured-compound="codeine" parameterization="apparent" topology="general_linear"></div>

## Citation
Gretler SR, Finno CJ, McKemie DS, Kass PH, Knych HK. Metabolism, pharmacokinetics and selected pharmacodynamic effects of codeine following a single oral administration to horses. Veterinary anaesthesia and analgesia 47(5):694–704 (2020).
  ·  DOI: [10.1016/j.vaa.2020.04.004](https://doi.org/10.1016/j.vaa.2020.04.004)

## Population and dosing

**Population:** Thoroughbred horses · condition healthy · age group adult.

**Dosing:** 42 mg, oral, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka (hour−1) | kabs | 19.3 | hour−1 |
| CL/F (mL minute−1 kg−1) | CL/F | 45.9 | mL minute−1 kg−1 |
| CL2/F (mL minute−1 kg−1) | Q/F | 6.98 | mL minute−1 kg−1 |
| V/F (L kg−1) | V1/F | 2.07 | L kg−1 |
| V2/F (L kg−1) | V2/F | 0.916 | L kg−1 |
| Cmax (ng mL−1) | Cmax | 270.7 | ng mL−1 |
| tmax (hour) | tmax | 0.438 | hour |
| AUC (ng hour mL−1) | AUC | 286.5 | ng hour mL−1 |
| A (ng mL−1) | equation variable | 534.9 | ng mL−1 |
| α (hour−1) | λ1 | 1.76 | hour−1 |
| β (hour−1) | kel | 0.365 | hour−1 |
| t½α (hour) | t1/2α | 0.407 | hour |
| t½β (hour) | t1/2β | 2.00 | hour |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Codeine model rejected because no metabolic rate constants were defined and the absorption unit could not be converted to SI.**

All five metabolic links from codeine and morphine to their metabolites lack assigned rate constants. Additionally, the absorption rate constant unit (hour⁻¹) could not be converted to SI, leaving the parameter without a valid value. A second reader noted that the A value of 534.9 ng mL⁻¹ was extracted but should be null. Extracted — codeine: kabs 19.3 hour−1, CL/F 45.9 mL minute−1 kg−1, Q/F 6.98 mL minute−1 kg−1, V1/F 2.07 L kg−1, V2/F 0.916 L kg−1, Cmax 271 ng mL−1, tmax 0.438 hour, AUC 286 ng hour mL−1, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of a: this record has 534.9, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (hour−1) | `Q49` · kabs | 19.3 | hour−1 | 0.005361 | 1/s | 1/h | exact (1) | T4:row1:col1 |
| CL/F (mL minute−1 kg−1) | `Q27` · CL/F | 45.9 | mL minute−1 kg−1 |  |  | (ml·min-)/kg | exact (1) | T4:row2:col1 |
| CL2/F (mL minute−1 kg−1) | `Q69` · Q/F | 6.98 | mL minute−1 kg−1 |  |  | (ml·min-)/kg | exact (1) | T4:row3:col1 |
| V/F (L kg−1) | `Q290` · V1/F | 2.07 | L kg−1 | 0.1449 | m3 | l/kg | exact (1) | T4:row4:col1 |
| V2/F (L kg−1) | `Q82` · V2/F | 0.916 | L kg−1 | 0.06412 | m3 | l/kg | exact (1) | T4:row5:col1 |
| Cmax (ng mL−1) | `Q32` · Cmax | 270.7 | ng mL−1 |  |  | ng/ml | exact (1) | T4:row6:col1 |
| tmax (hour) | `Q56` · tmax | 0.438 | hour | 1577 | s | h | exact (1) | T4:row7:col1 |
| AUC (ng hour mL−1) | `Q88` · AUC | 286.5 | ng hour mL−1 |  |  | (h·ng)/ml | exact (1) | T4:row8:col1 |
| A (ng mL−1) | `Q900` · equation variable | 534.9 | ng mL−1 |  |  | ng/ml | llm (0.6) | T4:row9:col1 |
| α (hour−1) | `Q67` · λ1 | 1.76 | hour−1 |  |  | 1/h | exact (1) | T4:row11:col1 |
| β (hour−1) | `Q47` · kel | 0.365 | hour−1 | 0.0001014 | 1/s | 1/h | exact (1) | T4:row12:col1 |
| t½α (hour) | `Q59` · t1/2α | 0.407 | hour | 1465 | s | h | llm (0.6) | T4:row13:col1 |
| t½β (hour) | `Q60` · t1/2β | 2.00 | hour | 7200 | s | h | llm (0.6) | T4:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 6 row(s) → morphine (name 6)
- unit_dimension_unknown: 'mL minute−1 kg−1' (CL/F)
- unit_dimension_unknown: 'mL minute−1 kg−1' (Q/F)
- unit_dimension_unknown: 'ng hour mL−1' (AUC)
- dropped unlinked row (NIL): 'B (ng mL−1)' — extend the ontology if this is a real PK parameter (source ['T4:row10:col1'])
- unit_dimension_mismatch: 'α (hour−1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=codeine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 5 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 6 linked by role
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 5 transcribed (30 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 534.9 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T4:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T4:row6:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['T4:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T4:row1:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['T4:row7:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['T4:row13:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['T4:row14:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | hour−1 (1 / [time]) | ['T4:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T4:row5:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | mL minute−1 kg−1 | ['T4:row2:col1'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | mL minute−1 kg−1 | ['T4:row3:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | ng hour mL−1 | ['T4:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 145 L | ['T4:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 64.1 L | ['T4:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Gretler2020_reference&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Gretler2020_reference%0APaper%3A%20Gretler_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_codeine/Codeine_Gretler2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 19:30 UTC</sub>
