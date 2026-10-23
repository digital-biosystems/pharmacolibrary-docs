<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;paroxetine&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/&quot;},{&quot;label&quot;:&quot;Feng_2006 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paroxetine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paroxetine — `Paroxetine_Feng2006_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected due to a dimension mismatch on the maximum metabolic rate Vmax, which lacked a compatible unit.

<div class="pk-model-meta" hidden drug="paroxetine" model-id="Paroxetine_Feng2006_final" status="rejected" stale="false" population="elderly subjects with major depressive disorder" measured-compound="paroxetine" parameterization="mechanistic" topology="1C"></div>

## Citation
Feng Y, Pollock BG, Ferrell RE, Kimak MA, Reynolds CF, Bies RR. Paroxetine: population pharmacokinetic analysis in late-life depression using sparse concentration sampling. British journal of clinical pharmacology 61(5):558–569 (2006).
  ·  DOI: [10.1111/j.1365-2125.2006.02629.x](https://doi.org/10.1111/j.1365-2125.2006.02629.x)

## Population and dosing

**Population:** elderly subjects with major depressive disorder · condition major depressive disorder · age group elderly · n = 171.

**Dosing:** 10, 40 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vm (µg h⁻¹) | Vmax | 474 | µg h⁻¹ |  |  |
| Km (µg l⁻¹) | Km | 205 | µg l⁻¹ |  | 109 (None% RSE) |
| V2 (l) | V2 | 230 | l |  | 77.8 (None% RSE) |
| V3 (l) | V3 | 900 | l |  |  |
| Q (l h⁻¹) | Q | 1.05 | l h⁻¹ |  |  |
| Ka (h⁻¹) | kabs | 9.81 | h⁻¹ |  |  |
| theta_q367_pm | theta_q367_pm | 125 |  | 48.8 |  |
| theta_q367_em | theta_q367_em | 454 |  | 49.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.421). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected due to a dimension mismatch on the maximum metabolic rate Vmax, which lacked a compatible unit.**

The maximum rate of metabolism, Vmax, is recorded as 474 µg h⁻¹, but this unit could not be converted to standard SI units. Consequently, the model could not be processed due to a structural dimension mismatch. The second reader also disagreed on the extraction of several covariate effect parameters, finding them missing. Extracted — paroxetine: Vmax 474 µg h⁻¹, Km 205 µg l⁻¹, V2 230 l, V3 900 l, Q 1.05 l h⁻¹, kabs 9.81 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has paroxetine, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vm (µg h⁻¹) | `Q66` · Vmax | 474 | µg h⁻¹ |  |  | µg/h |  | special_case (0.95) | Feng_2006_table_p7_1:row0:col4 |  |
| Km (µg l⁻¹) | `Q1` · Km | 205 | µg l⁻¹ |  |  | µg/l |  | exact (1) | Feng_2006_table_p7_1:row1:col4 | 109 (None% RSE) |
| V2 (l) | `Q64` · V2 | 230 | l | 0.23 | m3 | l |  | exact (1) | Feng_2006_table_p7_1:row2:col4 | 77.8 (None% RSE) |
| V3 (l) | `Q77` · V3 | 900 | l | 0.9 | m3 | l |  | exact (1) | Feng_2006_table_p7_1:row3:col4 |  |
| Q (l h⁻¹) | `Q30` · Q | 1.05 | l h⁻¹ | 2.917e-07 | m3/s | l/h |  | exact (1) | Feng_2006_table_p7_1:row4:col4 |  |
| Ka (h⁻¹) | `Q49` · kabs | 9.81 | h⁻¹ | 0.002725 | 1/s | 1/h |  | exact (1) | Feng_2006_table_p7_1:row5:col4 |  |
| theta_q367_pm | `Q900` · theta_q367_pm | 125 |  |  |  |  | 48.8 |  | Feng_2006_table_p7_1:row6:col4 |  |
| theta_q367_em | `Q900` · theta_q367_em | 454 |  |  |  |  | 49.5 |  | Feng_2006_table_p7_1:row8:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Vm (µg h⁻¹)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'IM (θim)' — extend the ontology if this is a real PK parameter (source ['Feng_2006_table_p7_1:row7:col4'])
- dropped unlinked row (NIL): 'UM (θum)' — extend the ontology if this is a real PK parameter (source ['Feng_2006_table_p7_1:row9:col4'])
- dropped unlinked row (NIL): 'Wt (θv2)' — extend the ontology if this is a real PK parameter (source ['Feng_2006_table_p7_1:row10:col4'])
- dropped unlinked row (NIL): 'Sex (θv2)' — extend the ontology if this is a real PK parameter (source ['Feng_2006_table_p7_1:row11:col4'])
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (V2 (l)); Q30 (Q (l h⁻¹))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paroxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- pharmacogenetic covariate 'theta_q367_pm' (pm) — PGx domain
- pharmacogenetic covariate 'theta_q367_em' (em) — PGx domain
- status held at route_to_review — not promoted
- model-stage split: 'final model estimates' is the final model of Feng_2006 (paper reports 2 stages: base model estimates, final model estimates); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Feng_2006_table_p7_1: unbound_uncertainty
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.421 (8/19 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q352_pm]` | 125 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_im]` | 182 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_um]` | 3670 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_im]` |  | 182 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_pm]` |  | 125 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_um]` |  | 3670 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_wt_v2]` | 1.83 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt_v2]` |  | 1.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | paroxetine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | paroxetine | unknown | mismatch |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Feng_2006_table_p7_1:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Feng_2006_table_p7_1:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Feng_2006_table_p7_1:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Feng_2006_table_p7_1:row2:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | µg h⁻¹ | ['Feng_2006_table_p7_1:row0:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Feng_2006_table_p7_1:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 230 L | ['Feng_2006_table_p7_1:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bparoxetine%5D%20Paroxetine_Feng2006_final&body=Drug%3A%20paroxetine%0ARecord%3A%20Paroxetine_Feng2006_final%0APaper%3A%20Feng_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_paroxetine/Paroxetine_Feng2006_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 12:46 UTC</sub>
