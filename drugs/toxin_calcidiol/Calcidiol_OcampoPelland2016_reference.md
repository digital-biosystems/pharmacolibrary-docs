<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Calcidiol&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/&quot;},{&quot;label&quot;:&quot;Ocampo-Pelland_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Calcidiol_Hidiroglou1979_reference&quot;,&quot;label&quot;:&quot;Hidiroglou_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_Hidiroglou1979_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcidiol_urek2023_liposome_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_liposome_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_urek2023_liposome_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Calcidiol_urek2023_oil_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_oil_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_calcidiol/Calcidiol_urek2023_oil_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Calcidiol — `Calcidiol_OcampoPelland2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit nmol/h ([substance] / [time]) vs [mass] / [time]; Q1 unit nmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q64 unit L/h ([length] ** 3 / [time]) vs [length] ** 3.

<div class="pk-model-meta" hidden drug="Calcidiol" model-id="Calcidiol_OcampoPelland2016_reference" status="rejected" stale="false" population="healthy or osteoporotic adults" measured-compound="25OHD3 (calcidiol)" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Ocampo-Pelland AS, Gastonguay MR, French JF, Riggs MM. Model-based meta-analysis for development of a population-pharmacokinetic (PPK) model for Vitamin D3 and its 25OHD3 metabolite using both individual and arm-level data. Journal of pharmacokinetics and pharmacodynamics 43(2):191–206 (2016).
  ·  DOI: [10.1007/s10928-016-9465-1](https://doi.org/10.1007/s10928-016-9465-1)

## Population and dosing

**Population:** healthy or osteoporotic adults · condition healthy and osteoporosis · age group adult · n = 5395.

**Dosed compound ≠ measured compound:** dosed Vitamin D3 (cholecalciferol) and 25OHD3, measured 25OHD3 (calcidiol).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| maximum rate of metabolism ([Formula: see text] | Vmax | 1.62 | nmol/h |
| Michaelis-Menten constant ([Formula: see text] | Km | 6.39 | nmol/L |
| central volume of distribution ([Formula: see text] | V1 | 15.5 | L |
| intercompartmental clearance ([Formula: see text] | Q | 0.185 | L/h |
| peripheral volume of distribution ([Formula: see text] | V2 | 2333 | L/h |
| baseline concentration ([Formula: see text] | C0 | 3.75 | nmol/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit nmol/h ([substance] / [time]) vs [mass] / [time]; Q1 unit nmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q64 unit L/h ([length] ** 3 / [time]) vs [length] ** 3.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is calcidiol's own; they describe 25OHD3 (calcidiol). Extracted — 25OHD3 (calcidiol): Vmax 1.62 nmol/h, Km 6.39 nmol/L, V1 15.5 L, Q 0.185 L/h, V2 2.33e+03 L/h, C0 3.75 nmol/L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Vitamin D3 (cholecalciferol) and 25OHD3, the second reading Vitamin D3 (cholecalciferol), 25OHD3 (calcidiol); it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| maximum rate of metabolism ([Formula: see text] | `Q66` · Vmax | 1.62 | nmol/h |  |  | nM/h | llm (0.6) | Ocampo-Pelland_2016:abstract |
| Michaelis-Menten constant ([Formula: see text] | `Q1` · Km | 6.39 | nmol/L |  |  | nM/l | llm (0.6) | Ocampo-Pelland_2016:abstract |
| central volume of distribution ([Formula: see text] | `Q63` · V1 | 15.5 | L | 0.0155 | m3 | l | boundary_compartment (0.9) | Ocampo-Pelland_2016:abstract |
| intercompartmental clearance ([Formula: see text] | `Q30` · Q | 0.185 | L/h | 5.139e-08 | m3/s | l/h | llm_confirmed (0.6) | Ocampo-Pelland_2016:abstract |
| peripheral volume of distribution ([Formula: see text] | `Q64` · V2 | 2333 | L/h | 0.0006481 | m3/s | l/h | boundary_compartment (0.9) | Ocampo-Pelland_2016:abstract |
| baseline concentration ([Formula: see text] | `Q86` · C0 | 3.75 | nmol/L |  |  | nM/l | llm_corrected (0.6) | Ocampo-Pelland_2016:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'maximum rate of metabolism ([Formula: see text]' → Q66 (unit '[substance] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Michaelis-Menten constant ([Formula: see text]' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'peripheral volume of distribution ([Formula: see text]' → Q64 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'baseline concentration ([Formula: see text]' → Q86 (unit '[substance] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=25OHD3 (calcidiol)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/6 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Vitamin D3 (cholecalciferol)' — its concentrations stay mass-only
- molar mass: none found for '25OHD3 (calcidiol)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ocampo-Pelland_2016_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[baseline concentration ([formula: see text]]` | 3.75 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[baseline concentration]` |  | 3.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution ([formula: see text]]` | 15.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` |  | 15.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance ([formula: see text]]` | 0.185 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[intercompartmental clearance]` |  | 0.185 | only_one_extracted |
| `gpt-oss:120b` | `parameters[maximum rate of metabolism ([formula: see text]]` | 1.62 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[maximum rate of metabolism]` |  | 1.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[michaelis-menten constant ([formula: see text]]` | 6.39 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[michaelis-menten constant]` |  | 6.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution ([formula: see text]]` | 2333 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution]` |  | 2333 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Vitamin D3 (cholecalciferol) and 25OHD3 | Vitamin D3 (cholecalciferol), 25OHD3 (calcidiol) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q64 | fail | [length] ** 3 | L/h ([length] ** 3 / [time]) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/h ([substance] / [time]) | ['Ocampo-Pelland_2016:abstract'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | nmol/L ([substance] / [length] ** 3) | ['Ocampo-Pelland_2016:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 15.5 L | ['Ocampo-Pelland_2016:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.648 L | ['Ocampo-Pelland_2016:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcidiol%5D%20Calcidiol_OcampoPelland2016_reference&body=Drug%3A%20calcidiol%0ARecord%3A%20Calcidiol_OcampoPelland2016_reference%0APaper%3A%20Ocampo-Pelland_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calcidiol/Calcidiol_OcampoPelland2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:04 UTC</sub>
