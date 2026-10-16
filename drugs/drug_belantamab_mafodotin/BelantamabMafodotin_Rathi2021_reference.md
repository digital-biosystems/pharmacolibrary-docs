<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Rathi_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BelantamabMafodotin_FerronBrady2021_reference&quot;,&quot;label&quot;:&quot;Ferron-Brady_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/BelantamabMafodotin_FerronBrady2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Rathi2021_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model was built but has not been simulated yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (allometric_exponent and equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has belantamab mafodotin (belamaf; ADC), the second reading belantamab_mafodotin; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Rathi C et al., Population pharmacokinetics of belantam…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12660](https://doi.org/10.1002/psp4.12660)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Rathi2021_reference" status="not_simulated" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab_mafodotin" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL (L/day) | `Q22` · CL | 0.94 | L/day | 1.087962962962963e-08 | [l] / [d] | not captured | tv_prefix (0.95) | Rathi_2021_table_p6_1:row0:col1 | — | not captured |
| TVV1 (L) | `Q63` · V1 | 4.47 | L | 0.00447 | [l] | not captured | exact (1.0) | Rathi_2021_table_p6_1:row1:col1 | — | not captured |
| TVQ (L/day) | `Q30` · Q | 0.78 | L/day | 9.027777777777778e-09 | [l] / [d] | not captured | tv_prefix (0.95) | Rathi_2021_table_p6_1:row2:col1 | — | not captured |
| TVV2 (L) | `Q64` · V2 | 5.96 | L | 0.00596 | [l] | not captured | exact (1.0) | Rathi_2021_table_p6_1:row3:col1 | — | not captured |
| Effect of ALB on CL (θCL-ALB) | `Q319` · allometric_exponent | -0.97 | θCL-ALB | not captured | [alb] · [θcl] | not captured | llm_corrected (0.6) | Rathi_2021_table_p6_1:row9:col1 | — | not captured |
| ETAV1 (%) | `Q900` · equation variable | 14.60 | % | not captured | [%] | not captured | llm (0.6) | Rathi_2021_table_p6_1:row19:col1 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | 1.14 | not captured | not captured | not captured | not captured | not captured (not captured) | Rathi_2021_table_p6_1:row11:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'IMAX' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Rathi_2021_table_p6_1:row4:col1'])
- dropped unlinked row (NIL): 'TI50 (day)' — extend the ontology if this is a real PK parameter (source ['Rathi_2021_table_p6_1:row5:col1'])
- dropped PD-category row 'GAMMA' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Rathi_2021_table_p6_1:row6:col1'])
- routed 'Effect of BWT on V1 (θV1-BWT)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_unknown: 'θCL-BWT' (CL)
- dropped duplicate Q22 ('Effect of BWT on CL (θCL-BWT)', value '0.51') — already have one for this compound
- unit_dimension_unknown: 'θCL-ALB' (allometric_exponent)
- unit_dimension_unknown: 'θV1-ALB' (V1)
- dropped duplicate Q63 ('Effect of ALB on V1 (θV1-ALB)', value '-0.47') — already have one for this compound
- unit_dimension_unknown: 'θCL-BSBcMA' (allometric_exponent)
- dropped duplicate Q319 ('Effect of BSBcMA on CL (θCL-BSBcMA)', value '0.13') — already have one for this compound
- unit_dimension_unknown: 'θCL-BIGG' (CL)
- dropped duplicate Q22 ('Effect of BIGG on CL (θCL-BIGG)', value '0.13') — already have one for this compound
- unit_dimension_unknown: 'θV2-DOSE&lt;1' (V2)
- dropped duplicate Q64 ('Effect of dose &lt;1 mg/kg on V2 (θV2-DOSE&lt;1)', value '0.13') — already have one for this compound
- unit_dimension_unknown: 'θCL-DOSE&lt;1' (CL)
- dropped duplicate Q22 ('Effect of dose &lt;1 mg/kg on CL (θCL-DOSE&lt;1)', value '0.62') — already have one for this compound
- unit_dimension_unknown: 'θV1-DREAMM1' (V1)
- dropped duplicate Q63 ('Effect of DREAMM1/BMA117159 on V1 (θV1-DREAMM1)', value '0.66') — already have one for this compound
- unit_dimension_unknown: 'θCL-DREAMM1' (CL)
- dropped duplicate Q22 ('Effect of DREAMM1/BMA117159 on CL (θCL-DREAMM1)', value '0.61') — already have one for this compound
- dropped diagnostic row 'ETACL (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- routed 'ETAQ (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ETAV2 (%)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- routed 'ETAIMAX (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped diagnostic row 'ETATI50 (%)' → Q318 (shrinkage) — reported statistic, not a parameter
- routed 'RES ERR, additive SIGMA on log scale' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab_mafodotin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 4 linked by role
- molar mass: no plausible PubChem entry for 'total_mAb' ('no full name in the paper') — left in mass units
- molar mass: none found for 'belantamab_mafodotin' — its concentrations stay mass-only
- molar mass: none found for 'total_mAb' — its concentrations stay mass-only

**Extraction notes:**
- table Rathi_2021_table_p6_1: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['belantamab mafodotin (adc)', 'cys-mcmmaf', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[effect of bigg on cl]` | 0.13 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of bwt on v1]` | 0.50 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect of dreamm1/bma117159 on cl]` | not captured | 0.61 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ti50]` | 53.90 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | belantamab mafodotin (belamaf; ADC) | belantamab_mafodotin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | belantamab mafodotin (ADC) | belantamab_mafodotin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Rathi_2021_table_p6_1:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Rathi_2021_table_p6_1:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Rathi_2021_table_p6_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Rathi_2021_table_p6_1:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.94 | not captured | not captured | ['Rathi_2021_table_p6_1:row0:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0392 L/h | not captured | not captured | ['Rathi_2021_table_p6_1:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.47 L | not captured | not captured | ['Rathi_2021_table_p6_1:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.96 L | not captured | not captured | ['Rathi_2021_table_p6_1:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 36.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 917 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rathi_2021` / `Rathi_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belantamab_mafodotin/models/modelica/BelantamabMafodotin_Rathi2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belantamab_mafodotin/models/modelica/BelantamabMafodotin_Rathi2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference/BelantamabMafodotin_Rathi2021_reference_modelica.zip" download>BelantamabMafodotin_Rathi2021_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference/BelantamabMafodotin_Rathi2021_reference_matlab.zip" download>BelantamabMafodotin_Rathi2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference/BelantamabMafodotin_Rathi2021_reference_matlab_simbio.zip" download>BelantamabMafodotin_Rathi2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference/BelantamabMafodotin_Rathi2021_reference_sbml.zip" download>BelantamabMafodotin_Rathi2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_belantamab_mafodotin/BelantamabMafodotin_Rathi2021_reference/BelantamabMafodotin_Rathi2021_reference_cellml.zip" download>BelantamabMafodotin_Rathi2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:13 UTC</sub>
