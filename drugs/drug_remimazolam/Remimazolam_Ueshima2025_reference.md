<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;remimazolam&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/&quot;},{&quot;label&quot;:&quot;Ueshima_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remimazolam_Chen2025v2_reference&quot;,&quot;label&quot;:&quot;Chen_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025_base_model&quot;,&quot;label&quot;:&quot;Chen_2025_base_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_base_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Chen2025_median_by_1_000_bootstraps&quot;,&quot;label&quot;:&quot;Chen_2025_median_by_1_000_bootstraps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Chen2025_median_by_1_000_bootstraps.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_Schttler2020_reference&quot;,&quot;label&quot;:&quot;Sch\u00fcttler_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_Schttler2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remimazolam_de2025_vellinga_38&quot;,&quot;label&quot;:&quot;de_2025_vellinga_38&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/Remimazolam_de2025_vellinga_38.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Chen_2024_BIS&quot;,&quot;label&quot;:&quot;Chen_2024 \u00b7 BIS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/pd_Chen_2024_BIS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Chen_2025_2_BIS&quot;,&quot;label&quot;:&quot;Chen_2025_2 \u00b7 BIS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/pd_Chen_2025_2_BIS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Oh_2025_MBP&quot;,&quot;label&quot;:&quot;Oh_2025 \u00b7 MBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_remimazolam/pd_Oh_2025_MBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remimazolam — `Remimazolam_Ueshima2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for remimazolam's clearance; t3_param_coverage (+3 more).

<div class="pk-model-meta" hidden drug="remimazolam" model-id="Remimazolam_Ueshima2025_reference" status="model_quarantined" stale="false" population="older Japanese adults" measured-compound="remimazolam" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ueshima S, Nagahara S, Nakaya K, Kawamura M, Hira D, Matsuura Y et al. Pharmacokinetic and pharmacodynamic characterization of remimazolam in older Japanese adults who underwent general anesthesia at early stage of infusion. Scientific reports 15(1):24979 (2025).
  ·  DOI: [10.1038/s41598-025-10015-z](https://doi.org/10.1038/s41598-025-10015-z)

## Population and dosing

**Population:** older Japanese adults · condition general anesthesia · age group mixed.

**Dosing:** 1, 12 mg/kg/h, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θV1 (L) | V1 | 6.38 | L |
| θV2 (L) | V2 | 4.11 | L |
| θV3 (L) | V3 | 15.5 | L |
| θQ2 (L/min) | Q | 1.04 | L/min |
| θQ3 (L/min) | Q2 | 0.19 | L/min |
| θCL | θCL | 1.38 | L/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for remimazolam's clearance; t3_param_coverage (+3 more).**

The model was built, but remimazolam's clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — remimazolam: V1 6.38 L, V2 4.11 L, V3 15.5 L, Q 1.04 L/min, Q2 0.19 L/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[θv1].value`: this record has 6.38, the second reading 16.8; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θV1 (L) | `Q63` · V1 | 6.38 | L | 0.00638 | m3 | l | exact (1) | Ueshima_2025_table_p5_2:row3:col1, Ueshima_2025_table_p5_2:row3:col2 |
| θV2 (L) | `Q64` · V2 | 4.11 | L | 0.00411 | m3 | l | exact (1) | Ueshima_2025_table_p5_2:row5:col1, Ueshima_2025_table_p5_2:row5:col2 |
| θV3 (L) | `Q77` · V3 | 15.5 | L | 0.0155 | m3 | l | exact (1) | Ueshima_2025_table_p5_2:row7:col1 |
| θQ2 (L/min) | `Q30` · Q | 1.04 | L/min | 1.733e-05 | m3/s | l/min | exact (1) | Ueshima_2025_table_p5_2:row9:col1 |
| θQ3 (L/min) | `Q99` · Q2 | 0.19 | L/min | 3.167e-06 | m3/s | l/min | exact (1) | Ueshima_2025_table_p5_2:row11:col1 |
| θCL | `Q900` · θCL | 1.38 | L/min | 2.3e-05 | m3/s |  |  | Ueshima_2025_table_p5_2:row1:col1, Ueshima_2025_table_p5_2:row1:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θCL (L/min) | Q22 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ηCL (%)' routed out of structural estimates ('Inter-individual variabilities')
- table section iiv: 'ηV1 (%)' routed out of structural estimates ('Inter-individual variabilities')
- table section residual_error: 'εR (%)' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remimazolam
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- bound model equation to Q22 (CL): CL = θCL ⋅ (BW/60.4)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'θCL (L/min)'; equation kept verbatim
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 9 linked by role; re-tagged remimazolam→parent ×15
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'CNS7054' (LLM) — left in mass units
- molar mass: none found for 'CNS7054' — its concentrations stay mass-only

**Extraction notes:**
- table Ueshima_2025_table_3: missing_label
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CL = θCL ⋅ (BW/60.4)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θcl].value` | 1.38 | 9.49 | mismatch |
| `gpt-oss-120b` | `parameters[θv1].value` | 6.38 | 16.8 | mismatch |
| `gpt-oss-120b` | `parameters[θv2].value` | 4.11 | 21.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ueshima_2025_table_p5_2:row1:col1', 'Ueshima_2025_table_p5_2:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ueshima_2025_table_p5_2:row9:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ueshima_2025_table_p5_2:row3:col1', 'Ueshima_2025_table_p5_2:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ueshima_2025_table_p5_2:row5:col1', 'Ueshima_2025_table_p5_2:row5:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Ueshima_2025_table_p5_2:row7:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Ueshima_2025_table_p5_2:row11:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.38 L | ['Ueshima_2025_table_p5_2:row3:col1', 'Ueshima_2025_table_p5_2:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.11 L | ['Ueshima_2025_table_p5_2:row5:col1', 'Ueshima_2025_table_p5_2:row5:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 3 covered |  | neither emitted nor in defaulted[]: ['V2'] |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.727 (8 of 11 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.727 | cross-check contradicted by a second reader: verdict disputed; agreement 0.727 (8 of 11 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremimazolam%5D%20Remimazolam_Ueshima2025_reference&body=Drug%3A%20remimazolam%0ARecord%3A%20Remimazolam_Ueshima2025_reference%0APaper%3A%20Ueshima_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remimazolam/Remimazolam_Ueshima2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 16:35 UTC</sub>
