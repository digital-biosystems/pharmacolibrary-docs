<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Erythromycin&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/&quot;},{&quot;label&quot;:&quot;Gaohua_2015 \u00b7 elf_g_ml&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_elf_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_elf_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_macrophage_tissue_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_macrophage_tissue_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_macrophage_tissue_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythromycin_Gaohua2015_plasma_g_ml&quot;,&quot;label&quot;:&quot;Gaohua_2015_plasma_g_ml&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Gaohua2015_plasma_g_ml.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythromycin_Hong2021_reference&quot;,&quot;label&quot;:&quot;Hong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_erythromycin/Erythromycin_Hong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Erythromycin — `Erythromycin_Gaohua2015_elf_g_ml`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="Erythromycin" model-id="Erythromycin_Gaohua2015_elf_g_ml" status="needs_review" stale="false" population="virtual population" measured-compound="Erythromycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Gaohua L, Wedagedera J, Small BG, Almond L, Romero K, Hermann D et al. Development of a Multicompartment Permeability-Limited Lung PBPK Model and Its Application in Predicting Pulmonary Pharmacokinetics of Antituberculosis Drugs. CPT: pharmacometrics & systems pharmacology 4(10):605–613 (2015).
  ·  DOI: [10.1002/psp4.12034](https://doi.org/10.1002/psp4.12034)

## Population and dosing

**Population:** virtual population · condition healthy · age group adult.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml.svg" alt="Erythromycin_Gaohua2015_elf_g_ml diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| average alveolar air volume | V | 5.6 | L |
| optimized CLpo | CL | 8.5 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hong_2021) cannot stand in for this paper's evidence. Extracted — erythromycin: V 5.6 L, CL 8.5 L/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| average alveolar air volume | `Q61` · V | 5.6 | L | 0.0056 | m3 | L | boundary (0.8) | Gaohua_2015:prose |
| optimized CLpo | `Q22` · CL | 8.5 | L/h | 2.361e-06 | m3/s | L/h | review_gapfill (0.7) | Hong_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Rifampicin' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row0:col5', 'Gaohua_2015_table_S2:row1:col5'])
- dropped unlinked row (NIL): 'Ethambutol' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row2:col5'])
- dropped unlinked row (NIL): 'Pyrazinamide' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row3:col5', 'Gaohua_2015_table_S2:row4:col5'])
- dropped unlinked row (NIL): 'Isoniazid' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row5:col5', 'Gaohua_2015_table_S2:row6:col5'])
- dropped unlinked row (NIL): 'Itraconazole' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row7:col5'])
- dropped unlinked row (NIL): 'Erythromycin' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row8:col5'])
- dropped unlinked row (NIL): 'Clarithromycin' — extend the ontology if this is a real PK parameter (source ['Gaohua_2015_table_S2:row10:col5', 'Gaohua_2015_table_S2:row11:col5', 'Gaohua_2015_table_S2:row12:col5', 'Gaohua_2015_table_S2:row13:col5', 'Gaohua_2015_table_S2:row15:col5'])
- table mostly unlinked (7/7 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q61 ('average alveolar air volume'=5.6) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Erythromycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'elf(g/ml)' subgroup of Gaohua_2015 (paper reports 4 populations: elf(g/ml), macrophage/tissue(g/ml), plasma(g/ml), value)
- gap-filled Q22 (CL) from Hong_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (disposition incomplete — volume from this paper; review-gap-filled from other paper(s): Hong_2021 — borrowed values do not complete its disposition core)

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- table Gaohua_2015_table_S2: unbound_uncertainty
- table Gaohua_2015_table_S2: units_need_context
- table Gaohua_2015_table_S2: unparsed_numeric_cell
- table Gaohua_2015_table_S3: unknown_column_role
- table Gaohua_2015_table_S3: missing_unit_binding
- table Gaohua_2015_table_S3: ragged_grid
- toxin: the located table(s) gave no kinetic value — 25 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hong_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.5 | ['Hong_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.5 L/h | ['Hong_2021:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.6 L | ['Gaohua_2015:prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_modelica.zip" download>Erythromycin_Gaohua2015_elf_g_ml_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_fmi.zip" download>Erythromycin_Gaohua2015_elf_g_ml_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_matlab.zip" download>Erythromycin_Gaohua2015_elf_g_ml_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_matlab_simbio.zip" download>Erythromycin_Gaohua2015_elf_g_ml_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_sbml.zip" download>Erythromycin_Gaohua2015_elf_g_ml_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_cellml.zip" download>Erythromycin_Gaohua2015_elf_g_ml_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.7339 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 2.361e-06 | m3/s |
| input | model | `VdPerKg` | 8e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Gaohua L, Wedagedera J, Small BG, Almond L, Romero K, Hermann D et al. Development of a Multicompartment Permeability-Limited Lung PBPK Model and Its Application in Predicting Pulmonary Pharmacokinetics of Antituberculosis Drugs. CPT: pharmacometrics & systems pharmacology 4(10):605–613 (2015). [doi:10.1002/psp4.12034](https://doi.org/10.1002/psp4.12034)

**This record:** Pharmacolibrary, model `Erythromycin_Gaohua2015_elf_g_ml`. <https://pharmacolibrary.github.io/#/drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml>

```bibtex
@misc{pharmacolibrary_ErythromycinGaohua2015elfgml,
  title  = {{Pharmacolibrary model Erythromycin_Gaohua2015_elf_g_ml}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml},
  note   = {Parameters from doi:10.1002/psp4.12034},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 1000 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 1000 mg parenteral (J01FA01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml/Erythromycin_Gaohua2015_elf_g_ml_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Erythromycin_Gaohua2015_elf_g_ml_params.json` · controls `Erythromycin_Gaohua2015_elf_g_ml_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berythromycin%5D%20Erythromycin_Gaohua2015_elf_g_ml&body=Drug%3A%20erythromycin%0ARecord%3A%20Erythromycin_Gaohua2015_elf_g_ml%0APaper%3A%20Gaohua_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_erythromycin/Erythromycin_Gaohua2015_elf_g_ml%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 14:15 UTC</sub>
