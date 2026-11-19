<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorescein&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorescein/&quot;},{&quot;label&quot;:&quot;Monti_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorescein_Srinivas2018_reference&quot;,&quot;label&quot;:&quot;Srinivas_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorescein/Fluorescein_Srinivas2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorescein_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorescein/Fluorescein_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluorescein — `Fluorescein_Monti2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

> This paper's disposition core is incomplete; qb and Vmax have no unit (+1 more).

<div class="pk-model-meta" hidden drug="Fluorescein" model-id="Fluorescein_Monti2023_reference" status="needs_review" stale="false" population="rats" measured-compound="fluorescein glucuronide" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Monti C, Audi SH, Womack J, Hong SK, Yang Y, Kim J et al. Physiologically-Based Pharmacokinetic Modeling of Blood Clearance of Liver Fluorescent Markers for the Assessment of the Degree of Hepatic Ischemia-Reperfusion Injury. Annual International Conference of the IEEE Engineering in Medicine and Biology Society. IEEE Engineering in Medicine and Biology Society. Annual International Conference 2023:1–6 (2023).
  ·  DOI: [10.1109/EMBC40787.2023.10340273](https://doi.org/10.1109/EMBC40787.2023.10340273)

## Population and dosing

**Population:** rats · condition hepatic ischemia-reperfusion injury assessment · age group adult.

**Dosing:** 140 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed sodium fluorescein, measured fluorescein glucuronide.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k1 | kabs | 1.36 | min-1 |
| k2 | equation variable | 0.12 | min-1 |
| n3 | n_transit | 3.00 | Unitless |
| nSFG | FG | 1.9 | Unitless |
| F | Fab | 11.80 | mL/min |
| V_H | VH | 9.16 | mL |
| F_B | Qb | 0.02 | mL/min^-1 |
| V_max,1 | Vmax | 3.12 |  |
| CL | CL | 79.18 | mL/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; qb and Vmax have no unit (+1 more).**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Song_2022) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — fluorescein: kabs 1.36 min-1, n_transit 3 Unitless, FG 1.9 Unitless, Fab 11.8 mL/min, VH 9.16 mL, Qb 0.02 mL/min^-1, Vmax 3.12; fluorescein glucuronide: CL 79.2 mL/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has fluorescein glucuronide, the second reading fluorescein; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k1 | `Q49` · kabs | 1.36 | min-1 | 0.02267 | 1/s | 1/min | llm (0.6) | Monti_2023_table_2:row1:col1 |
| k2 | `Q900` · equation variable | 0.12 | min-1 |  |  | 1/min | llm (0.6) | Monti_2023_table_2:row3:col1 |
| n3 | `Q311` · n_transit | 3.00 | Unitless |  |  | unitless | llm (0.6) | Monti_2023_table_2:row7:col1 |
| nSFG | `Q41` · FG | 1.9 | Unitless |  |  | unitless | llm (0.6) | Monti_2023_table_2:row10:col1 |
| F | `Q40` · Fab | 11.80 | mL/min |  |  |  | exact (1) | Monti_2023_table_3:row2:col1 |
| V_H | `Q368` · VH | 9.16 | mL | 9.16e-06 | m3 | ml | exact (1) | Monti_2023_table_3:row4:col1 |
| F_B | `Q54` · Qb | 0.02 | mL/min^-1 |  |  | min·ml | llm (0.6) | Monti_2023_table_3:row8:col1 |
| V_max,1 | `Q66` · Vmax | 3.12 |  |  |  |  | llm_confirmed (0.6) | Monti_2023_table_3:row10:col1 |
| CL | `Q22` · CL | 79.18 | mL/h | 2.199e-08 | m3/s | L/h | review_gapfill (0.7) | Song_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V_B | Q61 | llm |
| K_m,1 | Q1 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'K_m,1': [{'unit': 'mg/mL', 'source': 'Monti_2023_table_3:row3:col2', 'scope': 'unit_column'}, {'unit': '1', 'source': 'Monti_2023_table_3:row3:col0', 'scope': 'label'}]
- conflicting source units for 'K_m,2': [{'unit': 'mg/mL', 'source': 'Monti_2023_table_3:row5:col2', 'scope': 'unit_column'}, {'unit': '2', 'source': 'Monti_2023_table_3:row5:col0', 'scope': 'label'}]
- conflicting source units for 'K_m,3': [{'unit': 'mg/mL', 'source': 'Monti_2023_table_3:row6:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'Monti_2023_table_3:row6:col0', 'scope': 'label'}]
- conflicting source units for 'V_max,1': [{'unit': 'mg/min', 'source': 'Monti_2023_table_3:row10:col2', 'scope': 'unit_column'}, {'unit': '1', 'source': 'Monti_2023_table_3:row10:col0', 'scope': 'label'}]
- conflicting source units for 'V_max,2': [{'unit': 'mg/min', 'source': 'Monti_2023_table_3:row11:col2', 'scope': 'unit_column'}, {'unit': '2', 'source': 'Monti_2023_table_3:row11:col0', 'scope': 'label'}]
- conflicting source units for 'V_max,3': [{'unit': 'mg/min', 'source': 'Monti_2023_table_3:row12:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'Monti_2023_table_3:row12:col0', 'scope': 'label'}]
- unit_dimension_unknown: 'Unitless' (kabs)
- dropped duplicate Q49 ('λmax', value '9.00') — already have one for this compound
- unit_dimension_unknown: 'Unitless' (n_transit)
- dropped duplicate Q900 ('fmax', value '0.95') — already have one for this compound
- unit_dimension_unknown: 'Unitless' (FG)
- dropped duplicate Q900 ('t50,SFG', value '10.03') — already have one for this compound
- dropped duplicate Q1 ('K_m,2', value None) — already have one for this compound
- dropped duplicate Q1 ('K_m,3', value None) — already have one for this compound
- unit_dimension_unknown: 'mL/min^-1' (Qb)
- dropped duplicate Q66 ('V_max,2', value '4.29') — already have one for this compound
- dropped duplicate Q66 ('V_max,3', value None) — already have one for this compound
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 459)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluorescein glucuronide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/17 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'fluorescein glucuronide (SFG)' — its concentrations stay mass-only
- molar mass: none found for 'fluorescein glucuronide' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Song_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- table Monti_2023_table_2: unparsed_numeric_cell
- table Monti_2023_table_3: conflicting_units
- toxin: the located table(s) gave no kinetic value — 5 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['fluorescein', 'fluorescein glucuronide (sfg)', 'hepatic glucuronidation']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[f_b].parameter_id` | Q54 | Q30 | mismatch |
| `gpt-oss:120b` | `parameters[k1]` | 1.36 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k2]` | 0.12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[nsfg]` | 1.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t50,sfg]` |  | 10.03 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | fluorescein glucuronide | fluorescein | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Song_2022:review'] |
| C5_dimension_Q368 | pass | [length] ** 3 |  | ['Monti_2023_table_3:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Monti_2023_table_2:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Monti_2023_table_3:row1:col1', 'Monti_2023_table_3:row7:col1'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] | mL/min^-1 | ['Monti_2023_table_3:row8:col1'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['Monti_2023_table_3:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 79.18 | ['Song_2022:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0792 L/h | ['Song_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorescein%5D%20Fluorescein_Monti2023_reference&body=Drug%3A%20fluorescein%0ARecord%3A%20Fluorescein_Monti2023_reference%0APaper%3A%20Monti_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorescein/Fluorescein_Monti2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 06:23 UTC</sub>
