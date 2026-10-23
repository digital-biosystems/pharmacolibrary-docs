<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;ropivacaine&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/&quot;},{&quot;label&quot;:&quot;Matsota_2024 \u00b7 arterial&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ropivacaine_Mahmoud2020_reference&quot;,&quot;label&quot;:&quot;Mahmoud_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Mahmoud2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Matsota2024_arterial&quot;,&quot;label&quot;:&quot;Matsota_2024_arterial&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ropivacaine_Song2019_reference&quot;,&quot;label&quot;:&quot;Song_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Song2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Cusato2011_reference&quot;,&quot;label&quot;:&quot;Cusato_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Cusato2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Hansen2001_reference&quot;,&quot;label&quot;:&quot;Hansen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Hansen2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_McCann2001_reference&quot;,&quot;label&quot;:&quot;McCann_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_McCann2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ropivacaine — `Ropivacaine_Matsota2024_arterial`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="ropivacaine" model-id="Ropivacaine_Matsota2024_arterial" status="curated_candidate" stale="false" population="adult patients undergoing open thoracotomy" measured-compound="ropivacaine" parameterization="apparent" topology="1C"></div>

## Citation
Matsota P, Karalis V, Saranteas T, Kiospe F, Markantonis SL. Ropivacaine pharmacokinetics in the arterial and venous pools after ultrasound-guided continuous thoracic paravertebral nerve block. Journal of anaesthesiology, clinical pharmacology 40(2):283–292 (2024).
  ·  DOI: [10.4103/joacp.joacp_353_22](https://doi.org/10.4103/joacp.joacp_353_22)

## Population and dosing

**Population:** adult patients undergoing open thoracotomy · condition open thoracotomy · age group adult · n = 18.

**Dosing:** 28, 125 mg, other, multiple, every 1 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial.svg" alt="Ropivacaine_Matsota2024_arterial diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Vap (ml)a | V/F | 160983.32 | mL |  |
| Cl (ml/min)a | CL | 190.48 | mL/min | 0.2 (None% RSE) |
| ka | kabs | 32.0 | h-1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of asince ropivacaine administration is extravascular, the vap and cl estimates actually refer to vap/f and cl/f, respectively, where f is the bioavailable fraction: this record has none, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Vap (ml)a | `Q76` · V/F | 160983.32 | mL | 0.161 | m3 | L | llm (0.6) | joacp_353_22-t002:row5:col1, joacp_353_22-t002:row5:col2, joacp_353_22-t002:row5:col3, joacp_353_22-t002:row20:col1, joacp_353_22-t002:row20:col2, joacp_353_22-t002:row20:col3 |  |
| Cl (ml/min)a | `Q22` · CL | 190.48 | mL/min | 3.175e-06 | m3/s | L/h | llm_confirmed (0.6) | joacp_353_22-t002:row6:col1, joacp_353_22-t002:row6:col2, joacp_353_22-t002:row6:col3, joacp_353_22-t002:row21:col1, joacp_353_22-t002:row21:col2, joacp_353_22-t002:row21:col3 | 0.2 (None% RSE) |
| ka | `Q49` · kabs | 32.0 | h-1 | 0.008889 | 1/s | 1/h | review_gapfill (0.7) | Ling_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'kb (min−1)' — extend the ontology if this is a real PK parameter (source ['joacp_353_22-t002:row4:col1', 'joacp_353_22-t002:row4:col2', 'joacp_353_22-t002:row4:col3', 'joacp_353_22-t002:row19:col1', 'joacp_353_22-t002:row19:col2', 'joacp_353_22-t002:row19:col3'])
- dropped duplicate Q22 ('beta_Cl_Sex', value '-0.17') — already have one for this compound
- routed 'corr_Vap_Cl' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['joacp_353_22-t002:row14:col1', 'joacp_353_22-t002:row14:col2', 'joacp_353_22-t002:row14:col3', 'joacp_353_22-t002:row29:col1', 'joacp_353_22-t002:row29:col2', 'joacp_353_22-t002:row29:col3'])
- implicit units: 'Vap (ml)a' → mL (from the paper text: "The paper text explicitly states: 'The volume of distribution of the central compartment (Vap) was 160,983.32 ml...'")
- implicit units: 'Cl (ml/min)a' → mL/min (from the paper text: "The paper text explicitly states: 'The clearance estimates from the central compartment (Cl) were 190.48 and 183.03 ml/m")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ropivacaine
- population split: 'arterial' subgroup of Matsota_2024 (paper reports 3 populations: arterial, from the entire profile, only from the single-bolus part)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ling_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell joacp_353_22-t002:row7:col4 = '&lt;0.001'
- companion parameter table 3 transcribed (84 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[asince ropivacaine administration is extravascular, the vap and cl estimates actually refer to vap/f and cl/f, respectively, where f is the bioavailable fraction]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[b]` |  | 5.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl (ml/min)a].value` | 190.48 | 4.26 | mismatch |
| `gpt-oss-120b` | `parameters[corr_vap_cl]` |  | 5.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 32.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kb]` |  | 14.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vap (ml)a].parameter_id` | Q76 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vap (ml)a].value` | 160983.32 | 12.5 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['joacp_353_22-t002:row6:col1', 'joacp_353_22-t002:row6:col2', 'joacp_353_22-t002:row6:col3', 'joacp_353_22-t002:row21:col1', 'joacp_353_22-t002:row21:col2', 'joacp_353_22-t002:row21:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ling_2025:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['joacp_353_22-t002:row5:col1', 'joacp_353_22-t002:row5:col2', 'joacp_353_22-t002:row5:col3', 'joacp_353_22-t002:row20:col1', 'joacp_353_22-t002:row20:col2', 'joacp_353_22-t002:row20:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.4 L/h | ['joacp_353_22-t002:row6:col1', 'joacp_353_22-t002:row6:col2', 'joacp_353_22-t002:row6:col3', 'joacp_353_22-t002:row21:col1', 'joacp_353_22-t002:row21:col2', 'joacp_353_22-t002:row21:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 161 L | ['joacp_353_22-t002:row5:col1', 'joacp_353_22-t002:row5:col2', 'joacp_353_22-t002:row5:col3', 'joacp_353_22-t002:row20:col1', 'joacp_353_22-t002:row20:col2', 'joacp_353_22-t002:row20:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=ropivacaine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_modelica.zip" download>Ropivacaine_Matsota2024_arterial_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_fmi.zip" download>Ropivacaine_Matsota2024_arterial_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_matlab.zip" download>Ropivacaine_Matsota2024_arterial_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_matlab_simbio.zip" download>Ropivacaine_Matsota2024_arterial_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_sbml.zip" download>Ropivacaine_Matsota2024_arterial_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_cellml.zip" download>Ropivacaine_Matsota2024_arterial_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2744 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.8e-05 | kg |
| input | model | `Cl` | 3.175e-06 | m3/s |
| input | model | `VdPerKg` | 0.0023 | m3/kg |
| input | model | `ka` | 0.008889 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Matsota P, Karalis V, Saranteas T, Kiospe F, Markantonis SL. Ropivacaine pharmacokinetics in the arterial and venous pools after ultrasound-guided continuous thoracic paravertebral nerve block. Journal of anaesthesiology, clinical pharmacology 40(2):283–292 (2024). [doi:10.4103/joacp.joacp_353_22](https://doi.org/10.4103/joacp.joacp_353_22)

**This record:** Pharmacolibrary v26.09, model `Ropivacaine_Matsota2024_arterial`. <https://pharmacolibrary.github.io/#/drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial>

```bibtex
@misc{pharmacolibrary_RopivacaineMatsota2024arterial,
  title  = {{Pharmacolibrary model Ropivacaine_Matsota2024_arterial}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial},
  note   = {Parameters from doi:10.4103/joacp.joacp_353_22},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 28 mg, single dose, first-order absorption (ka 32 /h, F 1). Doses in the paper: 28, 125 mg.

<dbs-fmusim paramsurl="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial/Ropivacaine_Matsota2024_arterial_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ropivacaine_Matsota2024_arterial_params.json` · controls `Ropivacaine_Matsota2024_arterial_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropivacaine%5D%20Ropivacaine_Matsota2024_arterial&body=Drug%3A%20ropivacaine%0ARecord%3A%20Ropivacaine_Matsota2024_arterial%0APaper%3A%20Matsota_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 04:39 UTC</sub>
