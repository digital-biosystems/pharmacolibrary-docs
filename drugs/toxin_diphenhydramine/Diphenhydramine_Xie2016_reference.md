<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Diphenhydramine&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/&quot;},{&quot;label&quot;:&quot;Xie_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Gyawali2019_reference&quot;,&quot;label&quot;:&quot;Gyawali_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Gyawali2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Yoo1990_reference&quot;,&quot;label&quot;:&quot;Yoo_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Yoo1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_control&quot;,&quot;label&quot;:&quot;Kawase_2021_control&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_control.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_lps&quot;,&quot;label&quot;:&quot;Kawase_2021_lps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_lps.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Simons1990_reference&quot;,&quot;label&quot;:&quot;Simons_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Simons1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Xie2016_reference&quot;,&quot;label&quot;:&quot;Xie_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Diphenhydramine — `Diphenhydramine_Xie2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Diphenhydramine" model-id="Diphenhydramine_Xie2016_reference" status="needs_review" stale="false" population="crucian carp (Carassius auratus)" measured-compound="Diphenhydramine" parameterization="mechanistic" topology="1C"></div>

## Citation
Xie Z, Lu G, Hou K, Qin D, Yan Z, Chen W. Bioconcentration, metabolism and effects of diphenhydramine on behavioral and biochemical markers in crucian carp (Carassius auratus). The Science of the total environment 544:400–409 (2016).
  ·  DOI: [10.1016/j.scitotenv.2015.11.132](https://doi.org/10.1016/j.scitotenv.2015.11.132)

## Population and dosing

**Population:** crucian carp (Carassius auratus) · condition aquatic exposure.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference.svg" alt="Diphenhydramine_Xie2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| maximum bioconcentration factor (brain) | Kp | 81.6 | brain |
| CL (mL/min/kg) | CL | 4.38 | mL/min/kg |
| VD (µL/g) | V | 82.0 | µL/g |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Gyawali_2019) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — diphenhydramine: Kp 81.6 brain, CL 4.38 mL/min/kg, V 82 µL/g.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of dph concentrations: this record has none, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| maximum bioconcentration factor (brain) | `Q410` · Kp | 81.6 | brain |  |  | brain | llm (0.6) | Xie_2016:abstract |
| CL (mL/min/kg) | `Q22` · CL | 4.38 | mL/min/kg | 5.11e-06 | m3/s | L/h | review_gapfill (0.7) | Gyawali_2019:review |
| VD (µL/g) | `Q61` · V | 82.0 | µL/g | 0.00574 | m3 | L | review_gapfill (0.7) | Gyawali_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| DPH concentrations | Q75 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'maximum bioconcentration factor (liver)' — extend the ontology if this is a real PK parameter (source ['Xie_2016:abstract'])
- unit_dimension_unknown: 'brain' (Kp)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Diphenhydramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Gyawali_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Gyawali_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — no disposition parameter from this paper; review-gap-filled from other paper(s): Gyawali_2019 — borrowed values do not complete its disposition core)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Xie_2016_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[dph concentrations]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[maximum bioconcentration factor]` | 81.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[various concentrations of dph]` |  | 0.84 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gyawali_2019:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 / [mass] |  | ['Gyawali_2019:review'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Xie_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.38 | ['Gyawali_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.4 L/h | ['Gyawali_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.74 L | ['Gyawali_2019:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_modelica.zip" download>Diphenhydramine_Xie2016_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_fmi.zip" download>Diphenhydramine_Xie2016_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_matlab.zip" download>Diphenhydramine_Xie2016_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_matlab_simbio.zip" download>Diphenhydramine_Xie2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_sbml.zip" download>Diphenhydramine_Xie2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_cellml.zip" download>Diphenhydramine_Xie2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2554 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0002 | kg |
| input | model | `Cl` | 5.11e-06 | m3/s |
| input | model | `VdPerKg` | 8.2e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Xie Z, Lu G, Hou K, Qin D, Yan Z, Chen W. Bioconcentration, metabolism and effects of diphenhydramine on behavioral and biochemical markers in crucian carp (Carassius auratus). The Science of the total environment 544:400–409 (2016). [doi:10.1016/j.scitotenv.2015.11.132](https://doi.org/10.1016/j.scitotenv.2015.11.132)

**This record:** Pharmacolibrary, model `Diphenhydramine_Xie2016_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference>

```bibtex
@misc{pharmacolibrary_DiphenhydramineXie2016reference,
  title  = {{Pharmacolibrary model Diphenhydramine_Xie2016_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference},
  note   = {Parameters from doi:10.1016/j.scitotenv.2015.11.132},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 200 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 200 mg parenteral (R06AA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference/Diphenhydramine_Xie2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Diphenhydramine_Xie2016_reference_params.json` · controls `Diphenhydramine_Xie2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiphenhydramine%5D%20Diphenhydramine_Xie2016_reference&body=Drug%3A%20diphenhydramine%0ARecord%3A%20Diphenhydramine_Xie2016_reference%0APaper%3A%20Xie_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 02:54 UTC</sub>
