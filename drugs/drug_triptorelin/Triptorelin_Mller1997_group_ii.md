<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;triptorelin&quot;,&quot;href&quot;:&quot;drugs/drug_triptorelin/&quot;},{&quot;label&quot;:&quot;M\u00fcller_1997 \u00b7 group_ii&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# triptorelin — `Triptorelin_Mller1997_group_ii`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="triptorelin" model-id="Triptorelin_Mller1997_group_ii" status="needs_review" stale="false" population="healthy males and males with renal or hepatic insufficiency" measured-compound="triptorelin" parameterization="mechanistic" topology="1C"></div>

## Citation
Müller FO, Terblanchè J, Schall R, van Zyl Smit R, Tucker T, Marais K et al. Pharmacokinetics of triptorelin after intravenous bolus administration in healthy males and in males with renal or hepatic insufficiency. British journal of clinical pharmacology 44(4):335–341 (1997).
  ·  DOI: [10.1046/j.1365-2125.1997.t01-1-00592.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00592.x)

## Population and dosing

**Population:** healthy males and males with renal or hepatic insufficiency · age group adult · n = condition.

**Dosing:** 0.5 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed triptorelin acetate, measured triptorelin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2, z (h) | t1/2z | 220 | h |
| t1/2, x (h) | t1/2β | 50 | h |
| Cmax (ng ml -1 ) | Cmax | 46.6 | ng ml -1 |
| MRT (h) | MRT | 6.65 | h |
| Vss (l) | Vss | 45.2 | l |
| Ae ur (0-4 h) (mg ) | Ae | 44.0 | mg |
| CL creat (0-24 h) ## (ml min-1 ) | CLnorm | 35.5 | ml min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax and Ae ), so that value has no SI equivalent. Extracted — triptorelin: t1/2z 220 h, t1/2β 50 h, Cmax 46.6 ng ml -1, MRT 6.65 h, Vss 45.2 l, Ae 44 mg, CLnorm 35.5 ml min-1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2, z (h) | `Q57` · t1/2z | 220 | h | 7.92e+05 | s | h | llm (0.6) | tab_2:row4:col4, tab_2:row4:col5, tab_2:row4:col6, Müller_1997_table_2:row7:col4 |
| t1/2, x (h) | `Q60` · t1/2β | 50 | h | 1.8e+05 | s | h | llm_corrected (0.6) | tab_2:row6:col4, tab_2:row6:col5, tab_2:row6:col6 |
| Cmax (ng ml -1 ) | `Q32` · Cmax | 46.6 | ng ml -1 |  |  | ng/ml | exact (1) | Müller_1997_table_2:row0:col2, Müller_1997_table_2:row0:col4 |
| MRT (h) | `Q53` · MRT | 6.65 | h | 2.394e+04 | s | h | exact (1) | Müller_1997_table_2:row18:col4 |
| Vss (l) | `Q65` · Vss | 45.2 | l | 0.0452 | m3 | l | exact (1) | Müller_1997_table_2:row21:col4 |
| Ae ur (0-4 h) (mg ) | `Q91` · Ae | 44.0 | mg |  |  | mg | llm_confirmed (0.6) | Müller_1997_table_4:row1:col2 |
| CL creat (0-24 h) ## (ml min-1 ) | `Q354` · CLnorm | 35.5 | ml min-1 | 5.917e-07 | m3/s | ml/min | llm_corrected (0.6) | Müller_1997_table_4:row18:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Variable | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('t 1/2, y (h)', value '88') — already have one for this compound
- dropped duplicate Q57 ('t1/2, y (h)', value '0.82') — already have one for this compound
- dropped duplicate Q57 ('t 1/2, x (h)', value '0.07') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-8 h) (mg )', value '60.1') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-12 h) (mg)', value '65.2') — already have one for this compound
- dropped duplicate Q91 ('Aeur(0-24 h) (mg)', value '78.4') — already have one for this compound
- dropped duplicate Q91 ('Ae ur (0-24 h) # (%)', value '17.4') — already have one for this compound
- dropped value-less row: "Estimate of 'test/reference' mean ratio from analysis of variance of log-transformed data"
- dropped value-less row: ": 90% Conventional confidence interval for the 'test/ reference' mean ratio analysis of variance of log-transformed data"
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=triptorelin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'group ii' subgroup of Müller_1997 (paper reports 4 populations: group i, group ii, group iii, group iv)

**Extraction notes:**
- companion parameter table 2 transcribed (24 record(s))
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Müller_1997_table_2:row0:col2', 'Müller_1997_table_2:row0:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Müller_1997_table_4:row18:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Müller_1997_table_2:row18:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row4:col6', 'Müller_1997_table_2:row7:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Müller_1997_table_2:row21:col4'] |
| C5_dimension_Q91 | pass | [mass] |  | ['Müller_1997_table_4:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 45.2 L | ['Müller_1997_table_2:row21:col4'] |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriptorelin%5D%20Triptorelin_Mller1997_group_ii&body=Drug%3A%20triptorelin%0ARecord%3A%20Triptorelin_Mller1997_group_ii%0APaper%3A%20M%C3%BCller_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triptorelin/Triptorelin_Mller1997_group_ii%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:08 UTC</sub>
