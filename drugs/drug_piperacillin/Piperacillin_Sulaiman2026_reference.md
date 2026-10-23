<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;piperacillin&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/&quot;},{&quot;label&quot;:&quot;Sulaiman_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperacillin_Dohmann2025_reference&quot;,&quot;label&quot;:&quot;Dohmann_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Dohmann2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperacillin_Sulaiman2026_reference&quot;,&quot;label&quot;:&quot;Sulaiman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# piperacillin — `Piperacillin_Sulaiman2026_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="piperacillin" model-id="Piperacillin_Sulaiman2026_reference" status="curated_candidate" stale="false" population="critically ill adults with sepsis or septic shock" measured-compound="piperacillin" parameterization="mechanistic" topology="1C"></div>

## Citation
Sulaiman H, Wölky SA, Rozali MA, Adiraju SKS, Hasan MS, Hernandez-Mitre MP et al. A multicentre evaluation of pharmacokinetic/pharmacodynamic target attainment of piperacillin and tazobactam and the association with clinical outcomes in critically ill patients with sepsis and septic shock. The Journal of antimicrobial chemotherapy 81(7) (2026).
  ·  DOI: [10.1093/jac/dkag199](https://doi.org/10.1093/jac/dkag199)

## Population and dosing

**Population:** critically ill adults with sepsis or septic shock · condition sepsis or septic shock · age group adult · n = &gt;45.

**Dosing:** 4500 mg, iv, multiple, every 6 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference.svg" alt="Piperacillin_Sulaiman2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLpip (L/h) | CL | 8.78 | L/h | 5.69 |
| Vtaz (L) | Vss | 27.15 | L | 9.77 |
| Average Vd for piperacillin | V | 24.1 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has piperacillin, the second reading piperacillin/tazobactam; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLpip (L/h) | `Q22` · CL | 8.78 | L/h | 2.439e-06 | m3/s | l/h | 5.69 | llm (0.6) | dkag199-T2:row2:col1 |
| Vtaz (L) | `Q65` · Vss | 27.15 | L | 0.02715 | m3 | l | 9.77 | llm (0.6) | dkag199-T2:row6:col1 |
| Average Vd for piperacillin | `Q61` · V | 24.1 | L | 0.0241 | m3 | L |  | review_gapfill (0.7) | Veillette_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vpip (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'CLtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iiv: 'Vtaz (%)' routed out of structural estimates ('Between-subject variability')
- table section iov: 'CLpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vpip (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'CLtaz (%)' routed out of structural estimates ('Between-occasion variability')
- table section iov: 'Vtaz (%)' routed out of structural estimates ('Between-occasion variability')
- dropped unlinked row (NIL): 'Vpip (L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row3:col1'])
- dropped unlinked row (NIL): 'CLcr effect on CLpip' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row4:col1'])
- dropped duplicate Q22 ('CLtaz (L/h)', value '8.74') — already have one for this compound
- dropped unlinked row (NIL): 'CLcr effect on CLtaz' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row7:col1'])
- dropped unlinked row (NIL): 'Additivepip (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row19:col1'])
- dropped unlinked row (NIL): 'Proportionalpip (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row20:col1'])
- dropped unlinked row (NIL): 'Additivetaz (mg/L)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row21:col1'])
- dropped unlinked row (NIL): 'Proportionaltaz (%)' — extend the ontology if this is a real PK parameter (source ['dkag199-T2:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=piperacillin
- gap-filled Q61 (V) from Veillette_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of KA from de_2011: its label names a different analyte ('rats') — 'k max (3.11±0.02 h À1 for rats and 3.19 ± 1.39 h À1 for humans) for rats'

**Extraction notes:**
- unparsed cell dkag199-T2:row2:col2 = '8.73 (7.78–9.92)'
- unparsed cell dkag199-T2:row3:col2 = '25.73 (2.17–31.59)'
- unparsed cell dkag199-T2:row4:col2 = '0.89 (0.74–1.09)'
- unparsed cell dkag199-T2:row5:col2 = '8.7 (7.65–9.87)'
- unparsed cell dkag199-T2:row6:col2 = '27.88 (15.95–34.47)'
- unparsed cell dkag199-T2:row7:col2 = '0.96 (0.77–1.18)'
- unparsed cell dkag199-T2:row9:col2 = '20.20 (0–41.65)'
- unparsed cell dkag199-T2:row10:col2 = '42.78 (0–64.53)'
- unparsed cell dkag199-T2:row11:col2 = '26.45 (0–48.54)'
- unparsed cell dkag199-T2:row12:col2 = '45.07 (0–69.80)'
- unparsed cell dkag199-T2:row14:col2 = '32.84 (14.07–48.54)'
- unparsed cell dkag199-T2:row15:col2 = '25.40 (17.12–100)'
- unparsed cell dkag199-T2:row16:col2 = '35.01 (12.04–55.72)'
- unparsed cell dkag199-T2:row17:col2 = '24.35 (16.10–100)'
- unparsed cell dkag199-T2:row19:col2 = '2.54 (0.71–4.78)'
- unparsed cell dkag199-T2:row20:col2 = '17 (12–22)'
- unparsed cell dkag199-T2:row21:col2 = '0.43 (0.2–0.8)'
- unparsed cell dkag199-T2:row22:col2 = '16 (1–20)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[additivetaz]` |  | 0.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[average vd for piperacillin]` | 24.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vpip]` |  | 25.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtaz]` | 27.15 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | piperacillin | piperacillin/tazobactam | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dkag199-T2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Veillette_2021:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['dkag199-T2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.78 | ['dkag199-T2:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.78 L/h | ['dkag199-T2:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.1 L | ['Veillette_2021:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.2 L | ['dkag199-T2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=piperacillin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_modelica.zip" download>Piperacillin_Sulaiman2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_fmi.zip" download>Piperacillin_Sulaiman2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab.zip" download>Piperacillin_Sulaiman2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_matlab_simbio.zip" download>Piperacillin_Sulaiman2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sbml.zip" download>Piperacillin_Sulaiman2026_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_cellml.zip" download>Piperacillin_Sulaiman2026_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5176 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0045 | kg |
| input | model | `Cl` | 2.439e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003443 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sulaiman H, Wölky SA, Rozali MA, Adiraju SKS, Hasan MS, Hernandez-Mitre MP et al. A multicentre evaluation of pharmacokinetic/pharmacodynamic target attainment of piperacillin and tazobactam and the association with clinical outcomes in critically ill patients with sepsis and septic shock. The Journal of antimicrobial chemotherapy 81(7) (2026). [doi:10.1093/jac/dkag199](https://doi.org/10.1093/jac/dkag199)

**This record:** Pharmacolibrary v26.09, model `Piperacillin_Sulaiman2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference>

```bibtex
@misc{pharmacolibrary_PiperacillinSulaiman2026reference,
  title  = {{Pharmacolibrary model Piperacillin_Sulaiman2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference},
  note   = {Parameters from doi:10.1093/jac/dkag199},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 4500 mg infusion over 10 min, single dose. Dose in the paper: 4500 mg.

<dbs-fmusim paramsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference/Piperacillin_Sulaiman2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Piperacillin_Sulaiman2026_reference_params.json` · controls `Piperacillin_Sulaiman2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperacillin%5D%20Piperacillin_Sulaiman2026_reference&body=Drug%3A%20piperacillin%0ARecord%3A%20Piperacillin_Sulaiman2026_reference%0APaper%3A%20Sulaiman_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperacillin/Piperacillin_Sulaiman2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:15 UTC</sub>
