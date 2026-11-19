<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Donepezil&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/&quot;},{&quot;label&quot;:&quot;Park_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Karalis2023_drug_donepezil&quot;,&quot;label&quot;:&quot;Karalis_2023_drug_donepezil&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Karalis2023_drug_donepezil.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Donepezil_Pyka2024_reference&quot;,&quot;label&quot;:&quot;Pyka_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Pyka2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Donepezil — `Donepezil_Park2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Q, D1 and tlag have no unit.

<div class="pk-model-meta" hidden drug="Donepezil" model-id="Donepezil_Park2025_reference" status="needs_review" stale="false" population="healthy male Korean adults" measured-compound="Donepezil" parameterization="mechanistic" topology="2C"></div>

## Citation
Park YC, Seol E, Lee J, Hong JH, Jung JG, Sunwoo J. Pharmacokinetic Evaluation of GB-5001, a Long-Acting Injectable Formulation of Donepezil, in Healthy Korean Participants: Population Pharmacokinetics with Phase 1 Study. Pharmaceutics 17(12):1517 (2025).
  ·  DOI: [10.3390/pharmaceutics17121517](https://doi.org/10.3390/pharmaceutics17121517)

## Population and dosing

**Population:** healthy male Korean adults · condition healthy · age group adult · n = 32.

**Dosed compound ≠ measured compound:** dosed Donepezil (GB-5001A, LAI injectable; oral Aricept), measured Donepezil.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference.svg" alt="Donepezil_Park2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL, L/h | CL | 9.57 | L/h | 0.0945 (None% RSE) |
| V1, L | V1 | 58.2 | L | 6.97 (None% RSE) |
| V2, L | V2 | 2050 | L |  |
| KA3, 1/h | kabs | 0.00173 | 1/h |  |
| F4 | equation variable | 0.195 |  |  |
| Q | Q | 100 |  |  |
| D1 | D1 | 497 |  |  |
| ALAG3 | tlag | 299 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Q, D1 and tlag have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — donepezil: CL 9.57 L/h, V1 58.2 L, V2 2.05e+03 L, kabs 0.00173 1/h, Q 100, D1 497, tlag 299.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Donepezil (GB-5001A, LAI injectable; oral Aricept), the second reading GB-5001A (donepezil); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL, L/h | `Q22` · CL | 9.57 | L/h | 2.658e-06 | m3/s | l/h | exact (1) | pharmaceutics-17-01517-t006:row1:col1 | 0.0945 (None% RSE) |
| V1, L | `Q63` · V1 | 58.2 | L | 0.0582 | m3 | l | exact (1) | pharmaceutics-17-01517-t006:row3:col1 | 6.97 (None% RSE) |
| V2, L | `Q64` · V2 | 2050 | L | 2.05 | m3 | l | exact (1) | pharmaceutics-17-01517-t006:row5:col1 |  |
| KA3, 1/h | `Q49` · kabs | 0.00173 | 1/h | 4.806e-07 | 1/s | 1/h | llm (0.6) | pharmaceutics-17-01517-t006:row6:col1 |  |
| F4 | `Q900` · equation variable | 0.195 |  | 0.195 |  |  | llm (0.6) | pharmaceutics-17-01517-t006:row9:col1 |  |
| Q | `Q30` · Q | 100 |  |  |  |  | exact (1) | pharmaceutics-17-01517-t006:row10:col1 |  |
| D1 | `Q310` · D1 | 497 |  |  |  |  | exact (1) | pharmaceutics-17-01517-t006:row11:col1 |  |
| ALAG3 | `Q83` · tlag | 299 |  |  |  |  | llm (0.6) | pharmaceutics-17-01517-t006:row12:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag', 'k12', 'k21']

**Interpretation flags:**
- dropped duplicate Q49 ('KA4, 1/h', value '0.0113') — already have one for this compound
- dropped unlinked row (NIL): 'F3' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-01517-t006:row8:col1'])
- dropped duplicate Q83 ('ALAG4', value '1130') — already have one for this compound
- routed 'ε1 (additive), ng/mL' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'ε2 (proportional) a' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL, L/h); Q63 (V1, L); Q64 (V2, L); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Donepezil
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q30, Q310, Q83 — no SI value to build from)

**Extraction notes:**
- table pharmaceutics-17-01517-t006: unbound_uncertainty
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alag3]` | 299 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[alag3]` |  | 299 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 9.57 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` |  | 9.57 | only_one_extracted |
| `gpt-oss:120b` | `parameters[d1]` | 497 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[d1]` |  | 497 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f4]` | 0.195 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[f4]` |  | 0.195 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka3]` | 0.00173 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka3]` |  | 0.00173 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 100 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` |  | 100 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | 58.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` |  | 58.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` | 2050 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2]` |  | 2050 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Donepezil (GB-5001A, LAI injectable; oral Aricept) | GB-5001A (donepezil) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-17-01517-t006:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-17-01517-t006:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-17-01517-t006:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-17-01517-t006:row5:col1'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['pharmaceutics-17-01517-t006:row10:col1'] |
| C5_unit_missing_Q310 | fail | [time] |  | ['pharmaceutics-17-01517-t006:row11:col1'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['pharmaceutics-17-01517-t006:row12:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.57 | ['pharmaceutics-17-01517-t006:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.57 L/h | ['pharmaceutics-17-01517-t006:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 58.2 L | ['pharmaceutics-17-01517-t006:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.05e+03 L | ['pharmaceutics-17-01517-t006:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_modelica.zip" download>Donepezil_Park2025_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_fmi.zip" download>Donepezil_Park2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_matlab.zip" download>Donepezil_Park2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_matlab_simbio.zip" download>Donepezil_Park2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_sbml.zip" download>Donepezil_Park2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_cellml.zip" download>Donepezil_Park2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3795 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7.5e-06 | kg |
| input | model | `Cl` | 2.658e-06 | m3/s |
| input | model | `VdPerKg` | 0.0008314 | m3/kg |
| input | model | `ka` | 4.806e-07 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Park YC, Seol E, Lee J, Hong JH, Jung JG, Sunwoo J. Pharmacokinetic Evaluation of GB-5001, a Long-Acting Injectable Formulation of Donepezil, in Healthy Korean Participants: Population Pharmacokinetics with Phase 1 Study. Pharmaceutics 17(12):1517 (2025). [doi:10.3390/pharmaceutics17121517](https://doi.org/10.3390/pharmaceutics17121517)

**This record:** Pharmacolibrary, model `Donepezil_Park2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_donepezil/Donepezil_Park2025_reference>

```bibtex
@misc{pharmacolibrary_DonepezilPark2025reference,
  title  = {{Pharmacolibrary model Donepezil_Park2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_donepezil/Donepezil_Park2025_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics17121517},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 7.5 mg, single dose, first-order absorption (ka 0.00173 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 7.5 mg oral (N06DA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_donepezil/Donepezil_Park2025_reference/Donepezil_Park2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Donepezil_Park2025_reference_params.json` · controls `Donepezil_Park2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Park2025_reference&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Park2025_reference%0APaper%3A%20Park_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_donepezil/Donepezil_Park2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:41 UTC</sub>
