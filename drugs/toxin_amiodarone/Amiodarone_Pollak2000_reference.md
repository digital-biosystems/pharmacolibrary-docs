<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amiodarone&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/&quot;},{&quot;label&quot;:&quot;Pollak_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiodarone_Brien1990_reference&quot;,&quot;label&quot;:&quot;Brien_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Brien1990_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Deb2021_reference&quot;,&quot;label&quot;:&quot;Deb_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Deb2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Lescroart2022_reference&quot;,&quot;label&quot;:&quot;Lescroart_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Lescroart2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_Pollak2000_reference&quot;,&quot;label&quot;:&quot;Pollak_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amiodarone_Freedman1991_reference&quot;,&quot;label&quot;:&quot;Freedman_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_Freedman1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amiodarone_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amiodarone/Amiodarone_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amiodarone — `Amiodarone_Pollak2000_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Amiodarone" model-id="Amiodarone_Pollak2000_reference" status="extracted" stale="false" population="patients receiving long-term oral amiodarone therapy" measured-compound="Amiodarone" parameterization="apparent" topology="2C"></div>

## Citation
Pollak PT, Bouillon T, Shafer SL. Population pharmacokinetics of long-term oral amiodarone therapy. Clinical pharmacology and therapeutics 67(6):642-652 (2000).
  ·  DOI: [10.1067/mcp.2000.107047](https://doi.org/10.1067/mcp.2000.107047)

## Population and dosing

**Population:** patients receiving long-term oral amiodarone therapy · condition cardiac arrhythmia patients on long-term oral amiodarone therapy · age group adult · n = 77.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference.svg" alt="Amiodarone_Pollak2000_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| V1/F | V1/F | 882 | L |
| V2/F | V2/F | 12700 | L |
| CL1/F | CL/F | 229 | L/day |
| CL2/F | Q/F | 599 | L/day |
| Rapid distribution half-life | t1/2α | 17 | hours |
| terminal half-life | t1/2z | 55 | days |
| k a3 | kabs | 2.05 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 25% serum concentration decrement: this record has none, the second reading 25; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1/F | `Q290` · V1/F | 882 | L | 0.882 | m3 | l | exact (1) | Pollak_2000:abstract |
| V2/F | `Q82` · V2/F | 12700 | L | 12.7 | m3 | l | exact (1) | Pollak_2000:abstract |
| CL1/F | `Q27` · CL/F | 229 | L/day | 2.65e-06 | m3/s | l/d | llm_corrected (0.6) | Pollak_2000:abstract |
| CL2/F | `Q69` · Q/F | 599 | L/day | 6.933e-06 | m3/s | l/d | special_case (0.95) | Pollak_2000:abstract |
| Rapid distribution half-life | `Q59` · t1/2α | 17 | hours | 6.12e+04 | s | h | half_life_rule (0.95) | Pollak_2000:abstract |
| terminal half-life | `Q57` · t1/2z | 55 | days | 4.752e+06 | s | d | half_life_rule (0.95) | Pollak_2000:abstract |
| k a3 | `Q49` · kabs | 2.05 | h -1 | 0.0005694 | 1/s | 1/h | review_gapfill (0.7) | Rodríguez-Fernández_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Amiodarone
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q49 (kabs) from Rodríguez-Fernández_2022's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pollak_2000_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[25% serum concentration decrement]` |  | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss:120b` | `parameters[v2/f]` | 12700 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Pollak_2000:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Pollak_2000:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rodríguez-Fernández_2022:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Pollak_2000:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Pollak_2000:abstract'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Pollak_2000:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Pollak_2000:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.54 L/h | ['Pollak_2000:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 882 L | ['Pollak_2000:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.27e+04 L | ['Pollak_2000:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_modelica.zip" download>Amiodarone_Pollak2000_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_fmi.zip" download>Amiodarone_Pollak2000_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_matlab.zip" download>Amiodarone_Pollak2000_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_matlab_simbio.zip" download>Amiodarone_Pollak2000_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_sbml.zip" download>Amiodarone_Pollak2000_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_cellml.zip" download>Amiodarone_Pollak2000_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.6453 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `Cl` | 2.65e-06 | m3/s |
| input | model | `VdPerKg` | 0.0126 | m3/kg |
| input | model | `k12` | 7.86e-06 | 1/s |
| input | model | `k21` | 5.459e-07 | 1/s |
| input | model | `ka` | 0.0005694 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Pollak PT, Bouillon T, Shafer SL. Population pharmacokinetics of long-term oral amiodarone therapy. Clinical pharmacology and therapeutics 67(6):642-652 (2000). [doi:10.1067/mcp.2000.107047](https://doi.org/10.1067/mcp.2000.107047)

**This record:** Pharmacolibrary, model `Amiodarone_Pollak2000_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference>

```bibtex
@misc{pharmacolibrary_AmiodaronePollak2000reference,
  title  = {{Pharmacolibrary model Amiodarone_Pollak2000_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference},
  note   = {Parameters from doi:10.1067/mcp.2000.107047},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 2.05 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 200 mg oral (C01BD01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference/Amiodarone_Pollak2000_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amiodarone_Pollak2000_reference_params.json` · controls `Amiodarone_Pollak2000_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamiodarone%5D%20Amiodarone_Pollak2000_reference&body=Drug%3A%20amiodarone%0ARecord%3A%20Amiodarone_Pollak2000_reference%0APaper%3A%20Pollak_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amiodarone/Amiodarone_Pollak2000_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 19:27 UTC</sub>
