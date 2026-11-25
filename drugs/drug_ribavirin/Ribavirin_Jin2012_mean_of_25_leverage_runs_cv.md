<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/&quot;},{&quot;label&quot;:&quot;Jin_2012 \u00b7 mean_of_25_leverage_runs_cv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ribavirin — `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="ribavirin" model-id="Ribavirin_Jin2012_mean_of_25_leverage_runs_cv" status="needs_review" stale="false" population="patients with chronic hepatitis C genotype 1 infection" measured-compound="ribavirin" parameterization="apparent" topology="1C"></div>

## Citation
Jin R, Fossler MJ, McHutchison JG, Howell CD, Dowling TC. Population pharmacokinetics and pharmacodynamics of ribavirin in patients with chronic hepatitis C genotype 1 infection. The AAPS journal 14(3):571–580 (2012).
  ·  DOI: [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z)

## Population and dosing

**Population:** patients with chronic hepatitis C genotype 1 infection · condition chronic hepatitis C · age group adult · n = 144.

**Dosing:** 1000, 1200 mg/day, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 19.12 | L/h | 36.06 (None% RSE) |
| Q/F (L/h) | Q/F | 37.07 | L/h |  |
| Ka (h⁻¹) | kabs | 0.91 | h⁻¹ |  |
| race_factor | race_factor | 1.51 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — ribavirin: CL/F 19.1 L/h, Q/F 37.1 L/h, kabs 0.91 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 19.12 | L/h | 5.311e-06 | m3/s | l/h | exact (1) | Jin_2012_table_p5_1:row0:col2 | 36.06 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 37.07 | L/h | 1.03e-05 | m3/s | l/h | exact (1) | Jin_2012_table_p5_1:row3:col2 |  |
| Ka (h⁻¹) | `Q49` · kabs | 0.91 | h⁻¹ | 0.0002528 | 1/s | 1/h | exact (1) | Jin_2012_table_p5_1:row4:col2 |  |
| race_factor | `Q900` · race_factor | 1.51 |  |  |  |  |  | Jin_2012_table_p5_1:row5:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mean of 25 leverage runs (% cv)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- covariate level 'Race factor' → Q900:race_factor = 1.51 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ribavirin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'mean of 25 leverage runs (% cv)' subgroup of Jin_2012 (paper reports 2 populations: mean of 25 leverage runs (% cv), population mean in final pk model)

**Extraction notes:**
- table Jin_2012_table_p5_1: ambiguous_numeric_format
- table Jin_2012_table_p5_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[race_factor]` | 1.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_race_factor]` |  | 1.51 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Jin_2012_table_p5_1:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jin_2012_table_p5_1:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Jin_2012_table_p5_1:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | ['Jin_2012_table_p5_1:row0:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_modelica.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_fmi.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab_simbio.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sbml.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_cellml.zip" download>Ribavirin_Jin2012_mean_of_25_leverage_runs_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Jin R, Fossler MJ, McHutchison JG, Howell CD, Dowling TC. Population pharmacokinetics and pharmacodynamics of ribavirin in patients with chronic hepatitis C genotype 1 infection. The AAPS journal 14(3):571–580 (2012). [doi:10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z)

**This record:** Pharmacolibrary, model `Ribavirin_Jin2012_mean_of_25_leverage_runs_cv`. <https://pharmacolibrary.github.io/#/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv>

```bibtex
@misc{pharmacolibrary_RibavirinJin2012meanof25leveragerunscv,
  title  = {{Pharmacolibrary model Ribavirin_Jin2012_mean_of_25_leverage_runs_cv}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv},
  note   = {Parameters from doi:10.1208/s12248-012-9368-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bribavirin%5D%20Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&body=Drug%3A%20ribavirin%0ARecord%3A%20Ribavirin_Jin2012_mean_of_25_leverage_runs_cv%0APaper%3A%20Jin_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:43 UTC</sub>
