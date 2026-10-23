<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;potassium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/&quot;},{&quot;label&quot;:&quot;Kotschwar_2009 \u00b7 period_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PotassiumSalicylate_Buntenktter2017_reference&quot;,&quot;label&quot;:&quot;Buntenk\u00f6tter_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Buntenktter2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_1&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_2&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;PotassiumSalicylate_Kotschwar2009_period_3&quot;,&quot;label&quot;:&quot;Kotschwar_2009_period_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_3.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# potassium salicylate — `PotassiumSalicylate_Kotschwar2009_period_2`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> Salicylate model fails terminal half-life check (model 3.15 h vs paper 0.615 h) and lacks an explicit bioavailability estimate.

<div class="pk-model-meta" hidden drug="potassium salicylate" model-id="PotassiumSalicylate_Kotschwar2009_period_2" status="needs_review" stale="false" population="bovine calves" measured-compound="salicylate" parameterization="mechanistic" topology="1C"></div>

## Citation
Kotschwar JL, Coetzee JF, Anderson DE, Gehring R, KuKanich B, Apley MD. Analgesic efficacy of sodium salicylate in an amphotericin B-induced bovine synovitis-arthritis model. Journal of dairy science 92(8):3731–3743 (2009).
  ·  DOI: [10.3168/jds.2009-2058](https://doi.org/10.3168/jds.2009-2058)

## Population and dosing

**Population:** bovine calves · condition synovitis-arthritis · age group adult · n = 10.

**Dosing:** 3500 mg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed sodium salicylate, measured salicylate.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2.svg" alt="PotassiumSalicylate_Kotschwar2009_period_2 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V d | V | 0.2 | L/kg |
| CL B | CLb | 4.3 | mL/min/kg |
| ka capsule (h−1) | kabs | 0.22 | h−1 |
| Lag0 (h) | tlag | 2.81 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Salicylate model fails terminal half-life check (model 3.15 h vs paper 0.615 h) and lacks an explicit bioavailability estimate.**

The simulated terminal half-life of 3.150866829386476 hours exceeds the paper's reported value of 0.615 hours by a ratio of 5.1234, indicating a significant structural mismatch. Additionally, the bioavailability parameter was not extracted from the paper and was left at library defaults, meaning the model relies on generic assumptions rather than specific evidence. The model builder explicitly substituted the missing bioavailability value with defaults, which undermines the specific applicability of the record to this study. Extracted — potassium salicylate: V 0.2 L/kg, CLb 4.3 mL/min/kg, kabs 0.22 h−1, tlag 2.81 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 1: this record has none, the second reading 6; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V d | `Q61` · V | 0.2 | L/kg | 0.014 | m3 | L | space_fold (0.95) | Kotschwar_2009:other_prose |
| CL B | `Q23` · CLb | 4.3 | mL/min/kg | 5.017e-06 | m3/s | L/h | space_fold (0.95) | Kotschwar_2009:other_prose |
| ka capsule (h−1) | `Q49` · kabs | 0.22 | h−1 | 6.111e-05 | 1/s | 1/h | review_gapfill (0.7) | Koh_2025:review |
| Lag0 (h) | `Q83` · tlag | 2.81 | h | 1.012e+04 | s | h | review_gapfill (0.7) | Koh_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at "Needs review" — not promoted
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
| `gpt-oss-120b` | `parameters[1]` |  | 6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl b]` | 4.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cortisol]` |  | 40.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka capsule]` | 0.22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag0]` | 2.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` | 0.2 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Kotschwar_2009:other_prose'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Koh_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Koh_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.3 | ['Kotschwar_2009:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 18.1 L/h | ['Kotschwar_2009:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14 L | ['Kotschwar_2009:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=salicylate) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 0.615 | 3.151 | 5.123 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.63 | 3.151 | 5.001 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_modelica.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_fmi.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_matlab.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_matlab_simbio.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_sbml.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_cellml.zip" download>PotassiumSalicylate_Kotschwar2009_period_2_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1762 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 1.012e+04 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0035 | kg |
| input | model | `Cl` | 5.017e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002 | m3/kg |
| input | model | `ka` | 6.111e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kotschwar JL, Coetzee JF, Anderson DE, Gehring R, KuKanich B, Apley MD. Analgesic efficacy of sodium salicylate in an amphotericin B-induced bovine synovitis-arthritis model. Journal of dairy science 92(8):3731–3743 (2009). [doi:10.3168/jds.2009-2058](https://doi.org/10.3168/jds.2009-2058)

**This record:** Pharmacolibrary v26.09, model `PotassiumSalicylate_Kotschwar2009_period_2`. <https://pharmacolibrary.github.io/#/drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2>

```bibtex
@misc{pharmacolibrary_PotassiumSalicylateKotschwar2009period2,
  title  = {{Pharmacolibrary model PotassiumSalicylate_Kotschwar2009_period_2}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2},
  note   = {Parameters from doi:10.3168/jds.2009-2058},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3500 mg, single dose, first-order absorption (ka 0.22 /h, lag 169 min, F 0.9). Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2/PotassiumSalicylate_Kotschwar2009_period_2_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `PotassiumSalicylate_Kotschwar2009_period_2_params.json` · controls `PotassiumSalicylate_Kotschwar2009_period_2_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_salicylate%5D%20PotassiumSalicylate_Kotschwar2009_period_2&body=Drug%3A%20potassium_salicylate%0ARecord%3A%20PotassiumSalicylate_Kotschwar2009_period_2%0APaper%3A%20Kotschwar_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_salicylate/PotassiumSalicylate_Kotschwar2009_period_2%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:06 UTC</sub>
