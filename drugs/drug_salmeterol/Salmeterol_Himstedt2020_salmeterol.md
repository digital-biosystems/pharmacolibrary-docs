<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salmeterol&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/&quot;},{&quot;label&quot;:&quot;Himstedt_2020 \u00b7 salmeterol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salmeterol_Berkhout2025_reference&quot;,&quot;label&quot;:&quot;Berkhout_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Berkhout2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Himstedt2020_salmeterol&quot;,&quot;label&quot;:&quot;Himstedt_2020_salmeterol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Salmeterol_Thoueille2026_reference&quot;,&quot;label&quot;:&quot;Thoueille_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salmeterol — `Salmeterol_Himstedt2020_salmeterol`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The salmeterol rat intravenous model was held back because the bioavailability parameter F was left at library defaults instead of being reported or justified from the paper.

<div class="pk-model-meta" hidden drug="salmeterol" model-id="Salmeterol_Himstedt2020_salmeterol" status="needs_review" stale="false" population="rats after intravenous administration" measured-compound="salmeterol" parameterization="mechanistic" topology="2C"></div>

## Citation
Himstedt A, Braun C, Wicha SG, Borghardt JM. Towards a Quantitative Mechanistic Understanding of Localized Pulmonary Tissue Retention-A Combined In Vivo/In Silico Approach Based on Four Model Drugs. Pharmaceutics 12(5):E408 (2020).
  ·  DOI: [10.3390/pharmaceutics12050408](https://doi.org/10.3390/pharmaceutics12050408)

## Population and dosing

**Population:** rats after intravenous administration · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol.svg" alt="Salmeterol_Himstedt2020_salmeterol diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 3.86 | L/h/kg |
| VC | V1 | 0.123 | L/kg |
| Q | Q | 3.24 | L/h/kg |
| VP | V2 | 3.77 | L/kg |
| Kp,T | Kp | 6.52 |  |
| QB 1 | Qb | 0.777 | L/h/kg |
| KA | kabs | -0.89 | h−1 |
| Absorption lag gut | tlag | 1.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The salmeterol rat intravenous model was held back because the bioavailability parameter F was left at library defaults instead of being reported or justified from the paper.**

The record lists salmeterol parameters (CL 3.86 L/h/kg, V1 0.123 L/kg, Q 3.24 L/h/kg, V2 3.77 L/kg, Kp 6.52, Qb 0.777 L/h/kg, kabs −0.89 h−1, tlag 1.5 h), but F has no extracted value. The deviation check flagged the use of defaulted parameters as not acceptable, and the second reader confirmed that F comes from library defaults, not estimates from Himstedt_2020. These default values affect the simulated profile but are not supported by the paper and would need to be extracted or explicitly justified as conventions. Extracted — salmeterol: CL 3.86 L/h/kg, V1 0.123 L/kg, Q 3.24 L/h/kg, V2 3.77 L/kg, Kp 6.52, Qb 0.777 L/h/kg, kabs -0.89 h−1, tlag 1.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption lag gut: this record has 1.5, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 3.86 | L/h/kg | 7.506e-05 | m3/s | L/h | exact (1) | pharmaceutics-12-00408-t001:row1:col2 |
| VC | `Q63` · V1 | 0.123 | L/kg | 0.00861 | m3 | L | exact (1) | pharmaceutics-12-00408-t001:row2:col2 |
| Q | `Q30` · Q | 3.24 | L/h/kg | 6.3e-05 | m3/s | L/h | exact (1) | pharmaceutics-12-00408-t001:row3:col2 |
| VP | `Q64` · V2 | 3.77 | L/kg | 0.2639 | m3 | L | exact (1) | pharmaceutics-12-00408-t001:row4:col2 |
| Kp,T | `Q410` · Kp | 6.52 |  |  |  |  | llm_confirmed (0.6) | pharmaceutics-12-00408-t001:row5:col2 |
| QB 1 | `Q54` · Qb | 0.777 | L/h/kg | 1.511e-05 | m3/s | L/h | llm_confirmed (0.6) | pharmaceutics-12-00408-t001:row9:col2 |
| KA | `Q49` · kabs | -0.89 | h−1 | -0.0002472 | 1/s | 1/h | review_gapfill (0.7) | Ambery_2015:review |
| Absorption lag gut | `Q83` · tlag | 1.5 | h | 5400 | s | h | review_gapfill (0.7) | Heuberger_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q410 ('Kp,B', value '18.6') — already have one for this compound
- dropped duplicate Q410 ('Kp,A', value '39.3') — already have one for this compound
- dropped unlinked row (NIL): 'QT 1' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-00408-t001:row8:col2'])
- dropped duplicate Q30 ('QA 1', value '10.6') — already have one for this compound
- implicit units: 'CL' → L/h/kg (from the popPK convention: 'Paper reports blood flows in L/h/kg (e.g., 0.777 L/h/kg bronchial, 11.6 L/h/kg) and infusion in mL/h/kg, indicating body')
- implicit units: 'VC' → L/kg (from the popPK convention: 'No unit stated for volumes; consistent with weight-normalized PBPK-style parameters (flows in L/h/kg), central volume co')
- implicit units: 'Q' → L/h/kg (from the popPK convention: "No unit stated; intercompartmental clearance conventionally L/h, and paper's parameters are weight-normalized (blood flo")
- implicit units: 'VP' → L/kg (from the popPK convention: 'No unit stated; peripheral volume conventionally L, weight-normalized to L/kg consistent with other parameters.')
- implicit units: 'QB 1' → L/h/kg (from the paper text: "Text states 'The bronchial blood flow amounted to 0.777 L/h/kg (21.5% CV)', matching QB = 0.777.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salmeterol
- population split: 'salmeterol' subgroup of Himstedt_2020 (paper reports 4 populations: fluticasone propionate, salmeterol, t½ (human) 2, t½ (rat))
- gap-filled Q49 (kabs) from Ambery_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Heuberger_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-12-00408-t001:row1:col1 = 'L·h−1·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row2:col1 = 'L·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row3:col1 = 'L·h−1·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row4:col1 = 'L·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row8:col1 = 'L·h−1·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row9:col1 = 'L·h−1·kg−1'
- unparsed cell pharmaceutics-12-00408-t001:row10:col1 = 'L·h−1·kg−1'
- unparsed cell Himstedt_2020_table_2:row4:col2 = '52.4 min'
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag gut]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | -0.89 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00408-t001:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00408-t001:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ambery_2015:review'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-12-00408-t001:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-12-00408-t001:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-12-00408-t001:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Heuberger_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.86 | ['pharmaceutics-12-00408-t001:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 270 L/h | ['pharmaceutics-12-00408-t001:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.61 L | ['pharmaceutics-12-00408-t001:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 264 L | ['pharmaceutics-12-00408-t001:row4:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=salmeterol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_modelica.zip" download>Salmeterol_Himstedt2020_salmeterol_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_fmi.zip" download>Salmeterol_Himstedt2020_salmeterol_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_matlab.zip" download>Salmeterol_Himstedt2020_salmeterol_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_matlab_simbio.zip" download>Salmeterol_Himstedt2020_salmeterol_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_sbml.zip" download>Salmeterol_Himstedt2020_salmeterol_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_cellml.zip" download>Salmeterol_Himstedt2020_salmeterol_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4156 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 5400 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 7.506e-05 | m3/s |
| input | model | `VdPerKg` | 0.000123 | m3/kg |
| input | model | `k12` | 0.007317 | 1/s |
| input | model | `k21` | 0.0002387 | 1/s |
| input | model | `ka` | -0.0002472 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Himstedt A, Braun C, Wicha SG, Borghardt JM. Towards a Quantitative Mechanistic Understanding of Localized Pulmonary Tissue Retention-A Combined In Vivo/In Silico Approach Based on Four Model Drugs. Pharmaceutics 12(5):E408 (2020). [doi:10.3390/pharmaceutics12050408](https://doi.org/10.3390/pharmaceutics12050408)

**This record:** Pharmacolibrary v26.09, model `Salmeterol_Himstedt2020_salmeterol`. <https://pharmacolibrary.github.io/#/drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol>

```bibtex
@misc{pharmacolibrary_SalmeterolHimstedt2020salmeterol,
  title  = {{Pharmacolibrary model Salmeterol_Himstedt2020_salmeterol}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol},
  note   = {Parameters from doi:10.3390/pharmaceutics12050408},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka -0.89 /h, lag 90 min, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol/Salmeterol_Himstedt2020_salmeterol_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Salmeterol_Himstedt2020_salmeterol_params.json` · controls `Salmeterol_Himstedt2020_salmeterol_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalmeterol%5D%20Salmeterol_Himstedt2020_salmeterol&body=Drug%3A%20salmeterol%0ARecord%3A%20Salmeterol_Himstedt2020_salmeterol%0APaper%3A%20Himstedt_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:51 UTC</sub>
