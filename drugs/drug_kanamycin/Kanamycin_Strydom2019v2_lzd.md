<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;kanamycin&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/&quot;},{&quot;label&quot;:&quot;Strydom_2019_2 \u00b7 lzd&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Kanamycin_Dijkstra2015_reference&quot;,&quot;label&quot;:&quot;Dijkstra_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Dijkstra2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_cfz&quot;,&quot;label&quot;:&quot;Strydom_2019_2_cfz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_cfz.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_kan&quot;,&quot;label&quot;:&quot;Strydom_2019_2_kan&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_kan.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_lzd&quot;,&quot;label&quot;:&quot;Strydom_2019_2_lzd&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_mfx&quot;,&quot;label&quot;:&quot;Strydom_2019_2_mfx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_mfx.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_rif&quot;,&quot;label&quot;:&quot;Strydom_2019_2_rif&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_rif.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# kanamycin — `Kanamycin_Strydom2019v2_lzd`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kanamycin bioavailability and absorption lag time lacked reported values, and the second reader disputes the extracted central volume and clearance estimates.

<div class="pk-model-meta" hidden drug="kanamycin" model-id="Kanamycin_Strydom2019v2_lzd" status="needs_review" stale="false" population="adults with tuberculosis" measured-compound="kanamycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Strydom N, Gupta SV, Fox WS, Via LE, Bang H, Lee M et al. Tuberculosis drugs' distribution and emergence of resistance in patient's lung lesions: A mechanistic model and tool for regimen and dose optimization. PLoS medicine 16(4):e1002773 (2019).
  ·  DOI: [10.1371/journal.pmed.1002773](https://doi.org/10.1371/journal.pmed.1002773)

## Population and dosing

**Population:** adults with tuberculosis · condition tuberculosis · age group adult · n = &gt;15&lt;.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd.svg" alt="Kanamycin_Strydom2019v2_lzd diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rate of absorption (h−1) | kabs | 2.13 | h−1 |
| Clearance (L/h) | CL | 3.77 | L/h |
| Central volume (L) | V | 145 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kanamycin bioavailability and absorption lag time lacked reported values, and the second reader disputes the extracted central volume and clearance estimates.**

The record does not provide an estimated bioavailability fraction or absorption lag time, so these parameters would be filled with standard library assumptions rather than paper-specific data. The extracted central volume is 145 L, but a second reader identified conflicting values of 30.6 L and 52.3 L for the same compartment. The second reader also reported clearance as 5.72 L/h, differing from the extracted 4.61 L/h, while the original record lists 3.77 L/h. Extracted — kanamycin: kabs 2.13 h−1, CL 3.77 L/h, V 145 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[central volume].parameter_id`: this record has Q61, the second reading Q63; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rate of absorption (h−1) | `Q49` · kabs | 2.13 | h−1 | 0.0005917 | 1/s | 1/h | llm_corrected (0.6) | pmed.1002773.t002:row1:col7 |
| Clearance (L/h) | `Q22` · CL | 3.77 | L/h | 1.047e-06 | m3/s | l/h | exact (1) | pmed.1002773.t002:row3:col7 |
| Central volume (L) | `Q61` · V | 145 | L | 0.145 | m3 | l | exact (1) | pmed.1002773.t002:row4:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance (L/h)); Q63 (Central volume (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=kanamycin
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Central volume (L)' is the general volume)
- population split: 'lzd' subgroup of Strydom_2019_2 (paper reports 6 populations: cfz, inh, kan, lzd, mfx, rif)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[central volume].value` | 30.6 | 52.3 | mismatch |
| `gpt-oss-120b` | `parameters[clearance].value` | 4.61 | 5.72 | mismatch |
| `gpt-oss-120b` | `parameters[intercomp clearance]` |  | 6.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` |  | 0.130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume]` |  | 40.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption].value` | 1.65 | 1.55 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pmed.1002773.t002:row3:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pmed.1002773.t002:row1:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['pmed.1002773.t002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.77 | ['pmed.1002773.t002:row3:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.77 L/h | ['pmed.1002773.t002:row3:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 145 L | ['pmed.1002773.t002:row4:col7'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=kanamycin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_modelica.zip" download>Kanamycin_Strydom2019v2_lzd_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_fmi.zip" download>Kanamycin_Strydom2019v2_lzd_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_matlab.zip" download>Kanamycin_Strydom2019v2_lzd_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_matlab_simbio.zip" download>Kanamycin_Strydom2019v2_lzd_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_sbml.zip" download>Kanamycin_Strydom2019v2_lzd_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_cellml.zip" download>Kanamycin_Strydom2019v2_lzd_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4845 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.003 | kg |
| input | model | `Cl` | 1.047e-06 | m3/s |
| input | model | `VdPerKg` | 0.002071 | m3/kg |
| input | model | `ka` | 0.0005917 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Strydom N, Gupta SV, Fox WS, Via LE, Bang H, Lee M et al. Tuberculosis drugs' distribution and emergence of resistance in patient's lung lesions: A mechanistic model and tool for regimen and dose optimization. PLoS medicine 16(4):e1002773 (2019). [doi:10.1371/journal.pmed.1002773](https://doi.org/10.1371/journal.pmed.1002773)

**This record:** Pharmacolibrary v26.09, model `Kanamycin_Strydom2019v2_lzd`. <https://pharmacolibrary.github.io/#/drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd>

```bibtex
@misc{pharmacolibrary_KanamycinStrydom2019v2lzd,
  title  = {{Pharmacolibrary model Kanamycin_Strydom2019v2_lzd}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd},
  note   = {Parameters from doi:10.1371/journal.pmed.1002773},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3000 mg, single dose, first-order absorption (ka 2.13 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 3000 mg oral (A07AA08) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd/Kanamycin_Strydom2019v2_lzd_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Kanamycin_Strydom2019v2_lzd_params.json` · controls `Kanamycin_Strydom2019v2_lzd_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bkanamycin%5D%20Kanamycin_Strydom2019v2_lzd&body=Drug%3A%20kanamycin%0ARecord%3A%20Kanamycin_Strydom2019v2_lzd%0APaper%3A%20Strydom_2019_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 13:11 UTC</sub>
