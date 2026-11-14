<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Bepotastine&quot;,&quot;href&quot;:&quot;drugs/toxin_bepotastine/&quot;},{&quot;label&quot;:&quot;Yoon_2024 \u00b7 inter_individual_variability_iiv_estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bepotastine_Shentu2014_reference&quot;,&quot;label&quot;:&quot;Shentu_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bepotastine/Bepotastine_Shentu2014_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bepotastine_Yoon2024_inter_individual_variability_iiv_estima&quot;,&quot;label&quot;:&quot;Yoon_2024_inter_individual_variability_iiv_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bepotastine_Yoon2024_structural_parameters_estimate_rse&quot;,&quot;label&quot;:&quot;Yoon_2024_structural_parameters_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_bepotastine/Bepotastine_Yoon2024_structural_parameters_estimate_rse.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Bepotastine — `Bepotastine_Yoon2024_inter_individual_variability_iiv_estima`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Bepotastine" model-id="Bepotastine_Yoon2024_inter_individual_variability_iiv_estima" status="extracted" stale="false" population="pediatric patients aged 2 to 6 years" measured-compound="Bepotastine" parameterization="mechanistic" topology="1C"></div>

## Citation
Yoon S, Jin BH, Kim CO, Park K, Park MS, Chae D. Pharmacokinetic Modeling of Bepotastine for Determination of Optimal Dosage Regimen in Pediatric Patients with Allergic Rhinitis or Urticaria. Pharmaceutics 16(3) (2024).
  ·  DOI: [10.3390/pharmaceutics16030334](https://doi.org/10.3390/pharmaceutics16030334)

## Population and dosing

**Population:** pediatric patients aged 2 to 6 years · condition allergic rhinitis or urticaria · age group child · n = 60.

**Dosing:** 3 mg, other, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima.svg" alt="Bepotastine_Yoon2024_inter_individual_variability_iiv_estima diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| KA | kabs | 4.21 | h−1 |
| CL | CL | 28.0 | L/h |
| V | V | 103.0 | L |
| lag time (ALAG) | tlag | 0.27 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA | `Q49` · kabs | 4.21 | h−1 | 0.001169 | 1/s | 1/h | exact (1) | Yoon_2024:other_prose |
| CL | `Q22` · CL | 28.0 | L/h | 7.778e-06 | m3/s | L/h | exact (1) | Yoon_2024:other_prose |
| V | `Q61` · V | 103.0 | L | 0.103 | m3 | L | exact (1) | Yoon_2024:other_prose |
| lag time (ALAG) | `Q83` · tlag | 0.27 | h | 972 | s | h | exact (1) | Yoon_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'KA (h−1)' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section iiv: 'CL (L/h)' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section iiv: 'V (L)' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section iiv: 'ALAG (h)' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section iiv: 'Exponent of CL' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section iiv: 'Exponent of V' routed out of structural estimates ('Inter-Individual Variability (IIV) / Estimate (%RSE)')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability')
- salvaged Q49 ('KA'=4.21) from results prose — parameter table was unreadable
- salvaged Q22 ('CL'=28.0) from results prose — parameter table was unreadable
- salvaged Q61 ('V'=103.0) from results prose — parameter table was unreadable
- salvaged Q83 ('lag time (ALAG)'=0.27) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q61 (V)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Bepotastine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'inter-individual variability (iiv) / estimate (%rse)' subgroup of Yoon_2024 (paper reports 2 populations: inter-individual variability (iiv) / estimate (%rse), structural parameters / estimate (%rse))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28 | ['Yoon_2024:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28 L/h | ['Yoon_2024:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 103 L | ['Yoon_2024:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_modelica.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_fmi.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_matlab.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_matlab_simbio.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_sbml.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_cellml.zip" download>Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3889 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 972 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-06 | kg |
| input | model | `Cl` | 7.778e-06 | m3/s |
| input | model | `VdPerKg` | 0.001471 | m3/kg |
| input | model | `ka` | 0.001169 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yoon S, Jin BH, Kim CO, Park K, Park MS, Chae D. Pharmacokinetic Modeling of Bepotastine for Determination of Optimal Dosage Regimen in Pediatric Patients with Allergic Rhinitis or Urticaria. Pharmaceutics 16(3) (2024). [doi:10.3390/pharmaceutics16030334](https://doi.org/10.3390/pharmaceutics16030334)

**This record:** Pharmacolibrary, model `Bepotastine_Yoon2024_inter_individual_variability_iiv_estima`. <https://pharmacolibrary.github.io/#/drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima>

```bibtex
@misc{pharmacolibrary_BepotastineYoon2024interindividualvariabilityiivestima,
  title  = {{Pharmacolibrary model Bepotastine_Yoon2024_inter_individual_variability_iiv_estima}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima},
  note   = {Parameters from doi:10.3390/pharmaceutics16030334},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3 mg, single dose, first-order absorption (ka 4.21 /h, lag 16.2 min, F 0.9). Dose in the paper: 3 mg.

<dbs-fmusim paramsurl="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_params.json` · controls `Bepotastine_Yoon2024_inter_individual_variability_iiv_estima_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbepotastine%5D%20Bepotastine_Yoon2024_inter_individual_variability_iiv_estima&body=Drug%3A%20bepotastine%0ARecord%3A%20Bepotastine_Yoon2024_inter_individual_variability_iiv_estima%0APaper%3A%20Yoon_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_bepotastine/Bepotastine_Yoon2024_inter_individual_variability_iiv_estima%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:08 UTC</sub>
