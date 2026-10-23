<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/&quot;},{&quot;label&quot;:&quot;Pai_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oseltamivir — `Oseltamivir_Pai2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The oseltamivir carboxylate metabolite compartment has no compartment count and no path from the oseltamivir dose, so the record was rejected as an unlinked metabolite; it was also built from the abstract alone.

<div class="pk-model-meta" hidden drug="oseltamivir" model-id="Oseltamivir_Pai2011_reference" status="rejected" stale="false" population="healthy adults with class III obesity" measured-compound="oseltamivir carboxylate" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Pai MP, Lodise TP. Oseltamivir and oseltamivir carboxylate pharmacokinetics in obese adults: dose modification for weight is not necessary. Antimicrobial agents and chemotherapy 55(12):5640–5645 (2011).
  ·  DOI: [10.1128/AAC.00422-11](https://doi.org/10.1128/AAC.00422-11)

## Population and dosing

**Population:** healthy adults with class III obesity · condition healthy (class III obesity) · age group adult · n = 21.

**Dosed compound ≠ measured compound:** dosed oseltamivir, measured oseltamivir carboxylate.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC(0-τ) | AUC | 2621 | ng · h/ml |
| P | Q | 0.05 | L/h |
| Cl (L/min/kg) | CL | 0.16 | L/min/kg |
| Vd (L/kg) | V | 27.0 | L/kg |
| ka | kabs | 1.01 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The oseltamivir carboxylate metabolite compartment has no compartment count and no path from the oseltamivir dose, so the record was rejected as an unlinked metabolite; it was also built from the abstract alone.**

The metabolite oseltamivir carboxylate, formed from oseltamivir by hydrolysis, is recorded with zero compartments (n_cmt: 0), leaving it unreachable from the dose — the failed structure check. The hydrolysis link between oseltamivir and its carboxylate has an unknown link parameter, so the metabolic formation step is not quantified. Because only the paper's abstract was read, the reported summary statistics (e.g., AUC 2621 ng·h/ml, CL 0.16 L/min/kg, V 27.0 L/kg, kabs 1.01 h−1, Q 0.05 L/h) stood in for a fitted model. Extracted — oseltamivir carboxylate: AUC 2.62e+03 ng · h/ml, Q 0.05 L/h, CL 0.16 L/min/kg, V 27 L/kg, kabs 1.01 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has oseltamivir, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC(0-τ) | `Q88` · AUC | 2621 | ng · h/ml |  |  | (h·ng)/ml | exact (1) | Pai_2011:abstract |
| P | `Q30` · Q | 0.05 | L/h | 1.389e-08 | m3/s | L/h | llm (0.6) | Pai_2011:abstract |
| Cl (L/min/kg) | `Q22` · CL | 0.16 | L/min/kg | 0.0001867 | m3/s | L/h | review_gapfill (0.7) | Lin_2012:review |
| Vd (L/kg) | `Q61` · V | 27.0 | L/kg | 1.89 | m3 | L | review_gapfill (0.7) | Lin_2012:review |
| ka | `Q49` · kabs | 1.01 | h−1 | 0.0002806 | 1/s | 1/h | review_gapfill (0.7) | Boianelli_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'age' — extend the ontology if this is a real PK parameter (source ['Pai_2011:abstract'])
- dropped unlinked row (NIL): 'weight' — extend the ontology if this is a real PK parameter (source ['Pai_2011:abstract'])
- dropped unlinked row (NIL): 'BMI' — extend the ontology if this is a real PK parameter (source ['Pai_2011:abstract'])
- dropped unlinked row (NIL): 'R(2)' — extend the ontology if this is a real PK parameter (source ['Pai_2011:abstract', 'Pai_2011:abstract'])
- implicit units: 'P' → L/h (from the popPK convention: 'No unit stated in text or table footnotes. Intercompartmental clearance Q is conventionally expressed in L/h in populati')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oseltamivir carboxylate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Lin_2012's review values (primary lacked it)
- gap-filled Q61 (V) from Lin_2012's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Boianelli_2016's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pai_2011_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['oseltamivir', 'oseltamivir carboxylate', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc]` | 2621 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[p]` | 0.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 27.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | oseltamivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | oseltamivir carboxylate | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lin_2012:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Pai_2011:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Boianelli_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lin_2012:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Pai_2011:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | ['Lin_2012:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 672 L/h | ['Lin_2012:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.89e+03 L | ['Lin_2012:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boseltamivir%5D%20Oseltamivir_Pai2011_reference&body=Drug%3A%20oseltamivir%0ARecord%3A%20Oseltamivir_Pai2011_reference%0APaper%3A%20Pai_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oseltamivir/Oseltamivir_Pai2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:06 UTC</sub>
