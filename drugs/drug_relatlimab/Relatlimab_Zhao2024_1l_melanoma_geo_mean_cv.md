<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;Relatlimab&quot;,&quot;href&quot;:&quot;drugs/drug_relatlimab/&quot;},{&quot;label&quot;:&quot;Zhao_2024 \u00b7 1l_melanoma_geo_mean_cv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Relatlimab — `Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Relatlimab's peripheral compartment volume of 3 L is dimensionally inconsistent with its clearance and maximum metabolic rate units.

<div class="pk-model-meta" hidden drug="Relatlimab" model-id="Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv" status="rejected" stale="false" population="adult and adolescent patients with solid tumors" measured-compound="relatlimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhao Y, Hu Z, Bathena SP, Keidel S, Miller-Moslin K, Statkevich P et al. Model-Informed Clinical Pharmacology Profile of a Novel Fixed-Dose Combination of Nivolumab and Relatlimab in Adult and Adolescent Patients with Solid Tumors. Clinical cancer research : an official journal of the American Association for Cancer Research 30(14):3050–3058 (2024).
  ·  DOI: [10.1158/1078-0432.CCR-23-2396](https://doi.org/10.1158/1078-0432.CCR-23-2396)

## Population and dosing

**Population:** adult and adolescent patients with solid tumors · condition solid tumors · age group mixed · n = &gt;=1713.

**Dosing:** 20, 800 mg, iv, multiple, every 14 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Cmin1 | Cmin | 5.7 | μg/mL | 49.5 |
| Cmax1 | Cmax | 44.4 | μg/mL | 23.3 |
| Cavg1 | Cavg | 14.8 | μg/mL | 25.3 |
| CL0 (mL/h) | CL | 6.06 | mL/h | 38.9 |
| V C (L) | V1 | 3.59 | L | 22 |
| V P (L) | V2 | 3 | L | 26.9 |
| V SS (L) | Vss | 6.65 | L | 19.8 |
| V MAX (μg/h) | Vmax | 80.3 | μg/h | 32.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Relatlimab's peripheral compartment volume of 3 L is dimensionally inconsistent with its clearance and maximum metabolic rate units.**

The record lists a peripheral volume of 3 L alongside a clearance of 6.06 mL/h and a maximum metabolic rate of 80.3 μg/h. This combination creates a structural dimension mismatch because the units do not align for a two-compartment model. Additionally, the peripheral compartment is identified as unreachable from the dose, meaning it is an orphan compartment with no defined input path. Extracted — relatlimab: Cmin 5.7 μg/mL, Cmax 44.4 μg/mL, Cavg 14.8 μg/mL, CL 6.06 mL/h, V1 3.59 L, V2 3 L, Vss 6.65 L, Vmax 80.3 μg/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clss/cl0: this record has none, the second reading 90.3. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Cmin1 | `Q36` · Cmin | 5.7 | μg/mL |  |  | µg/ml | 49.5 | llm (0.6) | tbl3:row3:col1 |
| Cmax1 | `Q32` · Cmax | 44.4 | μg/mL |  |  | µg/ml | 23.3 | llm (0.6) | tbl3:row4:col1 |
| Cavg1 | `Q71` · Cavg | 14.8 | μg/mL |  |  | µg/ml | 25.3 | llm (0.6) | tbl3:row5:col1 |
| CL0 (mL/h) | `Q22` · CL | 6.06 | mL/h | 1.683e-09 | m3/s | ml/h | 38.9 | llm (0.6) | tbl3:row9:col1 |
| V C (L) | `Q63` · V1 | 3.59 | L | 0.00359 | m3 | l | 22 | space_fold (0.95) | tbl3:row11:col1 |
| V P (L) | `Q64` · V2 | 3 | L | 0.003 | m3 | l | 26.9 | space_fold (0.95) | tbl3:row12:col1 |
| V SS (L) | `Q65` · Vss | 6.65 | L | 0.00665 | m3 | l | 19.8 | space_fold (0.95) | tbl3:row13:col1 |
| V MAX (μg/h) | `Q66` · Vmax | 80.3 | μg/h |  |  | µg/h | 32.3 | special_case (0.95) | tbl3:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'N = 333' — extend the ontology if this is a real PK parameter (source ['tbl3:row1:col1'])
- dropped duplicate Q36 ('Cminss', value '15.3') — already have one for this compound
- dropped duplicate Q32 ('Cmaxss', value '62.2') — already have one for this compound
- dropped duplicate Q71 ('Cavgss', value '28.8') — already have one for this compound
- dropped duplicate Q22 ('CLss (mL/h)', value '5.48') — already have one for this compound
- unit_dimension_mismatch: 'V MAX (μg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'CLss/CL0 (%)' — extend the ontology if this is a real PK parameter (source ['tbl3:row15:col1'])
- dropped unlinked row (NIL): 'RAC' — extend the ontology if this is a real PK parameter (source ['tbl3:row16:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=relatlimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '1l melanoma geo. mean (%cv)' subgroup of Zhao_2024 (paper reports 3 populations: 1l melanoma geo. mean (%cv), melanoma (1l + prior-io) geo. mean (%cv), prior-io melanoma geo. mean (%cv))
- molar mass: none found for 'relatlimab' — its concentrations stay mass-only

**Extraction notes:**
- companion parameter table 2 transcribed (44 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.952 (20/21 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clss/cl0]` |  | 90.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl3:row9:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl3:row4:col1'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['tbl3:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tbl3:row11:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tbl3:row12:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tbl3:row13:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg/h | ['tbl3:row14:col1'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['tbl3:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.06 | ['tbl3:row9:col1'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00606 L/h | ['tbl3:row9:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.59 L | ['tbl3:row11:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3 L | ['tbl3:row12:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 6.65 L | ['tbl3:row13:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brelatlimab%5D%20Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv&body=Drug%3A%20relatlimab%0ARecord%3A%20Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv%0APaper%3A%20Zhao_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_relatlimab/Relatlimab_Zhao2024_1l_melanoma_geo_mean_cv%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:32 UTC</sub>
