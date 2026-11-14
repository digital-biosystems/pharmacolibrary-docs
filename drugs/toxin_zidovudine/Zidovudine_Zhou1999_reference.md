<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Zidovudine&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/&quot;},{&quot;label&quot;:&quot;Zhou_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Bazzoli2011_reference&quot;,&quot;label&quot;:&quot;Bazzoli_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Bazzoli2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Flynn2007_reference&quot;,&quot;label&quot;:&quot;Flynn_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Flynn2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Ishida2026_reference&quot;,&quot;label&quot;:&quot;Ishida_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Ishida2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Kawaguchi1990_reference&quot;,&quot;label&quot;:&quot;Kawaguchi_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Kawaguchi1990_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Mirochnick1998_reference&quot;,&quot;label&quot;:&quot;Mirochnick_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Mirochnick1998_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Zidovudine_Velasque2007_reference&quot;,&quot;label&quot;:&quot;Velasque_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Velasque2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zidovudine — `Zidovudine_Zhou1999_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Zidovudine" model-id="Zidovudine_Zhou1999_reference" status="extracted" stale="false" population="human immunodeficiency virus-infected patients" measured-compound="Zidovudine" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhou XJ, Sheiner LB, D'Aquila RT, Hughes MD, Hirsch MS, Fischl MA et al. Population pharmacokinetics of nevirapine, zidovudine, and didanosine in human immunodeficiency virus-infected patients. The National Institute of Allergy and Infectious Diseases AIDS Clinical Trials Group Protocol 241 Investigators. Antimicrobial agents and chemotherapy 43(1):121-128 (1999).
  ·  DOI: [10.1128/aac.43.1.121](https://doi.org/10.1128/aac.43.1.121)

## Population and dosing

**Population:** human immunodeficiency virus-infected patients · condition HIV infection · age group adult · n = ,.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference.svg" alt="Zidovudine_Zhou1999_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Individual oral clearance (CL) | CL | 0.0533 | L/h |
| volume of distribution (V) | V | 1.17 | liters/kg |
| VSS (volume of distribution at steady state) | Vss | 6.68 | liters/kg |

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
| Individual oral clearance (CL) | `Q22` · CL | 0.0533 | L/h | 1.481e-08 | m3/s | L/h | llm_corrected (0.6) | Zhou_1999:abstract |
| volume of distribution (V) | `Q61` · V | 1.17 | liters/kg | 0.0819 | m3 | l/kg | exact (1) | Zhou_1999:abstract |
| VSS (volume of distribution at steady state) | `Q65` · Vss | 6.68 | liters/kg | 0.4676 | m3 | l/kg | exact (1) | Zhou_1999:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'liters/h/kg of body weight' (CL)
- dropped duplicate Q22 ('Individual mean oral CL', value 1.84) — already have one for this compound
- dropped duplicate Q61 ('V', value 2.67) — already have one for this compound
- dropped value-less row: 'body weight'
- dropped value-less row: 'age'
- dropped duplicate Q22 ('average individual oral CL', value 1.64) — already have one for this compound
- dropped duplicate Q65 ('VSS', value 3.56) — already have one for this compound
- implicit units: 'Individual oral clearance (CL)' → L/h (from the popPK convention: 'No unit is stated in the provided text or captions. The magnitude 0.0533 is consistent with clearance values typically e')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Zidovudine
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Zhou_1999_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zhou_1999:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhou_1999:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Zhou_1999:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0533 | ['Zhou_1999:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0533 L/h | ['Zhou_1999:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 81.9 L | ['Zhou_1999:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 468 L | ['Zhou_1999:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_modelica.zip" download>Zidovudine_Zhou1999_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_fmi.zip" download>Zidovudine_Zhou1999_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_matlab.zip" download>Zidovudine_Zhou1999_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_matlab_simbio.zip" download>Zidovudine_Zhou1999_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_sbml.zip" download>Zidovudine_Zhou1999_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_cellml.zip" download>Zidovudine_Zhou1999_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2672 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 1.481e-08 | m3/s |
| input | model | `VdPerKg` | 0.00117 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhou XJ, Sheiner LB, D'Aquila RT, Hughes MD, Hirsch MS, Fischl MA et al. Population pharmacokinetics of nevirapine, zidovudine, and didanosine in human immunodeficiency virus-infected patients. The National Institute of Allergy and Infectious Diseases AIDS Clinical Trials Group Protocol 241 Investigators. Antimicrobial agents and chemotherapy 43(1):121-128 (1999). [doi:10.1128/aac.43.1.121](https://doi.org/10.1128/aac.43.1.121)

**This record:** Pharmacolibrary, model `Zidovudine_Zhou1999_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference>

```bibtex
@misc{pharmacolibrary_ZidovudineZhou1999reference,
  title  = {{Pharmacolibrary model Zidovudine_Zhou1999_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference},
  note   = {Parameters from doi:10.1128/aac.43.1.121},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 600 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg parenteral (J05AF01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference/Zidovudine_Zhou1999_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Zidovudine_Zhou1999_reference_params.json` · controls `Zidovudine_Zhou1999_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D%20Zidovudine_Zhou1999_reference&body=Drug%3A%20zidovudine%0ARecord%3A%20Zidovudine_Zhou1999_reference%0APaper%3A%20Zhou_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:39 UTC</sub>
