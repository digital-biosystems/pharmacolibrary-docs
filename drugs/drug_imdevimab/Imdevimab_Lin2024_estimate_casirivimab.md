<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Imdevimab&quot;,&quot;href&quot;:&quot;drugs/drug_imdevimab/&quot;},{&quot;label&quot;:&quot;Lin_2024 \u00b7 estimate_casirivimab&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Imdevimab — `Imdevimab_Lin2024_estimate_casirivimab`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.559). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for imdevimab's clearance, volume of distribution, absorption lag time and central→peripheral rate constant — all 6 extracted parameters describe casirivimab, not imdevimab; the covariate scenarios were not simulated (+1 more).**

The model was built, but imdevimab's clearance, volume of distribution, absorption lag time and central→peripheral rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — casirivimab: CL 0.193 L/day, V1 3.92 L, Q 0.413 L/day, V2 3.06 L, kabs 0.218 1/day, Fab 0.72.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has casirivimab/imdevimab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Lin KJ et al., Population Pharmacokinetics of Casirivi…, Pharmaceutical research (2024)
  ·  DOI: [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5)

<div class="pk-model-meta" hidden drug="Imdevimab" model-id="Imdevimab_Lin2024_estimate_casirivimab" status="model_quarantined" stale="false" population="pediatric and adult non-infected individuals, patients infected with SARS-CoV-2, or household contacts" measured-compound="casirivimab and imdevimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 9 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: Clearance (L/day) | `Q22` · CL | 0.1926 | L/day | 2.2291666666666668e-09 | [l] / [d] | 1.517 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row0:col1 | — | not captured |
| VC: Central volume of distribution (L) | `Q63` · V1 | 3.9170 | L | 0.0039169999999999995 | [l] | 1.033 | boundary_compartment (0.9) | Lin_2024_table_p9_1:row1:col1 | — | not captured |
| Q: Intercompartmental clearance (L/day) | `Q30` · Q | 0.4131 | L/day | 4.78125e-09 | [l] / [d] | 5.573 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row2:col1 | — | not captured |
| VP: Peripheral volume of distribution (L) | `Q64` · V2 | 3.065 | L | 0.003065 | [l] | 1.879 | boundary_compartment (0.9) | Lin_2024_table_p9_1:row3:col1 | — | not captured |
| KA: Absorption rate constant (1/day) | `Q49` · kabs | 0.2183 | 1/day | 2.5266203703703703e-06 | [1] / [d] | 6.619 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row4:col1 | — | not captured |
| Bioavailability | `Q40` · Fab | 0.72 | not captured | not captured | not captured | 1.172 | exact (1.0) | Lin_2024_table_p9_1:row5:col1 | — | not captured |
| weight_on_vc | `Q900` · weight_on_vc | 0.5392 | not captured | not captured | not captured | 4.457 | not captured (not captured) | Lin_2024_table_p9_1:row7:col1 | — | not captured |
| age_on_cl | `Q900` · age_on_cl | 0.07037 | not captured | not captured | not captured | 18.500 | not captured (not captured) | Lin_2024_table_p9_1:row8:col1 | — | not captured |
| sex_on_cl | `Q900` · sex_on_cl | -0.08051 | not captured | not captured | not captured | 11.33 | not captured (not captured) | Lin_2024_table_p9_1:row9:col1 | — | not captured |
| race_on_cl | `Q900` · race_on_cl | -0.09478 | not captured | not captured | not captured | 12.72 | not captured (not captured) | Lin_2024_table_p9_1:row10:col1 | — | not captured |
| hepatic_impairment_on_cl | `Q900` · hepatic_impairment_on_cl | 0.06602 | not captured | not captured | not captured | 19.12 | not captured (not captured) | Lin_2024_table_p9_1:row12:col1 | — | not captured |
| albumin_on_vc | `Q900` · albumin_on_vc | -0.4167 | not captured | not captured | not captured | 9.225 | not captured (not captured) | Lin_2024_table_p9_1:row20:col1 | — | not captured |
| theta_cl_weight | `Q900` · theta_cl_weight | 0.7959 | not captured | not captured | not captured | 2.577 | not captured (not captured) | Lin_2024_table_p9_1:row6:col1 | — | not captured |
| theta_q900_albumin | `Q900` · theta_q900_albumin | -1.078 | not captured | not captured | not captured | 4.762 | not captured (not captured) | Lin_2024_table_p9_1:row11:col1 | — | not captured |
| theta_q900_sex | `Q900` · theta_q900_sex | -0.1092 | not captured | not captured | not captured | 12.24 | not captured (not captured) | Lin_2024_table_p9_1:row19:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Weight on VC' → Q900:weight_on_vc = 0.5392 (linear_fractional on Q22)
- covariate level 'Age on CL' → Q900:age_on_cl = 0.07037 (linear_fractional on Q22)
- covariate level 'Sex on CL' → Q900:sex_on_cl = -0.08051 (linear_fractional on Q22)
- covariate level 'Race on CL' → Q900:race_on_cl = -0.09478 (linear_fractional on Q22)
- covariate level 'Hepatic impairment on CL' → Q900:hepatic_impairment_on_cl = 0.06602 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Viral load on CL' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row13:col1'])
- dropped unlinked row (NIL): 'Serostatus on CL' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row14:col1'])
- dropped unlinked row (NIL): 'CRP on CL' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row15:col1'])
- dropped unlinked row (NIL): 'NLR on CL' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row16:col1'])
- dropped unlinked row (NIL): 'Low oxygen supply on CL' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row17:col1'])
- dropped duplicate Q22 ('High oxygen supply on CL', value '0.3802') — already have one for this compound
- covariate level 'Albumin on VC' → Q900:albumin_on_vc = -0.4167 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Objective function' — extend the ontology if this is a real PK parameter (source ['Lin_2024_table_p9_1:row26:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=casirivimab and imdevimab
- population split: 'estimate: casirivimab' subgroup of Lin_2024 (paper reports 2 populations: estimate: casirivimab, estimate: imdevimab)
- molar mass: none found for 'imdevimab' — its concentrations stay mass-only
- molar mass: none found for 'casirivimab and imdevimab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.559 (19/34 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability in pediatrics]` | not captured | 0.8401 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl: clearance].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[nlr on cl]` | not captured | 0.02883 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_age]` | not captured | 0.07037 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` | not captured | -0.9643 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic]` | not captured | 0.06602 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_race]` | not captured | -0.09478 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` | not captured | -0.06919 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight]` | not captured | 0.7959 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` | 0.7959 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_sex]` | -0.06919 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_albumin]` | not captured | -0.4167 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc: central volume of distribution].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | casirivimab/imdevimab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | imdevimab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.1926 | not captured | not captured | ['Lin_2024_table_p9_1:row0:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00803 L/h | not captured | not captured | ['Lin_2024_table_p9_1:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.92 L | not captured | not captured | ['Lin_2024_table_p9_1:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.06 L | not captured | not captured | ['Lin_2024_table_p9_1:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lin_2024` / `Lin_2024::estimate_casirivimab`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/models/modelica/_needs_review/Imdevimab_Lin2024_estimate_casirivimab.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/models/modelica/_needs_review/Imdevimab_Lin2024_estimate_casirivimab.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_casirivimab/Imdevimab_Lin2024_estimate_casirivimab_matlab.zip" download>Imdevimab_Lin2024_estimate_casirivimab_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_casirivimab/Imdevimab_Lin2024_estimate_casirivimab_matlab_simbio.zip" download>Imdevimab_Lin2024_estimate_casirivimab_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_casirivimab/Imdevimab_Lin2024_estimate_casirivimab_sbml.zip" download>Imdevimab_Lin2024_estimate_casirivimab_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_casirivimab/Imdevimab_Lin2024_estimate_casirivimab_cellml.zip" download>Imdevimab_Lin2024_estimate_casirivimab_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:39 UTC</sub>
