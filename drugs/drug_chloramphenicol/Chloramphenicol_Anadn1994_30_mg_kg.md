<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;chloramphenicol&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/&quot;},{&quot;label&quot;:&quot;Anad\u00f3n_1994 \u00b7 30_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloramphenicol_Perucca1982_reference&quot;,&quot;label&quot;:&quot;Perucca_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Perucca1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Anadn1994_30_mg_kg&quot;,&quot;label&quot;:&quot;Anad\u00f3n_1994_30_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chloramphenicol_Anadn1994_50_mg_kg&quot;,&quot;label&quot;:&quot;Anad\u00f3n_1994_50_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_50_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloramphenicol_Soback1986_reference&quot;,&quot;label&quot;:&quot;Soback_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloramphenicol/Chloramphenicol_Soback1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloramphenicol — `Chloramphenicol_Anadn1994_30_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The model does not reproduce the paper's terminal half-life (paper 7, model 6.87e+03).

<div class="pk-model-meta" hidden drug="chloramphenicol" model-id="Chloramphenicol_Anadn1994_30_mg_kg" status="needs_review" stale="false" population="broiler chickens" measured-compound="chloramphenicol" parameterization="mechanistic" topology="1C"></div>

## Citation
Anadón A, Bringas P, Martinez-Larrañaga MR, Diaz MJ. Bioavailability, pharmacokinetics and residues of chloramphenicol in the chicken. Journal of veterinary pharmacology and therapeutics 17(1):52–58 (1994).
  ·  DOI: [10.1111/j.1365-2885.1994.tb00522.x](https://doi.org/10.1111/j.1365-2885.1994.tb00522.x)

## Population and dosing

**Population:** broiler chickens · condition healthy · n = 8.

**Dosing:** 2100, 3500 mg, oral, multiple, every 24 h.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg.svg" alt="Chloramphenicol_Anadn1994_30_mg_kg diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A1 (µg/ml) | A1 | 14.55 | µg/ml |
| A2 (µg/ml) | A2 | 2.69 | µg/ml |
| A3 (µg/ml) | A3 | 19.25 | µg/ml |
| α (h⁻¹) | λ1 | 0.77 | h⁻¹ |
| β (h⁻¹) | kel | 0.10 | h⁻¹ |
| ka (h⁻¹) | kabs | 3.10 | h⁻¹ |
| t1/2, α (h) | t1/2α | 0.94 | h |
| t1/2, β (h) | t1/2β | 6.87 | h |
| V(darea) (l/kg) | V | 2.18 | l/kg |
| AUC (mg·h/l) | AUC | 38.98 | mg·h/l |
| F (%) | Fab | 29 | % |
| MRT (h) | MRT | 7.23 | h |
| Cl (ml/h/kg) | CL | 0.220 | ml/h/kg |
| Cmax (µg/ml) | Cmax | 8.63 | µg/ml |
| tmax (h) | tmax | 0.72 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 7, model 6.87e+03).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (A1, A2, A3 and Fab), so that value has no SI equivalent. Extracted — chloramphenicol: A1 14.6 µg/ml, A2 2.69 µg/ml, A3 19.2 µg/ml, λ1 0.77 h⁻¹, kel 0.1 h⁻¹, kabs 3.1 h⁻¹, t1/2α 0.94 h, t1/2β 6.87 h, … (+7).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A1 (µg/ml) | `Q415` · A1 | 14.55 | µg/ml |  |  | µg/ml | exact (1) | Anadón_1994_table_p4_1:row0:col1 |
| A2 (µg/ml) | `Q416` · A2 | 2.69 | µg/ml |  |  | µg/ml | exact (1) | Anadón_1994_table_p4_1:row1:col1 |
| A3 (µg/ml) | `Q417` · A3 | 19.25 | µg/ml |  |  | µg/ml | exact (1) | Anadón_1994_table_p4_1:row2:col1 |
| α (h⁻¹) | `Q67` · λ1 | 0.77 | h⁻¹ | 0.0002139 | 1/s | 1/h | exact (1) | Anadón_1994_table_p4_1:row3:col1 |
| β (h⁻¹) | `Q47` · kel | 0.10 | h⁻¹ | 2.778e-05 | 1/s | 1/h | exact (1) | Anadón_1994_table_p4_1:row4:col1 |
| ka (h⁻¹) | `Q49` · kabs | 3.10 | h⁻¹ | 0.0008611 | 1/s | 1/h | exact (1) | Anadón_1994_table_p4_1:row5:col1 |
| t1/2, α (h) | `Q59` · t1/2α | 0.94 | h | 3384 | s | h | half_life_rule (0.95) | Anadón_1994_table_p4_1:row6:col1, Anadón_1994_table_p4_1:row8:col1 |
| t1/2, β (h) | `Q60` · t1/2β | 6.87 | h | 2.473e+04 | s | h | half_life_rule (0.95) | Anadón_1994_table_p4_1:row7:col1 |
| V(darea) (l/kg) | `Q61` · V | 2.18 | l/kg | 0.1526 | m3 | l/kg | space_fold (0.95) | Anadón_1994_table_p4_1:row9:col1 |
| AUC (mg·h/l) | `Q88` · AUC | 38.98 | mg·h/l | 140.3 | kg*s/m3 | (h·mg)/l | exact (1) | Anadón_1994_table_p4_1:row10:col1 |
| F (%) | `Q40` · Fab | 29 | % |  |  |  | exact (1) | Anadón_1994_table_p4_1:row11:col1 |
| MRT (h) | `Q53` · MRT | 7.23 | h | 2.603e+04 | s | h | exact (1) | Anadón_1994_table_p4_1:row12:col1 |
| Cl (ml/h/kg) | `Q22` · CL | 0.220 | ml/h/kg | 4.278e-09 | m3/s | ml/(h·kg) | exact (1) | Anadón_1994_table_p4_1:row13:col1 |
| Cmax (µg/ml) | `Q32` · Cmax | 8.63 | µg/ml | 0.00863 | kg/m3 | µg/ml | exact (1) | Anadón_1994_table_p4_1:row14:col1 |
| tmax (h) | `Q56` · tmax | 0.72 | h | 2592 | s | h | exact (1) | Anadón_1994_table_p4_1:row15:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- NIL: refused to back-fill base 'MW' from footnote/prose loose number 8.63 (source ['tab_0:footnote', 'tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'tmax' from footnote/prose loose number 0.72 (source ['tab_0:footnote', 'tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=chloramphenicol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: '30 mg/kg' subgroup of Anadón_1994 (paper reports 2 populations: 30 mg/kg, 50 mg/kg)

**Extraction notes:**
- table Anadón_1994_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (1 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

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
| C0_has_structural_params | pass |  | 15 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 7 | 6.868 | 0.9811 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Anadón_1994_table_p4_1:row13:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Anadón_1994_table_p4_1:row14:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Anadón_1994_table_p4_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Anadón_1994_table_p4_1:row5:col1'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['Anadón_1994_table_p4_1:row12:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Anadón_1994_table_p4_1:row15:col1'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Anadón_1994_table_p4_1:row6:col1', 'Anadón_1994_table_p4_1:row8:col1'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Anadón_1994_table_p4_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Anadón_1994_table_p4_1:row9:col1'] |
| C5_dimension_Q67 | pass | 1 / [time] |  |  |  | ['Anadón_1994_table_p4_1:row3:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Anadón_1994_table_p4_1:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.22 |  |  | ['Anadón_1994_table_p4_1:row13:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0154 L/h |  |  | ['Anadón_1994_table_p4_1:row13:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 153 L |  |  | ['Anadón_1994_table_p4_1:row9:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=chloramphenicol) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | pass |  | verdict confirmed; agreement 1.0 (20 of 20 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |
| T1_t_half_beta | reference | skipped |  | 6868 |  | the transcribed record carries no number for this value |
| T1_t_half_terminal | reference | fail | 7 | 6868 | 981.2 | reported 7.0 h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_modelica.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_fmi.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_matlab.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_matlab_simbio.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_sbml.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_cellml.zip" download>Chloramphenicol_Anadn1994_30_mg_kg_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3231 | kg/mol |
| input | dosing | `F` | 29 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0021 | kg |
| input | model | `Cl` | 4.278e-09 | m3/s |
| input | model | `VdPerKg` | 0.00218 | m3/kg |
| input | model | `ka` | 0.0008611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Anadón A, Bringas P, Martinez-Larrañaga MR, Diaz MJ. Bioavailability, pharmacokinetics and residues of chloramphenicol in the chicken. Journal of veterinary pharmacology and therapeutics 17(1):52–58 (1994). [doi:10.1111/j.1365-2885.1994.tb00522.x](https://doi.org/10.1111/j.1365-2885.1994.tb00522.x)

**This record:** Pharmacolibrary, model `Chloramphenicol_Anadn1994_30_mg_kg`. <https://pharmacolibrary.github.io/#/drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg>

```bibtex
@misc{pharmacolibrary_ChloramphenicolAnadn199430mgkg,
  title  = {{Pharmacolibrary model Chloramphenicol_Anadn1994_30_mg_kg}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg},
  note   = {Parameters from doi:10.1111/j.1365-2885.1994.tb00522.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2100 mg, single dose, first-order absorption (ka 3.1 /h, F 29). Doses in the paper: 2100, 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg/Chloramphenicol_Anadn1994_30_mg_kg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Chloramphenicol_Anadn1994_30_mg_kg_params.json` · controls `Chloramphenicol_Anadn1994_30_mg_kg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloramphenicol%5D%20Chloramphenicol_Anadn1994_30_mg_kg&body=Drug%3A%20chloramphenicol%0ARecord%3A%20Chloramphenicol_Anadn1994_30_mg_kg%0APaper%3A%20Anad%C3%B3n_1994%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloramphenicol/Chloramphenicol_Anadn1994_30_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 10:44 UTC</sub>
