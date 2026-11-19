<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ephedrine&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/&quot;},{&quot;label&quot;:&quot;Jeong_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ephedrine_Jeong2021_reference&quot;,&quot;label&quot;:&quot;Jeong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ephedrine — `Ephedrine_Jeong2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The absorption rate constant (ka) and lag time (Tlag) were not reported in the study and used library defaults, preventing publication of the ephedrine model.

<div class="pk-model-meta" hidden drug="Ephedrine" model-id="Ephedrine_Jeong2021_reference" status="needs_review" stale="false" population="rats" measured-compound="Ephedrine" parameterization="apparent" topology="1C"></div>

## Citation
Jeong SH, Jang JH, Jung DH, Lee GY, Lee YB. Pharmacokinetic Changes According to Single or Multiple Oral Administrations of Socheongryong-Tang to Rats: Presented as a Typical Example of Changes in the Pharmacokinetics Following Multiple Exposures to Herbal Medicines. Pharmaceutics 13(4) (2021).
  ·  DOI: [10.3390/pharmaceutics13040478](https://doi.org/10.3390/pharmaceutics13040478)

## Population and dosing

**Population:** rats · condition healthy · n = 5.

**Dosed compound ≠ measured compound:** dosed Socheongryong-tang (containing ephedrine), measured Ephedrine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference.svg" alt="Ephedrine_Jeong2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-12 | AUC | 54.76 | ng·h/mL |
| AUC0-∞ | AUC∞ | 57.67 | ng·h/mL |
| t1/2 | t1/2z | 2.01 | h |
| Cmax | Cmax | 21.06 | ng/mL |
| Tmax | tmax | 0.85 | h |
| CL/F | CL/F | 6.49 | L/h/kg |
| Vd/F | V/F | 18.66 | L/kg |
| R † | equation variable | 1.03 | 8 h |
| AUC120-∞ / AUC0-∞ † | AUC ratio | 1.34 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption rate constant (ka) and lag time (Tlag) were not reported in the study and used library defaults, preventing publication of the ephedrine model.**

The model builder assigned default values to ka and Tlag because these parameters were not explicitly estimated in the source paper for ephedrine. This reliance on placeholders rather than data-derived estimates renders the absorption phase unsupported by the evidence. Additionally, the unit for the ratio variable could not be converted to SI units, though the primary blockage remains the lack of specific absorption parameters. Extracted — ephedrine: AUC 54.8 ng·h/mL, AUC∞ 57.7 ng·h/mL, t1/2z 2.01 h, Cmax 21.1 ng/mL, tmax 0.85 h, CL/F 6.49 L/h/kg, V/F 18.7 L/kg, AUC ratio 1.34.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-12 | `Q88` · AUC | 54.76 | ng·h/mL |  |  | ng·h/mL | llm (0.6) | pharmaceutics-13-00478-t002:row2:col2 |
| AUC0-∞ | `Q17` · AUC∞ | 57.67 | ng·h/mL |  |  | ng·h/mL | exact (1) | pharmaceutics-13-00478-t002:row3:col2 |
| t1/2 | `Q57` · t1/2z | 2.01 | h | 7236 | s | h | half_life_rule (0.95) | pharmaceutics-13-00478-t002:row4:col2, Jeong_2021_table_3:row3:col2 |
| Cmax | `Q32` · Cmax | 21.06 | ng/mL |  |  | ng/mL | exact (1) | pharmaceutics-13-00478-t002:row5:col2, Jeong_2021_table_3:row4:col2 |
| Tmax | `Q56` · tmax | 0.85 | h | 3060 | s | h | exact (1) | pharmaceutics-13-00478-t002:row6:col2, Jeong_2021_table_3:row5:col2 |
| CL/F | `Q27` · CL/F | 6.49 | L/h/kg | 0.0001262 | m3/s | L/h | exact (1) | pharmaceutics-13-00478-t002:row7:col2, Jeong_2021_table_3:row6:col2 |
| Vd/F | `Q76` · V/F | 18.66 | L/kg | 1.306 | m3 | L | exact (1) | pharmaceutics-13-00478-t002:row8:col2, Jeong_2021_table_3:row7:col2 |
| R † | `Q900` · equation variable | 1.03 | 8 h |  |  | 8h | llm (0.6) | pharmaceutics-13-00478-t002:row9:col2 |
| AUC120-∞ / AUC0-∞ † | `Q21` · AUC ratio | 1.34 |  | 1.34 |  |  | llm_corrected (0.6) | Jeong_2021_table_3:row8:col2 |

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
- dropped unlinked row (NIL): 'Oral (n = 5)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00478-t002:row1:col2', 'Jeong_2021_table_3:row0:col2'])
- unit_dimension_unknown: '8 h' (AUC)
- unit_dimension_unknown: '8 h' (AUC∞)
- unit_dimension_unknown: '8 h' (equation variable)
- dropped duplicate Q88 ('AUC120–132', value '63.84') — already have one for this compound
- dropped duplicate Q17 ('AUC120-∞', value '77.32') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pharmaceutics-13-00478-t002:footnote']); the table cell was unparseable — needs review
- implicit units: 'AUC0-12' → ng·h/mL (from the popPK convention: "No explicit unit stated for AUC in Table 2. Text mentions plasma concentrations around '10 ng/mL'. AUC is the integral o")
- implicit units: 'AUC0-∞' → ng·h/mL (from the popPK convention: 'Same reasoning as AUC0-12. Consistent with ng/mL concentrations and hours time.')
- implicit units: 't1/2' → h (from the popPK convention: 'Half-life (t1/2) is a time parameter. In population PK and noncompartmental analysis, it is expressed in hours (h). The ')
- implicit units: 'Cmax' → ng/mL (from the popPK convention: "Cmax is concentration. Text mentions 'concentration of cinnamic acid ... around 10 ng/mL'. Given the values for Cmax (21")
- implicit units: 'Tmax' → h (from the popPK convention: "Tmax is a time parameter. Text states 'Tmax values ... less than 1.5 h' and '0.35–1.40 h', confirming hours.")
- implicit units: 'CL/F' → L/h/kg (from the paper text: "The text explicitly states: 'CL/F of 0.05–42.52 L/h/kg' when comparing human and rat data, referring to the rat values f")
- implicit units: 'Vd/F' → L/kg (from the paper text: "The text explicitly states: 'Vd/F of 0.49–74.05 L/kg' when referring to the rat values.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Ephedrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table pharmaceutics-13-00478-t002: ragged_grid
- table Jeong_2021_table_3: units_need_context
- table Jeong_2021_table_3: ragged_grid
- companion parameter table 3 transcribed (26 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-13-00478-t002:row3:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00478-t002:row7:col2', 'Jeong_2021_table_3:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-13-00478-t002:row5:col2', 'Jeong_2021_table_3:row4:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['pharmaceutics-13-00478-t002:row6:col2', 'Jeong_2021_table_3:row5:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['pharmaceutics-13-00478-t002:row4:col2', 'Jeong_2021_table_3:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['pharmaceutics-13-00478-t002:row8:col2', 'Jeong_2021_table_3:row7:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-13-00478-t002:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 454 L/h | ['pharmaceutics-13-00478-t002:row7:col2', 'Jeong_2021_table_3:row6:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.31e+03 L | ['pharmaceutics-13-00478-t002:row8:col2', 'Jeong_2021_table_3:row7:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Ephedrine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 1.67e-05 | non-numeric value |
| T1_cmax | reference | skipped |  | 1.67e-05 | non-numeric value |
| T1_cmax | reference | skipped | 1.03 | 1.67e-05 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 9.96 | 1.67e-05 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4.07 | 1.67e-05 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped |  | 2.037 | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 2.037 | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 2.037 | non-numeric value |
| T1_tmax | reference | skipped |  | 2.501 | non-numeric value |
| T1_tmax | reference | skipped |  | 2.501 | non-numeric value |
| T1_tmax | reference | skipped |  | 2.501 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_modelica.zip" download>Ephedrine_Jeong2021_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_fmi.zip" download>Ephedrine_Jeong2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_matlab.zip" download>Ephedrine_Jeong2021_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_matlab_simbio.zip" download>Ephedrine_Jeong2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_sbml.zip" download>Ephedrine_Jeong2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_cellml.zip" download>Ephedrine_Jeong2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1652 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 0.0001262 | m3/s |
| input | model | `VdPerKg` | 0.01866 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jeong SH, Jang JH, Jung DH, Lee GY, Lee YB. Pharmacokinetic Changes According to Single or Multiple Oral Administrations of Socheongryong-Tang to Rats: Presented as a Typical Example of Changes in the Pharmacokinetics Following Multiple Exposures to Herbal Medicines. Pharmaceutics 13(4) (2021). [doi:10.3390/pharmaceutics13040478](https://doi.org/10.3390/pharmaceutics13040478)

**This record:** Pharmacolibrary, model `Ephedrine_Jeong2021_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference>

```bibtex
@misc{pharmacolibrary_EphedrineJeong2021reference,
  title  = {{Pharmacolibrary model Ephedrine_Jeong2021_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics13040478},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 50 mg oral (R03CA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference/Ephedrine_Jeong2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ephedrine_Jeong2021_reference_params.json` · controls `Ephedrine_Jeong2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bephedrine%5D%20Ephedrine_Jeong2021_reference&body=Drug%3A%20ephedrine%0ARecord%3A%20Ephedrine_Jeong2021_reference%0APaper%3A%20Jeong_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ephedrine/Ephedrine_Jeong2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:26 UTC</sub>
