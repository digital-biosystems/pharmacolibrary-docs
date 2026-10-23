<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;treosulfan&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/&quot;},{&quot;label&quot;:&quot;van_2019 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Treosulfan_Chiesa2020_reference&quot;,&quot;label&quot;:&quot;Chiesa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Danielak2018_reference&quot;,&quot;label&quot;:&quot;Danielak_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Danielak2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Rosser2023_reference&quot;,&quot;label&quot;:&quot;Rosser_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Rosser2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Ten2014_reference&quot;,&quot;label&quot;:&quot;Ten_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Ten2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_base&quot;,&quot;label&quot;:&quot;van_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_final&quot;,&quot;label&quot;:&quot;van_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# treosulfan — `Treosulfan_van2019_final`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="treosulfan" model-id="Treosulfan_van2019_final" status="curated_candidate" stale="false" population="paediatric patients undergoing hematopoietic stem cell transplantation" measured-compound="treosulfan" parameterization="mechanistic" topology="2C"></div>

## Citation
van der Stoep MYEC, Zwaveling J, Bertaina A, Locatelli F, Guchelaar HJ, Lankester AC et al. Population pharmacokinetics of treosulfan in paediatric patients undergoing hematopoietic stem cell transplantation. British journal of clinical pharmacology 85(9):2033–2044 (2019).
  ·  DOI: [10.1111/bcp.13995](https://doi.org/10.1111/bcp.13995)

## Population and dosing

**Population:** paediatric patients undergoing hematopoietic stem cell transplantation · condition haematopoietic stem cell transplantation · age group mixed · n = # Population pharmacokinetics.

**Dosing:** 30, 36, 42 g/m2, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final.svg" alt="Treosulfan_van2019_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Cl (L/h) | CL | 7 | L/h |
| V1 (L/) | V1 | 18 | L/ |
| Q (L/h) | Q | 31 | L/h |
| V2 (L) | V2 | 16 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl (L/h) | `Q22` · CL | 7 | L/h | 1.944e-06 | m3/s | l/h | exact (1) | bcp13995-tbl-0002:row2:col8 |
| V1 (L/) | `Q63` · V1 | 18 | L/ | 0.018 | m3 | l | exact (1) | bcp13995-tbl-0002:row3:col8 |
| Q (L/h) | `Q30` · Q | 31 | L/h | 8.611e-06 | m3/s | l/h | exact (1) | bcp13995-tbl-0002:row4:col8 |
| V2 (L) | `Q64` · V2 | 16 | L | 0.016 | m3 | l | exact (1) | bcp13995-tbl-0002:row5:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Cl (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V1 (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2 (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q (CV%)' routed out of structural estimates ('Interindividual variability')
- table section iov: 'Cl (CV%)' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'σ (proportional error)' routed out of structural estimates ('Residual variability')
- unit_dimension_unknown: 'L/' (V1)
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13995-tbl-0002:row6:col7', 'bcp13995-tbl-0002:row6:col8'])
- dropped unlinked row (NIL): 'TM50' — extend the ontology if this is a real PK parameter (source ['bcp13995-tbl-0002:row7:col7', 'bcp13995-tbl-0002:row7:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=treosulfan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of van_2019 (paper reports 2 stages: base model, final model); same population, different model-building step

**Extraction notes:**
- unparsed cell bcp13995-tbl-0002:row2:col4 = '15.9a'
- unparsed cell bcp13995-tbl-0002:row2:col7 = '18.8a'
- unparsed cell bcp13995-tbl-0002:row2:col10 = '19.4a'
- unparsed cell bcp13995-tbl-0002:row3:col4 = '18.8a'
- unparsed cell bcp13995-tbl-0002:row3:col7 = '20.2a'
- unparsed cell bcp13995-tbl-0002:row3:col10 = '19.8a'
- unparsed cell bcp13995-tbl-0002:row4:col4 = '17.3a'
- unparsed cell bcp13995-tbl-0002:row4:col7 = '21.3a'
- unparsed cell bcp13995-tbl-0002:row4:col10 = '22.0a'
- unparsed cell bcp13995-tbl-0002:row5:col4 = '16.8a'
- unparsed cell bcp13995-tbl-0002:row5:col7 = '16.8a'
- unparsed cell bcp13995-tbl-0002:row5:col10 = '16.8a'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp13995-tbl-0002:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp13995-tbl-0002:row4:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp13995-tbl-0002:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7 | ['bcp13995-tbl-0002:row2:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7 L/h | ['bcp13995-tbl-0002:row2:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 18 L | ['bcp13995-tbl-0002:row3:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 16 L | ['bcp13995-tbl-0002:row5:col8'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=treosulfan) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_modelica.zip" download>Treosulfan_van2019_final_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_fmi.zip" download>Treosulfan_van2019_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_matlab.zip" download>Treosulfan_van2019_final_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_matlab_simbio.zip" download>Treosulfan_van2019_final_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_sbml.zip" download>Treosulfan_van2019_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_cellml.zip" download>Treosulfan_van2019_final_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2783 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.944e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002571 | m3/kg |
| input | model | `k12` | 0.0004784 | 1/s |
| input | model | `k21` | 0.0005382 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): van der Stoep MYEC, Zwaveling J, Bertaina A, Locatelli F, Guchelaar HJ, Lankester AC et al. Population pharmacokinetics of treosulfan in paediatric patients undergoing hematopoietic stem cell transplantation. British journal of clinical pharmacology 85(9):2033–2044 (2019). [doi:10.1111/bcp.13995](https://doi.org/10.1111/bcp.13995)

**This record:** Pharmacolibrary v26.09, model `Treosulfan_van2019_final`. <https://pharmacolibrary.github.io/#/drugs/drug_treosulfan/Treosulfan_van2019_final>

```bibtex
@misc{pharmacolibrary_Treosulfanvan2019final,
  title  = {{Pharmacolibrary model Treosulfan_van2019_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_treosulfan/Treosulfan_van2019_final},
  note   = {Parameters from doi:10.1111/bcp.13995},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_treosulfan/Treosulfan_van2019_final/Treosulfan_van2019_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Treosulfan_van2019_final_params.json` · controls `Treosulfan_van2019_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btreosulfan%5D%20Treosulfan_van2019_final&body=Drug%3A%20treosulfan%0ARecord%3A%20Treosulfan_van2019_final%0APaper%3A%20van_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_treosulfan/Treosulfan_van2019_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:33 UTC</sub>
