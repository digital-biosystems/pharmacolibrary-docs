<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pyrimethamine&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/&quot;},{&quot;label&quot;:&quot;de_2018 \u00b7 pyrimethamine_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyrimethamine_Salman2011_reference&quot;,&quot;label&quot;:&quot;Salman_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/Pyrimethamine_Salman2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyrimethamine_Sottas2019_reference&quot;,&quot;label&quot;:&quot;Sottas_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/Pyrimethamine_Sottas2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyrimethamine_Trenque2004_reference&quot;,&quot;label&quot;:&quot;Trenque_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/Pyrimethamine_Trenque2004_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyrimethamine_de2018_pyrimethamine_estimate&quot;,&quot;label&quot;:&quot;de_2018_pyrimethamine_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pyrimethamine_White1985_reference&quot;,&quot;label&quot;:&quot;White_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrimethamine/Pyrimethamine_White1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyrimethamine — `Pyrimethamine_de2018_pyrimethamine_estimate`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Pyrimethamine" model-id="Pyrimethamine_de2018_pyrimethamine_estimate" status="extracted" stale="false" population="pediatric and adult patients with uncomplicated P. falciparum infection" measured-compound="Pyrimethamine" parameterization="apparent" topology="1C"></div>

## Citation
de Kock M, Tarning J, Workman L, Allen EN, Tekete MM, Djimde AA et al. Population Pharmacokinetic Properties of Sulfadoxine and Pyrimethamine: a Pooled Analysis To Inform Optimal Dosing in African Children with Uncomplicated Malaria. Antimicrobial agents and chemotherapy 62(5):e01370-17 (2018).
  ·  DOI: [10.1128/aac.01370-17](https://doi.org/10.1128/aac.01370-17)

## Population and dosing

**Population:** pediatric and adult patients with uncomplicated P. falciparum infection · condition malaria · age group mixed · n = 801.

**Dosing:** 25, 1500 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate.svg" alt="Pyrimethamine_de2018_pyrimethamine_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F | Fab | 1 |  |  | 36.1 (4% RSE) |
| CL/F (liters/h)b | CL/F | 0.829 | liters/h | 3 |  |
| V/F (liters)b | V/F | 91.4 | liters | 3 |  |
| ka (/h) | kabs | 1.40 | /h | 80 | 171 (25% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | T2:row2:col3 | 36.1 (4% RSE) |
| CL/F (liters/h)b | `Q27` · CL/F | 0.829 | liters/h | 2.303e-07 | m3/s | l/h | 3 | llm_confirmed (0.6) | T2:row3:col3 |  |
| V/F (liters)b | `Q76` · V/F | 91.4 | liters | 0.0914 | m3 | l | 3 | llm_confirmed (0.6) | T2:row4:col3 |  |
| ka (/h) | `Q49` · kabs | 1.40 | /h | 0.0003889 | 1/s | 1/h | 80 | exact (1) | T2:row5:col3 | 171 (25% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'F' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'ka' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'V' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'CL' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'Correlation in CL of the two drugs (%)' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'Additive error (μg/ml for sulfadoxine; ng/ml for pyrimethamine)' routed out of structural estimates ('BSV (%)c in:')
- table section iiv: 'Proportional error (%)' routed out of structural estimates ('BSV (%)c in:')
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'CL/F (liters/h)b'; source reconciliation required
- table representations disagree for 'V/F (liters)b'; source reconciliation required
- table representations disagree for 'ka (/h)'; source reconciliation required
- table representations disagree for 'Change in F for each point in Z-score below −2 (%)'; source reconciliation required
- table representations disagree for 'PGA50 (mo after conception)'; source reconciliation required
- table representations disagree for 'γ (Hill coefficient)'; source reconciliation required
- table representations disagree for 'Difference from clearance in reference 5 (%)'; source reconciliation required
- table representations disagree for 'Bancoumana, Bela Vista, Catuanee'; source reconciliation required
- table representations disagree for 'Namaachae'; source reconciliation required
- dropped unlinked row (NIL): 'Change in F for each point in Z-score below −2 (%)' — extend the ontology if this is a real PK parameter (source ['T2:row6:col3'])
- dropped unlinked row (NIL): 'PGA50 (mo after conception)' — extend the ontology if this is a real PK parameter (source ['T2:row7:col3'])
- dropped 'Difference from clearance in reference 5 (%)' → Q22 = -54.9: a clearance of -54.9 is not a parameter value (source ['T2:row9:col3'])
- dropped unlinked row (NIL): 'Bancoumana, Bela Vista, Catuanee' — extend the ontology if this is a real PK parameter (source ['T2:row11:col3'])
- dropped unlinked row (NIL): 'Namaachae' — extend the ontology if this is a real PK parameter (source ['T2:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Pyrimethamine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'pyrimethamine / estimate' subgroup of de_2018 (paper reports 2 populations: pyrimethamine / estimate, sulfadoxine / estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row5:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T2:row4:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.829 L/h | ['T2:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 91.4 L | ['T2:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_modelica.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_fmi.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_matlab.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_matlab_simbio.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_sbml.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_cellml.zip" download>Pyrimethamine_de2018_pyrimethamine_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2487 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `Cl` | 2.303e-07 | m3/s |
| input | model | `VdPerKg` | 0.001306 | m3/kg |
| input | model | `ka` | 0.0003889 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): de Kock M, Tarning J, Workman L, Allen EN, Tekete MM, Djimde AA et al. Population Pharmacokinetic Properties of Sulfadoxine and Pyrimethamine: a Pooled Analysis To Inform Optimal Dosing in African Children with Uncomplicated Malaria. Antimicrobial agents and chemotherapy 62(5):e01370-17 (2018). [doi:10.1128/aac.01370-17](https://doi.org/10.1128/aac.01370-17)

**This record:** Pharmacolibrary, model `Pyrimethamine_de2018_pyrimethamine_estimate`. <https://pharmacolibrary.github.io/#/drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate>

```bibtex
@misc{pharmacolibrary_Pyrimethaminede2018pyrimethamineestimate,
  title  = {{Pharmacolibrary model Pyrimethamine_de2018_pyrimethamine_estimate}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate},
  note   = {Parameters from doi:10.1128/aac.01370-17},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 25 mg, single dose, first-order absorption (ka 1.4 /h, F 1). Doses in the paper: 25, 1500 mg.

<dbs-fmusim paramsurl="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate/Pyrimethamine_de2018_pyrimethamine_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Pyrimethamine_de2018_pyrimethamine_estimate_params.json` · controls `Pyrimethamine_de2018_pyrimethamine_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrimethamine%5D%20Pyrimethamine_de2018_pyrimethamine_estimate&body=Drug%3A%20pyrimethamine%0ARecord%3A%20Pyrimethamine_de2018_pyrimethamine_estimate%0APaper%3A%20de_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pyrimethamine/Pyrimethamine_de2018_pyrimethamine_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:42 UTC</sub>
