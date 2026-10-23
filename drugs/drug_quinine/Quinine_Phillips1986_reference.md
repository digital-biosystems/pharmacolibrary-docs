<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;quinine&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/&quot;},{&quot;label&quot;:&quot;Phillips_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinine_Hendriksen2013_reference&quot;,&quot;label&quot;:&quot;Hendriksen_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Hendriksen2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Kloprogge2014_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Kloprogge2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quinine_Phillips1986_reference&quot;,&quot;label&quot;:&quot;Phillips_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinine/Quinine_Phillips1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinine — `Quinine_Phillips1986_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="quinine" model-id="Quinine_Phillips1986_reference" status="curated_candidate" stale="false" population="pregnant and lactating women with falciparum malaria" measured-compound="quinine" parameterization="mechanistic" topology="1C"></div>

## Citation
Phillips RE, Looareesuwan S, White NJ, Silamut K, Kietinun S, Warrell DA. Quinine pharmacokinetics and toxicity in pregnant and lactating women with falciparum malaria. British journal of clinical pharmacology 21(6):677–683 (1986).
  ·  DOI: [10.1111/j.1365-2125.1986.tb05233.x](https://doi.org/10.1111/j.1365-2125.1986.tb05233.x)

## Population and dosing

**Population:** pregnant and lactating women with falciparum malaria · condition falciparum malaria in third-trimester pregnancy · age group adult · n = 10.

**Dosing:** 350, 700, 1400 mg, iv, multiple, every 8 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference.svg" alt="Quinine_Phillips1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| t,2,z | t1/2z | 10 | h |
| V (l kg) | V | 10.1 | L/kg |
| CL (ml min-' kg-') | CL | 0.80 | mL/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has quinine, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t,2,z | `Q57` · t1/2z | 10 | h | 3.6e+04 | s | h | llm (0.6) | tab_0:row0:col2, tab_0:row0:col3, tab_0:row0:col4, tab_0:row0:col5, tab_0:row0:col6, tab_0:row0:col7, tab_0:row0:col8, tab_0:row0:col9, tab_0:row0:col10, tab_0:row0:col11 |
| V (l kg) | `Q61` · V | 10.1 | L/kg | 0.707 | m3 | L | exact (1) | tab_0:row1:col2, tab_0:row1:col3, tab_0:row1:col4, tab_0:row1:col5, tab_0:row1:col6, tab_0:row1:col7, tab_0:row1:col8, tab_0:row1:col9, tab_0:row1:col10, tab_0:row1:col11 |
| CL (ml min-' kg-') | `Q22` · CL | 0.80 | mL/min/kg | 9.333e-07 | m3/s | L/h | exact (1) | tab_0:row2:col2, tab_0:row2:col3, tab_0:row2:col4, tab_0:row2:col5, tab_0:row2:col6, tab_0:row2:col7, tab_0:row2:col8, tab_0:row2:col9, tab_0:row2:col10, tab_0:row2:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'l kg' (V)
- unit_dimension_unknown: "ml min-' kg-'" (CL)
- dropped value-less row: 't,lz = plasma half-time'
- dropped value-less row: 'V = total apparent volume of distribution'
- dropped value-less row: 'CL = total clearance'
- implicit units: 't,2,z' → h (from the paper text: "Abstract: 'elimination half-time (t112,z), 11.3 ± 4.3 h'")
- implicit units: 'V (l kg)' → L/kg (from the paper text: "Abstract: 'total apparent volume of distribution, V, 0.96 ± 0.27 l kg-' (i.e. L/kg)'")
- implicit units: "CL (ml min-' kg-')" → mL/min/kg (from the paper text: "Abstract: 'total clearance, 1.22 ± 0.77 ml min-1 kg-'; table column header also 'CL (ml min-1 kg-1)'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table tab_0: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_0:row0:col1 = 't,2,z'
- unparsed cell tab_0:row1:col12 = '11.3 + 4.3 0.96 + 0.27'
- unparsed cell tab_0:row2:col12 = '1.22 + 0.77'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 0.80 | 1.38 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 10.1 | 9.6 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | quinine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | quinine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7', 'tab_0:row2:col8', 'tab_0:row2:col9', 'tab_0:row2:col10', 'tab_0:row2:col11'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row0:col2', 'tab_0:row0:col3', 'tab_0:row0:col4', 'tab_0:row0:col5', 'tab_0:row0:col6', 'tab_0:row0:col7', 'tab_0:row0:col8', 'tab_0:row0:col9', 'tab_0:row0:col10', 'tab_0:row0:col11'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row1:col2', 'tab_0:row1:col3', 'tab_0:row1:col4', 'tab_0:row1:col5', 'tab_0:row1:col6', 'tab_0:row1:col7', 'tab_0:row1:col8', 'tab_0:row1:col9', 'tab_0:row1:col10', 'tab_0:row1:col11'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.8 | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7', 'tab_0:row2:col8', 'tab_0:row2:col9', 'tab_0:row2:col10', 'tab_0:row2:col11'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.36 L/h | ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7', 'tab_0:row2:col8', 'tab_0:row2:col9', 'tab_0:row2:col10', 'tab_0:row2:col11'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 707 L | ['tab_0:row1:col2', 'tab_0:row1:col3', 'tab_0:row1:col4', 'tab_0:row1:col5', 'tab_0:row1:col6', 'tab_0:row1:col7', 'tab_0:row1:col8', 'tab_0:row1:col9', 'tab_0:row1:col10', 'tab_0:row1:col11'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=quinine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_modelica.zip" download>Quinine_Phillips1986_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_fmi.zip" download>Quinine_Phillips1986_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_matlab.zip" download>Quinine_Phillips1986_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_matlab_simbio.zip" download>Quinine_Phillips1986_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_sbml.zip" download>Quinine_Phillips1986_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_cellml.zip" download>Quinine_Phillips1986_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3244 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00035 | kg |
| input | model | `Cl` | 9.333e-07 | m3/s |
| input | model | `VdPerKg` | 0.0101 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Phillips RE, Looareesuwan S, White NJ, Silamut K, Kietinun S, Warrell DA. Quinine pharmacokinetics and toxicity in pregnant and lactating women with falciparum malaria. British journal of clinical pharmacology 21(6):677–683 (1986). [doi:10.1111/j.1365-2125.1986.tb05233.x](https://doi.org/10.1111/j.1365-2125.1986.tb05233.x)

**This record:** Pharmacolibrary v26.09, model `Quinine_Phillips1986_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_quinine/Quinine_Phillips1986_reference>

```bibtex
@misc{pharmacolibrary_QuininePhillips1986reference,
  title  = {{Pharmacolibrary model Quinine_Phillips1986_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_quinine/Quinine_Phillips1986_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.1986.tb05233.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 350 mg infusion over 10 min, single dose. Doses in the paper: 350, 700, 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_quinine/Quinine_Phillips1986_reference/Quinine_Phillips1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Quinine_Phillips1986_reference_params.json` · controls `Quinine_Phillips1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinine%5D%20Quinine_Phillips1986_reference&body=Drug%3A%20quinine%0ARecord%3A%20Quinine_Phillips1986_reference%0APaper%3A%20Phillips_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinine/Quinine_Phillips1986_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:37 UTC</sub>
