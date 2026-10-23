<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;buprenorphine&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/&quot;},{&quot;label&quot;:&quot;Robertson_2005 \u00b7 otm&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buprenorphine_Kraft2018_reference&quot;,&quot;label&quot;:&quot;Kraft_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Kraft2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_i_v&quot;,&quot;label&quot;:&quot;Robertson_2005_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Buprenorphine_Robertson2005_otm&quot;,&quot;label&quot;:&quot;Robertson_2005_otm&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# buprenorphine — `Buprenorphine_Robertson2005_otm`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 1.25e-05, model 3.53e-06); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183) (+1 more).

<div class="pk-model-meta" hidden drug="buprenorphine" model-id="Buprenorphine_Robertson2005_otm" status="needs_review" stale="false" population="adult cats" measured-compound="buprenorphine" parameterization="mechanistic" topology="1C"></div>

## Citation
Robertson SA, Lascelles BD, Taylor PM, Sear JW. PK-PD modeling of buprenorphine in cats: intravenous and oral transmucosal administration. Journal of veterinary pharmacology and therapeutics 28(5):453–460 (2005).
  ·  DOI: [10.1111/j.1365-2885.2005.00677.x](https://doi.org/10.1111/j.1365-2885.2005.00677.x)

## Population and dosing

**Population:** adult cats · condition healthy · age group adult · n = No.

**Dosing:** 20 lg/kg, i.v., oral transmucosal, single.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm.svg" alt="Buprenorphine_Robertson2005_otm diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent Vd ss | V | 4.81 | L/kg |
| Cl | CL | 9.3 | mL/kg/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 1.25e-05, model 3.53e-06); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183) (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — buprenorphine: V 4.81 L/kg, CL 9.3 mL/kg/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has buprenorphine, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent Vd ss | `Q61` · V | 4.81 | L/kg | 0.3367 | m3 | L | boundary (0.8) | Robertson_2005:other_prose |
| Cl | `Q22` · CL | 9.3 | mL/kg/min | 1.085e-05 | m3/s | L/h | exact (1) | Robertson_2005:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cat' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col3', 'tab_0:row2:col5'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7', 'tab_0:row3:col8', 'tab_0:row3:col9', 'tab_0:row3:col10'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col5', 'tab_0:row4:col6', 'tab_0:row4:col7', 'tab_0:row4:col8', 'tab_0:row4:col9', 'tab_0:row4:col10'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col5', 'tab_0:row5:col6', 'tab_0:row5:col7', 'tab_0:row5:col8', 'tab_0:row5:col9', 'tab_0:row5:col10'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col5', 'tab_0:row6:col6', 'tab_0:row6:col7', 'tab_0:row6:col8', 'tab_0:row6:col9', 'tab_0:row6:col10'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col5', 'tab_0:row7:col6', 'tab_0:row7:col7', 'tab_0:row7:col8', 'tab_0:row7:col9', 'tab_0:row7:col10'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1', 'tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col5', 'tab_0:row8:col6', 'tab_0:row8:col7', 'tab_0:row8:col8', 'tab_0:row8:col9'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3', 'tab_0:row9:col5', 'tab_0:row9:col6', 'tab_0:row9:col7', 'tab_0:row9:col8', 'tab_0:row9:col9', 'tab_0:row9:col10'])
- table mostly unlinked (8/8 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q61 ('apparent Vd ss'=4.81) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl'=9.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=buprenorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'otm' subgroup of Robertson_2005 (paper reports 2 populations: i.v., otm)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row8:col4 = '[2260.3]'
- unparsed cell tab_0:row8:col10 = '[1154.0]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[2]` |  | 1566.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` |  | 2203.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[4]` |  | 1548.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[5]` |  | 4142.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent vd ss]` | 4.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 9.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | buprenorphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | buprenorphine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.3 | ['Robertson_2005:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.1 L/h | ['Robertson_2005:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 337 L | ['Robertson_2005:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=buprenorphine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 1.25e-05 | 3.53e-06 | 0.2824 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | pass | 6.138 | 5.968 | 0.9722 | min→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.045 | 5.968 | 1.475 | min→SI vs simulated h |
| T1_t_half_beta | reference | pass | 6.633 | 5.968 | 0.8997 | min→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.968 |  | non-numeric value |
| T1_tmax | reference | fail | 0.5 | 0.1833 | 0.3667 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_modelica.zip" download>Buprenorphine_Robertson2005_otm_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_fmi.zip" download>Buprenorphine_Robertson2005_otm_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_matlab.zip" download>Buprenorphine_Robertson2005_otm_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_matlab_simbio.zip" download>Buprenorphine_Robertson2005_otm_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_sbml.zip" download>Buprenorphine_Robertson2005_otm_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_cellml.zip" download>Buprenorphine_Robertson2005_otm_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4676 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.2e-06 | kg |
| input | model | `Cl` | 1.085e-05 | m3/s |
| input | model | `VdPerKg` | 0.00481 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Robertson SA, Lascelles BD, Taylor PM, Sear JW. PK-PD modeling of buprenorphine in cats: intravenous and oral transmucosal administration. Journal of veterinary pharmacology and therapeutics 28(5):453–460 (2005). [doi:10.1111/j.1365-2885.2005.00677.x](https://doi.org/10.1111/j.1365-2885.2005.00677.x)

**This record:** Pharmacolibrary v26.09, model `Buprenorphine_Robertson2005_otm`. <https://pharmacolibrary.github.io/#/drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm>

```bibtex
@misc{pharmacolibrary_BuprenorphineRobertson2005otm,
  title  = {{Pharmacolibrary model Buprenorphine_Robertson2005_otm}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm},
  note   = {Parameters from doi:10.1111/j.1365-2885.2005.00677.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1.2 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 1.2 mg parenteral (N02AE01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm/Buprenorphine_Robertson2005_otm_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Buprenorphine_Robertson2005_otm_params.json` · controls `Buprenorphine_Robertson2005_otm_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbuprenorphine%5D%20Buprenorphine_Robertson2005_otm&body=Drug%3A%20buprenorphine%0ARecord%3A%20Buprenorphine_Robertson2005_otm%0APaper%3A%20Robertson_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_buprenorphine/Buprenorphine_Robertson2005_otm%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:48 UTC</sub>
