<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;2,4,6-Trinitrotoluene&quot;,&quot;href&quot;:&quot;drugs/toxin_246_trinitrotoluene/&quot;},{&quot;label&quot;:&quot;Lotufo_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_246Trinitrotoluene_Lotufo2005_reference&quot;,&quot;label&quot;:&quot;Lotufo_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;D_246Trinitrotoluene_Lotufo2015_reference&quot;,&quot;label&quot;:&quot;Lotufo_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_246Trinitrotoluene_Belden2011_reference&quot;,&quot;label&quot;:&quot;Belden_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Belden2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 2,4,6-Trinitrotoluene — `D_246Trinitrotoluene_Lotufo2005_reference`

> ## <span class="pk-badge pk-badge--blue" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<div class="pk-model-meta" hidden drug="2,4,6-Trinitrotoluene" model-id="D_246Trinitrotoluene_Lotufo2005_reference" status="simulated" stale="false" population="Juvenile sheepshead minnows" measured-compound="2,4,6-Trinitrotoluene" parameterization="mechanistic" topology="retention"></div>

## Citation
Lotufo GR, Lydy MJ. Comparative toxicokinetics of explosive compounds in sheepshead minnows. Archives of environmental contamination and toxicology 49(2):206–214 (2005).
  ·  DOI: [10.1007/s00244-004-0197-7](https://doi.org/10.1007/s00244-004-0197-7)

## Population and dosing

**Population:** Juvenile sheepshead minnows · age group child.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| rates of metabolite formation | kfm | 0.06 | h(-1) |
| elimination | kel | 0.16 | h(-1) |
| rate of elimination of the parent compound | kel | 0.8 | h(-1) |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. Only the abstract was available, so reported summary statistics stand in for a fitted model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| rates of metabolite formation | `Q305` · kfm | 0.06 | h(-1) | 1.667e-05 | 1/s | 1/h | exact (1) | Lotufo_2005:abstract |
| elimination | `Q47` · kel | 0.16 | h(-1) | 4.444e-05 | 1/s | 1/h | exact (1) | Lotufo_2005:abstract |
| rate of elimination of the parent compound | `Q47` · kel | 0.8 | h(-1) | 0.0002222 | 1/s | 1/h | llm (0.6) | Lotufo_2005:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from elimination (Q47)

**Interpretation flags:**
- dropped unlinked row (NIL): 'BCFs for TNT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'BCFs for 2-ADNT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'BCFs for 2,4-DANT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'BCFs for RDX' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'BCFs for HMX' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'log K(ow) for TNT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'log K(ow) for 2-ADNT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'log K(ow) for 2,4-DANT' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'log K(ow) for RDX' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- dropped unlinked row (NIL): 'log K(ow) for HMX' — extend the ontology if this is a real PK parameter (source ['Lotufo_2005:abstract'])
- covariate category for kuptake from footnote/prose kept as documentation only (['Lotufo_2005:abstract'])
- covariate category for kel from footnote/prose kept as documentation only (['Lotufo_2005:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2,4,6-Trinitrotoluene
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 8 linked by role; re-tagged 2,4,6-Trinitrotoluene→parent ×5, 2,4,6-Trinitrotoluene→2-aminodinitrotoluene ×6, 2,4,6-Trinitrotoluene→2,4-diaminonitrotoluene ×4
- molar mass: no plausible PubChem entry for '2-aminodinitrotoluene' ('2-aminodinitrotoluene') — left in mass units
- molar mass: no plausible PubChem entry for '2,4-diaminonitrotoluene' ('2,4-diaminonitrotoluene') — left in mass units
- molar mass: none found for '2-aminodinitrotoluene' — its concentrations stay mass-only
- molar mass: none found for '2,4-diaminonitrotoluene' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lotufo_2005_metadata.yaml (23 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
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
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Lotufo_2005:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lotufo_2005:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Lotufo_2005:abstract'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | retainedFraction (measured=2,4,6-Trinitrotoluene) | retainedFraction | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_modelica.zip" download>D_246Trinitrotoluene_Lotufo2005_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_fmi.zip" download>D_246Trinitrotoluene_Lotufo2005_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_matlab.zip" download>D_246Trinitrotoluene_Lotufo2005_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_sbml.zip" download>D_246Trinitrotoluene_Lotufo2005_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_cellml.zip" download>D_246Trinitrotoluene_Lotufo2005_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2271 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.56e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lotufo GR, Lydy MJ. Comparative toxicokinetics of explosive compounds in sheepshead minnows. Archives of environmental contamination and toxicology 49(2):206–214 (2005). [doi:10.1007/s00244-004-0197-7](https://doi.org/10.1007/s00244-004-0197-7)

**This record:** Pharmacolibrary, model `D_246Trinitrotoluene_Lotufo2005_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference>

```bibtex
@misc{pharmacolibrary_D246TrinitrotolueneLotufo2005reference,
  title  = {{Pharmacolibrary model D_246Trinitrotoluene_Lotufo2005_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference},
  note   = {Parameters from doi:10.1007/s00244-004-0197-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference/D_246Trinitrotoluene_Lotufo2005_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `D_246Trinitrotoluene_Lotufo2005_reference_params.json` · controls `D_246Trinitrotoluene_Lotufo2005_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B246_trinitrotoluene%5D%20D_246Trinitrotoluene_Lotufo2005_reference&body=Drug%3A%20246_trinitrotoluene%0ARecord%3A%20D_246Trinitrotoluene_Lotufo2005_reference%0APaper%3A%20Lotufo_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_246_trinitrotoluene/D_246Trinitrotoluene_Lotufo2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 17:32 UTC</sub>
