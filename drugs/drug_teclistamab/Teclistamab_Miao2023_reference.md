<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;teclistamab&quot;,&quot;href&quot;:&quot;drugs/drug_teclistamab/&quot;},{&quot;label&quot;:&quot;Miao_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teclistamab_Miao2023_reference&quot;,&quot;label&quot;:&quot;Miao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# teclistamab — `Teclistamab_Miao2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 139, model 366).

<div class="pk-model-meta" hidden drug="teclistamab" model-id="Teclistamab_Miao2023_reference" status="needs_review" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="teclistamab" parameterization="mechanistic" topology="2C"></div>

## Citation
Miao X, Wu LS, Lin SXW, Xu Y, Chen Y, Iwaki Y et al. Population Pharmacokinetics and Exposure-Response with Teclistamab in Patients With Relapsed/Refractory Multiple Myeloma: Results From MajesTEC-1. Targeted oncology 18(5):667–684 (2023).
  ·  DOI: [10.1007/s11523-023-00989-z](https://doi.org/10.1007/s11523-023-00989-z)

## Population and dosing

**Population:** patients with relapsed/refractory multiple myeloma · condition relapsed/refractory multiple myeloma · age group adult · n = &gt;=338.

**Dosing:** 0.021, 0.7, 1.344, 1.4, 4.2, 5.6, 16.8, 50.4, 105, 140, 420, 2100, 10500, 21000 mg, iv, sc, multiple, every 168 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference.svg" alt="Teclistamab_Miao2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL1 (L/day)a | CL | 0.449 | L/day | 14.3 |  |
| CL2 (L/day)b | CLb | 0.547 | L/day | 20.5 |  |
| V1 (L)c | V1 | 4.13 | L | 50.6 | 48.8 (None% RSE) |
| Q (L/day) | Q | 0.0390 | L/day | 55.5 |  |
| V2 (L)d | V2 | 1.34 | L | 26.1 |  |
| Ka (day–1) | kabs | 0.133 | day–1 | 32.1 | 45.2 (None% RSE) |
| Bioavailability | Fab | 0.718 |  | 7.38 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 139, model 366).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — teclistamab: CL 0.449 L/day, CLb 0.547 L/day, V1 4.13 L, Q 0.039 L/day, V2 1.34 L, kabs 0.133 day–1, Fab 0.718.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has teclistamab, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL1 (L/day)a | `Q22` · CL | 0.449 | L/day | 5.197e-09 | m3/s | L/h | 14.3 | llm (0.6) | Tab2:row1:col1, Tab2:row1:col2, Tab2:row1:col4 |  |
| CL2 (L/day)b | `Q23` · CLb | 0.547 | L/day | 6.331e-09 | m3/s | L/h | 20.5 | llm (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col4 |  |
| V1 (L)c | `Q63` · V1 | 4.13 | L | 0.00413 | m3 | L | 50.6 | llm_confirmed (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col4 | 48.8 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.0390 | L/day | 4.514e-10 | m3/s | l/d | 55.5 | exact (1) | Tab2:row11:col1, Tab2:row11:col2 |  |
| V2 (L)d | `Q64` · V2 | 1.34 | L | 0.00134 | m3 | L | 26.1 | llm_confirmed (0.6) | Tab2:row12:col1, Tab2:row12:col2 |  |
| Ka (day–1) | `Q49` · kabs | 0.133 | day–1 | 1.539e-06 | 1/s | 1/d | 32.1 | exact (1) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col4 | 45.2 (None% RSE) |
| Bioavailability | `Q40` · Fab | 0.718 |  |  |  |  | 7.38 | exact (1) | Tab2:row15:col1, Tab2:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'CL1 (L/day)a' routed out of structural estimates ('Interindividual variability (coefficient of variation, %)')
- table section iiv: 'CL2 (L/day)b' routed out of structural estimates ('Interindividual variability (coefficient of variation, %)')
- table section iiv: 'V1 (L)c' routed out of structural estimates ('Interindividual variability (coefficient of variation, %)')
- table section iiv: 'Ka (day–1)' routed out of structural estimates ('Interindividual variability (coefficient of variation, %)')
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row13:col1', 'Tab2:row13:col2'])
- dropped unlinked row (NIL): 'ISS II' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1', 'Tab2:row3:col2'])
- dropped unlinked row (NIL): 'ISS III' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row4:col2'])
- dropped unlinked row (NIL): 'Non-IgG multiple myeloma' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row7:col1', 'Tab2:row7:col2'])
- dropped unlinked row (NIL): 'KDES (day–1)' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL1 (L/day)a' → L/day (from the paper text: "The paper text states: 'The typical population value of time-independent clearance ... were 0.449 L/day'.")
- implicit units: 'CL2 (L/day)b' → L/day (from the paper text: "The paper text states: '...and clearance associated with time-dependent clearance were ... 0.547 L/day'.")
- implicit units: 'V1 (L)c' → L (from the paper text: "The paper text states: 'The typical values of ... volume of distribution of the central compartment ... were ... 4.13 L'")
- implicit units: 'V2 (L)d' → L (from the paper text: "The paper text states: '...and volume of distribution of the peripheral compartment were ... 1.34 L'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=teclistamab
- molar mass: none found for 'teclistamab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.789 (15/19 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl2 (l/day)b]` | 0.547 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kdes]` |  | 0.0292 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | teclistamab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | teclistamab | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row12:col1', 'Tab2:row12:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.449 | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0187 L/h | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.0228 L/h | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.13 L | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.34 L | ['Tab2:row12:col1', 'Tab2:row12:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=teclistamab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 4.2 | 4.389e-07 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15 | 4.389e-07 |  | unresolved concentration unit (exp 'days', sim 'kg/m3') |
| T1_cmax | reference | skipped | 41 | 4.389e-07 |  | unresolved concentration unit (exp 'days', sim 'kg/m3') |
| T1_cmax | reference | skipped | 69 | 4.389e-07 |  | unresolved concentration unit (exp 'days', sim 'kg/m3') |
| T1_cmax | reference | skipped | 50 | 4.389e-07 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 97 | 4.389e-07 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 4.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | fail | 139 | 366.3 | 2.635 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 72 | 366.3 | 5.088 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_modelica.zip" download>Teclistamab_Miao2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_fmi.zip" download>Teclistamab_Miao2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_matlab.zip" download>Teclistamab_Miao2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_matlab_simbio.zip" download>Teclistamab_Miao2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_sbml.zip" download>Teclistamab_Miao2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_cellml.zip" download>Teclistamab_Miao2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.718 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.1e-08 | kg |
| input | model | `Cl` | 5.197e-09 | m3/s |
| input | model | `VdPerKg` | 5.9e-05 | m3/kg |
| input | model | `k12` | 1.093e-07 | 1/s |
| input | model | `k21` | 3.369e-07 | 1/s |
| input | model | `ka` | 1.539e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Miao X, Wu LS, Lin SXW, Xu Y, Chen Y, Iwaki Y et al. Population Pharmacokinetics and Exposure-Response with Teclistamab in Patients With Relapsed/Refractory Multiple Myeloma: Results From MajesTEC-1. Targeted oncology 18(5):667–684 (2023). [doi:10.1007/s11523-023-00989-z](https://doi.org/10.1007/s11523-023-00989-z)

**This record:** Pharmacolibrary v26.09, model `Teclistamab_Miao2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_teclistamab/Teclistamab_Miao2023_reference>

```bibtex
@misc{pharmacolibrary_TeclistamabMiao2023reference,
  title  = {{Pharmacolibrary model Teclistamab_Miao2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_teclistamab/Teclistamab_Miao2023_reference},
  note   = {Parameters from doi:10.1007/s11523-023-00989-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.021 mg, single dose, first-order absorption (ka 0.00554 /h, F 0.718). Doses in the paper: 0.021, 0.7, 1.344, 1.4, 4.2, 5.6, 16.8, 50.4, 105, 140, 420, 2100, 10500, 21000 mg.

<dbs-fmusim paramsurl="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_teclistamab/Teclistamab_Miao2023_reference/Teclistamab_Miao2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Teclistamab_Miao2023_reference_params.json` · controls `Teclistamab_Miao2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bteclistamab%5D%20Teclistamab_Miao2023_reference&body=Drug%3A%20teclistamab%0ARecord%3A%20Teclistamab_Miao2023_reference%0APaper%3A%20Miao_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_teclistamab/Teclistamab_Miao2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:06 UTC</sub>
