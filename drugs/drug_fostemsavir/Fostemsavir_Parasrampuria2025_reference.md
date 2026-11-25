<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fostemsavir&quot;,&quot;href&quot;:&quot;drugs/drug_fostemsavir/&quot;},{&quot;label&quot;:&quot;Parasrampuria_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fostemsavir_Parasrampuria2025_reference&quot;,&quot;label&quot;:&quot;Parasrampuria_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fostemsavir — `Fostemsavir_Parasrampuria2025_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="fostemsavir" model-id="Fostemsavir_Parasrampuria2025_reference" status="simulated" stale="false" population="treatment-experienced HIV patients" measured-compound="temsavir" parameterization="apparent" topology="1C"></div>

## Citation
Parasrampuria R, Thakkar N, Moore K, Ackerman P, Magee M. Population pharmacokinetics and exposure-response relationship for temsavir following fostemsavir administration in treatment-experienced HIV patients. Pharmacology research & perspectives 13(3):e70023 (2025).
  ·  DOI: [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023)

## Population and dosing

**Population:** treatment-experienced HIV patients · condition HIV-1 infection · age group adult.

**Dosing:** 600 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed fostemsavir, measured temsavir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference/Fostemsavir_Parasrampuria2025_reference.svg" alt="Fostemsavir_Parasrampuria2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CLm/F | 51.0 | L/h | 2.16 |
| V2/F (L) | V1/F | 257 | L | 3.18 |
| Q/F (L/h) | Q/F | 2.58 | L/h | 7.13 |
| V3/F (L) | V2/F | 37.4 | L | 3.95 |
| Ka (1/h) | kabs | 2.33 | 1/h | 13.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.933), qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Simulated: every check that could be run on this record passed; no value reported in the paper was compared with the simulation.**

None of the extracted parameters is fostemsavir's own; they describe temsavir.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dur: this record has none, the second reading 3.84. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q351` · CLm/F | 51.0 | L/h | 1.417e-05 | m3/s | l/h | 2.16 | exact (1) | prp270023-tbl-0002:row1:col1 |
| V2/F (L) | `Q290` · V1/F | 257 | L | 0.257 | m3 | l | 3.18 | exact (1) | prp270023-tbl-0002:row2:col1 |
| Q/F (L/h) | `Q69` · Q/F | 2.58 | L/h | 7.167e-07 | m3/s | l/h | 7.13 | exact (1) | prp270023-tbl-0002:row3:col1 |
| V3/F (L) | `Q82` · V2/F | 37.4 | L | 0.0374 | m3 | l | 3.95 | exact (1) | prp270023-tbl-0002:row4:col1 |
| Ka (1/h) | `Q49` · kabs | 2.33 | 1/h | 0.0006472 | 1/s | 1/h | 13.3 | exact (1) | prp270023-tbl-0002:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'DUR (h)' — extend the ontology if this is a real PK parameter (source ['prp270023-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Effect of CYP3A Inducer on CL/F' — extend the ontology if this is a real PK parameter (source ['prp270023-tbl-0002:row7:col1'])
- dropped duplicate Q27 ('Effect of CYP3A Inhibitor on CL/F', value '0.721') — already have one for this compound
- dropped unlinked row (NIL): 'BSC (CL/F, V2/F)' — extend the ontology if this is a real PK parameter (source ['prp270023-tbl-0002:row14:col1'])
- metabolite temsavir: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=temsavir
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles: 2 per-group rows of temsavir covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 5 linked by role
- review gap-fill skipped: this record measures 'temsavir', not fostemsavir — the review values are the parent's

**Extraction notes:**
- table prp270023-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.933 (14/15 fields) | 1 |
| `qwen3.8-27b` | confirmed | 1.0 (14/14 fields) | none |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dur]` |  | 3.84 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['prp270023-tbl-0002:row2:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['prp270023-tbl-0002:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp270023-tbl-0002:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['prp270023-tbl-0002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['prp270023-tbl-0002:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 257 L | ['prp270023-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 37.4 L | ['prp270023-tbl-0002:row4:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=temsavir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict partial; agreement 0.933 (14 of 15 compared fields agree, 1 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.933 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference/Fostemsavir_Parasrampuria2025_reference_modelica.zip" download>Fostemsavir_Parasrampuria2025_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference/Fostemsavir_Parasrampuria2025_reference_fmi.zip" download>Fostemsavir_Parasrampuria2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4735 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0006 | kg |
| input | model | `Cl` | 1.417e-05 | m3/s |
| input | model | `VdPerKg` | 0.003671 | m3/kg |
| input | model | `ka` | 0.0006472 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Parasrampuria R, Thakkar N, Moore K, Ackerman P, Magee M. Population pharmacokinetics and exposure-response relationship for temsavir following fostemsavir administration in treatment-experienced HIV patients. Pharmacology research & perspectives 13(3):e70023 (2025). [doi:10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023)

**This record:** Pharmacolibrary, model `Fostemsavir_Parasrampuria2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference>

```bibtex
@misc{pharmacolibrary_FostemsavirParasrampuria2025reference,
  title  = {{Pharmacolibrary model Fostemsavir_Parasrampuria2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference},
  note   = {Parameters from doi:10.1002/prp2.70023},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 2.33 /h, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference/Fostemsavir_Parasrampuria2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference/Fostemsavir_Parasrampuria2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fostemsavir_Parasrampuria2025_reference_params.json` · controls `Fostemsavir_Parasrampuria2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfostemsavir%5D%20Fostemsavir_Parasrampuria2025_reference&body=Drug%3A%20fostemsavir%0ARecord%3A%20Fostemsavir_Parasrampuria2025_reference%0APaper%3A%20Parasrampuria_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:28 UTC</sub>
