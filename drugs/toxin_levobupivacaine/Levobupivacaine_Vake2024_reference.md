<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Levobupivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/&quot;},{&quot;label&quot;:&quot;Vake_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levobupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Chalkiadis2005_reference&quot;,&quot;label&quot;:&quot;Chalkiadis_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Chalkiadis2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Frawley2021_reference&quot;,&quot;label&quot;:&quot;Frawley_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Frawley2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Sessler2025_reference&quot;,&quot;label&quot;:&quot;Sessler_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Sessler2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Vake2024_reference&quot;,&quot;label&quot;:&quot;Vake_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levobupivacaine_Vincent2020_reference&quot;,&quot;label&quot;:&quot;Vincent_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levobupivacaine — `Levobupivacaine_Vake2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.531); the model does not reproduce the paper's peak concentration (Cmax) (+1 more).

<div class="pk-model-meta" hidden drug="Levobupivacaine" model-id="Levobupivacaine_Vake2024_reference" status="needs_review" stale="false" population="female grower pigs" measured-compound="Levobupivacaine" parameterization="apparent" topology="1C"></div>

## Citation
Vake T, Snoj T, Čemažar M, Lampreht Tratar U, Stupan U, Seliškar A et al. Pharmacokinetics of single dose levobupivacaine after peri-incisional subcutaneous infiltration in anaesthetized domestic pigs. Laboratory animals 58(6):602–611 (2024).
  ·  DOI: [10.1177/00236772241259618](https://doi.org/10.1177/00236772241259618)

## Population and dosing

**Population:** female grower pigs · condition anaesthetized · n = 12.

**Dosing:** 70 mg, sc, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference.svg" alt="Levobupivacaine_Vake2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| λz | kel | 0.111 | 1/h |
| t1/2 | t1/2z | 6.25 | h |
| Vz/F | V/F | 35.57 | L |
| CL/F | CL/F | 4.41 | L/h |
| clearance | CL | 17.5 | L/h |
| Ka (/min) | kabs | 0.18 | /min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 1, model 0.531); the model does not reproduce the paper's peak concentration (Cmax) (+1 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — levobupivacaine: kel 0.111 1/h, t1/2z 6.25 h, V/F 35.6 L, CL/F 4.41 L/h, CL 17.5 L/h, kabs 0.18 /min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| λz | `Q47` · kel | 0.111 | 1/h | 3.083e-05 | 1/s | 1/h | exact (1) | Vake_2024:results_prose |
| t1/2 | `Q57` · t1/2z | 6.25 | h | 2.25e+04 | s | h | half_life_rule (0.95) | Vake_2024:results_prose |
| Vz/F | `Q76` · V/F | 35.57 | L | 0.03557 | m3 | L | exact (1) | Vake_2024:results_prose |
| CL/F | `Q27` · CL/F | 4.41 | L/h | 1.225e-06 | m3/s | L/h | exact (1) | Vake_2024:results_prose |
| clearance | `Q22` · CL | 17.5 | L/h | 4.861e-06 | m3/s | L/h | exact (1) | Vake_2024:discussion_prose |
| Ka (/min) | `Q49` · kabs | 0.18 | /min | 0.003 | 1/s | 1/h | review_gapfill (0.7) | Vincent_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- salvaged Q47 ('λz'=0.111) from results prose — parameter table was unreadable
- salvaged Q57 ('t1/2'=6.25) from results prose — parameter table was unreadable
- salvaged Q76 ('Vz/F'=35.57) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=4.41) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=17.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Levobupivacaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Vincent_2020's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Vake_2024_table_2: unbound_uncertainty

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Vincent_2020:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.5 L/h | ['Vake_2024:discussion_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.41 L/h | ['Vake_2024:results_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 35.6 L | ['Vake_2024:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Levobupivacaine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.001866 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.001866 |  | non-numeric value |
| T1_cmax | reference | fail | 0.00081 | 0.001866 | 2.303 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 0.001866 |  | non-numeric value |
| T1_cmax | reference | skipped | 44.3 | 0.001866 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.001866 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 5.591 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 6.25 | 5.591 | 0.8946 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.591 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 31.4 | 5.591 | 0.1781 | →SI vs simulated h |
| T1_t_half_terminal | reference | pass | 6.25 | 5.591 | 0.8946 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.8833 | 5.591 | 6.33 | minutes→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.367 | 5.591 | 4.091 | minutes→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.95 | 5.591 | 5.885 | minutes→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.5308 | 0.5308 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_modelica.zip" download>Levobupivacaine_Vake2024_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_fmi.zip" download>Levobupivacaine_Vake2024_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_matlab.zip" download>Levobupivacaine_Vake2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_matlab_simbio.zip" download>Levobupivacaine_Vake2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_sbml.zip" download>Levobupivacaine_Vake2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_cellml.zip" download>Levobupivacaine_Vake2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2884 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 1.225e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005081 | m3/kg |
| input | model | `ka` | 0.003 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Vake T, Snoj T, Čemažar M, Lampreht Tratar U, Stupan U, Seliškar A et al. Pharmacokinetics of single dose levobupivacaine after peri-incisional subcutaneous infiltration in anaesthetized domestic pigs. Laboratory animals 58(6):602–611 (2024). [doi:10.1177/00236772241259618](https://doi.org/10.1177/00236772241259618)

**This record:** Pharmacolibrary, model `Levobupivacaine_Vake2024_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference>

```bibtex
@misc{pharmacolibrary_LevobupivacaineVake2024reference,
  title  = {{Pharmacolibrary model Levobupivacaine_Vake2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference},
  note   = {Parameters from doi:10.1177/00236772241259618},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 70 mg, single dose, first-order absorption (ka 10.8 /h, F 1). Dose in the paper: 70 mg.

<dbs-fmusim paramsurl="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference/Levobupivacaine_Vake2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Levobupivacaine_Vake2024_reference_params.json` · controls `Levobupivacaine_Vake2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevobupivacaine%5D%20Levobupivacaine_Vake2024_reference&body=Drug%3A%20levobupivacaine%0ARecord%3A%20Levobupivacaine_Vake2024_reference%0APaper%3A%20Vake_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:55 UTC</sub>
