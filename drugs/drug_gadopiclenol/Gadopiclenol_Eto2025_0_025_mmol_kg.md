<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadopiclenol&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/&quot;},{&quot;label&quot;:&quot;Eto_2025 \u00b7 0_025_mmol_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_025_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_025_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_05_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_05_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_05_mmol_kg.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gadopiclenol_Eto2025_0_1_mmol_kg&quot;,&quot;label&quot;:&quot;Eto_2025_0_1_mmol_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_1_mmol_kg.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadopiclenol — `Gadopiclenol_Eto2025_0_025_mmol_kg`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Cmax, AUC∞ and AUC/dose), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of aucinf: this record has 316, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Eto T et al., Pharmacokinetics and safety of gadopicl…, Japanese journal of radiolo… (2025)
  ·  DOI: [10.1007/s11604-025-01842-1](https://doi.org/10.1007/s11604-025-01842-1)

<div class="pk-model-meta" hidden drug="gadopiclenol" model-id="Gadopiclenol_Eto2025_0_025_mmol_kg" status="curated_candidate" stale="false" population="Japanese and non-Japanese subjects, including adults and pediatric patients" measured-compound="gadopiclenol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (µg/mL) | `Q32` · Cmax | 248.7 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | Eto_2025_table_2:row2:col2, Eto_2025_table_2:row2:col3 | — | not captured |
| AUCinf (µg/mL.h) | `Q17` · AUC∞ | 316 | µg/mL.h | not captured | [µg] / [[h] · [ml]] | not captured | exact (1.0) | Eto_2025_table_2:row4:col2, Eto_2025_table_2:row4:col3 | — | not captured |
| AUCinf/Dose (µg/mL.h) | `Q189` · AUC/dose | 183 | µg/mL.h | not captured | [µg] / [[h] · [ml]] | not captured | exact (1.0) | Eto_2025_table_2:row6:col2, Eto_2025_table_2:row6:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 1.65 | h | 5940.0 | [h] | not captured | exact (1.0) | Eto_2025_table_2:row8:col2, Eto_2025_table_2:row8:col3 | — | not captured |
| Vd (L) | `Q61` · V | 13.2 | L | 0.0132 | [l] | not captured | exact (1.0) | Eto_2025_table_2:row10:col2, Eto_2025_table_2:row10:col3 | — | not captured |
| Cl (L/h) | `Q22` · CL | 5.5 | L/h | 1.5277777777777776e-06 | [l] / [h] | not captured | exact (1.0) | Eto_2025_table_2:row12:col2, Eto_2025_table_2:row12:col3 | — | not captured |
| Clr (L/h) | `Q26` · CLR | 5.3 | L/h | 1.4722222222222223e-06 | [l] / [h] | not captured | exact (1.0) | Eto_2025_table_2:row14:col2, Eto_2025_table_2:row14:col3 | — | not captured |
| fe (%)* | `Q44` · fe | 95.7 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Eto_2025_table_2:row16:col2, Eto_2025_table_2:row16:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n subjects' — extend the ontology if this is a real PK parameter (source ['Eto_2025_table_2:row1:col2', 'Eto_2025_table_2:row1:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadopiclenol
- population split: '0.025 mmol/kg' subgroup of Eto_2025 (paper reports 3 populations: 0.025 mmol/kg, 0.05 mmol/kg, 0.1 mmol/kg)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Eto_2025_table_2:row0:col2 = 'Non-Japanese [7]'
- unparsed cell Eto_2025_table_2:row0:col4 = 'Non-Japanese [7]'
- unparsed cell Eto_2025_table_2:row0:col6 = 'Non-Japanese [7]'
- companion parameter table 2 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[aucinf/dose]` | 183 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[aucinf]` | 316 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 5.5 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[clr]` | 5.3 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` | 248.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[fe (%)*]` | 95.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2]` | 1.65 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[total clearance]` | not captured | 5.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | not captured | 5.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | not captured | 5.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd].value` | 13.2 | 11.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 1.44 | 1.664 | 1.1556 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Eto_2025_table_2:row4:col2', 'Eto_2025_table_2:row4:col3'] |
| C5_dimension_Q189 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Eto_2025_table_2:row6:col2', 'Eto_2025_table_2:row6:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Eto_2025_table_2:row12:col2', 'Eto_2025_table_2:row12:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Eto_2025_table_2:row14:col2', 'Eto_2025_table_2:row14:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Eto_2025_table_2:row2:col2', 'Eto_2025_table_2:row2:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Eto_2025_table_2:row8:col2', 'Eto_2025_table_2:row8:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Eto_2025_table_2:row10:col2', 'Eto_2025_table_2:row10:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.5 | not captured | not captured | ['Eto_2025_table_2:row12:col2', 'Eto_2025_table_2:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.5 L/h | not captured | not captured | ['Eto_2025_table_2:row12:col2', 'Eto_2025_table_2:row12:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 13.2 L | not captured | not captured | ['Eto_2025_table_2:row10:col2', 'Eto_2025_table_2:row10:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=gadopiclenol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | pass | 1.4 | 1.6698815007332546 | 1.1928 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 1.4 | 1.6698815007332546 | 1.1928 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.43 | 1.6698815007332546 | 1.1677 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.44 | 1.6698815007332546 | 1.1596 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.7 | 1.6698815007332546 | 0.9823 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.5 | 1.6698815007332546 | 1.1133 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.8 | 1.6698815007332546 | 0.9277 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadopiclenol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eto_2025` / `Eto_2025::0_025_mmol_kg`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadopiclenol/models/modelica/Gadopiclenol_Eto2025_0_025_mmol_kg.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadopiclenol/models/modelica/Gadopiclenol_Eto2025_0_025_mmol_kg.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadopiclenol/models/modelica/Gadopiclenol_Eto2025_0_025_mmol_kg.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_modelica.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_modelica.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_fmi.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_matlab.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_matlab_simbio.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_sbml.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_cellml.zip" download>Gadopiclenol_Eto2025_0_025_mmol_kg_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg.svg" alt="Gadopiclenol_Eto2025_0_025_mmol_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_gadopiclenol/Gadopiclenol_Eto2025_0_025_mmol_kg/Gadopiclenol_Eto2025_0_025_mmol_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Gadopiclenol_Eto2025_0_025_mmol_kg_params.json` · controls `Gadopiclenol_Eto2025_0_025_mmol_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:13 UTC</sub>
