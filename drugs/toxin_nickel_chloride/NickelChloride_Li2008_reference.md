<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Nickel chloride&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_chloride/&quot;},{&quot;label&quot;:&quot;Li_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NickelChloride_Li2008_reference&quot;,&quot;label&quot;:&quot;Li_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nickel chloride — `NickelChloride_Li2008_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Cmax has no unit.

<div class="pk-model-meta" hidden drug="Nickel chloride" model-id="NickelChloride_Li2008_reference" status="needs_review" stale="false" population="rats" measured-compound="63Ni-NiCl2" parameterization="mechanistic" topology="1C"></div>

## Citation
Li Z, Wang H, Wu WS. [Pharmacokinetic parameter and residua of 63Ni-NiCl2 in rat]. Yao xue xue bao = Acta pharmaceutica Sinica 43(2):224–226 (2008).

## Population and dosing

**Population:** rats · condition healthy.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference.svg" alt="NickelChloride_Li2008_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 6.18 | h(-1) |
| T(1/2)alpha | t1/2α | 0.79 | h |
| T(1/2)beta | t1/2β | 40.68 | h |
| CL | CL | 0.42 | mL kg(-1) h(-1) |
| Tmax | tmax | 0.53 | h |
| Cmax | Cmax | 24 | min(-1) mL(-1) |
| Vd | V | 0.016 | L kg(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cmax has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is nickel chloride's own; they describe 63Ni-NiCl2. Extracted — 63Ni-NiCl2: kabs 6.18 h(-1), t1/2α 0.79 h, t1/2β 40.7 h, CL 0.42 mL kg(-1) h(-1), tmax 0.53 h, Cmax 24 min(-1) mL(-1), V 0.016 L kg(-1).

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 6.18 | h(-1) | 0.001717 | 1/s | 1/h | exact (1) | Li_2008:abstract |
| T(1/2)alpha | `Q59` · t1/2α | 0.79 | h | 2844 | s | h | llm_corrected (0.6) | Li_2008:abstract |
| T(1/2)beta | `Q60` · t1/2β | 40.68 | h | 1.464e+05 | s | h | llm_corrected (0.6) | Li_2008:abstract |
| CL | `Q22` · CL | 0.42 | mL kg(-1) h(-1) | 8.167e-09 | m3/s | ml/(h·kg) | exact (1) | Li_2008:abstract |
| Tmax | `Q56` · tmax | 0.53 | h | 1908 | s | h | exact (1) | Li_2008:abstract |
| Cmax | `Q32` · Cmax | 24 | min(-1) mL(-1) |  |  | 1/(min·ml) | exact (1) | Li_2008:abstract |
| Vd | `Q61` · V | 0.016 | L kg(-1) | 0.00112 | m3 | l/kg | exact (1) | Li_2008:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- unit_dimension_unknown: 'min(-1) mL(-1)' (Cmax)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q61 (Vd)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=63Ni-NiCl2
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for '63Ni-NiCl2' ('63Ni-NiCl2') — left in mass units
- molar mass: none found for '63Ni-NiCl2' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q32 — no SI value to build from)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Li_2008_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Li_2008:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Li_2008:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Li_2008:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Li_2008:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Li_2008:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2008:abstract'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | min(-1) mL(-1) | ['Li_2008:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.42 | ['Li_2008:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0294 L/h | ['Li_2008:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.12 L | ['Li_2008:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_modelica.zip" download>NickelChloride_Li2008_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_fmi.zip" download>NickelChloride_Li2008_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_matlab.zip" download>NickelChloride_Li2008_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_matlab_simbio.zip" download>NickelChloride_Li2008_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_sbml.zip" download>NickelChloride_Li2008_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_cellml.zip" download>NickelChloride_Li2008_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 8.167e-09 | m3/s |
| input | model | `VdPerKg` | 1.6e-05 | m3/kg |
| input | model | `ka` | 0.001717 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li Z, Wang H, Wu WS. [Pharmacokinetic parameter and residua of 63Ni-NiCl2 in rat]. Yao xue xue bao = Acta pharmaceutica Sinica 43(2):224–226 (2008).

**This record:** Pharmacolibrary, model `NickelChloride_Li2008_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference>

```bibtex
@misc{pharmacolibrary_NickelChlorideLi2008reference,
  title  = {{Pharmacolibrary model NickelChloride_Li2008_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 6.18 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference/NickelChloride_Li2008_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `NickelChloride_Li2008_reference_params.json` · controls `NickelChloride_Li2008_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnickel_chloride%5D%20NickelChloride_Li2008_reference&body=Drug%3A%20nickel_chloride%0ARecord%3A%20NickelChloride_Li2008_reference%0APaper%3A%20Li_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nickel_chloride/NickelChloride_Li2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 14:46 UTC</sub>
