<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;Ornithine&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/&quot;},{&quot;label&quot;:&quot;Le_1997 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ornithine_Jia2026_reference&quot;,&quot;label&quot;:&quot;Jia_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Jia2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Serkland2026_reference&quot;,&quot;label&quot;:&quot;Serkland_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Serkland2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ornithine — `Ornithine_Le1997_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:28 UTC (Needs review), but the paper was screened again on 2026-10-07 19:35 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Ornithine" model-id="Ornithine_Le1997_reference" status="rejected" stale="true" population="burn patients" measured-compound="ornithine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Le Bricon T, Coudray-Lucas C, Lioret N, Lim SK, Plassart F, Schlegel L et al. Ornithine alpha-ketoglutarate metabolism after enteral administration in burn patients: bolus compared with continuous infusion. The American journal of clinical nutrition 65(2):512–518 (1997).
  ·  DOI: [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512)

## Population and dosing

**Population:** burn patients · condition burn injury · age group adult · n = 26.

**Dosed compound ≠ measured compound:** dosed ornithine alpha-ketoglutarate, measured ornithine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption constant | kabs | 0.028 | min-1 |
| elimination half-life | t1/2z | 89 | min |
| area under the curve (AUC)0-7h: proline | AUCt | 41.4 | mmol.min/L |
| area under the curve (AUC)0-7h: glutamine | AUCt | 20.4 | mmol.min/L |
| area under the curve (AUC)0-7h: arginine | AUC | 7.3 | mmol.min/L |
| CL | CL | 0.133 | L/h |
| V | V | 7.22 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kwack_2026) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — ornithine: kabs 0.028 min-1, t1/2z 89 min, CL 0.133 L/h, V 7.22 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ornithine alpha-ketoglutarate, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption constant | `Q49` · kabs | 0.028 | min-1 | 0.0004667 | 1/s | 1/min | exact (1) | Le_1997:abstract |
| elimination half-life | `Q57` · t1/2z | 89 | min | 5340 | s | min | llm (0.6) | Le_1997:abstract |
| area under the curve (AUC)0-7h: proline | `Q19` · AUCt | 41.4 | mmol.min/L |  |  | (min·mM)/l | llm_corrected (0.6) | Le_1997:abstract |
| area under the curve (AUC)0-7h: glutamine | `Q19` · AUCt | 20.4 | mmol.min/L |  |  | (min·mM)/l | llm_corrected (0.6) | Le_1997:abstract |
| area under the curve (AUC)0-7h: arginine | `Q88` · AUC | 7.3 | mmol.min/L |  |  | (min·mM)/l | llm_confirmed (0.6) | Le_1997:abstract |
| CL | `Q22` · CL | 0.133 | L/h | 3.694e-08 | m3/s | L/h | review_gapfill (0.7) | Kwack_2026:review |
| V | `Q61` · V | 7.22 | L | 0.00722 | m3 | L | review_gapfill (0.7) | Kwack_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'area under the curve (AUC)0-7h: proline' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'area under the curve (AUC)0-7h: glutamine' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'area under the curve (AUC)0-7h: arginine' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ornithine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 1 linked by role; re-tagged ornithine→parent ×2, ornithine→proline ×1, ornithine→glutamine ×1, ornithine→arginine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Kwack_2026's review values (primary lacked it)
- gap-filled Q61 (V) from Kwack_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Le_1997_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.214 (3/14 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ornithine alpha-ketoglutarate', 'ornithine', 'metabolism'], ['ornithine alpha-ketoglutarate', 'proline', 'metabolism'], ['ornithine alpha-ketoglutarate', 'glutamine', 'metabolism'], ['ornithine alpha-ketoglutarate', 'arginine', 'metabolism']] | [['okg', 'ornithine', 'metabolism'], ['okg', 'proline', 'metabolism'], ['okg', 'glutamine', 'metabolism'], ['okg', 'arginine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[area under the curve (auc)0-7h: arginine]` | 7.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under the curve (auc)0-7h: glutamine]` | 20.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under the curve (auc)0-7h: proline]` | 41.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[arginine]` |  | 7.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.133 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[glutamine]` |  | 20.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[proline]` |  | 41.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 7.22 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ornithine alpha-ketoglutarate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ornithine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | fail | [substance] * [time] / [length] ** 3 | mmol.min/L | ['Le_1997:abstract'] |
| C5_dimension_Q19 | fail | [substance] * [time] / [length] ** 3 | mmol.min/L | ['Le_1997:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kwack_2026:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Le_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Le_1997:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kwack_2026:review'] |
| C5_dimension_Q88 | fail | [substance] * [time] / [length] ** 3 | mmol.min/L | ['Le_1997:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.133 | ['Kwack_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.133 L/h | ['Kwack_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.22 L | ['Kwack_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bornithine%5D%20Ornithine_Le1997_reference&body=Drug%3A%20ornithine%0ARecord%3A%20Ornithine_Le1997_reference%0APaper%3A%20Le_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ornithine/Ornithine_Le1997_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:35 UTC</sub>
