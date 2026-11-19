<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Lidocaine&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/&quot;},{&quot;label&quot;:&quot;Greuber_2021 \u00b7 lidocaine_5_4_3_ts&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lidocaine_Riff2018_reference&quot;,&quot;label&quot;:&quot;Riff_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Riff2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Tognolini2025_reference&quot;,&quot;label&quot;:&quot;Tognolini_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Tognolini2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Foong2025_reference&quot;,&quot;label&quot;:&quot;Foong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Foong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_1_8_3_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_1_8_3_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_1_8_3_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_1_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_1_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_1_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_2_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_2_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_2_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lidocaine_Greuber2021_lidocaine_5_4_3_ts&quot;,&quot;label&quot;:&quot;Greuber_2021_lidocaine_5_4_3_ts&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lidocaine — `Lidocaine_Greuber2021_lidocaine_5_4_3_ts`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The model mispredicts lidocaine Cmax and tmax, while absorption rate and lag time remain unextracted defaults.

<div class="pk-model-meta" hidden drug="Lidocaine" model-id="Lidocaine_Greuber2021_lidocaine_5_4_3_ts" status="needs_review" stale="false" population="healthy human volunteers" measured-compound="Lidocaine" parameterization="apparent" topology="1C"></div>

## Citation
Greuber E, Vought K, Patel K, Suzuki H, Usuda K, Shiramizu A et al. Biorelevant In Vitro Skin Permeation Testing and In Vivo Pharmacokinetic Characterization of Lidocaine from a Nonaqueous Drug-in-Matrix Topical System. AAPS PharmSciTech 22(6):215 (2021).
  ·  DOI: [10.1208/s12249-021-02101-y](https://doi.org/10.1208/s12249-021-02101-y)

## Population and dosing

**Population:** healthy human volunteers · condition healthy · age group adult · n = 15.

**Dosing:** 108, 216, 324 mg, other, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts.svg" alt="Lidocaine_Greuber2021_lidocaine_5_4_3_ts diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 320.93 | ng/mL |
| AUC0-t (ng·h/mL) | AUCt | 3939.13 | ng·h/mL |
| AUC0-∞ (ng·h/mL) | AUC∞ | 3971.40 | ng·h/mL |
| tmax (h)* | tmax | 10.00 | h |
| Kel (h−1) | kel | 0.13 | h−1 |
| t1/2 (h) | t1/2z | 5.60 | h |
| VD/F (L) | V/F | 271.26 | L |
| CL/F (L/h) | CL/F | 34.43 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model mispredicts lidocaine Cmax and tmax, while absorption rate and lag time remain unextracted defaults.**

Simulated lidocaine peak concentrations exceed reported values with ratios of 2.6678 and 2.3502. Simulated times to peak are much earlier than reported, with ratios of 0.2785 and 0.3418. The absorption rate and lag time parameters were not estimated from the data but left as library placeholders. Extracted — lidocaine: Cmax 321 ng/mL, AUCt 3.94e+03 ng·h/mL, AUC∞ 3.97e+03 ng·h/mL, tmax 10 h, kel 0.13 h−1, t1/2z 5.6 h, V/F 271 L, CL/F 34.4 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 320.93 | ng/mL | 0.0003209 | kg/m3 | ng/ml | exact (1) | Tab5:row1:col4 |
| AUC0-t (ng·h/mL) | `Q19` · AUCt | 3939.13 | ng·h/mL | 14.18 | kg*s/m3 | (h·ng)/ml | exact (1) | Tab5:row2:col4 |
| AUC0-∞ (ng·h/mL) | `Q17` · AUC∞ | 3971.40 | ng·h/mL | 14.3 | kg*s/m3 | (h·ng)/ml | exact (1) | Tab5:row3:col4 |
| tmax (h)* | `Q56` · tmax | 10.00 | h | 3.6e+04 | s | h | llm_confirmed (0.6) | Tab5:row4:col4 |
| Kel (h−1) | `Q47` · kel | 0.13 | h−1 | 3.611e-05 | 1/s | 1/h | exact (1) | Tab5:row5:col4 |
| t1/2 (h) | `Q57` · t1/2z | 5.60 | h | 2.016e+04 | s | h | half_life_rule (0.95) | Tab5:row6:col4 |
| VD/F (L) | `Q76` · V/F | 271.26 | L | 0.2713 | m3 | l | exact (1) | Tab5:row8:col4 |
| CL/F (L/h) | `Q27` · CL/F | 34.43 | L/h | 9.564e-06 | m3/s | l/h | exact (1) | Tab5:row9:col4 |

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
- dropped unlinked row (NIL): 'Apparent dose (mg)' — extend the ontology if this is a real PK parameter (source ['Tab5:row7:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Lidocaine
- population split: 'lidocaine 5.4% (3 ts)n = 15' subgroup of Greuber_2021 (paper reports 4 populations: lidocaine 1.8% (3 ts)n = 14, lidocaine 5.4% (1 ts)n = 14, lidocaine 5.4% (2 ts)n = 14, lidocaine 5.4% (3 ts)n = 15)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab5:row3:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab5:row2:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab5:row9:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab5:row1:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab5:row5:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab5:row4:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab5:row6:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab5:row8:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 34.4 L/h | ['Tab5:row9:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 271 L | ['Tab5:row8:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Lidocaine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.36e-05 | 0.0002497 | 2.668 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0001062 | 0.0002497 | 2.35 | ng/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 13.5 | 3.76 | 0.2785 | h→SI vs simulated h |
| T1_tmax | reference | fail | 11 | 3.76 | 0.3418 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 3.76 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_modelica.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_fmi.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_matlab.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_matlab_simbio.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_sbml.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_cellml.zip" download>Lidocaine_Greuber2021_lidocaine_5_4_3_ts_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2343 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000108 | kg |
| input | model | `Cl` | 9.564e-06 | m3/s |
| input | model | `VdPerKg` | 0.003875 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Greuber E, Vought K, Patel K, Suzuki H, Usuda K, Shiramizu A et al. Biorelevant In Vitro Skin Permeation Testing and In Vivo Pharmacokinetic Characterization of Lidocaine from a Nonaqueous Drug-in-Matrix Topical System. AAPS PharmSciTech 22(6):215 (2021). [doi:10.1208/s12249-021-02101-y](https://doi.org/10.1208/s12249-021-02101-y)

**This record:** Pharmacolibrary, model `Lidocaine_Greuber2021_lidocaine_5_4_3_ts`. <https://pharmacolibrary.github.io/#/drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts>

```bibtex
@misc{pharmacolibrary_LidocaineGreuber2021lidocaine543ts,
  title  = {{Pharmacolibrary model Lidocaine_Greuber2021_lidocaine_5_4_3_ts}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts},
  note   = {Parameters from doi:10.1208/s12249-021-02101-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 108 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 108, 216, 324 mg.

<dbs-fmusim paramsurl="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts/Lidocaine_Greuber2021_lidocaine_5_4_3_ts_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lidocaine_Greuber2021_lidocaine_5_4_3_ts_params.json` · controls `Lidocaine_Greuber2021_lidocaine_5_4_3_ts_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blidocaine%5D%20Lidocaine_Greuber2021_lidocaine_5_4_3_ts&body=Drug%3A%20lidocaine%0ARecord%3A%20Lidocaine_Greuber2021_lidocaine_5_4_3_ts%0APaper%3A%20Greuber_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lidocaine/Lidocaine_Greuber2021_lidocaine_5_4_3_ts%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 09:01 UTC</sub>
