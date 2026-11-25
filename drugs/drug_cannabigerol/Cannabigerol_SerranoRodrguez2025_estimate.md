<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cannabigerol&quot;,&quot;href&quot;:&quot;drugs/drug_cannabigerol/&quot;},{&quot;label&quot;:&quot;Serrano-Rodr\u00edguez_2025 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cannabigerol — `Cannabigerol_SerranoRodrguez2025_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> Kel has no unit.

<div class="pk-model-meta" hidden drug="Cannabigerol" model-id="Cannabigerol_SerranoRodrguez2025_estimate" status="needs_review" stale="false" population="healthy adult horses" measured-compound="cannabigerol" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Serrano-Rodríguez JM, Miraz R, Saitua A, Díez de Castro E, Ledesma-Escobar C, Ferreiro-Vera C et al. Metabolism, pharmacokinetics, and bioavailability of cannabigerol in horses following intravenous and oral administration with micellar and oil formulations. Frontiers in veterinary science 12:1688214 (2025).
  ·  DOI: [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult · n = 8.

**Dosing:** 70, 700 mg, iv, oral, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 0.28 |  |
| ka (1/h) | kabs | 0.99 | 1/h |
| β | kel | 1.59 |  |
| Cl (l/h/kg) | CL | 0.31 | l/h/kg |
| Vc (L/kg) | V1 | 0.70 | L/kg |
| Q (L/h/kg) | Q | 154.5 | L/h/kg |
| Vp (L/kg) | V2 | 36.12 | L/kg |
| Vm (L/kg) | V | 0.0047 | L/kg |
| Fm | fm | 0.29 |  |
| Clm (L/h/kg) | CL | 0.41 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.611). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kel has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — cannabigerol: Fab 0.28, kabs 0.99 1/h, kel 1.59, CL 0.31 l/h/kg, V1 0.7 L/kg, Q 154 L/h/kg, V2 36.1 L/kg; cannabigerol-glucuronide: V 0.0047 L/kg, fm 0.29, CL 0.41 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cannabigerol → cannabigerol-glucuronide (metabolism), the second reading cannabigerol → cannabigerol glucuronide (metabolism); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.28 |  |  |  |  | exact (1) | tab1:row1:col1, tab1:footnote |
| ka (1/h) | `Q49` · kabs | 0.99 | 1/h | 0.000275 | 1/s | 1/h | exact (1) | tab1:row2:col1, tab1:row2:col5 |
| β | `Q47` · kel | 1.59 |  |  |  |  | exact (1) | tab1:row3:col1, tab1:row3:col5, tab1:footnote |
| Cl (l/h/kg) | `Q22` · CL | 0.31 | l/h/kg | 6.028e-06 | m3/s | l/(h·kg) | exact (1) | tab1:row4:col1, tab1:row4:col5 |
| Vc (L/kg) | `Q63` · V1 | 0.70 | L/kg | 0.049 | m3 | l/kg | exact (1) | tab1:row5:col1, tab1:row5:col5 |
| Q (L/h/kg) | `Q30` · Q | 154.5 | L/h/kg | 0.003004 | m3/s | l/(h·kg) | exact (1) | tab1:row6:col1 |
| Vp (L/kg) | `Q64` · V2 | 36.12 | L/kg | 2.528 | m3 | l/kg | exact (1) | tab1:row7:col1 |
| Vm (L/kg) | `Q61` · V | 0.0047 | L/kg | 0.000329 | m3 | l/kg | exact (1) | tab1:row8:col1 |
| Fm | `Q45` · fm | 0.29 |  | 0.29 |  |  | exact (1) | tab1:row9:col1, tab1:row9:col5, tab1:footnote |
| Clm (L/h/kg) | `Q22` · CL | 0.41 | L/h/kg | 7.972e-06 | m3/s | l/(h·kg) | exact (1) | tab1:row10:col1, tab1:row10:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'ka (1/h)'; source reconciliation required
- table representations disagree for 'β'; source reconciliation required
- table representations disagree for 'Cl (l/h/kg)'; source reconciliation required
- table representations disagree for 'Vc (L/kg)'; source reconciliation required
- table representations disagree for 'Q (L/h/kg)'; source reconciliation required
- table representations disagree for 'Vp (L/kg)'; source reconciliation required
- table representations disagree for 'Vm (L/kg)'; source reconciliation required
- table representations disagree for 'Fm'; source reconciliation required
- table representations disagree for 'Clm (L/h/kg)'; source reconciliation required
- dropped value-less row: 'ka'
- dropped value-less row: 'Vc'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Q'
- dropped value-less row: 'Vp'
- dropped value-less row: 'Clm'
- dropped value-less row: 'Vm'
- dropped value-less row: 'Covka_formulation'
- dropped value-less row: 'Covβ_formulation'
- dropped value-less row: 'b1'
- dropped value-less row: 'b2'
- metabolite volume: 'Vm (L/kg)' Q63→Q61 for cannabigerol-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cannabigerol
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [1] (site presystemic: 'The oral bioavailability was estimated at 28% between formulations, and an extensive presystemic metabolism was obtained')
- status held at "Needs review" — not promoted
- population split: 'estimate' subgroup of Serrano-Rodríguez_2025 (paper reports 5 populations: cbg / estimate, cbg-g / estimate, estimate, iv formulation of cbg at 1.0 mg/kg / cbg, iv formulation of cbg at 1.0 mg/kg / cbg-g)
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 30 linked by role; re-tagged parent→cannabigerol-glucuronide ×7, cannabigerol→parent ×9, cannabigerol→cannabigerol-glucuronide ×3
- molar mass: no plausible PubChem entry for 'cannabigerol-glucuronide' ('cannabigerol glucuronide') — left in mass units
- molar mass: none found for 'cannabigerol-glucuronide' — its concentrations stay mass-only

**Extraction notes:**
- table tab1: representations disagree; selected evidence retained, not merged
- table Serrano-Rodríguez_2025_table_2: ragged_grid
- companion parameter table 2 transcribed (20 record(s))
- companion parameter table 3 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.611 (11/18 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cannabigerol', 'cannabigerol-glucuronide', 'metabolism']] | [['cannabigerol', 'cannabigerol glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[clm]` |  | 0.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm]` | 0.41 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` |  | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm]` |  | 0.0047 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm]` | 0.0047 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab1:row4:col1', 'tab1:row4:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab1:row10:col1', 'tab1:row10:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab1:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab1:row2:col1', 'tab1:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab1:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab1:row5:col1', 'tab1:row5:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab1:row7:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['tab1:row3:col1', 'tab1:row3:col5', 'tab1:footnote'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.7 L/h | ['tab1:row4:col1', 'tab1:row4:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.7 L/h | ['tab1:row10:col1', 'tab1:row10:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.329 L | ['tab1:row8:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 49 L | ['tab1:row5:col1', 'tab1:row5:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.53e+03 L | ['tab1:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabigerol%5D%20Cannabigerol_SerranoRodrguez2025_estimate&body=Drug%3A%20cannabigerol%0ARecord%3A%20Cannabigerol_SerranoRodrguez2025_estimate%0APaper%3A%20Serrano-Rodr%C3%ADguez_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-25 05:34 UTC</sub>
