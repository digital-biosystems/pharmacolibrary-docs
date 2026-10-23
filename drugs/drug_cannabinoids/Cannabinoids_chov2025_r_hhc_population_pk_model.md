<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;cannabinoids&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/&quot;},{&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025 \u00b7 r_hhc_population_pk_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cannabinoids_Harrison2022_reference&quot;,&quot;label&quot;:&quot;Harrison_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Harrison2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_Nachnani2024_reference&quot;,&quot;label&quot;:&quot;Nachnani_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Nachnani2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_chov2025_r_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_r_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cannabinoids_chov2025_s_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_s_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_s_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cannabinoids — `Cannabinoids_chov2025_r_hhc_population_pk_model`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> This record was reviewed on 2026-10-05 09:24 UTC (Needs review), but the paper was screened again on 2026-10-07 05:53 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="cannabinoids" model-id="Cannabinoids_chov2025_r_hhc_population_pk_model" status="extracted" stale="true" population="male Wistar rats" measured-compound="hexahydrocannabinol" parameterization="apparent" topology="1C"></div>

## Citation
Šíchová K, Mallarino B, Janečková L, Palivec P, Vágnerová M, Vejmola Č et al. Hexahydrocannabinol: pharmacokinetics, systemic toxicity, and acute behavioral effects in Wistar rats. The international journal of neuropsychopharmacology 28(8):pyaf041 (2025).
  ·  DOI: [10.1093/ijnp/pyaf041](https://doi.org/10.1093/ijnp/pyaf041)

## Population and dosing

**Population:** male Wistar rats · condition healthy · age group adult.

**Dosing:** 700 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model.svg" alt="Cannabinoids_chov2025_r_hhc_population_pk_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Tlag (h) | tlag | 0.49 | h |
| Ka (h−1) | kabs | 0.47 | h−1 |
| Vd/F (mL) | V/F | 1514.9 | mL |
| CL/F (mL/h) | CL/F | 2457.4 | mL/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hexahydrocannabinol record was held back because the model builder assumed F=1 and Fm=1 with no molar correction, making the reported V/F (1514.9 mL) and CL/F (2457.4 mL/h) apparent parameters, which the review deemed not acceptable.**

The record reports oral hexahydrocannabinol parameters in male Wistar rats with a one-compartment structure: tlag 0.49 h, kabs 0.47 h−1, V/F 1514.9 mL, and CL/F 2457.4 mL/h. The builder parameterized the model as apparent, substituting F=1 and Fm=1 without molar correction, so the volume and clearance values depend on an unverified bioavailability assumption. The failed check returned 'apparent_assumption: not acceptable', leading to the needs_review verdict. Extracted — hexahydrocannabinol: tlag 0.49 h, kabs 0.47 h−1, V/F 1.51e+03 mL, CL/F 2.46e+03 mL/h.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tlag (h) | `Q83` · tlag | 0.49 | h | 1764 | s | h | exact (1) | TB1:row2:col1, TB1:row2:col2 |
| Ka (h−1) | `Q49` · kabs | 0.47 | h−1 | 0.0001306 | 1/s | 1/h | exact (1) | TB1:row3:col1, TB1:row3:col2 |
| Vd/F (mL) | `Q76` · V/F | 1514.9 | mL | 0.001515 | m3 | ml | exact (1) | TB1:row4:col1, TB1:row4:col2 |
| CL/F (mL/h) | `Q27` · CL/F | 2457.4 | mL/h | 6.826e-07 | m3/s | ml/h | exact (1) | TB1:row5:col1, TB1:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=hexahydrocannabinol
- population split: 'r-hhc population pk model' subgroup of Šíchová_2025 (paper reports 2 populations: r-hhc population pk model, s-hhc population pk model)
- review gap-fill skipped: this record measures 'hexahydrocannabinol', not cannabinoids — the review values are the parent's

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['TB1:row5:col1', 'TB1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['TB1:row3:col1', 'TB1:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['TB1:row4:col1', 'TB1:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['TB1:row2:col1', 'TB1:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.46 L/h | ['TB1:row5:col1', 'TB1:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.51 L | ['TB1:row4:col1', 'TB1:row4:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=hexahydrocannabinol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_modelica.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_fmi.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_matlab.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_matlab_simbio.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_sbml.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_cellml.zip" download>Cannabinoids_chov2025_r_hhc_population_pk_model_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1764 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 6.826e-07 | m3/s |
| input | model | `VdPerKg` | 2.164e-05 | m3/kg |
| input | model | `ka` | 0.0001306 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Šíchová K, Mallarino B, Janečková L, Palivec P, Vágnerová M, Vejmola Č et al. Hexahydrocannabinol: pharmacokinetics, systemic toxicity, and acute behavioral effects in Wistar rats. The international journal of neuropsychopharmacology 28(8):pyaf041 (2025). [doi:10.1093/ijnp/pyaf041](https://doi.org/10.1093/ijnp/pyaf041)

**This record:** Pharmacolibrary v26.09, model `Cannabinoids_chov2025_r_hhc_population_pk_model`. <https://pharmacolibrary.github.io/#/drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model>

```bibtex
@misc{pharmacolibrary_Cannabinoidschov2025rhhcpopulationpkmodel,
  title  = {{Pharmacolibrary model Cannabinoids_chov2025_r_hhc_population_pk_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model},
  note   = {Parameters from doi:10.1093/ijnp/pyaf041},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 0.47 /h, lag 29.4 min, F 1). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model/Cannabinoids_chov2025_r_hhc_population_pk_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cannabinoids_chov2025_r_hhc_population_pk_model_params.json` · controls `Cannabinoids_chov2025_r_hhc_population_pk_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabinoids%5D%20Cannabinoids_chov2025_r_hhc_population_pk_model&body=Drug%3A%20cannabinoids%0ARecord%3A%20Cannabinoids_chov2025_r_hhc_population_pk_model%0APaper%3A%20%C5%A0%C3%ADchov%C3%A1_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:53 UTC</sub>
