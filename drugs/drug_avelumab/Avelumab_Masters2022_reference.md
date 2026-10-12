<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Masters_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Masters2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (equation variable and weight_on_v2), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has avelumab (with axitinib), the second reading avelumab; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `avelumab (with axitinib)`, measured `avelumab`.

## Citation
Masters JC et al., Model-informed drug development support…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12771](https://doi.org/10.1002/psp4.12771)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Masters2022_reference" status="not_modelled" stale="false" population="patients with advanced renal cell carcinoma receiving avelumab plus axitinib" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CL, L/h | `Q22` · CL | 0.0269 | L/h | 7.472222222222222e-09 | [l] / [h] | 1.026 | llm_confirmed (0.6) | psp412771-tbl-0001:row1:col1, psp412771-tbl-0001:row1:col2, psp412771-tbl-0001:row1:col3 | — | not captured |
| θ V1, L | `Q63` · V1 | 3.196 | L | 0.003196 | [l] | 0.7824 | llm_confirmed (0.6) | psp412771-tbl-0001:row2:col1, psp412771-tbl-0001:row2:col2, psp412771-tbl-0001:row2:col3 | — | not captured |
| θ V2, L | `Q64` · V2 | 0.7278 | L | 0.0007278 | [l] | 6.505 | llm_confirmed (0.6) | psp412771-tbl-0001:row3:col1, psp412771-tbl-0001:row3:col2, psp412771-tbl-0001:row3:col3 | — | not captured |
| θ Q, L/h | `Q30` · Q | 0.3352 | L/h | 9.311111111111112e-08 | [l] / [h] | 12.24 | llm (0.6) | psp412771-tbl-0001:row4:col1, psp412771-tbl-0001:row4:col2, psp412771-tbl-0001:row4:col3 | — | 0.09339 (30.56% RSE) |
| θT50, days | `Q900` · equation variable | 99.24 | days | not captured | [d] | 6.931 | llm (0.6) | psp412771-tbl-0001:row6:col1, psp412771-tbl-0001:row6:col2, psp412771-tbl-0001:row6:col3 | — | not captured |
| weight_on_v2 | `Q900` · weight_on_v2 | 0.5826 | days | not captured | [d] | 5.183 | not captured (not captured) | psp412771-tbl-0001:row10:col1, psp412771-tbl-0001:row10:col2, psp412771-tbl-0001:row10:col3 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.4714 | not captured | not captured | not captured | 6.402 | not captured (not captured) | psp412771-tbl-0001:row8:col1, psp412771-tbl-0001:row8:col2, psp412771-tbl-0001:row8:col3 | — | not captured |
| theta_q319_weight | `Q900` · theta_q319_weight | 0.4694 | not captured | not captured | not captured | 6.79 | not captured (not captured) | psp412771-tbl-0001:row9:col1, psp412771-tbl-0001:row9:col2, psp412771-tbl-0001:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'θImax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412771-tbl-0001:row5:col1', 'psp412771-tbl-0001:row5:col2'])
- dropped PD-category row 'θγ' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412771-tbl-0001:row7:col1', 'psp412771-tbl-0001:row7:col2', 'psp412771-tbl-0001:row7:col3'])
- covariate level 'θ weight on V2' → Q900:weight_on_v2 = 0.5826 (linear_fractional on Q22)
- routed 'covCL‐V1' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'covCL‐V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'covV1‐V2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit inherited for weight_on_v2 (Q900): 'days' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412771-tbl-0001:row5:col3 = '−0.1134 to −0.05732'
- unparsed cell psp412771-tbl-0001:row18:col3 = '−0.01453 to 0.0505'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.545 (12/22 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_cl_weight]` | not captured | 0.4714 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.4714 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_weight]` | not captured | 0.4694 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_weight]` | not captured | 0.5826 | only_one_extracted |
| `qwen3.8-27b` | `parameters[weight_on_v2]` | 0.5826 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ v1].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[θ v2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[θt50]` | 99.24 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θγ]` | not captured | 2.086 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | avelumab (with axitinib) | avelumab | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412771-tbl-0001:row1:col1', 'psp412771-tbl-0001:row1:col2', 'psp412771-tbl-0001:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412771-tbl-0001:row4:col1', 'psp412771-tbl-0001:row4:col2', 'psp412771-tbl-0001:row4:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412771-tbl-0001:row2:col1', 'psp412771-tbl-0001:row2:col2', 'psp412771-tbl-0001:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412771-tbl-0001:row3:col1', 'psp412771-tbl-0001:row3:col2', 'psp412771-tbl-0001:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0269 | not captured | not captured | ['psp412771-tbl-0001:row1:col1', 'psp412771-tbl-0001:row1:col2', 'psp412771-tbl-0001:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0269 L/h | not captured | not captured | ['psp412771-tbl-0001:row1:col1', 'psp412771-tbl-0001:row1:col2', 'psp412771-tbl-0001:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['psp412771-tbl-0001:row2:col1', 'psp412771-tbl-0001:row2:col2', 'psp412771-tbl-0001:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.728 L | not captured | not captured | ['psp412771-tbl-0001:row3:col1', 'psp412771-tbl-0001:row3:col2', 'psp412771-tbl-0001:row3:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 1.000 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Masters_2022` / `Masters_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:40 UTC</sub>
