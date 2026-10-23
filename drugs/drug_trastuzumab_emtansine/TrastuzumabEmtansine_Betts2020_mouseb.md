<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab emtansine&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/&quot;},{&quot;label&quot;:&quot;Betts_2020 \u00b7 mouseb&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabEmtansine_Chen2017_reference&quot;,&quot;label&quot;:&quot;Chen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gupta2012_reference&quot;,&quot;label&quot;:&quot;Gupta_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gupta2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Betts2020_mouseb&quot;,&quot;label&quot;:&quot;Betts_2020_mouseb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab emtansine — `TrastuzumabEmtansine_Betts2020_mouseb`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The model does not reproduce the paper's terminal half-life (paper 24, model 9.11e+07); k12 use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="trastuzumab emtansine" model-id="TrastuzumabEmtansine_Betts2020_mouseb" status="needs_review" stale="false" population="adults with cancer" measured-compound="trastuzumab_emtansine" parameterization="mechanistic" topology="2C"></div>

## Citation
Betts A, Clark T, Jasper P, Tolsma J, van der Graaf PH, Graziani EI et al. Use of translational modeling and simulation for quantitative comparison of PF-06804103, a new generation HER2 ADC, with Trastuzumab-DM1. Journal of pharmacokinetics and pharmacodynamics 47(5):513-526 (2020).
  ·  DOI: [10.1007/s10928-020-09702-3](https://doi.org/10.1007/s10928-020-09702-3)

## Population and dosing

**Population:** adults with cancer · condition cancer · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb.svg" alt="TrastuzumabEmtansine_Betts2020_mouseb diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (mL/kg) | V1 | 61.0 | mL/kg |
| CL (mL/day/kg) | CL | 22.8 | mL/day/kg |
| Vp (mL/kg) | V2 | 56.2 | mL/kg |
| Q (mL/day/kg) | Q | 35.0 | mL/day/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 24, model 9.11e+07); k12 use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — trastuzumab emtansine: V1 61 mL/kg, CL 22.8 mL/day/kg, V2 56.2 mL/kg, Q 35 mL/day/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_emtansine, the second reading T-DM1; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (mL/kg) | `Q63` · V1 | 61.0 | mL/kg | 0.00427 | m3 | ml/kg | exact (1) | Betts_2020_table_1:row0:col2 |
| CL (mL/day/kg) | `Q22` · CL | 22.8 | mL/day/kg | 1.847e-08 | m3/s | ml/(d·kg) | exact (1) | Betts_2020_table_1:row1:col2 |
| Vp (mL/kg) | `Q64` · V2 | 56.2 | mL/kg | 0.003934 | m3 | ml/kg | exact (1) | Betts_2020_table_1:row2:col2 |
| Q (mL/day/kg) | `Q30` · Q | 35.0 | mL/day/kg | 2.836e-08 | m3/s | ml/(d·kg) | exact (1) | Betts_2020_table_1:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12']

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_emtansine
- population split: 'mouseb' subgroup of Betts_2020 (paper reports 9 populations: 144580pdx (breast), 24312pdx (breast), 37622pdx (nsclc), bt474clx (breast), ga-3109pdx (gastric), jimt-1clx (breast), mouseb, n87clx (gastric), t-dm1)
- molar mass: none found for 'trastuzumab_emtansine' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row8:col3 = '1 (-)'
- unparsed cell Tab2:row8:col4 = '1 (-)'
- unparsed cell Tab2:row8:col5 = '2.6 (-)'
- unparsed cell Tab2:row10:col3 = '0.271 (-)'
- unparsed cell Tab2:row10:col5 = '0.373 (-)'
- unparsed cell Tab2:row10:col6 = '0.372 (-)'
- unparsed cell Tab2:row10:col7 = '0.359 (-)'
- unparsed cell Tab2:row10:col8 = '0.25 (-)'
- unparsed cell Tab2:row11:col3 = '0.666 (-)'
- unparsed cell Tab2:row11:col5 = '0.0441 (-)'
- unparsed cell Tab2:row11:col6 = '0.789 (-)'
- unparsed cell Tab2:row11:col7 = '1.3 (-)'
- unparsed cell Tab2:row11:col8 = '0.316 (-)'
- companion parameter table 1 transcribed (8 record(s))
- unparsed cell Betts_2020_table_4:row4:col1 = 'HER2 binding affinity'
- unparsed cell Betts_2020_table_4:row5:col1 = 'Rate constant for HER2 shedding'
- unparsed cell Betts_2020_table_4:row6:col1 = 'Rate constant for HER2 degradation'
- unparsed cell Betts_2020_table_4:row7:col1 = 'Elimination rate constant of the HER2-ADC complex'
- companion parameter table 4 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['t-dm1', 'her2 ecd', 'binding'], ['pf-06804103', 'her2 ecd', 'binding']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_emtansine | T-DM1 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_emtansine | T-DM1 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Betts_2020_table_1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Betts_2020_table_1:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Betts_2020_table_1:row0:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Betts_2020_table_1:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 22.8 | ['Betts_2020_table_1:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0665 L/h | ['Betts_2020_table_1:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.27 L | ['Betts_2020_table_1:row0:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.93 L | ['Betts_2020_table_1:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=trastuzumab_emtansine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 24 | 9.11e+07 | 3.796e+06 | day→SI vs simulated h |
| T1_t_half_beta | reference | fail | 117.6 | 9.11e+07 | 7.747e+05 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_modelica.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_fmi.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_matlab.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_matlab_simbio.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_sbml.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_cellml.zip" download>TrastuzumabEmtansine_Betts2020_mouseb_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.2e-05 | kg |
| input | model | `Cl` | 1.847e-08 | m3/s |
| input | model | `VdPerKg` | 6.1e-05 | m3/kg |
| input | model | `k21` | 7.208e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Betts A, Clark T, Jasper P, Tolsma J, van der Graaf PH, Graziani EI et al. Use of translational modeling and simulation for quantitative comparison of PF-06804103, a new generation HER2 ADC, with Trastuzumab-DM1. Journal of pharmacokinetics and pharmacodynamics 47(5):513-526 (2020). [doi:10.1007/s10928-020-09702-3](https://doi.org/10.1007/s10928-020-09702-3)

**This record:** Pharmacolibrary v26.09, model `TrastuzumabEmtansine_Betts2020_mouseb`. <https://pharmacolibrary.github.io/#/drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb>

```bibtex
@misc{pharmacolibrary_TrastuzumabEmtansineBetts2020mouseb,
  title  = {{Pharmacolibrary model TrastuzumabEmtansine_Betts2020_mouseb}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb},
  note   = {Parameters from doi:10.1007/s10928-020-09702-3},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 12 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 12 mg parenteral (L01FD03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb/TrastuzumabEmtansine_Betts2020_mouseb_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `TrastuzumabEmtansine_Betts2020_mouseb_params.json` · controls `TrastuzumabEmtansine_Betts2020_mouseb_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab_emtansine%5D%20TrastuzumabEmtansine_Betts2020_mouseb&body=Drug%3A%20trastuzumab_emtansine%0ARecord%3A%20TrastuzumabEmtansine_Betts2020_mouseb%0APaper%3A%20Betts_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:47 UTC</sub>
