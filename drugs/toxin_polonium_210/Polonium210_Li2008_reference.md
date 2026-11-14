<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Polonium-210&quot;,&quot;href&quot;:&quot;drugs/toxin_polonium_210/&quot;},{&quot;label&quot;:&quot;Li_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Polonium210_Li2008_reference&quot;,&quot;label&quot;:&quot;Li_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_polonium_210/Polonium210_Li2008_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Polonium-210 — `Polonium210_Li2008_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="Polonium-210" model-id="Polonium210_Li2008_reference" status="curated_candidate" stale="false" population="members of the public" measured-compound="Polonium-210" parameterization="mechanistic" topology="retention"></div>

## Citation
Li WB, Gerstmann U, Giussani A, Oeh U, Paretzke HG. Internal dose assessment of 210Po using biokinetic modeling and urinary excretion measurement. Radiation and environmental biophysics 47(1):101–110 (2008).
  ·  DOI: [10.1007/s00411-007-0133-0](https://doi.org/10.1007/s00411-007-0133-0)

## Population and dosing

**Population:** members of the public · condition environmental exposure · age group adult.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Measured daily excretion (mBq d−1) | Ae | 10.8 | mBq d−1 |
| half-life | t1/2z | 50 | days |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Ae ), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Measured daily excretion (mBq d−1) | `Q91` · Ae | 10.8 | mBq d−1 |  |  | (m·bq)/d | llm_corrected (0.6) | Li_2008_table_1:row1:col2, Li_2008_table_1:row2:col2, Li_2008_table_1:row3:col2, Li_2008_table_1:row4:col2, Li_2008_table_1:row5:col2, Li_2008_table_1:row6:col2, Li_2008_table_1:row7:col2, Li_2008_table_1:row8:col2, Li_2008_table_1:row9:col2 |
| half-life | `Q57` · t1/2z | 50 | days | 4.32e+06 | s | h | half_life_rule (0.95) | Li_2008:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / half-life (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): '(μg)' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col1', 'Tab4:row2:col2', 'Tab4:row2:col3', 'Tab4:row2:col4', 'Tab4:row2:col5', 'Tab4:row2:col6', 'Tab4:row2:col7', 'Tab4:row2:col8'])
- dropped unlinked row (NIL): '(MBq)' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5'])
- dropped unlinked row (NIL): 'Bone surface (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col6', 'Tab4:row4:col7', 'Tab4:row4:col8'])
- dropped unlinked row (NIL): 'Stomach (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row5:col3', 'Tab4:row5:col4', 'Tab4:row5:col5', 'Tab4:row5:col6', 'Tab4:row5:col7', 'Tab4:row5:col8'])
- dropped unlinked row (NIL): 'Small intestine (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col1', 'Tab4:row6:col2', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col6', 'Tab4:row6:col7', 'Tab4:row6:col8'])
- dropped unlinked row (NIL): 'Colon (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col1', 'Tab4:row7:col2', 'Tab4:row7:col3', 'Tab4:row7:col4', 'Tab4:row7:col5', 'Tab4:row7:col6', 'Tab4:row7:col7', 'Tab4:row7:col8'])
- dropped unlinked row (NIL): 'Kidneys (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1', 'Tab4:row8:col2', 'Tab4:row8:col3', 'Tab4:row8:col4', 'Tab4:row8:col5', 'Tab4:row8:col6', 'Tab4:row8:col7', 'Tab4:row8:col8'])
- dropped unlinked row (NIL): 'Liver (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col1', 'Tab4:row9:col2', 'Tab4:row9:col3', 'Tab4:row9:col4', 'Tab4:row9:col5', 'Tab4:row9:col6', 'Tab4:row9:col7', 'Tab4:row9:col8'])
- dropped unlinked row (NIL): 'Red bone marrow (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col1', 'Tab4:row10:col2', 'Tab4:row10:col3', 'Tab4:row10:col4', 'Tab4:row10:col5', 'Tab4:row10:col6', 'Tab4:row10:col7', 'Tab4:row10:col8'])
- dropped unlinked row (NIL): 'Spleen (Gy)' — extend the ontology if this is a real PK parameter (source ['Tab4:row11:col1', 'Tab4:row11:col2', 'Tab4:row11:col3', 'Tab4:row11:col4', 'Tab4:row11:col5', 'Tab4:row11:col6', 'Tab4:row11:col7', 'Tab4:row11:col8'])
- dropped unlinked row (NIL): 'Volume of 24-h-urine sample (l)' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_1:row1:col1', 'Li_2008_table_1:row2:col1', 'Li_2008_table_1:row3:col1', 'Li_2008_table_1:row4:col1', 'Li_2008_table_1:row5:col1', 'Li_2008_table_1:row6:col1', 'Li_2008_table_1:row7:col1'])
- unit_dimension_unknown: 'mBq d−1' (Ae )
- unit_dimension_unknown: 'mBq' (Ae )
- dropped duplicate Q91 ('Estimated amount (mBq) / Ingestion', value '2.3') — already have one for this compound
- dropped unlinked row (NIL): 'Estimated amount (mBq) / Inhalation' — extend the ontology if this is a real PK parameter (source ['Li_2008_table_1:row1:col8', 'Li_2008_table_1:row2:col8', 'Li_2008_table_1:row3:col8', 'Li_2008_table_1:row4:col8', 'Li_2008_table_1:row5:col8', 'Li_2008_table_1:row6:col8', 'Li_2008_table_1:row7:col8'])
- dropped value-less row: 'aLethal red bone marrow dose 5 Gy using ICRP model with f1 = 0.5'
- dropped value-less row: 'bLethal red bone marrow dose 5 Gy using L&E model with f1 = 0.5'
- dropped value-less row: 'c0.4 GBq ingestion using ICRP model with f1 = 0.5'
- dropped value-less row: 'd0.4 GBq ingestion using L&E model with f1 = 0.5'
- dropped value-less row: 'eLethal red bone marrow dose 5 Gy using ICRP model with f1 = 0.1'
- dropped value-less row: 'fLethal red bone marrow dose 5 Gy using L&E model with f1 = 0.1'
- dropped value-less row: 'g2 GBq ingestion using ICRP model with f1 = 0.1'
- dropped value-less row: 'h2 GBq ingestion using L&E model with f1 = 0.1'
- table mostly unlinked (12/14 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('half-life'=50) from results prose — parameter table was unreadable
- implicit units: 'Measured daily excretion (mBq d−1)' — the LLM proposed 'mBq d-1', whose dimension does not fit Q91; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Polonium-210
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Polonium-210' ('Polonium-210') — left in mass units
- molar mass: none found for 'Polonium-210' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab4: ambiguous_numeric_format
- table Li_2008_table_1: unparsed_numeric_cell
- transposed table Li_2008_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (30 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | obtained | source |
|---|---|---|---|
| C0_has_structural_params | pass | 2 |  |
| C0b_disposition_core | pass |  |  |
| C0c_disposition_complete | pass |  |  |
| C5_dimension_Q91 | pass | mBq d−1 | ['Li_2008_table_1:row1:col2', 'Li_2008_table_1:row2:col2', 'Li_2008_table_1:row3:col2', 'Li_2008_table_1:row4:col2', 'Li_2008_table_1:row5:col2', 'Li_2008_table_1:row6:col2', 'Li_2008_table_1:row7:col2', 'Li_2008_table_1:row8:col2', 'Li_2008_table_1:row9:col2'] |
| C8_topology | pass |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Polonium-210) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | pass | 1200 | 1200 | 1 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_modelica.zip" download>Polonium210_Li2008_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_fmi.zip" download>Polonium210_Li2008_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_matlab.zip" download>Polonium210_Li2008_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_sbml.zip" download>Polonium210_Li2008_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_cellml.zip" download>Polonium210_Li2008_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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
| input | model | `Tb[1]` | 4.32e+06 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li WB, Gerstmann U, Giussani A, Oeh U, Paretzke HG. Internal dose assessment of 210Po using biokinetic modeling and urinary excretion measurement. Radiation and environmental biophysics 47(1):101–110 (2008). [doi:10.1007/s00411-007-0133-0](https://doi.org/10.1007/s00411-007-0133-0)

**This record:** Pharmacolibrary, model `Polonium210_Li2008_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_polonium_210/Polonium210_Li2008_reference>

```bibtex
@misc{pharmacolibrary_Polonium210Li2008reference,
  title  = {{Pharmacolibrary model Polonium210_Li2008_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_polonium_210/Polonium210_Li2008_reference},
  note   = {Parameters from doi:10.1007/s00411-007-0133-0},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_polonium_210/Polonium210_Li2008_reference/Polonium210_Li2008_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Polonium210_Li2008_reference_params.json` · controls `Polonium210_Li2008_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolonium_210%5D%20Polonium210_Li2008_reference&body=Drug%3A%20polonium_210%0ARecord%3A%20Polonium210_Li2008_reference%0APaper%3A%20Li_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_polonium_210/Polonium210_Li2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:33 UTC</sub>
