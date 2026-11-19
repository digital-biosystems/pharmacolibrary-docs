<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mitomycin&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/&quot;},{&quot;label&quot;:&quot;Prasad_2025 \u00b7 geometric_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitomycin_Buice1984_reference&quot;,&quot;label&quot;:&quot;Buice_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Buice1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Dorr1988_reference&quot;,&quot;label&quot;:&quot;Dorr_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Dorr1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Erlichman1987_reference&quot;,&quot;label&quot;:&quot;Erlichman_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Erlichman1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Imai1982_reference&quot;,&quot;label&quot;:&quot;Imai_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Imai1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Sui2025_reference&quot;,&quot;label&quot;:&quot;Sui_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Sui2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Yang2019_reference&quot;,&quot;label&quot;:&quot;Yang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Yang2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Prasad2025_geometric_mean&quot;,&quot;label&quot;:&quot;Prasad_2025_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitomycin_Prasad2025_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Prasad_2025_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Mitomycin — `Mitomycin_Prasad2025_geometric_mean_cv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The mitomycin model fails to reproduce the reported Cmax of 1.07 ng/mL and uses defaulted absorption parameters not estimated from the study.

<div class="pk-model-meta" hidden drug="Mitomycin" model-id="Mitomycin_Prasad2025_geometric_mean_cv" status="needs_review" stale="false" population="patients with NMIBC" measured-compound="Mitomycin" parameterization="apparent" topology="1C"></div>

## Citation
Prasad SM, Louie MJ, Burger B, Tsurutis V, Ugwuoke N, Strauss-Ayali D. Pharmacokinetics of UGN‑102, an investigational mitomycin‑containing reverse thermal gel for the treatment of non-muscle invasive bladder cancer. Cancer chemotherapy and pharmacology 95(1):100 (2025).
  ·  DOI: [10.1007/s00280-025-04821-5](https://doi.org/10.1007/s00280-025-04821-5)

## Population and dosing

**Population:** patients with NMIBC · condition non-muscle invasive bladder cancer · age group adult · n = 12.

**Dosing:** 75, 120 mg, other, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv.svg" alt="Mitomycin_Prasad2025_geometric_mean_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 1.48 | h |
| Cmax (ng/mL) | Cmax | 1.07 | ng/mL |
| AUC0-t (ng·h/mL) | AUCt | 89.50 | ng·h/mL |
| AUC0-∞ (ng·h/mL) | AUC∞ | 84.30 | ng·h/mL |
| t1/2 (h) | t1/2z | 22.8 | h |
| λz (1/h) | kel | 23.3 | 1/h |
| Vz/F (L) | V/F | 134.10 | L |
| Cl/F (L/hr) | CL/F | 120.6 | L/hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mitomycin model fails to reproduce the reported Cmax of 1.07 ng/mL and uses defaulted absorption parameters not estimated from the study.**

Simulated Cmax values deviate from reported values by ratios including 7.3083, 9.2557, and 65.6462, indicating significant mismatch. The absorption rate constant (ka) and lag time (Tlag) were assigned library defaults rather than being derived from the source, introducing unsupported assumptions into the absorption profile. Extracted — mitomycin: tmax 1.48 h, Cmax 1.07 ng/mL, AUCt 89.5 ng·h/mL, AUC∞ 84.3 ng·h/mL, t1/2z 22.8 h, kel 23.3 1/h, V/F 134 L, CL/F 121 L/hr.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 1.48 | h | 5328 | s | h | exact (1) | Prasad_2025_table_3:row6:col1, Prasad_2025_table_4:row1:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 1.07 | ng/mL | 1.07e-06 | kg/m3 | ng/ml | exact (1) | Prasad_2025_table_3:row6:col2, Prasad_2025_table_4:row1:col1 |
| AUC0-t (ng·h/mL) | `Q19` · AUCt | 89.50 | ng·h/mL | 0.3222 | kg*s/m3 | (h·ng)/ml | exact (1) | Prasad_2025_table_3:row6:col3 |
| AUC0-∞ (ng·h/mL) | `Q17` · AUC∞ | 84.30 | ng·h/mL | 0.3035 | kg*s/m3 | (h·ng)/ml | exact (1) | Prasad_2025_table_3:row6:col4 |
| t1/2 (h) | `Q57` · t1/2z | 22.8 | h | 8.208e+04 | s | h | half_life_rule (0.95) | Prasad_2025_table_3:row6:col5 |
| λz (1/h) | `Q47` · kel | 23.3 | 1/h | 0.006472 | 1/s | 1/h | exact (1) | Prasad_2025_table_3:row6:col6 |
| Vz/F (L) | `Q76` · V/F | 134.10 | L | 0.1341 | m3 | l | exact (1) | Prasad_2025_table_3:row6:col7 |
| Cl/F (L/hr) | `Q27` · CL/F | 120.6 | L/hr | 3.35e-05 | m3/s | l/h | exact (1) | Prasad_2025_table_3:row6:col8 |

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
- column 'cv%' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q19 ('AUC0-6 (ng·h/mL)', value '3.01') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Mitomycin
- population split: 'geometric mean (cv)' subgroup of Prasad_2025 (paper reports 2 populations: geometric mean, geometric mean (cv))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Prasad_2025_table_3: logical view retains original source coordinates
- transposed table Prasad_2025_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (6 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Prasad_2025_table_3:row6:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Prasad_2025_table_3:row6:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Prasad_2025_table_3:row6:col8'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Prasad_2025_table_3:row6:col2', 'Prasad_2025_table_4:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Prasad_2025_table_3:row6:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['Prasad_2025_table_3:row6:col1', 'Prasad_2025_table_4:row1:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Prasad_2025_table_3:row6:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Prasad_2025_table_3:row6:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 121 L/h | ['Prasad_2025_table_3:row6:col8'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 134 L | ['Prasad_2025_table_3:row6:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Mitomycin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.000149 |  | non-numeric value |
| T1_cmax | reference | fail | 2.039e-05 | 0.000149 | 7.308 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.61e-05 | 0.000149 | 9.256 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.04e-05 | 0.000149 | 3.688 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0024 | 0.000149 | 0.0621 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00052 | 0.000149 | 0.2866 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.27e-06 | 0.000149 | 65.65 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.04e-05 | 0.000149 | 7.305 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | skipped |  | 2.408 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 2.408 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 1.577 |  | non-numeric value |
| T1_tmax | reference | pass | 1.5 | 1.577 | 1.051 | h→SI vs simulated h |
| T1_tmax | reference | pass | 1.95 | 1.577 | 0.8088 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_modelica.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_fmi.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_matlab.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_matlab_simbio.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_sbml.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_cellml.zip" download>Mitomycin_Prasad2025_geometric_mean_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3343 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7.5e-05 | kg |
| input | model | `Cl` | 3.35e-05 | m3/s |
| input | model | `VdPerKg` | 0.001916 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Prasad SM, Louie MJ, Burger B, Tsurutis V, Ugwuoke N, Strauss-Ayali D. Pharmacokinetics of UGN‑102, an investigational mitomycin‑containing reverse thermal gel for the treatment of non-muscle invasive bladder cancer. Cancer chemotherapy and pharmacology 95(1):100 (2025). [doi:10.1007/s00280-025-04821-5](https://doi.org/10.1007/s00280-025-04821-5)

**This record:** Pharmacolibrary, model `Mitomycin_Prasad2025_geometric_mean_cv`. <https://pharmacolibrary.github.io/#/drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv>

```bibtex
@misc{pharmacolibrary_MitomycinPrasad2025geometricmeancv,
  title  = {{Pharmacolibrary model Mitomycin_Prasad2025_geometric_mean_cv}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv},
  note   = {Parameters from doi:10.1007/s00280-025-04821-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 75 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 75, 120 mg.

<dbs-fmusim paramsurl="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv/Mitomycin_Prasad2025_geometric_mean_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Mitomycin_Prasad2025_geometric_mean_cv_params.json` · controls `Mitomycin_Prasad2025_geometric_mean_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitomycin%5D%20Mitomycin_Prasad2025_geometric_mean_cv&body=Drug%3A%20mitomycin%0ARecord%3A%20Mitomycin_Prasad2025_geometric_mean_cv%0APaper%3A%20Prasad_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mitomycin/Mitomycin_Prasad2025_geometric_mean_cv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 11:28 UTC</sub>
