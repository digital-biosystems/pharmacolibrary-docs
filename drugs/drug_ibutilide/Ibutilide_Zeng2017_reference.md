<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ibutilide&quot;,&quot;href&quot;:&quot;drugs/drug_ibutilide/&quot;},{&quot;label&quot;:&quot;Zeng_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibutilide — `Ibutilide_Zeng2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the second peripheral compartment for ibutilide is unreachable from the dose.

<div class="pk-model-meta" hidden drug="ibutilide" model-id="Ibutilide_Zeng2017_reference" status="rejected" stale="false" population="Chinese healthy volunteers and patients with atrial fibrillation and/or atrial flutter" measured-compound="ibutilide" parameterization="mechanistic" topology="2C"></div>

## Citation
Zeng Z, Wang L, Hua L, Jiang J, Pang H, Huang Y et al. Population Pharmacokinetic/Pharmacodynamics Modeling of Ibutilide in Chinese Healthy Volunteers and Patients With Atrial Fibrillation (AF) and/or Atrial Flutter (AFL). Clinical therapeutics 39(7):1320–1335 (2017).
  ·  DOI: [10.1016/j.clinthera.2017.05.349](https://doi.org/10.1016/j.clinthera.2017.05.349)

## Population and dosing

**Population:** Chinese healthy volunteers and patients with atrial fibrillation and/or atrial flutter · condition healthy and atrial fibrillation/atrial flutter · age group adult · n = 140.

**Dosing:** 0.005, 0.01, 0.02, 0.5, 0.75, 1 mg/kg, mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL, L/h | CL | 246 | L/h | 4.7 | 21 (12.1% RSE) |
| VC, L | V1 | 66.1 | L | 10.1 | 7.5 (22.8% RSE) |
| VP1, L | V2 | 548 | L | 20.6 | 11.7 (12.3% RSE) |
| VP2, L | V3 | 1380 | L | 6.9 | 30.2 (15.9% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the second peripheral compartment for ibutilide is unreachable from the dose.**

The record defines a three-compartment structure with volumes of 66.1 L, 548 L, and 1380 L. The findings indicate that the second peripheral compartment has no path from the dose, making it an orphan compartment. A second reader disagreed on the identity of the dose compound and primary analyte, marking both as unknown. Extracted — ibutilide: CL 246 L/h, V1 66.1 L, V2 548 L, V3 1.38e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ibutilide, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 246 | L/h | 6.833e-05 | m3/s | l/h | 4.7 | exact (1) | Zeng_2017_table_p9_1:row0:col2 | 21 (12.1% RSE) |
| VC, L | `Q63` · V1 | 66.1 | L | 0.0661 | m3 | l | 10.1 | exact (1) | Zeng_2017_table_p9_1:row3:col2 | 7.5 (22.8% RSE) |
| VP1, L | `Q64` · V2 | 548 | L | 0.548 | m3 | l | 20.6 | exact (1) | Zeng_2017_table_p9_1:row4:col2 | 11.7 (12.3% RSE) |
| VP2, L | `Q77` · V3 | 1380 | L | 1.38 | m3 | l | 6.9 | exact (1) | Zeng_2017_table_p9_1:row5:col2 | 30.2 (15.9% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CLic1, L/h', value '745') — already have one for this compound
- dropped duplicate Q22 ('CLic2, L/h', value '251') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibutilide
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Zeng_2017_table_p9_1:row0:col3 = '244.35 (223.96-264.72)'
- unparsed cell Zeng_2017_table_p9_1:row1:col1 = 'Intercompartmental clearance 1'
- unparsed cell Zeng_2017_table_p9_1:row1:col3 = '760.49 (608.39-987.94)'
- unparsed cell Zeng_2017_table_p9_1:row2:col1 = 'Intercompartmental clearance 2'
- unparsed cell Zeng_2017_table_p9_1:row2:col3 = '245.28 (152.86-375.10)'
- unparsed cell Zeng_2017_table_p9_1:row3:col3 = '67.54 (55.60-85.65)'
- unparsed cell Zeng_2017_table_p9_1:row4:col1 = 'Volume of tissue compartment 1'
- unparsed cell Zeng_2017_table_p9_1:row4:col3 = '554.39 (378.01-849.92)'
- unparsed cell Zeng_2017_table_p9_1:row5:col1 = 'Volume of tissue compartment 2'
- unparsed cell Zeng_2017_table_p9_1:row5:col3 = '1402.7 (1230.56-1644.97)'
- unparsed cell Zeng_2017_table_p9_1:row6:col3 = '21 (16.3-26.2)'
- unparsed cell Zeng_2017_table_p9_1:row7:col1 = 'Interindividual variability of CLic1'
- unparsed cell Zeng_2017_table_p9_1:row7:col3 = '23.9 (15.9-33.6)'
- unparsed cell Zeng_2017_table_p9_1:row8:col1 = 'Interindividual variability of CLic2'
- unparsed cell Zeng_2017_table_p9_1:row8:col3 = '39.6 (21.2-55.1)'
- unparsed cell Zeng_2017_table_p9_1:row9:col3 = '7.6 (5.9-27.8)'
- unparsed cell Zeng_2017_table_p9_1:row10:col1 = 'Interindividual variability of VP1'
- unparsed cell Zeng_2017_table_p9_1:row10:col3 = '12.4 (1.0-26.5)'
- unparsed cell Zeng_2017_table_p9_1:row11:col1 = 'Interindividual variability of VP2'
- unparsed cell Zeng_2017_table_p9_1:row11:col3 = '28.8 (11.4-40.8)'
- unparsed cell Zeng_2017_table_p9_1:row12:col3 = '17.7 (15.6-19.8)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clic1]` |  | 745 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ibutilide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ibutilide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zeng_2017_table_p9_1:row0:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Zeng_2017_table_p9_1:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Zeng_2017_table_p9_1:row4:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Zeng_2017_table_p9_1:row5:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 246 | ['Zeng_2017_table_p9_1:row0:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 246 L/h | ['Zeng_2017_table_p9_1:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 66.1 L | ['Zeng_2017_table_p9_1:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 548 L | ['Zeng_2017_table_p9_1:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibutilide%5D%20Ibutilide_Zeng2017_reference&body=Drug%3A%20ibutilide%0ARecord%3A%20Ibutilide_Zeng2017_reference%0APaper%3A%20Zeng_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibutilide/Ibutilide_Zeng2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 18:15 UTC</sub>
