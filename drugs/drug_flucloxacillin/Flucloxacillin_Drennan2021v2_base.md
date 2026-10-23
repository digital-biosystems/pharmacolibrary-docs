<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;,&quot;href&quot;:&quot;drugs/drug_flucloxacillin/&quot;},{&quot;label&quot;:&quot;Drennan_2021_2 \u00b7 base&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucloxacillin — `Flucloxacillin_Drennan2021v2_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="flucloxacillin" model-id="Flucloxacillin_Drennan2021v2_base" status="needs_review" stale="false" population="adults with staphylococcal infections and healthy adults" measured-compound="free flucloxacillin" parameterization="mechanistic" topology="1C"></div>

## Citation
Drennan PG, Green JK, Gardiner SJ, Metcalf SCL, Kirkpatrick CMJ, Everts RJ et al. Population pharmacokinetics of free flucloxacillin in patients treated with oral flucloxacillin plus probenecid. British journal of clinical pharmacology 87(12):4681–4690 (2021).
  ·  DOI: [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887)

## Population and dosing

**Population:** adults with staphylococcal infections and healthy adults · condition staphylococcal infection · age group adult · n = $56$ $45$ $11$ (45 participants + 11 healthy volunteers) = 56.

**Dosing:** 1000 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed flucloxacillin, measured free flucloxacillin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Tlag,abs (h) | tlag | 0.216 | h |  |
| kabs (h−1) | kabs | 0.478 | h−1 | 0.067 (None% RSE) |
| Vpop (L) | V | 144 | L |  |
| CLpop (L h−1) | CL | 183 | L h−1 | 0.208 (None% RSE) |
| βFferrite | Fab | 0.745 |  |  |
| a (mg/L) | equation variable | 0.0598 | mg/L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — flucloxacillin: tlag 0.216 h, kabs 0.478 h−1, V 144 L, CL 183 L h−1, Fab 0.745.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flucloxacillin, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Tlag,abs (h) | `Q83` · tlag | 0.216 | h | 777.6 | s | h | llm_confirmed (0.6) | Drennan_2021_2_table_p5_1:row1:col1, Drennan_2021_2_table_p5_1:row1:col2 |  |
| kabs (h−1) | `Q49` · kabs | 0.478 | h−1 | 0.0001328 | 1/s | 1/h | exact (1) | Drennan_2021_2_table_p5_1:row3:col1, Drennan_2021_2_table_p5_1:row3:col2 | 0.067 (None% RSE) |
| Vpop (L) | `Q61` · V | 144 | L | 0.144 | m3 | l | llm (0.6) | Drennan_2021_2_table_p5_1:row5:col1, Drennan_2021_2_table_p5_1:row5:col2 |  |
| CLpop (L h−1) | `Q22` · CL | 183 | L h−1 | 5.083e-05 | m3/s | l/h | llm (0.6) | Drennan_2021_2_table_p5_1:row7:col1, Drennan_2021_2_table_p5_1:row7:col2 | 0.208 (None% RSE) |
| βFferrite | `Q40` · Fab | 0.745 |  |  |  |  | llm (0.6) | Drennan_2021_2_table_p5_1:row11:col1, Drennan_2021_2_table_p5_1:row11:col2 |  |
| a (mg/L) | `Q900` · equation variable | 0.0598 | mg/L |  |  | mg/l | llm (0.6) | Drennan_2021_2_table_p5_1:row25:col1, Drennan_2021_2_table_p5_1:row25:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωkabs' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωV' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iiv: 'ωCL' routed out of structural estimates ('Between subject variability (standard deviation)')
- table section iov: 'γabs' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γk' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γV' routed out of structural estimates ('Between occasion variability (standard deviation)')
- table section iov: 'γCL' routed out of structural estimates ('Between occasion variability (standard deviation)')
- dropped duplicate Q900 ('b', value '0.2') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=free flucloxacillin
- model-stage split: 'base model' is the base model of Drennan_2021_2 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: no plausible PubChem entry for 'free flucloxacillin' ('free flucloxacillin') — left in mass units
- molar mass: none found for 'free flucloxacillin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Drennan_2021_2_table_p5_1:row1:col7 = '0.321 (0.057–0.552)'
- unparsed cell Drennan_2021_2_table_p5_1:row2:col7 = '-0.78 (-3.72 to -0.287)'
- unparsed cell Drennan_2021_2_table_p5_1:row3:col7 = '0.625 (0.448–0.788)'
- unparsed cell Drennan_2021_2_table_p5_1:row4:col7 = '1.18 (0.138–1.62)'
- unparsed cell Drennan_2021_2_table_p5_1:row5:col7 = '535 (291–641)'
- unparsed cell Drennan_2021_2_table_p5_1:row7:col7 = '413 (305–581)'
- unparsed cell Drennan_2021_2_table_p5_1:row8:col7 = '0.013 (0.006–0.019)'
- unparsed cell Drennan_2021_2_table_p5_1:row10:col7 = '-0.668 (-0.987 to -0.396)'
- unparsed cell Drennan_2021_2_table_p5_1:row11:col7 = '1.01 (0.806–1.36)'
- unparsed cell Drennan_2021_2_table_p5_1:row14:col7 = '0.198 (0.073–0.442)'
- unparsed cell Drennan_2021_2_table_p5_1:row15:col7 = '0.163 (0.069–0.304)'
- unparsed cell Drennan_2021_2_table_p5_1:row16:col7 = '0.142 (0.04–0.297)'
- unparsed cell Drennan_2021_2_table_p5_1:row17:col7 = '0.251 (0.1–0.34)'
- unparsed cell Drennan_2021_2_table_p5_1:row19:col7 = '0.489 (0.055–0.686)'
- unparsed cell Drennan_2021_2_table_p5_1:row20:col7 = '0.185 (0.069–0.601)'
- unparsed cell Drennan_2021_2_table_p5_1:row21:col7 = '0.306 (0.19–0.508)'
- unparsed cell Drennan_2021_2_table_p5_1:row22:col7 = '0.27 (0.188–0.324)'
- unparsed cell Drennan_2021_2_table_p5_1:row25:col7 = '0.059 (0.003–0.093)'
- unparsed cell Drennan_2021_2_table_p5_1:row26:col7 = '0.206 (0.17–0.284)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[βfferrite].parameter_id` | Q40 | Q47 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | flucloxacillin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | free flucloxacillin | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Drennan_2021_2_table_p5_1:row3:col1', 'Drennan_2021_2_table_p5_1:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Drennan_2021_2_table_p5_1:row5:col1', 'Drennan_2021_2_table_p5_1:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Drennan_2021_2_table_p5_1:row1:col1', 'Drennan_2021_2_table_p5_1:row1:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 183 | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 183 L/h | ['Drennan_2021_2_table_p5_1:row7:col1', 'Drennan_2021_2_table_p5_1:row7:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 144 L | ['Drennan_2021_2_table_p5_1:row5:col1', 'Drennan_2021_2_table_p5_1:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflucloxacillin%5D%20Flucloxacillin_Drennan2021v2_base&body=Drug%3A%20flucloxacillin%0ARecord%3A%20Flucloxacillin_Drennan2021v2_base%0APaper%3A%20Drennan_2021_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:02 UTC</sub>
