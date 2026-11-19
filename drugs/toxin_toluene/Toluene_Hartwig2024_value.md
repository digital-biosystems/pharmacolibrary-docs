<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Toluene&quot;,&quot;href&quot;:&quot;drugs/toxin_toluene/&quot;},{&quot;label&quot;:&quot;Hartwig_2024 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Toluene_Hartwig2024_test_system&quot;,&quot;label&quot;:&quot;Hartwig_2024_test_system&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_toluene/Toluene_Hartwig2024_test_system.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Toluene_Hartwig2024_value&quot;,&quot;label&quot;:&quot;Hartwig_2024_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_toluene/Toluene_Hartwig2024_value.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Toluene — `Toluene_Hartwig2024_value`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span>

> Kel has no unit.

<div class="pk-model-meta" hidden drug="Toluene" model-id="Toluene_Hartwig2024_value" status="needs_review" stale="false" population="humans and rats" measured-compound="Toluene" parameterization="mechanistic" topology="retention"></div>

## Citation
Hartwig A. Toluene: MAK Value Documentation, addendum - Translation of the German version from 2021. The MAK collection for occupational health and safety 9(4):Doc090 (2024).
  ·  DOI: [10.34865/mb10888e9_4ad](https://doi.org/10.34865/mb10888e9_4ad)

## Population and dosing

**Population:** humans and rats · condition occupational exposure · age group adult.

**Dosing:** 1540, 15050, 21840, 43750, 87500, 175000, 350000 mg, oral, multiple, every 24 h.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.30).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life of the alpha phase | t1/2α | 3 | minutes |
| that of the beta phase | kel | 40 | minutes |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kel), so that value has no SI equivalent. Extracted — toluene: t1/2α 3 minutes, kel 40 minutes.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life of the alpha phase | `Q59` · t1/2α | 3 | minutes | 180 | s | h | half_life_rule (0.95) | Hartwig_2024:other_prose |
| that of the beta phase | `Q47` · kel | 40 | minutes |  |  | minutes | boundary (0.8) | Hartwig_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Molar mass | Q374 | exact |

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / half-life of the alpha phase (Q59)

**Interpretation flags:**
- dropped unlinked row (NIL): 'MAK value (1993)' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row0:col1'])
- dropped unlinked row (NIL): 'BAT value (2017)' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row7:col1'])
- dropped unlinked row (NIL): 'BAT value (2009)' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row8:col1'])
- dropped unlinked row (NIL): 'Density at 20 °C' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row18:col1'])
- dropped unlinked row (NIL): 'Solubility at 25 °C' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row21:col1'])
- dropped unlinked row (NIL): '1 ml/m³ (ppm) ≙ 3.82 mg/m³' — extend the ontology if this is a real PK parameter (source ['Hartwig_2024_table_1:row22:col1'])
- table mostly unlinked (6/7 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q59 ('half-life of the alpha phase'=3) from results prose — parameter table was unreadable
- salvaged Q47 ('that of the beta phase'=40) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Toluene
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'value' subgroup of Hartwig_2024 (paper reports 2 populations: test system, value)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from)

**Extraction notes:**
- table Tab4: missing_label
- table Tab4: ragged_grid
- table Tab4: unparsed_numeric_cell
- table Hartwig_2024_table_1: missing_label
- table Hartwig_2024_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (7 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q47 | fail | 1 / [time] | minutes | ['Hartwig_2024:other_prose'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_modelica.zip" download>Toluene_Hartwig2024_value_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_fmi.zip" download>Toluene_Hartwig2024_value_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_matlab.zip" download>Toluene_Hartwig2024_value_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_sbml.zip" download>Toluene_Hartwig2024_value_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_cellml.zip" download>Toluene_Hartwig2024_value_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.09214 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00154 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 180 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hartwig A. Toluene: MAK Value Documentation, addendum - Translation of the German version from 2021. The MAK collection for occupational health and safety 9(4):Doc090 (2024). [doi:10.34865/mb10888e9_4ad](https://doi.org/10.34865/mb10888e9_4ad)

**This record:** Pharmacolibrary, model `Toluene_Hartwig2024_value`. <https://pharmacolibrary.github.io/#/drugs/toxin_toluene/Toluene_Hartwig2024_value>

```bibtex
@misc{pharmacolibrary_TolueneHartwig2024value,
  title  = {{Pharmacolibrary model Toluene_Hartwig2024_value}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_toluene/Toluene_Hartwig2024_value},
  note   = {Parameters from doi:10.34865/mb10888e9_4ad},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_toluene/Toluene_Hartwig2024_value/Toluene_Hartwig2024_value_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Toluene_Hartwig2024_value_params.json` · controls `Toluene_Hartwig2024_value_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btoluene%5D%20Toluene_Hartwig2024_value&body=Drug%3A%20toluene%0ARecord%3A%20Toluene_Hartwig2024_value%0APaper%3A%20Hartwig_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_toluene/Toluene_Hartwig2024_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 13:06 UTC</sub>
