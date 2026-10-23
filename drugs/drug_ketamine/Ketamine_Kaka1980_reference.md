<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;ketamine&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/&quot;},{&quot;label&quot;:&quot;Kaka_1980 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketamine_Boulanger2025_reference&quot;,&quot;label&quot;:&quot;Boulanger_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Boulanger2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Eaton2026_reference&quot;,&quot;label&quot;:&quot;Eaton_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Eaton2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Rantanen2026_reference&quot;,&quot;label&quot;:&quot;Rantanen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Rantanen2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Sukhram2026_reference&quot;,&quot;label&quot;:&quot;Sukhram_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Sukhram2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketamine_Herd2007_reference&quot;,&quot;label&quot;:&quot;Herd_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketamine/Ketamine_Herd2007_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ketamine — `Ketamine_Kaka1980_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> N-demethylketamine and cyclohexene metabolite are orphan compartments because their metabolic formation rates from ketamine are undefined.

<div class="pk-model-meta" hidden drug="ketamine" model-id="Ketamine_Kaka1980_reference" status="rejected" stale="false" population="dogs" measured-compound="ketamine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Kaka JS, Hayton WL. Pharmacokinetics of ketamine and two metabolites in the dog. Journal of pharmacokinetics and biopharmaceutics 8(2):193–202 (1980).
  ·  DOI: [10.1007/BF01065193](https://doi.org/10.1007/BF01065193)

## Population and dosing

**Population:** dogs · condition healthy.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2)alpha | t1/2α | 1.95 | min |
| t 1/2)beta | t1/2β | 61 | min |
| total body clearances (plasma) of ketamine | CL | 32.2 | ml/min/kg |
| Plasma protein binding | fu | 53.5 | % |
| V (idarucizumab) | V | 6.47 | L |
| MET absorption rate in rats (ka) | kabs | 0.66 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**N-demethylketamine and cyclohexene metabolite are orphan compartments because their metabolic formation rates from ketamine are undefined.**

The record is abstract-only, so summary statistics stand in for a fitted model. The link parameters for the formation of N-demethylketamine from ketamine and cyclohexene from N-demethylketamine are both missing. Consequently, these metabolite compartments have no path from the dose, rendering them unreachable. Extracted — ketamine: t1/2α 1.95 min, t1/2β 61 min, CL 32.2 ml/min/kg, fu 53.5 %, V 6.47 L, kabs 0.66 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ketamine, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2)alpha | `Q59` · t1/2α | 1.95 | min | 117 | s | min | llm_corrected (0.6) | Kaka_1980:abstract |
| t 1/2)beta | `Q60` · t1/2β | 61 | min | 3660 | s | min | llm_corrected (0.6) | Kaka_1980:abstract |
| total body clearances (plasma) of ketamine | `Q22` · CL | 32.2 | ml/min/kg | 3.757e-05 | m3/s | ml/(min·kg) | llm (0.6) | Kaka_1980:abstract, Kaka_1980:abstract, Kaka_1980:abstract |
| Plasma protein binding | `Q46` · fu | 53.5 | % |  |  | % | llm_confirmed (0.6) | Kaka_1980:abstract, Kaka_1980:abstract, Kaka_1980:abstract |
| V (idarucizumab) | `Q61` · V | 6.47 | L | 0.00647 | m3 | L | review_gapfill (0.7) | Eaton_2026:review |
| MET absorption rate in rats (ka) | `Q49` · kabs | 0.66 | h−1 | 0.0001833 | 1/s | 1/h | review_gapfill (0.7) | Kir_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for V1 from footnote/prose kept as documentation only (['Kaka_1980:abstract', 'Kaka_1980:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ketamine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged ketamine→parent ×10
- molar mass: no plausible PubChem entry for 'cyclohexene metabolite' ('cyclohexene metabolite') — left in mass units
- molar mass: none found for 'cyclohexene metabolite' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Eaton_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kir_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kaka_1980_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[(t 1/2)alpha]` |  | 1.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[(t 1/2)beta]` |  | 61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ketamine hcl dose]` |  | 15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[met absorption rate in rats]` | 0.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma protein binding i]` |  | 60.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma protein binding ii]` |  | 70.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma protein binding ketamine]` |  | 53.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma protein binding]` | 53.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2)alpha]` | 1.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2)beta]` | 61 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance (plasma) i]` |  | 89.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance (plasma) ii]` |  | 8.54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance (plasma) ketamine]` |  | 32.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearances (plasma) of ketamine]` | 32.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 6.47 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ketamine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ketamine | unknown | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kaka_1980:abstract', 'Kaka_1980:abstract', 'Kaka_1980:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kir_2025:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Kaka_1980:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Kaka_1980:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Eaton_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.2 | ['Kaka_1980:abstract', 'Kaka_1980:abstract', 'Kaka_1980:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 135 L/h | ['Kaka_1980:abstract', 'Kaka_1980:abstract', 'Kaka_1980:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.47 L | ['Eaton_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketamine%5D%20Ketamine_Kaka1980_reference&body=Drug%3A%20ketamine%0ARecord%3A%20Ketamine_Kaka1980_reference%0APaper%3A%20Kaka_1980%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketamine/Ketamine_Kaka1980_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:51 UTC</sub>
