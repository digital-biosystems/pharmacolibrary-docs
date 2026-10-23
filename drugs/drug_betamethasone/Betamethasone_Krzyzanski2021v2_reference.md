<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;betamethasone&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/&quot;},{&quot;label&quot;:&quot;Krzyzanski_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betamethasone_Krzyzanski2021v2_reference&quot;,&quot;label&quot;:&quot;Krzyzanski_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# betamethasone — `Betamethasone_Krzyzanski2021v2_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Rejected), but the paper was screened again on 2026-10-04 19:13 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="betamethasone" model-id="Betamethasone_Krzyzanski2021v2_reference" status="extracted" stale="true" population="healthy nonpregnant Indian women" measured-compound="betamethasone" parameterization="apparent" topology="1C"></div>

## Citation
Krzyzanski W, Milad MA, Jobe AH, Peppard T, Bies RR, Jusko WJ. Population pharmacokinetic modeling of intramuscular and oral dexamethasone and betamethasone in Indian women. Journal of pharmacokinetics and pharmacodynamics 48(2):261–272 (2021).
  ·  DOI: [10.1007/s10928-020-09730-z](https://doi.org/10.1007/s10928-020-09730-z)

## Population and dosing

**Population:** healthy nonpregnant Indian women · condition healthy · age group adult · n = &gt;=48.

**Dosing:** 6 mg, im, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference.svg" alt="Betamethasone_Krzyzanski2021v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/FIM, L/h | CLm/F | 9.29 | L/h | 8.6 |
| Vp/FIM, L | V/F | 51.3 | L | 3.2 |
| kaIM, 1/h | kabs | 0.460 | 1/h | 3.6 |
| Fr | FR | 1.04 |  | 9.7 |
| Fra | Fab | 0.819 |  | 9.1 |
| CLD/FIM, L/h | CL/F | 0.538 | L/h | 4.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The betamethasone record was rejected because the absorption half-life parameter t1/2ka is dimensionally inconsistent: it is reported as 0.00638 with unit 1/h, a rate unit, while a half-life must carry units of time.**

In the Krzyzanski_2021_2 model for betamethasone in healthy nonpregnant Indian women, the parameter labeled kaIMa is documented as the half-life of the absorption phase, which should be expressed in hours, but its reported unit is 1/h, matching a rate constant rather than a half-life. This dimension mismatch on a structural parameter triggered the rejection. Additionally, the unit of this parameter could not be converted to SI, so it reached the model builder without an SI value. The remaining parameters (CLm/F 9.29 L/h, V/F 51.3 L, kabs 0.460 1/h, CL/F 0.538 L/h, FR 1.04, Fab 0.819) show no such conflict. Extracted — betamethasone: CLm/F 9.29 L/h, V/F 51.3 L, kabs 0.46 1/h, t1/2ka 0.00638 1/h, FR 1.04, Fab 0.819, CL/F 0.538 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has betamethasone, the second reading betamethasone phosphate; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/FIM, L/h | `Q351` · CLm/F | 9.29 | L/h | 2.581e-06 | m3/s | l/h | 8.6 | llm_confirmed (0.6) | Tab4:row1:col2, Krzyzanski_2021_2_table_3:row0:col2 |
| Vp/FIM, L | `Q76` · V/F | 51.3 | L | 0.0513 | m3 | l | 3.2 | llm (0.6) | Tab4:row2:col2, Krzyzanski_2021_2_table_3:row1:col2 |
| kaIM, 1/h | `Q49` · kabs | 0.460 | 1/h | 0.0001278 | 1/s | 1/h | 3.6 | llm (0.6) | Tab4:row3:col2, Krzyzanski_2021_2_table_3:row2:col2 |
| Fr | `Q43` · FR | 1.04 |  |  |  |  | 9.7 | exact (1) | Tab4:row6:col2, Krzyzanski_2021_2_table_3:row4:col2 |
| Fra | `Q40` · Fab | 0.819 |  |  |  |  | 9.1 | llm (0.6) | Tab4:row7:col2 |
| CLD/FIM, L/h | `Q27` · CL/F | 0.538 | L/h | 1.494e-07 | m3/s | l/h | 4.1 | llm (0.6) | Tab4:row8:col2, Krzyzanski_2021_2_table_3:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q49 ('kaIMa, 1/h', value '0.00638') — already have one for this compound
- dropped duplicate Q49 ('kaPO, 1/h', value '0.936') — already have one for this compound
- dropped duplicate Q76 ('VT/FIM, L', value '5.06') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=betamethasone

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '0.0210 (13.9) (14.6)*'
- unparsed cell Tab4:row2:col3 = '0.0188 (10.7) (13.8)*'
- unparsed cell Tab4:row3:col3 = '0.0441 (7.9) (21.2)*'
- unparsed cell Tab4:row4:col3 = '0.147 (2.1) (39.8)*'
- unparsed cell Tab4:row5:col3 = '0.241 (0.8) (52.2)*'
- unparsed cell Tab4:row6:col3 = '0.0182 (8.1) (13.6)*'
- unparsed cell Tab4:row7:col3 = '0.00773 (0.02) (8.8)*'
- unparsed cell Krzyzanski_2021_2_table_3:row0:col3 = '0.0265 (4.7) (16.4)*'
- unparsed cell Krzyzanski_2021_2_table_3:row1:col3 = '0**'
- unparsed cell Krzyzanski_2021_2_table_3:row2:col3 = '0.0633 (29.7) (25.6)*'
- unparsed cell Krzyzanski_2021_2_table_3:row3:col3 = '0.395 (23.6) (69.6)*'
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (9/18 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/fim].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[cl/fim].value` | 9.29 | 5.95 | mismatch |
| `gpt-oss-120b` | `parameters[cld/fim]` | 0.538 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fr].value` | 1.04 | 0.935 | mismatch |
| `gpt-oss-120b` | `parameters[kaim].value` | 0.460 | 0.971 | mismatch |
| `gpt-oss-120b` | `parameters[vp/fim].parameter_id` | Q76 | Q78 | mismatch |
| `gpt-oss-120b` | `parameters[vp/fim].value` | 51.3 | 67.5 | mismatch |
| `gpt-oss-120b` | `parameters[vt/fim]` |  | 4.94 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | betamethasone | betamethasone phosphate | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row8:col2', 'Krzyzanski_2021_2_table_3:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab4:row1:col2', 'Krzyzanski_2021_2_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row3:col2', 'Krzyzanski_2021_2_table_3:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab4:row2:col2', 'Krzyzanski_2021_2_table_3:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.538 L/h | ['Tab4:row8:col2', 'Krzyzanski_2021_2_table_3:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 51.3 L | ['Tab4:row2:col2', 'Krzyzanski_2021_2_table_3:row1:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_modelica.zip" download>Betamethasone_Krzyzanski2021v2_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_fmi.zip" download>Betamethasone_Krzyzanski2021v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_matlab.zip" download>Betamethasone_Krzyzanski2021v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_matlab_simbio.zip" download>Betamethasone_Krzyzanski2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_sbml.zip" download>Betamethasone_Krzyzanski2021v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_cellml.zip" download>Betamethasone_Krzyzanski2021v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3925 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-06 | kg |
| input | model | `Cl` | 2.581e-06 | m3/s |
| input | model | `VdPerKg` | 0.0007329 | m3/kg |
| input | model | `ka` | 0.0001278 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Krzyzanski W, Milad MA, Jobe AH, Peppard T, Bies RR, Jusko WJ. Population pharmacokinetic modeling of intramuscular and oral dexamethasone and betamethasone in Indian women. Journal of pharmacokinetics and pharmacodynamics 48(2):261–272 (2021). [doi:10.1007/s10928-020-09730-z](https://doi.org/10.1007/s10928-020-09730-z)

**This record:** Pharmacolibrary v26.09, model `Betamethasone_Krzyzanski2021v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference>

```bibtex
@misc{pharmacolibrary_BetamethasoneKrzyzanski2021v2reference,
  title  = {{Pharmacolibrary model Betamethasone_Krzyzanski2021v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference},
  note   = {Parameters from doi:10.1007/s10928-020-09730-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 6 mg, single dose, first-order absorption (ka 0.46 /h, F 1). Dose in the paper: 6 mg.

<dbs-fmusim paramsurl="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Betamethasone_Krzyzanski2021v2_reference_params.json` · controls `Betamethasone_Krzyzanski2021v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbetamethasone%5D%20Betamethasone_Krzyzanski2021v2_reference&body=Drug%3A%20betamethasone%0ARecord%3A%20Betamethasone_Krzyzanski2021v2_reference%0APaper%3A%20Krzyzanski_2021_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-04 19:13 UTC</sub>
