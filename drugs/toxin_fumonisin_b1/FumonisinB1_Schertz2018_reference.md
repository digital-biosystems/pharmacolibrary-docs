<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Fumonisin B1&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/&quot;},{&quot;label&quot;:&quot;Schertz_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;FumonisinB1_Guerre2015_reference&quot;,&quot;label&quot;:&quot;Guerre_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/FumonisinB1_Guerre2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;FumonisinB1_Shephard1992_reference&quot;,&quot;label&quot;:&quot;Shephard_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/FumonisinB1_Shephard1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;FumonisinB1_Vudathala1994_reference&quot;,&quot;label&quot;:&quot;Vudathala_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/FumonisinB1_Vudathala1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;FumonisinB1_Antonissen2015_reference&quot;,&quot;label&quot;:&quot;Antonissen_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/FumonisinB1_Antonissen2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;FumonisinB1_Schertz2018_reference&quot;,&quot;label&quot;:&quot;Schertz_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fumonisin B1 — `FumonisinB1_Schertz2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> The model does not reproduce the paper's terminal half-life (paper 0.57, model 2.36); the model does not reproduce the paper's time of the peak (tmax) (paper 9.5, model 0.183).

<div class="pk-model-meta" hidden drug="Fumonisin B1" model-id="FumonisinB1_Schertz2018_reference" status="needs_review" stale="false" population="barrows" measured-compound="Fumonisin B1" parameterization="mechanistic" topology="1C"></div>

## Citation
Schertz H, Kluess J, Frahm J, Schatzmayr D, Dohnal I, Bichl G et al. Oral and Intravenous Fumonisin Exposure in Pigs-A Single-Dose Treatment Experiment Evaluating Toxicokinetics and Detoxification. Toxins 10(4) (2018).
  ·  DOI: [10.3390/toxins10040150](https://doi.org/10.3390/toxins10040150)

## Population and dosing

**Population:** barrows · condition experimental single-dose exposure · age group adult · n = 21.

**Dosing:** 3.934, 7 mg, iv, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference.svg" alt="FumonisinB1_Schertz2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2α | t1/2α | 0.08 | h |
| t1/2β | t1/2β | 0.57 | h |
| Vd | V | 1.8 | L/kg |
| Cl | CL | 1.8 | L/kg/h |
| t1/2ke for FB1−m | t1/2z | 22.8 | h |
| elimination γ-phase t1/2 | t1/2γ | 182.6 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.57, model 2.36); the model does not reproduce the paper's time of the peak (tmax) (paper 9.5, model 0.183).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — fumonisin b1: t1/2α 0.08 h, t1/2β 0.57 h, V 1.8 L/kg, CL 1.8 L/kg/h, t1/2z 22.8 h, t1/2γ 183 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2α | `Q59` · t1/2α | 0.08 | h | 288 | s | h | half_life_rule (0.95) | Schertz_2018:other_prose |
| t1/2β | `Q60` · t1/2β | 0.57 | h | 2052 | s | h | half_life_rule (0.95) | Schertz_2018:other_prose |
| Vd | `Q61` · V | 1.8 | L/kg | 0.126 | m3 | L | exact (1) | Schertz_2018:other_prose |
| Cl | `Q22` · CL | 1.8 | L/kg/h | 3.5e-05 | m3/s | L/h | exact (1) | Schertz_2018:other_prose |
| t1/2ke for FB1−m | `Q57` · t1/2z | 22.8 | h | 8.208e+04 | s | h | boundary (0.8) | Schertz_2018:other_prose |
| elimination γ-phase t1/2 | `Q89` · t1/2γ | 182.6 | min | 1.096e+04 | s | h | half_life_rule (0.95) | Schertz_2018:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q59 ('t1/2α'=0.08) from results prose — parameter table was unreadable
- salvaged Q60 ('t1/2β'=0.57) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd'=1.8) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl'=1.8) from results prose — parameter table was unreadable
- salvaged Q57 ('t1/2ke for FB1−m'=22.8) from results prose — parameter table was unreadable
- salvaged Q89 ('elimination γ-phase t1/2'=182.6) from results prose — parameter table was unreadable
- implicit units: 'Cl' → L/kg/h (from the paper text: 'The serum clearance (Cl) of FB1−m was 1.8 ± 1.1 L/kg BW/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Fumonisin B1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 15 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Hydrolyzed Fumonisin B1' ('completely hydrolyzed fumonisin B1') — left in mass units
- molar mass: none found for 'Hydrolyzed Fumonisin B1' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3, 4
- table Schertz_2018_table_1: unknown_column_role
- table Schertz_2018_table_2: unknown_column_role
- table Schertz_2018_table_3: unknown_column_role
- table Schertz_2018_table_4: unknown_column_role

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 0.57 | 0.693 | 1.216 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Schertz_2018:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.8 |  |  | ['Schertz_2018:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 126 L/h |  |  | ['Schertz_2018:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 126 L |  |  | ['Schertz_2018:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Fumonisin B1) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 2 | 2.876e-05 |  | unresolved concentration unit (exp 'nmol per L serum', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.3 | 2.876e-05 |  | unresolved concentration unit (exp 'nmol per L serum', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 2.876e-05 |  | non-numeric value |
| T1_t_half_alpha | reference | skipped | 0.08 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.05 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.06 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.08 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 10.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 0.57 | 2.362 | 4.144 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.01 | 2.362 | 2.339 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.2 | 2.362 | 1.968 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.57 | 2.362 | 4.144 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 3.043 | 2.362 | 0.7762 | min→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.03 | 2.362 | 2.293 | h→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 2.362 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 4.2 | 2.362 | 0.5624 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.1 | 2.362 | 0.3873 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 22.8 | 2.362 | 0.1036 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.7 | 2.362 | 0.1141 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 2.362 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 2.362 |  | non-numeric value |
| T1_tmax | reference | fail | 9.5 | 0.1833 | 0.0193 | h→SI vs simulated h |
| T1_tmax | reference | fail | 13.6 | 0.1833 | 0.0135 | h→SI vs simulated h |
| T1_tmax | reference | fail | 9.5 | 0.1833 | 0.0193 | h→SI vs simulated h |
| T1_tmax | reference | fail | 13.6 | 0.1833 | 0.0135 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.1833 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_modelica.zip" download>FumonisinB1_Schertz2018_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_fmi.zip" download>FumonisinB1_Schertz2018_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_matlab.zip" download>FumonisinB1_Schertz2018_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_matlab_simbio.zip" download>FumonisinB1_Schertz2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_sbml.zip" download>FumonisinB1_Schertz2018_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_cellml.zip" download>FumonisinB1_Schertz2018_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7218 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.934e-06 | kg |
| input | model | `Cl` | 3.5e-05 | m3/s |
| input | model | `VdPerKg` | 0.0018 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Schertz H, Kluess J, Frahm J, Schatzmayr D, Dohnal I, Bichl G et al. Oral and Intravenous Fumonisin Exposure in Pigs-A Single-Dose Treatment Experiment Evaluating Toxicokinetics and Detoxification. Toxins 10(4) (2018). [doi:10.3390/toxins10040150](https://doi.org/10.3390/toxins10040150)

**This record:** Pharmacolibrary, model `FumonisinB1_Schertz2018_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference>

```bibtex
@misc{pharmacolibrary_FumonisinB1Schertz2018reference,
  title  = {{Pharmacolibrary model FumonisinB1_Schertz2018_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference},
  note   = {Parameters from doi:10.3390/toxins10040150},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3.934 mg infusion over 10 min, single dose. Doses in the paper: 3.934, 7 mg.

<dbs-fmusim paramsurl="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference/FumonisinB1_Schertz2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `FumonisinB1_Schertz2018_reference_params.json` · controls `FumonisinB1_Schertz2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfumonisin_b1%5D%20FumonisinB1_Schertz2018_reference&body=Drug%3A%20fumonisin_b1%0ARecord%3A%20FumonisinB1_Schertz2018_reference%0APaper%3A%20Schertz_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fumonisin_b1/FumonisinB1_Schertz2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 04:32 UTC</sub>
