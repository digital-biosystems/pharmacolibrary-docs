<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;hydroxychloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/&quot;},{&quot;label&quot;:&quot;Zahr_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_estimate&quot;,&quot;label&quot;:&quot;Balevic_2019_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_postnatal&quot;,&quot;label&quot;:&quot;Balevic_2019_postnatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_postnatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_prenatal&quot;,&quot;label&quot;:&quot;Balevic_2019_prenatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_corresponding_estimated_value&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_corresponding_estimated_value_in_model_by_carmichael_et_al_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_estimate&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Zahr2021_reference&quot;,&quot;label&quot;:&quot;Zahr_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydroxychloroquine — `Hydroxychloroquine_Zahr2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 07:02 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="hydroxychloroquine" model-id="Hydroxychloroquine_Zahr2021_reference" status="extracted" stale="true" population="hospitalized adults with COVID-19" measured-compound="hydroxychloroquine" parameterization="apparent" topology="1C"></div>

## Citation
Zahr N, Urien S, Llopis B, Pourcher V, Paccoud O, Bleibtreu A et al. Pharmacokinetics and pharmacodynamics of hydroxychloroquine in hospitalized patients with COVID-19. Therapie 76(4):285–295 (2021).
  ·  DOI: [10.1016/j.therap.2021.01.056](https://doi.org/10.1016/j.therap.2021.01.056)

## Population and dosing

**Population:** hospitalized adults with COVID-19 · condition COVID-19 · age group adult · n = 104.

**Dosing:** 200, 800 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference.svg" alt="Hydroxychloroquine_Zahr2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka, h-1 | kabs | 0.75 | h-1 |  |
| V/F, L | V/F | 1.990 | L | 15.9 |
| β, V/F*(BW/70)β | Vnorm/F | 1 | L |  |
| CL/F | CL/F | 14.7 | L/h | 13.5 |
| β, CL/F*(BW/70)β | allometric_exponent | 0.75 |  |  |
| β, V/F*(PLAT/300,000)β | equation variable | -0.726 |  | 37 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hydroxychloroquine model was quarantined because clearance, volume of distribution, absorption rate constant and absorption lag time had no source values and library placeholders were substituted.**

The record lists kabs 1.15 h-1, V/F 16.1 L and CL/F 25.1 L, but the model builder left clearance, volume of distribution, absorption rate constant and absorption lag time without values, so library placeholders stood in and the model was held back rather than published with invented numbers. The absorption rate constant was defaulted although not reported in the source, judged not acceptable. The model also assumed F=1 and Fm=1 with no molar correction (apparent parameterization). A second reader disagreed on the dosed compound, reading hydroxychloroquine sulfate where this record says hydroxychloroquine. Extracted — hydroxychloroquine: kabs 1.15, V/F 16.1, CL/F 25.1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of β, v/f*(bw/70)β: this record has 1, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka, h-1 | `Q49` · kabs | 0.75 | h-1 | 0.0002083 | 1/s | 1/h |  | exact (1) | tbl0015:row1:col1, Zahr_2021_table_4:row0:col1 |
| V/F, L | `Q76` · V/F | 1.990 | L | 0.00199 | m3 | l | 15.9 | exact (1) | tbl0015:row2:col1, tbl0015:row2:col2, Zahr_2021_table_4:row1:col1, Zahr_2021_table_4:row1:col2 |
| β, V/F*(BW/70)β | `Q353` · Vnorm/F | 1 | L | 0.001 | m3 | L |  | llm_corrected (0.6) | tbl0015:row3:col1, Zahr_2021_table_4:row2:col1 |
| CL/F | `Q27` · CL/F | 14.7 | L/h | 4.083e-06 | m3/s | L/h | 13.5 | exact (1) | tbl0015:row4:col1, tbl0015:row4:col2, Zahr_2021_table_4:row4:col1, Zahr_2021_table_4:row4:col2 |
| β, CL/F*(BW/70)β | `Q319` · allometric_exponent | 0.75 |  |  |  |  |  | llm_corrected (0.6) | tbl0015:row5:col1, Zahr_2021_table_4:row5:col1 |
| β, V/F*(PLAT/300,000)β | `Q900` · equation variable | -0.726 |  |  |  |  | 37 | llm_corrected (0.6) | Zahr_2021_table_4:row3:col1, Zahr_2021_table_4:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q76 ('ηV/F', value '0.61') — already have one for this compound
- dropped duplicate Q27 ('ηCL/F', value '0.69') — already have one for this compound
- implicit units: 'β, V/F*(BW/70)β' → L (from the paper text: 'Abstract: "Vd/F ... 6690 L"; Table 1 caption: "V/F, L: apparent volume of distribution, liter"')
- implicit units: 'CL/F' → L/h (from the paper text: 'Abstract: "CL/F ... 45.9 L/h"; Table 1 caption: "CL/F, L/h: apparent elimination clearance, liter/hour"')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=hydroxychloroquine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 4 transcribed (11 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[β, v/f*(bw/70)β]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β, v/f*(plat/300,000)β]` | -0.726 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tbl0015:row4:col1', 'tbl0015:row4:col2', 'Zahr_2021_table_4:row4:col1', 'Zahr_2021_table_4:row4:col2'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['tbl0015:row3:col1', 'Zahr_2021_table_4:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl0015:row1:col1', 'Zahr_2021_table_4:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tbl0015:row2:col1', 'tbl0015:row2:col2', 'Zahr_2021_table_4:row1:col1', 'Zahr_2021_table_4:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.7 L/h | ['tbl0015:row4:col1', 'tbl0015:row4:col2', 'Zahr_2021_table_4:row4:col1', 'Zahr_2021_table_4:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.99 L | ['tbl0015:row2:col1', 'tbl0015:row2:col2', 'Zahr_2021_table_4:row1:col1', 'Zahr_2021_table_4:row1:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_modelica.zip" download>Hydroxychloroquine_Zahr2021_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_fmi.zip" download>Hydroxychloroquine_Zahr2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_matlab.zip" download>Hydroxychloroquine_Zahr2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_matlab_simbio.zip" download>Hydroxychloroquine_Zahr2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_sbml.zip" download>Hydroxychloroquine_Zahr2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_cellml.zip" download>Hydroxychloroquine_Zahr2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3359 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.000516 | kg |
| input | model | `Cl` | 4.083e-06 | m3/s |
| input | model | `VdPerKg` | 2.843e-05 | m3/kg |
| input | model | `ka` | 0.0002083 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zahr N, Urien S, Llopis B, Pourcher V, Paccoud O, Bleibtreu A et al. Pharmacokinetics and pharmacodynamics of hydroxychloroquine in hospitalized patients with COVID-19. Therapie 76(4):285–295 (2021). [doi:10.1016/j.therap.2021.01.056](https://doi.org/10.1016/j.therap.2021.01.056)

**This record:** Pharmacolibrary v26.09, model `Hydroxychloroquine_Zahr2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference>

```bibtex
@misc{pharmacolibrary_HydroxychloroquineZahr2021reference,
  title  = {{Pharmacolibrary model Hydroxychloroquine_Zahr2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference},
  note   = {Parameters from doi:10.1016/j.therap.2021.01.056},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 516 mg, single dose, first-order absorption (ka 0.75 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 516 mg oral (P01BA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference/Hydroxychloroquine_Zahr2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Hydroxychloroquine_Zahr2021_reference_params.json` · controls `Hydroxychloroquine_Zahr2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxychloroquine%5D%20Hydroxychloroquine_Zahr2021_reference&body=Drug%3A%20hydroxychloroquine%0ARecord%3A%20Hydroxychloroquine_Zahr2021_reference%0APaper%3A%20Zahr_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:02 UTC</sub>
