<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;ranibizumab&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/&quot;},{&quot;label&quot;:&quot;Xu_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ranibizumab_Crass2025_reference&quot;,&quot;label&quot;:&quot;Crass_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Crass2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Diack2024v2_reference&quot;,&quot;label&quot;:&quot;Diack_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Diack2024v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Fidler2020_estimated_value_rse_interval&quot;,&quot;label&quot;:&quot;Fidler_2020_estimated_value_rse_interval&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Fidler2020_estimated_value_rse_interval.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ranibizumab — `Ranibizumab_Xu2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Ranibizumab intravitreal clearance (0.023 mL/h) and terminal half-life (9 days) are physiologically implausible.

<div class="pk-model-meta" hidden drug="ranibizumab" model-id="Ranibizumab_Xu2013_reference" status="rejected" stale="false" population="patients with neovascular age-related macular degeneration" measured-compound="ranibizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Xu L, Lu T, Tuomi L, Jumbe N, Lu J, Eppler S et al. Pharmacokinetics of ranibizumab in patients with neovascular age-related macular degeneration: a population approach. Investigative ophthalmology & visual science 54(3):1616–1624 (2013).
  ·  DOI: [10.1167/iovs.12-10260](https://doi.org/10.1167/iovs.12-10260)

## Population and dosing

**Population:** patients with neovascular age-related macular degeneration · condition neovascular age-related macular degeneration · age group adult · n = 229.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VITREOUS ELIMINATION HALF-LIFE (T1/2) | t1/2z | 9 | DAYS |
| SYSTEMIC-TO-VITREOUS EXPOSURE RATIO | AUC ratio | 90000 | 1: 90,000 |
| intravitreal clearance of | CL | 0.023 | mL/h |
| vitreous volume | V | 4.0 | mL |
| KA | kabs | 0.0528 | days−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ranibizumab intravitreal clearance (0.023 mL/h) and terminal half-life (9 days) are physiologically implausible.**

The record derives ranibizumab parameters solely from abstract summary statistics rather than a fitted model. The estimated intravitreal clearance of 0.023 mL/h combined with a terminal half-life of 9 days indicates an extreme unit or scale error. This magnitude violates physiological windows for intravitreal drug elimination. Extracted — ranibizumab: t1/2z 9 DAYS, AUC ratio 9e+04 1: 90,000, CL 0.023 mL/h, V 4 mL, kabs 0.0528 days−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ranibizumab, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VITREOUS ELIMINATION HALF-LIFE (T1/2) | `Q57` · t1/2z | 9 | DAYS | 7.776e+05 | s | d | llm (0.6) | Xu_2013:abstract |
| SYSTEMIC-TO-VITREOUS EXPOSURE RATIO | `Q21` · AUC ratio | 90000 | 1: 90,000 |  |  | 1 | llm_corrected (0.6) | Xu_2013:abstract |
| intravitreal clearance of | `Q22` · CL | 0.023 | mL/h | 6.389e-12 | m3/s | L/h | review_gapfill (0.7) | Del_2020:review |
| vitreous volume | `Q61` · V | 4.0 | mL | 4e-06 | m3 | L | review_gapfill (0.7) | Crass_2025:review |
| KA | `Q49` · kabs | 0.0528 | days−1 | 6.111e-07 | 1/s | 1/h | review_gapfill (0.7) | Crass_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('INTRINSIC SYSTEMIC ELIMINATION T1/2', value 2) — already have one for this compound
- dropped duplicate Q57 ('APPARENT SERUM T1/2', value 9) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ranibizumab
- molar mass: none found for 'ranibizumab' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Del_2020's review values (primary lacked it)
- gap-filled Q61 (V) from Crass_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Crass_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Xu_2013_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[intravitreal clearance of]` | 0.023 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0528 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic-to-vitreous exposure ratio]` | 90000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic-to-vitreous exposure ratio]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vitreous elimination half-life]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vitreous elimination half-life]` |  | 9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vitreous volume]` | 4.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ranibizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ranibizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Del_2020:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Crass_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Xu_2013:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Crass_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.023 | ['Del_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 2.3e-05 L/h | ['Del_2020:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.004 L | ['Crass_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Branibizumab%5D%20Ranibizumab_Xu2013_reference&body=Drug%3A%20ranibizumab%0ARecord%3A%20Ranibizumab_Xu2013_reference%0APaper%3A%20Xu_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ranibizumab/Ranibizumab_Xu2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:21 UTC</sub>
