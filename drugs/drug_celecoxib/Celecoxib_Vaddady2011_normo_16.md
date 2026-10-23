<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;celecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/&quot;},{&quot;label&quot;:&quot;Vaddady_2011 \u00b7 normo_16&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_0_56&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_0_56&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_0_56.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_43&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_43&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_43.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_normo_16&quot;,&quot;label&quot;:&quot;Vaddady_2011_normo_16&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_110&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_110&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_110.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# celecoxib — `Celecoxib_Vaddady2011_normo_16`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

> The model does not reproduce the paper's terminal half-life (paper 2.08, model 0.467).

<div class="pk-model-meta" hidden drug="celecoxib" model-id="Celecoxib_Vaddady2011_normo_16" status="needs_review" stale="false" population="pigs in hemorrhagic shock and normotensive pigs" measured-compound="THC and celecoxib" parameterization="mechanistic" topology="1C"></div>

## Citation
Vaddady PK, Mehrotra N, Zhang X, Yates CR, Moore BM, Meibohm B. Pharmacokinetics of a combination of Δ9-tetrahydro-cannabinol and celecoxib in a porcine model of hemorrhagic shock. Biopharmaceutics & drug disposition 32(2):89–98 (2011).
  ·  DOI: [10.1002/bdd.740](https://doi.org/10.1002/bdd.740)

## Population and dosing

**Population:** pigs in hemorrhagic shock and normotensive pigs · condition hemorrhagic shock.

**Dosing:** 35, 70, 280 mg, iv, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16.svg" alt="Celecoxib_Vaddady2011_normo_16 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V ss | Vss | 22.9 | L |
| T 1/2 | t1/2z | 3.44 | h |
| clearance | CL | 21 | l/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 2.08, model 0.467).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — celecoxib: Vss 22.9 L, t1/2z 3.44 h; THC and celecoxib: CL 21 l/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has THC and celecoxib, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V ss | `Q65` · Vss | 22.9 | L | 0.0229 | m3 | L | space_fold (0.95) | tab_2:row4:col2, tab_2:row4:col6, tab_2:row4:col7, tab_2:row4:col8, tab_2:row4:col9, Vaddady_2011_table_4:row3:col2, Vaddady_2011_table_4:row3:col6, Vaddady_2011_table_4:row3:col7, Vaddady_2011_table_4:row3:col8, Vaddady_2011_table_4:row3:col9 |
| T 1/2 | `Q57` · t1/2z | 3.44 | h | 1.238e+04 | s | h | space_fold (0.95) | Vaddady_2011_table_4:row5:col2, Vaddady_2011_table_4:row5:col6, Vaddady_2011_table_4:row5:col7, Vaddady_2011_table_4:row5:col8, Vaddady_2011_table_4:row5:col9 |
| clearance | `Q22` · CL | 21 | l/h | 5.833e-06 | m3/s | L/h | exact (1) | Vaddady_2011:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- unit_dimension_unknown: 'n 5 6' (Vss)
- unit_dimension_unknown: 'n 5 6' (t1/2z)
- salvaged Q22 ('clearance'=21) from results prose — parameter table was unreadable
- implicit units: 'V ss' → L (from the popPK convention: 'The paper defines Vss as the volume of distribution at steady state. In population PK, volumes of distribution are conve')
- implicit units: 'T 1/2' → h (from the paper text: "The text explicitly states: 'The resulting average half-lives increased with dose from 2.92 h (34.4%) to 3.59 h (29.8%) ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=THC and celecoxib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'normo 1 (n 5 6)' subgroup of Vaddady_2011 (paper reports 4 populations: normo 1 (n 5 6), shock 0.5 (n 5 6), shock 1 (n 5 10), shock 4 (n 5 3))
- molar mass: no plausible PubChem entry for 'THC and celecoxib' ('THC and celecoxib') — left in mass units
- molar mass: none found for 'THC and celecoxib' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 4 transcribed (16 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean clearance]` |  | 22.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 3.44 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | THC and celecoxib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Vaddady_2011_table_4:row5:col2', 'Vaddady_2011_table_4:row5:col6', 'Vaddady_2011_table_4:row5:col7', 'Vaddady_2011_table_4:row5:col8', 'Vaddady_2011_table_4:row5:col9'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_2:row4:col2', 'tab_2:row4:col6', 'tab_2:row4:col7', 'tab_2:row4:col8', 'tab_2:row4:col9', 'Vaddady_2011_table_4:row3:col2', 'Vaddady_2011_table_4:row3:col6', 'Vaddady_2011_table_4:row3:col7', 'Vaddady_2011_table_4:row3:col8', 'Vaddady_2011_table_4:row3:col9'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21 | ['Vaddady_2011:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21 L/h | ['Vaddady_2011:other_prose'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 22.9 L | ['tab_2:row4:col2', 'tab_2:row4:col6', 'tab_2:row4:col7', 'tab_2:row4:col8', 'tab_2:row4:col9', 'Vaddady_2011_table_4:row3:col2', 'Vaddady_2011_table_4:row3:col6', 'Vaddady_2011_table_4:row3:col7', 'Vaddady_2011_table_4:row3:col8', 'Vaddady_2011_table_4:row3:col9'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=THC and celecoxib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 2.08 | 0.4669 | 0.2244 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_modelica.zip" download>Celecoxib_Vaddady2011_normo_16_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_fmi.zip" download>Celecoxib_Vaddady2011_normo_16_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_matlab.zip" download>Celecoxib_Vaddady2011_normo_16_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_matlab_simbio.zip" download>Celecoxib_Vaddady2011_normo_16_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_sbml.zip" download>Celecoxib_Vaddady2011_normo_16_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_cellml.zip" download>Celecoxib_Vaddady2011_normo_16_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.5e-05 | kg |
| input | model | `Cl` | 5.833e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003271 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Vaddady PK, Mehrotra N, Zhang X, Yates CR, Moore BM, Meibohm B. Pharmacokinetics of a combination of Δ9-tetrahydro-cannabinol and celecoxib in a porcine model of hemorrhagic shock. Biopharmaceutics & drug disposition 32(2):89–98 (2011). [doi:10.1002/bdd.740](https://doi.org/10.1002/bdd.740)

**This record:** Pharmacolibrary v26.09, model `Celecoxib_Vaddady2011_normo_16`. <https://pharmacolibrary.github.io/#/drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16>

```bibtex
@misc{pharmacolibrary_CelecoxibVaddady2011normo16,
  title  = {{Pharmacolibrary model Celecoxib_Vaddady2011_normo_16}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16},
  note   = {Parameters from doi:10.1002/bdd.740},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 35 mg infusion over 10 min, single dose. Doses in the paper: 35, 70, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16/Celecoxib_Vaddady2011_normo_16_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Celecoxib_Vaddady2011_normo_16_params.json` · controls `Celecoxib_Vaddady2011_normo_16_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcelecoxib%5D%20Celecoxib_Vaddady2011_normo_16&body=Drug%3A%20celecoxib%0ARecord%3A%20Celecoxib_Vaddady2011_normo_16%0APaper%3A%20Vaddady_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:19 UTC</sub>
