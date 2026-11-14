<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clomipramine&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/&quot;},{&quot;label&quot;:&quot;Lainesse_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clomipramine_King2000_reference&quot;,&quot;label&quot;:&quot;King_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/Clomipramine_King2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clomipramine_Marty1992_reference&quot;,&quot;label&quot;:&quot;Marty_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/Clomipramine_Marty1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clomipramine_NielsenKudsk1980_reference&quot;,&quot;label&quot;:&quot;Nielsen-Kudsk_1980_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/Clomipramine_NielsenKudsk1980_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clomipramine_Kelly1990_reference&quot;,&quot;label&quot;:&quot;Kelly_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/Clomipramine_Kelly1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clomipramine_King2000v2_reference&quot;,&quot;label&quot;:&quot;King_2000_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clomipramine/Clomipramine_King2000v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clomipramine — `Clomipramine_Lainesse2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clomipramine" model-id="Clomipramine_Lainesse2006_reference" status="rejected" stale="false" population="adult spayed cats" measured-compound="clomipramine" parameterization="mechanistic" topology="1C"></div>

## Citation
Lainesse C, Frank D, Meucci V, Intorre L, Soldani G, Doucet M. Pharmacokinetics of clomipramine and desmethylclomipramine after single-dose intravenous and oral administrations in cats. Journal of veterinary pharmacology and therapeutics 29(4):271–278 (2006).
  ·  DOI: [10.1111/j.1365-2885.2006.00742.x](https://doi.org/10.1111/j.1365-2885.2006.00742.x)

## Population and dosing

**Population:** adult spayed cats · condition healthy · age group adult · n = 6.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean half-life | t1/2z | 12.3 | h |
| Mean clomipramine AUC(0--infinity) | AUC∞ | 652.5 | ngxh/mL |
| clearance | CL | 0.393 | L/hxkg |
| V(ss) | V | 5.0 | L/kg |
| MRT | MRT | 13.5 | h |
| Clomipramine bioavailability | Fab | 90 |  |
| elimination rate constant | kel | 0.0635 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.263). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance: this record has none, the second reading 0.393; it also differs on 13 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean half-life | `Q57` · t1/2z | 12.3 | h | 4.428e+04 | s | h | half_life_rule (0.95) | Lainesse_2006:abstract |
| Mean clomipramine AUC(0--infinity) | `Q17` · AUC∞ | 652.5 | ngxh/mL |  |  | (h·ng)/ml | llm_corrected (0.6) | Lainesse_2006:abstract |
| clearance | `Q22` · CL | 0.393 | L/hxkg |  |  | l/(h·kg) | exact (1) | Lainesse_2006:abstract |
| V(ss) | `Q61` · V | 5.0 | L/kg | 0.35 | m3 | l/kg | exact (1) | Lainesse_2006:abstract |
| MRT | `Q53` · MRT | 13.5 | h | 4.86e+04 | s | h | exact (1) | Lainesse_2006:abstract |
| Clomipramine bioavailability | `Q40` · Fab | 90 |  |  |  |  | llm_confirmed (0.6) | Lainesse_2006:abstract |
| elimination rate constant | `Q47` · kel | 0.0635 | h |  |  | h | exact (1) | Lainesse_2006:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ngxh/mL' (AUC∞)
- unit_dimension_unknown: 'L/hxkg' (CL)
- unit_dimension_mismatch: 'elimination rate constant' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 336)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clomipramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- toxin: elimination rate constant printed only as a range — the value is the range's midpoint; route to review
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 0/7 row label(s) assigned, 0 linked by role
- molar mass: none found for 'desmethylclomipramine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lainesse_2006_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.263 (5/19 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance]` |  | 0.393 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 0.393 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clomipramine bioavailability]` |  | 90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clomipramine bioavailability]` | 90 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination rate constant]` |  | 0.0635 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination rate constant]` | 0.0635 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean clomipramine auc]` |  | 652.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean clomipramine auc]` | 652.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean half-life]` |  | 12.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean half-life]` | 12.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` |  | 13.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 13.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` |  | 5.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 5.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['Lainesse_2006:abstract'] |
| C5_dimension_Q53 | pass | [time] |  | ['Lainesse_2006:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Lainesse_2006:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lainesse_2006:abstract'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ngxh/mL | ['Lainesse_2006:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L/hxkg | ['Lainesse_2006:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.393 | ['Lainesse_2006:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 350 L | ['Lainesse_2006:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclomipramine%5D%20Clomipramine_Lainesse2006_reference&body=Drug%3A%20clomipramine%0ARecord%3A%20Clomipramine_Lainesse2006_reference%0APaper%3A%20Lainesse_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clomipramine/Clomipramine_Lainesse2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 14:51 UTC</sub>
