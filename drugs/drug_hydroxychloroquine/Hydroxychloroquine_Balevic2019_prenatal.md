<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;hydroxychloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/&quot;},{&quot;label&quot;:&quot;Balevic_2019 \u00b7 prenatal&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_estimate&quot;,&quot;label&quot;:&quot;Balevic_2019_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_postnatal&quot;,&quot;label&quot;:&quot;Balevic_2019_postnatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_postnatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_prenatal&quot;,&quot;label&quot;:&quot;Balevic_2019_prenatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_corresponding_estimated_value&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_corresponding_estimated_value_in_model_by_carmichael_et_al_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_estimate&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Zahr2021_reference&quot;,&quot;label&quot;:&quot;Zahr_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydroxychloroquine — `Hydroxychloroquine_Balevic2019_prenatal`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="hydroxychloroquine" model-id="Hydroxychloroquine_Balevic2019_prenatal" status="curated_candidate" stale="false" population="pregnant women with rheumatic disease" measured-compound="hydroxychloroquine" parameterization="apparent" topology="1C"></div>

## Citation
Balevic SJ, Green TP, Clowse MEB, Eudy AM, Schanberg LE, Cohen-Wolkowiez M. Pharmacokinetics of Hydroxychloroquine in Pregnancies with Rheumatic Diseases. Clinical pharmacokinetics 58(4):525–533 (2019).
  ·  DOI: [10.1007/s40262-018-0712-z](https://doi.org/10.1007/s40262-018-0712-z)

## Population and dosing

**Population:** pregnant women with rheumatic disease · condition rheumatic disease (SLE and other) in pregnancy · age group adult · n = 45.

**Dosing:** 400 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal.svg" alt="Hydroxychloroquine_Balevic2019_prenatal diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| 75% | AUC%ext | 5236.5 |  |
| Mean | equation variable | 4753.7 |  |
| V/F (model B) | V/F | 2000 | L/70 kg |
| CL/F (model B) | CL/F | 47 | L/hr |
| KA (fixed) | kabs | 1.15 | 1/h |
| Lag (fixed) | tlag | 0.389 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.545). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 25%: this record has none, the second reading 3985.6; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 75% | `Q84` · AUC%ext | 5236.5 |  |  |  |  | llm (0.6) | Balevic_2019_table_3:row3:col1, Balevic_2019_table_3:row3:col2, Balevic_2019_table_3:row3:col3 |
| Mean | `Q900` · equation variable | 4753.7 |  |  |  |  | llm (0.6) | Balevic_2019_table_3:row4:col1, Balevic_2019_table_3:row4:col2, Balevic_2019_table_3:row4:col3 |
| V/F (model B) | `Q76` · V/F | 2000 | L/70 kg | 2 | m3 | L | exact (1) | Balevic_2019:other_prose |
| CL/F (model B) | `Q27` · CL/F | 47 | L/hr | 1.306e-05 | m3/s | L/h | exact (1) | Balevic_2019:other_prose |
| KA (fixed) | `Q49` · kabs | 1.15 | 1/h | 0.0003194 | 1/s | 1/h | review_gapfill (0.7) | Alvarez_2022:review |
| Lag (fixed) | `Q83` · tlag | 0.389 | h | 1400 | s | h | review_gapfill (0.7) | Alvarez_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Balevic_2019_table_3:row1:col1', 'Balevic_2019_table_3:row1:col2', 'Balevic_2019_table_3:row1:col3'])
- dropped unlinked row (NIL): '25%' — extend the ontology if this is a real PK parameter (source ['Balevic_2019_table_3:row2:col1', 'Balevic_2019_table_3:row2:col2', 'Balevic_2019_table_3:row2:col3'])
- routed 'SD' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'SE' — extend the ontology if this is a real PK parameter (source ['Balevic_2019_table_3:row6:col1', 'Balevic_2019_table_3:row6:col2', 'Balevic_2019_table_3:row6:col3'])
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CV'
- dropped value-less row: 'dVdWT'
- dropped value-less row: 'Ka'
- dropped value-less row: 'RSE'
- dropped value-less row: 'V/F'
- salvaged Q76 ('V/F (model B)'=2000) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F (model B)'=47) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=hydroxychloroquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'prenatal' subgroup of Balevic_2019 (paper reports 3 populations: estimate, postnatal, prenatal)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Alvarez_2022's review values (primary lacked it)
- gap-filled Q83 (tlag) from Alvarez_2022's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Balevic_2019_table_3:row7:col7 = '&lt;0.001'
- companion parameter table 3 transcribed (56 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[25%]` |  | 3985.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[75%]` | 5236.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 0.389 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean]` | 4753.7 |  | only_one_extracted |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alvarez_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Alvarez_2022:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 47 L/h | ['Balevic_2019:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2e+03 L | ['Balevic_2019:other_prose'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=hydroxychloroquine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_modelica.zip" download>Hydroxychloroquine_Balevic2019_prenatal_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_fmi.zip" download>Hydroxychloroquine_Balevic2019_prenatal_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_matlab.zip" download>Hydroxychloroquine_Balevic2019_prenatal_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_matlab_simbio.zip" download>Hydroxychloroquine_Balevic2019_prenatal_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_sbml.zip" download>Hydroxychloroquine_Balevic2019_prenatal_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_cellml.zip" download>Hydroxychloroquine_Balevic2019_prenatal_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
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
| input | dosing | `Tlag` | 1400 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 1.306e-05 | m3/s |
| input | model | `VdPerKg` | 0.02857 | m3/kg |
| input | model | `ka` | 0.0003194 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Balevic SJ, Green TP, Clowse MEB, Eudy AM, Schanberg LE, Cohen-Wolkowiez M. Pharmacokinetics of Hydroxychloroquine in Pregnancies with Rheumatic Diseases. Clinical pharmacokinetics 58(4):525–533 (2019). [doi:10.1007/s40262-018-0712-z](https://doi.org/10.1007/s40262-018-0712-z)

**This record:** Pharmacolibrary v26.09, model `Hydroxychloroquine_Balevic2019_prenatal`. <https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal>

```bibtex
@misc{pharmacolibrary_HydroxychloroquineBalevic2019prenatal,
  title  = {{Pharmacolibrary model Hydroxychloroquine_Balevic2019_prenatal}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal},
  note   = {Parameters from doi:10.1007/s40262-018-0712-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 1.15 /h, lag 23.3 min, F 1). Dose in the paper: 400 mg.

<dbs-fmusim paramsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal/Hydroxychloroquine_Balevic2019_prenatal_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Hydroxychloroquine_Balevic2019_prenatal_params.json` · controls `Hydroxychloroquine_Balevic2019_prenatal_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxychloroquine%5D%20Hydroxychloroquine_Balevic2019_prenatal&body=Drug%3A%20hydroxychloroquine%0ARecord%3A%20Hydroxychloroquine_Balevic2019_prenatal%0APaper%3A%20Balevic_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:02 UTC</sub>
