<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotaxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/&quot;},{&quot;label&quot;:&quot;Trang_1985 \u00b7 dctx&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefotaxime_Guerrini1986_reference&quot;,&quot;label&quot;:&quot;Guerrini_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Guerrini1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_dctx&quot;,&quot;label&quot;:&quot;Trang_1985_dctx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_noncompartmental&quot;,&quot;label&quot;:&quot;Trang_1985_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Branger2018_reference&quot;,&quot;label&quot;:&quot;B\u00e9ranger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Branger2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefotaxime — `Cefotaxime_Trang1985_dctx`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 0.8, model 0.562).

<div class="pk-model-meta" hidden drug="cefotaxime" model-id="Cefotaxime_Trang1985_dctx" status="needs_review" stale="false" population="infants and children with meningitis" measured-compound="cefotaxime" parameterization="mechanistic" topology="1C"></div>

## Citation
Trang JM, Jacobs RF, Kearns GL, Brown AL, Wells TG, Underwood FL et al. Cefotaxime and desacetylcefotaxime pharmacokinetics in infants and children with meningitis. Antimicrobial agents and chemotherapy 28(6):791–795 (1985).
  ·  DOI: [10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791)

## Population and dosing

**Population:** infants and children with meningitis · age group child · n = &gt;= 0.

**Dosing:** 3500 mg, iv, multiple, every 6 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx.svg" alt="Cefotaxime_Trang1985_dctx diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mean ± SDᵃ U/D (%) | AUC%ext | 35.5 |  |
| Mean ± SDᵃ AUC (µg/ml · h) | AUC | 82.4 | µg/ml · h |
| Mean ± SDᵃ CLᴿ (liter/h per kg) | CLR | 0.363 | L/h/kg |
| apparent steady-state volume of distribution | V | 0.361 | liter/kg |
| total body clearance | CL | 0.289 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.429). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.8, model 0.562).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — cefotaxime: AUC%ext 35.5, AUC 82.4 µg/ml · h, CLR 0.363 L/h/kg, V 0.361 liter/kg, CL 0.289 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent steady-state volume of distribution: this record has 0.361, the second reading none; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mean ± SDᵃ U/D (%) | `Q84` · AUC%ext | 35.5 |  |  |  |  | llm (0.6) | Trang_1985_table_2:row1:col2 |
| Mean ± SDᵃ AUC (µg/ml · h) | `Q88` · AUC | 82.4 | µg/ml · h |  |  | µg/(h·ml) | llm_confirmed (0.6) | Trang_1985_table_2:row2:col2 |
| Mean ± SDᵃ CLᴿ (liter/h per kg) | `Q26` · CLR | 0.363 | L/h/kg | 7.058e-06 | m3/s | L/h | llm_confirmed (0.6) | Trang_1985_table_2:row3:col2 |
| apparent steady-state volume of distribution | `Q61` · V | 0.361 | liter/kg | 0.02527 | m3 | L | boundary (0.8) | Trang_1985:other_prose |
| total body clearance | `Q22` · CL | 0.289 | L/h/kg | 5.619e-06 | m3/s | L/h | boundary (0.8) | Trang_1985:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean ± SDᵃ U (mg)' — extend the ontology if this is a real PK parameter (source ['Trang_1985_table_2:row0:col2'])
- unit_dimension_unknown: 'liter/h per kg' (CLR)
- dropped value-less row: 'K, c'
- NIL: refused to back-fill base 'V' from footnote/prose loose number 0.361 (source ['tab_2:footnote']); the table cell was unparseable — needs review
- salvaged Q61 ('apparent steady-state volume of distribution'=0.361) from results prose — parameter table was unreadable
- salvaged Q22 ('total body clearance'=0.289) from results prose — parameter table was unreadable
- implicit units: 'Mean ± SDᵃ CLᴿ (liter/h per kg)' → L/h/kg (from the paper text: "The paper text explicitly states: 'the estimated renal clearance was 0.174 liter/h per kg'. The Discussion section also ")
- implicit units: 'total body clearance' → L/h/kg (from the paper text: "The paper text explicitly states: 'total body clearance were 0.8 h, 0.361 liter/kg, and 0.289 liter/h per kg, respective")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefotaxime
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'dctx' subgroup of Trang_1985 (paper reports 3 populations: dctx, model-dependent, noncompartmental)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table tab_2: grid unusable → re-running vision table extraction for Trang_1985
- transposed table Trang_1985_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Trang_1985_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent steady-state volume of distribution]` | 0.361 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda cl]` |  | 0.289 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda kel or 1/mrt]` |  | 0.954 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda t1⁄2a]` |  | 0.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda u/d]` | 35.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda u]` |  | 205.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean ± sda v or vss]` |  | 0.361 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 0.289 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 0.8 | 0.866 | 1.083 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Trang_1985:other_prose'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Trang_1985_table_2:row3:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Trang_1985_table_2:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.289 |  |  | ['Trang_1985:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 20.2 L/h |  |  | ['Trang_1985:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 25.3 L |  |  | ['Trang_1985:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=cefotaxime) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 0.8 | 0.5621 | 0.7026 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 2.1 | 0.5621 | 0.2676 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.8 | 0.5621 | 0.7026 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.1 | 0.5621 | 0.2676 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.1 | 0.5621 | 0.2676 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_modelica.zip" download>Cefotaxime_Trang1985_dctx_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_fmi.zip" download>Cefotaxime_Trang1985_dctx_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_matlab.zip" download>Cefotaxime_Trang1985_dctx_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_matlab_simbio.zip" download>Cefotaxime_Trang1985_dctx_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_sbml.zip" download>Cefotaxime_Trang1985_dctx_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_cellml.zip" download>Cefotaxime_Trang1985_dctx_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4555 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0035 | kg |
| input | model | `Cl` | 5.619e-06 | m3/s |
| input | model | `VdPerKg` | 0.000361 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Trang JM, Jacobs RF, Kearns GL, Brown AL, Wells TG, Underwood FL et al. Cefotaxime and desacetylcefotaxime pharmacokinetics in infants and children with meningitis. Antimicrobial agents and chemotherapy 28(6):791–795 (1985). [doi:10.1128/AAC.28.6.791](https://doi.org/10.1128/AAC.28.6.791)

**This record:** Pharmacolibrary v26.09, model `Cefotaxime_Trang1985_dctx`. <https://pharmacolibrary.github.io/#/drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx>

```bibtex
@misc{pharmacolibrary_CefotaximeTrang1985dctx,
  title  = {{Pharmacolibrary model Cefotaxime_Trang1985_dctx}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx},
  note   = {Parameters from doi:10.1128/AAC.28.6.791},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 3500 mg infusion over 10 min, single dose. Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx/Cefotaxime_Trang1985_dctx_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cefotaxime_Trang1985_dctx_params.json` · controls `Cefotaxime_Trang1985_dctx_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefotaxime%5D%20Cefotaxime_Trang1985_dctx&body=Drug%3A%20cefotaxime%0ARecord%3A%20Cefotaxime_Trang1985_dctx%0APaper%3A%20Trang_1985%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:17 UTC</sub>
