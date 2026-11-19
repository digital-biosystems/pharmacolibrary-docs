<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Meclizine&quot;,&quot;href&quot;:&quot;drugs/toxin_meclizine/&quot;},{&quot;label&quot;:&quot;Kitoh_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meclizine_Kitoh2020_reference&quot;,&quot;label&quot;:&quot;Kitoh_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_meclizine/Meclizine_Kitoh2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Meclizine — `Meclizine_Kitoh2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00013, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 1.7, model 0.0862) (+1 more).

<div class="pk-model-meta" hidden drug="Meclizine" model-id="Meclizine_Kitoh2020_reference" status="needs_review" stale="false" population="children with achondroplasia" measured-compound="Meclizine" parameterization="mechanistic" topology="retention"></div>

## Citation
Kitoh H, Matsushita M, Mishima K, Nagata T, Kamiya Y, Ueda K et al. Pharmacokinetics and safety after once and twice a day doses of meclizine hydrochloride administered to children with achondroplasia. PloS one 15(4):e0229639 (2020).
  ·  DOI: [10.1371/journal.pone.0229639](https://doi.org/10.1371/journal.pone.0229639)

## Population and dosing

**Population:** children with achondroplasia · condition achondroplasia · age group child · n = 12.

**Dosing:** 25 mg, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Plasma concentration (ng/mL) Time post-dosing 4 h | Ct | 66.2 | ng/mL |
| Cmax (ng/mL) | Cmax | 130 | ng/mL |
| Tmax (h) | tmax | 1.7 | h |
| AUC0-24 h a) (ng.h/mL) | AUC | 671 | ng.h/mL |
| t1/2 b) (h) | t1/2z | 8.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00013, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 1.7, model 0.0862) (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — meclizine: Ct 66.2 ng/mL, Cmax 130 ng/mL, tmax 1.7 h, AUC 671 ng.h/mL, t1/2z 8.5 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Plasma concentration (ng/mL) Time post-dosing 4 h | `Q75` · Ct | 66.2 | ng/mL | 6.62e-05 | kg/m3 | ng/ml | llm (0.6) | Kitoh_2020_table_2:row0:col5, Kitoh_2020_table_2:row1:col5, Kitoh_2020_table_2:row2:col5, Kitoh_2020_table_2:row3:col5, Kitoh_2020_table_2:row4:col5, Kitoh_2020_table_2:row5:col5, Kitoh_2020_table_2:row6:col5, Kitoh_2020_table_2:row7:col5 |
| Cmax (ng/mL) | `Q32` · Cmax | 130 | ng/mL | 0.00013 | kg/m3 | ng/ml | exact (1) | Kitoh_2020_table_2:row0:col10, Kitoh_2020_table_2:row1:col10, Kitoh_2020_table_2:row2:col10, Kitoh_2020_table_2:row3:col10, Kitoh_2020_table_2:row4:col10, Kitoh_2020_table_2:row5:col10, Kitoh_2020_table_2:row6:col10, Kitoh_2020_table_2:row7:col10 |
| Tmax (h) | `Q56` · tmax | 1.7 | h | 6120 | s | h | exact (1) | Kitoh_2020_table_2:row0:col11, Kitoh_2020_table_2:row1:col11, Kitoh_2020_table_2:row2:col11, Kitoh_2020_table_2:row3:col11, Kitoh_2020_table_2:row4:col11, Kitoh_2020_table_2:row5:col11, Kitoh_2020_table_2:row6:col11, Kitoh_2020_table_2:row7:col11 |
| AUC0-24 h a) (ng.h/mL) | `Q88` · AUC | 671 | ng.h/mL | 2.416 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Kitoh_2020_table_2:row0:col12, Kitoh_2020_table_2:row1:col12, Kitoh_2020_table_2:row2:col12, Kitoh_2020_table_2:row3:col12, Kitoh_2020_table_2:row4:col12, Kitoh_2020_table_2:row5:col12, Kitoh_2020_table_2:row6:col12, Kitoh_2020_table_2:row7:col12 |
| t1/2 b) (h) | `Q57` · t1/2z | 8.5 | h | 3.06e+04 | s | h | llm_confirmed (0.6) | Kitoh_2020_table_2:row0:col13, Kitoh_2020_table_2:row1:col13, Kitoh_2020_table_2:row2:col13, Kitoh_2020_table_2:row3:col13, Kitoh_2020_table_2:row4:col13, Kitoh_2020_table_2:row5:col13, Kitoh_2020_table_2:row6:col13, Kitoh_2020_table_2:row7:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 b) (h) (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Plasma concentration (ng/mL) Time post-dosing 1 h' — extend the ontology if this is a real PK parameter (source ['Kitoh_2020_table_2:row0:col2', 'Kitoh_2020_table_2:row1:col2', 'Kitoh_2020_table_2:row2:col2', 'Kitoh_2020_table_2:row3:col2', 'Kitoh_2020_table_2:row4:col2', 'Kitoh_2020_table_2:row5:col2', 'Kitoh_2020_table_2:row6:col2', 'Kitoh_2020_table_2:row7:col2'])
- dropped duplicate Q75 ('Plasma concentration (ng/mL) Time post-dosing 8 h', value '17.5') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma concentration (ng/mL) Time post-dosing 10 h' — extend the ontology if this is a real PK parameter (source ['Kitoh_2020_table_2:row0:col7', 'Kitoh_2020_table_2:row1:col7', 'Kitoh_2020_table_2:row2:col7', 'Kitoh_2020_table_2:row3:col7', 'Kitoh_2020_table_2:row4:col7', 'Kitoh_2020_table_2:row5:col7', 'Kitoh_2020_table_2:row6:col7', 'Kitoh_2020_table_2:row7:col7'])
- dropped duplicate Q75 ('Plasma concentration (ng/mL) Time post-dosing 24 h', value '4.13') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma concentration (ng/mL) Time post-dosing 7 d' — extend the ontology if this is a real PK parameter (source ['Kitoh_2020_table_2:row0:col9', 'Kitoh_2020_table_2:row1:col9', 'Kitoh_2020_table_2:row2:col9', 'Kitoh_2020_table_2:row6:col9', 'Kitoh_2020_table_2:row7:col9'])
- dropped duplicate Q75 ('Plasma concentration (ng/mL) Time post-dosing 2 h', value '115') — already have one for this compound
- dropped unlinked row (NIL): 'Plasma concentration (ng/mL) Time post-dosing 3 h' — extend the ontology if this is a real PK parameter (source ['Kitoh_2020_table_2:row1:col4', 'Kitoh_2020_table_2:row2:col4', 'Kitoh_2020_table_2:row3:col4', 'Kitoh_2020_table_2:row4:col4', 'Kitoh_2020_table_2:row5:col4', 'Kitoh_2020_table_2:row6:col4', 'Kitoh_2020_table_2:row7:col4'])
- dropped value-less row: 'Plasma concentration (ng/mL) Time post-dosing Pre'
- dropped duplicate Q32 ('First dosing Cmax (ng/mL)', value '223') — already have one for this compound
- dropped duplicate Q56 ('First dosing Tmax (h)', value '2.6') — already have one for this compound
- dropped duplicate Q32 ('Second dosing Cmax (ng/mL)', value '149') — already have one for this compound
- dropped duplicate Q56 ('Second dosing Tmax a) (h)', value '13.6') — already have one for this compound
- dropped duplicate Q88 ('AUC0-24h b) (ng.h/mL)', value '2030') — already have one for this compound
- dropped duplicate Q57 ('t1/2 c) (h)', value '3.6') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Meclizine
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Kitoh_2020_table_2: unparsed_numeric_cell
- transposed table Kitoh_2020_table_2: logical view retains original source coordinates
- transposed table Kitoh_2020_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (48 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kitoh_2020_table_2:row0:col10', 'Kitoh_2020_table_2:row1:col10', 'Kitoh_2020_table_2:row2:col10', 'Kitoh_2020_table_2:row3:col10', 'Kitoh_2020_table_2:row4:col10', 'Kitoh_2020_table_2:row5:col10', 'Kitoh_2020_table_2:row6:col10', 'Kitoh_2020_table_2:row7:col10'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kitoh_2020_table_2:row0:col11', 'Kitoh_2020_table_2:row1:col11', 'Kitoh_2020_table_2:row2:col11', 'Kitoh_2020_table_2:row3:col11', 'Kitoh_2020_table_2:row4:col11', 'Kitoh_2020_table_2:row5:col11', 'Kitoh_2020_table_2:row6:col11', 'Kitoh_2020_table_2:row7:col11'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kitoh_2020_table_2:row0:col13', 'Kitoh_2020_table_2:row1:col13', 'Kitoh_2020_table_2:row2:col13', 'Kitoh_2020_table_2:row3:col13', 'Kitoh_2020_table_2:row4:col13', 'Kitoh_2020_table_2:row5:col13', 'Kitoh_2020_table_2:row6:col13', 'Kitoh_2020_table_2:row7:col13'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Kitoh_2020_table_2:row0:col5', 'Kitoh_2020_table_2:row1:col5', 'Kitoh_2020_table_2:row2:col5', 'Kitoh_2020_table_2:row3:col5', 'Kitoh_2020_table_2:row4:col5', 'Kitoh_2020_table_2:row5:col5', 'Kitoh_2020_table_2:row6:col5', 'Kitoh_2020_table_2:row7:col5'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kitoh_2020_table_2:row0:col12', 'Kitoh_2020_table_2:row1:col12', 'Kitoh_2020_table_2:row2:col12', 'Kitoh_2020_table_2:row3:col12', 'Kitoh_2020_table_2:row4:col12', 'Kitoh_2020_table_2:row5:col12', 'Kitoh_2020_table_2:row6:col12', 'Kitoh_2020_table_2:row7:col12'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Meclizine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.00013 | 0.9972 | 7671 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000223 | 0.9972 | 4472 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000149 | 0.9972 | 6692 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00013 | 0.9972 | 7671 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 54 | 0.9972 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 31 | 0.9972 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 8.5 | 8.5 | 1 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.6 | 8.5 | 2.361 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 8.5 | 8.5 | 1 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.7 | 0.08617 | 0.0507 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 2.6 | 0.08617 | 0.0331 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 13.6 | 0.08617 | 0.0063 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.7 | 0.08617 | 0.0507 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_modelica.zip" download>Meclizine_Kitoh2020_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_fmi.zip" download>Meclizine_Kitoh2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_matlab.zip" download>Meclizine_Kitoh2020_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_sbml.zip" download>Meclizine_Kitoh2020_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_cellml.zip" download>Meclizine_Kitoh2020_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.391 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3.06e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kitoh H, Matsushita M, Mishima K, Nagata T, Kamiya Y, Ueda K et al. Pharmacokinetics and safety after once and twice a day doses of meclizine hydrochloride administered to children with achondroplasia. PloS one 15(4):e0229639 (2020). [doi:10.1371/journal.pone.0229639](https://doi.org/10.1371/journal.pone.0229639)

**This record:** Pharmacolibrary, model `Meclizine_Kitoh2020_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_meclizine/Meclizine_Kitoh2020_reference>

```bibtex
@misc{pharmacolibrary_MeclizineKitoh2020reference,
  title  = {{Pharmacolibrary model Meclizine_Kitoh2020_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_meclizine/Meclizine_Kitoh2020_reference},
  note   = {Parameters from doi:10.1371/journal.pone.0229639},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_meclizine/Meclizine_Kitoh2020_reference/Meclizine_Kitoh2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Meclizine_Kitoh2020_reference_params.json` · controls `Meclizine_Kitoh2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmeclizine%5D%20Meclizine_Kitoh2020_reference&body=Drug%3A%20meclizine%0ARecord%3A%20Meclizine_Kitoh2020_reference%0APaper%3A%20Kitoh_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_meclizine/Meclizine_Kitoh2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:26 UTC</sub>
