<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Dopamine&quot;,&quot;href&quot;:&quot;drugs/toxin_dopamine/&quot;},{&quot;label&quot;:&quot;Dias_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dopamine_Dias2024_reference&quot;,&quot;label&quot;:&quot;Dias_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dopamine/Dopamine_Dias2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dopamine_Hopkins2016_reference&quot;,&quot;label&quot;:&quot;Hopkins_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dopamine/Dopamine_Hopkins2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dopamine_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dopamine/Dopamine_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dopamine_Zhu2021_reference&quot;,&quot;label&quot;:&quot;Zhu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dopamine/Dopamine_Zhu2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dopamine — `Dopamine_Dias2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Dopamine" model-id="Dopamine_Dias2024_reference" status="needs_review" stale="false" population="naive rats and schizophrenia phenotyped rats" measured-compound="Dopamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Dias BB, Carreño F, Helfer VE, Olivo LB, Staudt KJ, Paese K et al. Pharmacokinetic/pharmacodynamic modeling of cortical dopamine concentrations after quetiapine lipid core nanocapsules administration to schizophrenia phenotyped rats. CPT: pharmacometrics & systems pharmacology 13(4):638-648 (2024).
  ·  DOI: [10.1002/psp4.13107](https://doi.org/10.1002/psp4.13107)

## Population and dosing

**Population:** naive rats and schizophrenia phenotyped rats · condition drug treatment / disease model · n = 49.

**Dosed compound ≠ measured compound:** dosed Quetiapine, measured Dopamine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference.svg" alt="Dopamine_Dias2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Pool0 (ng/mL) | Ct | 3.19 | ng/mL |
| KNP (h−1) | kcomp | 3.79 | h−1 |
| CL (L/h) Clozapine | CL | 37.9 | L/h |
| volume of distribution | V | 1652.0 | L |
| Ka (h -1 ) Clozapine | kabs | 1.37 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hopkins_2016, Johnson_2016) cannot stand in for this paper's evidence. Extracted — dopamine: Ct 3.19 ng/mL, kcomp 3.79 h−1, CL 37.9 L/h, V 1.65e+03 L, kabs 1.37 h -1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Pool0 (ng/mL) | `Q75` · Ct | 3.19 | ng/mL | 3.19e-06 | kg/m3 | ng/ml | llm (0.6) | psp413107-tbl-0001:row2:col1, psp413107-tbl-0001:row2:col2, psp413107-tbl-0001:row2:col3, psp413107-tbl-0001:row2:col4 |
| KNP (h−1) | `Q48` · kcomp | 3.79 | h−1 | 0.001053 | 1/s | 1/h | llm (0.6) | psp413107-tbl-0001:row8:col3 |
| CL (L/h) Clozapine | `Q22` · CL | 37.9 | L/h | 1.053e-05 | m3/s | L/h | review_gapfill (0.7) | Johnson_2016:review |
| volume of distribution | `Q61` · V | 1652.0 | L | 1.652 | m3 | L | review_gapfill (0.7) | Hopkins_2016:review |
| Ka (h -1 ) Clozapine | `Q49` · kabs | 1.37 | h -1 | 0.0003806 | 1/s | 1/h | review_gapfill (0.7) | Johnson_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped PD-category row 'Kin (ng/mL * h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413107-tbl-0001:row3:col1', 'psp413107-tbl-0001:row3:col2', 'psp413107-tbl-0001:row3:col3', 'psp413107-tbl-0001:row3:col4'])
- dropped unlinked row (NIL): 'DA0 (ng/mL)' — extend the ontology if this is a real PK parameter (source ['psp413107-tbl-0001:row4:col1', 'psp413107-tbl-0001:row4:col3'])
- dropped unlinked row (NIL): 'EQTP' — extend the ontology if this is a real PK parameter (source ['psp413107-tbl-0001:row5:col1', 'psp413107-tbl-0001:row5:col2', 'psp413107-tbl-0001:row5:col3'])
- dropped PD-category row 'Keo (h−1)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413107-tbl-0001:row6:col1', 'psp413107-tbl-0001:row6:col2', 'psp413107-tbl-0001:row6:col3'])
- dropped PD-category row 'Kmod (h−1)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413107-tbl-0001:row7:col1', 'psp413107-tbl-0001:row7:col2', 'psp413107-tbl-0001:row7:col3', 'psp413107-tbl-0001:row7:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dopamine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q22 (CL) from Johnson_2016's review values (primary lacked it)
- gap-filled Q61 (V) from Hopkins_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Johnson_2016's review values (primary lacked it)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — no disposition parameter from this paper; review-gap-filled from other paper(s): Hopkins_2016, Johnson_2016 — borrowed values do not complete its disposition core)

**Extraction notes:**
- table psp413107-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Johnson_2016:review'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['psp413107-tbl-0001:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Johnson_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hopkins_2016:review'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['psp413107-tbl-0001:row2:col1', 'psp413107-tbl-0001:row2:col2', 'psp413107-tbl-0001:row2:col3', 'psp413107-tbl-0001:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 37.9 | ['Johnson_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 37.9 L/h | ['Johnson_2016:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.65e+03 L | ['Hopkins_2016:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_modelica.zip" download>Dopamine_Dias2024_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_fmi.zip" download>Dopamine_Dias2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_matlab.zip" download>Dopamine_Dias2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_matlab_simbio.zip" download>Dopamine_Dias2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_sbml.zip" download>Dopamine_Dias2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_cellml.zip" download>Dopamine_Dias2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1532 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.053e-05 | m3/s |
| input | model | `VdPerKg` | 0.0236 | m3/kg |
| input | model | `ka` | 0.0003806 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Dias BB, Carreño F, Helfer VE, Olivo LB, Staudt KJ, Paese K et al. Pharmacokinetic/pharmacodynamic modeling of cortical dopamine concentrations after quetiapine lipid core nanocapsules administration to schizophrenia phenotyped rats. CPT: pharmacometrics & systems pharmacology 13(4):638-648 (2024). [doi:10.1002/psp4.13107](https://doi.org/10.1002/psp4.13107)

**This record:** Pharmacolibrary, model `Dopamine_Dias2024_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_dopamine/Dopamine_Dias2024_reference>

```bibtex
@misc{pharmacolibrary_DopamineDias2024reference,
  title  = {{Pharmacolibrary model Dopamine_Dias2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_dopamine/Dopamine_Dias2024_reference},
  note   = {Parameters from doi:10.1002/psp4.13107},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.37 /h, F 0.9). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_dopamine/Dopamine_Dias2024_reference/Dopamine_Dias2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dopamine_Dias2024_reference_params.json` · controls `Dopamine_Dias2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdopamine%5D%20Dopamine_Dias2024_reference&body=Drug%3A%20dopamine%0ARecord%3A%20Dopamine_Dias2024_reference%0APaper%3A%20Dias_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dopamine/Dopamine_Dias2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 03:50 UTC</sub>
