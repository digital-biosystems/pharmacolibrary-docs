<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;Follitropin&quot;,&quot;href&quot;:&quot;drugs/drug_follitropin/&quot;},{&quot;label&quot;:&quot;Rose_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Follitropin_Rose2016_reference&quot;,&quot;label&quot;:&quot;Rose_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_follitropin/Follitropin_Rose2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Follitropin — `Follitropin_Rose2016_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="Follitropin" model-id="Follitropin_Rose2016_reference" status="curated_candidate" stale="false" population="gonadotropin downregulated healthy women" measured-compound="FSH" parameterization="apparent" topology="1C"></div>

## Citation
Rose TH, Röshammar D, Erichsen L, Grundemar L, Ottesen JT. Characterisation of Population Pharmacokinetics and Endogenous Follicle-Stimulating Hormone (FSH) Levels After Multiple Dosing of a Recombinant Human FSH (FE 999049) in Healthy Women. Drugs in R&D 16(2):165-172 (2016).
  ·  DOI: [10.1007/s40268-016-0126-z](https://doi.org/10.1007/s40268-016-0126-z)

## Population and dosing

**Population:** gonadotropin downregulated healthy women · condition healthy · age group adult · n = &gt;24.

**Dosing:** 225 IU, sc, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed FE 999049, measured FSH.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference.svg" alt="Follitropin_Rose2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 0.423 | L/h | 15.6 (None% RSE) |
| V/F (L) | V/F | 24.30 | L | 18.4 (None% RSE) |
| k tr (h−1) | ktr | 0.329 | h−1 | 83.4 (None% RSE) |
| k a (h−1) | kabs | 0.148 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has FE 999049, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.423 | L/h | 1.175e-07 | m3/s | l/h | exact (1) | Tab2:row1:col1 | 15.6 (None% RSE) |
| V/F (L) | `Q76` · V/F | 24.30 | L | 0.0243 | m3 | l | exact (1) | Tab2:row2:col1 | 18.4 (None% RSE) |
| k tr (h−1) | `Q306` · ktr | 0.329 | h−1 | 9.139e-05 | 1/s | 1/h | space_fold (0.95) | Tab2:row3:col1 | 83.4 (None% RSE) |
| k a (h−1) | `Q49` · kabs | 0.148 | h−1 | 4.111e-05 | 1/s | 1/h | space_fold (0.95) | Tab2:row4:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV CV%')
- table section iiv: 'V/F (L)' routed out of structural estimates ('IIV CV%')
- table section iiv: 'k tr (h−1)' routed out of structural estimates ('IIV CV%')
- table section iiv: 'FSHbl (µg/L)' routed out of structural estimates ('IIV CV%')
- dropped unlinked row (NIL): 'FSHbl (µg/L)' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- dropped unlinked row (NIL): 'Progblef' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1'])
- dropped unlinked row (NIL): 'InhBef' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=FSH
- molar mass: none found for 'follitropin' — its concentrations stay mass-only
- molar mass: none found for 'FSH' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '(3.9)'
- unparsed cell Tab2:row1:col4 = '(12.7)'
- unparsed cell Tab2:row2:col2 = '(4.6)'
- unparsed cell Tab2:row2:col4 = '(14.4)'
- unparsed cell Tab2:row3:col2 = '(17.0)'
- unparsed cell Tab2:row3:col4 = '(24.1)'
- unparsed cell Tab2:row4:col2 = '(13.2)'
- unparsed cell Tab2:row5:col2 = '(9.1)'
- unparsed cell Tab2:row5:col4 = '(16.5)'
- unparsed cell Tab2:row6:col2 = '(34.7)'
- unparsed cell Tab2:row7:col2 = '(37.2)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[fshbl]` |  | 0.162 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | FE 999049 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | FSH | unknown | mismatch |

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
| C1_half_life_beta | pass | 40 | 39.82 | 0.9955 | 0.25 | reported t½β |
| C2_base_Q27 | pass | 0.423 | 0.423 | 1 | 0.05 | footnote reference category |
| C2_base_Q76 | pass | 24.3 | 24.3 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row1:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  |  |  | ['Tab2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab2:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tab2:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.423 L/h |  |  | ['Tab2:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 24.3 L |  |  | ['Tab2:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=FSH) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 40 | 39.81 | 0.9952 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_modelica.zip" download>Follitropin_Rose2016_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_fmi.zip" download>Follitropin_Rose2016_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_matlab.zip" download>Follitropin_Rose2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_matlab_simbio.zip" download>Follitropin_Rose2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_sbml.zip" download>Follitropin_Rose2016_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_cellml.zip" download>Follitropin_Rose2016_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.175e-07 | m3/s |
| input | model | `VdPerKg` | 0.0003471 | m3/kg |
| input | model | `ka` | 4.111e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Rose TH, Röshammar D, Erichsen L, Grundemar L, Ottesen JT. Characterisation of Population Pharmacokinetics and Endogenous Follicle-Stimulating Hormone (FSH) Levels After Multiple Dosing of a Recombinant Human FSH (FE 999049) in Healthy Women. Drugs in R&D 16(2):165-172 (2016). [doi:10.1007/s40268-016-0126-z](https://doi.org/10.1007/s40268-016-0126-z)

**This record:** Pharmacolibrary v26.09, model `Follitropin_Rose2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_follitropin/Follitropin_Rose2016_reference>

```bibtex
@misc{pharmacolibrary_FollitropinRose2016reference,
  title  = {{Pharmacolibrary model Follitropin_Rose2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_follitropin/Follitropin_Rose2016_reference},
  note   = {Parameters from doi:10.1007/s40268-016-0126-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.148 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_follitropin/Follitropin_Rose2016_reference/Follitropin_Rose2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Follitropin_Rose2016_reference_params.json` · controls `Follitropin_Rose2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfollitropin%5D%20Follitropin_Rose2016_reference&body=Drug%3A%20follitropin%0ARecord%3A%20Follitropin_Rose2016_reference%0APaper%3A%20Rose_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_follitropin/Follitropin_Rose2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:53 UTC</sub>
