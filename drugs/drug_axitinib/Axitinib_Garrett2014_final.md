<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;axitinib&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/&quot;},{&quot;label&quot;:&quot;Garrett_2014 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Axitinib_Rini2013_reference&quot;,&quot;label&quot;:&quot;Rini_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Rini2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Tortorici2014_reference&quot;,&quot;label&quot;:&quot;Tortorici_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Garrett2014_base&quot;,&quot;label&quot;:&quot;Garrett_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Garrett2014_final&quot;,&quot;label&quot;:&quot;Garrett_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Axitinib_Ma2019_reference&quot;,&quot;label&quot;:&quot;Ma_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Ma2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Ma_2019_TV&quot;,&quot;label&quot;:&quot;Ma_2019 \u00b7 TV&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/pd_Ma_2019_TV.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# axitinib — `Axitinib_Garrett2014_final`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The covariate scenarios were not simulated; t3_param_coverage.

<div class="pk-model-meta" hidden drug="axitinib" model-id="Axitinib_Garrett2014_final" status="needs_review" stale="false" population="healthy volunteers" measured-compound="axitinib" parameterization="mechanistic" topology="2C"></div>

## Citation
Garrett M, Poland B, Brennan M, Hee B, Pithavala YK, Amantea MA. Population pharmacokinetic analysis of axitinib in healthy volunteers. British journal of clinical pharmacology 77(3):480–492 (2014).
  ·  DOI: [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 337.

**Dosing:** 1, 5 mg, oral, iv, single.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final.svg" alt="Axitinib_Garrett2014_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (l h -1 ) | CL | 17.0 | l h -1 |
| Vc (l) | V1 | 45.3 | l |
| Q (l h -1 ) | Q | 1.74 | l h -1 |
| Vp (l) | V2 | 45.9 | l |
| F, Form IV, Fed | Fab | 0.465 |  |
| Form XLI | equation variable | -0.150 |  |
| tlag (h) ‡ | tlag | 0.457 | h |
| theta_v1_weight | theta_v1_weight | 0.758 |  |
| theta_q49_fed_ka_h_1_form_iv | theta_q49_fed_ka_h_1_form_iv | 0.523 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.933), qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate scenarios were not simulated; t3_param_coverage.**

The base model was simulated, not the covariate effects the record defines. Extracted — axitinib: CL 17 l h -1, V1 45.3 l, Q 1.74 l h -1, V2 45.9 l, Fab 0.465, tlag 0.457 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on bioavailability: this record has 7.8, the second reading 0.465; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 17.0 | l h -1 | 4.722e-06 | m3/s | l/h | exact (1) | tab_0:row3:col4 |
| Vc (l) | `Q63` · V1 | 45.3 | l | 0.0453 | m3 | l | exact (1) | tab_0:row4:col4 |
| Q (l h -1 ) | `Q30` · Q | 1.74 | l h -1 | 4.833e-07 | m3/s | l/h | exact (1) | tab_0:row6:col4 |
| Vp (l) | `Q64` · V2 | 45.9 | l | 0.0459 | m3 | l | exact (1) | tab_0:row7:col4 |
| F, Form IV, Fed | `Q40` · Fab | 0.465 |  |  |  |  | llm (0.6) | tab_0:row10:col4 |
| Form XLI | `Q900` · equation variable | -0.150 |  | -0.15 |  |  | llm (0.6) | tab_0:row12:col4 |
| tlag (h) ‡ | `Q83` · tlag | 0.457 | h | 1645 | s | h | space_fold (0.95) | tab_0:row13:col4 |
| theta_v1_weight | `Q900` · theta_v1_weight | 0.758 |  |  |  |  |  | tab_0:row5:col4 |
| theta_q49_fed_ka_h_1_form_iv | `Q900` · theta_q49_fed_ka_h_1_form_iv | 0.523 |  |  |  |  |  | tab_0:row8:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Vc' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Q' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 Vp' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω 2 ka' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω CL ω Vc' routed out of structural estimates ('Interindividual variability model parameters §')
- table section iiv: 'ω Q ω Vp' routed out of structural estimates ('Interindividual variability model parameters §')
- table section residual_error: 'Oral, %' routed out of structural estimates ('Residual error model parameters')
- table section residual_error: 'Intravenous, %' routed out of structural estimates ('Residual error model parameters')
- table representations disagree for 'CL (l h -1 )'; source reconciliation required
- table representations disagree for 'Vc (l)'; source reconciliation required
- table representations disagree for 'Weight effect on Vc'; source reconciliation required
- table representations disagree for 'Q (l h -1 )'; source reconciliation required
- table representations disagree for 'Vp (l)'; source reconciliation required
- table representations disagree for 'ka (h -1 ) Form IV, Fed'; source reconciliation required
- table representations disagree for 'Fasting'; source reconciliation required
- table representations disagree for 'F, Form IV, Fed'; source reconciliation required
- table representations disagree for 'Form XLI'; source reconciliation required
- table representations disagree for 'tlag (h) ‡'; source reconciliation required
- dropped unlinked row (NIL): 'Fasting' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col4', 'tab_0:row11:col4'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=axitinib
- status held at "Needs review" — not promoted
- model-stage split: 'final / estimate' is the final model of Garrett_2014 (paper reports 2 stages: base / estimate, final / estimate); same population, different model-building step

**Extraction notes:**
- table tab_0: unbound_uncertainty
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.933 (14/15 fields) | 1 |
| `qwen3.8-27b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[form xli]` | -0.150 |  | only_one_extracted |
| `qwen3.8-27b` | `model.bioavailability.theta` | 7.8 | 0.465 | mismatch |
| `qwen3.8-27b` | `parameters[cl].value` | 8.2 | 17.0 | mismatch |
| `qwen3.8-27b` | `parameters[f, form iv, fed].parameter_id` | Q87 | Q40 | mismatch |
| `qwen3.8-27b` | `parameters[f, form iv, fed].value` | 7.8 | 0.465 | mismatch |
| `qwen3.8-27b` | `parameters[k a]` | 78.7 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q].value` | 8.2 | 1.74 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q1_weight]` |  | 0.758 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_weight]` | 0.758 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q49_fed_ka_h_1_form_iv].value` | 6.8 | 0.523 | mismatch |
| `qwen3.8-27b` | `parameters[tlag (h)].value` | 0.32 | 0.457 | mismatch |
| `qwen3.8-27b` | `parameters[vc].value` | 7.6 | 45.3 | mismatch |
| `qwen3.8-27b` | `parameters[vp].value` | 20 | 45.9 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_0:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_0:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_0:row7:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_0:row13:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17 | ['tab_0:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17 L/h | ['tab_0:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 45.3 L | ['tab_0:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 45.9 L | ['tab_0:row7:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=axitinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered |  | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | pass |  | verdict partial; agreement 0.933 (14 of 15 compared fields agree, 1 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.933 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_modelica.zip" download>Axitinib_Garrett2014_final_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_fmi.zip" download>Axitinib_Garrett2014_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_matlab.zip" download>Axitinib_Garrett2014_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_matlab_simbio.zip" download>Axitinib_Garrett2014_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_sbml.zip" download>Axitinib_Garrett2014_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_cellml.zip" download>Axitinib_Garrett2014_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3865 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-06 | kg |
| input | model | `Cl` | 4.722e-06 | m3/s |
| input | model | `VdPerKg` | 0.0006471 | m3/kg |
| input | model | `k12` | 1.067e-05 | 1/s |
| input | model | `k21` | 1.053e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Garrett M, Poland B, Brennan M, Hee B, Pithavala YK, Amantea MA. Population pharmacokinetic analysis of axitinib in healthy volunteers. British journal of clinical pharmacology 77(3):480–492 (2014). [doi:10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206)

**This record:** Pharmacolibrary, model `Axitinib_Garrett2014_final`. <https://pharmacolibrary.github.io/#/drugs/drug_axitinib/Axitinib_Garrett2014_final>

```bibtex
@misc{pharmacolibrary_AxitinibGarrett2014final,
  title  = {{Pharmacolibrary model Axitinib_Garrett2014_final}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_axitinib/Axitinib_Garrett2014_final},
  note   = {Parameters from doi:10.1111/bcp.12206},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1 mg infusion over 10 min, single dose. Doses in the paper: 1, 5 mg.

<dbs-fmusim paramsurl="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_axitinib/Axitinib_Garrett2014_final/Axitinib_Garrett2014_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Axitinib_Garrett2014_final_params.json` · controls `Axitinib_Garrett2014_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baxitinib%5D%20Axitinib_Garrett2014_final&body=Drug%3A%20axitinib%0ARecord%3A%20Axitinib_Garrett2014_final%0APaper%3A%20Garrett_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_axitinib/Axitinib_Garrett2014_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:55 UTC</sub>
