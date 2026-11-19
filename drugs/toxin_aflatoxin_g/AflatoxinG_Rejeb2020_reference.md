<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin G&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/&quot;},{&quot;label&quot;:&quot;Rejeb_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_reference&quot;,&quot;label&quot;:&quot;Rejeb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po_po_cc&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po_po_cc&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po_po_cc.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AflatoxinG_Rejeb2020_route_of_administration_po_po_cp&quot;,&quot;label&quot;:&quot;Rejeb_2020_route_of_administration_po_po_cp&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_route_of_administration_po_po_cp.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aflatoxin G — `AflatoxinG_Rejeb2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The model does not reproduce the paper's terminal half-life (paper 1.36, model 2.35); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).

<div class="pk-model-meta" hidden drug="Aflatoxin G" model-id="AflatoxinG_Rejeb2020_reference" status="needs_review" stale="false" population="broiler chickens" measured-compound="AFG1" parameterization="mechanistic" topology="1C"></div>

## Citation
Rejeb R, Baere S, Devreese M, Ducatelle R, Croubels S, Ayed MH et al. Calcination Improves the In Vivo Efficacy of a Montmorillonite Clay to Bind Aflatoxin G1 in Broiler Chickens: A Toxicokinetic Approach. Toxins 12(10) (2020).
  ·  DOI: [10.3390/toxins12100660](https://doi.org/10.3390/toxins12100660)

## Population and dosing

**Population:** broiler chickens · condition healthy · n = 40.

**Dosing:** 2 mg/kg BW, iv, single.

**Dosed compound ≠ measured compound:** dosed Aflatoxin G1 (AFG1), measured AFG1.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference.svg" alt="AflatoxinG_Rejeb2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T1/2el (PO) | t1/2z | 1.36 | h |
| Vd (IV) | V | 22.52 | L/kg |
| Cl (IV) | CL | 28.5 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 1.36, model 2.35); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. None of the extracted parameters is aflatoxin g's own; they describe AFG1. Extracted — AFG1: t1/2z 1.36 h, V 22.5 L/kg, CL 28.5 L/h/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T1/2el (PO) | `Q57` · t1/2z | 1.36 | h | 4896 | s | h | half_life_rule (0.95) | Rejeb_2020:other_prose |
| Vd (IV) | `Q61` · V | 22.52 | L/kg | 1.576 | m3 | L | exact (1) | Rejeb_2020:other_prose |
| Cl (IV) | `Q22` · CL | 28.5 | L/h/kg | 0.0005542 | m3/s | L/h | exact (1) | Rejeb_2020:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'AUC0−t'
- dropped value-less row: 'AUC0−∞'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'C0'
- dropped value-less row: 'tmax'
- dropped value-less row: 'kel'
- dropped value-less row: 't1/2el'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Vd'
- dropped value-less row: 'p'
- dropped value-less row: 'SD'
- salvaged Q57 ('T1/2el (PO)'=1.36) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd (IV)'=22.52) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl (IV)'=28.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=AFG1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Rejeb_2020:discussion_prose, Rejeb_2020:other_prose, toxins-12-00660-t002:footnote); populations route of administration / po, route of administration / po / po + cc, route of administration / po / po + cp, toxicokinetic parameters / iv kept as separate records
- molar mass: none found for 'AFG1' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'AFG1', not aflatoxin_g — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.5 | ['Rejeb_2020:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2e+03 L/h | ['Rejeb_2020:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.58e+03 L | ['Rejeb_2020:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=AFG1) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped |  | 5.719e-06 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 5.719e-06 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 2.348 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 1.36 | 2.348 | 1.727 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.36 | 2.348 | 1.727 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.1833 | 0.3667 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.1833 |  | non-numeric value |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_modelica.zip" download>AflatoxinG_Rejeb2020_reference_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_fmi.zip" download>AflatoxinG_Rejeb2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_matlab.zip" download>AflatoxinG_Rejeb2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_matlab_simbio.zip" download>AflatoxinG_Rejeb2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_sbml.zip" download>AflatoxinG_Rejeb2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_cellml.zip" download>AflatoxinG_Rejeb2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 0.0005542 | m3/s |
| input | model | `VdPerKg` | 0.02252 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rejeb R, Baere S, Devreese M, Ducatelle R, Croubels S, Ayed MH et al. Calcination Improves the In Vivo Efficacy of a Montmorillonite Clay to Bind Aflatoxin G1 in Broiler Chickens: A Toxicokinetic Approach. Toxins 12(10) (2020). [doi:10.3390/toxins12100660](https://doi.org/10.3390/toxins12100660)

**This record:** Pharmacolibrary, model `AflatoxinG_Rejeb2020_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference>

```bibtex
@misc{pharmacolibrary_AflatoxinGRejeb2020reference,
  title  = {{Pharmacolibrary model AflatoxinG_Rejeb2020_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference},
  note   = {Parameters from doi:10.3390/toxins12100660},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference/AflatoxinG_Rejeb2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `AflatoxinG_Rejeb2020_reference_params.json` · controls `AflatoxinG_Rejeb2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_g%5D%20AflatoxinG_Rejeb2020_reference&body=Drug%3A%20aflatoxin_g%0ARecord%3A%20AflatoxinG_Rejeb2020_reference%0APaper%3A%20Rejeb_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_g/AflatoxinG_Rejeb2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:19 UTC</sub>
