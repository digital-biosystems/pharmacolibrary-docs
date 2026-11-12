<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Arenobufagin&quot;,&quot;href&quot;:&quot;drugs/toxin_arenobufagin/&quot;},{&quot;label&quot;:&quot;Yuan_2017 \u00b7 abg_pns&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arenobufagin_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_arenobufagin/Arenobufagin_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Arenobufagin — `Arenobufagin_Yuan2017_abg_pns`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record for arenobufagin was rejected because the area under the curve was assigned concentration-time units instead of volume flow units.

<div class="pk-model-meta" hidden drug="Arenobufagin" model-id="Arenobufagin_Yuan2017_abg_pns" status="rejected" stale="false" population="rats" measured-compound="Arenobufagin" parameterization="mechanistic" topology="1C"></div>

## Citation
Yuan X, Xie Q, Su K, Li Z, Dong D, Wu B. Systemic delivery of the anticancer agent arenobufagin using polymeric nanomicelles. International journal of nanomedicine 12:4981–4989 (2017).
  ·  DOI: [10.2147/IJN.S139128](https://doi.org/10.2147/IJN.S139128)

## Population and dosing

**Population:** rats · condition healthy · n = 5.

**Dosing:** 245 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K10 | kel | 1.86 | 1/h |
| K12 | k12 | 0.58 | 1/h |
| K21 | k21 | 0.56 | 1/h |
| t1/2alpha | t1/2α | 18.3 | min |
| t1/2beta | t1/2β | 108 | min |
| CL | CL | 26.7 | mL/kg/min |
| CL2 | Q | 6.76 | mL/kg/min |
| AUC0–t | AUCt | 95.1 | mg/mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for arenobufagin was rejected because the area under the curve was assigned concentration-time units instead of volume flow units.**

The extracted value of 95.1 mg/mL/min is explicitly defined as the area under the concentration time curve. This parameter's unit is dimensionally incorrect for a clearance value, which the model structure requires to be expressed as volume per time, such as mL/kg/min. Consequently, the unit could not be converted to SI standards, leading to a dimension mismatch that invalidated the model record. Extracted — arenobufagin: kel 1.86 1/h, k12 0.58 1/h, k21 0.56 1/h, t1/2α 18.3 min, t1/2β 108 min, CL 26.7 mL/kg/min, Q 6.76 mL/kg/min, AUCt 95.1 mg/mL/min.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K10 | `Q47` · kel | 1.86 | 1/h | 0.0005167 | 1/s | 1/h | exact (1) | t2-ijn-12-4981:row1:col4 |
| K12 | `Q301` · k12 | 0.58 | 1/h | 0.0001611 | 1/s | 1/h | exact (1) | t2-ijn-12-4981:row2:col4 |
| K21 | `Q302` · k21 | 0.56 | 1/h | 0.0001556 | 1/s | 1/h | exact (1) | t2-ijn-12-4981:row3:col4 |
| t1/2alpha | `Q59` · t1/2α | 18.3 | min | 1098 | s | min | half_life_rule (0.95) | t2-ijn-12-4981:row4:col4 |
| t1/2beta | `Q60` · t1/2β | 108 | min | 6480 | s | min | half_life_rule (0.95) | t2-ijn-12-4981:row5:col4 |
| CL | `Q22` · CL | 26.7 | mL/kg/min | 3.115e-05 | m3/s | ml/(min·kg) | exact (1) | t2-ijn-12-4981:row6:col4 |
| CL2 | `Q30` · Q | 6.76 | mL/kg/min | 7.887e-06 | m3/s | ml/(min·kg) | special_case (0.95) | t2-ijn-12-4981:row7:col4 |
| AUC0–t | `Q19` · AUCt | 95.1 | mg/mL/min |  |  | mg/(min·ml) | exact (1) | t2-ijn-12-4981:row8:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'abg-pns' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'AUC0–t' → Q19 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Arenobufagin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'abg-pns' subgroup of Yuan_2017 (paper reports 2 populations: abg-pns, abg-sol)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table t2-ijn-12-4981: unbound_uncertainty
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | mg/mL/min ([mass] / [length] ** 3 / [time]) | ['t2-ijn-12-4981:row8:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t2-ijn-12-4981:row6:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t2-ijn-12-4981:row7:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['t2-ijn-12-4981:row2:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['t2-ijn-12-4981:row3:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['t2-ijn-12-4981:row1:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['t2-ijn-12-4981:row4:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['t2-ijn-12-4981:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.7 | ['t2-ijn-12-4981:row6:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 112 L/h | ['t2-ijn-12-4981:row6:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barenobufagin%5D%20Arenobufagin_Yuan2017_abg_pns&body=Drug%3A%20arenobufagin%0ARecord%3A%20Arenobufagin_Yuan2017_abg_pns%0APaper%3A%20Yuan_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arenobufagin/Arenobufagin_Yuan2017_abg_pns%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 20:36 UTC</sub>
