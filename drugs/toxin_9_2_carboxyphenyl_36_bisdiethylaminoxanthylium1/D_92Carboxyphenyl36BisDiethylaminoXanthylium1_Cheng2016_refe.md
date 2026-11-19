<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)&quot;,&quot;href&quot;:&quot;drugs/toxin_9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1/&quot;},{&quot;label&quot;:&quot;Cheng_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_92Carboxyphenyl36Bisdiethylaminoxanthylium1_Wang2024_refer&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1/D_92Carboxyphenyl36Bisdiethylaminoxanthylium1_Wang2024_refer.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_92Carboxyphenyl36Bisdiethylaminoxanthylium1_Yong2024_refer&quot;,&quot;label&quot;:&quot;Yong_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1/D_92Carboxyphenyl36Bisdiethylaminoxanthylium1_Yong2024_refer.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+) — `D_92Carboxyphenyl36BisDiethylaminoXanthylium1_Cheng2016_refe`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The extracted clearance of 229.7 mL/h/kg and volume of 2.5 mL imply non-physiological parameters due to an extraction error from abstract-only data.

<div class="pk-model-meta" hidden drug="9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)" model-id="D_92Carboxyphenyl36BisDiethylaminoXanthylium1_Cheng2016_refe" status="rejected" stale="false" population="rats" measured-compound="9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)" parameterization="mechanistic" topology="1C"></div>

## Citation
Cheng YY, Tsai TH. A validated LC-MS/MS determination method for the illegal food additive rhodamine B: Applications of a pharmacokinetic study in rats. Journal of pharmaceutical and biomedical analysis 125:394–399 (2016).
  ·  DOI: [10.1016/j.jpba.2016.04.018](https://doi.org/10.1016/j.jpba.2016.04.018)

## Population and dosing

**Population:** rats · condition healthy.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax | tmax | 1.3 | h |
| elimination half-life | t1/2z | 8.8 | h |
| clearance | CL | 229.7 | mL/h/kg |
| 11 nm PS latex volume | V | 2.5 | mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The extracted clearance of 229.7 mL/h/kg and volume of 2.5 mL imply non-physiological parameters due to an extraction error from abstract-only data.**

The record lists a volume of distribution as 2.5 mL, which is unrealistically small for systemic distribution in rats, alongside a clearance of 229.7 mL/h/kg. This combination results in a calculated half-life inconsistent with the reported 8.8 h, indicating a unit or scale extraction error. The model was rejected because the parameters fall outside the physiological window, a limitation stemming from deriving values solely from the abstract's summary statistics rather than a fitted model. Extracted — 9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+): tmax 1.3 h, t1/2z 8.8 h, CL 230 mL/h/kg, V 2.5 mL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax | `Q56` · tmax | 1.3 | h | 4680 | s | h | exact (1) | Cheng_2016:abstract |
| elimination half-life | `Q57` · t1/2z | 8.8 | h | 3.168e+04 | s | h | half_life_rule (0.95) | Cheng_2016:abstract |
| clearance | `Q22` · CL | 229.7 | mL/h/kg | 4.466e-06 | m3/s | ml/(h·kg) | exact (1) | Cheng_2016:abstract |
| 11 nm PS latex volume | `Q61` · V | 2.5 | mL | 2.5e-06 | m3 | L | review_gapfill (0.7) | Poon_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)
- molar mass: no plausible PubChem entry for '9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)' ('9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium') — left in mass units
- molar mass: none found for '9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1' — its concentrations stay mass-only
- molar mass: none found for '9-(2-Carboxyphenyl)-3,6-bis(diethylamino)xanthylium(1+)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Poon_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Cheng_2016_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cheng_2016:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Cheng_2016:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Cheng_2016:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Poon_2017:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 229.7 | ['Cheng_2016:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.1 L/h | ['Cheng_2016:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0025 L | ['Poon_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1%5D%20D_92Carboxyphenyl36BisDiethylaminoXanthylium1_Cheng2016_refe&body=Drug%3A%209_2_carboxyphenyl_36_bisdiethylaminoxanthylium1%0ARecord%3A%20D_92Carboxyphenyl36BisDiethylaminoXanthylium1_Cheng2016_refe%0APaper%3A%20Cheng_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_9_2_carboxyphenyl_36_bisdiethylaminoxanthylium1/D_92Carboxyphenyl36BisDiethylaminoXanthylium1_Cheng2016_refe%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 10:31 UTC</sub>
