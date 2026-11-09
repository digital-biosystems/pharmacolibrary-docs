<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium arsenate&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenate/&quot;},{&quot;label&quot;:&quot;Liu_2006 \u00b7 naaso_4&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumArsenate_Diacomanolis2013_reference&quot;,&quot;label&quot;:&quot;Diacomanolis_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenate/SodiumArsenate_Diacomanolis2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumArsenate_Diacomanolis2014_reference&quot;,&quot;label&quot;:&quot;Diacomanolis_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenate/SodiumArsenate_Diacomanolis2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumArsenate_Liu2006_naaso_4&quot;,&quot;label&quot;:&quot;Liu_2006_naaso_4&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;SodiumArsenate_Liu2006_reference&quot;,&quot;label&quot;:&quot;Liu_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium arsenate — `SodiumArsenate_Liu2006_naaso_4`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

> The model does not reproduce the paper's terminal half-life.

<div class="pk-model-meta" hidden drug="Sodium arsenate" model-id="SodiumArsenate_Liu2006_naaso_4" status="needs_review" stale="false" population="Zebrafish (Danio rerio)" measured-compound="Sodium arsenate" parameterization="mechanistic" topology="retention"></div>

## Citation
Liu FJ, Cobb GP, Anderson TA, Cheng QQ, Theodorakis CW. Uptake, accumulation and depuration of sodium perchlorate and sodium arsenate in zebrafish (Danio rerio). Chemosphere 65(10):1679–1689 (2006).
  ·  DOI: [10.1016/j.chemosphere.2006.05.030](https://doi.org/10.1016/j.chemosphere.2006.05.030)

## Population and dosing

**Population:** Zebrafish (Danio rerio) · condition Chronic water exposure.

**Dosing:** 1, 10, 100 mg l À1, other, multiple.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2 (h) | t1/2z | 69.94 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — sodium arsenate: t1/2z 69.9 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2 (h) | `Q57` · t1/2z | 69.94 | h | 2.518e+05 | s | h | half_life_rule (0.95) | Liu_2006_table_4:row1:col5, Liu_2006_table_4:row2:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t 1/2 (h) (Q57)

**Interpretation flags:**
- column 'naaso 4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Concentration (mg l À1 )' — extend the ontology if this is a real PK parameter (source ['Liu_2006_table_4:row1:col1', 'Liu_2006_table_4:row2:col1'])
- dropped unlinked row (NIL): 'Models fitted' — extend the ontology if this is a real PK parameter (source ['Liu_2006_table_4:row1:col2', 'Liu_2006_table_4:row2:col2'])
- dropped unlinked row (NIL): 'R 2' — extend the ontology if this is a real PK parameter (source ['Liu_2006_table_4:row1:col3', 'Liu_2006_table_4:row2:col3'])
- dropped unlinked row (NIL): 'Bias correction factors' — extend the ontology if this is a real PK parameter (source ['Liu_2006_table_4:row1:col4', 'Liu_2006_table_4:row2:col4'])
- dropped PD-category row 's (h)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Liu_2006_table_4:row1:col6', 'Liu_2006_table_4:row2:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Sodium arsenate
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'naaso 4' subgroup of Liu_2006 (paper reports 1 populations: naaso 4)
- molar mass: none of 1 PubChem candidate(s) is 'Sodium arsenate' (LLM) — left in mass units
- molar mass: none found for 'Sodium arsenate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3, 4
- table Liu_2006_table_3: missing_label
- table Liu_2006_table_3: unknown_column_role
- table Liu_2006_table_3: ragged_grid
- table Liu_2006_table_3: unparsed_numeric_cell
- transposed table Liu_2006_table_4: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Liu_2006_table_4:row1:col5', 'Liu_2006_table_4:row2:col5'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Sodium arsenate) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  | 69.93 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 2.54 | 69.93 | 27.53 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 25.7 | 69.93 | 2.721 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_modelica.zip" download>SodiumArsenate_Liu2006_naaso_4_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_fmi.zip" download>SodiumArsenate_Liu2006_naaso_4_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_matlab.zip" download>SodiumArsenate_Liu2006_naaso_4_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_sbml.zip" download>SodiumArsenate_Liu2006_naaso_4_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_cellml.zip" download>SodiumArsenate_Liu2006_naaso_4_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.518e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Liu FJ, Cobb GP, Anderson TA, Cheng QQ, Theodorakis CW. Uptake, accumulation and depuration of sodium perchlorate and sodium arsenate in zebrafish (Danio rerio). Chemosphere 65(10):1679–1689 (2006). [doi:10.1016/j.chemosphere.2006.05.030](https://doi.org/10.1016/j.chemosphere.2006.05.030)

**This record:** Pharmacolibrary, model `SodiumArsenate_Liu2006_naaso_4`. <https://pharmacolibrary.github.io/#/drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4>

```bibtex
@misc{pharmacolibrary_SodiumArsenateLiu2006naaso4,
  title  = {{Pharmacolibrary model SodiumArsenate_Liu2006_naaso_4}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4},
  note   = {Parameters from doi:10.1016/j.chemosphere.2006.05.030},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4/SodiumArsenate_Liu2006_naaso_4_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `SodiumArsenate_Liu2006_naaso_4_params.json` · controls `SodiumArsenate_Liu2006_naaso_4_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_arsenate%5D%20SodiumArsenate_Liu2006_naaso_4&body=Drug%3A%20sodium_arsenate%0ARecord%3A%20SodiumArsenate_Liu2006_naaso_4%0APaper%3A%20Liu_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_arsenate/SodiumArsenate_Liu2006_naaso_4%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-08 23:23 UTC</sub>
