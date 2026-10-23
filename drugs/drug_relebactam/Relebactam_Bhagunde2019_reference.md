<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/&quot;},{&quot;label&quot;:&quot;Bhagunde_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Fratoni2022_reference&quot;,&quot;label&quot;:&quot;Fratoni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Relebactam — `Relebactam_Bhagunde2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Relebactam clearance, central volume, and intercompartmental clearance lacked explicit values, causing the model to be quarantined despite defined covariates.

<div class="pk-model-meta" hidden drug="Relebactam" model-id="Relebactam_Bhagunde2019_reference" status="model_quarantined" stale="false" population="healthy volunteers and patients with bacterial infections" measured-compound="relebactam and imipenem" parameterization="mechanistic" topology="2C"></div>

## Citation
Bhagunde P, Patel P, Lala M, Watson K, Copalu W, Xu M et al. Population Pharmacokinetic Analysis for Imipenem-Relebactam in Healthy Volunteers and Patients With Bacterial Infections. CPT: pharmacometrics & systems pharmacology 8(10):748–758 (2019).
  ·  DOI: [10.1002/psp4.12462](https://doi.org/10.1002/psp4.12462)

## Population and dosing

**Population:** healthy volunteers and patients with bacterial infections · condition healthy and bacterial infections · age group adult · n = 855.

**Dosing:** 250, 500, 625, 1000 mg, iv, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed imipenem and relebactam, measured relebactam and imipenem.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/hour) | CL | 7.02 | L/hour |
| V 1 (L) | V1 | 11.08 | L |
| V 2 (L) | V2 | 6.41 | L |
| Q (L/hour) | Q | 10.45 | L/hour |
| theta_q1_crcl_power | theta_q1_crcl_power | 0.75 |  |
| theta_q900_wt_power | theta_q900_wt_power | 0.70 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Relebactam clearance, central volume, and intercompartmental clearance lacked explicit values, causing the model to be quarantined despite defined covariates.**

The record lists values of 7.02 L/hour, 11.08 L, and 10.45 L/hour, yet the review determined these parameters were not explicitly extracted, causing the model to rely on generic placeholders. This absence of specific estimates prevented the model from being published. Furthermore, although covariate effects for creatinine clearance and weight are defined, these scenarios were not simulated during the reference individual run. Extracted — relebactam: CL 7.02 L/hour, V1 11.1 L, V2 6.41 L, Q 10.4 L/hour.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has imipenem and relebactam, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/hour) | `Q22` · CL | 7.02 | L/hour | 1.95e-06 | m3/s | l/h | exact (1) | psp412462-tbl-0004:row3:col5, psp412462-tbl-0004:row3:col6, psp412462-tbl-0004:row3:col7, psp412462-tbl-0004:row3:col8 |
| V 1 (L) | `Q63` · V1 | 11.08 | L | 0.01108 | m3 | l | space_fold (0.95) | psp412462-tbl-0004:row4:col5, psp412462-tbl-0004:row4:col6, psp412462-tbl-0004:row4:col7, psp412462-tbl-0004:row4:col8 |
| V 2 (L) | `Q64` · V2 | 6.41 | L | 0.00641 | m3 | l | space_fold (0.95) | psp412462-tbl-0004:row5:col5, psp412462-tbl-0004:row5:col6, psp412462-tbl-0004:row5:col7, psp412462-tbl-0004:row5:col8 |
| Q (L/hour) | `Q30` · Q | 10.45 | L/hour | 2.903e-06 | m3/s | l/h | exact (1) | psp412462-tbl-0004:row6:col5, psp412462-tbl-0004:row6:col6, psp412462-tbl-0004:row6:col7, psp412462-tbl-0004:row6:col8 |
| theta_q1_crcl_power | `Q900` · theta_q1_crcl_power | 0.75 |  |  |  |  |  | psp412462-tbl-0004:row8:col5, psp412462-tbl-0004:row8:col6, psp412462-tbl-0004:row8:col7, psp412462-tbl-0004:row8:col8 |
| theta_q900_wt_power | `Q900` · theta_q900_wt_power | 0.70 |  |  |  |  |  | psp412462-tbl-0004:row11:col5, psp412462-tbl-0004:row11:col6, psp412462-tbl-0004:row11:col7, psp412462-tbl-0004:row11:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=relebactam and imipenem

**Extraction notes:**
- unparsed cell psp412462-tbl-0004:row12:col2 = '−0.34 to 0.23'
- unparsed cell psp412462-tbl-0004:row12:col4 = '−0.34 to 0.23'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q1_crcl_power]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` |  | 0.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_wt_power]` | 0.70 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | imipenem and relebactam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | relebactam and imipenem | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412462-tbl-0004:row3:col5', 'psp412462-tbl-0004:row3:col6', 'psp412462-tbl-0004:row3:col7', 'psp412462-tbl-0004:row3:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412462-tbl-0004:row6:col5', 'psp412462-tbl-0004:row6:col6', 'psp412462-tbl-0004:row6:col7', 'psp412462-tbl-0004:row6:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412462-tbl-0004:row4:col5', 'psp412462-tbl-0004:row4:col6', 'psp412462-tbl-0004:row4:col7', 'psp412462-tbl-0004:row4:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412462-tbl-0004:row5:col5', 'psp412462-tbl-0004:row5:col6', 'psp412462-tbl-0004:row5:col7', 'psp412462-tbl-0004:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.02 | ['psp412462-tbl-0004:row3:col5', 'psp412462-tbl-0004:row3:col6', 'psp412462-tbl-0004:row3:col7', 'psp412462-tbl-0004:row3:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.02 L/h | ['psp412462-tbl-0004:row3:col5', 'psp412462-tbl-0004:row3:col6', 'psp412462-tbl-0004:row3:col7', 'psp412462-tbl-0004:row3:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.1 L | ['psp412462-tbl-0004:row4:col5', 'psp412462-tbl-0004:row4:col6', 'psp412462-tbl-0004:row4:col7', 'psp412462-tbl-0004:row4:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.41 L | ['psp412462-tbl-0004:row5:col5', 'psp412462-tbl-0004:row5:col6', 'psp412462-tbl-0004:row5:col7', 'psp412462-tbl-0004:row5:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 364.1 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 250.8 |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_relebactam/Relebactam_Bhagunde2019_reference/Relebactam_Bhagunde2019_reference_matlab.zip" download>Relebactam_Bhagunde2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_relebactam/Relebactam_Bhagunde2019_reference/Relebactam_Bhagunde2019_reference_matlab_simbio.zip" download>Relebactam_Bhagunde2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_relebactam/Relebactam_Bhagunde2019_reference/Relebactam_Bhagunde2019_reference_sbml.zip" download>Relebactam_Bhagunde2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_relebactam/Relebactam_Bhagunde2019_reference/Relebactam_Bhagunde2019_reference_cellml.zip" download>Relebactam_Bhagunde2019_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Bhagunde P, Patel P, Lala M, Watson K, Copalu W, Xu M et al. Population Pharmacokinetic Analysis for Imipenem-Relebactam in Healthy Volunteers and Patients With Bacterial Infections. CPT: pharmacometrics & systems pharmacology 8(10):748–758 (2019). [doi:10.1002/psp4.12462](https://doi.org/10.1002/psp4.12462)

**This record:** Pharmacolibrary v26.09, model `Relebactam_Bhagunde2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_relebactam/Relebactam_Bhagunde2019_reference>

```bibtex
@misc{pharmacolibrary_RelebactamBhagunde2019reference,
  title  = {{Pharmacolibrary model Relebactam_Bhagunde2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_relebactam/Relebactam_Bhagunde2019_reference},
  note   = {Parameters from doi:10.1002/psp4.12462},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brelebactam%5D%20Relebactam_Bhagunde2019_reference&body=Drug%3A%20relebactam%0ARecord%3A%20Relebactam_Bhagunde2019_reference%0APaper%3A%20Bhagunde_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_relebactam/Relebactam_Bhagunde2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:44 UTC</sub>
