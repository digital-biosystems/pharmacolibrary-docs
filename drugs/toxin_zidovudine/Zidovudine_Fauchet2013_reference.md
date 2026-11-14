<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Zidovudine&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/&quot;},{&quot;label&quot;:&quot;Fauchet_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Bazzoli2011_reference&quot;,&quot;label&quot;:&quot;Bazzoli_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Bazzoli2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Zidovudine_Flynn2007_reference&quot;,&quot;label&quot;:&quot;Flynn_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Flynn2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Ishida2026_reference&quot;,&quot;label&quot;:&quot;Ishida_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Ishida2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Kawaguchi1990_reference&quot;,&quot;label&quot;:&quot;Kawaguchi_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Kawaguchi1990_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Mirochnick1998_reference&quot;,&quot;label&quot;:&quot;Mirochnick_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Mirochnick1998_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zidovudine_Velasque2007_reference&quot;,&quot;label&quot;:&quot;Velasque_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_zidovudine/Zidovudine_Velasque2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Zidovudine — `Zidovudine_Fauchet2013_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Zidovudine" model-id="Zidovudine_Fauchet2013_reference" status="extracted" stale="false" population="HIV-1-infected children" measured-compound="Zidovudine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Fauchet F, Treluyer JM, Frange P, Urien S, Foissac F, Bouazza N et al. Population pharmacokinetics study of recommended zidovudine doses in HIV-1-infected children. Antimicrobial agents and chemotherapy 57(10):4801-4808 (2013).
  ·  DOI: [10.1128/aac.00911-13](https://doi.org/10.1128/aac.00911-13)

## Population and dosing

**Population:** HIV-1-infected children · condition HIV-1-infected · age group child · n = 247.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference.svg" alt="Zidovudine_Fauchet2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| absorption rate | kabs | 2.86 | h(-1) |
| apparent elimination clearance | CL | 89.7 | liters · h(-1) |
| apparent volume of distribution | V/F | 229 | liters |
| metabolic formation rate constant | kfm | 12.6 | h(-1) |
| elimination rate constant of G-ZDV | kel | 2.27 | h(-1) |

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
| absorption rate | `Q49` · kabs | 2.86 | h(-1) | 0.0007944 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |
| apparent elimination clearance | `Q22` · CL | 89.7 | liters · h(-1) | 2.492e-05 | m3/s | l/h | llm_confirmed (0.6) | Fauchet_2013:abstract |
| apparent volume of distribution | `Q76` · V/F | 229 | liters | 0.229 | m3 | l | exact (1) | Fauchet_2013:abstract |
| metabolic formation rate constant | `Q305` · kfm | 12.6 | h(-1) | 0.0035 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |
| elimination rate constant of G-ZDV | `Q47` · kel | 2.27 | h(-1) | 0.0006306 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- routed 'between-subject variability' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Zidovudine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 5 linked by role; re-tagged Zidovudine→parent ×3, Zidovudine→3*-azido-3*-deoxy-5*-glucuronylthymidine ×2
- molar mass: no plausible PubChem entry for '3*-azido-3*-deoxy-5*-glucuronylthymidine' ("3'-azido-3'-deoxy-5'-glucuronylthymidine") — left in mass units
- molar mass: none found for '3*-azido-3*-deoxy-5*-glucuronylthymidine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fauchet_2013_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Fauchet_2013:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 89.7 L/h | ['Fauchet_2013:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 229 L | ['Fauchet_2013:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_modelica.zip" download>Zidovudine_Fauchet2013_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_fmi.zip" download>Zidovudine_Fauchet2013_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_matlab.zip" download>Zidovudine_Fauchet2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_matlab_simbio.zip" download>Zidovudine_Fauchet2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_sbml.zip" download>Zidovudine_Fauchet2013_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_cellml.zip" download>Zidovudine_Fauchet2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2672 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 2.492e-05 | m3/s |
| input | model | `VdPerKg` | 0.003271 | m3/kg |
| input | model | `ka` | 0.0007944 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fauchet F, Treluyer JM, Frange P, Urien S, Foissac F, Bouazza N et al. Population pharmacokinetics study of recommended zidovudine doses in HIV-1-infected children. Antimicrobial agents and chemotherapy 57(10):4801-4808 (2013). [doi:10.1128/aac.00911-13](https://doi.org/10.1128/aac.00911-13)

**This record:** Pharmacolibrary, model `Zidovudine_Fauchet2013_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference>

```bibtex
@misc{pharmacolibrary_ZidovudineFauchet2013reference,
  title  = {{Pharmacolibrary model Zidovudine_Fauchet2013_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference},
  note   = {Parameters from doi:10.1128/aac.00911-13},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 2.86 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (J05AF01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Zidovudine_Fauchet2013_reference_params.json` · controls `Zidovudine_Fauchet2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D%20Zidovudine_Fauchet2013_reference&body=Drug%3A%20zidovudine%0ARecord%3A%20Zidovudine_Fauchet2013_reference%0APaper%3A%20Fauchet_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zidovudine/Zidovudine_Fauchet2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:37 UTC</sub>
