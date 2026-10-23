<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;diamorphine&quot;,&quot;href&quot;:&quot;drugs/drug_diamorphine/&quot;},{&quot;label&quot;:&quot;Rook_2006 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diamorphine — `Diamorphine_Rook2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The diamorphine record was rejected because the terminal half-life of 6-acetylmorphine was extracted as 13 '%' instead of a time unit, and the metabolites 6-acetylmorphine, morphine and the morphine glucuronides have no compartments, leaving them unreachable from the dose.

<div class="pk-model-meta" hidden drug="diamorphine" model-id="Diamorphine_Rook2006_reference" status="rejected" stale="false" population="heroin-dependent adults (inhalers and injectors)" measured-compound="heroin (diamorphine)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Rook EJ, Huitema AD, van den Brink W, van Ree JM, Beijnen JH. Population pharmacokinetics of heroin and its major metabolites. Clinical pharmacokinetics 45(4):401–417 (2006).
  ·  DOI: [10.2165/00003088-200645040-00005](https://doi.org/10.2165/00003088-200645040-00005)

## Population and dosing

**Population:** heroin-dependent adults (inhalers and injectors) · condition heroin dependence · age group adult · n = 106.

**Dosed compound ≠ measured compound:** dosed diamorphine (heroin), measured heroin (diamorphine).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| bioavailability of inhaled heroin | Fab | 53 | % |
| clearance of morphine | CL | 73.6 | L/h |
| terminal half-life of 6-acetylmorphine | t1/2z | 13 | % |
| creatinine clearance | CLR | 60 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The diamorphine record was rejected because the terminal half-life of 6-acetylmorphine was extracted as 13 '%' instead of a time unit, and the metabolites 6-acetylmorphine, morphine and the morphine glucuronides have no compartments, leaving them unreachable from the dose.**

The half-life parameter t1/2z for 6-acetylmorphine carries the unit '%' (value 13), a dimension mismatch for a structural time parameter. All four metabolites (6-acetylmorphine, morphine, morphine-3-glucuronide, morphine-6-glucuronide) were assigned 0 compartments, so they form orphan species with no path from the administered heroin. The clearance of the morphine-glucuronides was recorded without a value, and the record was built from the abstract alone, so reported summary statistics stood in for a fitted model. Extracted — heroin (diamorphine): Fab 53 %, CLR 60 mL/min; morphine: CL 73.6 L/h; 6-acetylmorphine: t1/2z 13 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has diamorphine (heroin), the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| bioavailability of inhaled heroin | `Q40` · Fab | 53 | % |  |  |  | llm_confirmed (0.6) | Rook_2006:abstract |
| clearance of morphine | `Q22` · CL | 73.6 | L/h | 2.044e-05 | m3/s | l/h | llm_confirmed (0.6) | Rook_2006:abstract |
| terminal half-life of 6-acetylmorphine | `Q57` · t1/2z | 13 | % |  |  | % | llm (0.6) | Rook_2006:abstract |
| creatinine clearance | `Q26` · CLR | 60 | mL/min | 1e-06 | m3/s | ml/min | llm_corrected (0.6) | Rook_2006:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| clearance of the morphine-glucuronides | Q22 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'terminal half-life of 6-acetylmorphine' → Q57 (unit 'dimensionless' vs ontology '[time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=heroin (diamorphine)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged heroin (diamorphine)→morphine ×1, heroin (diamorphine)→6-acetylmorphine ×1
- molar mass: none of 2 PubChem candidate(s) is 'heroin (diamorphine)' (LLM) — left in mass units
- molar mass: none found for 'heroin (diamorphine)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Rook_2006_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['heroin (diamorphine)', '6-acetylmorphine', 'metabolism'], ['6-acetylmorphine', 'morphine', 'metabolism'], ['morphine', 'morphine-3-glucuronide', 'metabolism'], ['morphine', 'morphine-6-glucuronide', 'metabolism']] | [['heroin', '6-acetylmorphine', 'metabolism'], ['6-acetylmorphine', 'morphine', 'metabolism'], ['morphine', 'morphine-3-glucuronide', 'metabolism'], ['morphine', 'morphine-6-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[bioavailability of inhaled heroin]` |  | 53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of inhaled heroin]` | 53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance of the morphine-glucuronides]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance]` | 60 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | diamorphine (heroin) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | heroin (diamorphine) | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Rook_2006:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Rook_2006:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Rook_2006:abstract'] |
| C5_dimension_Q57 | fail | dimensionless | % | ['Rook_2006:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 73.6 | ['Rook_2006:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 73.6 L/h | ['Rook_2006:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiamorphine%5D%20Diamorphine_Rook2006_reference&body=Drug%3A%20diamorphine%0ARecord%3A%20Diamorphine_Rook2006_reference%0APaper%3A%20Rook_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diamorphine/Diamorphine_Rook2006_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 02:56 UTC</sub>
