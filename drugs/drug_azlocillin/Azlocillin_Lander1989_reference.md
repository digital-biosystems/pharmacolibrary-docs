<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;azlocillin&quot;,&quot;href&quot;:&quot;drugs/drug_azlocillin/&quot;},{&quot;label&quot;:&quot;Lander_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azlocillin_Pacifici2010_reference&quot;,&quot;label&quot;:&quot;Pacifici_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azlocillin/Azlocillin_Pacifici2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azlocillin — `Azlocillin_Lander1989_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="azlocillin" model-id="Azlocillin_Lander1989_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="azlocillin" parameterization="mechanistic" topology="1C"></div>

## Citation
Lander RD, Henderson RP, Pyszczynski DR. Pharmacokinetic comparison of 5 g of azlocillin every 8 h and 4 g every 6 h in healthy volunteers. Antimicrobial agents and chemotherapy 33(5):710–713 (1989).
  ·  DOI: [10.1128/AAC.33.5.710](https://doi.org/10.1128/AAC.33.5.710)

## Population and dosing

**Population:** healthy volunteers · age group adult · n = This study compared the multiple-dose pharmacokinetics of azlocillin using two different regimens. The text specifies that serum concentrations were fitted to a two-compartment open model. It mentions 12 healthy volunteers. Azlocillin is the drug being dosed and measured. The model is a compartmental PK model (two-compartment open) but it is described as 'fitted... by nonlinear regression' rather than explicitly a population PK model (though compartmental models are a type of PK model, the prompt asks 'is a population or compartmental PK model present'). It is a compartmental model. The paper class is drug_pk. The dose compound is azlocillin. The primary analyte is azlocillin. The population is healthy volunteers. The age class is adult (implied by healthy volunteers for such studies, usually adults). Number of subjects is 12. Condition is healthy. Species is human. The only compound is azlocillin, which is dosed, measured, and has parameters. There are no metabolites or links mentioned..

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| area under the serum concentration-time curve during the dosing interval | AUCt | 592 | micrograms.h/ml |
| terminal elimination rate constant | kel | 0.5364 | h-1 |
| renal clearance | CLR | 87.6 | ml/min |
| maximum drug concentration in serum | Cmax | 381 | micrograms/ml |
| minimum drug concentration in serum | Cmin | 19 | micrograms/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — azlocillin: AUCt 592 micrograms.h/ml, kel 0.536 h-1, CLR 87.6 ml/min, Cmax 381 micrograms/ml, Cmin 19 micrograms/ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azlocillin, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| area under the serum concentration-time curve during the dosing interval | `Q19` · AUCt | 592 | micrograms.h/ml |  |  | (h·µg)/ml | llm (0.6) | Lander_1989:abstract, Lander_1989:abstract |
| terminal elimination rate constant | `Q47` · kel | 0.5364 | h-1 | 0.000149 | 1/s | 1/h | exact (1) | Lander_1989:abstract, Lander_1989:abstract |
| renal clearance | `Q26` · CLR | 87.6 | ml/min | 1.46e-06 | m3/s | ml/min | exact (1) | Lander_1989:abstract, Lander_1989:abstract |
| maximum drug concentration in serum | `Q32` · Cmax | 381 | micrograms/ml |  |  | µg/ml | llm (0.6) | Lander_1989:abstract, Lander_1989:abstract |
| minimum drug concentration in serum | `Q36` · Cmin | 19 | micrograms/ml |  |  | µg/ml | llm (0.6) | Lander_1989:abstract, Lander_1989:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'V1'
- dropped value-less row: 'V beta'
- dropped value-less row: 'k10'
- dropped value-less row: 'k12'
- dropped value-less row: 'k21'
- dropped value-less row: 'total systemic clearance'
- dropped value-less row: 'nonrenal clearance'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azlocillin
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lander_1989_metadata.yaml (17 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under the serum concentration-time curve during the dosing interval]` | 592 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under the serum concentration-time curve during the dosing interval]` |  | 592 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum drug concentration in serum]` | 381 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum drug concentration in serum]` |  | 381 | only_one_extracted |
| `gpt-oss-120b` | `parameters[minimum drug concentration in serum]` | 19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[minimum drug concentration in serum]` |  | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | 87.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` |  | 87.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination rate constant]` | 0.5364 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination rate constant]` |  | 0.5364 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | azlocillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | azlocillin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Lander_1989:abstract', 'Lander_1989:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Lander_1989:abstract', 'Lander_1989:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Lander_1989:abstract', 'Lander_1989:abstract'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Lander_1989:abstract', 'Lander_1989:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lander_1989:abstract', 'Lander_1989:abstract'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazlocillin%5D%20Azlocillin_Lander1989_reference&body=Drug%3A%20azlocillin%0ARecord%3A%20Azlocillin_Lander1989_reference%0APaper%3A%20Lander_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azlocillin/Azlocillin_Lander1989_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:53 UTC</sub>
