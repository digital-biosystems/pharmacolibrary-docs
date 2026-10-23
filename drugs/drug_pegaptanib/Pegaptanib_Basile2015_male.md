<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;pegaptanib&quot;,&quot;href&quot;:&quot;drugs/drug_pegaptanib/&quot;},{&quot;label&quot;:&quot;Basile_2015 \u00b7 male&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pegaptanib — `Pegaptanib_Basile2015_male`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="pegaptanib" model-id="Pegaptanib_Basile2015_male" status="rejected" stale="false" population="patients with diabetic macular edema" measured-compound="pegaptanib" parameterization="mechanistic" topology="1C"></div>

## Citation
Basile AS, Hutmacher MM, Kowalski KG, Gandelman KY, Nickens DJ. Population pharmacokinetics of pegaptanib sodium (Macugen(®)) in patients with diabetic macular edema. Clinical ophthalmology (Auckland, N.Z.) 9:323–335 (2015).
  ·  DOI: [10.2147/OPTH.S74050](https://doi.org/10.2147/OPTH.S74050)

## Population and dosing

**Population:** patients with diabetic macular edema · age group adult · n = &gt;=.

**Dosing:** 0.3, 1, 3 mg, intravitreal, multiple, every 3024 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–inf, ng·h/mL | AUC∞ | 1635 | ng·h/mL |
| Cmax (single dose), ng/mL | Cmax | 5.0 | ng/mL |
| Tmax (single dose), h | tmax | 81.4 | h |
| T½z, d | t1/2z | 6.5 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (AUC∞ and Cmax), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pegaptanib, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–inf, ng·h/mL | `Q17` · AUC∞ | 1635 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | t2-opth-9-323:row1:col1, t2-opth-9-323:row1:col5, t2-opth-9-323:row2:col1, t2-opth-9-323:row2:col5, t2-opth-9-323:row3:col1, t2-opth-9-323:row3:col5 |
| Cmax (single dose), ng/mL | `Q32` · Cmax | 5.0 | ng/mL |  |  | ng/ml | space_fold (0.95) | t2-opth-9-323:row4:col5, t2-opth-9-323:row5:col5, t2-opth-9-323:row6:col5 |
| Tmax (single dose), h | `Q56` · tmax | 81.4 | h | 2.93e+05 | s | h | space_fold (0.95) | t2-opth-9-323:row7:col5, t2-opth-9-323:row8:col5, t2-opth-9-323:row9:col5 |
| T½z, d | `Q57` · t1/2z | 6.5 | d | 5.616e+05 | s | d | llm (0.6) | t2-opth-9-323:row10:col5, t2-opth-9-323:row11:col5, t2-opth-9-323:row12:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['t2-opth-9-323:row0:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pegaptanib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- model equation 'CLi = exp(θ1)(CRCLi80)θ5(WTi85)θ6exp(θ7×SEXi)(AGEi65)θ8exp(ηi(CL))(2) Vi=exp(θ2)(WGTi85)θ9exp(θ10×SEXi)exp(ηi(V))(3) Kai=exp(θ3)(AGEi65)θ11exp(θ12×SEXi)exp(ηiKa)(4)' not bound — neither LHS nor base term 'θ1' linked to an ontology parameter
- model equation 'SLP = 180exp(θ1)exp(−exp(θ5))(10)which allows θ5 (relating the changes in CRCL to changes in CL) to range from −∞ to ∞ while constraining SLP &gt;0' not bound — neither LHS nor base term 'θ1' linked to an ontology parameter
- population split: 'male' subgroup of Basile_2015 (paper reports 14 populations: &gt;68, &gt;86, &gt;93, asian, black, female, hispanic, male, sim totala, total, white, ≤57, ≤63, ≤79)
- molar mass: none found for 'pegaptanib' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t2-opth-9-323: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 4
- captured model equation CLi = exp(θ1)(CRCLi80)θ5(WTi85)θ6exp(θ7×SEXi)(AGEi65)θ8exp(ηi(CL))(2) Vi=exp(θ2)(WGTi85)θ9exp(θ10×SEXi)exp(ηi(V))(3) Kai=exp(θ3)(AGEi65)θ11exp(θ12×SEXi)exp(ηiKa)(4)
- captured model equation SLP = 180exp(θ1)exp(−exp(θ5))(10)which allows θ5 (relating the changes in CRCL to changes in CL) to range from −∞ to ∞ while constraining SLP &gt;0

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf]` | 1635 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` |  | 1635 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax (single dose)]` | 5.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax (single dose)]` |  | 5.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2z]` | 6.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2z]` |  | 6.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax (single dose)]` | 81.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax (single dose)]` |  | 81.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pegaptanib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pegaptanib | unknown | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['t2-opth-9-323:row1:col1', 't2-opth-9-323:row1:col5', 't2-opth-9-323:row2:col1', 't2-opth-9-323:row2:col5', 't2-opth-9-323:row3:col1', 't2-opth-9-323:row3:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['t2-opth-9-323:row4:col5', 't2-opth-9-323:row5:col5', 't2-opth-9-323:row6:col5'] |
| C5_dimension_Q56 | pass | [time] |  | ['t2-opth-9-323:row7:col5', 't2-opth-9-323:row8:col5', 't2-opth-9-323:row9:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['t2-opth-9-323:row10:col5', 't2-opth-9-323:row11:col5', 't2-opth-9-323:row12:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpegaptanib%5D%20Pegaptanib_Basile2015_male&body=Drug%3A%20pegaptanib%0ARecord%3A%20Pegaptanib_Basile2015_male%0APaper%3A%20Basile_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pegaptanib/Pegaptanib_Basile2015_male%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:18 UTC</sub>
