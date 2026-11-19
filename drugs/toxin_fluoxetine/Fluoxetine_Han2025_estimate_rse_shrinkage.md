<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluoxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/&quot;},{&quot;label&quot;:&quot;Han_2025 \u00b7 estimate_rse_shrinkage&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Bolo2000_reference&quot;,&quot;label&quot;:&quot;Bolo_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Bolo2000_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Moraes1999_reference&quot;,&quot;label&quot;:&quot;Moraes_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Moraes1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_Eugene2021_reference&quot;,&quot;label&quot;:&quot;Eugene_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_Eugene2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluoxetine_SagahnAza2021_reference&quot;,&quot;label&quot;:&quot;Sagah\u00f3n-Az\u00faa_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluoxetine/Fluoxetine_SagahnAza2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluoxetine — `Fluoxetine_Han2025_estimate_rse_shrinkage`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL, t1/2z and V have no unit.

<div class="pk-model-meta" hidden drug="Fluoxetine" model-id="Fluoxetine_Han2025_estimate_rse_shrinkage" status="needs_review" stale="false" population="Chinese psychiatric patients (adults and adolescents)" measured-compound="Fluoxetine (with active metabolite norfluoxetine)" parameterization="apparent" topology="1C"></div>

## Citation
Han B, Xu N, Ma C, Ju G, Xi X, Qian C et al. Bridging Literature and Real-World Evidence: External Evaluation and Development of Fluoxetine Population Pharmacokinetics Model. Pharmaceutics 17(12):1516 (2025).
  ·  DOI: [10.3390/pharmaceutics17121516](https://doi.org/10.3390/pharmaceutics17121516)

## Population and dosing

**Population:** Chinese psychiatric patients (adults and adolescents) · condition psychiatric patients on chronic oral fluoxetine therapy · age group mixed · n = 198.

**Dosed compound ≠ measured compound:** dosed Fluoxetine, measured Fluoxetine (with active metabolite norfluoxetine).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 2.91 | L/h | 23 |
| 24.9 (38%) | CL | 22.76 | 38% |  |
| 31.6 (27%) [10%] | t1/2z | 30.67 | 10% |  |
| 20.9 (41%) [48%] | V | 21.01 | 48% |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL, t1/2z and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL, t1/2z and V), so that value has no SI equivalent. Extracted — fluoxetine: CL/F 2.91 L/h, CL 22.8 38%, t1/2z 30.7 10%, V 21 48%.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has Fluoxetine (with active metabolite norfluoxetine), the second reading Fluoxetine; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 2.91 | L/h | 8.083e-07 | m3/s | l/h | 23 | exact (1) | pharmaceutics-17-01516-t004:row1:col2, pharmaceutics-17-01516-t004:row9:col2 |
| 24.9 (38%) | `Q22` · CL | 22.76 | 38% |  |  | 38% |  | llm (0.6) | pharmaceutics-17-01516-t004:row3:col2 |
| 31.6 (27%) [10%] | `Q57` · t1/2z | 30.67 | 10% |  |  | 10% |  | llm (0.6) | pharmaceutics-17-01516-t004:row6:col2 |
| 20.9 (41%) [48%] | `Q61` · V | 21.01 | 48% |  |  | 48% |  | llm (0.6) | pharmaceutics-17-01516-t004:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'CL/F, L/h'; source reconciliation required
- table representations disagree for '16.50 (44%)'; source reconciliation required
- table representations disagree for '24.9 (38%)'; source reconciliation required
- table representations disagree for '31.6 (27%) [10%]'; source reconciliation required
- table representations disagree for '34.1 (12%) [20.8%]'; source reconciliation required
- table representations disagree for '14.9 (49%) [20.8%]'; source reconciliation required
- table representations disagree for '1.52 (57%)'; source reconciliation required
- table representations disagree for '20.9 (41%) [48%]'; source reconciliation required
- table representations disagree for '30.5 (16%) [37.3%]'; source reconciliation required
- table representations disagree for '22.9 (31%) [37.3%]'; source reconciliation required
- routed '16.50 (44%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: '38%' (CL)
- unit_dimension_unknown: '10%' (t1/2z)
- unit_dimension_unknown: '20.8%' (t1/2z)
- dropped duplicate Q57 ('34.1 (12%) [20.8%]', value '34.64') — already have one for this compound
- unit_dimension_unknown: '20.8%' (CL)
- dropped duplicate Q22 ('14.9 (49%) [20.8%]', value '14.84') — already have one for this compound
- dropped unlinked row (NIL): '1.52 (57%)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-01516-t004:row10:col2'])
- unit_dimension_unknown: '48%' (V)
- unit_dimension_unknown: '37.3%' (t1/2z)
- dropped duplicate Q57 ('30.5 (16%) [37.3%]', value '29.38') — already have one for this compound
- dropped unlinked row (NIL): '22.9 (31%) [37.3%]' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-17-01516-t004:row13:col2'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['pharmaceutics-17-01516-t004:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Fluoxetine (with active metabolite norfluoxetine)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- population split: 'estimate (rse%) [shrinkage]' subgroup of Han_2025 (paper reports 2 populations: estimate (rse%) [shrinkage], software(algorithm))
- row roles (LLM): model_class=compartmental; 0/16 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Norfluoxetine' — its concentrations stay mass-only
- molar mass: none found for 'Fluoxetine (with active metabolite norfluoxetine)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Fluoxetine (with active metabolite norfluoxetine)', not fluoxetine — the review values are the parent's

**Extraction notes:**
- table pharmaceutics-17-01516-t004: ragged_grid
- table pharmaceutics-17-01516-t004: representations disagree; selected evidence retained, not merged
- table Han_2025_table_2: conflicting_units
- table Han_2025_table_2: ragged_grid
- table Han_2025_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (12 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 4 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[1.52]` |  | 1.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[14.9 (49%) [20.8%]]` |  | 14.84 | only_one_extracted |
| `gpt-oss:120b` | `parameters[16.50]` |  | 16.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[20.9 (41%) [48%]]` | 21.01 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[24.9].parameter_id` | Q22 | Q87 | mismatch |
| `gpt-oss:120b` | `parameters[31.6 (27%) [10%]]` | 30.67 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[34.1 (12%) [20.8%]]` |  | 34.64 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f].rse_percent` | 23 | 20 | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].value` | 2.91 | 3.24 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Fluoxetine (with active metabolite norfluoxetine) | Fluoxetine | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-17-01516-t004:row1:col2', 'pharmaceutics-17-01516-t004:row9:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | 38% | ['pharmaceutics-17-01516-t004:row3:col2'] |
| C5_unit_missing_Q57 | fail | [time] | 10% | ['pharmaceutics-17-01516-t004:row6:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | 48% | ['pharmaceutics-17-01516-t004:row11:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.91 L/h | ['pharmaceutics-17-01516-t004:row1:col2', 'pharmaceutics-17-01516-t004:row9:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluoxetine%5D%20Fluoxetine_Han2025_estimate_rse_shrinkage&body=Drug%3A%20fluoxetine%0ARecord%3A%20Fluoxetine_Han2025_estimate_rse_shrinkage%0APaper%3A%20Han_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluoxetine/Fluoxetine_Han2025_estimate_rse_shrinkage%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:29 UTC</sub>
