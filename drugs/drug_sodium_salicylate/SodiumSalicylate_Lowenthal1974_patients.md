<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 patients&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_patients`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit min⁻¹ (1 / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_patients" status="rejected" stale="false" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Lowenthal DT, Briggs WA, Levy G. Kinetics of salicylate elimination by anephric patients. The Journal of clinical investigation 54(5):1221–1226 (1974).
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

## Population and dosing

**Population:** anephric patients · condition renal impairment · age group adult · n = 6.

**Dosing:** 500 mg/m2, iv, single.

**Dosed compound ≠ measured compound:** dosed sodium salicylate, measured salicylic acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A, mg/liter | equation variable | 123 | mg/liter |
| α, min⁻¹ | λ1 | 0.408 | min⁻¹ |
| β,* min⁻¹ | kel | 0.00260 | 1/min |
| k₁₃, min⁻¹ | k13 | 0.281 | min⁻¹ |
| k₃₁, min⁻¹ | k31 | 0.121 | min⁻¹ |
| k₆₁, min⁻¹ | kcomp | 0.00879 | min⁻¹ |
| Vₐ, liter/kg | V | 0.050 | liter/kg |
| Vₐ (area), liter/kg | Vnorm | 0.168 | liter/kg |
| t₁/₂ (β), min | t1/2z | 266 | min |
| lag time | tlag | 0.42 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit min⁻¹ (1 / [time]) vs 1 / [time].**

A reported unit could not be converted (equation variable and λ1), so that value has no SI equivalent. Extracted — sodium salicylate: λ1 0.408 min⁻¹, kel 0.0026 1/min, k13 0.281 min⁻¹, k31 0.121 min⁻¹, kcomp 0.00879 min⁻¹, V 0.05 liter/kg, Vnorm 0.168 liter/kg, t1/2z 266 min, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium salicylate, the second reading sodium_salicylate; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A, mg/liter | `Q900` · equation variable | 123 | mg/liter |  |  | mg/l | llm (0.6) | Lowenthal_1974_table_2:row1:col1, Lowenthal_1974_table_2:row1:col2, Lowenthal_1974_table_2:row1:col3, Lowenthal_1974_table_2:row1:col4, Lowenthal_1974_table_2:row1:col5, Lowenthal_1974_table_2:row1:col6 |
| α, min⁻¹ | `Q67` · λ1 | 0.408 | min⁻¹ |  |  | 1/min | exact (1) | Lowenthal_1974_table_2:row3:col1, Lowenthal_1974_table_2:row3:col2, Lowenthal_1974_table_2:row3:col3, Lowenthal_1974_table_2:row3:col4, Lowenthal_1974_table_2:row3:col5, Lowenthal_1974_table_2:row3:col6 |
| β,* min⁻¹ | `Q47` · kel | 0.00260 | 1/min | 4.333e-05 | 1/s | 1/h | exact (1) | Lowenthal_1974_table_2:row4:col1, Lowenthal_1974_table_2:row4:col2, Lowenthal_1974_table_2:row4:col3, Lowenthal_1974_table_2:row4:col4, Lowenthal_1974_table_2:row4:col5, Lowenthal_1974_table_2:row4:col6 |
| k₁₃, min⁻¹ | `Q303` · k13 | 0.281 | min⁻¹ | 0.004683 | 1/s | 1/min | exact (1) | Lowenthal_1974_table_2:row5:col1, Lowenthal_1974_table_2:row5:col2, Lowenthal_1974_table_2:row5:col3, Lowenthal_1974_table_2:row5:col4, Lowenthal_1974_table_2:row5:col5, Lowenthal_1974_table_2:row5:col6 |
| k₃₁, min⁻¹ | `Q304` · k31 | 0.121 | min⁻¹ | 0.002017 | 1/s | 1/min | exact (1) | Lowenthal_1974_table_2:row6:col1, Lowenthal_1974_table_2:row6:col2, Lowenthal_1974_table_2:row6:col3, Lowenthal_1974_table_2:row6:col4, Lowenthal_1974_table_2:row6:col5, Lowenthal_1974_table_2:row6:col6 |
| k₆₁, min⁻¹ | `Q48` · kcomp | 0.00879 | min⁻¹ | 0.0001465 | 1/s | 1/min | exact (1) | Lowenthal_1974_table_2:row7:col1, Lowenthal_1974_table_2:row7:col2, Lowenthal_1974_table_2:row7:col3, Lowenthal_1974_table_2:row7:col4, Lowenthal_1974_table_2:row7:col5, Lowenthal_1974_table_2:row7:col6 |
| Vₐ, liter/kg | `Q61` · V | 0.050 | liter/kg | 0.0035 | m3 | l/kg | llm (0.6) | Lowenthal_1974_table_2:row8:col1, Lowenthal_1974_table_2:row8:col2, Lowenthal_1974_table_2:row8:col3, Lowenthal_1974_table_2:row8:col4, Lowenthal_1974_table_2:row8:col5, Lowenthal_1974_table_2:row8:col6 |
| Vₐ (area), liter/kg | `Q352` · Vnorm | 0.168 | liter/kg | 0.01176 | m3 | l/kg | llm (0.6) | Lowenthal_1974_table_2:row9:col1, Lowenthal_1974_table_2:row9:col2, Lowenthal_1974_table_2:row9:col3, Lowenthal_1974_table_2:row9:col4, Lowenthal_1974_table_2:row9:col5, Lowenthal_1974_table_2:row9:col6 |
| t₁/₂ (β), min | `Q57` · t1/2z | 266 | min | 1.596e+04 | s | min | space_fold (0.95) | Lowenthal_1974_table_2:row10:col1, Lowenthal_1974_table_2:row10:col2, Lowenthal_1974_table_2:row10:col3, Lowenthal_1974_table_2:row10:col4, Lowenthal_1974_table_2:row10:col5, Lowenthal_1974_table_2:row10:col6 |
| lag time | `Q83` · tlag | 0.42 | h | 1512 | s | h | review_gapfill (0.7) | Somani_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'B, mg/liter' — extend the ontology if this is a real PK parameter (source ['Lowenthal_1974_table_2:row2:col1', 'Lowenthal_1974_table_2:row2:col2', 'Lowenthal_1974_table_2:row2:col3', 'Lowenthal_1974_table_2:row2:col4', 'Lowenthal_1974_table_2:row2:col5', 'Lowenthal_1974_table_2:row2:col6'])
- unit_dimension_mismatch: 'α, min⁻¹' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_unknown: '* min⁻¹' (kel)
- implicit units: 'β,* min⁻¹' → 1/min (from the paper text: "Table III lists the parameter β with the unit 'min-' (OCR artifact for min⁻¹), and the footnote for Table II explicitly ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'patients' subgroup of Lowenthal_1974 (paper reports 3 populations: four normal subjects*, patients, six anephric patients)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt; 0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt; 0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt; 0.1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 123 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.281 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k31]` | 0.121 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k61]` | 0.00879 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.42 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 (β)]` | 266 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tə (β)]` |  | 316 | only_one_extracted |
| `gpt-oss-120b` | `parameters[va (area)]` | 0.168 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[va].value` | 0.050 | 5.01 | mismatch |
| `gpt-oss-120b` | `parameters[α]` | 0.408 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.00260 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium salicylate | sodium_salicylate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salicylic acid | sodium_salicylate | mismatch |

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
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Lowenthal_1974_table_2:row5:col1', 'Lowenthal_1974_table_2:row5:col2', 'Lowenthal_1974_table_2:row5:col3', 'Lowenthal_1974_table_2:row5:col4', 'Lowenthal_1974_table_2:row5:col5', 'Lowenthal_1974_table_2:row5:col6'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['Lowenthal_1974_table_2:row6:col1', 'Lowenthal_1974_table_2:row6:col2', 'Lowenthal_1974_table_2:row6:col3', 'Lowenthal_1974_table_2:row6:col4', 'Lowenthal_1974_table_2:row6:col5', 'Lowenthal_1974_table_2:row6:col6'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Lowenthal_1974_table_2:row9:col1', 'Lowenthal_1974_table_2:row9:col2', 'Lowenthal_1974_table_2:row9:col3', 'Lowenthal_1974_table_2:row9:col4', 'Lowenthal_1974_table_2:row9:col5', 'Lowenthal_1974_table_2:row9:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lowenthal_1974_table_2:row4:col1', 'Lowenthal_1974_table_2:row4:col2', 'Lowenthal_1974_table_2:row4:col3', 'Lowenthal_1974_table_2:row4:col4', 'Lowenthal_1974_table_2:row4:col5', 'Lowenthal_1974_table_2:row4:col6'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Lowenthal_1974_table_2:row7:col1', 'Lowenthal_1974_table_2:row7:col2', 'Lowenthal_1974_table_2:row7:col3', 'Lowenthal_1974_table_2:row7:col4', 'Lowenthal_1974_table_2:row7:col5', 'Lowenthal_1974_table_2:row7:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lowenthal_1974_table_2:row10:col1', 'Lowenthal_1974_table_2:row10:col2', 'Lowenthal_1974_table_2:row10:col3', 'Lowenthal_1974_table_2:row10:col4', 'Lowenthal_1974_table_2:row10:col5', 'Lowenthal_1974_table_2:row10:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lowenthal_1974_table_2:row8:col1', 'Lowenthal_1974_table_2:row8:col2', 'Lowenthal_1974_table_2:row8:col3', 'Lowenthal_1974_table_2:row8:col4', 'Lowenthal_1974_table_2:row8:col5', 'Lowenthal_1974_table_2:row8:col6'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ (1 / [time]) | ['Lowenthal_1974_table_2:row3:col1', 'Lowenthal_1974_table_2:row3:col2', 'Lowenthal_1974_table_2:row3:col3', 'Lowenthal_1974_table_2:row3:col4', 'Lowenthal_1974_table_2:row3:col5', 'Lowenthal_1974_table_2:row3:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Somani_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.5 L | ['Lowenthal_1974_table_2:row8:col1', 'Lowenthal_1974_table_2:row8:col2', 'Lowenthal_1974_table_2:row8:col3', 'Lowenthal_1974_table_2:row8:col4', 'Lowenthal_1974_table_2:row8:col5', 'Lowenthal_1974_table_2:row8:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_salicylate%5D%20SodiumSalicylate_Lowenthal1974_patients&body=Drug%3A%20sodium_salicylate%0ARecord%3A%20SodiumSalicylate_Lowenthal1974_patients%0APaper%3A%20Lowenthal_1974%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_patients%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 06:13 UTC</sub>
