<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;atazanavir&quot;,&quot;href&quot;:&quot;drugs/drug_atazanavir/&quot;},{&quot;label&quot;:&quot;Goutelle_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atazanavir_Goutelle2013_reference&quot;,&quot;label&quot;:&quot;Goutelle_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atazanavir — `Atazanavir_Goutelle2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The atazanavir model's bioavailability F was left at a library default instead of an estimate from Goutelle_2013, so the record was held back for review.

<div class="pk-model-meta" hidden drug="atazanavir" model-id="Atazanavir_Goutelle2013_reference" status="needs_review" stale="false" population="HIV-infected adults on unboosted atazanavir" measured-compound="atazanavir" parameterization="mechanistic" topology="1C"></div>

## Citation
Goutelle S, Baudry T, Gagnieu MC, Boibieux A, Livrozet JM, Peyramond D et al. Pharmacokinetic-pharmacodynamic modeling of unboosted Atazanavir in a cohort of stable HIV-infected patients. Antimicrobial agents and chemotherapy 57(1):517–523 (2013).
  ·  DOI: [10.1128/AAC.01822-12](https://doi.org/10.1128/AAC.01822-12)

## Population and dosing

**Population:** HIV-infected adults on unboosted atazanavir · condition HIV infection · age group adult · n = 58.

**Dosing:** 200, 300, 400, 600 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference.svg" alt="Atazanavir_Goutelle2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (liters/h) | CL | 13.4 | liters/h | 24.9 (40.7% RSE) |
| BW (liters • h Ϫ1 • kg Ϫ1 ) b | CLnorm | 0.00936 | L/h/kg |  |
| V (liters) | V | 71.1 | liters | 47.0 (29.7% RSE) |
| Absorption lag time (h) | tlag | 0.9 | h |  |
| k a reg (h Ϫ1 ) | kabs | 1.0 | h Ϫ1 |  |
| F reg | equation variable | 1.0 |  |  |
| F low | Fab | 0.4 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.692). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atazanavir model's bioavailability F was left at a library default instead of an estimate from Goutelle_2013, so the record was held back for review.**

The record reports atazanavir clearance 13.4 L/h, volume 71.1 L, absorption lag 0.9 h, absorption rate constant 1.0 h⁻¹, and bioavailability Fab 0.4, but the F parameter used in the model was a default, not a value estimated in the paper. These default values affect the simulated concentration profile yet are not supported by this paper, so the deviation was judged not acceptable and the record needs review. Extracted — atazanavir: CL 13.4 liters/h, CLnorm 0.00936 L/h/kg, V 71.1 liters, tlag 0.9 h, kabs 1 h Ϫ1, Fab 0.4.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc 0-24: this record has none, the second reading 0.66; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (liters/h) | `Q22` · CL | 13.4 | liters/h | 3.722e-06 | m3/s | l/h | exact (1) | tab_1:row3:col1 | 24.9 (40.7% RSE) |
| BW (liters • h Ϫ1 • kg Ϫ1 ) b | `Q354` · CLnorm | 0.00936 | L/h/kg | 1.82e-07 | m3/s | L/h | llm (0.6) | tab_1:row4:col1 |  |
| V (liters) | `Q61` · V | 71.1 | liters | 0.0711 | m3 | l | exact (1) | tab_1:row5:col1 | 47.0 (29.7% RSE) |
| Absorption lag time (h) | `Q83` · tlag | 0.9 | h | 3240 | s | h | exact (1) | tab_1:row6:col1 |  |
| k a reg (h Ϫ1 ) | `Q49` · kabs | 1.0 | h Ϫ1 | 0.0002778 | 1/s | 1/h | llm (0.6) | tab_1:row7:col1 |  |
| F reg | `Q900` · equation variable | 1.0 |  |  |  |  | llm (0.6) | tab_1:row9:col1 |  |
| F low | `Q40` · Fab | 0.4 |  |  |  |  | llm (0.6) | tab_1:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'CL (liters/h)' routed out of structural estimates ('Interindividual')
- table section iiv: 'V (liters)' routed out of structural estimates ('Interindividual')
- table section iiv: 'k a reg (h Ϫ1 )' routed out of structural estimates ('Interindividual')
- table section iiv: 'k a low (h Ϫ1 )' routed out of structural estimates ('Interindividual')
- dropped duplicate Q49 ('k a low (h Ϫ1 )', value '0.4') — already have one for this compound
- dropped unlinked row (NIL): 'Proportion of regular absorbers' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1'])
- implicit units: 'BW (liters • h Ϫ1 • kg Ϫ1 ) b' → L/h/kg (from the paper text: 'Abstract states clearance was 13.4 liters/h; BW is the regression coefficient for the influence of body weight on ATV cl')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atazanavir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc 0-24]` |  | 0.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bw (liters • h ϫ1 • kg ϫ1 ) b]` | 0.00936 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c trough]` |  | 5.6E-6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f reg]` | 1.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_1:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.4 | ['tab_1:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.4 L/h | ['tab_1:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 71.1 L | ['tab_1:row5:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=atazanavir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_modelica.zip" download>Atazanavir_Goutelle2013_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_fmi.zip" download>Atazanavir_Goutelle2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_matlab.zip" download>Atazanavir_Goutelle2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_matlab_simbio.zip" download>Atazanavir_Goutelle2013_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_sbml.zip" download>Atazanavir_Goutelle2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_cellml.zip" download>Atazanavir_Goutelle2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7049 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 3240 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `Cl` | 3.722e-06 | m3/s |
| input | model | `VdPerKg` | 0.001016 | m3/kg |
| input | model | `ka` | 0.0002778 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Goutelle S, Baudry T, Gagnieu MC, Boibieux A, Livrozet JM, Peyramond D et al. Pharmacokinetic-pharmacodynamic modeling of unboosted Atazanavir in a cohort of stable HIV-infected patients. Antimicrobial agents and chemotherapy 57(1):517–523 (2013). [doi:10.1128/AAC.01822-12](https://doi.org/10.1128/AAC.01822-12)

**This record:** Pharmacolibrary v26.09, model `Atazanavir_Goutelle2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference>

```bibtex
@misc{pharmacolibrary_AtazanavirGoutelle2013reference,
  title  = {{Pharmacolibrary model Atazanavir_Goutelle2013_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference},
  note   = {Parameters from doi:10.1128/AAC.01822-12},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 1 /h, lag 54 min, F 0.9). Doses in the paper: 200, 300, 400, 600 mg.

<dbs-fmusim paramsurl="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference/Atazanavir_Goutelle2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Atazanavir_Goutelle2013_reference_params.json` · controls `Atazanavir_Goutelle2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batazanavir%5D%20Atazanavir_Goutelle2013_reference&body=Drug%3A%20atazanavir%0ARecord%3A%20Atazanavir_Goutelle2013_reference%0APaper%3A%20Goutelle_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atazanavir/Atazanavir_Goutelle2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:20 UTC</sub>
