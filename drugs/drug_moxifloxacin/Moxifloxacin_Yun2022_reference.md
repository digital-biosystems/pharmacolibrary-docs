<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;moxifloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/&quot;},{&quot;label&quot;:&quot;Yun_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxifloxacin_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Nyangwa2026_reference&quot;,&quot;label&quot;:&quot;Nyangwa_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Nyangwa2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moxifloxacin_Yun2022_reference&quot;,&quot;label&quot;:&quot;Yun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Moxifloxacin_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moxifloxacin/Moxifloxacin_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moxifloxacin — `Moxifloxacin_Yun2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Rejected), but the paper was screened again on 2026-10-07 12:29 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="moxifloxacin" model-id="Moxifloxacin_Yun2022_reference" status="extracted" stale="true" population="adults with multidrug-resistant tuberculosis" measured-compound="moxifloxacin" parameterization="mechanistic" topology="2C"></div>

## Citation
Yun HY, Chang V, Radtke KK, Wang Q, Strydom N, Chang MJ et al. Model-Based Efficacy and Toxicity Comparisons of Moxifloxacin for Multidrug-Resistant Tuberculosis. Open forum infectious diseases 9(3):ofab660 (2022).
  ·  DOI: [10.1093/ofid/ofab660](https://doi.org/10.1093/ofid/ofab660)

## Population and dosing

**Population:** adults with multidrug-resistant tuberculosis · condition multidrug-resistant tuberculosis · age group adult · n = `113.

**Dosing:** 400, 800 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference.svg" alt="Moxifloxacin_Yun2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| K a (hr–1) | kabs | 20.2 | hr–1 |
| V d (L) | V | 10.1 | L |
| CL (L/h) | CL | 7.3 | L/h |
| Q (L/h) | Q | 20.9 | L/h |
| V p (L) | V2 | 24.4 | L |
| F (%)a | Fab | 100 |  |
| theta_cl_category | theta_cl_category | 33.3 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The moxifloxacin absorption parameter labeled Ka (hr−1) with value 0.775 is recorded as an absorption half-life, a dimension mismatch on a structural parameter, so the record was rejected.**

The parameter labeled 'Ka (hr−1)' with value 0.775 hr−1 is given the meaning of an absorption half-life (t1/2ka), which is a time, not a first-order rate in hr−1 — a dimension mismatch on a structural parameter. Because the reported unit hr−1 could not be converted to SI units, the parameter was carried without an SI value. A second reader also disagreed on the parameter's identity, assigning it a different identifier than the one in this record. The remaining moxifloxacin parameters (V1 116 L, CL 8.52 L/hr, Q 0.927 L/hr, V2 523 L, Frel 100%) carry no findings. Extracted — moxifloxacin: t1/2ka 0.775 hr−1, V1 116 L, CL 8.52 L/hr, Q 0.927 L/hr, V2 523 L, Frel 100.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 7.3, the second reading 8.25; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K a (hr–1) | `Q49` · kabs | 20.2 | hr–1 | 0.005611 | 1/s | 1/h | space_fold (0.95) | T2:row2:col1, T2:row2:col2, T2:row2:col4, T2:row2:col5 |
| V d (L) | `Q61` · V | 10.1 | L | 0.0101 | m3 | l | space_fold (0.95) | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5 |
| CL (L/h) | `Q22` · CL | 7.3 | L/h | 2.028e-06 | m3/s | l/h | exact (1) | T2:row4:col1, T2:row4:col2, T2:row4:col4, T2:row4:col5 |
| Q (L/h) | `Q30` · Q | 20.9 | L/h | 5.806e-06 | m3/s | l/h | exact (1) | T2:row5:col1, T2:row5:col2, T2:row5:col4, T2:row5:col5 |
| V p (L) | `Q64` · V2 | 24.4 | L | 0.0244 | m3 | l | space_fold (0.95) | T2:row6:col1, T2:row6:col2, T2:row6:col4, T2:row6:col5 |
| F (%)a | `Q40` · Fab | 100 |  |  |  |  | llm (0.6) | T2:row7:col1 |
| theta_cl_category | `Q900` · theta_cl_category | 33.3 |  |  |  |  |  | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'IIV for Vd' routed out of structural estimates ('Interindividual variability CV (%)')
- table section iiv: 'IIV for CL' routed out of structural estimates ('Interindividual variability CV (%)')
- table section iiv: 'IIV for Q & Vp' routed out of structural estimates ('Interindividual variability CV (%)')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability (RV)')
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Coefficient of CL for HIV-positive b' → Q900:theta_cl_category = 33.3 (additive_shift on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=moxifloxacin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row10:col1 = '55.2%'
- unparsed cell T2:row10:col4 = '53.2%'
- unparsed cell T2:row10:col5 = '29.9–82.5%'
- unparsed cell T2:row11:col1 = '67.9%'
- unparsed cell T2:row11:col4 = '65.5%'
- unparsed cell T2:row11:col5 = '49.5–85.1%'
- unparsed cell T2:row12:col1 = '373%'
- unparsed cell T2:row12:col4 = '365%'
- unparsed cell T2:row12:col5 = '243–518%'
- unparsed cell T2:row14:col1 = '24.3%'
- unparsed cell T2:row14:col4 = '24.2%'
- unparsed cell T2:row14:col5 = '20.4–28.9%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 7.3 | 8.25 | mismatch |
| `gpt-oss-120b` | `parameters[k a].value` | 20.2 | 0.775 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 20.9 | 0.927 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_category].value` | 33.3 | 0.131 | mismatch |
| `gpt-oss-120b` | `parameters[v d].value` | 10.1 | 116 | mismatch |
| `gpt-oss-120b` | `parameters[v p].value` | 24.4 | 523 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.3 | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.3 L/h | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.1 L | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 24.4 L | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_modelica.zip" download>Moxifloxacin_Yun2022_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_fmi.zip" download>Moxifloxacin_Yun2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_matlab.zip" download>Moxifloxacin_Yun2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_matlab_simbio.zip" download>Moxifloxacin_Yun2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_sbml.zip" download>Moxifloxacin_Yun2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_cellml.zip" download>Moxifloxacin_Yun2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4014 | kg/mol |
| input | dosing | `F` | 100 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 2.028e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001443 | m3/kg |
| input | model | `k12` | 0.0005748 | 1/s |
| input | model | `k21` | 0.0002379 | 1/s |
| input | model | `ka` | 0.005611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yun HY, Chang V, Radtke KK, Wang Q, Strydom N, Chang MJ et al. Model-Based Efficacy and Toxicity Comparisons of Moxifloxacin for Multidrug-Resistant Tuberculosis. Open forum infectious diseases 9(3):ofab660 (2022). [doi:10.1093/ofid/ofab660](https://doi.org/10.1093/ofid/ofab660)

**This record:** Pharmacolibrary v26.09, model `Moxifloxacin_Yun2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference>

```bibtex
@misc{pharmacolibrary_MoxifloxacinYun2022reference,
  title  = {{Pharmacolibrary model Moxifloxacin_Yun2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference},
  note   = {Parameters from doi:10.1093/ofid/ofab660},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 20.2 /h, F 100). Doses in the paper: 400, 800 mg.

<dbs-fmusim paramsurl="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference/Moxifloxacin_Yun2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Moxifloxacin_Yun2022_reference_params.json` · controls `Moxifloxacin_Yun2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoxifloxacin%5D%20Moxifloxacin_Yun2022_reference&body=Drug%3A%20moxifloxacin%0ARecord%3A%20Moxifloxacin_Yun2022_reference%0APaper%3A%20Yun_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moxifloxacin/Moxifloxacin_Yun2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:29 UTC</sub>
