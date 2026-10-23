<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;bendamustine&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/&quot;},{&quot;label&quot;:&quot;Kim_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bendamustine_Kim2018_reference&quot;,&quot;label&quot;:&quot;Kim_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Kim2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bendamustine_Radhakrishnan2019_reference&quot;,&quot;label&quot;:&quot;Radhakrishnan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Radhakrishnan2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bendamustine — `Bendamustine_Kim2018_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-07 16:09 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="bendamustine" model-id="Bendamustine_Kim2018_reference" status="extracted" stale="true" population="primary central nervous system lymphoma" measured-compound="bendamustine" parameterization="mechanistic" topology="2C"></div>

## Citation
Kim T, Choi HY, Lee HS, Jung SH, Ahn JS, Kim HJ et al. Clinical response and pharmacokinetics of bendamustine as a component of salvage R-B(O)AD therapy for the treatment of primary central nervous system lymphoma (PCNSL). BMC cancer 18(1):729 (2018).
  ·  DOI: [10.1186/s12885-018-4632-y](https://doi.org/10.1186/s12885-018-4632-y)

## Population and dosing

**Population:** primary central nervous system lymphoma · condition primary central nervous system lymphoma · age group adult.

**Dosing:** 75 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference.svg" alt="Bendamustine_Kim2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V1 | V1 | 20.7 | L | 19.2 | 0.480 (42.9% RSE) |
| CL | CL | 39.2 | L/h | 10.5 | 0.190 (39.9% RSE) |
| V2 | V2 | 0.846 | L | 14.4 |  |
| Q1 | Q | 0.660 | L/h | 15.3 |  |
| V3 | V3 | 0.442 | L | 9.8 |  |
| Q3 | Q3 | 1.360 | L/h | 16.8 |  |
| K a | kabs | 6.0 | h−1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for bendamustine's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant.**

The model was built, but bendamustine's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — bendamustine: V1 14.9, CL 32.5, V2 0.508, Q 0.238, V3 0.323, Q3 0.793.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 39.2, the second reading 32.5; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 20.7 | L | 0.0207 | m3 | L | 19.2 | exact (1) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5 | 0.480 (42.9% RSE) |
| CL | `Q22` · CL | 39.2 | L/h | 1.089e-05 | m3/s | L/h | 10.5 | exact (1) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | 0.190 (39.9% RSE) |
| V2 | `Q64` · V2 | 0.846 | L | 0.000846 | m3 | L | 14.4 | exact (1) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 |  |
| Q1 | `Q30` · Q | 0.660 | L/h | 1.833e-07 | m3/s | L/h | 15.3 | exact (1) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5 |  |
| V3 | `Q77` · V3 | 0.442 | L | 0.000442 | m3 | L | 9.8 | exact (1) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 |  |
| Q3 | `Q308` · Q3 | 1.360 | L/h | 3.778e-07 | m3/s | L/h | 16.8 | exact (1) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 |  |
| K a | `Q49` · kabs | 6.0 | h−1 | 0.001667 | 1/s | 1/h |  | review_gapfill (0.7) | Lammers_2017:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q30 ('Q2', value '0.836') — already have one for this compound
- dropped duplicate Q77 ('V4', value '0.041') — already have one for this compound
- dropped duplicate Q22 ('CLcsf', value '0.140') — already have one for this compound
- dropped unlinked row (NIL): 'RV' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4', 'Tab2:row13:col5'])
- implicit units: 'V1' → L (from the paper text: 'The text states: "The overall volume of distribution in plasma (Vplasma = V1 + V2 = 19.7 L)".')
- implicit units: 'CL' → L/h (from the paper text: 'The text states: "elimination clearance from the central plasma compartment (32.5 L/hr. for patient with BSA = 1.675)".')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a volume of distribution. The text establishes the scale for plasma volumes in Liters (V1+V2=19.7 L), and 0.846 is')
- implicit units: 'Q1' → L/h (from the popPK convention: 'Q1 is an intercompartmental clearance. By convention in population PK, clearances are expressed in L/h, and the magnitud')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a volume of distribution (biophase/CSF compartment). Volumes are conventionally in L, and the magnitude is consist')
- implicit units: 'Q3' → L/h (from the popPK convention: 'Q3 is an intercompartmental clearance. By convention in population PK, clearances are expressed in L/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bendamustine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- gap-filled Q49 (kabs) from Lammers_2017's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (10/18 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 39.2 | 32.5 | mismatch |
| `gpt-oss-120b` | `parameters[k a]` | 6.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1].value` | 0.660 | 0.238 | mismatch |
| `gpt-oss-120b` | `parameters[q3].value` | 1.360 | 0.793 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 20.7 | 14.9 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 0.846 | 0.508 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 0.442 | 0.323 | mismatch |
| `gpt-oss-120b` | `parameters[v4]` |  | 0.032 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lammers_2017:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.2 | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.2 L/h | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.7 L | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.846 L | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2669 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.397 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.015 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.3 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.5 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_modelica.zip" download>Bendamustine_Kim2018_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_fmi.zip" download>Bendamustine_Kim2018_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_matlab.zip" download>Bendamustine_Kim2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_matlab_simbio.zip" download>Bendamustine_Kim2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_sbml.zip" download>Bendamustine_Kim2018_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_cellml.zip" download>Bendamustine_Kim2018_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3583 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.089e-05 | m3/s |
| input | model | `VdPerKg` | 0.0002957 | m3/kg |
| input | model | `k12` | 8.857e-06 | 1/s |
| input | model | `k21` | 0.0002167 | 1/s |
| input | model | `ka` | 0.001667 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim T, Choi HY, Lee HS, Jung SH, Ahn JS, Kim HJ et al. Clinical response and pharmacokinetics of bendamustine as a component of salvage R-B(O)AD therapy for the treatment of primary central nervous system lymphoma (PCNSL). BMC cancer 18(1):729 (2018). [doi:10.1186/s12885-018-4632-y](https://doi.org/10.1186/s12885-018-4632-y)

**This record:** Pharmacolibrary v26.09, model `Bendamustine_Kim2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bendamustine/Bendamustine_Kim2018_reference>

```bibtex
@misc{pharmacolibrary_BendamustineKim2018reference,
  title  = {{Pharmacolibrary model Bendamustine_Kim2018_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bendamustine/Bendamustine_Kim2018_reference},
  note   = {Parameters from doi:10.1186/s12885-018-4632-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 6 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_bendamustine/Bendamustine_Kim2018_reference/Bendamustine_Kim2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Bendamustine_Kim2018_reference_params.json` · controls `Bendamustine_Kim2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbendamustine%5D%20Bendamustine_Kim2018_reference&body=Drug%3A%20bendamustine%0ARecord%3A%20Bendamustine_Kim2018_reference%0APaper%3A%20Kim_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bendamustine/Bendamustine_Kim2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:09 UTC</sub>
