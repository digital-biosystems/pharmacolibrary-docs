<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;niclosamide&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/&quot;},{&quot;label&quot;:&quot;Weiss_2023 \u00b7 1_nen_nebulized&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niclosamide_Zhang2019_reference&quot;,&quot;label&quot;:&quot;Zhang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niclosamide/Niclosamide_Zhang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# niclosamide — `Niclosamide_Weiss2023_1_nen_nebulized`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> The niclosamide sheep record was rejected because it reports only exposure summary statistics (Cmax 577.1 ng/mL, Tmax 22.2 min, AUC0-t 261.4 ng·h/mL) with no distribution volume and no clearance, so it is not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="niclosamide" model-id="Niclosamide_Weiss2023_1_nen_nebulized" status="rejected" stale="false" population="sheep" measured-compound="niclosamide" parameterization="mechanistic" topology="1C"></div>

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
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dose (mg/kg) | D1 | 1.40 | mg/kg |
| Cmax (ng/mL) | Cmax | 577.1 | ng/mL |
| Tmax (min) | tmax | 22.2 | min |
| AUC0-t (ng/mLxhr) | AUCt | 261.4 | ng·h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The niclosamide sheep record was rejected because it reports only exposure summary statistics (Cmax 577.1 ng/mL, Tmax 22.2 min, AUC0-t 261.4 ng·h/mL) with no distribution volume and no clearance, so it is not a compartmental population PK model.**

The paper gives no distribution volume and no clearance or elimination rate for niclosamide; it is an exposure/outcome paper, and the bioavailability parameter F is listed without any value. The parameter D1, labelled as a dose of 1.40 mg/kg, is in fact the duration of a zero-order input, a structural parameter whose dimension failed the consistency check. Additionally, the reported AUC unit ng·h/mL could not be converted to SI, so that parameter reached the model without an SI value. Extracted — niclosamide: D1 1.4 mg/kg, Cmax 577 ng/mL, tmax 22.2 min, AUCt 261 ng·h/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has niclosamide (niclosamide ethanolamine), the second reading niclosamide; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dose (mg/kg) | `Q310` · D1 | 1.40 | mg/kg |  |  | mg/kg | llm (0.6) | Tab2:row0:col5, Tab2:row0:col10 |
| Cmax (ng/mL) | `Q32` · Cmax | 577.1 | ng/mL |  |  | ng/ml | exact (1) | Tab2:row1:col5, Tab2:row1:col10 |
| Tmax (min) | `Q56` · tmax | 22.2 | min | 1332 | s | min | exact (1) | Tab2:row2:col5, Tab2:row2:col10 |
| AUC0-t (ng/mLxhr) | `Q19` · AUCt | 261.4 | ng·h/mL |  |  | ng·h/mL | exact (1) | Tab2:row3:col5 |

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
- dropped value-less row: 'kα'
- dropped value-less row: 'T1/2α'
- dropped value-less row: 'T1/2β'
- implicit units: 'AUC0-t (ng/mLxhr)' → ng·h/mL (from the paper text: "The parameter is given as AUC0-t (ng/mLxhr) = 261.4, i.e., ng/mL × hours, consistent with the definition 'Area under the")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=niclosamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '1% nen nebulized' subgroup of Weiss_2023 (paper reports 4 populations: 0.167% nen nebulized, 0.5% nen nebulized, 1% nen nebulized, oral niclosamide)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Tab2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | 1.40 |  | only_one_extracted |
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
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab2:row3:col5'] |
| C5_dimension_Q310 | fail | [mass] | mg/kg | ['Tab2:row0:col5', 'Tab2:row0:col10'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab2:row1:col5', 'Tab2:row1:col10'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row2:col5', 'Tab2:row2:col10'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bniclosamide%5D%20Niclosamide_Weiss2023_1_nen_nebulized&body=Drug%3A%20niclosamide%0ARecord%3A%20Niclosamide_Weiss2023_1_nen_nebulized%0APaper%3A%20Weiss_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_niclosamide/Niclosamide_Weiss2023_1_nen_nebulized%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:52 UTC</sub>
