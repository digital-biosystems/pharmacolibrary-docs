<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mycophenolic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/&quot;},{&quot;label&quot;:&quot;Wei_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Nanga2022_reference&quot;,&quot;label&quot;:&quot;Nanga_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Nanga2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Elmowafy2026_reference&quot;,&quot;label&quot;:&quot;Elmowafy_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Elmowafy2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Maizaud2025_rong_et_al_27&quot;,&quot;label&quot;:&quot;Maizaud_2025_rong_et_al_27&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Maizaud2025_rong_et_al_27.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Quintairos2021_mpa_value_rse&quot;,&quot;label&quot;:&quot;Quintairos_2021_mpa_value_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Quintairos2021_mpa_value_rse.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_RomanoAguilar2020_reference&quot;,&quot;label&quot;:&quot;Romano-Aguilar_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_RomanoAguilar2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Rong2023_reference&quot;,&quot;label&quot;:&quot;Rong_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Rong2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Wang2021_reference&quot;,&quot;label&quot;:&quot;Wang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wang2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mycophenolic acid — `MycophenolicAcid_Wei2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 17, model 5.52e+05); k12 use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="Mycophenolic acid" model-id="MycophenolicAcid_Wei2022_reference" status="needs_review" stale="false" population="pediatric patients early after liver transplantation" measured-compound="mycophenolic acid" parameterization="apparent" topology="2C"></div>

## Citation
Wei Y, Wu D, Chen Y, Dong C, Qi J, Wu Y et al. Population pharmacokinetics of mycophenolate mofetil in pediatric patients early after liver transplantation. Frontiers in pharmacology 13:1002628 (2022).
  ·  DOI: [10.3389/fphar.2022.1002628](https://doi.org/10.3389/fphar.2022.1002628)

## Population and dosing

**Population:** pediatric patients early after liver transplantation · condition post-liver transplantation · age group child · n = 20.

**Dosing:** 700, 1050 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed mycophenolate mofetil, measured mycophenolic acid.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference.svg" alt="MycophenolicAcid_Wei2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CLm/F | 14.8 | L/h | 8.5 | 24.5 (26.9% RSE) |
| Ka (h−1) | kabs | 2.0 | h−1 | 18.2 |  |
| Vc/F (L) | V1/F | 6.0 | L | 25.5 |  |
| Vp/F (L) | V2/F | 269 | L |  |  |
| Q/F (L/h) | Q/F | 15.4 | L/h | 27.7 | 117.9 (22.1% RSE) |
| θDOSE | equation variable | 0.452 |  | 20.2 |  |
| CL/F | CL/F | 4.99 | L/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 17, model 5.52e+05); k12 use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — mycophenolic acid: CLm/F 14.8 L/h, kabs 2 h−1, V1/F 6 L, V2/F 269 L, Q/F 15.4 L/h, CL/F 4.99 L/h.

Independently confirmed by `gpt-oss:120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 14.8 | L/h | 4.111e-06 | m3/s | l/h | 8.5 | exact (1) | T3:row3:col1 | 24.5 (26.9% RSE) |
| Ka (h−1) | `Q49` · kabs | 2.0 | h−1 | 0.0005556 | 1/s | 1/h | 18.2 | exact (1) | T3:row4:col1 |  |
| Vc/F (L) | `Q290` · V1/F | 6.0 | L | 0.006 | m3 | l | 25.5 | exact (1) | T3:row5:col1 |  |
| Vp/F (L) | `Q82` · V2/F | 269 | L | 0.269 | m3 | l |  | exact (1) | T3:row6:col1 |  |
| Q/F (L/h) | `Q69` · Q/F | 15.4 | L/h | 4.278e-06 | m3/s | l/h | 27.7 | exact (1) | T3:row7:col1 | 117.9 (22.1% RSE) |
| θDOSE | `Q900` · equation variable | 0.452 |  | 0.452 |  |  | 20.2 | llm (0.6) | T3:row8:col1 |  |
| CL/F | `Q27` · CL/F | 4.99 | L/h | 1.386e-06 | m3/s | L/h |  | review_gapfill (0.7) | Fromage_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- routed 'RV (%)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- metabolite mycophenolic acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mycophenolic acid
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 0/9 row label(s) assigned, 0 linked by role
- molar mass: none found for 'mycophenolate mofetil' — its concentrations stay mass-only
- molar mass: none found for 'mycophenolic acid' — its concentrations stay mass-only
- gap-filled Q27 (CL/F) from Fromage_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T3: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (15/15 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Fromage_2025:review'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T3:row5:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T3:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T3:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T3:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.99 L/h | ['Fromage_2025:review'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 6 L | ['T3:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 269 L | ['T3:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=mycophenolic acid) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 17 | 5.516e+05 | 3.245e+04 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_modelica.zip" download>MycophenolicAcid_Wei2022_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_fmi.zip" download>MycophenolicAcid_Wei2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_matlab.zip" download>MycophenolicAcid_Wei2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_matlab_simbio.zip" download>MycophenolicAcid_Wei2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_sbml.zip" download>MycophenolicAcid_Wei2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_cellml.zip" download>MycophenolicAcid_Wei2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 1.386e-06 | m3/s |
| input | model | `VdPerKg` | 8.571e-05 | m3/kg |
| input | model | `k21` | 1.59e-05 | 1/s |
| input | model | `ka` | 0.0005556 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wei Y, Wu D, Chen Y, Dong C, Qi J, Wu Y et al. Population pharmacokinetics of mycophenolate mofetil in pediatric patients early after liver transplantation. Frontiers in pharmacology 13:1002628 (2022). [doi:10.3389/fphar.2022.1002628](https://doi.org/10.3389/fphar.2022.1002628)

**This record:** Pharmacolibrary, model `MycophenolicAcid_Wei2022_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference>

```bibtex
@misc{pharmacolibrary_MycophenolicAcidWei2022reference,
  title  = {{Pharmacolibrary model MycophenolicAcid_Wei2022_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference},
  note   = {Parameters from doi:10.3389/fphar.2022.1002628},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 2 /h, F 1). Doses in the paper: 700–1050 mg.

<dbs-fmusim paramsurl="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference/MycophenolicAcid_Wei2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `MycophenolicAcid_Wei2022_reference_params.json` · controls `MycophenolicAcid_Wei2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmycophenolic_acid%5D%20MycophenolicAcid_Wei2022_reference&body=Drug%3A%20mycophenolic_acid%0ARecord%3A%20MycophenolicAcid_Wei2022_reference%0APaper%3A%20Wei_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mycophenolic_acid/MycophenolicAcid_Wei2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 04:52 UTC</sub>
