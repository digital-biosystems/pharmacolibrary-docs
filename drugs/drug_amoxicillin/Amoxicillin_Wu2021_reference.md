<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/&quot;},{&quot;label&quot;:&quot;Wu_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amoxicillin_AlbanellFernndez2025_reference&quot;,&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_AlbanellFernndez2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Bardhi2026_reference&quot;,&quot;label&quot;:&quot;Bardhi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Bardhi2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Baklouti2026_reference&quot;,&quot;label&quot;:&quot;Baklouti_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Baklouti2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Dubbelboer2025_reference&quot;,&quot;label&quot;:&quot;Dubbelboer_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Echizen2016_reference&quot;,&quot;label&quot;:&quot;Echizen_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Echizen2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Wu2021_reference&quot;,&quot;label&quot;:&quot;Wu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Li_1994_N&quot;,&quot;label&quot;:&quot;Li_1994 \u00b7 N&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/pd_Li_1994_N.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amoxicillin — `Amoxicillin_Wu2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability and absorption lag time parameters were not reported in Wu_2021, so library defaults were used instead of paper estimates.

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Wu2021_reference" status="needs_review" stale="false" population="Chinese infants" measured-compound="amoxicillin" parameterization="mechanistic" topology="2C"></div>

## Citation
Wu YE, Wang YK, Tang BH, Dong L, Li X, Zhang W et al. Population Pharmacokinetics and Dosing Optimization of Amoxicillin in Chinese Infants. Journal of clinical pharmacology 61(4):538–546 (2021).
  ·  DOI: [10.1002/jcph.1752](https://doi.org/10.1002/jcph.1752)

## Population and dosing

**Population:** Chinese infants · condition bacterial infections · age group infant · n = ...00.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference.svg" alt="Amoxicillin_Wu2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL(L/h) CL = θ1 × Fweight θ1 | CL | 2.18 | L/h | 25.1 (None% RSE) |
| V₁ (L) V₁ = θ2 θ2 | V1 | 2.23 | L |  |
| V₂ (L) V₂ = θ3 θ3 | V2 | 2.27 | L | 89.5 (None% RSE) |
| Q (L/h) Q = θ4 θ4 | Q | 0.713 | L/h |  |
| Fweight = (CW/7)^0.5 θ5 | equation variable | 0.932 |  |  |
| ka (h−1) | kabs | 0.17 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-5.6-luna (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability and absorption lag time parameters were not reported in Wu_2021, so library defaults were used instead of paper estimates.**

The record lists clearance and volume parameters but omits values for bioavailability (F) and lag time (Tlag). The review explicitly flags these as unreported, noting that the model builder used defaults rather than estimates from the paper. Consequently, the simulated pharmacokinetic profile relies on assumed values not supported by the Wu_2021 study. Extracted — amoxicillin: CL 2.18 L/h, V1 2.23 L, V2 2.27 L, Q 0.713 L/h, kabs 0.17 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[fweight = (cw/7)^0.5 θ5].parameter_id`: this record has Q900, the second reading Q319; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL(L/h) CL = θ1 × Fweight θ1 | `Q22` · CL | 2.18 | L/h | 6.056e-07 | m3/s | l/h | llm_confirmed (0.6) | Wu_2021_table_p5_1:row0:col1 | 25.1 (None% RSE) |
| V₁ (L) V₁ = θ2 θ2 | `Q63` · V1 | 2.23 | L | 0.00223 | m3 | l | llm_confirmed (0.6) | Wu_2021_table_p5_1:row1:col1 |  |
| V₂ (L) V₂ = θ3 θ3 | `Q64` · V2 | 2.27 | L | 0.00227 | m3 | l | llm_confirmed (0.6) | Wu_2021_table_p5_1:row2:col1 | 89.5 (None% RSE) |
| Q (L/h) Q = θ4 θ4 | `Q30` · Q | 0.713 | L/h | 1.981e-07 | m3/s | l/h | llm (0.6) | Wu_2021_table_p5_1:row3:col1 |  |
| Fweight = (CW/7)^0.5 θ5 | `Q900` · equation variable | 0.932 |  |  |  |  | llm (0.6) | Wu_2021_table_p5_1:row4:col1 |  |
| ka (h−1) | `Q49` · kabs | 0.17 | h−1 | 4.722e-05 | 1/s | 1/h | review_gapfill (0.7) | Baklouti_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'V₂' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'Residual variability (%)' routed out of structural estimates ('Interindividual variability (%)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- model equation 'Fweight = (CW/7)^0.5
θ5' not bound — neither LHS nor base term 'CW' linked to an ontology parameter
- gap-filled Q49 (kabs) from Baklouti_2026's review values (primary lacked it)

**Extraction notes:**
- table Wu_2021_table_p5_1: unbound_uncertainty
- captured model equation Fweight = (CW/7)^0.5
θ5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |
| `gpt-5.6-luna` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[ka]` | 0.17 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[t lagpo]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fweight = (cw/7)^0.5 θ5].parameter_id` | Q900 | Q319 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 0.17 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wu_2021_table_p5_1:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Wu_2021_table_p5_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Baklouti_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wu_2021_table_p5_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wu_2021_table_p5_1:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.18 | ['Wu_2021_table_p5_1:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.18 L/h | ['Wu_2021_table_p5_1:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.23 L | ['Wu_2021_table_p5_1:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.27 L | ['Wu_2021_table_p5_1:row2:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=amoxicillin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_modelica.zip" download>Amoxicillin_Wu2021_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_fmi.zip" download>Amoxicillin_Wu2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_matlab.zip" download>Amoxicillin_Wu2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_matlab_simbio.zip" download>Amoxicillin_Wu2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_sbml.zip" download>Amoxicillin_Wu2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_cellml.zip" download>Amoxicillin_Wu2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3654 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0015 | kg |
| input | model | `Cl` | 6.056e-07 | m3/s |
| input | model | `VdPerKg` | 3.186e-05 | m3/kg |
| input | model | `k12` | 8.881e-05 | 1/s |
| input | model | `k21` | 8.725e-05 | 1/s |
| input | model | `ka` | 4.722e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wu YE, Wang YK, Tang BH, Dong L, Li X, Zhang W et al. Population Pharmacokinetics and Dosing Optimization of Amoxicillin in Chinese Infants. Journal of clinical pharmacology 61(4):538–546 (2021). [doi:10.1002/jcph.1752](https://doi.org/10.1002/jcph.1752)

**This record:** Pharmacolibrary v26.09, model `Amoxicillin_Wu2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference>

```bibtex
@misc{pharmacolibrary_AmoxicillinWu2021reference,
  title  = {{Pharmacolibrary model Amoxicillin_Wu2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference},
  note   = {Parameters from doi:10.1002/jcph.1752},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1500 mg, single dose, first-order absorption (ka 0.17 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 1500 mg oral (J01CA04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference/Amoxicillin_Wu2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amoxicillin_Wu2021_reference_params.json` · controls `Amoxicillin_Wu2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamoxicillin%5D%20Amoxicillin_Wu2021_reference&body=Drug%3A%20amoxicillin%0ARecord%3A%20Amoxicillin_Wu2021_reference%0APaper%3A%20Wu_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-20 18:05 UTC</sub>
