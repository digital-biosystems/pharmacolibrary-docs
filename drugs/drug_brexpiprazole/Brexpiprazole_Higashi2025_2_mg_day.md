<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;brexpiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/&quot;},{&quot;label&quot;:&quot;Higashi_2025 \u00b7 2_mg_day&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_1_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_1_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_1_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brexpiprazole_Higashi2025_2_mg_day&quot;,&quot;label&quot;:&quot;Higashi_2025_2_mg_day&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Brexpiprazole_Wong2021_reference&quot;,&quot;label&quot;:&quot;Wong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/Brexpiprazole_Wong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wang_2024_PANSS&quot;,&quot;label&quot;:&quot;Wang_2024 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_brexpiprazole/pd_Wang_2024_PANSS.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brexpiprazole — `Brexpiprazole_Higashi2025_2_mg_day`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Ka use library defaults, not estimates from this paper; t6_deviations.

<div class="pk-model-meta" hidden drug="brexpiprazole" model-id="Brexpiprazole_Higashi2025_2_mg_day" status="needs_review" stale="false" population="Japanese healthy subjects and patients with schizophrenia" measured-compound="brexpiprazole" parameterization="apparent" topology="2C"></div>

## Citation
Higashi K, Sasaki T, Aoki K, Sekine D, Maeda K, Shiomi Y et al. Population pharmacokinetics of brexpiprazole in Japanese healthy subjects and patients with schizophrenia. Drug metabolism and pharmacokinetics 62:101057 (2025).
  ·  DOI: [10.1016/j.dmpk.2025.101057](https://doi.org/10.1016/j.dmpk.2025.101057)

## Population and dosing

**Population:** Japanese healthy subjects and patients with schizophrenia · condition schizophrenia · age group adult · n = (46 healthy adult males, 21 adult patients with schizophrenia (Phase 1), and 331 adult patients with schizophrenia (Phase 2/3)).

**Dosing:** 0.2, 1, 2, 4, 6 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day.svg" alt="Brexpiprazole_Higashi2025_2_mg_day diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC 0-24,ss | AUCSS | 2170 | ng*h/mL |
| C max,ss | Cmax | 134 | ng/mL |
| C trough,ss | Ctrough | 77.1 | ng/mL |
| CL/F | CL/F | 0.74 | L/h |
| Q/F | Q/F | 1.0 | L/h |
| Vc/F | V1/F | 63.0 | L |
| Vp/F | V2/F | 24.6 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ka use library defaults, not estimates from this paper; t6_deviations.**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (AUCSS, Cmax and Ctrough), so that value has no SI equivalent. Extracted — brexpiprazole: AUCSS 2.17e+03 ng*h/mL, Cmax 134 ng/mL, Ctrough 77.1 ng/mL, CL/F 0.74 L/h, Q/F 1 L/h, V1/F 63 L, V2/F 24.6 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has brexpiprazole, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC 0-24,ss | `Q18` · AUCSS | 2170 | ng*h/mL |  |  | ng*h/mL | llm_corrected (0.6) | Higashi_2025_table_3:row3:col1 |
| C max,ss | `Q32` · Cmax | 134 | ng/mL |  |  | ng/mL | llm (0.6) | Higashi_2025_table_3:row3:col2 |
| C trough,ss | `Q37` · Ctrough | 77.1 | ng/mL |  |  | ng/mL | llm_confirmed (0.6) | Higashi_2025_table_3:row3:col3, Higashi_2025_table_3:row3:col4 |
| CL/F | `Q27` · CL/F | 0.74 | L/h | 2.056e-07 | m3/s | L/h | exact (1) | Higashi_2025:results_prose |
| Q/F | `Q69` · Q/F | 1.0 | L/h | 2.778e-07 | m3/s | L/h | exact (1) | Higashi_2025:results_prose |
| Vc/F | `Q290` · V1/F | 63.0 | L | 0.063 | m3 | L | exact (1) | Higashi_2025:results_prose |
| Vp/F | `Q82` · V2/F | 24.6 | L | 0.0246 | m3 | L | exact (1) | Higashi_2025:results_prose |

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
- salvaged Q27 ('CL/F'=0.74) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F'=1.0) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F'=63.0) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F'=24.6) from results prose — parameter table was unreadable
- implicit units: 'AUC 0-24,ss' → ng*h/mL (from the popPK convention: "AUC is the integral of concentration over time. The text explicitly reports trough concentrations in 'ng/mL' (e.g., '38.")
- implicit units: 'C max,ss' → ng/mL (from the popPK convention: "Cmax is a plasma concentration. The text explicitly reports 'Trough plasma concentrations... were 38.5 (10.5-87.0) and 7")
- implicit units: 'C trough,ss' → ng/mL (from the paper text: "The text states: 'Trough plasma concentrations (90% prediction interval) of brexpiprazole at steady state were 38.5 (10.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=brexpiprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '2 mg/day' subgroup of Higashi_2025 (paper reports 2 populations: 1 mg/day, 2 mg/day)

**Extraction notes:**
- table tab_2: unparsed_numeric_cell
- table Higashi_2025_table_3: unbound_uncertainty
- table Higashi_2025_table_3: units_need_context
- table Higashi_2025_table_3: ragged_grid
- transposed table Higashi_2025_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (14 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (5/15 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 0.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 1.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 63.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 63.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 24.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 24.6 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | brexpiprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | brexpiprazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  | ['Higashi_2025_table_3:row3:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Higashi_2025_table_3:row3:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Higashi_2025_table_3:row3:col3', 'Higashi_2025_table_3:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.74 L/h | ['Higashi_2025:results_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 63 L | ['Higashi_2025:results_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 24.6 L | ['Higashi_2025:results_prose'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=brexpiprazole) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | 1: not acceptable; 3: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_modelica.zip" download>Brexpiprazole_Higashi2025_2_mg_day_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_fmi.zip" download>Brexpiprazole_Higashi2025_2_mg_day_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_matlab.zip" download>Brexpiprazole_Higashi2025_2_mg_day_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_matlab_simbio.zip" download>Brexpiprazole_Higashi2025_2_mg_day_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_sbml.zip" download>Brexpiprazole_Higashi2025_2_mg_day_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_cellml.zip" download>Brexpiprazole_Higashi2025_2_mg_day_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4336 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-07 | kg |
| input | model | `Cl` | 2.056e-07 | m3/s |
| input | model | `VdPerKg` | 0.0009 | m3/kg |
| input | model | `k12` | 4.409e-06 | 1/s |
| input | model | `k21` | 1.129e-05 | 1/s |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Higashi K, Sasaki T, Aoki K, Sekine D, Maeda K, Shiomi Y et al. Population pharmacokinetics of brexpiprazole in Japanese healthy subjects and patients with schizophrenia. Drug metabolism and pharmacokinetics 62:101057 (2025). [doi:10.1016/j.dmpk.2025.101057](https://doi.org/10.1016/j.dmpk.2025.101057)

**This record:** Pharmacolibrary v26.09, model `Brexpiprazole_Higashi2025_2_mg_day`. <https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day>

```bibtex
@misc{pharmacolibrary_BrexpiprazoleHigashi20252mgday,
  title  = {{Pharmacolibrary model Brexpiprazole_Higashi2025_2_mg_day}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day},
  note   = {Parameters from doi:10.1016/j.dmpk.2025.101057},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.2 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 0.2, 1, 2, 4, 6 mg.

<dbs-fmusim paramsurl="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day/Brexpiprazole_Higashi2025_2_mg_day_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Brexpiprazole_Higashi2025_2_mg_day_params.json` · controls `Brexpiprazole_Higashi2025_2_mg_day_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrexpiprazole%5D%20Brexpiprazole_Higashi2025_2_mg_day&body=Drug%3A%20brexpiprazole%0ARecord%3A%20Brexpiprazole_Higashi2025_2_mg_day%0APaper%3A%20Higashi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brexpiprazole/Brexpiprazole_Higashi2025_2_mg_day%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 14:03 UTC</sub>
