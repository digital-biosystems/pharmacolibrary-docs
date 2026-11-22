<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Zhou_1990 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Lu1983_reference&quot;,&quot;label&quot;:&quot;Lu_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Lu1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Malik2016_reference&quot;,&quot;label&quot;:&quot;Malik_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Malik2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Sethi1984_reference&quot;,&quot;label&quot;:&quot;Sethi_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Sethi1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Zhou1990_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> Rejected because the model links vincristine to an unreachable metabolite compartment that has no dose path in the population.

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Zhou1990_reference" status="rejected" stale="false" population="rats" measured-compound="vinblastine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Zhou XJ, Martin M, Placidi M, Cano JP, Rahmani R. In vivo and in vitro pharmacokinetics and metabolism of vincaalkaloids in rat. II. Vinblastine and vincristine. European journal of drug metabolism and pharmacokinetics 15(4):323–332 (1990).
  ·  DOI: [10.1007/BF03190222](https://doi.org/10.1007/BF03190222)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 7, 42 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Estimated parameters: Vc (l/kg) | V1 | 5.86 | l/kg |
| Estimated parameters: Vt (l/kg) | Vss | 11.46 | l/kg |
| Estimated parameters: Cls (l/h/kg) | CLnorm | 1.49 | l/h/kg |
| theta_q415_weight_power | theta_q415_weight_power | 87.0 |  |
| theta_q59_weight_power | theta_q59_weight_power | 0.51 |  |
| theta_q415_weight_power | theta_q415_weight_power | 47.0 |  |
| theta_q60_weight_power | theta_q60_weight_power | 7.5 |  |
| Systemic clearance | CL | 46.2 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583), qwen3.8-27b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the model links vincristine to an unreachable metabolite compartment that has no dose path in the population.**

The record defines a metabolic link from vincristine to metabolites, but vincristine is not the dosed compound in this vinblastine study. This creates an orphan compartment with no input, making the model structurally invalid. The second reader confirmed that the links erroneously include vincristine alongside the correct vinblastine metabolite path. Extracted — vinblastine: V1 5.86 l/kg, Vss 11.5 l/kg, CLnorm 1.49 l/h/kg, CL 46.2 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has vinblastine, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Estimated parameters: Vc (l/kg) | `Q63` · V1 | 5.86 | l/kg | 0.4102 | m3 | l/kg | llm_confirmed (0.6) | Zhou_1990_table_1:row0:col6 |
| Estimated parameters: Vt (l/kg) | `Q65` · Vss | 11.46 | l/kg | 0.8022 | m3 | l/kg | llm (0.6) | Zhou_1990_table_1:row0:col7 |
| Estimated parameters: Cls (l/h/kg) | `Q354` · CLnorm | 1.49 | l/h/kg | 2.897e-05 | m3/s | l/(h·kg) | llm (0.6) | Zhou_1990_table_1:row0:col8 |
| theta_q415_weight_power | `Q900` · theta_q415_weight_power | 87.0 |  |  |  |  |  | Zhou_1990_table_1:row0:col2 |
| theta_q59_weight_power | `Q900` · theta_q59_weight_power | 0.51 |  |  |  |  |  | Zhou_1990_table_1:row0:col3 |
| theta_q415_weight_power | `Q900` · theta_q415_weight_power | 47.0 |  |  |  |  |  | Zhou_1990_table_1:row0:col4 |
| theta_q60_weight_power | `Q900` · theta_q60_weight_power | 7.5 |  |  |  |  |  | Zhou_1990_table_1:row0:col5 |
| Systemic clearance | `Q22` · CL | 46.2 | L/h | 1.283e-05 | m3/s | L/h | review_gapfill (0.7) | Levêque_1996:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q415 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q59 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q60 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Levêque_1996's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1
- transposed table Zhou_1990_table_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |
| `qwen3.8-27b` | not confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['vinblastine', 'metabolites', 'metabolism'], ['vincristine', 'metabolites', 'metabolism']] | [['vinblastine', 'vinblastine metabolite', 'metabolism'], ['vincristine', 'vincristine metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[estimated parameters: cls].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[estimated parameters: vt].parameter_id` | Q65 | Q61 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | vinblastine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | vinblastine | unknown | mismatch |
| `qwen3.8-27b` | `parameters[theta_q86_weight_power]` |  | 87.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_weight_power].value` | 87.0 | 47.0 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | vinblastine and vincristine | vinblastine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | vinblastine and vincristine | vinblastine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Levêque_1996:review'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Zhou_1990_table_1:row0:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Zhou_1990_table_1:row0:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Zhou_1990_table_1:row0:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 46.2 | ['Levêque_1996:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 46.2 L/h | ['Levêque_1996:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 410 L | ['Zhou_1990_table_1:row0:col6'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 802 L | ['Zhou_1990_table_1:row0:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Zhou1990_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Zhou1990_reference%0APaper%3A%20Zhou_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Zhou1990_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 02:11 UTC</sub>
