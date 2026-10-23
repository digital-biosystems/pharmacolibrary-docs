<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Paalzow_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Paalzow1979_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-09 06:08 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Paalzow1979_reference" status="rejected" stale="true" population="rats and cats" measured-compound="clonidine" parameterization="mechanistic" topology="2C"></div>

## Citation
Paalzow LK, Edlund PO. Pharmacokinetics of clonidine in the rat and cat. Journal of pharmacokinetics and biopharmaceutics 7(5):481–494 (1979).
  ·  DOI: [10.1007/BF01062390](https://doi.org/10.1007/BF01062390)

## Population and dosing

**Population:** rats and cats · condition healthy.

**Dosing:** 8.75, 17.5, 35 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng/ml) | equation variable | 109.0 | ng/ml |
| α (min⁻¹) | λ1 | 0.590 | min⁻¹ |
| β (min⁻¹) | kel | 0.0143 | min⁻¹ |
| AUCᵃ (min-ng/ml) | AUC | 1817.55 | min-ng/ml |
| AUC dose-normalized (min-ng/ml) | AUC/dose | 1817.55 | min-ng/ml |
| Vdareaᵇ (ml/kg) | V | 4826.24 | ml/kg |
| Vcᶜ (ml/kg) | V1 | 945.25 | ml/kg |
| Vdsᵈ (ml/kg) | Vss | 4349.29 | ml/kg |
| Clearanceᵉ (ml/min/kg) | CL | 68.77 | ml/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.647). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonidine, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng/ml) | `Q900` · equation variable | 109.0 | ng/ml |  |  | ng/ml | llm (0.6) | Paalzow_1979_table_1:row0:col1, Paalzow_1979_table_1:row0:col2, Paalzow_1979_table_1:row0:col3 |
| α (min⁻¹) | `Q67` · λ1 | 0.590 | min⁻¹ |  |  | 1/min | exact (1) | Paalzow_1979_table_1:row1:col1, Paalzow_1979_table_1:row1:col2, Paalzow_1979_table_1:row1:col3 |
| β (min⁻¹) | `Q47` · kel | 0.0143 | min⁻¹ | 0.0002383 | 1/s | 1/min | exact (1) | Paalzow_1979_table_1:row3:col1, Paalzow_1979_table_1:row3:col2, Paalzow_1979_table_1:row3:col3 |
| AUCᵃ (min-ng/ml) | `Q88` · AUC | 1817.55 | min-ng/ml |  |  | (min·ng)/ml | llm (0.6) | Paalzow_1979_table_3:row0:col1, Paalzow_1979_table_3:row0:col2, Paalzow_1979_table_3:row0:col3 |
| AUC dose-normalized (min-ng/ml) | `Q189` · AUC/dose | 1817.55 | min-ng/ml |  |  | (min·ng)/ml | llm_corrected (0.6) | Paalzow_1979_table_3:row1:col1, Paalzow_1979_table_3:row1:col2, Paalzow_1979_table_3:row1:col3 |
| Vdareaᵇ (ml/kg) | `Q61` · V | 4826.24 | ml/kg | 0.3378 | m3 | ml/kg | llm (0.6) | Paalzow_1979_table_3:row2:col1, Paalzow_1979_table_3:row2:col2, Paalzow_1979_table_3:row2:col3 |
| Vcᶜ (ml/kg) | `Q63` · V1 | 945.25 | ml/kg | 0.06617 | m3 | ml/kg | llm (0.6) | Paalzow_1979_table_3:row3:col1, Paalzow_1979_table_3:row3:col2, Paalzow_1979_table_3:row3:col3 |
| Vdsᵈ (ml/kg) | `Q65` · Vss | 4349.29 | ml/kg | 0.3045 | m3 | ml/kg | llm (0.6) | Paalzow_1979_table_3:row4:col1, Paalzow_1979_table_3:row4:col2, Paalzow_1979_table_3:row4:col3 |
| Clearanceᵉ (ml/min/kg) | `Q22` · CL | 68.77 | ml/min/kg | 8.023e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Paalzow_1979_table_3:row5:col1, Paalzow_1979_table_3:row5:col2, Paalzow_1979_table_3:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (min⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q900 ('B (ng/ml)', value '23.3') — already have one for this compound
- unit_dimension_unknown: 'min-ng/ml' (AUC)
- unit_dimension_unknown: 'min-ng/ml' (AUC/dose)
- implicit units: 'AUCᵃ (min-ng/ml)' — the LLM proposed 'min-ng/ml', whose dimension does not fit Q88; left unset
- implicit units: 'AUC dose-normalized (min-ng/ml)' — the LLM proposed 'min', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3, 4
- transposed table Paalzow_1979_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Paalzow_1979_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Paalzow_1979_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[auca].parameter_id` | Q88 | Q17 | mismatch |
| `gpt-oss-120b` | `parameters[vcc].parameter_id` | Q63 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vdareab].parameter_id` | Q61 | Q352 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Paalzow_1979_table_3:row5:col1', 'Paalzow_1979_table_3:row5:col2', 'Paalzow_1979_table_3:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Paalzow_1979_table_1:row3:col1', 'Paalzow_1979_table_1:row3:col2', 'Paalzow_1979_table_1:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Paalzow_1979_table_3:row2:col1', 'Paalzow_1979_table_3:row2:col2', 'Paalzow_1979_table_3:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Paalzow_1979_table_3:row3:col1', 'Paalzow_1979_table_3:row3:col2', 'Paalzow_1979_table_3:row3:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Paalzow_1979_table_3:row4:col1', 'Paalzow_1979_table_3:row4:col2', 'Paalzow_1979_table_3:row4:col3'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | ['Paalzow_1979_table_1:row1:col1', 'Paalzow_1979_table_1:row1:col2', 'Paalzow_1979_table_1:row1:col3'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | min-ng/ml | ['Paalzow_1979_table_3:row1:col1', 'Paalzow_1979_table_3:row1:col2', 'Paalzow_1979_table_3:row1:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | min-ng/ml | ['Paalzow_1979_table_3:row0:col1', 'Paalzow_1979_table_3:row0:col2', 'Paalzow_1979_table_3:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 68.77 | ['Paalzow_1979_table_3:row5:col1', 'Paalzow_1979_table_3:row5:col2', 'Paalzow_1979_table_3:row5:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 289 L/h | ['Paalzow_1979_table_3:row5:col1', 'Paalzow_1979_table_3:row5:col2', 'Paalzow_1979_table_3:row5:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 338 L | ['Paalzow_1979_table_3:row2:col1', 'Paalzow_1979_table_3:row2:col2', 'Paalzow_1979_table_3:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 66.2 L | ['Paalzow_1979_table_3:row3:col1', 'Paalzow_1979_table_3:row3:col2', 'Paalzow_1979_table_3:row3:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 304 L | ['Paalzow_1979_table_3:row4:col1', 'Paalzow_1979_table_3:row4:col2', 'Paalzow_1979_table_3:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Paalzow1979_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Paalzow1979_reference%0APaper%3A%20Paalzow_1979%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clonidine/Clonidine_Paalzow1979_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-09 06:08 UTC</sub>
