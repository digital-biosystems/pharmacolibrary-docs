<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Levofloxacin&quot;,&quot;href&quot;:&quot;drugs/toxin_levofloxacin/&quot;},{&quot;label&quot;:&quot;Le_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levofloxacin_Cen2023_control_group&quot;,&quot;label&quot;:&quot;Cen_2023_control_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levofloxacin/Levofloxacin_Cen2023_control_group.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Cen2023_pro_group&quot;,&quot;label&quot;:&quot;Cen_2023_pro_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levofloxacin/Levofloxacin_Cen2023_pro_group.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Le2023_reference&quot;,&quot;label&quot;:&quot;Le_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Levofloxacin_Zhu2016_reference&quot;,&quot;label&quot;:&quot;Zhu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levofloxacin/Levofloxacin_Zhu2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levofloxacin — `Levofloxacin_Le2023_reference`

> ## <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rabbit</span>

<div class="pk-model-meta" hidden drug="Levofloxacin" model-id="Levofloxacin_Le2023_reference" status="simulated" stale="false" population="rabbits and humans" measured-compound="Levofloxacin" parameterization="mechanistic" topology="retention"></div>

## Citation
Le Merdy M, AlQaraghuli F, Tan ML, Walenga R, Babiskin A, Zhao L et al. Clinical Ocular Exposure Extrapolation for Ophthalmic Solutions Using PBPK Modeling and Simulation. Pharmaceutical research 40(2):431–447 (2023).
  ·  DOI: [10.1007/s11095-022-03390-z](https://doi.org/10.1007/s11095-022-03390-z)

## Population and dosing

**Population:** rabbits and humans · condition healthy · age group adult.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| MWt | MW | 361.4 | g/mol |
| Fu | fu | 75 |  |
| Peff | Kp_derm | 3.97 | cm/s |
| SARChoroid | kel | 1.53 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Kp_derm), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MWt | `Q374` · MW | 361.4 | g/mol | 0.3614 |  | g/(m·ol) | llm (0.6) | Tab1:row2:col3, Tab1:row2:col4 |
| Fu | `Q46` · fu | 75 |  | 0.75 |  |  | exact (1) | Tab1:row4:col3 |
| Peff | `Q412` · Kp_derm | 3.97 | cm/s |  |  | cm/s | llm (0.6) | Tab1:row10:col3 |
| SARChoroid | `Q47` · kel | 1.53 | 1/h | 0.000425 | 1/s | 1/h | llm (0.6) | Tab1:row24:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from SARChoroid (Q47)

**Interpretation flags:**
- dropped unlinked row (NIL): 'logP(neutral)' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col3'])
- 'Fu' → Q46: printed without a unit and above 1 — read as a percentage
- dropped unlinked row (NIL): 'Fu melanin' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col3'])
- unit_dimension_unknown: '× 10–4 cm/s' (Kp_derm)
- dropped unlinked row (NIL): 'PermCornea_epi' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col3'])
- dropped unlinked row (NIL): 'PermCornea_str' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col3'])
- dropped unlinked row (NIL): 'PermConjunctiva' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col3'])
- dropped unlinked row (NIL): 'PermAH' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col3'])
- dropped unlinked row (NIL): 'PermICB' — extend the ontology if this is a real PK parameter (source ['Tab1:row19:col3'])
- dropped unlinked row (NIL): 'PermSclera' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col3'])
- dropped unlinked row (NIL): 'PermChoroid' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col3'])
- dropped unlinked row (NIL): 'PermRetina' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col3'])
- unit_dimension_unknown: '× 10–6 cm/s' (Kp_derm)
- dropped duplicate Q412 ('PermV.H', value '7.2') — already have one for this compound
- unit_dimension_unknown: '× 10–4 s−1' (kel)
- dropped unlinked row (NIL): 'SARRetina' — extend the ontology if this is a real PK parameter (source ['Tab1:row25:col3'])
- dropped unlinked row (NIL): 'SARConjunctiva' — extend the ontology if this is a real PK parameter (source ['Tab1:row26:col3'])
- unit_dimension_unknown: '× 10–3 s−1' (kel)
- dropped duplicate Q47 ('SARICB', value '1.25') — already have one for this compound
- dropped value-less row: 'AP10'
- dropped value-less row: 'GP'
- implicit units: 'Peff' → cm/s (from the popPK convention: "The parameter name 'Peff' (intestinal permeability) and the description 'Dermal permeability coefficient' both refer to ")
- implicit units: 'SARChoroid' → 1/h (from the popPK convention: "The description identifies the parameter as 'Elimination rate constant (terminal/beta phase)', which corresponds to the ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Levofloxacin
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab1: missing_unit_binding
- table Tab1: unparsed_numeric_cell
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 76 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tab1:row2:col3', 'Tab1:row2:col4'] |
| C5_dimension_Q412 | pass | [length] / [time] |  | ['Tab1:row10:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row24:col3'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Levofloxacin) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.9764 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_modelica.zip" download>Levofloxacin_Le2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_fmi.zip" download>Levofloxacin_Le2023_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_matlab.zip" download>Levofloxacin_Le2023_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_sbml.zip" download>Levofloxacin_Le2023_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_cellml.zip" download>Levofloxacin_Le2023_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3614 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1631 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Le Merdy M, AlQaraghuli F, Tan ML, Walenga R, Babiskin A, Zhao L et al. Clinical Ocular Exposure Extrapolation for Ophthalmic Solutions Using PBPK Modeling and Simulation. Pharmaceutical research 40(2):431–447 (2023). [doi:10.1007/s11095-022-03390-z](https://doi.org/10.1007/s11095-022-03390-z)

**This record:** Pharmacolibrary, model `Levofloxacin_Le2023_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference>

```bibtex
@misc{pharmacolibrary_LevofloxacinLe2023reference,
  title  = {{Pharmacolibrary model Levofloxacin_Le2023_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference},
  note   = {Parameters from doi:10.1007/s11095-022-03390-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference/Levofloxacin_Le2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Levofloxacin_Le2023_reference_params.json` · controls `Levofloxacin_Le2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevofloxacin%5D%20Levofloxacin_Le2023_reference&body=Drug%3A%20levofloxacin%0ARecord%3A%20Levofloxacin_Le2023_reference%0APaper%3A%20Le_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_levofloxacin/Levofloxacin_Le2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 08:52 UTC</sub>
