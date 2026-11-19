<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Methyldopa&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/&quot;},{&quot;label&quot;:&quot;Skerjanec_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyldopa_AdamiakGiera2021_reference&quot;,&quot;label&quot;:&quot;Adamiak-Giera_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_AdamiakGiera2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Campbell1992_reference&quot;,&quot;label&quot;:&quot;Campbell_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Campbell1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Skerjanec1995_reference&quot;,&quot;label&quot;:&quot;Skerjanec_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methyldopa_van2022_haas_et_al_64&quot;,&quot;label&quot;:&quot;van_2022_haas_et_al_64&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_van2022_haas_et_al_64.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methyldopa — `Methyldopa_Skerjanec1995_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Methyldopa" model-id="Methyldopa_Skerjanec1995_reference" status="needs_review" stale="false" population="16 healthy human volunteers" measured-compound="Methyldopa" parameterization="mechanistic" topology="1C"></div>

## Citation
Skerjanec A, Campbell NR, Robertson S, Tam YK. Pharmacokinetics and presystemic gut metabolism of methyldopa in healthy human subjects. Journal of clinical pharmacology 35(3):275–280 (1995).
  ·  DOI: [10.1002/j.1552-4604.1995.tb04058.x](https://doi.org/10.1002/j.1552-4604.1995.tb04058.x)

## Population and dosing

**Population:** 16 healthy human volunteers · condition healthy · age group adult · n = 16.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference.svg" alt="Methyldopa_Skerjanec1995_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life | t1/2z | 2.0 | hours |
| total body ... clearance | CL | 268 | mL/min |
| renal clearance | CLR | 107 | mL/min |
| volume of distribution at steady-state | Vss | 33 | L |
| ka | kabs | 0.18 | min−1 |
| lag time | tlag | 9.97 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — methyldopa: t1/2z 2 hours, CL 268 mL/min, CLR 107 mL/min, Vss 33 L, kabs 0.18 min−1, tlag 9.97 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life | `Q57` · t1/2z | 2.0 | hours | 7200 | s | h | half_life_rule (0.95) | Skerjanec_1995:abstract |
| total body ... clearance | `Q22` · CL | 268 | mL/min | 4.467e-06 | m3/s | ml/min | llm_confirmed (0.6) | Skerjanec_1995:abstract |
| renal clearance | `Q26` · CLR | 107 | mL/min | 1.783e-06 | m3/s | ml/min | exact (1) | Skerjanec_1995:abstract |
| volume of distribution at steady-state | `Q65` · Vss | 33 | L | 0.033 | m3 | l | llm_corrected (0.6) | Skerjanec_1995:abstract |
| ka | `Q49` · kabs | 0.18 | min−1 | 0.003 | 1/s | 1/h | review_gapfill (0.7) | Adamiak-Giera_2021:review |
| lag time | `Q83` · tlag | 9.97 | min | 598.2 | s | h | review_gapfill (0.7) | Adamiak-Giera_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methyldopa
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adamiak-Giera_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Adamiak-Giera_2021's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C6_cl_magnitude failed (ratio None))

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Skerjanec_1995_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Skerjanec_1995:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Skerjanec_1995:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adamiak-Giera_2021:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Skerjanec_1995:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Skerjanec_1995:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Adamiak-Giera_2021:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 268 | ['Skerjanec_1995:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.1 L/h | ['Skerjanec_1995:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 33 L | ['Skerjanec_1995:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_modelica.zip" download>Methyldopa_Skerjanec1995_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_fmi.zip" download>Methyldopa_Skerjanec1995_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_matlab.zip" download>Methyldopa_Skerjanec1995_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_matlab_simbio.zip" download>Methyldopa_Skerjanec1995_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_sbml.zip" download>Methyldopa_Skerjanec1995_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_cellml.zip" download>Methyldopa_Skerjanec1995_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2112 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 598.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 4.467e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004714 | m3/kg |
| input | model | `ka` | 0.003 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Skerjanec A, Campbell NR, Robertson S, Tam YK. Pharmacokinetics and presystemic gut metabolism of methyldopa in healthy human subjects. Journal of clinical pharmacology 35(3):275–280 (1995). [doi:10.1002/j.1552-4604.1995.tb04058.x](https://doi.org/10.1002/j.1552-4604.1995.tb04058.x)

**This record:** Pharmacolibrary, model `Methyldopa_Skerjanec1995_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference>

```bibtex
@misc{pharmacolibrary_MethyldopaSkerjanec1995reference,
  title  = {{Pharmacolibrary model Methyldopa_Skerjanec1995_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference},
  note   = {Parameters from doi:10.1002/j.1552-4604.1995.tb04058.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 10.8 /h, lag 9.97 min, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference/Methyldopa_Skerjanec1995_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methyldopa_Skerjanec1995_reference_params.json` · controls `Methyldopa_Skerjanec1995_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyldopa%5D%20Methyldopa_Skerjanec1995_reference&body=Drug%3A%20methyldopa%0ARecord%3A%20Methyldopa_Skerjanec1995_reference%0APaper%3A%20Skerjanec_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 17:41 UTC</sub>
