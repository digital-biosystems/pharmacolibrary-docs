<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alectinib&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/&quot;},{&quot;label&quot;:&quot;Mohmaed_2026 \u00b7 fed_geometric_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_estimate&quot;,&quot;label&quot;:&quot;Mohmaed_2026_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fasted_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fasted_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fasted_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Alectinib_Mohmaed2026_fed_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Mohmaed_2026_fed_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alectinib — `Alectinib_Mohmaed2026_fed_geometric_mean_cv`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 7.82e-08, model 0.00101); ka use library defaults, not estimates from this paper (+2 more).

<div class="pk-model-meta" hidden drug="alectinib" model-id="Alectinib_Mohmaed2026_fed_geometric_mean_cv" status="needs_review" stale="false" population="patients with ALK-positive, non-small cell lung cancer" measured-compound="2H6-alectinib" parameterization="apparent" topology="1C"></div>

## Citation
Mohmaed Ali MI, van der Heijden LT, Tibben M, Rosing H, Kalicharan R, Ruiter G et al. Reducing the Burden of Interaction Studies in Cancer Patients Using a Stable Isotopically Labeled Microtracer: A Proof-of-Concept Study with Alectinib. Clinical pharmacology and therapeutics 119(3):713–720 (2026).
  ·  DOI: [10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141)

## Population and dosing

**Population:** patients with ALK-positive, non-small cell lung cancer · condition non-small cell lung cancer · age group adult · n = 10.

**Dosing:** 100, 600 mg, µg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv.svg" alt="Alectinib_Mohmaed2026_fed_geometric_mean_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (pg/mL) | Cmax | 78.2 | pg/mL |
| AUC0‐24h (pg*hour/mL) | AUCt | 980.8 | pg*hour/mL |
| CL/F | CL/F | 84.2 | L/h |
| VD/F | V/F | 776 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.067), qwen3.8-27b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 7.82e-08, model 0.00101); ka use library defaults, not estimates from this paper (+2 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — alectinib: Cmax 78.2 pg/mL, AUCt 981 pg*hour/mL; 2H6-alectinib: CL/F 84.2 L/h, V/F 776 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 2H6-alectinib, the second reading 2H6‑alectinib; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (pg/mL) | `Q32` · Cmax | 78.2 | pg/mL | 7.82e-08 | kg/m3 | pg/ml | space_fold (0.95) | Mohmaed_2026_table_3:row0:col2 |
| AUC0‐24h (pg*hour/mL) | `Q19` · AUCt | 980.8 | pg*hour/mL | 0.003531 | kg*s/m3 | (h·pg)/ml | llm (0.6) | Mohmaed_2026_table_3:row1:col2 |
| CL/F | `Q27` · CL/F | 84.2 | L/h | 2.339e-05 | m3/s | L/h | exact (1) | Mohmaed_2026:other_prose |
| VD/F | `Q76` · V/F | 776 | L | 0.776 | m3 | L | exact (1) | Mohmaed_2026:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'fed geometric mean (%cv)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- salvaged Q27 ('CL/F'=84.2) from results prose — parameter table was unreadable
- salvaged Q76 ('VD/F'=776) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=2H6-alectinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'fed geometric mean (%cv)' subgroup of Mohmaed_2026 (paper reports 3 populations: estimate, fasted geometric mean (%cv), fed geometric mean (%cv))
- molar mass: no plausible PubChem entry for '2H6-alectinib' ('2H6-alectinib') — left in mass units
- molar mass: none found for '2H6-alectinib' — its concentrations stay mass-only

**Extraction notes:**
- table cpt70141-tbl-0002: unbound_uncertainty
- companion parameter table 3 transcribed (6 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.067 (1/15 fields) | 14 |
| `qwen3.8-27b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['alectinib', '2h6‐alectinib', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[auc0‐24h]` | 980.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 78.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 84.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 84.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ffed]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time (hours)c]` |  | 1.51 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mttfed]` |  | 3.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_fed_ffasted_fraction_of_state]` |  | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_mtt_fed_mttfasted_fraction_of_state]` |  | 0.72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` |  | 776 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 776 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 2H6-alectinib | 2H6‑alectinib | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 2H6-alectinib | 2H6‑alectinib | mismatch |
| `qwen3.8-27b` | `parameters[auc0‐24h]` | 980.8 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c max]` | 78.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` |  | 84.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` | 84.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[lag time (hours)c]` |  | 1.51 | only_one_extracted |
| `qwen3.8-27b` | `parameters[mttfed]` |  | 3.14 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd/f]` |  | 776 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd/f]` | 776 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Mohmaed_2026_table_3:row1:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Mohmaed_2026_table_3:row0:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 84.2 L/h | ['Mohmaed_2026:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 776 L | ['Mohmaed_2026:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=2H6-alectinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.067 (1 of 15 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.067 | cross-check contradicted by a second reader: verdict disputed; agreement 0.067 (1 of 15 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | fail | 7.82e-08 | 0.001012 | 1.295e+04 | reported 78.2 pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.49e-08 | 0.001012 | 1.844e+04 | reported 54.9 pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 1.42 | 0.001012 |  | unresolved concentration unit (exp 'fold', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.001012 |  | the transcribed record carries no number for this value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_modelica.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_fmi.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab_simbio.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_sbml.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_cellml.zip" download>Alectinib_Mohmaed2026_fed_geometric_mean_cv_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0012 | kg |
| input | model | `Cl` | 2.339e-05 | m3/s |
| input | model | `VdPerKg` | 0.01109 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mohmaed Ali MI, van der Heijden LT, Tibben M, Rosing H, Kalicharan R, Ruiter G et al. Reducing the Burden of Interaction Studies in Cancer Patients Using a Stable Isotopically Labeled Microtracer: A Proof-of-Concept Study with Alectinib. Clinical pharmacology and therapeutics 119(3):713–720 (2026). [doi:10.1002/cpt.70141](https://doi.org/10.1002/cpt.70141)

**This record:** Pharmacolibrary, model `Alectinib_Mohmaed2026_fed_geometric_mean_cv`. <https://pharmacolibrary.github.io/#/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv>

```bibtex
@misc{pharmacolibrary_AlectinibMohmaed2026fedgeometricmeancv,
  title  = {{Pharmacolibrary model Alectinib_Mohmaed2026_fed_geometric_mean_cv}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv},
  note   = {Parameters from doi:10.1002/cpt.70141},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1200 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 1200 mg oral (L01ED03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv/Alectinib_Mohmaed2026_fed_geometric_mean_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Alectinib_Mohmaed2026_fed_geometric_mean_cv_params.json` · controls `Alectinib_Mohmaed2026_fed_geometric_mean_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balectinib%5D%20Alectinib_Mohmaed2026_fed_geometric_mean_cv&body=Drug%3A%20alectinib%0ARecord%3A%20Alectinib_Mohmaed2026_fed_geometric_mean_cv%0APaper%3A%20Mohmaed_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alectinib/Alectinib_Mohmaed2026_fed_geometric_mean_cv%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:17 UTC</sub>
