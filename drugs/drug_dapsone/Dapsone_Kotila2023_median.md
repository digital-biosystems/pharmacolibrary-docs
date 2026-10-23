<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/&quot;},{&quot;label&quot;:&quot;Kotila_2023 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Kotila2023_mean&quot;,&quot;label&quot;:&quot;Kotila_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Kotila2023_median&quot;,&quot;label&quot;:&quot;Kotila_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dapsone_Mirochnick2001_reference&quot;,&quot;label&quot;:&quot;Mirochnick_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Mirochnick2001_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dapsone — `Dapsone_Kotila2023_median`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="dapsone" model-id="Dapsone_Kotila2023_median" status="curated_candidate" stale="false" population="healthy Nigerians" measured-compound="dapsone" parameterization="apparent" topology="1C"></div>

## Citation
Kotila OA, Ajayi DT, Masimirembwa C, Thelingwani R, Odetunde A, Falusi AG et al. Non-compartmental and population pharmacokinetic analysis of dapsone in healthy NIGERIANS: A pilot study. British journal of clinical pharmacology 89(11):3454–3459 (2023).
  ·  DOI: [10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862)

## Population and dosing

**Population:** healthy Nigerians · age group adult · n = 11.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median.svg" alt="Dapsone_Kotila2023_median diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cmax (µg/mL) | Cmax | 1.18 | µg/mL |
| Tmax (h) | tmax | 3 | h |
| AUC0-last (h.µg/mL) | AUClast | 29.32 | h.µg/mL |
| AUC0-∞ (h.µg/mL) | AUC∞ | 32.91 | h.µg/mL |
| λz (h−1) | kel | 0.028 | h−1 |
| t1/2z (h) | t1/2z | 24.79 | h |
| Cl/F (L/h) | CL/F | 1.52 | L/h |
| Vz/F (L) | V/F | 55.56 | L |
| k a | kabs | 0.09 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (µg/mL) | `Q32` · Cmax | 1.18 | µg/mL |  |  | µg/ml | exact (1) | Kotila_2023_table_1:row0:col5 |
| Tmax (h) | `Q56` · tmax | 3 | h | 1.08e+04 | s | h | exact (1) | Kotila_2023_table_1:row1:col5 |
| AUC0-last (h.µg/mL) | `Q74` · AUClast | 29.32 | h.µg/mL |  |  | (h·µg)/ml | exact (1) | Kotila_2023_table_1:row2:col5 |
| AUC0-∞ (h.µg/mL) | `Q17` · AUC∞ | 32.91 | h.µg/mL |  |  | (h·µg)/ml | exact (1) | Kotila_2023_table_1:row3:col5 |
| λz (h−1) | `Q47` · kel | 0.028 | h−1 | 7.778e-06 | 1/s | 1/h | exact (1) | Kotila_2023_table_1:row4:col5 |
| t1/2z (h) | `Q57` · t1/2z | 24.79 | h | 8.924e+04 | s | h | exact (1) | Kotila_2023_table_1:row5:col5 |
| Cl/F (L/h) | `Q27` · CL/F | 1.52 | L/h | 4.222e-07 | m3/s | l/h | exact (1) | Kotila_2023_table_1:row6:col5 |
| Vz/F (L) | `Q76` · V/F | 55.56 | L | 0.05556 | m3 | l | exact (1) | Kotila_2023_table_1:row7:col5 |
| k a | `Q49` · kabs | 0.09 | h -1 | 2.5e-05 | 1/s | 1/h | review_gapfill (0.7) | Simpson_2006_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): '2.' — extend the ontology if this is a real PK parameter (source ['T2:row4:col5'])
- dropped unlinked row (NIL): '3.' — extend the ontology if this is a real PK parameter (source ['T2:row5:col5'])
- dropped unlinked row (NIL): '4.' — extend the ontology if this is a real PK parameter (source ['T2:row6:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dapsone
- population split: 'median' subgroup of Kotila_2023 (paper reports 3 populations: base model selection, mean, median)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Simpson_2006_2's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T2:row4:col1 = '1 compartment, with lag time'
- unparsed cell T2:row5:col1 = '1 compartment with transit compartment'
- unparsed cell T2:row6:col1 = '2 compartment, no lag time'
- unparsed cell T2:row26:col1 = 'ka (h−1)'
- transposed table Kotila_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (64 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[3.]` |  | -13.82 | only_one_extracted |
| `gpt-oss-120b` | `parameters[4.]` |  | -1.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 32.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-last]` | 29.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 1.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.09 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2z]` | 24.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 55.56 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λz]` | 0.028 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 30.23 | 25.34 | 0.8381 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  |  |  | ['Kotila_2023_table_1:row3:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Kotila_2023_table_1:row6:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Kotila_2023_table_1:row0:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Kotila_2023_table_1:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Simpson_2006_2:review'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Kotila_2023_table_1:row1:col5'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Kotila_2023_table_1:row5:col5'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 |  |  |  | ['Kotila_2023_table_1:row2:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Kotila_2023_table_1:row7:col5'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.52 L/h |  |  | ['Kotila_2023_table_1:row6:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 55.6 L |  |  | ['Kotila_2023_table_1:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=dapsone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 30.23 | 25.34 | 0.8382 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 30 | 25.34 | 0.8446 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_modelica.zip" download>Dapsone_Kotila2023_median_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_fmi.zip" download>Dapsone_Kotila2023_median_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_matlab.zip" download>Dapsone_Kotila2023_median_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_matlab_simbio.zip" download>Dapsone_Kotila2023_median_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_sbml.zip" download>Dapsone_Kotila2023_median_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_cellml.zip" download>Dapsone_Kotila2023_median_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2483 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 4.222e-07 | m3/s |
| input | model | `VdPerKg` | 0.0007937 | m3/kg |
| input | model | `ka` | 2.5e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kotila OA, Ajayi DT, Masimirembwa C, Thelingwani R, Odetunde A, Falusi AG et al. Non-compartmental and population pharmacokinetic analysis of dapsone in healthy NIGERIANS: A pilot study. British journal of clinical pharmacology 89(11):3454–3459 (2023). [doi:10.1111/bcp.15862](https://doi.org/10.1111/bcp.15862)

**This record:** Pharmacolibrary v26.09, model `Dapsone_Kotila2023_median`. <https://pharmacolibrary.github.io/#/drugs/drug_dapsone/Dapsone_Kotila2023_median>

```bibtex
@misc{pharmacolibrary_DapsoneKotila2023median,
  title  = {{Pharmacolibrary model Dapsone_Kotila2023_median}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dapsone/Dapsone_Kotila2023_median},
  note   = {Parameters from doi:10.1111/bcp.15862},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.09 /h, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dapsone/Dapsone_Kotila2023_median/Dapsone_Kotila2023_median_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dapsone_Kotila2023_median_params.json` · controls `Dapsone_Kotila2023_median_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdapsone%5D%20Dapsone_Kotila2023_median&body=Drug%3A%20dapsone%0ARecord%3A%20Dapsone_Kotila2023_median%0APaper%3A%20Kotila_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dapsone/Dapsone_Kotila2023_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:43 UTC</sub>
