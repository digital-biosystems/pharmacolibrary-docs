<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;azithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/&quot;},{&quot;label&quot;:&quot;Benn_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azithromycin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azithromycin_Benn2017_reference&quot;,&quot;label&quot;:&quot;Benn_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Benn2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Azithromycin_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azithromycin/Azithromycin_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azithromycin — `Azithromycin_Benn2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability for azithromycin was omitted from the extracted record, leaving its value undefined for the model.

<div class="pk-model-meta" hidden drug="azithromycin" model-id="Azithromycin_Benn2017_reference" status="needs_review" stale="false" population="paediatric oncology patient" measured-compound="azithromycin" parameterization="mechanistic" topology="2C"></div>

## Citation
Benn K, Salman S, Page-Sharp M, Davis TME, Buttery JP. Bradycardia and Hypothermia Complicating Azithromycin Treatment. The American journal of case reports 18:883–886 (2017).
  ·  DOI: [10.12659/ajcr.905400](https://doi.org/10.12659/ajcr.905400)

## Population and dosing

**Population:** paediatric oncology patient · condition febrile neutropenia · age group child · n = 1.

**Dosing:** 85, 170 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference.svg" alt="Azithromycin_Benn2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance (L/h) | CL | 18.1 | L/h |
| Central volume of distribution (L) | V1 | 305 | L |
| Inter-compartmental clearance (L/h) | Q | 46.2 | L/h |
| Peripheral volume of distribution (L) | V2 | 451 | L |
| Distribution half-life (h) | t1/2α | 2.4 | h |
| Terminal elimination half-life (h) | t1/2z | 33 | h |
| Total area under the curve to infinity (μg.h/L) | AUC∞ | 18.785 | μg.h/L |
| Ka | kabs | 0.71 | 1/h |
| Tlag | tlag | 0.75 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability for azithromycin was omitted from the extracted record, leaving its value undefined for the model.**

The paper lists parameters like clearance and volume but provides no estimate for bioavailability. Consequently, the model lacks a data-supported bioavailability value from Benn_2017. The simulated profile therefore relies on a standard convention rather than a specific study result. Extracted — azithromycin: CL 18.1 L/h, V1 305 L, Q 46.2 L/h, V2 451 L, t1/2α 2.4 h, t1/2z 33 h, AUC∞ 18.8 μg.h/L, kabs 0.71 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azithromycin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) | `Q22` · CL | 18.1 | L/h | 5.028e-06 | m3/s | l/h | exact (1) | t1-amjcaserep-18-883:row2:col1 |
| Central volume of distribution (L) | `Q63` · V1 | 305 | L | 0.305 | m3 | l | boundary_compartment (0.9) | t1-amjcaserep-18-883:row3:col1 |
| Inter-compartmental clearance (L/h) | `Q30` · Q | 46.2 | L/h | 1.283e-05 | m3/s | l/h | llm_confirmed (0.6) | t1-amjcaserep-18-883:row4:col1 |
| Peripheral volume of distribution (L) | `Q64` · V2 | 451 | L | 0.451 | m3 | l | boundary_compartment (0.9) | t1-amjcaserep-18-883:row5:col1 |
| Distribution half-life (h) | `Q59` · t1/2α | 2.4 | h | 8640 | s | h | llm (0.6) | t1-amjcaserep-18-883:row9:col1 |
| Terminal elimination half-life (h) | `Q57` · t1/2z | 33 | h | 1.188e+05 | s | h | llm (0.6) | t1-amjcaserep-18-883:row10:col1 |
| Total area under the curve to infinity (μg.h/L) | `Q17` · AUC∞ | 18.785 | μg.h/L |  |  | (h·µg)/l | llm_corrected (0.6) | t1-amjcaserep-18-883:row15:col1 |
| Ka | `Q49` · kabs | 0.71 | 1/h | 0.0001972 | 1/s | 1/h | review_gapfill (0.7) | Alshehri_2023:review |
| Tlag | `Q83` · tlag | 0.75 | h | 2700 | s | h | review_gapfill (0.7) | Alshehri_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'First dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row12:col1'])
- dropped unlinked row (NIL): 'Second dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row13:col1'])
- dropped unlinked row (NIL): 'Third dose' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row14:col1'])
- dropped unlinked row (NIL): 'Baseline heart rate (beats/min)' — extend the ontology if this is a real PK parameter (source ['t1-amjcaserep-18-883:row17:col1'])
- dropped PD-category row 'Half maximal effective concentration (EC50) (μg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row18:col1'])
- dropped PD-category row 'Maximal effect (Emax) (beats/min)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row19:col1'])
- dropped PD-category row 'Hill coefficient' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t1-amjcaserep-18-883:row20:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=azithromycin
- gap-filled Q49 (kabs) from Alshehri_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Alshehri_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell t1-amjcaserep-18-883:row10:col2 = '31.6±6.6*'
- unparsed cell t1-amjcaserep-18-883:row12:col2 = '224±120*'
- unparsed cell t1-amjcaserep-18-883:row15:col2 = '7.364±2.604*'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[first dose]` |  | 530 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[third dose]` |  | 378 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | azithromycin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | azithromycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['t1-amjcaserep-18-883:row15:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t1-amjcaserep-18-883:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t1-amjcaserep-18-883:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Alshehri_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['t1-amjcaserep-18-883:row10:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['t1-amjcaserep-18-883:row9:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t1-amjcaserep-18-883:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t1-amjcaserep-18-883:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Alshehri_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.1 | ['t1-amjcaserep-18-883:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.1 L/h | ['t1-amjcaserep-18-883:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 305 L | ['t1-amjcaserep-18-883:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 451 L | ['t1-amjcaserep-18-883:row5:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=azithromycin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_modelica.zip" download>Azithromycin_Benn2017_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_fmi.zip" download>Azithromycin_Benn2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_matlab.zip" download>Azithromycin_Benn2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_matlab_simbio.zip" download>Azithromycin_Benn2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_sbml.zip" download>Azithromycin_Benn2017_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_cellml.zip" download>Azithromycin_Benn2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.749 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 2700 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8.5e-05 | kg |
| input | model | `Cl` | 5.028e-06 | m3/s |
| input | model | `VdPerKg` | 0.004357 | m3/kg |
| input | model | `k12` | 4.208e-05 | 1/s |
| input | model | `k21` | 2.846e-05 | 1/s |
| input | model | `ka` | 0.0001972 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Benn K, Salman S, Page-Sharp M, Davis TME, Buttery JP. Bradycardia and Hypothermia Complicating Azithromycin Treatment. The American journal of case reports 18:883–886 (2017). [doi:10.12659/ajcr.905400](https://doi.org/10.12659/ajcr.905400)

**This record:** Pharmacolibrary v26.09, model `Azithromycin_Benn2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_azithromycin/Azithromycin_Benn2017_reference>

```bibtex
@misc{pharmacolibrary_AzithromycinBenn2017reference,
  title  = {{Pharmacolibrary model Azithromycin_Benn2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_azithromycin/Azithromycin_Benn2017_reference},
  note   = {Parameters from doi:10.12659/ajcr.905400},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 85 mg, single dose, first-order absorption (ka 0.71 /h, lag 45 min, F 0.9). Doses in the paper: 85, 170 mg.

<dbs-fmusim paramsurl="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_azithromycin/Azithromycin_Benn2017_reference/Azithromycin_Benn2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Azithromycin_Benn2017_reference_params.json` · controls `Azithromycin_Benn2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazithromycin%5D%20Azithromycin_Benn2017_reference&body=Drug%3A%20azithromycin%0ARecord%3A%20Azithromycin_Benn2017_reference%0APaper%3A%20Benn_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azithromycin/Azithromycin_Benn2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:33 UTC</sub>
