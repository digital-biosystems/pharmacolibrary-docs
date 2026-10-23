<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/&quot;},{&quot;label&quot;:&quot;Lanke_2019 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Bhatt2014_reference&quot;,&quot;label&quot;:&quot;Bhatt_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_base&quot;,&quot;label&quot;:&quot;Lanke_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_final&quot;,&quot;label&quot;:&quot;Lanke_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tolvaptan — `Tolvaptan_Lanke2019_base`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The tolvaptan record was held back because Tlag was defaulted and apparent bioavailability was assumed to be one, while a second reader identified missing covariate powers.

<div class="pk-model-meta" hidden drug="tolvaptan" model-id="Tolvaptan_Lanke2019_base" status="needs_review" stale="false" population="adults with autosomal dominant polycystic kidney disease" measured-compound="tolvaptan" parameterization="apparent" topology="1C"></div>

## Citation
Lanke S, Shoaf SE. Population Pharmacokinetic Analyses and Model Validation of Tolvaptan in Subjects With Autosomal Dominant Polycystic Kidney Disease. Journal of clinical pharmacology 59(5):763–770 (2019).
  ·  DOI: [10.1002/jcph.1370](https://doi.org/10.1002/jcph.1370)

## Population and dosing

**Population:** adults with autosomal dominant polycystic kidney disease · condition autosomal dominant polycystic kidney disease · age group adult · n = 1091.

**Dosing:** 15, 30, 45, 60, 90, 120 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base.svg" alt="Tolvaptan_Lanke2019_base diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 11.4 | L/h | 0.43 (6.2% RSE) |
| Vd/F (L) | V/F | 109 | L | 0.46 (13.6% RSE) |
| D1 (h) | D1 | 0.55 | h | 5.67 (13.4% RSE) |
| k a (h -1 ) | kabs | 1.34 | h -1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133), gpt-5.6-luna (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tolvaptan record was held back because Tlag was defaulted and apparent bioavailability was assumed to be one, while a second reader identified missing covariate powers.**

The model builder recorded Tlag as a defaulted parameter rather than an extracted value and explicitly assumed an apparent parameterization with F=1 and Fm=1. Additionally, the second reader disagreed with the record by identifying covariate powers for estimated parameters, such as 0.54 and -0.35, that the initial extraction did not list. Extracted — tolvaptan: CL/F 11.4 L/h, V/F 109 L, D1 0.55 h, kabs 1.34 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tolvaptan, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 11.4 | L/h | 3.167e-06 | m3/s | l/h | exact (1) | jcph1370-tbl-0003:row2:col1 | 0.43 (6.2% RSE) |
| Vd/F (L) | `Q76` · V/F | 109 | L | 0.109 | m3 | l | exact (1) | jcph1370-tbl-0003:row6:col1 | 0.46 (13.6% RSE) |
| D1 (h) | `Q310` · D1 | 0.55 | h | 1980 | s | h | exact (1) | jcph1370-tbl-0003:row8:col1 | 5.67 (13.4% RSE) |
| k a (h -1 ) | `Q49` · kabs | 1.34 | h -1 | 0.0003722 | 1/s | 1/h | review_gapfill (0.7) | Van_2013_2:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Covariance CL/F on Vd/F' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Vd/F' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Covariance CL/F on D1' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Covariance V/F on D1' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'D1' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Dose50' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section iiv: 'Dosemax' routed out of structural estimates ('Interindividual variability Mean (CV)')
- table section residual_error: 'Additive' routed out of structural estimates ('Residual variability Mean (%CV) …')
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual variability Mean (%CV) …')
- dropped unlinked row (NIL): 'Dose50 (mg)' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row9:col1'])
- dropped unlinked row (NIL): 'Dosemax (mg)' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tolvaptan
- model-stage split: 'base model estimates mean %rse' is the base model of Lanke_2019 (paper reports 2 stages: base model estimates mean %rse, final model estimates mean (%rse)); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Van_2013_2's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |
| `gpt-5.6-luna` | not confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-5.6-luna` | `parameters[k a]` | 1.34 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[theta_cl_f_egfr_power]` |  | 0.54 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[theta_q319_egfr_power]` | 0.54 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[theta_v_f_wt_power]` |  | 0.44 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[vd/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | 13.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 13.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` | 0.78 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` |  | 0.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 1.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_egfr_power]` | 0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | -0.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` |  | -0.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_wt_power]` |  | 0.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 120 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` |  | 120 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tolvaptan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tolvaptan | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1370-tbl-0003:row2:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1370-tbl-0003:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Van_2013_2:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph1370-tbl-0003:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 11.4 L/h | ['jcph1370-tbl-0003:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 109 L | ['jcph1370-tbl-0003:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tolvaptan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id=defaulted_parameters: not acceptable; deviation_id=apparent_assumption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3.5 | 0.0001109 | unresolved concentration unit (exp '-fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.17 | 0.0001109 | unresolved concentration unit (exp 'respective value for Cmax', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.13 | 0.0001109 | unresolved concentration unit (exp 'respective value for AUC', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15 | 0.0001109 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 96 | 0.0001109 | unresolved concentration unit (exp '%', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_modelica.zip" download>Tolvaptan_Lanke2019_base_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_fmi.zip" download>Tolvaptan_Lanke2019_base_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_matlab.zip" download>Tolvaptan_Lanke2019_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_matlab_simbio.zip" download>Tolvaptan_Lanke2019_base_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_sbml.zip" download>Tolvaptan_Lanke2019_base_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_cellml.zip" download>Tolvaptan_Lanke2019_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4489 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.5e-05 | kg |
| input | model | `Cl` | 3.167e-06 | m3/s |
| input | model | `VdPerKg` | 0.001557 | m3/kg |
| input | model | `ka` | 0.0003722 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lanke S, Shoaf SE. Population Pharmacokinetic Analyses and Model Validation of Tolvaptan in Subjects With Autosomal Dominant Polycystic Kidney Disease. Journal of clinical pharmacology 59(5):763–770 (2019). [doi:10.1002/jcph.1370](https://doi.org/10.1002/jcph.1370)

**This record:** Pharmacolibrary v26.09, model `Tolvaptan_Lanke2019_base`. <https://pharmacolibrary.github.io/#/drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base>

```bibtex
@misc{pharmacolibrary_TolvaptanLanke2019base,
  title  = {{Pharmacolibrary model Tolvaptan_Lanke2019_base}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base},
  note   = {Parameters from doi:10.1002/jcph.1370},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 15 mg, single dose, first-order absorption (ka 1.34 /h, F 1). Doses in the paper: 15, 30, 45, 60, 90, 120 mg.

<dbs-fmusim paramsurl="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base/Tolvaptan_Lanke2019_base_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tolvaptan_Lanke2019_base_params.json` · controls `Tolvaptan_Lanke2019_base_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btolvaptan%5D%20Tolvaptan_Lanke2019_base&body=Drug%3A%20tolvaptan%0ARecord%3A%20Tolvaptan_Lanke2019_base%0APaper%3A%20Lanke_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tolvaptan/Tolvaptan_Lanke2019_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-20 18:54 UTC</sub>
