<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/&quot;},{&quot;label&quot;:&quot;Watson_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tafenoquine_Watson2022_reference&quot;,&quot;label&quot;:&quot;Watson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafenoquine — `Tafenoquine_Watson2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The tafenoquine model's terminal half-life does not match the paper: the paper reports -3.6 while the model gives 296.8677084269201, a ratio of -82.4633, and the absorption rate ka was defaulted rather than estimated from the paper.

<div class="pk-model-meta" hidden drug="tafenoquine" model-id="Tafenoquine_Watson2022_reference" status="needs_review" stale="false" population="patients with P. vivax malaria and healthy volunteers" measured-compound="tafenoquine" parameterization="apparent" topology="2C"></div>

## Citation
Watson JA, Commons RJ, Tarning J, Simpson JA, Llanos Cuentas A, Lacerda MVG et al. The clinical pharmacology of tafenoquine in the radical cure of. eLife 11 (2022).
  ·  DOI: [10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433)

## Population and dosing

**Population:** patients with P. vivax malaria and healthy volunteers · condition Plasmodium vivax malaria · age group adult · n = 1174.

**Dosing:** 50, 600 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference.svg" alt="Tafenoquine_Watson2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F (%) | Fab | 1 |  |  | 0.0850 (19.2% RSE) |
| MTT (h) | MTT | 3.14 | h | 12.8 | 0.0831 (21.0% RSE) |
| CL/F (L/h) | CL/F | 3.14 | L/h | 8.43 | 0.0338 (18.8% RSE) |
| Vc/F (L) | V1/F | 1330 | L | 12.9 |  |
| Q/F (L/h) | Q/F | 5.82 | L/h | 18.3 | 0.151 (20.5% RSE) |
| Vp/F (L) | V2/F | 311 | L | 14.4 | 0.0256 (25.3% RSE) |
| Tlag,1 | tlag | 0.147 | h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tafenoquine model's terminal half-life does not match the paper: the paper reports -3.6 while the model gives 296.8677084269201, a ratio of -82.4633, and the absorption rate ka was defaulted rather than estimated from the paper.**

Simulated as the paper dosed it, the model's terminal half-life (296.8677084269201) differs from the reported value (-3.5999999999999996) by far more than the tolerance, so the model does not reproduce the paper's profile. The absorption rate ka was not reported in the source and a library default was used instead, which affects the simulated profile without support from this paper. The model also assumes F=1 and Fm=1 with no molar correction, giving an apparent (/F) parameterization with first-order depot input for extravascular dosing. One reported unit could not be converted to SI, so that parameter lacked an SI value; the deviations check returned 'not acceptable' for both the defaulted ka and the invented absorption. Extracted — tafenoquine: Fab 1, MTT 3.14 h, CL/F 3.14 L/h, V1/F 1.33e+03 L, Q/F 5.82 L/h, V2/F 311 L, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of tlag,1: this record has 0.147, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | app6table1:row2:col1 | 0.0850 (19.2% RSE) |
| MTT (h) | `Q81` · MTT | 3.14 | h |  |  | h | 12.8 | exact (1) | app6table1:row3:col1 | 0.0831 (21.0% RSE) |
| CL/F (L/h) | `Q27` · CL/F | 3.14 | L/h | 8.722e-07 | m3/s | l/h | 8.43 | exact (1) | app6table1:row4:col1 | 0.0338 (18.8% RSE) |
| Vc/F (L) | `Q290` · V1/F | 1330 | L | 1.33 | m3 | l | 12.9 | exact (1) | app6table1:row5:col1 |  |
| Q/F (L/h) | `Q69` · Q/F | 5.82 | L/h | 1.617e-06 | m3/s | l/h | 18.3 | exact (1) | app6table1:row6:col1 | 0.151 (20.5% RSE) |
| Vp/F (L) | `Q82` · V2/F | 311 | L | 0.311 | m3 | l | 14.4 | exact (1) | app6table1:row7:col1 | 0.0256 (25.3% RSE) |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h |  | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q27 ('Age – CL/F', value '-0.00434') — already have one for this compound
- dropped unlinked row (NIL): 'Vomit – F' — extend the ontology if this is a real PK parameter (source ['app6table1:row10:col1', 'app6table1:footnote'])
- dropped duplicate Q81 ('Patient – MTT', value '0.937') — already have one for this compound
- dropped duplicate Q290 ('Patient – Vc/F', value '-0.276') — already have one for this compound
- dropped duplicate Q82 ('Patient – Vp/F', value '1.40') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tafenoquine
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell app6table1:row3:col2 = '3.05 (2.30–3.87)'
- unparsed cell app6table1:row4:col2 = '3.14 (2.71–3.70)'
- unparsed cell app6table1:row5:col2 = '1360 (1040–1710)'
- unparsed cell app6table1:row6:col2 = '5.72 (3.99–8.05)'
- unparsed cell app6table1:row7:col2 = '318 (248–424)'
- unparsed cell app6table1:row9:col2 = '–0.00435 (-0.00206–-0.00589)'
- unparsed cell app6table1:row10:col2 = '0.434 (0.315–0.608)'
- unparsed cell app6table1:row11:col2 = '0.929 (0.605–1.51)'
- unparsed cell app6table1:row12:col2 = '–0.282 (-0.0784–-0.395)'
- unparsed cell app6table1:row13:col2 = '1.30 (0.670–1.88)'
- unparsed cell app6table1:row15:col2 = '0.0870 (0.0559–0.120)'
- unparsed cell app6table1:row16:col2 = '0.0887 (0.0585–0.124)'
- unparsed cell app6table1:row17:col2 = '0.0349 (0.0193–0.0451)'
- unparsed cell app6table1:row18:col2 = '0.156 (0.1000–0.226)'
- unparsed cell app6table1:row19:col2 = '0.0265 (0.0153–0.0400)'
- unparsed cell app6table1:row20:col2 = '0.0240 (0.0170–0.0333)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[tlag,1]` | 0.147 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['app6table1:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['app6table1:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['app6table1:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['app6table1:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.14 L/h | ['app6table1:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.33e+03 L | ['app6table1:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | ['app6table1:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=tafenoquine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | -3.6 | 296.9 | -82.46 | days→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 296.9 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 296.9 |  | non-numeric value |
| T1_t_half_beta | reference | pass | 360 | 296.9 | 0.8246 | days→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 296.9 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_modelica.zip" download>Tafenoquine_Watson2022_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_fmi.zip" download>Tafenoquine_Watson2022_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_matlab.zip" download>Tafenoquine_Watson2022_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_matlab_simbio.zip" download>Tafenoquine_Watson2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_sbml.zip" download>Tafenoquine_Watson2022_reference_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_cellml.zip" download>Tafenoquine_Watson2022_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4635 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 529.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 8.722e-07 | m3/s |
| input | model | `VdPerKg` | 0.019 | m3/kg |
| input | model | `k12` | 1.216e-06 | 1/s |
| input | model | `k21` | 5.198e-06 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Watson JA, Commons RJ, Tarning J, Simpson JA, Llanos Cuentas A, Lacerda MVG et al. The clinical pharmacology of tafenoquine in the radical cure of. eLife 11 (2022). [doi:10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433)

**This record:** Pharmacolibrary v26.09, model `Tafenoquine_Watson2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference>

```bibtex
@misc{pharmacolibrary_TafenoquineWatson2022reference,
  title  = {{Pharmacolibrary model Tafenoquine_Watson2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference},
  note   = {Parameters from doi:10.7554/eLife.83433},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.5 /h, lag 8.82 min, F 1). Doses in the paper: 50–600 mg.

<dbs-fmusim paramsurl="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference/Tafenoquine_Watson2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Tafenoquine_Watson2022_reference_params.json` · controls `Tafenoquine_Watson2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafenoquine%5D%20Tafenoquine_Watson2022_reference&body=Drug%3A%20tafenoquine%0ARecord%3A%20Tafenoquine_Watson2022_reference%0APaper%3A%20Watson_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:53 UTC</sub>
