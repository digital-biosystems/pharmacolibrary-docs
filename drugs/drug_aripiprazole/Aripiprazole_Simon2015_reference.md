<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Simon_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Simon2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> F use library defaults, not estimates from this paper; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Simon2015_reference" status="needs_review" stale="false" population="adults with schizophrenia" measured-compound="aripiprazole" parameterization="mechanistic" topology="1C"></div>

## Citation
Simon N, Azorin JM. [Rational estimation of drug dosage through pharmacometric modeling: The case of a long-acting depot antipsychotic]. L'Encephale 41(2):159–167 (2015).
  ·  DOI: [10.1016/j.encep.2015.02.001](https://doi.org/10.1016/j.encep.2015.02.001)

## Population and dosing

**Population:** adults with schizophrenia · condition schizophrenia · age group adult.

**Dosing:** 10, 30 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference/Aripiprazole_Simon2015_reference.svg" alt="Aripiprazole_Simon2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 2 | 1/h |
| Vd | V | 47 | L |
| Ke | kel | 0.08 | 1/h |
| poids | Vnorm | 58 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t6_deviations (+1 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — aripiprazole: kabs 2 1/h, V 47 L, kel 0.08 1/h, Vnorm 58 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has aripiprazole, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 2 | 1/h | 0.0005556 | 1/s | 1/h | exact (1) | Simon_2015_table_2:row0:col1, Simon_2015_table_2:row1:col1, Simon_2015_table_2:row2:col1, Simon_2015_table_2:row3:col1 |
| Vd | `Q61` · V | 47 | L | 0.047 | m3 | L | exact (1) | Simon_2015_table_2:row0:col2, Simon_2015_table_2:row1:col2, Simon_2015_table_2:row2:col2, Simon_2015_table_2:row3:col2 |
| Ke | `Q47` · kel | 0.08 | 1/h | 2.222e-05 | 1/s | 1/h | exact (1) | Simon_2015_table_2:row0:col3, Simon_2015_table_2:row1:col3, Simon_2015_table_2:row2:col3, Simon_2015_table_2:row3:col3 |
| poids | `Q352` · Vnorm | 58 | L/kg | 4.06 | m3 | L | llm (0.6) | Simon_2015_table_2:row0:col4, Simon_2015_table_2:row1:col4, Simon_2015_table_2:row2:col4, Simon_2015_table_2:row3:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column '100' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'âge' — extend the ontology if this is a real PK parameter (source ['Simon_2015_table_2:row0:col5', 'Simon_2015_table_2:row1:col5', 'Simon_2015_table_2:row2:col5', 'Simon_2015_table_2:row3:col5'])
- dropped unlinked row (NIL): 'sexe' — extend the ontology if this is a real PK parameter (source ['Simon_2015_table_2:row0:col6', 'Simon_2015_table_2:row1:col6', 'Simon_2015_table_2:row2:col6', 'Simon_2015_table_2:row3:col6'])
- implicit units: 'Ka' → 1/h (from the popPK convention: "The paper text describes the parameters as 'constante d'absorption Ka' (absorption rate constant). In population PK, fir")
- implicit units: 'Vd' → L (from the popPK convention: "The parameter is 'Vd' (Volume of distribution). The paper text identifies it as 'Vd' and the context involves plasma con")
- implicit units: 'Ke' → 1/h (from the popPK convention: "The parameter is 'Ke' (Elimination rate constant, specifically terminal/beta phase). The paper text defines it as 'const")
- implicit units: 'poids' → L/kg (from the popPK convention: "The parameter label is 'poids' (weight) but the description provided in the prompt is '[Vnorm: Volume of distribution NO")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (Vd)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aripiprazole
- derived CL=3.76 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Simon_2015_table_2: units_need_context
- transposed table Simon_2015_table_2: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` | 0.08 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke]` |  | 0.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[poids]` | 58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 47 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 47 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | aripiprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | aripiprazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Simon_2015_table_2:row0:col4', 'Simon_2015_table_2:row1:col4', 'Simon_2015_table_2:row2:col4', 'Simon_2015_table_2:row3:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Simon_2015_table_2:row0:col3', 'Simon_2015_table_2:row1:col3', 'Simon_2015_table_2:row2:col3', 'Simon_2015_table_2:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Simon_2015_table_2:row0:col1', 'Simon_2015_table_2:row1:col1', 'Simon_2015_table_2:row2:col1', 'Simon_2015_table_2:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Simon_2015_table_2:row0:col2', 'Simon_2015_table_2:row1:col2', 'Simon_2015_table_2:row2:col2', 'Simon_2015_table_2:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 47 L | ['Simon_2015_table_2:row0:col2', 'Simon_2015_table_2:row1:col2', 'Simon_2015_table_2:row2:col2', 'Simon_2015_table_2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | pass | C_central (measured=aripiprazole) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.182 (2 of 11 compared fields agree, 7 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.182 | cross-check contradicted by a second reader: verdict disputed; agreement 0.182 (2 of 11 compared fields agree, 7 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference/Aripiprazole_Simon2015_reference_modelica.zip" download>Aripiprazole_Simon2015_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference/Aripiprazole_Simon2015_reference_fmi.zip" download>Aripiprazole_Simon2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
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
| input | compound | `MM` | 0.4484 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.044e-06 | m3/s |
| input | model | `VdPerKg` | 0.0006714 | m3/kg |
| input | model | `ka` | 0.0005556 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Simon N, Azorin JM. [Rational estimation of drug dosage through pharmacometric modeling: The case of a long-acting depot antipsychotic]. L'Encephale 41(2):159–167 (2015). [doi:10.1016/j.encep.2015.02.001](https://doi.org/10.1016/j.encep.2015.02.001)

**This record:** Pharmacolibrary, model `Aripiprazole_Simon2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference>

```bibtex
@misc{pharmacolibrary_AripiprazoleSimon2015reference,
  title  = {{Pharmacolibrary model Aripiprazole_Simon2015_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference},
  note   = {Parameters from doi:10.1016/j.encep.2015.02.001},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 2 /h, F 0.9). Doses in the paper: 10–30 mg.

<dbs-fmusim paramsurl="drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference/Aripiprazole_Simon2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference/Aripiprazole_Simon2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Aripiprazole_Simon2015_reference_params.json` · controls `Aripiprazole_Simon2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Simon2015_reference&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Simon2015_reference%0APaper%3A%20Simon_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:31 UTC</sub>
