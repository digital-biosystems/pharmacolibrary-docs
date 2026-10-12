<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pazopanib&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/&quot;},{&quot;label&quot;:&quot;Bins_2019 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pazopanib_Attia2023_reference&quot;,&quot;label&quot;:&quot;Attia_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Attia2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Balakirouchenane2020_reference&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Balakirouchenane2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Bins2019_base&quot;,&quot;label&quot;:&quot;Bins_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Bins2019_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Bins2019_final&quot;,&quot;label&quot;:&quot;Bins_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Bins2019_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pazopanib_Ozbey2021_reference&quot;,&quot;label&quot;:&quot;Ozbey_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Ozbey2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pazopanib — `Pazopanib_Bins2019_final`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.828). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of dose level with half of bioavailability at dose 200 mg: this record has none, the second reading 466; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Bins S et al., Impact of CYP3A4*22 on Pazopanib Pharma…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-018-0719-5](https://doi.org/10.1007/s40262-018-0719-5)

<div class="pk-model-meta" hidden drug="pazopanib" model-id="Pazopanib_Bins2019_final" status="accepted_with_caveats" stale="false" population="cancer patients" measured-compound="pazopanib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Fast absorption rate constant | `Q49` · kabs | 0.39 | 1/h | 0.00010833333333333334 | 1/h | 23 | llm_confirmed (0.6) | Tab4:row1:col3 | — | 142 (20% RSE) |
| Fraction of fast absorption | `Q40` · Fab | 36 | not captured | not captured | not captured | 36 | llm_confirmed (0.6) | Tab4:row3:col3 | — | not captured |
| Lag time between fast and slow absorption | `Q83` · tlag | 0.97 | h | 3492.0 | h | 6 | llm_corrected (0.6) | Tab4:row5:col3 | — | not captured |
| Clearance | `Q22` · CL | 0.28 | L/h | 7.777777777777778e-08 | L/h | 23 | exact (1.0) | Tab4:row6:col3 | — | 27 (28% RSE) |
| Volume of distribution of central compartment | `Q63` · V1 | 2.4 | L | 0.0024 | L | 34 | boundary_compartment (0.9) | Tab4:row8:col3 | — | not captured |
| Inter-compartment clearance | `Q30` · Q | 0.97 | L/h | 2.694444444444444e-07 | L/h | 29 | llm_corrected (0.6) | Tab4:row9:col3 | — | not captured |
| Volume of distribution of peripheral compartment | `Q64` · V2 | 24.3 | L | 0.024300000000000002 | L | 28 | boundary_compartment (0.9) | Tab4:row10:col3 | — | 98 (18% RSE) |
| Magnitude of decrease in relative bioavailability in time | `Q87` · Frel | 51 | not captured | not captured | not captured | 27 | llm_confirmed (0.6) | Tab4:row12:col3 | — | 38 (15% RSE) |
| First-order decay constant | `Q47` · kel | 0.16 | 1/h | 4.4444444444444447e-05 | 1/h | 44 | llm (0.6) | Tab4:row13:col3 | — | not captured |
| theta_cl_cyp3a4 | `Q900` · theta_cl_cyp3a4 | 0.18 | not captured | not captured | not captured | 18 | not captured (not captured) | Tab4:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Fast absorption rate constant' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Clearance' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Volume of distribution of peripheral compartment' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Relative bioavailability' routed out of structural estimates ('Between-subject variability')
- column 'final model estimates [rse (%)]' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q49 ('Slow absorption rate constant', value '0.12') — already have one for this compound
- dropped duplicate Q40 ('Fraction of slow absorption', value '64') — already have one for this compound
- implicit units: 'Fast absorption rate constant' → 1/h (from the popPK convention: 'A fast absorption rate constant is a first-order rate constant, conventionally expressed in 1/h; the paper provides no u')
- implicit units: 'Lag time between fast and slow absorption' → h (from the popPK convention: 'A drug absorption lag time is conventionally expressed in hours; the paper provides no unit for this parameter.')
- implicit units: 'Clearance' → L/h (from the paper text: 'The paper states: “clearance for variant carriers (0.18 vs. 0.27 L/h).”')
- implicit units: 'Volume of distribution of central compartment' → L (from the popPK convention: 'A central-compartment volume is conventionally expressed in L; the paper provides no unit for this parameter.')
- implicit units: 'Inter-compartment clearance' → L/h (from the popPK convention: 'Intercompartmental clearance is conventionally expressed in L/h; the paper provides no unit for this parameter.')
- implicit units: 'Volume of distribution of peripheral compartment' → L (from the popPK convention: 'A peripheral-compartment volume is conventionally expressed in L; the paper provides no unit for this parameter.')
- implicit units: 'First-order decay constant' → 1/h (from the popPK convention: 'An elimination rate constant is a first-order rate constant, conventionally expressed in 1/h; the paper provides no unit')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pazopanib
- model-stage split: 'final model estimates [rse (%)]' is the final model of Bins_2019 (paper reports 3 stages: base model estimate [rse (%)] [16], final model estimates [rse (%)], parameter estimate (rse %)); same population, different model-building step

**Extraction notes:**
- unparsed cell Tab4:row1:col1 = 'h−1'
- unparsed cell Tab4:row2:col1 = 'h−1'
- unparsed cell Tab4:row13:col1 = 'Day−1'
- unparsed cell Bins_2019_table_3:row4:col4 = '0.21a (1.58)'
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.828 (24/29 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[dose level with half of bioavailability at dose 200 mg]` | not captured | 466 | only_one_extracted |
| `qwen3.8-27b` | `parameters[first-order decay constant].parameter_id` | Q47 | Q68 | mismatch |
| `qwen3.8-27b` | `parameters[fraction of fast absorption].parameter_id` | Q40 | Q87 | mismatch |
| `qwen3.8-27b` | `parameters[magnitude of decrease in relative bioavailability in time]` | 51 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[slow absorption rate constant]` | not captured | 0.12 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row6:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row9:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row13:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row1:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row10:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab4:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.28 | not captured | not captured | ['Tab4:row6:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.28 L/h | not captured | not captured | ['Tab4:row6:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.4 L | not captured | not captured | ['Tab4:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 24.3 L | not captured | not captured | ['Tab4:row10:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=pazopanib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 7 scholar param(s) emitted or defaulted | 7 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pazopanib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bins_2019` / `Bins_2019::final`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pazopanib/models/modelica/Pazopanib_Bins2019_final.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pazopanib/models/modelica/Pazopanib_Bins2019_final.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pazopanib/models/modelica/Pazopanib_Bins2019_final.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_modelica.zip" download>Pazopanib_Bins2019_final_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_fmi.zip" download>Pazopanib_Bins2019_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_matlab.zip" download>Pazopanib_Bins2019_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_matlab_simbio.zip" download>Pazopanib_Bins2019_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_sbml.zip" download>Pazopanib_Bins2019_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_cellml.zip" download>Pazopanib_Bins2019_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final.svg" alt="Pazopanib_Bins2019_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 0.39 /h, lag 58.2 min, F 466). Doses in the paper: 200–1000 mg.

<dbs-fmusim paramsurl="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_pazopanib/Pazopanib_Bins2019_final/Pazopanib_Bins2019_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Pazopanib_Bins2019_final_params.json` · controls `Pazopanib_Bins2019_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:37 UTC</sub>
