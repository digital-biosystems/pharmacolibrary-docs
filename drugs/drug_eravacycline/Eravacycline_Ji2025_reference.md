<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;eravacycline&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/&quot;},{&quot;label&quot;:&quot;Ji_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eravacycline_Ji2025_reference&quot;,&quot;label&quot;:&quot;Ji_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Ji2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Eravacycline_Zhanel2016_reference&quot;,&quot;label&quot;:&quot;Zhanel_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Zhanel2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eravacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eravacycline — `Eravacycline_Ji2025_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="eravacycline" model-id="Eravacycline_Ji2025_reference" status="curated_candidate" stale="false" population="healthy adults" measured-compound="eravacycline" parameterization="mechanistic" topology="2C"></div>

## Citation
Ji X-w, Mak WY, Xue F, Yang W-y, Kuan IH-S, Xiang X-q et al. Population pharmacokinetics and pulmonary modeling of eravacycline and the determination of microbiological breakpoint and cutoff of PK/PD. Antimicrobial agents and chemotherapy 69(3):e0106524 (2025).
  ·  DOI: [10.1128/aac.01065-24](https://doi.org/10.1128/aac.01065-24)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;= 20.

**Dosing:** 70 mg, iv, multiple, every 12 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference.svg" alt="Eravacycline_Ji2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 16.3 | L/h |
| Vc (L) | V1 | 3.88 | L |
| Q1 (L/h) | Q | 33.9 | L/h |
| VP1 (L) | V2 | 39 | L |
| VP2 (L) | V3 | 122 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eravacycline, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 16.3 | L/h | 4.528e-06 | m3/s | l/h | exact (1) | T1:row2:col1 |
| Vc (L) | `Q63` · V1 | 3.88 | L | 0.00388 | m3 | l | exact (1) | T1:row3:col1 |
| Q1 (L/h) | `Q30` · Q | 33.9 | L/h | 9.417e-06 | m3/s | l/h | exact (1) | T1:row4:col1 |
| VP1 (L) | `Q64` · V2 | 39 | L | 0.039 | m3 | l | exact (1) | T1:row5:col1 |
| VP2 (L) | `Q77` · V3 | 122 | L | 0.122 | m3 | l | exact (1) | T1:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q2 (L/h)', value '23.5') — already have one for this compound
- dropped unlinked row (NIL): 'Ratio' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number 16.3 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 3.88 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number 33.9 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number 39 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number 23.5 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V3' from footnote/prose loose number 122 (source ['T1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eravacycline
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell T1:row2:col2 = '5%'
- unparsed cell T1:row2:col3 = '16.2 (15.0–17.4)'
- unparsed cell T1:row3:col2 = '25%'
- unparsed cell T1:row3:col3 = '3.5 (1.8–7.2)'
- unparsed cell T1:row4:col2 = '11%'
- unparsed cell T1:row4:col3 = '32.7 (24.7–47.7)'
- unparsed cell T1:row5:col2 = '20%'
- unparsed cell T1:row5:col3 = '37.6 (29.2–54.5)'
- unparsed cell T1:row6:col2 = '16%'
- unparsed cell T1:row6:col3 = '23.3 (19.2–29.2)'
- unparsed cell T1:row7:col2 = '15%'
- unparsed cell T1:row7:col3 = '121 (109.9–134.9)'
- unparsed cell T1:row8:col2 = '12%'
- unparsed cell T1:row8:col3 = '8.3 (6.8–9.8)'
- unparsed cell T1:row15:col2 = '48% [22%]'
- unparsed cell T1:row15:col3 = '9.02 (0.19–16.1)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | eravacycline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eravacycline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T1:row5:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T1:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.3 | ['T1:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.3 L/h | ['T1:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.88 L | ['T1:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 39 L | ['T1:row5:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=eravacycline) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_modelica.zip" download>Eravacycline_Ji2025_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_fmi.zip" download>Eravacycline_Ji2025_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_matlab.zip" download>Eravacycline_Ji2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_matlab_simbio.zip" download>Eravacycline_Ji2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_sbml.zip" download>Eravacycline_Ji2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_cellml.zip" download>Eravacycline_Ji2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5586 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `Cl` | 4.528e-06 | m3/s |
| input | model | `VdPerKg` | 5.543e-05 | m3/kg |
| input | model | `k12` | 0.002427 | 1/s |
| input | model | `k21` | 0.0002415 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ji X-w, Mak WY, Xue F, Yang W-y, Kuan IH-S, Xiang X-q et al. Population pharmacokinetics and pulmonary modeling of eravacycline and the determination of microbiological breakpoint and cutoff of PK/PD. Antimicrobial agents and chemotherapy 69(3):e0106524 (2025). [doi:10.1128/aac.01065-24](https://doi.org/10.1128/aac.01065-24)

**This record:** Pharmacolibrary v26.09, model `Eravacycline_Ji2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eravacycline/Eravacycline_Ji2025_reference>

```bibtex
@misc{pharmacolibrary_EravacyclineJi2025reference,
  title  = {{Pharmacolibrary model Eravacycline_Ji2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eravacycline/Eravacycline_Ji2025_reference},
  note   = {Parameters from doi:10.1128/aac.01065-24},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 70 mg infusion over 10 min, single dose. Dose in the paper: 70 mg.

<dbs-fmusim paramsurl="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_eravacycline/Eravacycline_Ji2025_reference/Eravacycline_Ji2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Eravacycline_Ji2025_reference_params.json` · controls `Eravacycline_Ji2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beravacycline%5D%20Eravacycline_Ji2025_reference&body=Drug%3A%20eravacycline%0ARecord%3A%20Eravacycline_Ji2025_reference%0APaper%3A%20Ji_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eravacycline/Eravacycline_Ji2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:55 UTC</sub>
