<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 six_anephric_patients&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_six_anephric_patients`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:40 UTC (Needs review), but the paper was screened again on 2026-10-07 06:13 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The model does not reproduce the paper's terminal half-life (paper 5, model 0.958).

<div class="pk-model-meta" hidden drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_six_anephric_patients" status="needs_review" stale="true" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Lowenthal DT, Briggs WA, Levy G. Kinetics of salicylate elimination by anephric patients. The Journal of clinical investigation 54(5):1221–1226 (1974).
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

## Population and dosing

**Population:** anephric patients · condition renal impairment · age group adult · n = 6.

**Dosing:** 500 mg/m2, iv, single.

**Dosed compound ≠ measured compound:** dosed sodium salicylate, measured salicylic acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vₐ, liter | V | 5.01 | liter |
| tₔ (β), min | t1/2β | 316 | min |
| lag time | tlag | 0.42 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 5, model 0.958).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — sodium salicylate: V 5.01 liter, t1/2β 316 min, CL 0.04 L/h/kg, kabs 0.64 1/h, tlag 0.42 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium salicylate, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vₐ, liter | `Q61` · V | 5.01 | liter | 0.00501 | m3 | l | llm (0.6) | Lowenthal_1974_table_3:row5:col1 |
| tₔ (β), min | `Q60` · t1/2β | 316 | min | 1.896e+04 | s | min | llm (0.6) | Lowenthal_1974_table_3:row7:col1 |
| lag time | `Q83` · tlag | 0.42 | h | 1512 | s | h | review_gapfill (0.7) | Somani_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('Vₐ (area), liter', value '9.26') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'six anephric patients' subgroup of Lowenthal_1974 (paper reports 3 populations: four normal subjects*, patients, six anephric patients)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt; 0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt; 0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt; 0.1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[lag time]` | 0.42 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium salicylate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salicylic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q60 | pass | [time] |  | ['Lowenthal_1974_table_3:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lowenthal_1974_table_3:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Somani_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.01 L | ['Lowenthal_1974_table_3:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=salicylic acid) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 5 | 0.9581 | 0.1916 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.267 | 0.9581 | 0.1819 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_modelica.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_fmi.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab_simbio.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_sbml.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_cellml.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Lowenthal DT, Briggs WA, Levy G. Kinetics of salicylate elimination by anephric patients. The Journal of clinical investigation 54(5):1221–1226 (1974). [doi:10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

**This record:** Pharmacolibrary v26.09, model `SodiumSalicylate_Lowenthal1974_six_anephric_patients`. <https://pharmacolibrary.github.io/#/drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients>

```bibtex
@misc{pharmacolibrary_SodiumSalicylateLowenthal1974sixanephricpatients,
  title  = {{Pharmacolibrary model SodiumSalicylate_Lowenthal1974_six_anephric_patients}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients},
  note   = {Parameters from doi:10.1172/JCI107865},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_salicylate%5D%20SodiumSalicylate_Lowenthal1974_six_anephric_patients&body=Drug%3A%20sodium_salicylate%0ARecord%3A%20SodiumSalicylate_Lowenthal1974_six_anephric_patients%0APaper%3A%20Lowenthal_1974%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:13 UTC</sub>
