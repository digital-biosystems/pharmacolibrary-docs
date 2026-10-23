<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;misoprostol&quot;,&quot;href&quot;:&quot;drugs/drug_misoprostol/&quot;},{&quot;label&quot;:&quot;Vorontsova_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# misoprostol — `Misoprostol_Vorontsova2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The misoprostol acid metabolite model was rejected because a structural parameter failed a dimensional check: Vmax/F is reported as 5.45 pg/ml, a concentration unit, not a rate as a maximum metabolism rate requires.

<div class="pk-model-meta" hidden drug="misoprostol" model-id="Misoprostol_Vorontsova2022_reference" status="rejected" stale="false" population="women undergoing labor induction at term" measured-compound="misoprostol acid" parameterization="apparent" topology="1C"></div>

## Citation
Vorontsova Y, Haas DM, Flannery K, Masters AR, Silva LL, Pierson RC et al. Pharmacokinetics of vaginal versus buccal misoprostol for labor induction at term. Clinical and translational science 15(8):1937–1945 (2022).
  ·  DOI: [10.1111/cts.13306](https://doi.org/10.1111/cts.13306)

## Population and dosing

**Population:** women undergoing labor induction at term · condition labor induction · age group adult · n = &gt;=14.

**Dosing:** 0.025, 0.05 mg, vaginal, buccal, multiple, every 4 h.

**Dosed compound ≠ measured compound:** dosed misoprostol, measured misoprostol acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/Fb, L/h | CLm/F | 730 | L/h | 22.5 |
| V/Fb, L | V | 610 | L | 33.4 |
| ka, 1/h (buccal, 25 μg) | kabs | 0.709 | 1/h | 15.7 |
| Vmax/Fb, pg/ml | Vmax | 5.45 | pg/ml | 12.8 |
| Km, pg | Km | 2.5 | pg | 41.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The misoprostol acid metabolite model was rejected because a structural parameter failed a dimensional check: Vmax/F is reported as 5.45 pg/ml, a concentration unit, not a rate as a maximum metabolism rate requires.**

For the misoprostol acid metabolite (formed from misoprostol, one compartment), the record lists Vmax/Fb = 5.45 pg/ml and Km = 2.5 pg; a maximum rate of enzymatic metabolism must have units of amount per time, so the pg/ml unit is dimensionally wrong for this parameter. The reported unit also could not be converted to SI, so the parameter arrived without an SI value. A second reader (gpt-oss:120b) disagreed with this record on several parameter fields, reading CL/Fb = 730 L/h, ka = 0.709 1/h, Km = 2.5, V/Fb = 610 L and Vmax/Fb = 5.45 where this record had nulls, and nulls where this record had those values, so the parameter extraction itself is contested. Extracted — misoprostol acid: CLm/F 730 L/h, V 610 L, kabs 0.709 1/h, Vmax 5.45 pg/ml, Km 2.5 pg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/fb].parameter_id`: this record has Q351, the second reading Q27; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/Fb, L/h | `Q351` · CLm/F | 730 | L/h | 0.0002028 | m3/s | l/h | 22.5 | exact (1) | cts13306-tbl-0002:row1:col1, cts13306-tbl-0002:row1:col2, cts13306-tbl-0002:row1:col3 |
| V/Fb, L | `Q61` · V | 610 | L | 0.61 | m3 | l | 33.4 | exact (1) | cts13306-tbl-0002:row2:col1, cts13306-tbl-0002:row2:col2, cts13306-tbl-0002:row2:col3 |
| ka, 1/h (buccal, 25 μg) | `Q49` · kabs | 0.709 | 1/h | 0.0001969 | 1/s | 1/h | 15.7 | exact (1) | cts13306-tbl-0002:row4:col1, cts13306-tbl-0002:row4:col2, cts13306-tbl-0002:row4:col3 |
| Vmax/Fb, pg/ml | `Q66` · Vmax | 5.45 | pg/ml |  |  | pg/ml | 12.8 | llm (0.6) | cts13306-tbl-0002:row8:col1, cts13306-tbl-0002:row8:col2, cts13306-tbl-0002:row8:col3 |
| Km, pg | `Q1` · Km | 2.5 | pg |  |  | pg | 41.2 | exact (1) | cts13306-tbl-0002:row9:col1, cts13306-tbl-0002:row9:col2, cts13306-tbl-0002:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fv/b' — extend the ontology if this is a real PK parameter (source ['cts13306-tbl-0002:row3:col1', 'cts13306-tbl-0002:row3:col2', 'cts13306-tbl-0002:row3:col3'])
- unit_dimension_unknown: 'buccal, 25 μg' (kabs)
- unit_dimension_unknown: 'buccal, 50 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (buccal, 50 μg)', value '0.537') — already have one for this compound
- unit_dimension_unknown: 'vaginal, 25 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (vaginal, 25 μg)', value '0.464') — already have one for this compound
- unit_dimension_unknown: 'vaginal, 50 μg' (kabs)
- dropped duplicate Q49 ('ka, 1/h (vaginal, 50 μg)', value '0.24') — already have one for this compound
- unit_dimension_mismatch: 'Vmax/Fb, pg/ml' → Q66 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km, pg' → Q1 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- implicit units: 'ka, 1/h (buccal, 25 μg)' → 1/h (from the paper text: "The abstract explicitly states the unit for the absorption rate constant (ka) as h−1 (e.g., 'buccal 25 μg 0.724 (95% con")
- metabolite misoprostol acid: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V/Fb, L' Q63→Q61 for misoprostol acid — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=misoprostol acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 4 per-group rows of misoprostol acid absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 18 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13306-tbl-0002:row1:col4 = '705 (431–1099)'
- unparsed cell cts13306-tbl-0002:row2:col4 = '632 (343–1008)'
- unparsed cell cts13306-tbl-0002:row3:col4 = '2.4 (1.63–4.77)'
- unparsed cell cts13306-tbl-0002:row4:col4 = '0.724 (0.54–0.92)'
- unparsed cell cts13306-tbl-0002:row5:col4 = '0.531(0.37–0.63)'
- unparsed cell cts13306-tbl-0002:row6:col4 = '0.507 (0.2–1)'
- unparsed cell cts13306-tbl-0002:row7:col4 = '0.246 (0.103–0.453)'
- unparsed cell cts13306-tbl-0002:row8:col4 = '5.64 (3.141–10.453)'
- unparsed cell cts13306-tbl-0002:row9:col4 = '2.864 (0.73–10.41)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/fb].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[v/fb].parameter_id` | Q61 | Q76 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] | pg | ['cts13306-tbl-0002:row9:col1', 'cts13306-tbl-0002:row9:col2', 'cts13306-tbl-0002:row9:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['cts13306-tbl-0002:row1:col1', 'cts13306-tbl-0002:row1:col2', 'cts13306-tbl-0002:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts13306-tbl-0002:row4:col1', 'cts13306-tbl-0002:row4:col2', 'cts13306-tbl-0002:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts13306-tbl-0002:row2:col1', 'cts13306-tbl-0002:row2:col2', 'cts13306-tbl-0002:row2:col3'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 | pg/ml | ['cts13306-tbl-0002:row8:col1', 'cts13306-tbl-0002:row8:col2', 'cts13306-tbl-0002:row8:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 610 L | ['cts13306-tbl-0002:row2:col1', 'cts13306-tbl-0002:row2:col2', 'cts13306-tbl-0002:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmisoprostol%5D%20Misoprostol_Vorontsova2022_reference&body=Drug%3A%20misoprostol%0ARecord%3A%20Misoprostol_Vorontsova2022_reference%0APaper%3A%20Vorontsova_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_misoprostol/Misoprostol_Vorontsova2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 10:07 UTC</sub>
