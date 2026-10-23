<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;cycloserine&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/&quot;},{&quot;label&quot;:&quot;van_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloserine_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cycloserine_Mulubwa2019v2_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cycloserine — `Cycloserine_van2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; aUC has no unit.

<div class="pk-model-meta" hidden drug="cycloserine" model-id="Cycloserine_van2020_reference" status="needs_review" stale="false" population="patients with multidrug-/extensively drug-resistant tuberculosis" measured-compound="cycloserine" parameterization="mechanistic" topology="1C"></div>

## Citation
van der Galiën R, Boveneind-Vrubleuskaya NV, Peloquin C, Skrahina A, Touw DJ, Alffenaar JC. Pharmacokinetic Modeling, Simulation, and Development of a Limited Sampling Strategy of Cycloserine in Patients with Multidrug-/Extensively Drug-Resistant Tuberculosis. Clinical pharmacokinetics 59(7):899–910 (2020).
  ·  DOI: [10.1007/s40262-020-00860-8](https://doi.org/10.1007/s40262-020-00860-8)

## Population and dosing

**Population:** patients with multidrug-/extensively drug-resistant tuberculosis · condition multidrug-/extensively drug-resistant tuberculosis · age group adult · n = 15.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Median area under the concentration-time curve over 24 h (AUC0-24 h) | AUC | 888 | h mg/L |
| median maximum concentration of cycloserine | Cmax | 23.31 | mg/L |
| absorption constant Ka_po | kabs | 0.39 | h-1 |
| metabolic clearance | CL | 1.05 | L/h |
| volume | V | 38.7 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; aUC has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kengo_2024) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — cycloserine: AUC 888 h mg/L, Cmax 23.3 mg/L, kabs 0.39 h-1, CL 1.05 L/h, V 38.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cycloserine, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Median area under the concentration-time curve over 24 h (AUC0-24 h) | `Q88` · AUC | 888 | h mg/L |  |  | (h·mg)/l | llm (0.6) | van_2020:abstract |
| median maximum concentration of cycloserine | `Q32` · Cmax | 23.31 | mg/L |  |  | mg/l | llm_confirmed (0.6) | van_2020:abstract |
| absorption constant Ka_po | `Q49` · kabs | 0.39 | h-1 | 0.0001083 | 1/s | 1/h | llm_confirmed (0.6) | van_2020:abstract |
| metabolic clearance | `Q22` · CL | 1.05 | L/h | 2.917e-07 | m3/s | l/h | boundary_llm_dim_refused (0.8) | van_2020:abstract |
| volume | `Q61` · V | 38.7 | L | 0.0387 | m3 | L | review_gapfill (0.7) | Kengo_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h mg/L' (AUC)
- dropped unlinked row (NIL): 'distribution over the central compartment (Vd)' — extend the ontology if this is a real PK parameter (source ['van_2020:abstract'])
- dropped unlinked row (NIL): 'renal clearance as fraction of the estimated glomerular filtration rate' — extend the ontology if this is a real PK parameter (source ['van_2020:abstract'])
- dropped unlinked row (NIL): 'Root-mean-squared-errors found in predicting the AUC0-24 h using a one- (4 h) and a two- (2 h and 7 h) limited sampling strategy' — extend the ontology if this is a real PK parameter (source ['van_2020:abstract'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (metabolic clearance)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cycloserine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Kengo_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in van_2020_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption constant ka_po]` | 0.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption constant ka_po]` |  | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[difference in calculated concentrations and auc0-24 h]` |  | 19.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[difference in measured concentrations]` |  | 14.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution over the central compartment]` |  | 0.54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[median area under the concentration-time curve over 24 h (auc0-24 h) of cycloserine]` |  | 888 | only_one_extracted |
| `gpt-oss-120b` | `parameters[median area under the concentration-time curve over 24 h]` | 888 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median maximum concentration of cycloserine]` | 23.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[median maximum concentration of cycloserine]` |  | 23.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[metabolic clearance]` | 1.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[metabolic clearance]` |  | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance as fraction of the estimated glomerular filtration rate]` |  | 0.092 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 38.7 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cycloserine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cycloserine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['van_2020:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['van_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['van_2020:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kengo_2024:review'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h mg/L | ['van_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.05 | ['van_2020:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.05 L/h | ['van_2020:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 38.7 L | ['Kengo_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcycloserine%5D%20Cycloserine_van2020_reference&body=Drug%3A%20cycloserine%0ARecord%3A%20Cycloserine_van2020_reference%0APaper%3A%20van_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cycloserine/Cycloserine_van2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 12:33 UTC</sub>
