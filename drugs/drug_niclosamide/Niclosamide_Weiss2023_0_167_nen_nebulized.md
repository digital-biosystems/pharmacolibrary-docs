<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/&quot;},{&quot;label&quot;:&quot;Weiss_2023 \u00b7 0_167_nen_nebulized&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niclosamide — `Niclosamide_Weiss2023_0_167_nen_nebulized`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The niclosamide sheep record was rejected because it reports no distribution volume and no clearance — it is an exposure/outcome summary, not a compartmental population PK model — and the dose parameter D1 (0.27 mg/kg) is actually a zero-order input duration, a dimension mismatch.

<div class="pk-model-meta" hidden drug="niclosamide" model-id="Niclosamide_Weiss2023_0_167_nen_nebulized" status="rejected" stale="false" population="sheep" measured-compound="niclosamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Weiss A, Bischof RJ, Landersdorfer CB, Nguyen TH, Davies A, Ibrahim J et al. Single-dose pharmacokinetics and lung function of nebulized niclosamide ethanolamine in sheep. Pharmaceutical research 40(8):1915–1925 (2023).
  ·  DOI: [10.1007/s11095-023-03559-0](https://doi.org/10.1007/s11095-023-03559-0)

## Population and dosing

**Population:** sheep · condition healthy · age group adult · n = 5.

**Dosing:** 18.9, 53.2, 98 mg, nebulized, single.

**Dosed compound ≠ measured compound:** dosed niclosamide (niclosamide ethanolamine), measured niclosamide.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dose (mg/kg) | D1 | 0.27 | mg/kg |
| Cmax (ng/mL) | Cmax | 76.6 | ng/mL |
| Tmax (min) | tmax | 27.1 | min |
| AUC0-t (ng/mLxhr) | AUCt | 35.9 | ng/mL*h |
| kα | kabs | 20.9 | 1/h |
| T1/2α (h) | t1/2α | 0.041 | h |
| T1/2β (h) | t1/2β | 0.2 | h |
| Elimination T1/2 (h) | t1/2z | 14 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The niclosamide sheep record was rejected because it reports no distribution volume and no clearance — it is an exposure/outcome summary, not a compartmental population PK model — and the dose parameter D1 (0.27 mg/kg) is actually a zero-order input duration, a dimension mismatch.**

The record contains only non-compartmental summary statistics for niclosamide in sheep (Cmax 76.6 ng/mL, Tmax 27.1 min, AUC0-t 35.9 ng/mL*h, half-lives 0.041 h, 0.2 h and 14 h) with no volume of distribution and no clearance or elimination rate, so it cannot form a compartmental population PK model. The parameter D1, labeled 'Dose (mg/kg)' with value 0.27 mg/kg, in fact means the duration of a zero-order input into the dosing compartment, which is a dimension mismatch on a structural parameter. The absolute bioavailability Fab was reported without a value. Additionally, the unit ng/mL*h could not be converted to SI, so that parameter reached the model builder without an SI value. Extracted — niclosamide: D1 0.27 mg/kg, Cmax 76.6 ng/mL, tmax 27.1 min, AUCt 35.9 ng/mL*h, kabs 20.9 1/h, t1/2α 0.041 h, t1/2β 0.2 h, t1/2z 14 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has niclosamide (niclosamide ethanolamine), the second reading niclosamide; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dose (mg/kg) | `Q310` · D1 | 0.27 | mg/kg |  |  | mg/kg | llm (0.6) | Tab2:row0:col3, Tab2:row0:col8 |
| Cmax (ng/mL) | `Q32` · Cmax | 76.6 | ng/mL |  |  | ng/ml | exact (1) | Tab2:row1:col3, Tab2:row1:col8 |
| Tmax (min) | `Q56` · tmax | 27.1 | min | 1626 | s | min | exact (1) | Tab2:row2:col3 |
| AUC0-t (ng/mLxhr) | `Q19` · AUCt | 35.9 | ng/mL*h |  |  | ng/mL*h | exact (1) | Tab2:row3:col3, Tab2:row3:col8 |
| kα | `Q49` · kabs | 20.9 | 1/h | 0.005806 | 1/s | 1/h | llm (0.6) | Tab2:row4:col3, Tab2:footnote |
| T1/2α (h) | `Q59` · t1/2α | 0.041 | h | 147.6 | s | h | exact (1) | Tab2:row6:col3 |
| T1/2β (h) | `Q60` · t1/2β | 0.2 | h | 720 | s | h | exact (1) | Tab2:row7:col3 |
| Elimination T1/2 (h) | `Q57` · t1/2z | 14 | h | 5.04e+04 | s | h | exact (1) | Tab2:row8:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Dose (mg/kg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'ng/mLxhr' (AUCt)
- dropped value-less row: 'NEN'
- dropped value-less row: 'ND'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Tmax'
- dropped value-less row: 'AUC'
- dropped value-less row: 'T1/2α'
- dropped value-less row: 'T1/2β'
- implicit units: 'AUC0-t (ng/mLxhr)' → ng/mL*h (from the paper text: "The table itself states the unit in the parameter name: 'AUC0-t (ng/mLxhr) = 35.9', i.e. ng/mL x h.")
- implicit units: 'kα' → 1/h (from the popPK convention: 'No unit is stated for the absorption rate constant kabs in the text or table. First-order rate constants in population P')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niclosamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: '0.167% nen nebulized' subgroup of Weiss_2023 (paper reports 4 populations: 0.167% nen nebulized, 0.5% nen nebulized, 1% nen nebulized, oral niclosamide)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Tab2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | 0.27 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | niclosamide (niclosamide ethanolamine) | niclosamide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab2:row3:col3', 'Tab2:row3:col8'] |
| C5_dimension_Q310 | fail | [mass] | mg/kg | ['Tab2:row0:col3', 'Tab2:row0:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab2:row1:col3', 'Tab2:row1:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row4:col3', 'Tab2:footnote'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row2:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row8:col3'] |
| C5_dimension_Q59 | pass | [time] |  | ['Tab2:row6:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Tab2:row7:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniclosamide%5D%20Niclosamide_Weiss2023_0_167_nen_nebulized&body=Drug%3A%20niclosamide%0ARecord%3A%20Niclosamide_Weiss2023_0_167_nen_nebulized%0APaper%3A%20Weiss_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niclosamide/Niclosamide_Weiss2023_0_167_nen_nebulized%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:52 UTC</sub>
