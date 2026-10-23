<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Troc\u00f3niz_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_Clissold1987_reference&quot;,&quot;label&quot;:&quot;Clissold_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Clissold1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Knihinicki1990_reference&quot;,&quot;label&quot;:&quot;Knihinicki_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Knihinicki1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Todd1986_reference&quot;,&quot;label&quot;:&quot;Todd_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Todd1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_DeGraves1993v2_reference&quot;,&quot;label&quot;:&quot;DeGraves_1993_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_DeGraves1993v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Trocniz2000_reference&quot;,&quot;label&quot;:&quot;Troc\u00f3niz_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibuprofen — `Ibuprofen_Trocniz2000_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 5.09); f use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="ibuprofen" model-id="Ibuprofen_Trocniz2000_reference" status="needs_review" stale="false" population="healthy adults and febrile children" measured-compound="ibuprofen" parameterization="mechanistic" topology="2C"></div>

## Citation
Trocóniz IF, Armenteros S, Planelles MV, Benítez J, Calvo R, Domínguez R. Pharmacokinetic-Pharmacodynamic Modelling of the antipyretic effect of two oral formulations of ibuprofen. Clinical pharmacokinetics 38(6):505–518 (2000).
  ·  DOI: [10.2165/00003088-200038060-00004](https://doi.org/10.2165/00003088-200038060-00004)

## Population and dosing

**Population:** healthy adults and febrile children · age group mixed · n = ... (omitted).

**Dosing:** 400 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference.svg" alt="Ibuprofen_Trocniz2000_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| kₐ,susp (h⁻¹) | kabs | 0.82 | h⁻¹ | 31 (None% RSE) |
| tₗag (h) | tlag | 1.33 | h | 16 (None% RSE) |
| F₁ | Fab | 0.63 | % | 19 (None% RSE) |
| V1 (L)ᵇ | V1 | 4.4 | L |  |
| CL (L/h)ᵇ | CLb | 4.05 | L/h | 24 (None% RSE) |
| CLd (L/h)ᵇ | Q | 2.09 | L/h | 46 (None% RSE) |
| V2 (L)ᵇ | V2 | 6.62 | L | 65 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 5.09); f use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — ibuprofen: kabs 0.82 h⁻¹, tlag 1.33 h, Fab 0.63 %, V1 4.4 L, CLb 4.05 L/h, Q 2.09 L/h, V2 6.62 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ibuprofen, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| kₐ,susp (h⁻¹) | `Q49` · kabs | 0.82 | h⁻¹ | 0.0002278 | 1/s | 1/h | llm_confirmed (0.6) | Trocóniz_2000_table_p6_1:row0:col1 | 31 (None% RSE) |
| tₗag (h) | `Q83` · tlag | 1.33 | h | 4788 | s | h | exact (1) | Trocóniz_2000_table_p6_1:row3:col1 | 16 (None% RSE) |
| F₁ | `Q40` · Fab | 0.63 | % |  |  | % | exact (1) | Trocóniz_2000_table_p6_1:row4:col1 | 19 (None% RSE) |
| V1 (L)ᵇ | `Q63` · V1 | 4.4 | L | 0.0044 | m3 | l | llm_confirmed (0.6) | Trocóniz_2000_table_p6_1:row5:col1 |  |
| CL (L/h)ᵇ | `Q23` · CLb | 4.05 | L/h | 1.125e-06 | m3/s | l/h | space_fold (0.95) | Trocóniz_2000_table_p6_1:row6:col1 | 24 (None% RSE) |
| CLd (L/h)ᵇ | `Q30` · Q | 2.09 | L/h | 5.806e-07 | m3/s | l/h | llm_confirmed (0.6) | Trocóniz_2000_table_p6_1:row7:col1 | 46 (None% RSE) |
| V2 (L)ᵇ | `Q64` · V2 | 6.62 | L | 0.00662 | m3 | l | llm_confirmed (0.6) | Trocóniz_2000_table_p6_1:row8:col1 | 65 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'kₐ,susp (h⁻¹)' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'kₐ,grn1 (h⁻¹)' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'tₗag (h)' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'F₁' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'CL (L/h)ᵇ' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'CLd (L/h)ᵇ' routed out of structural estimates ('Interindividual variabilityᵃ')
- table section iiv: 'V2 (L)ᵇ' routed out of structural estimates ('Interindividual variabilityᵃ')
- dropped duplicate Q49 ('kₐ,grn1 (h⁻¹)', value '0.61') — already have one for this compound
- dropped duplicate Q49 ('kₐ,grn2 (h⁻¹)', value '2.26') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibuprofen

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cld (l/h)b].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | ibuprofen | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Trocóniz_2000_table_p6_1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Trocóniz_2000_table_p6_1:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Trocóniz_2000_table_p6_1:row0:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Trocóniz_2000_table_p6_1:row5:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Trocóniz_2000_table_p6_1:row8:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Trocóniz_2000_table_p6_1:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.05 | ['Trocóniz_2000_table_p6_1:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 4.05 L/h | ['Trocóniz_2000_table_p6_1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.4 L | ['Trocóniz_2000_table_p6_1:row5:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.62 L | ['Trocóniz_2000_table_p6_1:row8:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=ibuprofen) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_tmax | reference | fail | 0.5 | 5.086 | 10.17 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.9 | 5.086 | 2.677 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_modelica.zip" download>Ibuprofen_Trocniz2000_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_fmi.zip" download>Ibuprofen_Trocniz2000_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_matlab.zip" download>Ibuprofen_Trocniz2000_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_matlab_simbio.zip" download>Ibuprofen_Trocniz2000_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_sbml.zip" download>Ibuprofen_Trocniz2000_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_cellml.zip" download>Ibuprofen_Trocniz2000_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2063 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 4788 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 1.125e-06 | m3/s |
| input | model | `VdPerKg` | 6.286e-05 | m3/kg |
| input | model | `k12` | 0.0001319 | 1/s |
| input | model | `k21` | 8.77e-05 | 1/s |
| input | model | `ka` | 0.0002278 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Trocóniz IF, Armenteros S, Planelles MV, Benítez J, Calvo R, Domínguez R. Pharmacokinetic-Pharmacodynamic Modelling of the antipyretic effect of two oral formulations of ibuprofen. Clinical pharmacokinetics 38(6):505–518 (2000). [doi:10.2165/00003088-200038060-00004](https://doi.org/10.2165/00003088-200038060-00004)

**This record:** Pharmacolibrary v26.09, model `Ibuprofen_Trocniz2000_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference>

```bibtex
@misc{pharmacolibrary_IbuprofenTrocniz2000reference,
  title  = {{Pharmacolibrary model Ibuprofen_Trocniz2000_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference},
  note   = {Parameters from doi:10.2165/00003088-200038060-00004},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 0.82 /h, lag 79.8 min, F 0.9). Dose in the paper: 400 mg.

<dbs-fmusim paramsurl="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference/Ibuprofen_Trocniz2000_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ibuprofen_Trocniz2000_reference_params.json` · controls `Ibuprofen_Trocniz2000_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibuprofen%5D%20Ibuprofen_Trocniz2000_reference&body=Drug%3A%20ibuprofen%0ARecord%3A%20Ibuprofen_Trocniz2000_reference%0APaper%3A%20Troc%C3%B3niz_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-20 17:43 UTC</sub>
