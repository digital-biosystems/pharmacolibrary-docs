<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluoxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/&quot;},{&quot;label&quot;:&quot;Sagah\u00f3n-Az\u00faa_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Bolo2000_reference&quot;,&quot;label&quot;:&quot;Bolo_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Bolo2000_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Moraes1999_reference&quot;,&quot;label&quot;:&quot;Moraes_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Moraes1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Eugene2021_reference&quot;,&quot;label&quot;:&quot;Eugene_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Eugene2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_SagahnAza2021_reference&quot;,&quot;label&quot;:&quot;Sagah\u00f3n-Az\u00faa_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluoxetine — `Fluoxetine_SagahnAza2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 44.6, model 53.8); f use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="Fluoxetine" model-id="Fluoxetine_SagahnAza2021_reference" status="needs_review" stale="false" population="Mexican patients with mental disorders treated with fluoxetine" measured-compound="Fluoxetine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sagahón-Azúa J, Medellín-Garibay SE, Chávez-Castillo CE, González-Salinas CG, Milán-Segovia RDC, Romano-Moreno S. Factors associated with fluoxetine and norfluoxetine plasma concentrations and clinical response in Mexican patients with mental disorders. Pharmacology research & perspectives 9(5):e00864 (2021).
  ·  DOI: [10.1002/prp2.864](https://doi.org/10.1002/prp2.864)

## Population and dosing

**Population:** Mexican patients with mental disorders treated with fluoxetine · condition psychiatric patients under chronic fluoxetine treatment · age group adult · n = 81.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference.svg" alt="Fluoxetine_SagahnAza2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka, h−1 | kabs | 0.3 | h−1 |  |
| CL, L/h | CL | 8.31 | L/h | 87.40 (None% RSE) |
| Vd , L | V | 645 | L |  |
| Fm, % | fm | 7.61 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 44.6, model 53.8); f use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — fluoxetine: kabs 0.3 h−1, CL 8.31 L/h, V 645 L, fm 7.61.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading fluoxetine → norfluoxetine (metabolism); it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka, h−1 | `Q49` · kabs | 0.3 | h−1 | 8.333e-05 | 1/s | 1/h | exact (1) | prp2864-tbl-0002:row2:col1, prp2864-tbl-0002:row8:col1 |  |
| CL, L/h | `Q22` · CL | 8.31 | L/h | 2.308e-06 | m3/s | l/h | exact (1) | prp2864-tbl-0002:row3:col1, prp2864-tbl-0002:row9:col1 | 87.40 (None% RSE) |
| Vd , L | `Q61` · V | 645 | L | 0.645 | m3 | l | exact (1) | prp2864-tbl-0002:row4:col1, prp2864-tbl-0002:row10:col1 |  |
| Fm, % | `Q45` · fm | 7.61 |  | 0.0761 |  |  | llm_confirmed (0.6) | prp2864-tbl-0002:row11:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'initial estimates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Ka, h−1'; source reconciliation required
- table representations disagree for 'CL, L/h'; source reconciliation required
- table representations disagree for 'Vd , L'; source reconciliation required
- table representations disagree for 'ω CL, %'; source reconciliation required
- table representations disagree for 'σ, ng/ml (additive)'; source reconciliation required
- table representations disagree for 'Fm, %'; source reconciliation required
- table representations disagree for 'ω CL, CV%'; source reconciliation required
- 'Fm, %' → Q45: printed without a unit and above 1 — read as a percentage
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL, L/h); Q61 (Vd , L)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Fluoxetine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/7 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Norfluoxetine' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table prp2864-tbl-0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['fluoxetine', 'norfluoxetine', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 8.31 | 0.873 | mismatch |
| `gpt-oss:120b` | `parameters[vd].value` | 645 | 41.5 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 44.6 | 53.8 | 1.206 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['prp2864-tbl-0002:row3:col1', 'prp2864-tbl-0002:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['prp2864-tbl-0002:row2:col1', 'prp2864-tbl-0002:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['prp2864-tbl-0002:row4:col1', 'prp2864-tbl-0002:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.31 |  |  | ['prp2864-tbl-0002:row3:col1', 'prp2864-tbl-0002:row9:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.31 L/h |  |  | ['prp2864-tbl-0002:row3:col1', 'prp2864-tbl-0002:row9:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 645 L |  |  | ['prp2864-tbl-0002:row4:col1', 'prp2864-tbl-0002:row10:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=Fluoxetine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | pass | 44.6 | 53.79 | 1.206 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 31.3 | 53.79 | 1.718 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 26 | 53.79 | 2.069 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_modelica.zip" download>Fluoxetine_SagahnAza2021_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_fmi.zip" download>Fluoxetine_SagahnAza2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_matlab.zip" download>Fluoxetine_SagahnAza2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_matlab_simbio.zip" download>Fluoxetine_SagahnAza2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_sbml.zip" download>Fluoxetine_SagahnAza2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_cellml.zip" download>Fluoxetine_SagahnAza2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3093 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `Cl` | 2.308e-06 | m3/s |
| input | model | `VdPerKg` | 0.009214 | m3/kg |
| input | model | `ka` | 8.333e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sagahón-Azúa J, Medellín-Garibay SE, Chávez-Castillo CE, González-Salinas CG, Milán-Segovia RDC, Romano-Moreno S. Factors associated with fluoxetine and norfluoxetine plasma concentrations and clinical response in Mexican patients with mental disorders. Pharmacology research & perspectives 9(5):e00864 (2021). [doi:10.1002/prp2.864](https://doi.org/10.1002/prp2.864)

**This record:** Pharmacolibrary, model `Fluoxetine_SagahnAza2021_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference>

```bibtex
@misc{pharmacolibrary_FluoxetineSagahnAza2021reference,
  title  = {{Pharmacolibrary model Fluoxetine_SagahnAza2021_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference},
  note   = {Parameters from doi:10.1002/prp2.864},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.3 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 20 mg oral (N06AB03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference/Fluoxetine_SagahnAza2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fluoxetine_SagahnAza2021_reference_params.json` · controls `Fluoxetine_SagahnAza2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluoxetine%5D%20Fluoxetine_SagahnAza2021_reference&body=Drug%3A%20fluoxetine%0ARecord%3A%20Fluoxetine_SagahnAza2021_reference%0APaper%3A%20Sagah%C3%B3n-Az%C3%BAa_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:29 UTC</sub>
