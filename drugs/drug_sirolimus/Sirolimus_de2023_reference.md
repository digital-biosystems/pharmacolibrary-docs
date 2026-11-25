<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sirolimus&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/&quot;},{&quot;label&quot;:&quot;de_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sirolimus_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirolimus/Sirolimus_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sirolimus — `Sirolimus_de2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q302 unit L/min ([length] ** 3 / [time]) vs 1 / [time].

<div class="pk-model-meta" hidden drug="sirolimus" model-id="Sirolimus_de2023_reference" status="rejected" stale="false" population="healthy adult horses" measured-compound="sirolimus" parameterization="mechanistic" topology="1C"></div>

## Citation
de Tonnerre DJ, Medina Torres CE, Stefanovski D, Robinson MA, Kemp KL, Bertin FR et al. Effect of sirolimus on insulin dynamics in horses. Journal of veterinary internal medicine 37(2):703–712 (2023).
  ·  DOI: [10.1111/jvim.16650](https://doi.org/10.1111/jvim.16650)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult.

**Dosing:** 4.2 mg, iv, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 277.0 | ng/mL |
| TCmax (min) | tmax | 5 | min |
| Vd (mL/kg) | V | 371.2 | mL/kg |
| CL (mL/kg/min) | CL | 0.36 | mL/kg/min |
| k10 (L/min) | kel | 0.0010 | L/min |
| k12 (L/min) | k12 | 0.0036 | L/min |
| k21 (L/min) | k21 | 0.0011 | L/min |
| T1/2 (min) | t1/2z | 677.1 | min |
| F | Fab | 0.0954 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q47 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q302 unit L/min ([length] ** 3 / [time]) vs 1 / [time].**

A reported unit could not be converted (kel, k12 and k21), so that value has no SI equivalent. Extracted — sirolimus: Cmax 277 ng/mL, tmax 5 min, V 371 mL/kg, CL 0.36 mL/kg/min, kel 0.001 L/min, k12 0.0036 L/min, k21 0.0011 L/min, t1/2z 677 min, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of parameters: this record has none, the second reading none. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 277.0 | ng/mL | 0.000277 | kg/m3 | ng/ml | exact (1) | de_2023_table_1:row0:col1 |
| TCmax (min) | `Q56` · tmax | 5 | min | 300 | s | min | llm_corrected (0.6) | de_2023_table_1:row1:col1 |
| Vd (mL/kg) | `Q61` · V | 371.2 | mL/kg | 0.02598 | m3 | ml/kg | exact (1) | de_2023_table_1:row2:col1 |
| CL (mL/kg/min) | `Q22` · CL | 0.36 | mL/kg/min | 4.2e-07 | m3/s | ml/(min·kg) | exact (1) | de_2023_table_1:row3:col1 |
| k10 (L/min) | `Q47` · kel | 0.0010 | L/min |  |  | l/min | exact (1) | de_2023_table_1:row4:col1 |
| k12 (L/min) | `Q301` · k12 | 0.0036 | L/min |  |  | l/min | exact (1) | de_2023_table_1:row5:col1 |
| k21 (L/min) | `Q302` · k21 | 0.0011 | L/min |  |  | l/min | exact (1) | de_2023_table_1:row6:col1 |
| T1/2 (min) | `Q57` · t1/2z | 677.1 | min | 4.063e+04 | s | min | half_life_rule (0.95) | de_2023_table_1:row7:col1 |
| F | `Q40` · Fab | 0.0954 |  |  |  |  | exact (1) | de_2023_table_1:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k10 (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k12 (L/min)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k21 (L/min)' → Q302 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q57 ('Terminal half-life (min)', value '3552') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sirolimus
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (14/14 fields) | none |
| `qwen3.8-27b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[parameters]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['de_2023_table_1:row3:col1'] |
| C5_dimension_Q301 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['de_2023_table_1:row5:col1'] |
| C5_dimension_Q302 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['de_2023_table_1:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['de_2023_table_1:row0:col1'] |
| C5_dimension_Q47 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['de_2023_table_1:row4:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['de_2023_table_1:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['de_2023_table_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['de_2023_table_1:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.36 | ['de_2023_table_1:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.51 L/h | ['de_2023_table_1:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 26 L | ['de_2023_table_1:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsirolimus%5D%20Sirolimus_de2023_reference&body=Drug%3A%20sirolimus%0ARecord%3A%20Sirolimus_de2023_reference%0APaper%3A%20de_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sirolimus/Sirolimus_de2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:01 UTC</sub>
