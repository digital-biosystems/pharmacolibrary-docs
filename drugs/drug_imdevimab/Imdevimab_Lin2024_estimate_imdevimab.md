<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Imdevimab&quot;,&quot;href&quot;:&quot;drugs/drug_imdevimab/&quot;},{&quot;label&quot;:&quot;Lin_2024 \u00b7 estimate_imdevimab&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Imdevimab — `Imdevimab_Lin2024_estimate_imdevimab`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.559). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for imdevimab's clearance, volume of distribution, absorption lag time and central→peripheral rate constant; the covariate scenarios were not simulated (+1 more).**

The model was built, but imdevimab's clearance, volume of distribution, absorption lag time and central→peripheral rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — imdevimab: CL 0.236 L/day, V1 3.82 L, Q 0.403 L/day, V2 3.2 L, kabs 0.235 1/day, Fab 0.662.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has casirivimab/imdevimab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Lin KJ et al., Population Pharmacokinetics of Casirivi…, Pharmaceutical research (2024)
  ·  DOI: [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5)

<div class="pk-model-meta" hidden drug="Imdevimab" model-id="Imdevimab_Lin2024_estimate_imdevimab" status="model_quarantined" stale="false" population="pediatric and adult non-infected individuals, patients infected with SARS-CoV-2, or household contacts" measured-compound="casirivimab and imdevimab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: Clearance (L/day) | `Q22` · CL | 0.2359 | L/day | 2.730324074074074e-09 | [l] / [d] | 1.533 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row0:col2 | — | not captured |
| VC: Central volume of distribution (L) | `Q63` · V1 | 3.823 | L | 0.003823 | [l] | 1.025 | boundary_compartment (0.9) | Lin_2024_table_p9_1:row1:col2 | — | not captured |
| Q: Intercompartmental clearance (L/day) | `Q30` · Q | 0.4029 | L/day | 4.663194444444444e-09 | [l] / [d] | 4.604 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row2:col2 | — | not captured |
| VP: Peripheral volume of distribution (L) | `Q64` · V2 | 3.199 | L | 0.003199 | [l] | 1.771 | boundary_compartment (0.9) | Lin_2024_table_p9_1:row3:col2 | — | not captured |
| KA: Absorption rate constant (1/day) | `Q49` · kabs | 0.2354 | 1/day | 2.724537037037037e-06 | [1] / [d] | 6.648 | llm_confirmed (0.6) | Lin_2024_table_p9_1:row4:col2 | — | not captured |
| Bioavailability | `Q40` · Fab | 0.6617 | not captured | not captured | not captured | 1.208 | exact (1.0) | Lin_2024_table_p9_1:row5:col2 | — | not captured |
| sex_on_cl | `Q900` · sex_on_cl | -0.06919 | not captured | not captured | not captured | 13.30 | not captured (not captured) | Lin_2024_table_p9_1:row9:col2 | — | not captured |
| theta_q900_albumin | `Q900` · theta_q900_albumin | -0.9643 | not captured | not captured | not captured | 5.241 | not captured (not captured) | Lin_2024_table_p9_1:row11:col2 | — | not captured |
| theta_q900_sex | `Q900` · theta_q900_sex | -0.08783 | not captured | not captured | not captured | 16.13 | not captured (not captured) | Lin_2024_table_p9_1:row19:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Sex on CL' → Q900:sex_on_cl = -0.06919 (linear_fractional on Q22)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=casirivimab and imdevimab
- population split: 'estimate: imdevimab' subgroup of Lin_2024 (paper reports 2 populations: estimate: casirivimab, estimate: imdevimab)
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lin_2024_table_p9_1:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2359 | not captured | not captured | ['Lin_2024_table_p9_1:row0:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00983 L/h | not captured | not captured | ['Lin_2024_table_p9_1:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.82 L | not captured | not captured | ['Lin_2024_table_p9_1:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['Lin_2024_table_p9_1:row3:col2'] |

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lin_2024` / `Lin_2024::estimate_imdevimab`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/models/modelica/_needs_review/Imdevimab_Lin2024_estimate_imdevimab.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imdevimab/models/modelica/_needs_review/Imdevimab_Lin2024_estimate_imdevimab.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_imdevimab/Imdevimab_Lin2024_estimate_imdevimab_matlab.zip" download>Imdevimab_Lin2024_estimate_imdevimab_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_imdevimab/Imdevimab_Lin2024_estimate_imdevimab_matlab_simbio.zip" download>Imdevimab_Lin2024_estimate_imdevimab_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_imdevimab/Imdevimab_Lin2024_estimate_imdevimab_sbml.zip" download>Imdevimab_Lin2024_estimate_imdevimab_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_imdevimab/Imdevimab_Lin2024_estimate_imdevimab/Imdevimab_Lin2024_estimate_imdevimab_cellml.zip" download>Imdevimab_Lin2024_estimate_imdevimab_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:39 UTC</sub>
