<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fludarabine&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/&quot;},{&quot;label&quot;:&quot;Long-Boyle_2011 \u00b7 standard_dose&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fludarabine_Knebel1998_reference&quot;,&quot;label&quot;:&quot;Knebel_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_Knebel1998_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fludarabine_Port2006_reference&quot;,&quot;label&quot;:&quot;Port_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_Port2006_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fludarabine_sterborg2015_reference&quot;,&quot;label&quot;:&quot;\u00d6sterborg_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fludarabine/Fludarabine_sterborg2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fludarabine — `Fludarabine_LongBoyle2011_standard_dose`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for fludarabine's clearance and volume of distribution — all 8 extracted parameters describe F-ara-A (2-fluoro-ara-A), not fludarabine; t6_deviations.

<div class="pk-model-meta" hidden drug="Fludarabine" model-id="Fludarabine_LongBoyle2011_standard_dose" status="model_quarantined" stale="false" population="adult patients receiving nonmyeloablative hematopoietic cell transplantation, some with mild to moderate renal insufficiency" measured-compound="F-ara-A (fludarabine metabolite, 2-fluoro-ara-A)" parameterization="mechanistic" topology="1C"></div>

## Citation
Long-Boyle JR, Green KG, Brunstein CG, Cao Q, Rogosheske J, Weisdorf DJ et al. High fludarabine exposure and relationship with treatment-related mortality after nonmyeloablative hematopoietic cell transplantation. Bone marrow transplantation 46(1):20–26 (2011).
  ·  DOI: [10.1038/bmt.2010.53](https://doi.org/10.1038/bmt.2010.53)

## Population and dosing

**Population:** adult patients receiving nonmyeloablative hematopoietic cell transplantation, some with mild to moderate renal insufficiency · condition nonmyeloablative HCT preparative regimen (patients with hematologic malignancy; some with renal insufficiency) · age group adult · n = 87.

**Dosed compound ≠ measured compound:** dosed Fludarabine, measured F-ara-A (fludarabine metabolite, 2-fluoro-ara-A).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Creatinine Clearance, mL/min | CLR | 85.9 | mL/min |
| Cmax, ng/mL | Cmax | 958 | ng/mL |
| Cmin trough, ng/mL | Cmin | 52 | ng/mL |
| AUC(0-∞), ug*hr/mL | AUC | 4.9 | ug*hr/mL |
| Volume of distribution, L/kg | V | 1.95 | L/kg |
| Clearance, L/hr | CL | 16.0 | L/hr |
| Half-life, hours | t1/2z | 8.53 | hours |
| Dayzero2, ng/mL | Ctrough | 15.0 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for fludarabine's clearance and volume of distribution — all 8 extracted parameters describe F-ara-A (2-fluoro-ara-A), not fludarabine; t6_deviations.**

The model was built, but fludarabine's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — F-ara-A (2-fluoro-ara-A): CLR 85.9 mL/min, Cmax 958 ng/mL, Cmin 52 ng/mL, AUC 4.9 ug*hr/mL, V 1.95 L/kg, CL 16 L/hr, t1/2z 8.53 hours, Ctrough 15 ng/mL.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has F-ara-A (fludarabine metabolite, 2-fluoro-ara-A), the second reading F-ara-A; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Creatinine Clearance, mL/min | `Q26` · CLR | 85.9 | mL/min | 1.432e-06 | m3/s | ml/min | llm_corrected (0.6) | Long-Boyle_2011_table_2:row2:col1 |
| Cmax, ng/mL | `Q32` · Cmax | 958 | ng/mL | 0.000958 | kg/m3 | ng/ml | exact (1) | Long-Boyle_2011_table_2:row3:col1 |
| Cmin trough, ng/mL | `Q36` · Cmin | 52 | ng/mL | 5.2e-05 | kg/m3 | ng/ml | llm_corrected (0.6) | Long-Boyle_2011_table_2:row4:col1 |
| AUC(0-∞), ug*hr/mL | `Q88` · AUC | 4.9 | ug*hr/mL | 17.64 | kg*s/m3 | (h·µg)/ml | space_fold (0.95) | Long-Boyle_2011_table_2:row5:col1 |
| Volume of distribution, L/kg | `Q61` · V | 1.95 | L/kg | 0.1365 | m3 | l/kg | exact (1) | Long-Boyle_2011_table_2:row6:col1 |
| Clearance, L/hr | `Q22` · CL | 16.0 | L/hr | 4.444e-06 | m3/s | l/h | exact (1) | Long-Boyle_2011_table_2:row7:col1 |
| Half-life, hours | `Q57` · t1/2z | 8.53 | hours | 3.071e+04 | s | h | half_life_rule (0.95) | Long-Boyle_2011_table_2:row8:col1 |
| Dayzero2, ng/mL | `Q37` · Ctrough | 15.0 | ng/mL | 1.5e-05 | kg/m3 | ng/ml | llm (0.6) | Long-Boyle_2011_table_2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Fludarabine dose | Q310 | llm |

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=F-ara-A (fludarabine metabolite, 2-fluoro-ara-A)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'standard dose' subgroup of Long-Boyle_2011 (paper reports 2 populations: dose-reduced, standard dose)
- row roles (LLM): model_class=noncompartmental; 0/9 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Fludarabine (fludarabine phosphate)' — its concentrations stay mass-only
- molar mass: none found for 'F-ara-A (2-fluoro-ara-A)' — its concentrations stay mass-only
- molar mass: none found for 'F-ara-A (fludarabine metabolite, 2-fluoro-ara-A)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'F-ara-A (fludarabine metabolite, 2-fluoro-ara-A)', not fludarabine — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.733 (11/15 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[creatinine clearance]` | 85.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dayzero2].parameter_id` | Q37 | Q86 | mismatch |
| `gpt-oss:120b` | `parameters[fludarabine dose].parameter_id` | Q310 | Q30 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | F-ara-A (fludarabine metabolite, 2-fluoro-ara-A) | F-ara-A | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Long-Boyle_2011_table_2:row7:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Long-Boyle_2011_table_2:row2:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Long-Boyle_2011_table_2:row3:col1'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Long-Boyle_2011_table_2:row4:col1'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Long-Boyle_2011_table_2:row9:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Long-Boyle_2011_table_2:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Long-Boyle_2011_table_2:row6:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Long-Boyle_2011_table_2:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16 | ['Long-Boyle_2011_table_2:row7:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16 L/h | ['Long-Boyle_2011_table_2:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 136 L | ['Long-Boyle_2011_table_2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 65 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 74.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose/Fludarabine_LongBoyle2011_standard_dose_matlab.zip" download>Fludarabine_LongBoyle2011_standard_dose_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose/Fludarabine_LongBoyle2011_standard_dose_matlab_simbio.zip" download>Fludarabine_LongBoyle2011_standard_dose_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose/Fludarabine_LongBoyle2011_standard_dose_sbml.zip" download>Fludarabine_LongBoyle2011_standard_dose_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose/Fludarabine_LongBoyle2011_standard_dose_cellml.zip" download>Fludarabine_LongBoyle2011_standard_dose_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Long-Boyle JR, Green KG, Brunstein CG, Cao Q, Rogosheske J, Weisdorf DJ et al. High fludarabine exposure and relationship with treatment-related mortality after nonmyeloablative hematopoietic cell transplantation. Bone marrow transplantation 46(1):20–26 (2011). [doi:10.1038/bmt.2010.53](https://doi.org/10.1038/bmt.2010.53)

**This record:** Pharmacolibrary, model `Fludarabine_LongBoyle2011_standard_dose`. <https://pharmacolibrary.github.io/#/drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose>

```bibtex
@misc{pharmacolibrary_FludarabineLongBoyle2011standarddose,
  title  = {{Pharmacolibrary model Fludarabine_LongBoyle2011_standard_dose}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose},
  note   = {Parameters from doi:10.1038/bmt.2010.53},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfludarabine%5D%20Fludarabine_LongBoyle2011_standard_dose&body=Drug%3A%20fludarabine%0ARecord%3A%20Fludarabine_LongBoyle2011_standard_dose%0APaper%3A%20Long-Boyle_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fludarabine/Fludarabine_LongBoyle2011_standard_dose%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 05:11 UTC</sub>
