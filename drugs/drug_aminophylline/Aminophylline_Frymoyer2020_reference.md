<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;aminophylline&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/&quot;},{&quot;label&quot;:&quot;Frymoyer_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aminophylline_Amponsah2017_reference&quot;,&quot;label&quot;:&quot;Amponsah_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Amponsah2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Jameson1990_reference&quot;,&quot;label&quot;:&quot;Jameson_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Jameson1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Aminophylline_Goetz1989_reference&quot;,&quot;label&quot;:&quot;Goetz_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Goetz1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Shi2013_reference&quot;,&quot;label&quot;:&quot;Shi_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Shi2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aminophylline — `Aminophylline_Frymoyer2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 39.2, model 38.2); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="aminophylline" model-id="Aminophylline_Frymoyer2020_reference" status="needs_review" stale="false" population="neonates with HIE undergoing therapeutic hypothermia" measured-compound="theophylline" parameterization="mechanistic" topology="1C"></div>

## Citation
Frymoyer A, Van Meurs KP, Drover DR, Klawitter J, Christians U, Chock VY. Theophylline dosing and pharmacokinetics for renal protection in neonates with hypoxic-ischemic encephalopathy undergoing therapeutic hypothermia. Pediatric research 88(6):871–877 (2020).
  ·  DOI: [10.1038/s41390-020-01140-8](https://doi.org/10.1038/s41390-020-01140-8)

## Population and dosing

**Population:** neonates with HIE undergoing therapeutic hypothermia · condition hypoxic ischemic encephalopathy · age group neonate · n = 22.

**Dosing:** 126, 350 mg, iv, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed aminophylline, measured theophylline.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference.svg" alt="Aminophylline_Frymoyer2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V (L per 3.3 kg)3 | V3 | 2.70 | L |
| K (RBC/plasma ratio)4 | Kp | 0.68 |  |
| theta_q354_category | theta_q354_category | 0.048 |  |
| clearance | CL | 0.049 | L/h |
| volume | V | 2.7 | L |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 39.2, model 38.2); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is aminophylline's own; they describe theophylline. Extracted — theophylline: V3 2.7 L, Kp 0.68, CL 0.049 L/h, V 2.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clearance: this record has 0.049, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V (L per 3.3 kg)3 | `Q77` · V3 | 2.70 | L | 0.0027 | m3 | L | space_fold (0.95) | T2:row3:col1, T2:row3:col3, T2:row3:col4 |
| K (RBC/plasma ratio)4 | `Q410` · Kp | 0.68 |  |  |  |  | llm (0.6) | T2:row4:col1, T2:row4:col3, T2:row4:col4 |
| theta_q354_category | `Q900` · theta_q354_category | 0.048 |  |  |  |  |  | T2:row2:col1, T2:row2:col3, T2:row2:col4 |
| clearance | `Q22` · CL | 0.049 | L/h | 1.361e-08 | m3/s | L/h | exact (1) | Frymoyer_2020:results_prose |
| volume | `Q61` · V | 2.7 | L | 0.0027 | m3 | L | exact (1) | Frymoyer_2020:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, %CV' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V, %CV' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'DBS, %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Plasma, %CV' routed out of structural estimates ('Residual variability')
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.79 (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CLnorm' from footnote/prose loose number 0.75 (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number 1 (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('clearance'=0.049) from results prose — parameter table was unreadable
- salvaged Q61 ('volume'=2.7) from results prose — parameter table was unreadable
- implicit units: 'V (L per 3.3 kg)3' → L (from the paper text: "Text states: 'volume 2.7 L (1.9–4.0)' for the study patients, matching V3 = 2.70.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=theophylline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record measures 'theophylline', not aminophylline — the review values are the parent's

**Extraction notes:**
- unparsed cell T2:row2:col2 = '9.6%'
- unparsed cell T2:row3:col2 = '5.6%'
- unparsed cell T2:row4:col2 = '19.4%'
- unparsed cell T2:row6:col1 = '25.0%'
- unparsed cell T2:row6:col2 = '54.9%'
- unparsed cell T2:row6:col4 = '0.4% – 53.5%'
- unparsed cell T2:row7:col1 = '20.5%'
- unparsed cell T2:row7:col2 = '37.4%'
- unparsed cell T2:row7:col4 = '0.6% – 27.4%'
- unparsed cell T2:row9:col1 = '10.3%'
- unparsed cell T2:row9:col2 = '37.0%'
- unparsed cell T2:row10:col1 = '14.3%'
- unparsed cell T2:row10:col2 = '35.9%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 0.049 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k (rbc/plasma ratio)4].value` | 0.68 | 0.42 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q22_category]` |  | 0.040 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q354_category]` | 0.048 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v (l per 3.3 kg)3].parameter_id` | Q77 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v (l per 3.3 kg)3].value` | 2.70 | 2.38 | mismatch |
| `gpt-oss-120b` | `parameters[volume]` | 2.7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 39.2 | 38.19 | 0.9743 | 0.25 | reported t½β |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['T2:row3:col1', 'T2:row3:col3', 'T2:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.049 |  |  | ['Frymoyer_2020:results_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.049 L/h |  |  | ['Frymoyer_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.7 L |  |  | ['Frymoyer_2020:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=theophylline) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | pass | 39.2 | 38.19 | 0.9741 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 25.7 | 38.19 | 1.486 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 39.2 | 38.19 | 0.9741 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_modelica.zip" download>Aminophylline_Frymoyer2020_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_fmi.zip" download>Aminophylline_Frymoyer2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_matlab.zip" download>Aminophylline_Frymoyer2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_matlab_simbio.zip" download>Aminophylline_Frymoyer2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_sbml.zip" download>Aminophylline_Frymoyer2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_cellml.zip" download>Aminophylline_Frymoyer2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1802 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000126 | kg |
| input | model | `Cl` | 1.361e-08 | m3/s |
| input | model | `VdPerKg` | 3.857e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Frymoyer A, Van Meurs KP, Drover DR, Klawitter J, Christians U, Chock VY. Theophylline dosing and pharmacokinetics for renal protection in neonates with hypoxic-ischemic encephalopathy undergoing therapeutic hypothermia. Pediatric research 88(6):871–877 (2020). [doi:10.1038/s41390-020-01140-8](https://doi.org/10.1038/s41390-020-01140-8)

**This record:** Pharmacolibrary v26.09, model `Aminophylline_Frymoyer2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference>

```bibtex
@misc{pharmacolibrary_AminophyllineFrymoyer2020reference,
  title  = {{Pharmacolibrary model Aminophylline_Frymoyer2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference},
  note   = {Parameters from doi:10.1038/s41390-020-01140-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 126 mg infusion over 10 min, single dose. Doses in the paper: 126, 350 mg.

<dbs-fmusim paramsurl="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference/Aminophylline_Frymoyer2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Aminophylline_Frymoyer2020_reference_params.json` · controls `Aminophylline_Frymoyer2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminophylline%5D%20Aminophylline_Frymoyer2020_reference&body=Drug%3A%20aminophylline%0ARecord%3A%20Aminophylline_Frymoyer2020_reference%0APaper%3A%20Frymoyer_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 23:44 UTC</sub>
