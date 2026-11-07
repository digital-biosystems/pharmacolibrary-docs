<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Andersen_1986 \u00b7 j&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Ihmsen2021_reference&quot;,&quot;label&quot;:&quot;Ihmsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Ihmsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_f&quot;,&quot;label&quot;:&quot;Andersen_1986_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_j&quot;,&quot;label&quot;:&quot;Andersen_1986_j&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_j.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Andersen1986_k&quot;,&quot;label&quot;:&quot;Andersen_1986_k&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_k.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Andersen1986_j`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

> Morphine model fails terminal half-life tolerance and uses an unreported default for the central-to-peripheral clearance parameter.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Andersen1986_j" status="needs_review" stale="false" population="goats" measured-compound="morphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Andersen HB, Christensen B, Findlay JW, Jansen JA. Pharmacokinetics of intravenous, intrathecal and epidural morphine and fentanyl in the goat. Acta anaesthesiologica Scandinavica 30(5):393–399 (1986).
  ·  DOI: [10.1111/j.1399-6576.1986.tb02437.x](https://doi.org/10.1111/j.1399-6576.1986.tb02437.x)

## Population and dosing

**Population:** goats · condition healthy · age group adult · n = 10.

**Dosing:** 0.05, 0.1, 0.2, 1, 4, 8 mg, iv, intrathecal, epidural, single.

> **Species: goat.** This record comes from an animal study (goat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j.svg" alt="Morphine_Andersen1986_j diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V₁ (l/kg) | V1 | 0.66 | l/kg |
| V₂ (l/kg) | V2 | 1.15 | l/kg |
| V₃ (l/kg) | V3 | 5.39 | l/kg |
| t₁/₂α (min) | t1/2α | 2.7 | min |
| t₁/₂β (min) | t1/2β | 23.2 | min |
| t₁/₂γ (min) | t1/2γ | 116 | min |
| Cl total (ml/min/kg) | CL | 60.3 | ml/min/kg |
| θ CLD | Q | 0.88 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Morphine model fails terminal half-life tolerance and uses an unreported default for the central-to-peripheral clearance parameter.**

Simulating the model with the paper's dose yields a terminal half-life far exceeding the reported 23.2 minutes. The intercompartmental clearance from central to peripheral was left at a library default instead of using an explicit estimate from the study. These unsupported values prevent the record from accurately reproducing the pharmacokinetic profile described in the paper. Extracted — morphine: V1 0.66 l/kg, V2 1.15 l/kg, V3 5.39 l/kg, t1/2α 2.7 min, t1/2β 23.2 min, t1/2γ 116 min, CL 60.3 ml/min/kg, Q 0.88 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading morphine → morphine-3-glucuronide (metabolism); it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V₁ (l/kg) | `Q63` · V1 | 0.66 | l/kg | 0.0462 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row1:col1 |
| V₂ (l/kg) | `Q64` · V2 | 1.15 | l/kg | 0.0805 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row1:col2 |
| V₃ (l/kg) | `Q77` · V3 | 5.39 | l/kg | 0.3773 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row1:col3 |
| t₁/₂α (min) | `Q59` · t1/2α | 2.7 | min | 162 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row1:col4 |
| t₁/₂β (min) | `Q60` · t1/2β | 23.2 | min | 1392 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row1:col5 |
| t₁/₂γ (min) | `Q89` · t1/2γ | 116 | min | 6960 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row1:col6 |
| Cl total (ml/min/kg) | `Q22` · CL | 60.3 | ml/min/kg | 7.035e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Andersen_1986_table_p2_1:row1:col7 |
| θ CLD | `Q30` · Q | 0.88 | L/h | 2.444e-07 | m3/s | L/h | review_gapfill (0.7) | Elkomy_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12']

**Interpretation flags:**
- column 'j' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'j' subgroup of Andersen_1986 (paper reports 5 populations: f, j, k, n, o)
- gap-filled Q30 (Q) from Elkomy_2016's review values (primary lacked it)

**Extraction notes:**
- transposed table Andersen_1986_table_p2_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['morphine', 'morphine-3-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl total].value` | 60.3 | 83.7 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2α].value` | 2.7 | 2.10 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2β].value` | 23.2 | 22.36 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2γ].value` | 116 | 127 | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 0.66 | 0.77 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 1.15 | 1.61 | mismatch |
| `gpt-oss-120b` | `parameters[v3].value` | 5.39 | 5.26 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Andersen_1986_table_p2_1:row1:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Elkomy_2016:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Andersen_1986_table_p2_1:row1:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Andersen_1986_table_p2_1:row1:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row1:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Andersen_1986_table_p2_1:row1:col3'] |
| C5_dimension_Q89 | pass | [time] |  | ['Andersen_1986_table_p2_1:row1:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 60.3 | ['Andersen_1986_table_p2_1:row1:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 253 L/h | ['Andersen_1986_table_p2_1:row1:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 46.2 L | ['Andersen_1986_table_p2_1:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 80.5 L | ['Andersen_1986_table_p2_1:row1:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=morphine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_alpha | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  | 5.679e+04 |  | non-numeric value |
| T1_t_half_beta | reference | fail | 3 | 5.679e+04 | 1.893e+04 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1 | 5.679e+04 | 5.679e+04 | h→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 5.679e+04 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 5.679e+04 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 5.679e+04 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped | 3.7 | 5.679e+04 |  | unresolved time unit '(min)' |
| T1_t_half_terminal | reference | skipped | 2.6 | 5.679e+04 |  | unresolved time unit '(min)' |
| T1_t_half_terminal | reference | skipped | 7.3 | 5.679e+04 |  | unresolved time unit '(min)' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_modelica.zip" download>Morphine_Andersen1986_j_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_fmi.zip" download>Morphine_Andersen1986_j_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_matlab.zip" download>Morphine_Andersen1986_j_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_matlab_simbio.zip" download>Morphine_Andersen1986_j_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_sbml.zip" download>Morphine_Andersen1986_j_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_cellml.zip" download>Morphine_Andersen1986_j_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2853 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-08 | kg |
| input | model | `Cl` | 7.035e-05 | m3/s |
| input | model | `VdPerKg` | 0.00066 | m3/kg |
| input | model | `k21` | 3.037e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Andersen HB, Christensen B, Findlay JW, Jansen JA. Pharmacokinetics of intravenous, intrathecal and epidural morphine and fentanyl in the goat. Acta anaesthesiologica Scandinavica 30(5):393–399 (1986). [doi:10.1111/j.1399-6576.1986.tb02437.x](https://doi.org/10.1111/j.1399-6576.1986.tb02437.x)

**This record:** Pharmacolibrary, model `Morphine_Andersen1986_j`. <https://pharmacolibrary.github.io/#/drugs/drug_morphine/Morphine_Andersen1986_j>

```bibtex
@misc{pharmacolibrary_MorphineAndersen1986j,
  title  = {{Pharmacolibrary model Morphine_Andersen1986_j}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_morphine/Morphine_Andersen1986_j},
  note   = {Parameters from doi:10.1111/j.1399-6576.1986.tb02437.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 0.05 mg infusion over 10 min, single dose. Doses in the paper: 0.05, 0.1, 0.2, 1, 4, 8 mg.

<dbs-fmusim paramsurl="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_morphine/Morphine_Andersen1986_j/Morphine_Andersen1986_j_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Morphine_Andersen1986_j_params.json` · controls `Morphine_Andersen1986_j_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Andersen1986_j&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Andersen1986_j%0APaper%3A%20Andersen_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Andersen1986_j%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:40 UTC</sub>
