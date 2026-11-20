<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Iron&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/&quot;},{&quot;label&quot;:&quot;Fan_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iron_Borella2022_reference&quot;,&quot;label&quot;:&quot;Borella_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Borella2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Zhang2022_reference&quot;,&quot;label&quot;:&quot;Zhang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Zhang2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iron_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iron/Iron_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Iron — `Iron_Fan2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">mouse</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Iron" model-id="Iron_Fan2025_reference" status="needs_review" stale="false" population="mice, rats, and humans (extrapolated)" measured-compound="Iron (total iron or 59Fe)" parameterization="mechanistic" topology="1C"></div>

## Citation
Fan X, Cao K, Wong RSM, Yan X. A whole-body mechanistic physiologically-based pharmacokinetic modeling of intravenous iron. Drug delivery and translational research 15(4):1109–1120 (2025).
  ·  DOI: [10.1007/s13346-024-01675-x](https://doi.org/10.1007/s13346-024-01675-x)

## Population and dosing

**Population:** mice, rats, and humans (extrapolated) · condition healthy | iron deficiency anemia | iron loaded · age group adult.

**Dosing:** 30, 100, 500, 800, 1000 mixed (mg, mg/kg), iv, single.

**Dosed compound ≠ measured compound:** dosed Iron (as 59Fe or Ferric carboxymaltose), measured Iron (total iron or 59Fe).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.95).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference.svg" alt="Iron_Fan2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Spleen | Q | 23.93 | L/h | 0.046 |
| CL | CL | 0.477 | L/h |  |
| Vd | V | 3.62 | L |  |
| tR | tlag | 27.5 | min |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Spleen | `Q30` · Q | 23.93 | L/h | 6.647e-06 | m3/s | L/h | 0.046 | llm (0.6) | Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4 |
| CL | `Q22` · CL | 0.477 | L/h | 1.325e-07 | m3/s | L/h |  | review_gapfill (0.7) | Zhang_2022:review |
| Vd | `Q61` · V | 3.62 | L | 0.00362 | m3 | L |  | review_gapfill (0.7) | Zhang_2022:review |
| tR | `Q83` · tlag | 27.5 | min | 1650 | s | h |  | review_gapfill (0.7) | Wang_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameters(unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'])
- dropped unlinked row (NIL): 'Brain' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'])
- dropped unlinked row (NIL): 'Bone' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'])
- dropped unlinked row (NIL): 'Fat' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'])
- dropped unlinked row (NIL): 'Gut' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'])
- dropped unlinked row (NIL): 'Heart' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'])
- dropped unlinked row (NIL): 'Kidney' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'])
- dropped unlinked row (NIL): 'Lung' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'])
- dropped unlinked row (NIL): 'Muscle' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'])
- dropped unlinked row (NIL): 'Red blood cells' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4'])
- dropped unlinked row (NIL): 'TRBC (h)' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3'])
- dropped unlinked row (NIL): 'Skin' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'])
- dropped unlinked row (NIL): 'Remainders' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'])
- table mostly unlinked (14/15 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: 'Spleen' → L/h (from the popPK convention: 'The parameter is described as an intercompartmental clearance. The text specifies that the cardiac output is 0.72 L/h fo')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Iron (total iron or 59Fe)
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Iron (total iron or 59Fe)' ('Iron (total iron or 59Fe)') — left in mass units
- molar mass: none found for 'Iron (total iron or 59Fe)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Zhang_2022's review values (primary lacked it)
- gap-filled Q61 (V) from Zhang_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Wang_2026's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — no disposition parameter from this paper; review-gap-filled from other paper(s): Wang_2026, Zhang_2022 — borrowed values do not complete its disposition core)

**Extraction notes:**
- table Tab2: ragged_grid
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zhang_2022:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhang_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wang_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.477 | ['Zhang_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.477 L/h | ['Zhang_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.62 L | ['Zhang_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_modelica.zip" download>Iron_Fan2025_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_fmi.zip" download>Iron_Fan2025_reference_fmi.zip</a> <span class="pk-size">(4.0 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_matlab.zip" download>Iron_Fan2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_matlab_simbio.zip" download>Iron_Fan2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_sbml.zip" download>Iron_Fan2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_cellml.zip" download>Iron_Fan2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.325e-07 | m3/s |
| input | model | `VdPerKg` | 5.171e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fan X, Cao K, Wong RSM, Yan X. A whole-body mechanistic physiologically-based pharmacokinetic modeling of intravenous iron. Drug delivery and translational research 15(4):1109–1120 (2025). [doi:10.1007/s13346-024-01675-x](https://doi.org/10.1007/s13346-024-01675-x)

**This record:** Pharmacolibrary, model `Iron_Fan2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_iron/Iron_Fan2025_reference>

```bibtex
@misc{pharmacolibrary_IronFan2025reference,
  title  = {{Pharmacolibrary model Iron_Fan2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_iron/Iron_Fan2025_reference},
  note   = {Parameters from doi:10.1007/s13346-024-01675-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_iron/Iron_Fan2025_reference/Iron_Fan2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Iron_Fan2025_reference_params.json` · controls `Iron_Fan2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biron%5D%20Iron_Fan2025_reference&body=Drug%3A%20iron%0ARecord%3A%20Iron_Fan2025_reference%0APaper%3A%20Fan_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_iron/Iron_Fan2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 22:26 UTC</sub>
