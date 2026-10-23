<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maribavir&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/&quot;},{&quot;label&quot;:&quot;Sun_2025 \u00b7 estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maribavir_Song2024_reference&quot;,&quot;label&quot;:&quot;Song_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Sun2025_estimates&quot;,&quot;label&quot;:&quot;Sun_2025_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Sun2025_estimates.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Maribavir_Fromage2025_reference&quot;,&quot;label&quot;:&quot;Fromage_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Fromage2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Song2020_reference&quot;,&quot;label&quot;:&quot;Song_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# maribavir — `Maribavir_Sun2025_estimates`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="maribavir" model-id="Maribavir_Sun2025_estimates" status="accepted_with_caveats" stale="false" population="transplant recipients with CMV infection and healthy volunteers" measured-compound="maribavir" parameterization="apparent" topology="2C"></div>

## Citation
Sun K, Jomphe C, Gosselin NH, Pheng L, Durairaj C, Hang Y et al. Population Pharmacokinetics and Exposure-Response Relationships of Maribavir in Transplant Recipients With First Episode or Refractory Cytomegalovirus. CPT: pharmacometrics & systems pharmacology 14(8):1346–1358 (2025).
  ·  DOI: [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054)

## Population and dosing

**Population:** transplant recipients with CMV infection and healthy volunteers · condition CMV infection after transplant · age group adult.

**Dosing:** 400 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates.svg" alt="Maribavir_Sun2025_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 1 |  |
| Lag (h) | tlag | 0.212 | h |
| Ka (1/h) | kabs | 0.697 | 1/h |
| CL/F (L/h) | CL/F | 3.94 | L/h |
| Vc/F (L) | V1/F | 17.8 | L |
| Q/F (L/h) | Q/F | 1.24 | L/h |
| Vp/F (L) | V2/F | 7.10 | L |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | psp470054-tbl-0002:row1:col1, psp470054-tbl-0002:footnote |
| Lag (h) | `Q83` · tlag | 0.212 | h | 763.2 | s | h | llm (0.6) | psp470054-tbl-0002:row3:col1 |
| Ka (1/h) | `Q49` · kabs | 0.697 | 1/h | 0.0001936 | 1/s | 1/h | exact (1) | psp470054-tbl-0002:row4:col1 |
| CL/F (L/h) | `Q27` · CL/F | 3.94 | L/h | 1.094e-06 | m3/s | l/h | exact (1) | psp470054-tbl-0002:row7:col1, psp470054-tbl-0002:footnote |
| Vc/F (L) | `Q290` · V1/F | 17.8 | L | 0.0178 | m3 | l | exact (1) | psp470054-tbl-0002:row12:col1, psp470054-tbl-0002:footnote |
| Q/F (L/h) | `Q69` · Q/F | 1.24 | L/h | 3.444e-07 | m3/s | l/h | exact (1) | psp470054-tbl-0002:row14:col1, psp470054-tbl-0002:footnote |
| Vp/F (L) | `Q82` · V2/F | 7.10 | L | 0.0071 | m3 | l | exact (1) | psp470054-tbl-0002:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code |
|---|---|
| theta_cl_f_wt | Q900 |
| theta_v1_f_wt | Q900 |
| theta_q_f_wt | Q900 |
| theta_v2_f_wt | Q900 |

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σ 2add' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ 2prop Phase 1' routed out of structural estimates ('Residual error')
- table section residual_error: 'σ 2prop Phase 2 & 3' routed out of structural estimates ('Residual error')
- dropped duplicate Q49 ('Effect of dose on Ka', value None) — already have one for this compound
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'tlag' from footnote/prose loose number 0.212 (source ['psp470054-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The paper does not state a unit for Ka. Ka is a first-order absorption rate constant; by population PK convention rate c')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=maribavir
- population split: 'estimates' subgroup of Sun_2025 (paper reports 5 populations: all individuals a, all transplant recipients with cmv, estimates, healthy volunteers, transplant recipients with cmv (aurora study only))

**Extraction notes:**
- unparsed cell psp470054-tbl-0002:row2:col1 = '× 0.905'
- unparsed cell psp470054-tbl-0002:row5:col4 = '−1.17 to −0.875'
- unparsed cell psp470054-tbl-0002:row6:col1 = '× 0.457'
- unparsed cell psp470054-tbl-0002:row9:col1 = '× 0.709'
- unparsed cell psp470054-tbl-0002:row10:col1 = '× 2.27'
- unparsed cell psp470054-tbl-0002:row11:col1 = '× 0.678'
- transposed table Sun_2025_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (32 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (20/20 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q40 | fail | 1 | 0.75 | 0.75 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['psp470054-tbl-0002:row7:col1', 'psp470054-tbl-0002:footnote'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['psp470054-tbl-0002:row12:col1', 'psp470054-tbl-0002:footnote'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['psp470054-tbl-0002:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['psp470054-tbl-0002:row14:col1', 'psp470054-tbl-0002:footnote'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['psp470054-tbl-0002:row16:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['psp470054-tbl-0002:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.94 L/h |  |  | ['psp470054-tbl-0002:row7:col1', 'psp470054-tbl-0002:footnote'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 17.8 L |  |  | ['psp470054-tbl-0002:row12:col1', 'psp470054-tbl-0002:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 7.1 L |  |  | ['psp470054-tbl-0002:row16:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=maribavir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.006774 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.006774 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.006774 | non-numeric value |
| T1_cmax | reference | skipped | 1.2 | 0.006774 | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 16 | 0.006774 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | -22.5 | 0.006774 | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 272.6 | 0.006774 | unresolved concentration unit (exp 'C max,ss', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.006774 | non-numeric value |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2.11 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 19 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 272.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  | 7.701 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_modelica.zip" download>Maribavir_Sun2025_estimates_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_fmi.zip" download>Maribavir_Sun2025_estimates_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_matlab.zip" download>Maribavir_Sun2025_estimates_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_matlab_simbio.zip" download>Maribavir_Sun2025_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_sbml.zip" download>Maribavir_Sun2025_estimates_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_cellml.zip" download>Maribavir_Sun2025_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3762 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 763.2 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 1.094e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002543 | m3/kg |
| input | model | `k12` | 1.935e-05 | 1/s |
| input | model | `k21` | 4.851e-05 | 1/s |
| input | model | `ka` | 0.0001936 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sun K, Jomphe C, Gosselin NH, Pheng L, Durairaj C, Hang Y et al. Population Pharmacokinetics and Exposure-Response Relationships of Maribavir in Transplant Recipients With First Episode or Refractory Cytomegalovirus. CPT: pharmacometrics & systems pharmacology 14(8):1346–1358 (2025). [doi:10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054)

**This record:** Pharmacolibrary v26.09, model `Maribavir_Sun2025_estimates`. <https://pharmacolibrary.github.io/#/drugs/drug_maribavir/Maribavir_Sun2025_estimates>

```bibtex
@misc{pharmacolibrary_MaribavirSun2025estimates,
  title  = {{Pharmacolibrary model Maribavir_Sun2025_estimates}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_maribavir/Maribavir_Sun2025_estimates},
  note   = {Parameters from doi:10.1002/psp4.70054},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 0.697 /h, lag 12.7 min, F 1). Dose in the paper: 400 mg.

<dbs-fmusim paramsurl="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_maribavir/Maribavir_Sun2025_estimates/Maribavir_Sun2025_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Maribavir_Sun2025_estimates_params.json` · controls `Maribavir_Sun2025_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaribavir%5D%20Maribavir_Sun2025_estimates&body=Drug%3A%20maribavir%0ARecord%3A%20Maribavir_Sun2025_estimates%0APaper%3A%20Sun_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_maribavir/Maribavir_Sun2025_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:08 UTC</sub>
