<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pentabromodiphenyl ethers&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/&quot;},{&quot;label&quot;:&quot;Liu_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PentabromodiphenylEthers_Cary2013_reference&quot;,&quot;label&quot;:&quot;Cary_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Cary2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PentabromodiphenylEthers_Liu2011_reference&quot;,&quot;label&quot;:&quot;Liu_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;PentabromodiphenylEthers_Drouillard2007_reference&quot;,&quot;label&quot;:&quot;Drouillard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Drouillard2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pentabromodiphenyl ethers — `PentabromodiphenylEthers_Liu2011_reference`

> ## <span class="pk-badge pk-badge--blue" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<div class="pk-model-meta" hidden drug="Pentabromodiphenyl ethers" model-id="PentabromodiphenylEthers_Liu2011_reference" status="simulated" stale="false" population="wild adult frogs (Rana limnocharis) from an e-waste recycling site in China" measured-compound="PBDE congeners including BDE-47, BDE-99, BDE-153" parameterization="mechanistic" topology="retention"></div>

## Citation
Liu PY, Du GD, Zhao YX, Mu YS, Zhang AQ, Qin ZF et al. Bioaccumulation, maternal transfer and elimination of polybrominated diphenyl ethers in wild frogs. Chemosphere 84(7):972–978 (2011).
  ·  DOI: [10.1016/j.chemosphere.2011.05.042](https://doi.org/10.1016/j.chemosphere.2011.05.042)

## Population and dosing

**Population:** wild adult frogs (Rana limnocharis) from an e-waste recycling site in China · condition chronic environmental exposure (e-waste recycling site) followed by 54-day lab depuration · age group adult.

**Dosed compound ≠ measured compound:** dosed Pentabromodiphenyl ethers (PBDEs, environmental exposure), measured PBDE congeners including BDE-47, BDE-99, BDE-153.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| The half-life of ∑PBDEs | t1/2z | 35 | days |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is pentabromodiphenyl ethers's own; they describe PBDE congeners including BDE-47, BDE-99, BDE-153.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Pentabromodiphenyl ethers (PBDEs, environmental exposure), the second reading Pentabromodiphenyl ethers (PBDEs); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The half-life of ∑PBDEs | `Q57` · t1/2z | 35 | days | 3.024e+06 | s | d | llm (0.6) | Liu_2011:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / The half-life of ∑PBDEs (Q57)

**Interpretation flags:**
- covariate category for t1/2z from footnote/prose kept as documentation only (['Liu_2011:abstract'])
- dropped duplicate Q57 ('half-life', value '58.5') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=PBDE congeners including BDE-47, BDE-99, BDE-153
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- molar mass: none found for 'PBDE congeners including BDE-47, BDE-99, BDE-153' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'PBDE congeners including BDE-47, BDE-99, BDE-153', not pentabromodiphenyl_ethers — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Liu_2011_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[depuration period]` |  | 54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[the half-life of ∑pbdes]` | 35 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Pentabromodiphenyl ethers (PBDEs, environmental exposure) | Pentabromodiphenyl ethers (PBDEs) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | PBDE congeners including BDE-47, BDE-99, BDE-153 | Pentabromodiphenyl ethers (PBDEs) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Liu_2011:abstract'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | retainedFraction (measured=PBDE congeners including BDE-47, BDE-99, BDE-153) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_modelica.zip" download>PentabromodiphenylEthers_Liu2011_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_fmi.zip" download>PentabromodiphenylEthers_Liu2011_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_matlab.zip" download>PentabromodiphenylEthers_Liu2011_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_sbml.zip" download>PentabromodiphenylEthers_Liu2011_reference_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_cellml.zip" download>PentabromodiphenylEthers_Liu2011_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3.024e+06 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Liu PY, Du GD, Zhao YX, Mu YS, Zhang AQ, Qin ZF et al. Bioaccumulation, maternal transfer and elimination of polybrominated diphenyl ethers in wild frogs. Chemosphere 84(7):972–978 (2011). [doi:10.1016/j.chemosphere.2011.05.042](https://doi.org/10.1016/j.chemosphere.2011.05.042)

**This record:** Pharmacolibrary, model `PentabromodiphenylEthers_Liu2011_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference>

```bibtex
@misc{pharmacolibrary_PentabromodiphenylEthersLiu2011reference,
  title  = {{Pharmacolibrary model PentabromodiphenylEthers_Liu2011_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference},
  note   = {Parameters from doi:10.1016/j.chemosphere.2011.05.042},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference/PentabromodiphenylEthers_Liu2011_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `PentabromodiphenylEthers_Liu2011_reference_params.json` · controls `PentabromodiphenylEthers_Liu2011_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentabromodiphenyl_ethers%5D%20PentabromodiphenylEthers_Liu2011_reference&body=Drug%3A%20pentabromodiphenyl_ethers%0ARecord%3A%20PentabromodiphenylEthers_Liu2011_reference%0APaper%3A%20Liu_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pentabromodiphenyl_ethers/PentabromodiphenylEthers_Liu2011_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:20 UTC</sub>
