<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/&quot;},{&quot;label&quot;:&quot;Shemesh_2019 \u00b7 adult_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atezolizumab — `Atezolizumab_Shemesh2019_adult_model`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="atezolizumab" model-id="Atezolizumab_Shemesh2019_adult_model" status="not_modelled" stale="false" population="pediatric and young adult patients with cancer" measured-compound="atezolizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Shemesh CS, Chanu P, Jamsen K, Wada R, Rossato G, Donaldson F et al. Population pharmacokinetics, exposure-safety, and immunogenicity of atezolizumab in pediatric and young adult patients with cancer. Journal for immunotherapy of cancer 7(1):314 (2019).
  ·  DOI: [10.1186/s40425-019-0791-x](https://doi.org/10.1186/s40425-019-0791-x)

## Population and dosing

**Population:** pediatric and young adult patients with cancer · condition cancer (metastatic solid tumors or hematologic malignancies) · age group mixed · n = 87.

**Dosing:** 15, 1200 mg/kg; mg, iv, multiple, every 504 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/day) | CL | 0.200 | L/day | 0.0867 (None% RSE) |
| V1 (L) | V1 | 3.28 | L | 0.0328 (None% RSE) |
| V2 (L) | V2 | 3.63 | L | 0.114 (None% RSE) |
| Q (L/day) | Q | 0.546 | L/day |  |
| sex_female_on_v1 | sex_female_on_v1 | 16 |  |  |
| sex_female_on_v2 | sex_female_on_v2 | -0.272 |  |  |
| theta_q319_weight | theta_q319_weight | 0.808 |  |  |
| theta_q314_albumin | theta_q314_albumin | -1.12 |  |  |
| theta_q314_ada | theta_q314_ada | 1.16 |  |  |
| theta_q319_weight | theta_q319_weight | 0.559 |  |  |
| theta_v1_albumin | theta_v1_albumin | -0.350 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.476). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of albumin_on_v1: this record has none, the second reading -0.350; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/day) | `Q22` · CL | 0.200 | L/day | 2.315e-09 | m3/s | l/d | exact (1) | Tab2:row2:col4, Tab2:row2:col5 | 0.0867 (None% RSE) |
| V1 (L) | `Q63` · V1 | 3.28 | L | 0.00328 | m3 | l | exact (1) | Tab2:row3:col4, Tab2:row3:col5 | 0.0328 (None% RSE) |
| V2 (L) | `Q64` · V2 | 3.63 | L | 0.00363 | m3 | l | exact (1) | Tab2:row4:col4, Tab2:row4:col5 | 0.114 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.546 | L/day | 6.319e-09 | m3/s | l/d | exact (1) | Tab2:row5:col4, Tab2:row5:col5 |  |
| sex_female_on_v1 | `Q900` · sex_female_on_v1 | 16 |  |  |  |  |  | Tab2:row12:col5 |  |
| sex_female_on_v2 | `Q900` · sex_female_on_v2 | -0.272 |  |  |  |  |  | Tab2:row13:col4, Tab2:row13:col5 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.808 |  |  |  |  |  | Tab2:row6:col4, Tab2:row6:col5 |  |
| theta_q314_albumin | `Q900` · theta_q314_albumin | -1.12 |  |  |  |  |  | Tab2:row7:col4, Tab2:row7:col5 |  |
| theta_q314_ada | `Q900` · theta_q314_ada | 1.16 |  |  |  |  |  | Tab2:row9:col4, Tab2:row9:col5 |  |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.559 |  |  |  |  |  | Tab2:row10:col4, Tab2:row10:col5 |  |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.350 |  |  |  |  |  | Tab2:row11:col4, Tab2:row11:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('Tumor burden on CL', value '0.125') — already have one for this compound
- covariate level 'Sex (female) on V1' → Q900:sex_female_on_v1 = 16 (linear_fractional on Q22)
- covariate level 'Sex (female) on V2' → Q900:sex_female_on_v2 = -0.272 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Objective function' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atezolizumab
- population split: 'adult model' subgroup of Shemesh_2019 (paper reports 2 populations: adult model, pediatric/young adult model)
- molar mass: none found for 'atezolizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row12:col4 = '− 0.129'
- companion parameter table 3 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3
- LLM region Shemesh_2019:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.476 (10/21 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[albumin_on_v1]` |  | -0.350 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada]` |  | 1.16 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` |  | -1.12 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_weight]` |  | 0.808 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_ada]` | 1.16 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_albumin]` | -1.12 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_weight]` |  | 0.559 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.808 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin]` | -0.350 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1].covariate_forms` | ['linear_fractional'] | [] | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row4:col4', 'Tab2:row4:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00833 L/h | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.28 L | ['Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.63 L | ['Tab2:row4:col4', 'Tab2:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 270 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 330 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 349 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 492 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 486 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 326 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 400 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 463 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 460 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 664 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 651 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 404 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 55.6 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 65 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 65.5 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 97.3 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 98.8 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 57.6 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 120 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 125 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 112 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 171 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 164 | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 88.1 | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batezolizumab%5D%20Atezolizumab_Shemesh2019_adult_model&body=Drug%3A%20atezolizumab%0ARecord%3A%20Atezolizumab_Shemesh2019_adult_model%0APaper%3A%20Shemesh_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_adult_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:22 UTC</sub>
