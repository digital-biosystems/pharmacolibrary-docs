<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;epoprostenol&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/&quot;},{&quot;label&quot;:&quot;Nicolas_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epoprostenol_Keizer2010_reference&quot;,&quot;label&quot;:&quot;Keizer_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Keizer2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epoprostenol_Nicolas2012_reference&quot;,&quot;label&quot;:&quot;Nicolas_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Epoprostenol_Vizza2017_reference&quot;,&quot;label&quot;:&quot;Vizza_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Vizza2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epoprostenol_Vucicevic2025_reference&quot;,&quot;label&quot;:&quot;Vucicevic_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epoprostenol/Epoprostenol_Vucicevic2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# epoprostenol — `Epoprostenol_Nicolas2012_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-05 15:23 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="epoprostenol" model-id="Epoprostenol_Nicolas2012_reference" status="extracted" stale="true" population="healthy male subjects" measured-compound="6-keto-prostacyclin F1a" parameterization="apparent" topology="1C"></div>

## Citation
Nicolas LB, Krause A, Gutierrez MM, Dingemanse J. Integrated pharmacokinetics and pharmacodynamics of epoprostenol in healthy subjects. British journal of clinical pharmacology 74(6):978-989 (2012).
  ·  DOI: [10.1111/j.1365-2125.2012.04301.x](https://doi.org/10.1111/j.1365-2125.2012.04301.x)

## Population and dosing

**Population:** healthy male subjects · condition healthy · age group adult · n = &gt;=20.

**Dosing:** 2, 4, 6, 8 ng kg -1 min -1, iv, multiple.

**Dosed compound ≠ measured compound:** dosed epoprostenol, measured 6-keto-prostacyclin F1a.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference.svg" alt="Epoprostenol_Nicolas2012_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (l h -1 ) | CLm/F | 84.92 | l h -1 | 3.61 |
| V (l) | Vm/F | 23.74 | l | 12.12 |
| theta_q44_food | theta_q44_food | 1.69 |  | 3.41 |
| theta_q44_food | theta_q44_food | 3.57 |  | 50.98 |
| theta_q83_food | theta_q83_food | 0.22 |  | 11.33 |
| estimated apparent clearance | CL/F | 43.9 | L/h |  |
| apparent volume of distribution | V/F | 458.0 | L |  |
| absorption rate constant | kabs | 2.16 | h−1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.25, model 1.05); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is epoprostenol's own; they describe 6-keto-prostacyclin F1a. Extracted — 6-keto-prostacyclin F1a: CL 84.9 l h -1, V 23.7 l, kabs 0.688 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has epoprostenol, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q351` · CLm/F | 84.92 | l h -1 | 2.359e-05 | m3/s | l/h | 3.61 | exact (1) | Nicolas_2012_table_1:row0:col1, Nicolas_2012_table_1:row0:col2, Nicolas_2012_table_1:row0:col3 |
| V (l) | `Q367` · Vm/F | 23.74 | l | 0.02374 | m3 | l | 12.12 | exact (1) | Nicolas_2012_table_1:row1:col1, Nicolas_2012_table_1:row1:col2, Nicolas_2012_table_1:row1:col3 |
| theta_q44_food | `Q900` · theta_q44_food | 1.69 |  |  |  |  | 3.41 |  | Nicolas_2012_table_1:row2:col1, Nicolas_2012_table_1:row2:col2, Nicolas_2012_table_1:row2:col3 |
| theta_q44_food | `Q900` · theta_q44_food | 3.57 |  |  |  |  | 50.98 |  | Nicolas_2012_table_1:row3:col1, Nicolas_2012_table_1:row3:col2, Nicolas_2012_table_1:row3:col3 |
| theta_q83_food | `Q900` · theta_q83_food | 0.22 |  |  |  |  | 11.33 |  | Nicolas_2012_table_1:row4:col1, Nicolas_2012_table_1:row4:col2, Nicolas_2012_table_1:row4:col3 |
| estimated apparent clearance | `Q27` · CL/F | 43.9 | L/h | 1.219e-05 | m3/s | L/h |  | review_gapfill (0.7) | Vizza_2017:review |
| apparent volume of distribution | `Q76` · V/F | 458.0 | L | 0.458 | m3 | L |  | review_gapfill (0.7) | Vizza_2017:review |
| absorption rate constant | `Q49` · kabs | 2.16 | h−1 | 0.0006 | 1/s | 1/h |  | review_gapfill (0.7) | Vizza_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'PK parameters' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col1', 'tab_1:row2:col2'])
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- metabolite 6-keto-prostacyclin f1a: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite 6-keto-prostacyclin f1a: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=6-keto-prostacyclin F1a
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 6 linked by role; re-tagged 6-keto-prostacyclin F1a→parent ×15
- molar mass: none of 1 PubChem candidate(s) is '6-keto-prostacyclin F1a' (LLM) — left in mass units
- molar mass: none found for '6-keto-prostacyclin F1a' — its concentrations stay mass-only
- gap-filled Q27 (CL/F) from Vizza_2017's review values (primary lacked it)
- gap-filled Q76 (V/F) from Vizza_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Vizza_2017's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 1 transcribed (15 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.083 (1/12 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[cl]` | 84.92 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` |  | 84.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q44_food]` | 1.69 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q83_food]` | 0.22 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q83_food]` |  | 0.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q87_food]` |  | 3.57 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 23.74 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` |  | 23.74 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | epoprostenol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 6-keto-prostacyclin F1a | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Vizza_2017:review'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Nicolas_2012_table_1:row0:col1', 'Nicolas_2012_table_1:row0:col2', 'Nicolas_2012_table_1:row0:col3'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Nicolas_2012_table_1:row1:col1', 'Nicolas_2012_table_1:row1:col2', 'Nicolas_2012_table_1:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Vizza_2017:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Vizza_2017:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 43.9 L/h | ['Vizza_2017:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 458 L | ['Vizza_2017:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=6-keto-prostacyclin F1a) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 0.25 | 1.049 | 4.197 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.22 | 1.049 | 4.769 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.08 | 1.049 | 0.9716 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.6758 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_modelica.zip" download>Epoprostenol_Nicolas2012_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_fmi.zip" download>Epoprostenol_Nicolas2012_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_matlab.zip" download>Epoprostenol_Nicolas2012_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_matlab_simbio.zip" download>Epoprostenol_Nicolas2012_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_sbml.zip" download>Epoprostenol_Nicolas2012_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_cellml.zip" download>Epoprostenol_Nicolas2012_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
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
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.219e-05 | m3/s |
| input | model | `VdPerKg` | 0.006543 | m3/kg |
| input | model | `ka` | 0.0006 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nicolas LB, Krause A, Gutierrez MM, Dingemanse J. Integrated pharmacokinetics and pharmacodynamics of epoprostenol in healthy subjects. British journal of clinical pharmacology 74(6):978-989 (2012). [doi:10.1111/j.1365-2125.2012.04301.x](https://doi.org/10.1111/j.1365-2125.2012.04301.x)

**This record:** Pharmacolibrary v26.09, model `Epoprostenol_Nicolas2012_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference>

```bibtex
@misc{pharmacolibrary_EpoprostenolNicolas2012reference,
  title  = {{Pharmacolibrary model Epoprostenol_Nicolas2012_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference},
  note   = {Parameters from doi:10.1111/j.1365-2125.2012.04301.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 2.16 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference/Epoprostenol_Nicolas2012_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Epoprostenol_Nicolas2012_reference_params.json` · controls `Epoprostenol_Nicolas2012_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepoprostenol%5D%20Epoprostenol_Nicolas2012_reference&body=Drug%3A%20epoprostenol%0ARecord%3A%20Epoprostenol_Nicolas2012_reference%0APaper%3A%20Nicolas_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epoprostenol/Epoprostenol_Nicolas2012_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 15:23 UTC</sub>
