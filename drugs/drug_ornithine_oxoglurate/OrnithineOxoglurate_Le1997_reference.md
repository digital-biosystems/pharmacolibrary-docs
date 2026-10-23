<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;ornithine oxoglurate&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/&quot;},{&quot;label&quot;:&quot;Le_1997 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OrnithineOxoglurate_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ornithine oxoglurate — `OrnithineOxoglurate_Le1997_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ornithine oxoglurate record was rejected because its metabolite compartments (ornithine, proline, glutamine, arginine) have no metabolism link parameters, leaving them unlinked, and it was built from the abstract only.

<div class="pk-model-meta" hidden drug="ornithine oxoglurate" model-id="OrnithineOxoglurate_Le1997_reference" status="rejected" stale="false" population="burn patients" measured-compound="ornithine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Le Bricon T, Coudray-Lucas C, Lioret N, Lim SK, Plassart F, Schlegel L et al. Ornithine alpha-ketoglutarate metabolism after enteral administration in burn patients: bolus compared with continuous infusion. The American journal of clinical nutrition 65(2):512–518 (1997).
  ·  DOI: [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512)

## Population and dosing

**Population:** burn patients · condition burn injury · age group adult · n = 42.

**Dosed compound ≠ measured compound:** dosed ornithine_oxoglurate, measured ornithine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption constant | kabs | 0.028 | min-1 |
| elimination half-life | t1/2z | 89 | min |
| lowest creatinine clearance was | CL | 26.0 | mL/min |
| volume of distribution was | V | 33.2 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ornithine oxoglurate record was rejected because its metabolite compartments (ornithine, proline, glutamine, arginine) have no metabolism link parameters, leaving them unlinked, and it was built from the abstract only.**

The four metabolism links from ornithine oxoglurate to ornithine, proline, glutamine and arginine carry no link parameter (link_parameter: none, kind unknown), so the metabolite compartments are unreachable from the dose. The record is abstract-only, so reported summary statistics (e.g. kabs 0.028 min-1, t1/2z 89 min, V 33.2 L, CL 26.0 mL/min) stood in for a fitted model. A second reader also disagreed on the dose compound and analyte naming and read AUC0-7h values (arginine 7.3, glutamine 20.4, proline 41.4) that are absent from this record. Extracted — ornithine oxoglurate: kabs 0.028 min-1, t1/2z 89 min, CL 26 mL/min, V 33.2 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ornithine_oxoglurate, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption constant | `Q49` · kabs | 0.028 | min-1 | 0.0004667 | 1/s | 1/min | exact (1) | Le_1997:abstract |
| elimination half-life | `Q57` · t1/2z | 89 | min | 5340 | s | min | llm (0.6) | Le_1997:abstract |
| lowest creatinine clearance was | `Q22` · CL | 26.0 | mL/min | 4.333e-07 | m3/s | L/h | review_gapfill (0.7) | Wang_2022:review |
| volume of distribution was | `Q61` · V | 33.2 | L | 0.0332 | m3 | L | review_gapfill (0.7) | Wang_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'proline' — extend the ontology if this is a real PK parameter (source ['Le_1997:abstract'])
- dropped unlinked row (NIL): 'glutamine' — extend the ontology if this is a real PK parameter (source ['Le_1997:abstract'])
- dropped unlinked row (NIL): 'arginine' — extend the ontology if this is a real PK parameter (source ['Le_1997:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ornithine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=other; 5/5 row label(s) assigned, 1 linked by role; re-tagged ornithine→parent ×2, ornithine→proline ×1, ornithine→glutamine ×1, ornithine→arginine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Wang_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Wang_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Le_1997_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['ornithine_oxoglurate', 'ornithine', 'metabolism'], ['ornithine_oxoglurate', 'proline', 'metabolism'], ['ornithine_oxoglurate', 'glutamine', 'metabolism'], ['ornithine_oxoglurate', 'arginine', 'metabolism']] | [['ornithine_alpha_ketoglutarate', 'ornithine', 'metabolism'], ['ornithine_alpha_ketoglutarate', 'proline', 'metabolism'], ['ornithine_alpha_ketoglutarate', 'glutamine', 'metabolism'], ['ornithine_alpha_ketoglutarate', 'arginine', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[auc0-7h: arginine]` |  | 7.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-7h: glutamine]` |  | 20.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-7h: proline]` |  | 41.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ornithine_oxoglurate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ornithine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wang_2022:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Le_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Le_1997:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wang_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26 | ['Wang_2022:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.56 L/h | ['Wang_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 33.2 L | ['Wang_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bornithine_oxoglurate%5D%20OrnithineOxoglurate_Le1997_reference&body=Drug%3A%20ornithine_oxoglurate%0ARecord%3A%20OrnithineOxoglurate_Le1997_reference%0APaper%3A%20Le_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Le1997_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 15:30 UTC</sub>
