<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab emtansine&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/&quot;},{&quot;label&quot;:&quot;Lu_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabEmtansine_Chen2017_reference&quot;,&quot;label&quot;:&quot;Chen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gupta2012_reference&quot;,&quot;label&quot;:&quot;Gupta_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gupta2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Betts2020_mouseb&quot;,&quot;label&quot;:&quot;Betts_2020_mouseb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab emtansine — `TrastuzumabEmtansine_Lu2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the trastuzumab emtansine conjugate lacks defined metabolic links to its metabolites, and abstract-only data prevented a fitted model.

<div class="pk-model-meta" hidden drug="trastuzumab emtansine" model-id="TrastuzumabEmtansine_Lu2019_reference" status="rejected" stale="false" population="HER2-positive metastatic breast cancer patients" measured-compound="trastuzumab emtansine conjugate" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lu D, Li C, Riggs M, Polhamus D, French J, Agarwal P et al. Pharmacokinetics of trastuzumab emtansine (T-DM1) as a single agent or in combination with pertuzumab in HER2-positive breast cancer patients with recurrent or locally advanced metastatic breast cancer. Cancer chemotherapy and pharmacology 84(1):175–185 (2019).
  ·  DOI: [10.1007/s00280-019-03852-z](https://doi.org/10.1007/s00280-019-03852-z)

## Population and dosing

**Population:** HER2-positive metastatic breast cancer patients · condition HER2-positive metastatic breast cancer · age group adult · n = &gt;=375.

**Dosed compound ≠ measured compound:** dosed trastuzumab emtansine, measured trastuzumab emtansine conjugate.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cycle 1 Ctrough | Ctrough | 1.34 | µg/mL |
| area under the concentration-time curve from time zero to infinity after first dose (AUCinf) | AUC∞ | 338 | µg*day/mL |
| Cycle 1 pertuzumab Cmax | Cmax | 276 | µg/mL |
| CL (mL/day/kg) | CL | 22.8 | mL/day/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the trastuzumab emtansine conjugate lacks defined metabolic links to its metabolites, and abstract-only data prevented a fitted model.**

The model structure lists metabolism relations from the conjugate to total trastuzumab and DM1, but the link parameters are marked as unknown. Consequently, these metabolites are unreachable from the dose compartment. Additionally, the record relies on abstract summary statistics like a Cmax of 276 µg/mL rather than a fitted model. Extracted — trastuzumab emtansine conjugate: Ctrough 1.34 µg/mL, AUC∞ 338 µg*day/mL, Cmax 276 µg/mL, CL 22.8 mL/day/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab emtansine, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cycle 1 Ctrough | `Q37` · Ctrough | 1.34 | µg/mL |  |  | µg/ml | llm_confirmed (0.6) | Lu_2019:abstract |
| area under the concentration-time curve from time zero to infinity after first dose (AUCinf) | `Q17` · AUC∞ | 338 | µg*day/mL |  |  | (d·µg)/ml | llm (0.6) | Lu_2019:abstract |
| Cycle 1 pertuzumab Cmax | `Q32` · Cmax | 276 | µg/mL |  |  | µg/ml | llm_confirmed (0.6) | Lu_2019:abstract |
| CL (mL/day/kg) | `Q22` · CL | 22.8 | mL/day/kg | 1.847e-08 | m3/s | L/h | review_gapfill (0.7) | Betts_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for Cmax from footnote/prose kept as documentation only (['Lu_2019:abstract'])
- dropped duplicate Q37 ('Cycle 1 pertuzumab Ctrough', value 64.8) — already have one for this compound
- dropped duplicate Q17 ('Cycle 1 pertuzumab AUCinf', value 4470) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab emtansine conjugate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'trastuzumab emtansine conjugate' ('trastuzumab emtansine conjugate') — left in mass units
- molar mass: none found for 'trastuzumab_emtansine' — its concentrations stay mass-only
- molar mass: none found for 'trastuzumab emtansine conjugate' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Betts_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lu_2019_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trastuzumab emtansine conjugate', 'total trastuzumab', 'metabolism'], ['trastuzumab emtansine conjugate', 'dm1', 'metabolism']] | [['trastuzumab emtansine', 'total trastuzumab', 'metabolism'], ['trastuzumab emtansine', 'dm1', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[area under the concentration-time curve from time zero to infinity after first dose]` | 338 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf for t‐dm1 conjugate]` |  | 338 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 22.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cycle 1 cmax for t‐dm1 conjugate]` |  | 74.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cycle 1 ctrough for t‐dm1 conjugate]` |  | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cycle 1 ctrough]` | 1.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cycle 1 pertuzumab cmax]` | 276 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab emtansine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab emtansine conjugate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Lu_2019:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Betts_2020:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lu_2019:abstract'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Lu_2019:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 22.8 | ['Betts_2020:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0665 L/h | ['Betts_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab_emtansine%5D%20TrastuzumabEmtansine_Lu2019_reference&body=Drug%3A%20trastuzumab_emtansine%0ARecord%3A%20TrastuzumabEmtansine_Lu2019_reference%0APaper%3A%20Lu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Lu2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:48 UTC</sub>
