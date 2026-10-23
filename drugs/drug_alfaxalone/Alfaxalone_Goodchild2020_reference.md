<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;alfaxalone&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/&quot;},{&quot;label&quot;:&quot;Goodchild_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alfaxalone_Goodchild2020_reference&quot;,&quot;label&quot;:&quot;Goodchild_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Alfaxalone_Shippy2023_reference&quot;,&quot;label&quot;:&quot;Shippy_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_Shippy2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfaxalone_White2022_adjusted_typical_values&quot;,&quot;label&quot;:&quot;White_2022_adjusted_typical_values&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_White2022_adjusted_typical_values.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfaxalone_White2022_adjusted_typical_values_a&quot;,&quot;label&quot;:&quot;White_2022_adjusted_typical_values_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_White2022_adjusted_typical_values_a.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfaxalone_White2022_female&quot;,&quot;label&quot;:&quot;White_2022_female&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_White2022_female.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alfaxalone_White2022_p_value&quot;,&quot;label&quot;:&quot;White_2022_p_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alfaxalone/Alfaxalone_White2022_p_value.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alfaxalone — `Alfaxalone_Goodchild2020_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="alfaxalone" model-id="Alfaxalone_Goodchild2020_reference" status="accepted_with_caveats" stale="false" population="healthy male volunteers" measured-compound="alfaxalone" parameterization="mechanistic" topology="2C"></div>

## Citation
Goodchild CS, Serrao JM, Sear JW, Anderson BJ. Pharmacokinetic and Pharmacodynamic Analysis of Alfaxalone Administered as a Bolus Intravenous Injection of Phaxan in a Phase 1 Randomized Trial. Anesthesia and analgesia 130(3):704–714 (2020).
  ·  DOI: [10.1213/ANE.0000000000004204](https://doi.org/10.1213/ANE.0000000000004204)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = &gt;= 12.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference.svg" alt="Alfaxalone_Goodchild2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 1.08 | L/min |
| central volume of distribution (V1) | V1 | 0.99 | L |
| intercompartment CLs (Q2) | Q2 | 0.87 | L/min |
| Q3 | Q3 | 0.46 | L/min |
| peripheral volumes of distribution (V2) | V2 | 6.36 | L |
| V3 | V3 | 19.1 | L |
| time to a BIS 50 | tmax | 0.94 | minutes |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.467). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of central volume of distribution: this record has 0.99, the second reading none; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 1.08 | L/min | 1.8e-05 | m3/s | l/min | exact (1) | Goodchild_2020:abstract |
| central volume of distribution (V1) | `Q63` · V1 | 0.99 | L | 0.00099 | m3 | l | boundary_compartment (0.9) | Goodchild_2020:abstract |
| intercompartment CLs (Q2) | `Q99` · Q2 | 0.87 | L/min | 1.45e-05 | m3/s | l/min | llm (0.6) | Goodchild_2020:abstract |
| Q3 | `Q308` · Q3 | 0.46 | L/min | 7.667e-06 | m3/s | l/min | exact (1) | Goodchild_2020:abstract |
| peripheral volumes of distribution (V2) | `Q64` · V2 | 6.36 | L | 0.00636 | m3 | l | llm (0.6) | Goodchild_2020:abstract |
| V3 | `Q77` · V3 | 19.1 | L | 0.0191 | m3 | l | exact (1) | Goodchild_2020:abstract |
| time to a BIS 50 | `Q56` · tmax | 0.94 | minutes | 56.4 | s | min | llm (0.6) | Goodchild_2020:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'baseline BIS' — extend the ontology if this is a real PK parameter (source ['Goodchild_2020:abstract'])
- dropped PD-category row 'EMAX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Goodchild_2020:abstract'])
- covariate category for EC50 from footnote/prose kept as documentation only (['Goodchild_2020:abstract'])
- dropped PD-category row 'Hill coefficient (γ)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Goodchild_2020:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alfaxalone
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Goodchild_2020_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.467 (7/15 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 0.99 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartment cls]` | 0.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volumes of distribution]` | 6.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2]` |  | 0.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to a bis 50]` | 0.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 0.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 6.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ]` |  | 12.1 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Goodchild_2020:abstract'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Goodchild_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.08 | ['Goodchild_2020:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 64.8 L/h | ['Goodchild_2020:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.99 L | ['Goodchild_2020:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.36 L | ['Goodchild_2020:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=alfaxalone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_modelica.zip" download>Alfaxalone_Goodchild2020_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_fmi.zip" download>Alfaxalone_Goodchild2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_matlab.zip" download>Alfaxalone_Goodchild2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_matlab_simbio.zip" download>Alfaxalone_Goodchild2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_sbml.zip" download>Alfaxalone_Goodchild2020_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_cellml.zip" download>Alfaxalone_Goodchild2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3325 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.8e-05 | m3/s |
| input | model | `VdPerKg` | 1.414e-05 | m3/kg |
| input | model | `k12` | 0.01465 | 1/s |
| input | model | `k21` | 0.00228 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Goodchild CS, Serrao JM, Sear JW, Anderson BJ. Pharmacokinetic and Pharmacodynamic Analysis of Alfaxalone Administered as a Bolus Intravenous Injection of Phaxan in a Phase 1 Randomized Trial. Anesthesia and analgesia 130(3):704–714 (2020). [doi:10.1213/ANE.0000000000004204](https://doi.org/10.1213/ANE.0000000000004204)

**This record:** Pharmacolibrary v26.09, model `Alfaxalone_Goodchild2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference>

```bibtex
@misc{pharmacolibrary_AlfaxaloneGoodchild2020reference,
  title  = {{Pharmacolibrary model Alfaxalone_Goodchild2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference},
  note   = {Parameters from doi:10.1213/ANE.0000000000004204},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference/Alfaxalone_Goodchild2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Alfaxalone_Goodchild2020_reference_params.json` · controls `Alfaxalone_Goodchild2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balfaxalone%5D%20Alfaxalone_Goodchild2020_reference&body=Drug%3A%20alfaxalone%0ARecord%3A%20Alfaxalone_Goodchild2020_reference%0APaper%3A%20Goodchild_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alfaxalone/Alfaxalone_Goodchild2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:01 UTC</sub>
