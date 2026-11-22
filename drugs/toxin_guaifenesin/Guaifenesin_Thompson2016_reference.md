<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Guaifenesin&quot;,&quot;href&quot;:&quot;drugs/toxin_guaifenesin/&quot;},{&quot;label&quot;:&quot;Thompson_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guaifenesin_Abdelgawad2022_reference&quot;,&quot;label&quot;:&quot;Abdelgawad_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_guaifenesin/Guaifenesin_Abdelgawad2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guaifenesin_Knych2016_reference&quot;,&quot;label&quot;:&quot;Knych_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_guaifenesin/Guaifenesin_Knych2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guaifenesin_Thompson2016_reference&quot;,&quot;label&quot;:&quot;Thompson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Guaifenesin — `Guaifenesin_Thompson2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Reconstruction failed to match reported tmax (0.5 vs 1.38 hours) and terminal half-life, as absorption rate ka was left at library defaults.

<div class="pk-model-meta" hidden drug="Guaifenesin" model-id="Guaifenesin_Thompson2016_reference" status="needs_review" stale="false" population="Children aged 2 to 17 years" measured-compound="Guaifenesin" parameterization="apparent" topology="1C"></div>

## Citation
Thompson GA, Solomon G, Albrecht HH, Reitberg DP, Guenin E. Guaifenesin Pharmacokinetics Following Single-Dose Oral Administration in Children Aged 2 to 17 Years. Journal of clinical pharmacology 56(7):894–901 (2016).
  ·  DOI: [10.1002/jcph.682](https://doi.org/10.1002/jcph.682)

## Population and dosing

**Population:** Children aged 2 to 17 years · condition healthy · age group mixed · n = 40.

**Dosing:** 100, 200, 400 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference.svg" alt="Guaifenesin_Thompson2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 1173 | ng/mL |
| Tmax a (hours) | tmax | 0.5 | hours |
| AUC (ng · h/mL) | AUC | 1728 | ng · h/mL |
| CLo (L/h) | CL | 57.9 | L/h |
| CLo,scaled (L/h; normalized to 70 kg) | CLnorm | 177.9 | L/h |
| Vz/F (L) | V/F | 50.07 | L |
| Vz/Fscaled (L/kg) | Vnorm/F | 3.2 | L/kg |
| t1/2,z (hours) | t1/2z | 0.6 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Reconstruction failed to match reported tmax (0.5 vs 1.38 hours) and terminal half-life, as absorption rate ka was left at library defaults.**

Simulated tmax was 1.38 hours against the reported 0.5 hours, and the terminal half-life mismatched reported values of 0.6 to 4.0 hours. The absorption rate ka and lag time Tlag were not extracted from the source and relied on library placeholders. This lack of specific absorption parameters for guaifenesin prevented the model from accurately reproducing the observed pharmacokinetic profile. Extracted — guaifenesin: Cmax 1.17e+03 ng/mL, tmax 0.5 hours, AUC 1.73e+03 ng · h/mL, CL 57.9 L/h, CLnorm 178 L/h, V/F 50.1 L, Vnorm/F 3.2 L/kg, t1/2z 0.6 hours.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 1173 | ng/mL | 0.001173 | kg/m3 | ng/ml | exact (1) | Thompson_2016_table_2:row2:col1, Thompson_2016_table_2:row2:col2, Thompson_2016_table_2:row2:col3, Thompson_2016_table_2:row2:col4 |
| Tmax a (hours) | `Q56` · tmax | 0.5 | hours | 1800 | s | h | llm_confirmed (0.6) | Thompson_2016_table_2:row4:col1, Thompson_2016_table_2:row4:col2, Thompson_2016_table_2:row4:col3, Thompson_2016_table_2:row4:col4 |
| AUC (ng · h/mL) | `Q88` · AUC | 1728 | ng · h/mL | 6.221 | kg*s/m3 | (h·ng)/ml | exact (1) | Thompson_2016_table_2:row6:col1, Thompson_2016_table_2:row6:col2, Thompson_2016_table_2:row6:col4 |
| CLo (L/h) | `Q22` · CL | 57.9 | L/h | 1.608e-05 | m3/s | l/h | llm (0.6) | Thompson_2016_table_2:row8:col1, Thompson_2016_table_2:row8:col2, Thompson_2016_table_2:row8:col4 |
| CLo,scaled (L/h; normalized to 70 kg) | `Q354` · CLnorm | 177.9 | L/h | 4.942e-05 | m3/s | L/h | llm (0.6) | Thompson_2016_table_2:row10:col1, Thompson_2016_table_2:row10:col2, Thompson_2016_table_2:row10:col4 |
| Vz/F (L) | `Q76` · V/F | 50.07 | L | 0.05007 | m3 | l | exact (1) | Thompson_2016_table_2:row12:col1, Thompson_2016_table_2:row12:col2, Thompson_2016_table_2:row12:col4 |
| Vz/Fscaled (L/kg) | `Q353` · Vnorm/F | 3.2 | L/kg | 0.224 | m3 | l/kg | llm (0.6) | Thompson_2016_table_2:row14:col1, Thompson_2016_table_2:row14:col2, Thompson_2016_table_2:row14:col4 |
| t1/2,z (hours) | `Q57` · t1/2z | 0.6 | hours | 2160 | s | h | half_life_rule (0.95) | Thompson_2016_table_2:row16:col1, Thompson_2016_table_2:row16:col2, Thompson_2016_table_2:row16:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'PK Parameter' — extend the ontology if this is a real PK parameter (source ['Thompson_2016_table_2:row0:col1', 'Thompson_2016_table_2:row0:col2', 'Thompson_2016_table_2:row0:col3', 'Thompson_2016_table_2:row0:col4'])
- unit_dimension_unknown: 'L/h; normalized to 70 kg' (CLnorm)
- implicit units: 'CLo,scaled (L/h; normalized to 70 kg)' → L/h (from the paper text: 'The parameter name explicitly includes the unit: "CLo,scaled (L/h; normalized to 70 kg)".')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Guaifenesin
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- derived CL/F=57.8431 L/h from ln2/t½z × V/F = CL/F (Q57 × Q76); not separately reported

**Extraction notes:**
- LLM selected parameter table(s) 2
- table Thompson_2016_table_2: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 0.557 | 0.599 | 1.075 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Thompson_2016_table_2:row8:col1', 'Thompson_2016_table_2:row8:col2', 'Thompson_2016_table_2:row8:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Thompson_2016_table_2:row2:col1', 'Thompson_2016_table_2:row2:col2', 'Thompson_2016_table_2:row2:col3', 'Thompson_2016_table_2:row2:col4'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  |  |  | ['Thompson_2016_table_2:row14:col1', 'Thompson_2016_table_2:row14:col2', 'Thompson_2016_table_2:row14:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  |  |  | ['Thompson_2016_table_2:row10:col1', 'Thompson_2016_table_2:row10:col2', 'Thompson_2016_table_2:row10:col4'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Thompson_2016_table_2:row4:col1', 'Thompson_2016_table_2:row4:col2', 'Thompson_2016_table_2:row4:col3', 'Thompson_2016_table_2:row4:col4'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Thompson_2016_table_2:row16:col1', 'Thompson_2016_table_2:row16:col2', 'Thompson_2016_table_2:row16:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Thompson_2016_table_2:row12:col1', 'Thompson_2016_table_2:row12:col2', 'Thompson_2016_table_2:row12:col4'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Thompson_2016_table_2:row6:col1', 'Thompson_2016_table_2:row6:col2', 'Thompson_2016_table_2:row6:col4'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 57.9 L/h |  |  | ['Thompson_2016_table_2:row8:col1', 'Thompson_2016_table_2:row8:col2', 'Thompson_2016_table_2:row8:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 50.1 L |  |  | ['Thompson_2016_table_2:row12:col1', 'Thompson_2016_table_2:row12:col2', 'Thompson_2016_table_2:row12:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=Guaifenesin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 0.0288 | 0.0004559 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.45 | 0.0004559 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.7 | 0.0004559 |  | unresolved concentration unit (exp 'hours', sim 'kg/m3') |
| T1_t_half_beta | reference | skipped |  | 1.362 |  | non-numeric value |
| T1_t_half_beta | reference | fail | 0.8 | 1.362 | 1.702 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 1.362 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.557 | 1.362 | 2.445 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.04 | 1.362 | 1.31 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 1.362 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 4 | 1.362 | 0.3405 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 1.381 | 2.763 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_modelica.zip" download>Guaifenesin_Thompson2016_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_fmi.zip" download>Guaifenesin_Thompson2016_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_matlab.zip" download>Guaifenesin_Thompson2016_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_matlab_simbio.zip" download>Guaifenesin_Thompson2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_sbml.zip" download>Guaifenesin_Thompson2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_cellml.zip" download>Guaifenesin_Thompson2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1982 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.607e-05 | m3/s |
| input | model | `VdPerKg` | 0.0007153 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Thompson GA, Solomon G, Albrecht HH, Reitberg DP, Guenin E. Guaifenesin Pharmacokinetics Following Single-Dose Oral Administration in Children Aged 2 to 17 Years. Journal of clinical pharmacology 56(7):894–901 (2016). [doi:10.1002/jcph.682](https://doi.org/10.1002/jcph.682)

**This record:** Pharmacolibrary, model `Guaifenesin_Thompson2016_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference>

```bibtex
@misc{pharmacolibrary_GuaifenesinThompson2016reference,
  title  = {{Pharmacolibrary model Guaifenesin_Thompson2016_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference},
  note   = {Parameters from doi:10.1002/jcph.682},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 100, 200, 400 mg.

<dbs-fmusim paramsurl="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference/Guaifenesin_Thompson2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Guaifenesin_Thompson2016_reference_params.json` · controls `Guaifenesin_Thompson2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bguaifenesin%5D%20Guaifenesin_Thompson2016_reference&body=Drug%3A%20guaifenesin%0ARecord%3A%20Guaifenesin_Thompson2016_reference%0APaper%3A%20Thompson_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_guaifenesin/Guaifenesin_Thompson2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 09:07 UTC</sub>
