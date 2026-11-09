<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Plutonium-239&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/&quot;},{&quot;label&quot;:&quot;Watts_1975 \u00b7 dog&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plutonium239_Harrison1980_239pu&quot;,&quot;label&quot;:&quot;Harrison_1980_239pu&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Harrison1980_239pu.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Harrison1980_241am&quot;,&quot;label&quot;:&quot;Harrison_1980_241am&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Harrison1980_241am.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_burro&quot;,&quot;label&quot;:&quot;Watts_1975_burro&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_burro.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_dog&quot;,&quot;label&quot;:&quot;Watts_1975_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Plutonium239_Watts1975_man&quot;,&quot;label&quot;:&quot;Watts_1975_man&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_man.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_sheep&quot;,&quot;label&quot;:&quot;Watts_1975_sheep&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_sheep.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Taylor1985_a&quot;,&quot;label&quot;:&quot;Taylor_1985_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Taylor1985_a.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Taylor1985_tb_days&quot;,&quot;label&quot;:&quot;Taylor_1985_tb_days&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Taylor1985_tb_days.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Plutonium-239 — `Plutonium239_Watts1975_dog`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<div class="pk-model-meta" hidden drug="Plutonium-239" model-id="Plutonium239_Watts1975_dog" status="curated_candidate" stale="false" population="men and large animals" measured-compound="Plutonium-239" parameterization="mechanistic" topology="retention"></div>

## Citation
Watts L. Clearance rates of insoluble plutonium-239 compounds from the lung. Health physics 29(1):53–59 (1975).
  ·  DOI: [10.1097/00004032-197507000-00006](https://doi.org/10.1097/00004032-197507000-00006)

## Population and dosing

**Population:** men and large animals · condition occupational exposure · age group adult.

**Dosed compound ≠ measured compound:** dosed insoluble plutonium dioxide, measured Plutonium-239.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Clearance half times (Author) (days) Short | t1/2z | 5.0 | days |
| absorption rate | kabs | 2.0 | day -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

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
| Clearance half times (Author) (days) Short | `Q57` · t1/2z | 5.0 | days | 4.32e+05 | s | d | llm_corrected (0.6) | Watts_1975_table_1:row0:col4, Watts_1975_table_1:row5:col4, Watts_1975_table_1:row6:col4 |
| absorption rate | `Q49` · kabs | 2.0 | day -1 | 2.315e-05 | 1/s | 1/h | review_gapfill (0.7) | Birchall_2010:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / Clearance half times (Author) (days) Short (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Particle size' — extend the ontology if this is a real PK parameter (source ['Watts_1975_table_1:row0:col2', 'Watts_1975_table_1:row4:col2', 'Watts_1975_table_1:row5:col2'])
- relinked 'Clearance half times (Author) (days) Intermediate' Q58 → Q57: a half-life by its label (the unit decides, not the label)
- dropped duplicate Q57 ('Clearance half times (Author) (days) Intermediate', value '20') — already have one for this compound
- dropped duplicate Q57 ('Clearance half times (Author) (days) Long', value '1630') — already have one for this compound
- dropped unlinked row (NIL): 'Reference' — extend the ontology if this is a real PK parameter (source ['Watts_1975_table_1:row0:col10', 'Watts_1975_table_1:row1:col10', 'Watts_1975_table_1:row4:col10', 'Watts_1975_table_1:row5:col10', 'Watts_1975_table_1:row6:col10'])
- dropped duplicate Q57 ('Clearance half times (present study) (days) Short', value '1.0') — already have one for this compound
- dropped duplicate Q57 ('Clearance half times (present study) (days) Intermediate', value '34') — already have one for this compound
- dropped duplicate Q57 ('Clearance half times (present study) (days) Long', value '570') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Plutonium-239
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'dog' subgroup of Watts_1975 (paper reports 4 populations: burro, dog, man, sheep)
- molar mass: no plausible PubChem entry for 'Plutonium-239' ('Plutonium-239') — left in mass units
- molar mass: none found for 'Plutonium-239' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Birchall_2010's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1
- table Watts_1975_table_1: unbound_uncertainty
- table Watts_1975_table_1: unparsed_numeric_cell
- transposed table Watts_1975_table_1: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Birchall_2010:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Watts_1975_table_1:row0:col4', 'Watts_1975_table_1:row5:col4', 'Watts_1975_table_1:row6:col4'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | retainedFraction (measured=Plutonium-239) | retainedFraction | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_modelica.zip" download>Plutonium239_Watts1975_dog_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_fmi.zip" download>Plutonium239_Watts1975_dog_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_matlab.zip" download>Plutonium239_Watts1975_dog_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_sbml.zip" download>Plutonium239_Watts1975_dog_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_cellml.zip" download>Plutonium239_Watts1975_dog_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
| input | model | `Tb[1]` | 4.32e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Watts L. Clearance rates of insoluble plutonium-239 compounds from the lung. Health physics 29(1):53–59 (1975). [doi:10.1097/00004032-197507000-00006](https://doi.org/10.1097/00004032-197507000-00006)

**This record:** Pharmacolibrary, model `Plutonium239_Watts1975_dog`. <https://pharmacolibrary.github.io/#/drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog>

```bibtex
@misc{pharmacolibrary_Plutonium239Watts1975dog,
  title  = {{Pharmacolibrary model Plutonium239_Watts1975_dog}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog},
  note   = {Parameters from doi:10.1097/00004032-197507000-00006},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog/Plutonium239_Watts1975_dog_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Plutonium239_Watts1975_dog_params.json` · controls `Plutonium239_Watts1975_dog_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bplutonium_239%5D%20Plutonium239_Watts1975_dog&body=Drug%3A%20plutonium_239%0ARecord%3A%20Plutonium239_Watts1975_dog%0APaper%3A%20Watts_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 08:52 UTC</sub>
