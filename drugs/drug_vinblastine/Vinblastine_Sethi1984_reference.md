<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Sethi_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Lu1983_reference&quot;,&quot;label&quot;:&quot;Lu_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Lu1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Malik2016_reference&quot;,&quot;label&quot;:&quot;Malik_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Malik2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Sethi1984_reference&quot;,&quot;label&quot;:&quot;Sethi_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Sethi1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Sethi1984_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span>

> The model does not reproduce the paper's terminal half-life (paper 3.15, model 1.84); k12, k21 use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Sethi1984_reference" status="needs_review" stale="false" population="adult male rhesus monkeys" measured-compound="vinblastine" parameterization="mechanistic" topology="2C"></div>

## Citation
Sethi VS, Surratt P, Spurr CL. Pharmacokinetics of vincristine, vinblastine, and vindesine in rhesus monkeys. Cancer chemotherapy and pharmacology 12(1):31–35 (1984).
  ·  DOI: [10.1007/BF00255905](https://doi.org/10.1007/BF00255905)

## Population and dosing

**Population:** adult male rhesus monkeys · condition healthy · age group adult.

**Dosing:** 3.5, 7, 14 mg, iv, single.

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_vinblastine/Vinblastine_Sethi1984_reference/Vinblastine_Sethi1984_reference.svg" alt="Vinblastine_Sethi1984_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| alpha t1/2 (min) | t1/2α | 1.9 | min |
| beta t1/2 (min) | t1/2β | 152 | min |
| Vc (l/kg) | V1 | 0.210 | l/kg |
| VD (l/kg) | V | 1.50 | l/kg |
| Plasma Clearance (ml/min/kg) | CL | 7.0 | ml/min/kg |
| k10 (min-1) | kel | 0.054 | min-1 |
| k12 (min-1) | k12 | 0.281 | min-1 |
| k21 (min-1) | k21 | 0.031 | min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 3.15, model 1.84); k12, k21 use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — vinblastine: t1/2α 1.9 min, t1/2β 152 min, V1 0.21 l/kg, V 1.5 l/kg, CL 7 ml/min/kg, kel 0.054 min-1, k12 0.281 min-1, k21 0.031 min-1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has vincristine, vinblastine, vindesine, the second reading vinblastine; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| alpha t1/2 (min) | `Q59` · t1/2α | 1.9 | min | 114 | s | min | half_life_rule (0.95) | Sethi_1984_table_1:row2:col1 |
| beta t1/2 (min) | `Q60` · t1/2β | 152 | min | 9120 | s | min | half_life_rule (0.95) | Sethi_1984_table_1:row2:col2 |
| Vc (l/kg) | `Q63` · V1 | 0.210 | l/kg | 0.0147 | m3 | l/kg | exact (1) | Sethi_1984_table_1:row2:col3 |
| VD (l/kg) | `Q61` · V | 1.50 | l/kg | 0.105 | m3 | l/kg | exact (1) | Sethi_1984_table_1:row2:col4 |
| Plasma Clearance (ml/min/kg) | `Q22` · CL | 7.0 | ml/min/kg | 8.167e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Sethi_1984_table_1:row2:col7 |
| k10 (min-1) | `Q47` · kel | 0.054 | min-1 | 0.0009 | 1/s | 1/min | exact (1) | Sethi_1984_table_1:row2:col8 |
| k12 (min-1) | `Q301` · k12 | 0.281 | min-1 | 0.004683 | 1/s | 1/min | exact (1) | Sethi_1984_table_1:row2:col9 |
| k21 (min-1) | `Q302` · k21 | 0.031 | min-1 | 0.0005167 | 1/s | 1/min | exact (1) | Sethi_1984_table_1:row2:col10 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- table Sethi_1984_table_1: ambiguous_numeric_format
- transposed table Sethi_1984_table_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |
| `qwen3.8-27b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | vincristine, vinblastine, vindesine | vinblastine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | vincristine, vinblastine, vindesine | vinblastine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sethi_1984_table_1:row2:col7'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Sethi_1984_table_1:row2:col9'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Sethi_1984_table_1:row2:col10'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Sethi_1984_table_1:row2:col8'] |
| C5_dimension_Q59 | pass | [time] |  | ['Sethi_1984_table_1:row2:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Sethi_1984_table_1:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Sethi_1984_table_1:row2:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Sethi_1984_table_1:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7 | ['Sethi_1984_table_1:row2:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.4 L/h | ['Sethi_1984_table_1:row2:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 105 L | ['Sethi_1984_table_1:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.7 L | ['Sethi_1984_table_1:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=vinblastine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_t_half_beta | reference | fail | 3.15 | 1.839 | 0.5839 | reported 189.0 min→SI vs simulated h |
| T1_t_half_beta | reference | skipped | 175 | 1.839 |  | unresolved time unit 'rain' |
| T1_t_half_beta | reference | fail | 2.533 | 1.839 | 0.7261 | reported 152.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 1.839 |  | the transcribed record carries no number for this value |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3.5 mg infusion over 10 min, single dose. Doses in the paper: 3.5, 7, 14 mg.

<dbs-fmusim paramsurl="drugs/drug_vinblastine/Vinblastine_Sethi1984_reference/Vinblastine_Sethi1984_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vinblastine/Vinblastine_Sethi1984_reference/Vinblastine_Sethi1984_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vinblastine_Sethi1984_reference_params.json` · controls `Vinblastine_Sethi1984_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Sethi1984_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Sethi1984_reference%0APaper%3A%20Sethi_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Sethi1984_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 02:11 UTC</sub>
