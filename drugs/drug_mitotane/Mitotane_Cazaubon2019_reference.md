<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;mitotane&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/&quot;},{&quot;label&quot;:&quot;Cazaubon_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitotane_Cazaubon2019_reference&quot;,&quot;label&quot;:&quot;Cazaubon_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Cazaubon2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Mitotane_Kerkhofs2015_reference&quot;,&quot;label&quot;:&quot;Kerkhofs_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitotane/Mitotane_Kerkhofs2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitotane — `Mitotane_Cazaubon2019_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="mitotane" model-id="Mitotane_Cazaubon2019_reference" status="curated_candidate" stale="false" population="adults with adrenocortical carcinoma" measured-compound="mitotane" parameterization="mechanistic" topology="1C"></div>

## Citation
Cazaubon Y, Talineau Y, Feliu C, Konecki C, Russello J, Mathieu O et al. Population Pharmacokinetics Modelling and Simulation of Mitotane in Patients with Adrenocortical Carcinoma: An Individualized Dose Regimen to Target All Patients at Three Months?. Pharmaceutics 11(11) (2019).
  ·  DOI: [10.3390/pharmaceutics11110566](https://doi.org/10.3390/pharmaceutics11110566)

## Population and dosing

**Population:** adults with adrenocortical carcinoma · condition adrenocortical carcinoma · age group adult · n = 38.

**Dosing:** 3000, 6000, 9000, 12000 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference.svg" alt="Mitotane_Cazaubon2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka (day−1) | kabs | 24 | day−1 |  |  |
| F (%) | Fab | 35 |  |  |  |
| V (L) | V | 8900 | L | 18.2 |  |
| Cl (L·day−1) | CL | 70 | L·day−1 | 6.64 | 29.3 (16.7% RSE) |
| βlcat2 * | equation variable | 1.12 |  | 20.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mitotane, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (day−1) | `Q49` · kabs | 24 | day−1 | 0.0002778 | 1/s | 1/d |  | exact (1) | pharmaceutics-11-00566-t002:row2:col1 |  |
| F (%) | `Q40` · Fab | 35 |  |  |  |  |  | exact (1) | pharmaceutics-11-00566-t002:row3:col1 |  |
| V (L) | `Q61` · V | 8900 | L | 8.9 | m3 | l | 18.2 | exact (1) | pharmaceutics-11-00566-t002:row4:col1 |  |
| Cl (L·day−1) | `Q22` · CL | 70 | L·day−1 | 8.102e-07 | m3/s | l/d | 6.64 | exact (1) | pharmaceutics-11-00566-t002:row5:col1 | 29.3 (16.7% RSE) |
| βlcat2 * | `Q900` · equation variable | 1.12 |  |  |  |  | 20.1 | llm (0.6) | pharmaceutics-11-00566-t002:row6:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'ω V(%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'ω Cl (%)' routed out of structural estimates ('Between-subject variability')
- table section residual_error: 'a (constant)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'b (proportional)' routed out of structural estimates ('Residual variability')
- column 'value (rse %)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'βHDL **' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00566-t002:row7:col1'])
- dropped unlinked row (NIL): 'βTg ***' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00566-t002:row8:col1'])
- dropped unlinked row (NIL): 'plcat_1' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00566-t002:row16:col1'])
- dropped unlinked row (NIL): 'plcat_2' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00566-t002:row17:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mitotane
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-11-00566-t002:row4:col2 = '9245 (6346–13467)'
- unparsed cell pharmaceutics-11-00566-t002:row5:col2 = '68.4 (59.3–78.9)'
- unparsed cell pharmaceutics-11-00566-t002:row6:col2 = '1.12 (0.68–1.56)'
- unparsed cell pharmaceutics-11-00566-t002:row7:col2 = '−0.334 (−0.644–−0.024)'
- unparsed cell pharmaceutics-11-00566-t002:row8:col2 = '−0.516 (−0.779–−0.253)'
- unparsed cell pharmaceutics-11-00566-t002:row10:col2 = '89 (61–125)'
- unparsed cell pharmaceutics-11-00566-t002:row11:col2 = '27.6 (19.6–39.1)'
- unparsed cell pharmaceutics-11-00566-t002:row13:col2 = '1.05 (0.78–1.34)'
- unparsed cell pharmaceutics-11-00566-t002:row14:col2 = '0.17 (0.14–0.20)'
- unparsed cell pharmaceutics-11-00566-t002:row16:col2 = '0.875 (0.750–1.02)'
- unparsed cell pharmaceutics-11-00566-t002:row17:col2 = '0.125 (0.01–0.25)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[βlcat2 *]` | 1.12 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mitotane | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mitotane | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-11-00566-t002:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-11-00566-t002:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pharmaceutics-11-00566-t002:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 70 | ['pharmaceutics-11-00566-t002:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.92 L/h | ['pharmaceutics-11-00566-t002:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.9e+03 L | ['pharmaceutics-11-00566-t002:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=mitotane) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_modelica.zip" download>Mitotane_Cazaubon2019_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_fmi.zip" download>Mitotane_Cazaubon2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_matlab.zip" download>Mitotane_Cazaubon2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_matlab_simbio.zip" download>Mitotane_Cazaubon2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_sbml.zip" download>Mitotane_Cazaubon2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_cellml.zip" download>Mitotane_Cazaubon2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.32 | kg/mol |
| input | dosing | `F` | 35 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.003 | kg |
| input | model | `Cl` | 8.102e-07 | m3/s |
| input | model | `VdPerKg` | 0.1271 | m3/kg |
| input | model | `ka` | 0.0002778 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cazaubon Y, Talineau Y, Feliu C, Konecki C, Russello J, Mathieu O et al. Population Pharmacokinetics Modelling and Simulation of Mitotane in Patients with Adrenocortical Carcinoma: An Individualized Dose Regimen to Target All Patients at Three Months?. Pharmaceutics 11(11) (2019). [doi:10.3390/pharmaceutics11110566](https://doi.org/10.3390/pharmaceutics11110566)

**This record:** Pharmacolibrary v26.09, model `Mitotane_Cazaubon2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_mitotane/Mitotane_Cazaubon2019_reference>

```bibtex
@misc{pharmacolibrary_MitotaneCazaubon2019reference,
  title  = {{Pharmacolibrary model Mitotane_Cazaubon2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_mitotane/Mitotane_Cazaubon2019_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics11110566},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3000 mg, single dose, first-order absorption (ka 1 /h, F 35). Doses in the paper: 3000, 6000, 9000, 12000 mg.

<dbs-fmusim paramsurl="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_mitotane/Mitotane_Cazaubon2019_reference/Mitotane_Cazaubon2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Mitotane_Cazaubon2019_reference_params.json` · controls `Mitotane_Cazaubon2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitotane%5D%20Mitotane_Cazaubon2019_reference&body=Drug%3A%20mitotane%0ARecord%3A%20Mitotane_Cazaubon2019_reference%0APaper%3A%20Cazaubon_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitotane/Mitotane_Cazaubon2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:06 UTC</sub>
