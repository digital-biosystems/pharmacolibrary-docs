<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bevacizumab&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/&quot;},{&quot;label&quot;:&quot;Caulet_2016 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bevacizumab — `Bevacizumab_Caulet2016_estimate`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="bevacizumab" model-id="Bevacizumab_Caulet2016_estimate" status="not_modelled" stale="false" population="patients with metastatic colorectal cancer" measured-compound="bevacizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Caulet M, Lecomte T, Bouché O, Rollin J, Gouilleux-Gruart V, Azzopardi N et al. Bevacizumab Pharmacokinetics Influence Overall and Progression-Free Survival in Metastatic Colorectal Cancer Patients. Clinical pharmacokinetics 55(11):1381–1394 (2016).
  ·  DOI: [10.1007/s40262-016-0406-3](https://doi.org/10.1007/s40262-016-0406-3)

## Population and dosing

**Population:** patients with metastatic colorectal cancer · condition metastatic colorectal cancer · n = 130.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V C (L) | V1 | 4.2 | L |
| k 10 (/day) | kel | 0.045 | /day |
| k 12 (/day) | k12 | 0.16 | /day |
| k 21 (/day) | k21 | 0.1 | /day |
| CL (L/day) | CL | 0.19 | L/day |
| V P (L) | V2 | 7.7 | L |
| Q (L/day) | Q | 0.69 | L/day |
| theta_v1_height | theta_v1_height | 3.2 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_v1_height: this record has 3.2, the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V C (L) | `Q63` · V1 | 4.2 | L | 0.0042 | m3 | l | space_fold (0.95) | tab_1:row1:col1 |
| k 10 (/day) | `Q47` · kel | 0.045 | /day | 5.208e-07 | 1/s | 1/d | space_fold (0.95) | tab_1:row4:col1 |
| k 12 (/day) | `Q301` · k12 | 0.16 | /day | 1.852e-06 | 1/s | 1/d | space_fold (0.95) | tab_1:row8:col1 |
| k 21 (/day) | `Q302` · k21 | 0.1 | /day | 1.157e-06 | 1/s | 1/d | space_fold (0.95) | tab_1:row9:col1 |
| CL (L/day) | `Q22` · CL | 0.19 | L/day | 2.199e-09 | m3/s | l/d | exact (1) | tab_1:row10:col1 |
| V P (L) | `Q64` · V2 | 7.7 | L | 0.0077 | m3 | l | space_fold (0.95) | tab_1:row11:col1 |
| Q (L/day) | `Q30` · Q | 0.69 | L/day | 7.986e-09 | m3/s | l/d | exact (1) | tab_1:row12:col1 |
| theta_v1_height | `Q900` · theta_v1_height | 3.2 |  |  |  |  |  | tab_1:row2:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'VNTR 3/3 on V C' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col1'])
- dropped unlinked row (NIL): 'CEA (lg/L) on k 10' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col1'])
- dropped unlinked row (NIL): 'EHM on k 10' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1'])
- dropped unlinked row (NIL): 'VEGF (lg/L) on k 10' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1'])
- unit_dimension_mismatch: 'x Vc' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('x Vc', value '0.23') — already have one for this compound
- dropped unlinked row (NIL): 'x k10' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col1'])
- dropped unlinked row (NIL): 'x CL' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col1'])
- routed 'r add (mg/L)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'r prop (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bevacizumab
- population split: 'estimate' subgroup of Caulet_2016 (paper reports 2 populations: estimate, p value a)
- molar mass: none found for 'bevacizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_v1_height]` | 3.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c].covariate_forms` | ['linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row10:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row12:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab_1:row8:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab_1:row9:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 | ['tab_1:row10:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00792 L/h | ['tab_1:row10:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.2 L | ['tab_1:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.7 L | ['tab_1:row11:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | note |
|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | skipped | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass | no engineer deviations to adjudicate |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbevacizumab%5D%20Bevacizumab_Caulet2016_estimate&body=Drug%3A%20bevacizumab%0ARecord%3A%20Bevacizumab_Caulet2016_estimate%0APaper%3A%20Caulet_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bevacizumab/Bevacizumab_Caulet2016_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:14 UTC</sub>
