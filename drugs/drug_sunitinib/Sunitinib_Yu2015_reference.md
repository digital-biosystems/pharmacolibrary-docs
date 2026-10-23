<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sunitinib&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/&quot;},{&quot;label&quot;:&quot;Yu_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sunitinib_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Wang2020_reference&quot;,&quot;label&quot;:&quot;Wang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sunitinib — `Sunitinib_Yu2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected for implausible distribution volumes: 0.48 L for sunitinib and SU12662, and 0.45 L for SU12662.

<div class="pk-model-meta" hidden drug="sunitinib" model-id="Sunitinib_Yu2015_reference" status="rejected" stale="false" population="cancer patients" measured-compound="sunitinib and SU12662" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Yu H, Steeghs N, Kloth JS, de Wit D, van Hasselt JG, van Erp NP et al. Integrated semi-physiological pharmacokinetic model for both sunitinib and its active metabolite SU12662. British journal of clinical pharmacology 79(5):809–819 (2015).
  ·  DOI: [10.1111/bcp.12550](https://doi.org/10.1111/bcp.12550)

## Population and dosing

**Population:** cancer patients · condition cancer · n = 70.

**Dosed compound ≠ measured compound:** dosed sunitinib, measured sunitinib and SU12662.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance of sunitinib | CL | 35.7 | l h(-1) |
| clearance of SU12662 | CL | 17.1 | l h(-1) |
| both volumes of distribution | V | 0.48 | L |
| clearance and volume of distribution of SU12662 | V | 0.45 | L |
| ka | kabs | 13.92 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected for implausible distribution volumes: 0.48 L for sunitinib and SU12662, and 0.45 L for SU12662.**

The reported volumes were 0.48 L for both sunitinib and SU12662, and 0.45 L for SU12662; the finding was that clearance/volume magnitude fell outside the physiological window. The record was built from the abstract alone, so its summary statistics stood in for a fitted model. Extracted — sunitinib: CL 35.7 l h(-1); SU12662: CL 17.1 l h(-1), V 0.45 L; sunitinib and SU12662: V 0.48 L, kabs 13.9 h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clearance and volume of distribution of su12662: this record has 0.45, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance of sunitinib | `Q22` · CL | 35.7 | l h(-1) | 9.917e-06 | m3/s | l/h | llm_confirmed (0.6) | Yu_2015:abstract |
| clearance of SU12662 | `Q22` · CL | 17.1 | l h(-1) | 4.75e-06 | m3/s | l/h | exact (1) | Yu_2015:abstract |
| both volumes of distribution | `Q61` · V | 0.48 | L | 0.00048 | m3 | L | llm (0.6) | Yu_2015:abstract |
| clearance and volume of distribution of SU12662 | `Q61` · V | 0.45 | L | 0.00045 | m3 | L | llm_confirmed (0.6) | Yu_2015:abstract |
| ka | `Q49` · kabs | 13.92 | h−1 | 0.003867 | 1/s | 1/h | review_gapfill (0.7) | Liu_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'inter-individual variability of both clearances' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'both volumes of distribution' → L (from the popPK convention: 'Volume of distribution is conventionally reported in L; the value 0.48 is consistent with an absolute volume.')
- implicit units: 'clearance and volume of distribution of SU12662' → L (from the popPK convention: 'The parameter is identified as a volume of distribution, conventionally reported in L; the value 0.45 is consistent with')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sunitinib and SU12662
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 2 linked by role; re-tagged sunitinib and SU12662→parent ×1, sunitinib and SU12662→SU12662 ×2
- molar mass: no plausible PubChem entry for 'sunitinib and SU12662' ('sunitinib and N-desethyl sunitinib') — left in mass units
- molar mass: none found for 'sunitinib and SU12662' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Liu_2020's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Yu_2015_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[both volumes of distribution]` | 0.48 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance and volume of distribution of su12662]` | 0.45 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` | 13.92 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Yu_2015:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Yu_2015:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Liu_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Yu_2015:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Yu_2015:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.7 | ['Yu_2015:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.7 L/h | ['Yu_2015:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.1 L/h | ['Yu_2015:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.48 L | ['Yu_2015:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.45 L | ['Yu_2015:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsunitinib%5D%20Sunitinib_Yu2015_reference&body=Drug%3A%20sunitinib%0ARecord%3A%20Sunitinib_Yu2015_reference%0APaper%3A%20Yu_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sunitinib/Sunitinib_Yu2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:32 UTC</sub>
