<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ethosuximide&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/&quot;},{&quot;label&quot;:&quot;Diezi_2023 \u00b7 syrup_zarontin_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethosuximide_Giaccone1996_reference&quot;,&quot;label&quot;:&quot;Giaccone_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Giaccone1996_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Koup1978_reference&quot;,&quot;label&quot;:&quot;Koup_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Koup1978_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Marbury1981_reference&quot;,&quot;label&quot;:&quot;Marbury_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Marbury1981_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Patel1975_reference&quot;,&quot;label&quot;:&quot;Patel_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Patel1975_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_final_model_estimate&quot;,&quot;label&quot;:&quot;Diezi_2023_final_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_final_model_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_b&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_granules_b.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_reference&quot;,&quot;label&quot;:&quot;Diezi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_syrup_zarontin_b&quot;,&quot;label&quot;:&quot;Diezi_2023_syrup_zarontin_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethosuximide — `Ethosuximide_Diezi2023_syrup_zarontin_b`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 0.63, model 0.183).

<div class="pk-model-meta" hidden drug="Ethosuximide" model-id="Ethosuximide_Diezi2023_syrup_zarontin_b" status="needs_review" stale="false" population="healthy adult volunteers" measured-compound="Ethosuximide" parameterization="apparent" topology="retention"></div>

## Citation
Diezi L, Dao K, Jullien V, Roussel-Maupetit C, Burton I, André P et al. An innovative ethosuximide granule formulation designed for pediatric use: Comparative pharmacokinetics, safety, tolerability, and palatability profile versus reference syrup. Pharmacology research & perspectives 11(1):e01032 (2023).
  ·  DOI: [10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 12.

**Dosing:** 700 mg, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** CLnorm/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max [μg/ml] | Cmax | 18.2 | μg/ml |
| AUC(0,last) [μg·h/ml] | AUClast | 1200 | μg·h/ml |
| AUC(0,∞) [μg·h/ml] | AUC∞ | 1210 | μg·h/ml |
| t 1/2 [h] | t1/2z | 57.1 | h |
| CLTot/F [ml/h/kg] | CLnorm/F | 8.3 | ml/h/kg |
| V z/F [ml/kg] | V3/F | 678 | ml/kg |
| ka1 | kabs | 5.59 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.63, model 0.183).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — ethosuximide: Cmax 18.2 μg/ml, AUClast 1.2e+03 μg·h/ml, AUC∞ 1.21e+03 μg·h/ml, t1/2z 57.1 h, CLnorm/F 8.3 ml/h/kg, V3/F 678 ml/kg, kabs 5.59 /h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max [μg/ml] | `Q32` · Cmax | 18.2 | μg/ml | 0.0182 | kg/m3 | µg/ml | llm (0.6) | Diezi_2023_table_1:row2:col2 |
| AUC(0,last) [μg·h/ml] | `Q74` · AUClast | 1200 | μg·h/ml | 4320 | kg*s/m3 | (h·µg)/ml | llm_corrected (0.6) | Diezi_2023_table_1:row2:col4 |
| AUC(0,∞) [μg·h/ml] | `Q17` · AUC∞ | 1210 | μg·h/ml | 4356 | kg*s/m3 | (h·µg)/ml | llm_corrected (0.6) | Diezi_2023_table_1:row2:col5 |
| t 1/2 [h] | `Q57` · t1/2z | 57.1 | h | 2.056e+05 | s | h | llm (0.6) | Diezi_2023_table_1:row2:col6 |
| CLTot/F [ml/h/kg] | `Q355` · CLnorm/F | 8.3 | ml/h/kg | 1.614e-07 | m3/s | ml/(h·kg) | llm (0.6) | Diezi_2023_table_1:row2:col7 |
| V z/F [ml/kg] | `Q78` · V3/F | 678 | ml/kg | 0.04746 | m3 | ml/kg | llm (0.6) | Diezi_2023_table_1:row2:col8 |
| ka1 | `Q49` · kabs | 5.59 | /h | 0.001553 | 1/s | 1/h | review_gapfill (0.7) | Diezi_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t 1/2 [h] (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 't max [h] (range)' — extend the ontology if this is a real PK parameter (source ['Diezi_2023_table_1:row2:col1'])
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 67.2 (source ['prp21032-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'θ weight'
- NIL: refused to back-fill base 'allometric_exponent' from footnote/prose loose number None (source ['prp21032-tbl-0002:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Ethosuximide
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'syrup (zarontin®) (b)' subgroup of Diezi_2023 (paper reports 4 populations: final model estimate, granules (a), granules (b), syrup (zarontin®) (b))
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Diezi_2023's review values (primary lacked it)

**Extraction notes:**
- table Diezi_2023_table_1: unparsed_numeric_cell
- transposed table Diezi_2023_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (21 record(s))
- LLM selected parameter table(s) 1
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Diezi_2023_table_1:row2:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Diezi_2023_table_1:row2:col2'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['Diezi_2023_table_1:row2:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Diezi_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Diezi_2023_table_1:row2:col6'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Diezi_2023_table_1:row2:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Diezi_2023_table_1:row2:col8'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | retainedFraction (measured=Ethosuximide) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 93.7 | 0.999 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 87.6 | 0.999 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_tmax | reference | fail | 0.63 | 0.1833 | 0.291 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.1833 | 0.2444 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.1833 | 0.3667 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4 | 0.1833 | 0.0458 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_modelica.zip" download>Ethosuximide_Diezi2023_syrup_zarontin_b_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_fmi.zip" download>Ethosuximide_Diezi2023_syrup_zarontin_b_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_matlab.zip" download>Ethosuximide_Diezi2023_syrup_zarontin_b_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_sbml.zip" download>Ethosuximide_Diezi2023_syrup_zarontin_b_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_cellml.zip" download>Ethosuximide_Diezi2023_syrup_zarontin_b_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1412 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.056e+05 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Diezi L, Dao K, Jullien V, Roussel-Maupetit C, Burton I, André P et al. An innovative ethosuximide granule formulation designed for pediatric use: Comparative pharmacokinetics, safety, tolerability, and palatability profile versus reference syrup. Pharmacology research & perspectives 11(1):e01032 (2023). [doi:10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

**This record:** Pharmacolibrary, model `Ethosuximide_Diezi2023_syrup_zarontin_b`. <https://pharmacolibrary.github.io/#/drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b>

```bibtex
@misc{pharmacolibrary_EthosuximideDiezi2023syrupzarontinb,
  title  = {{Pharmacolibrary model Ethosuximide_Diezi2023_syrup_zarontin_b}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b},
  note   = {Parameters from doi:10.1002/prp2.1032},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b/Ethosuximide_Diezi2023_syrup_zarontin_b_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Ethosuximide_Diezi2023_syrup_zarontin_b_params.json` · controls `Ethosuximide_Diezi2023_syrup_zarontin_b_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethosuximide%5D%20Ethosuximide_Diezi2023_syrup_zarontin_b&body=Drug%3A%20ethosuximide%0ARecord%3A%20Ethosuximide_Diezi2023_syrup_zarontin_b%0APaper%3A%20Diezi_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 16:07 UTC</sub>
