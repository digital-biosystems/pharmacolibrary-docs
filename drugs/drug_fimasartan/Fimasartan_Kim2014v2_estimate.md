<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;fimasartan&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/&quot;},{&quot;label&quot;:&quot;Kim_2014_2 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fimasartan_Kim2014v2_estimate&quot;,&quot;label&quot;:&quot;Kim_2014_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fimasartan — `Fimasartan_Kim2014v2_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record for fimasartan was held back because bioavailability and lag time were left at library defaults instead of being estimated.

<div class="pk-model-meta" hidden drug="fimasartan" model-id="Fimasartan_Kim2014v2_estimate" status="needs_review" stale="false" population="patients with renal impairment and healthy volunteers" measured-compound="fimasartan" parameterization="mechanistic" topology="2C"></div>

## Citation
Kim S, Lee J, Shin D, Lim KS, Kim YS, Jang IJ et al. Effect of renal function on the pharmacokinetics of fimasartan: a single-dose, open-label, Phase I study. Drug design, development and therapy 8:1723–1731 (2014).
  ·  DOI: [10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784)

## Population and dosing

**Population:** patients with renal impairment and healthy volunteers · condition renal impairment · age group adult · n = &gt;=16.

**Dosing:** 120 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate.svg" alt="Fimasartan_Kim2014v2_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 77 | L/h |
| Vc (L) | V1 | 286 | L |
| Ka (h−1) | kabs | 3.8 | h−1 |
| Vp (L) | V2 | 203 | L |
| Q (L/h) | Q | 19.4 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for fimasartan was held back because bioavailability and lag time were left at library defaults instead of being estimated.**

The population pharmacokinetic model includes five fitted parameters for fimasartan, but bioavailability and lag time were not extracted from the study. Consequently, these values rely on generic library placeholders rather than data from the renal impairment and healthy volunteer cohorts. The review flagged this substitution as unsupported, necessitating further review before the model can be published. Extracted — fimasartan: CL 77 L/h, V1 286 L, kabs 3.8 h−1, V2 203 L, Q 19.4 L/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 77 | L/h | 2.139e-05 | m3/s | l/h | exact (1) | t5-dddt-8-1723:row2:col1 |
| Vc (L) | `Q63` · V1 | 286 | L | 0.286 | m3 | l | exact (1) | t5-dddt-8-1723:row3:col1 |
| Ka (h−1) | `Q49` · kabs | 3.8 | h−1 | 0.001056 | 1/s | 1/h | exact (1) | t5-dddt-8-1723:row4:col1 |
| Vp (L) | `Q64` · V2 | 203 | L | 0.203 | m3 | l | exact (1) | t5-dddt-8-1723:row5:col1 |
| Q (L/h) | `Q30` · Q | 19.4 | L/h | 5.389e-06 | m3/s | l/h | exact (1) | t5-dddt-8-1723:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'F1=θ6^GRP*' — extend the ontology if this is a real PK parameter (source ['t5-dddt-8-1723:row7:col1'])
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['t5-dddt-8-1723:row8:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q64 (Vp (L)); Q30 (Q (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fimasartan
- population split: 'estimate' subgroup of Kim_2014_2 (paper reports 4 populations: estimate, healthy volunteers(n=8), p-value‡, ri patients(n=8))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t5-dddt-8-1723:row2:col2 = '9.39%'
- unparsed cell t5-dddt-8-1723:row2:col3 = '76.3 (62.4–91.8)'
- unparsed cell t5-dddt-8-1723:row3:col2 = '12.3%'
- unparsed cell t5-dddt-8-1723:row3:col3 = '281 (221–344)'
- unparsed cell t5-dddt-8-1723:row4:col2 = '36.3%'
- unparsed cell t5-dddt-8-1723:row4:col3 = '3.92 (1.77–21.8)'
- unparsed cell t5-dddt-8-1723:row5:col2 = '13.8%'
- unparsed cell t5-dddt-8-1723:row5:col3 = '205 (160–268)'
- unparsed cell t5-dddt-8-1723:row6:col2 = '30.5%'
- unparsed cell t5-dddt-8-1723:row6:col3 = '19.2 (12.8–35.3)'
- unparsed cell t5-dddt-8-1723:row8:col2 = '15.3%'
- unparsed cell t5-dddt-8-1723:row8:col3 = '0.572 (0.422–0.735)'
- unparsed cell Kim_2014_2_table_4:row1:col2 = '457.7±118.31.87 (1.16–3.03)†'
- unparsed cell Kim_2014_2_table_4:row2:col2 = '1,580.8±458.61.73 (1.33–2.25)†'
- companion parameter table 4 transcribed (12 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t5-dddt-8-1723:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t5-dddt-8-1723:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t5-dddt-8-1723:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t5-dddt-8-1723:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t5-dddt-8-1723:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 77 | ['t5-dddt-8-1723:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 77 L/h | ['t5-dddt-8-1723:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 286 L | ['t5-dddt-8-1723:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 203 L | ['t5-dddt-8-1723:row5:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=fimasartan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_modelica.zip" download>Fimasartan_Kim2014v2_estimate_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_fmi.zip" download>Fimasartan_Kim2014v2_estimate_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_matlab.zip" download>Fimasartan_Kim2014v2_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_matlab_simbio.zip" download>Fimasartan_Kim2014v2_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_sbml.zip" download>Fimasartan_Kim2014v2_estimate_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_cellml.zip" download>Fimasartan_Kim2014v2_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5016 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00012 | kg |
| input | model | `Cl` | 2.139e-05 | m3/s |
| input | model | `VdPerKg` | 0.004086 | m3/kg |
| input | model | `k12` | 1.884e-05 | 1/s |
| input | model | `k21` | 2.655e-05 | 1/s |
| input | model | `ka` | 0.001056 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim S, Lee J, Shin D, Lim KS, Kim YS, Jang IJ et al. Effect of renal function on the pharmacokinetics of fimasartan: a single-dose, open-label, Phase I study. Drug design, development and therapy 8:1723–1731 (2014). [doi:10.2147/DDDT.S68784](https://doi.org/10.2147/DDDT.S68784)

**This record:** Pharmacolibrary v26.09, model `Fimasartan_Kim2014v2_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate>

```bibtex
@misc{pharmacolibrary_FimasartanKim2014v2estimate,
  title  = {{Pharmacolibrary model Fimasartan_Kim2014v2_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate},
  note   = {Parameters from doi:10.2147/DDDT.S68784},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 3.8 /h, F 0.9). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate/Fimasartan_Kim2014v2_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fimasartan_Kim2014v2_estimate_params.json` · controls `Fimasartan_Kim2014v2_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfimasartan%5D%20Fimasartan_Kim2014v2_estimate&body=Drug%3A%20fimasartan%0ARecord%3A%20Fimasartan_Kim2014v2_estimate%0APaper%3A%20Kim_2014_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fimasartan/Fimasartan_Kim2014v2_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:28 UTC</sub>
