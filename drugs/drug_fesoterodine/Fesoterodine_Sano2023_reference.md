<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;fesoterodine&quot;,&quot;href&quot;:&quot;drugs/drug_fesoterodine/&quot;},{&quot;label&quot;:&quot;Sano_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fesoterodine_Sano2023_reference&quot;,&quot;label&quot;:&quot;Sano_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fesoterodine — `Fesoterodine_Sano2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="fesoterodine" model-id="Fesoterodine_Sano2023_reference" status="accepted_with_caveats" stale="false" population="pediatric patients with neurogenic detrusor overactivity or overactive bladder" measured-compound="5-hydroxymethyl tolterodine" parameterization="apparent" topology="1C"></div>

## Citation
Sano Y, Shoji S, Shahin M, Sweeney K, Darekar A, Malhotra BK. Population Pharmacokinetic and Pharmacodynamic Modeling of Fesoterodine in Pediatric Patients with Neurogenic Detrusor Overactivity. European journal of drug metabolism and pharmacokinetics 48(3):257–269 (2023).
  ·  DOI: [10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8)

## Population and dosing

**Population:** pediatric patients with neurogenic detrusor overactivity or overactive bladder · condition neurogenic detrusor overactivity or overactive bladder · age group child.

**Dosing:** 2, 4, 8 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed fesoterodine, measured 5-hydroxymethyl tolterodine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 5 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference.svg" alt="Fesoterodine_Sano2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F, L/h | CLm/F | 71.4 | L/h | 6.7 | 0.298 (None% RSE) |
| Vd/F, L | V/F | 73.7 | L | 29.7 |  |
| ka, h−1 | kabs | 0.0902 | h−1 | 5.99 |  |
| ALAG, h | tlag | 0.279 | h | 45.1 |  |
| effect_of_cyp2d6_metabolizer_on_cl_fa | effect_of_cyp2d6_metabolizer_on_cl_fa | 0.534 |  | 12.5 |  |
| theta_cl_f_weight | theta_cl_f_weight | 0.75 |  |  |  |
| theta_q76_weight | theta_q76_weight | 1 |  |  |  |
| theta_cl_f_sex | theta_cl_f_sex | 0.862 |  | 8.52 |  |
| theta_q76_sex | theta_q76_sex | 0.635 |  | 30.6 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is fesoterodine's own; they describe 5-hydroxymethyl tolterodine.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 5-hydroxymethyl tolterodine, the second reading 5-HMT; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q351` · CLm/F | 71.4 | L/h | 1.983e-05 | m3/s | l/h | 6.7 | exact (1) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3 | 0.298 (None% RSE) |
| Vd/F, L | `Q76` · V/F | 73.7 | L | 0.0737 | m3 | l | 29.7 | exact (1) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 |  |
| ka, h−1 | `Q49` · kabs | 0.0902 | h−1 | 2.506e-05 | 1/s | 1/h | 5.99 | exact (1) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3 |  |
| ALAG, h | `Q83` · tlag | 0.279 | h | 1004 | s | h | 45.1 | exact (1) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3 |  |
| effect_of_cyp2d6_metabolizer_on_cl_fa | `Q900` · effect_of_cyp2d6_metabolizer_on_cl_fa | 0.534 |  |  |  |  | 12.5 |  | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3 |  |
| theta_cl_f_weight | `Q900` · theta_cl_f_weight | 0.75 |  |  |  |  |  |  | Tab2:row8:col1, Tab2:row8:col3 |  |
| theta_q76_weight | `Q900` · theta_q76_weight | 1 |  |  |  |  |  |  | Tab2:row9:col1, Tab2:row9:col3 |  |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | 0.862 |  |  |  |  | 8.52 |  | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3 |  |
| theta_q76_sex | `Q900` · theta_q76_sex | 0.635 |  |  |  |  | 30.6 |  | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ωCL/F, % CV' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωCL/F-Vd/F' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωVd/F, % CV' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωCL/F-Ka' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωVd/F-ka' routed out of structural estimates ('Inter-individual variance')
- table section iiv: 'ωka, % CV' routed out of structural estimates ('Inter-individual variance')
- table section residual_error: 'σ, % CV' routed out of structural estimates ('Residual variability')
- routed 'Condition numbera' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Effect of fesoterodine formulations on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'])
- covariate level 'Effect of CYP2D6 metabolizer on CL/Fa' → Q900:effect_of_cyp2d6_metabolizer_on_cl_fa = 0.534 (linear_fractional on Q27)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite 5-hydroxymethyl tolterodine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-hydroxymethyl tolterodine
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vd/F, L' is the general volume)
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 12 linked by role
- review gap-fill skipped: this record measures '5-hydroxymethyl tolterodine', not fesoterodine — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row4:col4 = '63.0, 81.1'
- unparsed cell Tab2:row5:col4 = '10.8, 127'
- unparsed cell Tab2:row6:col4 = '0.0804, 0.105'
- unparsed cell Tab2:row7:col4 = '0.00263, 0.479'
- unparsed cell Tab2:row11:col4 = '0.343, 0.721'
- unparsed cell Tab2:row12:col4 = '0.716, 1.02'
- unparsed cell Tab2:row13:col4 = '0.161, 1.26'
- unparsed cell Tab2:row15:col4 = '37.4, 53'
- unparsed cell Tab2:row16:col4 = '− 0.095, 0.793'
- unparsed cell Tab2:row17:col4 = '72, 211'
- unparsed cell Tab2:row18:col4 = '0.00161, 0.131'
- unparsed cell Tab2:row22:col4 = '31.6, 42.7'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` |  | 0.279 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | 0.279 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 71.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 71.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect of fesoterodine formulations on f]` |  | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp2d6_metabolizer_on_cl_fa]` | 0.534 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.0902 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0902 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp2d6]` |  | 0.534 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` |  | 0.862 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` | 0.862 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_sex]` |  | 0.635 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_sex]` | 0.635 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_weight]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` |  | 73.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 73.7 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-hydroxymethyl tolterodine | 5-HMT | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 73.7 L | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=5-hydroxymethyl tolterodine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2.55 | 1.98e-06 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 7.73 | 7.683 | 0.9939 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_modelica.zip" download>Fesoterodine_Sano2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_fmi.zip" download>Fesoterodine_Sano2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3415 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1004 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-06 | kg |
| input | model | `Cl` | 1.983e-05 | m3/s |
| input | model | `VdPerKg` | 0.001053 | m3/kg |
| input | model | `ka` | 2.506e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sano Y, Shoji S, Shahin M, Sweeney K, Darekar A, Malhotra BK. Population Pharmacokinetic and Pharmacodynamic Modeling of Fesoterodine in Pediatric Patients with Neurogenic Detrusor Overactivity. European journal of drug metabolism and pharmacokinetics 48(3):257–269 (2023). [doi:10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8)

**This record:** Pharmacolibrary v26.09, model `Fesoterodine_Sano2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference>

```bibtex
@misc{pharmacolibrary_FesoterodineSano2023reference,
  title  = {{Pharmacolibrary model Fesoterodine_Sano2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference},
  note   = {Parameters from doi:10.1007/s13318-023-00818-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2 mg, single dose, first-order absorption (ka 0.0902 /h, lag 16.7 min, F 1). Doses in the paper: 2, 4, 8 mg.

<dbs-fmusim paramsurl="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference/Fesoterodine_Sano2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fesoterodine_Sano2023_reference_params.json` · controls `Fesoterodine_Sano2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfesoterodine%5D%20Fesoterodine_Sano2023_reference&body=Drug%3A%20fesoterodine%0ARecord%3A%20Fesoterodine_Sano2023_reference%0APaper%3A%20Sano_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:28 UTC</sub>
