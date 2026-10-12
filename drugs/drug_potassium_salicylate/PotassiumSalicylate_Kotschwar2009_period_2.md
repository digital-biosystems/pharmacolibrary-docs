<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;potassium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/&quot;},{&quot;label&quot;:&quot;Kotschwar_2009 \u00b7 period_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumSalicylate_Buntenktter2017_reference&quot;,&quot;label&quot;:&quot;Buntenk\u00f6tter_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Buntenktter2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_1&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_1.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_2&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_3&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_3.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium salicylate — `PotassiumSalicylate_Kotschwar2009_period_2`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Salicylate model fails terminal half-life check (model 3.15 h vs paper 0.615 h) and lacks an explicit bioavailability estimate.**

The simulated terminal half-life of 3.150866829386476 hours exceeds the paper's reported value of 0.615 hours by a ratio of 5.1234, indicating a significant structural mismatch. Additionally, the bioavailability parameter was not extracted from the paper and was left at library defaults, meaning the model relies on generic assumptions rather than specific evidence. The model builder explicitly substituted the missing bioavailability value with defaults, which undermines the specific applicability of the record to this study. Extracted — potassium salicylate: V 0.2 L/kg, CLb 4.3 mL/min/kg, kabs 0.22 h−1, tlag 2.81 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 1: this record has none, the second reading 6; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `sodium salicylate`, measured `salicylate`.

## Citation
Kotschwar JL et al., Analgesic efficacy of sodium salicylate…, Journal of dairy science (2009)
  ·  DOI: [10.3168/jds.2009-2058](https://doi.org/10.3168/jds.2009-2058)

<div class="pk-model-meta" hidden drug="potassium salicylate" model-id="PotassiumSalicylate_Kotschwar2009_period_2" status="needs_review" stale="false" population="bovine calves" measured-compound="salicylate" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V d | `Q61` · V | 0.2 | L/kg | 0.014 | L | not captured | space_fold (0.95) | Kotschwar_2009:other_prose | — | not captured |
| CL B | `Q23` · CLb | 4.3 | mL/min/kg | 5.016666666666666e-06 | L/h | not captured | space_fold (0.95) | Kotschwar_2009:other_prose | — | not captured |
| ka capsule (h−1) | `Q49` · kabs | 0.22 | h−1 | 6.111111111111111e-05 | 1/h | not captured | review_gapfill (0.7) | Koh_2025:review | — | not captured |
| Lag0 (h) | `Q83` · tlag | 2.81 | h | 10116.0 | h | not captured | review_gapfill (0.7) | Koh_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cortisol (nmol/L)' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7'])
- dropped unlinked row (NIL): 'Heart rate (bpm)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col3', 'tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row8:col7'])
- dropped unlinked row (NIL): 'Electrodermal activity' — extend the ontology if this is a real PK parameter (source ['tab_1:row10:col3', 'tab_1:row10:col5', 'tab_1:row10:col6', 'tab_1:row10:col7'])
- salvaged Q61 ('V d'=0.2) from results prose — parameter table was unreadable
- salvaged Q23 ('CL B'=4.3) from results prose — parameter table was unreadable
- implicit units: 'CL B' → mL/min/kg (from the paper text: "The text explicitly states: 'CL B was 4.3 ± 0.2 mL/min•kg'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'period 2' subgroup of Kotschwar_2009 (paper reports 4 populations: mean ± se, period 1, period 2, period 3)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Koh_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Koh_2025's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1]` | not captured | 6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl b]` | 4.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cortisol]` | not captured | 40.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka capsule]` | 0.22 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag0]` | 2.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` | 0.2 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kotschwar_2009:other_prose'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Koh_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Koh_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.3 | not captured | not captured | ['Kotschwar_2009:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 18.1 L/h | not captured | not captured | ['Kotschwar_2009:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14 L | not captured | not captured | ['Kotschwar_2009:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salicylate) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 0.615 | 3.150866829386476 | 5.1234 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.63 | 3.150866829386476 | 5.0014 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_potassium_salicylate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kotschwar_2009` / `Kotschwar_2009::period_2`)
- model: `../../../knowledgebase/drugs/drug_potassium_salicylate/models/modelica/PotassiumSalicylate_Kotschwar2009_period_2.mo`
- deviation: `../../../knowledgebase/drugs/drug_potassium_salicylate/models/modelica/PotassiumSalicylate_Kotschwar2009_period_2.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_potassium_salicylate/models/modelica/PotassiumSalicylate_Kotschwar2009_period_2.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_modelica.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_fmi.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_matlab.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_matlab_simbio.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_sbml.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_cellml.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2.svg" alt="PotassiumSalicylate_Kotschwar2009_period_2 diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3500 mg, single dose, first-order absorption (ka 0.22 /h, lag 169 min, F 0.9). Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `PotassiumSalicylate_Kotschwar2009_period_2_params.json` · controls `PotassiumSalicylate_Kotschwar2009_period_2_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:06 UTC</sub>
