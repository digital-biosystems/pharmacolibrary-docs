<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/&quot;},{&quot;label&quot;:&quot;Okusanya_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_reference&quot;,&quot;label&quot;:&quot;Okusanya_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amprenavir_Sale2002_reference&quot;,&quot;label&quot;:&quot;Sale_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Sale2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amprenavir — `Amprenavir_Okusanya2007_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="amprenavir" model-id="Amprenavir_Okusanya2007_reference" status="simulated" stale="false" population="healthy HIV-seronegative adults" measured-compound="amprenavir" parameterization="apparent" topology="2C"></div>

## Citation
Okusanya O, Forrest A, DiFrancesco R, Bilic S, Rosenkranz S, Para MF et al. Compartmental pharmacokinetic analysis of oral amprenavir with secondary peaks. Antimicrobial agents and chemotherapy 51(5):1822–1826 (2007).
  ·  DOI: [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06)

## Population and dosing

**Population:** healthy HIV-seronegative adults · condition healthy · age group adult.

**Dosing:** 600 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference.svg" alt="Amprenavir_Okusanya2007_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Vc/F (liters/kg) | V1/F | 0.987 | liters/kg |
| Vp/F (liters/kg) | V2/F | 5.61 | liters/kg |
| CLd (liters/h/kg) | Q | 0.320 | liters/h/kg |
| CLt/F (liters/h/kg) | CL/F | 0.917 | liters/h/kg |
| CLb/F (liters/h/kg) | CLb | 0.090 | liters/h/kg |
| TLag (h) | tlag | 0.013 | h |
| ka (h Ϫ1 ) | kabs | 0.995 | h Ϫ1 |
| kel (h Ϫ1 ) | kel | 0.963 | h Ϫ1 |
| kcp (h Ϫ1 ) | k12 | 0.363 | h Ϫ1 |
| kpc (h Ϫ1 ) | k21 | 0.059 | h Ϫ1 |
| ␣ t 1/2 (h) | t1/2z | 0.520 | h |
| ␤ t 1/2 (h) | t1/2β | 21.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulated: every check that could be run on this record passed; no value reported in the paper was compared with the simulation.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clb/f: this record has 0.090, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/F (liters/kg) | `Q290` · V1/F | 0.987 | liters/kg | 0.06909 | m3 | l/kg | exact (1) | tab_1:row1:col1, tab_1:row1:col2 |
| Vp/F (liters/kg) | `Q82` · V2/F | 5.61 | liters/kg | 0.3927 | m3 | l/kg | exact (1) | tab_1:row2:col1, tab_1:row2:col2 |
| CLd (liters/h/kg) | `Q30` · Q | 0.320 | liters/h/kg | 6.222e-06 | m3/s | l/(h·kg) | exact (1) | tab_1:row3:col1, tab_1:row3:col2 |
| CLt/F (liters/h/kg) | `Q27` · CL/F | 0.917 | liters/h/kg | 1.783e-05 | m3/s | l/(h·kg) | llm (0.6) | tab_1:row4:col1, tab_1:row4:col2 |
| CLb/F (liters/h/kg) | `Q23` · CLb | 0.090 | liters/h/kg | 1.75e-06 | m3/s | l/(h·kg) | llm (0.6) | tab_1:row5:col1, tab_1:row5:col2 |
| TLag (h) | `Q83` · tlag | 0.013 | h | 46.8 | s | h | exact (1) | tab_1:row8:col1, tab_1:row8:col2 |
| ka (h Ϫ1 ) | `Q49` · kabs | 0.995 | h Ϫ1 | 0.0002764 | 1/s | 1/h | exact (1) | tab_1:row9:col1, tab_1:row9:col2 |
| kel (h Ϫ1 ) | `Q47` · kel | 0.963 | h Ϫ1 | 0.0002675 | 1/s | 1/h | exact (1) | tab_1:row10:col1, tab_1:row10:col2 |
| kcp (h Ϫ1 ) | `Q301` · k12 | 0.363 | h Ϫ1 | 0.0001008 | 1/s | 1/h | exact (1) | tab_1:row11:col1, tab_1:row11:col2 |
| kpc (h Ϫ1 ) | `Q302` · k21 | 0.059 | h Ϫ1 | 1.639e-05 | 1/s | 1/h | exact (1) | tab_1:row12:col1, tab_1:row12:col2 |
| ␣ t 1/2 (h) | `Q57` · t1/2z | 0.520 | h | 1872 | s | h | llm (0.6) | tab_1:row13:col1, tab_1:row13:col2 |
| ␤ t 1/2 (h) | `Q60` · t1/2β | 21.0 | h | 7.56e+04 | s | h | llm (0.6) | tab_1:row14:col1, tab_1:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- competing summary columns for 'Vc/F (liters/kg)'; not population strata
- competing summary columns for 'Vp/F (liters/kg)'; not population strata
- competing summary columns for 'CLd (liters/h/kg)'; not population strata
- competing summary columns for 'CLt/F (liters/h/kg)'; not population strata
- competing summary columns for 'CLb/F (liters/h/kg)'; not population strata
- competing summary columns for 'Fraction recycled'; not population strata
- competing summary columns for 'Recycling time (h)'; not population strata
- competing summary columns for 'TLag (h)'; not population strata
- competing summary columns for 'ka (h Ϫ1 )'; not population strata
- competing summary columns for 'kel (h Ϫ1 )'; not population strata
- competing summary columns for 'kcp (h Ϫ1 )'; not population strata
- competing summary columns for 'kpc (h Ϫ1 )'; not population strata
- competing summary columns for '␣ t 1/2 (h)'; not population strata
- competing summary columns for '␤ t 1/2 (h)'; not population strata
- dropped unlinked row (NIL): 'Fraction recycled' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1', 'tab_1:row6:col2'])
- dropped unlinked row (NIL): 'Recycling time (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1', 'tab_1:row7:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amprenavir
- status held at "Needs review" — not promoted

**Extraction notes:**
- table tab_1: competing_summary_estimates
- table tab_1: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clb/f]` | 0.090 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction recycled]` |  | 0.065 | only_one_extracted |
| `gpt-oss-120b` | `parameters[recycling time]` |  | 7.89 | only_one_extracted |
| `gpt-oss-120b` | `parameters[␤ t 1/2]` | 21.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row1:col1', 'tab_1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab_1:row11:col1', 'tab_1:row11:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab_1:row12:col1', 'tab_1:row12:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_1:row10:col1', 'tab_1:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row9:col1', 'tab_1:row9:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_1:row13:col1', 'tab_1:row13:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_1:row14:col1', 'tab_1:row14:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row2:col1', 'tab_1:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_1:row8:col1', 'tab_1:row8:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 6.3 L/h | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 64.2 L/h | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 69.1 L | ['tab_1:row1:col1', 'tab_1:row1:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 393 L | ['tab_1:row2:col1', 'tab_1:row2:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=amprenavir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 10 scholar param(s) emitted or defaulted | 10 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict partial; agreement 0.778 (14 of 18 compared fields agree, 4 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.778 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_modelica.zip" download>Amprenavir_Okusanya2007_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_fmi.zip" download>Amprenavir_Okusanya2007_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_matlab.zip" download>Amprenavir_Okusanya2007_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_matlab_simbio.zip" download>Amprenavir_Okusanya2007_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_sbml.zip" download>Amprenavir_Okusanya2007_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_cellml.zip" download>Amprenavir_Okusanya2007_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5056 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 46.8 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 1.783e-05 | m3/s |
| input | model | `VdPerKg` | 0.000987 | m3/kg |
| input | model | `k12` | 9.006e-05 | 1/s |
| input | model | `k21` | 1.584e-05 | 1/s |
| input | model | `ka` | 0.0002764 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Okusanya O, Forrest A, DiFrancesco R, Bilic S, Rosenkranz S, Para MF et al. Compartmental pharmacokinetic analysis of oral amprenavir with secondary peaks. Antimicrobial agents and chemotherapy 51(5):1822–1826 (2007). [doi:10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06)

**This record:** Pharmacolibrary, model `Amprenavir_Okusanya2007_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference>

```bibtex
@misc{pharmacolibrary_AmprenavirOkusanya2007reference,
  title  = {{Pharmacolibrary model Amprenavir_Okusanya2007_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference},
  note   = {Parameters from doi:10.1128/AAC.00570-06},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 0.995 /h, lag 0.78 min, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference/Amprenavir_Okusanya2007_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amprenavir_Okusanya2007_reference_params.json` · controls `Amprenavir_Okusanya2007_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamprenavir%5D%20Amprenavir_Okusanya2007_reference&body=Drug%3A%20amprenavir%0ARecord%3A%20Amprenavir_Okusanya2007_reference%0APaper%3A%20Okusanya_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amprenavir/Amprenavir_Okusanya2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:23 UTC</sub>
