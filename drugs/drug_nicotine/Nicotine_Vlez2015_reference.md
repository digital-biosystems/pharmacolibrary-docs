<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;,&quot;href&quot;:&quot;drugs/drug_nicotine/&quot;},{&quot;label&quot;:&quot;V\u00e9lez_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicotine — `Nicotine_Vlez2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Nicotine's total clearance (CL) has no value in this parent–metabolite model, so a library placeholder was used and the model was quarantined rather than published with an invented number.

<div class="pk-model-meta" hidden drug="nicotine" model-id="Nicotine_Vlez2015_reference" status="model_quarantined" stale="false" population="heavy smokers (adults)" measured-compound="nicotine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Vélez de Mendizábal N, Jones DR, Jahn A, Bies RR, Brown JW. Nicotine and cotinine exposure from electronic cigarettes: a population approach. Clinical pharmacokinetics 54(6):615–626 (2015).
  ·  DOI: [10.1007/s40262-014-0221-7](https://doi.org/10.1007/s40262-014-0221-7)

## Population and dosing

**Population:** heavy smokers (adults) · condition heavy smoking · age group adult · n = 10.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F (min/mL · mg) | Fab | 0.123 | min/mL · mg |
| VC (L) | V1 | 207 | L |
| VM (L) | V | 73 | L |
| CL2COT (L/min) | CLfm | 0.872 | L/min |
| CLCOT (L/min) | CL | 0.065 | L/min |
| θCOT (ng/mL) | equation variable | 329 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Nicotine's total clearance (CL) has no value in this parent–metabolite model, so a library placeholder was used and the model was quarantined rather than published with an invented number.**

The record lists nicotine's total clearance (CL = CLEX + CL2METO, L/min) without a value; only the formation clearance to cotinine (CL2COT, 0.872 L/min) and cotinine's clearance (CLCOT, 0.065 L/min) are given. The model builder substituted a default for Cl, which was not acceptable. The model structure also failed its check: a parent–metabolite structure was expected but a one-compartment structure was obtained. Additionally, the reported unit for Fab (min/mL · mg) could not be converted to SI, so that parameter reached the model without an SI value. Extracted — nicotine: Fab 0.123 min/mL · mg, V1 207 L; cotinine: V 73 L, CLfm 0.872 L/min, CL 0.065 L/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θnic: this record has none, the second reading 7.87; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F (min/mL · mg) | `Q40` · Fab | 0.123 | min/mL · mg |  |  |  | exact (1) | T1:row2:col1, T1:row2:col2 |
| VC (L) | `Q63` · V1 | 207 | L | 0.207 | m3 | l | exact (1) | T1:row3:col1 |
| VM (L) | `Q61` · V | 73 | L | 0.073 | m3 | l | exact (1) | T1:row4:col1, T1:row4:col2 |
| CL2COT (L/min) | `Q370` · CLfm | 0.872 | L/min | 1.453e-05 | m3/s | l/min | exact (1) | T1:row5:col1 |
| CLCOT (L/min) | `Q22` · CL | 0.065 | L/min | 1.083e-06 | m3/s | l/min | exact (1) | T1:row8:col1 |
| θCOT (ng/mL) | `Q900` · equation variable | 329 | ng/mL |  |  | ng/ml | llm (0.6) | T1:row10:col1, T1:row10:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL = CLEX + CL2METO (L/min) | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θNIC (ng/mL)' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col2'])
- routed 'cov(σNICO,σCOTO)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Res Error nicotine [log(ng/mL)] *' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Res Error cotinine [log(ng/mL)] *' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- metabolite volume: 'VM (L)' Q63→Q61 for cotinine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nicotine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 14/14 row label(s) assigned, 6 linked by role; re-tagged parent→cotinine ×8, nicotine→parent ×1
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row2:col3 = '0.128 [0.087 0.196]'
- unparsed cell T1:row2:col4 = '76.35 [18.34 104.9]'
- unparsed cell T1:row4:col4 = '29.34 [1.761 38.69]'
- unparsed cell T1:row9:col3 = '6.475 [0.355 17.813]'
- unparsed cell T1:row9:col4 = '117.2 [73.74 186.9]'
- unparsed cell T1:row10:col3 = '297.5 [115.3 524.0]'
- unparsed cell T1:row10:col4 = '34.03 [12.01 48.53]'
- unparsed cell T1:row11:col3 = '1.648 [1.105 2.996]'
- unparsed cell T1:row12:col3 = '1.364 [1.059 1.789]'
- unparsed cell T1:row13:col3 = '0.394 [0.087 0.771]'
- unparsed cell T1:row14:col3 = '0.489 [0.378 0.611]'
- unparsed cell T1:row15:col3 = '0.210 [0.161 0.254]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θcot].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[θnic]` |  | 7.87 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row8:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T1:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T1:row4:col1', 'T1:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.065 | ['T1:row8:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.9 L/h | ['T1:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 73 L | ['T1:row4:col1', 'T1:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 207 L | ['T1:row3:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicotine%5D%20Nicotine_Vlez2015_reference&body=Drug%3A%20nicotine%0ARecord%3A%20Nicotine_Vlez2015_reference%0APaper%3A%20V%C3%A9lez_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nicotine/Nicotine_Vlez2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:40 UTC</sub>
