<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Nickel trioxide&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/&quot;},{&quot;label&quot;:&quot;Shinohara_2017 \u00b7 nio_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_a&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_a.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_b&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_c&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_c&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_c.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_d&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_d.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nickel trioxide — `NickelTrioxide_Shinohara2017_nio_b`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<div class="pk-model-meta" hidden drug="Nickel trioxide" model-id="NickelTrioxide_Shinohara2017_nio_b" status="curated_candidate" stale="false" population="male F344 rats" measured-compound="Nickel" parameterization="mechanistic" topology="retention"></div>

## Citation
Shinohara N, Zhang G, Oshima Y, Kobayashi T, Imatanaka N, Nakai M et al. Kinetics and dissolution of intratracheally administered nickel oxide nanomaterials in rats. Particle and fibre toxicology 14(1):48 (2017).
  ·  DOI: [10.1186/s12989-017-0229-x](https://doi.org/10.1186/s12989-017-0229-x)

## Population and dosing

**Population:** male F344 rats · condition healthy · age group adult.

**Dosing:** 46.9, 140, 420 mg, intratracheal, single.

**Dosed compound ≠ measured compound:** dosed Nickel oxide nanomaterials, measured Nickel.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Clearance rate constants k Lung (1/day) | kel | 0.15 | 1/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance rate constants k Lung (1/day) | `Q47` · kel | 0.15 | 1/day | 1.736e-06 | 1/s | 1/d | exact (1) | Shinohara_2017_table_6:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from Clearance rate constants k Lung (1/day) (Q47)

**Interpretation flags:**
- transposed table Shinohara_2017_table_6: rows are variants (NiO A, NiO B, NiO C, NiO D), the parameters are the column headers (Clearance rate constants k Lung (1/day)) — read one record per variant
- column 'detail' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Volume of samples and acid' — extend the ontology if this is a real PK parameter (source ['Shinohara_2017_table_2:row6:col2', 'Shinohara_2017_table_2:row10:col2'])
- dropped unlinked row (NIL): 'ICP-MS' — extend the ontology if this is a real PK parameter (source ['Shinohara_2017_table_2:row15:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Nickel
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — only the metabolite is modelled — no parent compartment
- estimate-method split: 'NiO B' is one of 4 estimates of Shinohara_2017's substance matrix (NiO A, NiO B, NiO C, NiO D); same population, different estimation method
- row roles: 4 per-group rows of Nickel oxide nanomaterials other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 4 linked by role
- molar mass: no plausible PubChem entry for 'Nickel oxide nanomaterials' ('nickel oxide nanomaterials') — left in mass units
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'Nickel' (LLM) — left in mass units
- molar mass: none found for 'Nickel oxide nanomaterials' — its concentrations stay mass-only
- molar mass: none found for 'Nickel' — its concentrations stay mass-only

**Extraction notes:**
- table Shinohara_2017_table_2: units_need_context
- table Shinohara_2017_table_2: unparsed_numeric_cell
- table Shinohara_2017_table_6: missing_label
- table Shinohara_2017_table_6: unparsed_numeric_cell
- companion parameter table 6 transcribed (12 record(s))
- LLM selected parameter table(s) 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Shinohara_2017_table_6:row3:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | retainedFraction (measured=Nickel) | retainedFraction | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template | pass | retention → TK_Retention* | TK_Retention | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_modelica.zip" download>NickelTrioxide_Shinohara2017_nio_b_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_fmi.zip" download>NickelTrioxide_Shinohara2017_nio_b_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_matlab.zip" download>NickelTrioxide_Shinohara2017_nio_b_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_sbml.zip" download>NickelTrioxide_Shinohara2017_nio_b_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_cellml.zip" download>NickelTrioxide_Shinohara2017_nio_b_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 4.69e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3.993e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Shinohara N, Zhang G, Oshima Y, Kobayashi T, Imatanaka N, Nakai M et al. Kinetics and dissolution of intratracheally administered nickel oxide nanomaterials in rats. Particle and fibre toxicology 14(1):48 (2017). [doi:10.1186/s12989-017-0229-x](https://doi.org/10.1186/s12989-017-0229-x)

**This record:** Pharmacolibrary, model `NickelTrioxide_Shinohara2017_nio_b`. <https://pharmacolibrary.github.io/#/drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b>

```bibtex
@misc{pharmacolibrary_NickelTrioxideShinohara2017niob,
  title  = {{Pharmacolibrary model NickelTrioxide_Shinohara2017_nio_b}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b},
  note   = {Parameters from doi:10.1186/s12989-017-0229-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b/NickelTrioxide_Shinohara2017_nio_b_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `NickelTrioxide_Shinohara2017_nio_b_params.json` · controls `NickelTrioxide_Shinohara2017_nio_b_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnickel_trioxide%5D%20NickelTrioxide_Shinohara2017_nio_b&body=Drug%3A%20nickel_trioxide%0ARecord%3A%20NickelTrioxide_Shinohara2017_nio_b%0APaper%3A%20Shinohara_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 06:28 UTC</sub>
