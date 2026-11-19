<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Alpha-Tocopherol&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/&quot;},{&quot;label&quot;:&quot;Saldanha_2023 \u00b7 step_3&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlphaTocopherol_Chen2018_reference&quot;,&quot;label&quot;:&quot;Chen_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Chen2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AlphaTocopherol_Gao2019_reference&quot;,&quot;label&quot;:&quot;Gao_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Gao2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AlphaTocopherol_Hidiroglou1994_reference&quot;,&quot;label&quot;:&quot;Hidiroglou_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Hidiroglou1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AlphaTocopherol_Saldanha2023_step_1_admet_predictor_vales&quot;,&quot;label&quot;:&quot;Saldanha_2023_step_1_admet_predictor_vales&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_1_admet_predictor_vales.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AlphaTocopherol_Saldanha2023_step_2_experimental_data&quot;,&quot;label&quot;:&quot;Saldanha_2023_step_2_experimental_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_2_experimental_data.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AlphaTocopherol_Saldanha2023_step_3&quot;,&quot;label&quot;:&quot;Saldanha_2023_step_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alpha-Tocopherol — `AlphaTocopherol_Saldanha2023_step_3`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUC∞ and AUCt have no unit.

<div class="pk-model-meta" hidden drug="Alpha-Tocopherol" model-id="AlphaTocopherol_Saldanha2023_step_3" status="needs_review" stale="false" population="30-year-old American man" measured-compound="Alpha-Tocopherol" parameterization="mechanistic" topology="1C"></div>

## Citation
Saldanha L, Vale N. The First Physiologically Based Pharmacokinetic (PBPK) Model for an Oral Vaccine Using Alpha-Tocopherol as an Adjuvant. Pharmaceutics 15(9) (2023).
  ·  DOI: [10.3390/pharmaceutics15092313](https://doi.org/10.3390/pharmaceutics15092313)

## Population and dosing

**Population:** 30-year-old American man · condition healthy · age group adult.

**Dosing:** 150 mg, oral, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3.svg" alt="AlphaTocopherol_Saldanha2023_step_3 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fa (%) | Fab | 99.94 | % |
| Cmax (ug/mL) | Cmax | 0.01343 | ug/mL |
| Tmax (h) | tmax | 0.6 | h |
| AUC0-inf (ug-h/mL) | AUC∞ | 0.04726 | ug-h/mL |
| AUC0-t (ug-h/mL) | AUCt | 0.04721 | ug-h/mL |
| CL | CL | 0.867 | L/h |
| volume of distribution | V | 2298 | L |
| T1/2 | t1/2z | 1837 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC∞ and AUCt have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUC∞ and AUCt), so that value has no SI equivalent. Extracted — alpha tocopherol: Fab 99.9 %, Cmax 0.0134 ug/mL, tmax 0.6 h, AUC∞ 0.0473 ug-h/mL, AUCt 0.0472 ug-h/mL, CL 0.867 L/h, V 2.3e+03 L, t1/2z 1.84e+03 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fa (%) | `Q40` · Fab | 99.94 | % | 0.9994 |  | % | llm (0.6) | Saldanha_2023_table_7:row2:col2, Saldanha_2023_table_7:row2:col3, Saldanha_2023_table_7:row2:col4, Saldanha_2023_table_7:row2:col5, Saldanha_2023_table_7:row2:col6 |
| Cmax (ug/mL) | `Q32` · Cmax | 0.01343 | ug/mL | 1.343e-05 | kg/m3 | µg/ml | exact (1) | Saldanha_2023_table_7:row5:col2, Saldanha_2023_table_7:row5:col3, Saldanha_2023_table_7:row5:col4, Saldanha_2023_table_7:row5:col5, Saldanha_2023_table_7:row5:col6 |
| Tmax (h) | `Q56` · tmax | 0.6 | h | 2160 | s | h | exact (1) | Saldanha_2023_table_7:row6:col2, Saldanha_2023_table_7:row6:col3, Saldanha_2023_table_7:row6:col4, Saldanha_2023_table_7:row6:col5, Saldanha_2023_table_7:row6:col6 |
| AUC0-inf (ug-h/mL) | `Q17` · AUC∞ | 0.04726 | ug-h/mL |  |  | (h·µg)/ml | exact (1) | Saldanha_2023_table_7:row7:col2, Saldanha_2023_table_7:row7:col3, Saldanha_2023_table_7:row7:col4, Saldanha_2023_table_7:row7:col5, Saldanha_2023_table_7:row7:col6 |
| AUC0-t (ug-h/mL) | `Q19` · AUCt | 0.04721 | ug-h/mL |  |  | (h·µg)/ml | exact (1) | Saldanha_2023_table_7:row8:col2, Saldanha_2023_table_7:row8:col3, Saldanha_2023_table_7:row8:col4, Saldanha_2023_table_7:row8:col5, Saldanha_2023_table_7:row8:col6 |
| CL | `Q22` · CL | 0.867 | L/h | 2.408e-07 | m3/s | L/h | exact (1) | Saldanha_2023:other_prose |
| volume of distribution | `Q61` · V | 2298 | L | 2.298 | m3 | L | exact (1) | Saldanha_2023:other_prose |
| T1/2 | `Q57` · t1/2z | 1837 | h | 6.613e+06 | s | h | half_life_rule (0.95) | Saldanha_2023:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'FDp (%)' — extend the ontology if this is a real PK parameter (source ['Saldanha_2023_table_7:row3:col2', 'Saldanha_2023_table_7:row3:col3', 'Saldanha_2023_table_7:row3:col4', 'Saldanha_2023_table_7:row3:col5', 'Saldanha_2023_table_7:row3:col6'])
- unit_dimension_unknown: 'ug-h/mL' (AUC∞)
- unit_dimension_unknown: 'ug-h/mL' (AUCt)
- dropped duplicate Q32 ('CMax Liver (µg/mL)', value '0.24477') — already have one for this compound
- dropped unlinked row (NIL): 'Total simulation time (h)' — extend the ontology if this is a real PK parameter (source ['Saldanha_2023_table_7:row10:col4'])
- salvaged Q22 ('CL'=0.867) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution'=2298) from results prose — parameter table was unreadable
- salvaged Q57 ('T1/2'=1837) from results prose — parameter table was unreadable
- implicit units: 'AUC0-inf (ug-h/mL)' — the LLM proposed 'ug-h/mL', whose dimension does not fit Q17; left unset
- implicit units: 'AUC0-t (ug-h/mL)' — the LLM proposed 'ug-h/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alpha-Tocopherol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'step 3' subgroup of Saldanha_2023 (paper reports 3 populations: step 1 / admet predictor vales, step 2 / experimental data, step 3)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q17, Q19 — no SI value to build from)

**Extraction notes:**
- table pharmaceutics-15-02313-t007: ragged_grid
- table pharmaceutics-15-02313-t007: unparsed_numeric_cell
- table Saldanha_2023_table_7: missing_label
- table Saldanha_2023_table_7: unparsed_numeric_cell
- companion parameter table 7 transcribed (57 record(s))
- LLM selected parameter table(s) 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1837 | 1837 | 1 | 0.25 | reported t½β |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Saldanha_2023_table_7:row5:col2', 'Saldanha_2023_table_7:row5:col3', 'Saldanha_2023_table_7:row5:col4', 'Saldanha_2023_table_7:row5:col5', 'Saldanha_2023_table_7:row5:col6'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Saldanha_2023_table_7:row6:col2', 'Saldanha_2023_table_7:row6:col3', 'Saldanha_2023_table_7:row6:col4', 'Saldanha_2023_table_7:row6:col5', 'Saldanha_2023_table_7:row6:col6'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ug-h/mL |  |  | ['Saldanha_2023_table_7:row7:col2', 'Saldanha_2023_table_7:row7:col3', 'Saldanha_2023_table_7:row7:col4', 'Saldanha_2023_table_7:row7:col5', 'Saldanha_2023_table_7:row7:col6'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ug-h/mL |  |  | ['Saldanha_2023_table_7:row8:col2', 'Saldanha_2023_table_7:row8:col3', 'Saldanha_2023_table_7:row8:col4', 'Saldanha_2023_table_7:row8:col5', 'Saldanha_2023_table_7:row8:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.867 |  |  | ['Saldanha_2023:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.867 L/h |  |  | ['Saldanha_2023:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.3e+03 L |  |  | ['Saldanha_2023:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_modelica.zip" download>AlphaTocopherol_Saldanha2023_step_3_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_fmi.zip" download>AlphaTocopherol_Saldanha2023_step_3_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_matlab.zip" download>AlphaTocopherol_Saldanha2023_step_3_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_matlab_simbio.zip" download>AlphaTocopherol_Saldanha2023_step_3_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_sbml.zip" download>AlphaTocopherol_Saldanha2023_step_3_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_cellml.zip" download>AlphaTocopherol_Saldanha2023_step_3_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4307 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 2.408e-07 | m3/s |
| input | model | `VdPerKg` | 0.03283 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Saldanha L, Vale N. The First Physiologically Based Pharmacokinetic (PBPK) Model for an Oral Vaccine Using Alpha-Tocopherol as an Adjuvant. Pharmaceutics 15(9) (2023). [doi:10.3390/pharmaceutics15092313](https://doi.org/10.3390/pharmaceutics15092313)

**This record:** Pharmacolibrary, model `AlphaTocopherol_Saldanha2023_step_3`. <https://pharmacolibrary.github.io/#/drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3>

```bibtex
@misc{pharmacolibrary_AlphaTocopherolSaldanha2023step3,
  title  = {{Pharmacolibrary model AlphaTocopherol_Saldanha2023_step_3}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3},
  note   = {Parameters from doi:10.3390/pharmaceutics15092313},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 150 mg infusion over 10 min, single dose. Dose in the paper: 150 mg.

<dbs-fmusim paramsurl="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3/AlphaTocopherol_Saldanha2023_step_3_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `AlphaTocopherol_Saldanha2023_step_3_params.json` · controls `AlphaTocopherol_Saldanha2023_step_3_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balpha_tocopherol%5D%20AlphaTocopherol_Saldanha2023_step_3&body=Drug%3A%20alpha_tocopherol%0ARecord%3A%20AlphaTocopherol_Saldanha2023_step_3%0APaper%3A%20Saldanha_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alpha_tocopherol/AlphaTocopherol_Saldanha2023_step_3%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 17:19 UTC</sub>
