<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Nirmatrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/&quot;},{&quot;label&quot;:&quot;Chen_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nirmatrelvir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zaryab2026_reference&quot;,&quot;label&quot;:&quot;Zaryab_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zaryab2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Nirmatrelvir_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nirmatrelvir — `Nirmatrelvir_Chen2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The nirmatrelvir model (critically ill adults, Chen_2024) was held back because bioavailability F and lag time Tlag were not reported or estimated in the paper; library defaults were substituted instead.

<div class="pk-model-meta" hidden drug="Nirmatrelvir" model-id="Nirmatrelvir_Chen2024_reference" status="needs_review" stale="false" population="critically ill adults with COVID-19" measured-compound="nirmatrelvir" parameterization="mechanistic" topology="1C"></div>

## Citation
Chen N, Yu X, Li L, Yang P, Dong R, Huang Y et al. Target Attainment and Population Pharmacokinetics of Nirmatrelvir/Ritonavir in Critically Ill Adult Patients. Infection and drug resistance 17:4055–4065 (2024).
  ·  DOI: [10.2147/IDR.S471918](https://doi.org/10.2147/IDR.S471918)

## Population and dosing

**Population:** critically ill adults with COVID-19 · condition critical illness (COVID-19) · age group adult · n = 31.

**Dosing:** 150, 300 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed nirmatrelvir/ritonavir, measured nirmatrelvir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference.svg" alt="Nirmatrelvir_Chen2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| tvKa, h−1 | kabs | 0.42 | h−1 |  |
| tvV, L | V | 36.5 | L |  |
| tvCL, L/h | CL | 3.6 | L/h | 0.12 (None% RSE) |
| dCLdCrCL | equation variable | 0.53 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The nirmatrelvir model (critically ill adults, Chen_2024) was held back because bioavailability F and lag time Tlag were not reported or estimated in the paper; library defaults were substituted instead.**

The record reports kabs 0.42 h−1, V 36.5 L, CL 3.6 L/h and a creatinine-clearance effect on CL of 0.53 for nirmatrelvir, but the deviations check failed because F and Tlag were left as defaults rather than fitted values. These defaults affect the simulated profile yet are not supported by the paper, so the model was marked needs_review. Extracted — nirmatrelvir: kabs 0.42 h−1, V 36.5 L, CL 3.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nirmatrelvir/ritonavir, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| tvKa, h−1 | `Q49` · kabs | 0.42 | h−1 | 0.0001167 | 1/s | 1/h | tv_prefix (0.95) | t0003:row2:col1, t0003:row2:col2, t0003:row2:col3, t0003:row2:col4, Chen_2024_table_2:row1:col1, Chen_2024_table_2:row1:col2, Chen_2024_table_2:row1:col3, Chen_2024_table_2:row1:col4 |  |
| tvV, L | `Q61` · V | 36.5 | L | 0.0365 | m3 | l | tv_prefix (0.95) | t0003:row3:col1, t0003:row3:col2, t0003:row3:col3, t0003:row3:col4, Chen_2024_table_2:row2:col1, Chen_2024_table_2:row2:col2, Chen_2024_table_2:row2:col3, Chen_2024_table_2:row2:col4 |  |
| tvCL, L/h | `Q22` · CL | 3.6 | L/h | 1e-06 | m3/s | l/h | tv_prefix (0.95) | t0003:row4:col1, t0003:row4:col2, t0003:row4:col3, t0003:row4:col4, Chen_2024_table_2:row3:col1, Chen_2024_table_2:row3:col2, Chen_2024_table_2:row3:col3, Chen_2024_table_2:row3:col4 | 0.12 (None% RSE) |
| dCLdCrCL | `Q900` · equation variable | 0.53 |  |  |  |  | llm (0.6) | t0003:row5:col1, t0003:row5:col2, t0003:row5:col3, t0003:row5:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ω2V' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2CL' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'CorrV-CL' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'stdev' routed out of structural estimates ('Residual variability (σ)')
- table section residual_error: 'Stdev0' routed out of structural estimates ('Residual variability (σ)')
- dropped duplicate Q22 ('dCLdAUCRIT', value '-0.45') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (tvV, L); Q22 (tvCL, L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nirmatrelvir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t0003:row6:col4 = '−0.62-(−0.10)'
- companion parameter table 2 transcribed (22 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dcldcrcl]` | 0.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl].value` | 3.6 | 2.6 | mismatch |
| `gpt-oss-120b` | `parameters[tvka].value` | 0.42 | 0.09 | mismatch |
| `gpt-oss-120b` | `parameters[tvv].value` | 36.5 | 5.5 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | nirmatrelvir/ritonavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nirmatrelvir | unknown | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0003:row4:col1', 't0003:row4:col2', 't0003:row4:col3', 't0003:row4:col4', 'Chen_2024_table_2:row3:col1', 'Chen_2024_table_2:row3:col2', 'Chen_2024_table_2:row3:col3', 'Chen_2024_table_2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t0003:row2:col1', 't0003:row2:col2', 't0003:row2:col3', 't0003:row2:col4', 'Chen_2024_table_2:row1:col1', 'Chen_2024_table_2:row1:col2', 'Chen_2024_table_2:row1:col3', 'Chen_2024_table_2:row1:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['t0003:row3:col1', 't0003:row3:col2', 't0003:row3:col3', 't0003:row3:col4', 'Chen_2024_table_2:row2:col1', 'Chen_2024_table_2:row2:col2', 'Chen_2024_table_2:row2:col3', 'Chen_2024_table_2:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.6 | ['t0003:row4:col1', 't0003:row4:col2', 't0003:row4:col3', 't0003:row4:col4', 'Chen_2024_table_2:row3:col1', 'Chen_2024_table_2:row3:col2', 'Chen_2024_table_2:row3:col3', 'Chen_2024_table_2:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.6 L/h | ['t0003:row4:col1', 't0003:row4:col2', 't0003:row4:col3', 't0003:row4:col4', 'Chen_2024_table_2:row3:col1', 'Chen_2024_table_2:row3:col2', 'Chen_2024_table_2:row3:col3', 'Chen_2024_table_2:row3:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 36.5 L | ['t0003:row3:col1', 't0003:row3:col2', 't0003:row3:col3', 't0003:row3:col4', 'Chen_2024_table_2:row2:col1', 'Chen_2024_table_2:row2:col2', 'Chen_2024_table_2:row2:col3', 'Chen_2024_table_2:row2:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=nirmatrelvir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_modelica.zip" download>Nirmatrelvir_Chen2024_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_fmi.zip" download>Nirmatrelvir_Chen2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_matlab.zip" download>Nirmatrelvir_Chen2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_matlab_simbio.zip" download>Nirmatrelvir_Chen2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_sbml.zip" download>Nirmatrelvir_Chen2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_cellml.zip" download>Nirmatrelvir_Chen2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4995 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 1e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005214 | m3/kg |
| input | model | `ka` | 0.0001167 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chen N, Yu X, Li L, Yang P, Dong R, Huang Y et al. Target Attainment and Population Pharmacokinetics of Nirmatrelvir/Ritonavir in Critically Ill Adult Patients. Infection and drug resistance 17:4055–4065 (2024). [doi:10.2147/IDR.S471918](https://doi.org/10.2147/IDR.S471918)

**This record:** Pharmacolibrary v26.09, model `Nirmatrelvir_Chen2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference>

```bibtex
@misc{pharmacolibrary_NirmatrelvirChen2024reference,
  title  = {{Pharmacolibrary model Nirmatrelvir_Chen2024_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference},
  note   = {Parameters from doi:10.2147/IDR.S471918},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.42 /h, F 0.9). Doses in the paper: 150–300 mg.

<dbs-fmusim paramsurl="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference/Nirmatrelvir_Chen2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nirmatrelvir_Chen2024_reference_params.json` · controls `Nirmatrelvir_Chen2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnirmatrelvir%5D%20Nirmatrelvir_Chen2024_reference&body=Drug%3A%20nirmatrelvir%0ARecord%3A%20Nirmatrelvir_Chen2024_reference%0APaper%3A%20Chen_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:40 UTC</sub>
