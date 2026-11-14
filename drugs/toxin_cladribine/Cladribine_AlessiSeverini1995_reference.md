<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cladribine&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/&quot;},{&quot;label&quot;:&quot;Alessi-Severini_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_AlessiSeverini1995_reference&quot;,&quot;label&quot;:&quot;Alessi-Severini_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cladribine_Juliusson2011_reference&quot;,&quot;label&quot;:&quot;Juliusson_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Juliusson2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average_estimate&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Lindemalm2005_population_average_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Liliemark1997_reference&quot;,&quot;label&quot;:&quot;Liliemark_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Liliemark1997_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cladribine — `Cladribine_AlessiSeverini1995_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Cladribine" model-id="Cladribine_AlessiSeverini1995_reference" status="extracted" stale="false" population="leukemia cells from patients with chronic lymphocytic leukemia (CLL)" measured-compound="2-chlorodeoxyadenosine (cladribine)" parameterization="mechanistic" topology="retention"></div>

## Citation
Alessi-Severini S, Gati WP, Belch AR, Paterson AR. Intracellular pharmacokinetics of 2-chlorodeoxyadenosine in leukemia cells from patients with chronic lymphocytic leukemia. Leukemia 9(10):1674–1679 (1995).

## Population and dosing

**Population:** leukemia cells from patients with chronic lymphocytic leukemia (CLL) · condition chronic lymphocytic leukemia (ex vivo cell study) · age group adult · n = 19.

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| mean half-life of the initial phase | t1/2α | 0.3 | h |
| clearance (CL) | CL | 39.3 | L/h |
| absorption rate constant | kabs | 1.31 | hour-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has 2-chlorodeoxyadenosine (cladribine), the second reading 2-chlorodeoxyadenosine; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean half-life of the initial phase | `Q59` · t1/2α | 0.3 | h | 1080 | s | h | llm (0.6) | Alessi-Severini_1995:abstract |
| clearance (CL) | `Q22` · CL | 39.3 | L/h | 1.092e-05 | m3/s | L/h | review_gapfill (0.7) | Lindemalm_2005:review |
| absorption rate constant | `Q49` · kabs | 1.31 | hour-1 | 0.0003639 | 1/s | 1/h | review_gapfill (0.7) | Lindemalm_2005:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / mean half-life of the initial phase (Q59)

**Interpretation flags:**
- relinked 'mean half-life, initial rate of 2-CdA efflux with 0.5 microM nitrobenzylthioinosine (NBMPR)' Q328 → Q59: a half-life by its label (the unit decides, not the label)
- dropped duplicate Q59 ('mean half-life, initial rate of 2-CdA efflux with 0.5 microM nitrobenzylthioinosine (NBMPR)', value 0.43) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=2-chlorodeoxyadenosine (cladribine)
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- molar mass: none found for '2-chlorodeoxyadenosine (cladribine)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Lindemalm_2005's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Lindemalm_2005's review values (primary lacked it)
- skipped review gap-fill of TLAG from Savic_2017: its label names a different analyte ('phase') — 'Lag time for phase III, h'

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Alessi-Severini_1995_metadata.yaml (2 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.286 (2/7 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[mean half-life of the initial phase]` |  | 0.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean half-life of the initial phase]` | 0.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean half-life]` |  | 0.43 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | 2-chlorodeoxyadenosine (cladribine) | 2-chlorodeoxyadenosine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 2-chlorodeoxyadenosine (cladribine) | 2-chlorodeoxyadenosine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lindemalm_2005:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lindemalm_2005:review'] |
| C5_dimension_Q59 | pass | [time] |  | ['Alessi-Severini_1995:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.3 | ['Lindemalm_2005:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 39.3 L/h | ['Lindemalm_2005:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_modelica.zip" download>Cladribine_AlessiSeverini1995_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_fmi.zip" download>Cladribine_AlessiSeverini1995_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_matlab.zip" download>Cladribine_AlessiSeverini1995_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_sbml.zip" download>Cladribine_AlessiSeverini1995_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_cellml.zip" download>Cladribine_AlessiSeverini1995_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6.3e-06 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1080 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Alessi-Severini S, Gati WP, Belch AR, Paterson AR. Intracellular pharmacokinetics of 2-chlorodeoxyadenosine in leukemia cells from patients with chronic lymphocytic leukemia. Leukemia 9(10):1674–1679 (1995).

**This record:** Pharmacolibrary, model `Cladribine_AlessiSeverini1995_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference>

```bibtex
@misc{pharmacolibrary_CladribineAlessiSeverini1995reference,
  title  = {{Pharmacolibrary model Cladribine_AlessiSeverini1995_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference/Cladribine_AlessiSeverini1995_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Cladribine_AlessiSeverini1995_reference_params.json` · controls `Cladribine_AlessiSeverini1995_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcladribine%5D%20Cladribine_AlessiSeverini1995_reference&body=Drug%3A%20cladribine%0ARecord%3A%20Cladribine_AlessiSeverini1995_reference%0APaper%3A%20Alessi-Severini_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 10:32 UTC</sub>
