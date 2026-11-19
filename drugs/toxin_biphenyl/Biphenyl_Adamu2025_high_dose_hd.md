<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Biphenyl&quot;,&quot;href&quot;:&quot;drugs/toxin_biphenyl/&quot;},{&quot;label&quot;:&quot;Adamu_2025 \u00b7 high_dose_hd&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Biphenyl — `Biphenyl_Adamu2025_high_dose_hd`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> CL/F and V/F have no unit.

<div class="pk-model-meta" hidden drug="Biphenyl" model-id="Biphenyl_Adamu2025_high_dose_hd" status="needs_review" stale="false" population="male Sprague-Dawley rats (n = 2-3 per time point)" measured-compound="[14C]-PCB28 total radioactivity; metabolites detected and profiled" parameterization="apparent" topology="1C"></div>

## Citation
Adamu Y, Brandon NM, Adamcakova-Dodd A, Wang H, Thorne PS. Whole-Body Disposition and Metabolism of [14C]-2,4,4'-Trichlorobiphenyl (PCB28) Following Lung Administration in Rats. Environmental science & technology 59(43):23106–23124 (2025).
  ·  DOI: [10.1021/acs.est.5c07982](https://doi.org/10.1021/acs.est.5c07982)

## Population and dosing

**Population:** male Sprague-Dawley rats (n = 2-3 per time point) · condition healthy, laboratory pulmonary (intratracheal) exposure · age group adult · n = unknown (n = 2-3 per time point per dose group).

**Dosing:** 0.0042, 0.042 mg, intratracheal, single.

**Dosed compound ≠ measured compound:** dosed [14C]-PCB28 (2,4,4'-trichlorobiphenyl), measured [14C]-PCB28 total radioactivity; metabolites detected and profiled.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| serum apparent terminal T 1/2 | t1/2z | 11.7 | h |
| Cl/F | CL/F | 0.35 | mg/h |
| Vz/F | V/F | 5.83 | mg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.067). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F and V/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F and V/F), so that value has no SI equivalent. None of the extracted parameters is biphenyl's own; they describe [14C]-PCB28 total radioactivity; metabolites detected and profiled. Extracted — [14C]-PCB28 total radioactivity; metabolites detected and profiled: t1/2z 11.7 h, CL/F 0.35 mg/h, V/F 5.83 mg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has [14C]-PCB28 (2,4,4'-trichlorobiphenyl), the second reading PCB28 (2,4,4'-trichlorobiphenyl); it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| serum apparent terminal T 1/2 | `Q57` · t1/2z | 11.7 | h | 4.212e+04 | s | h | half_life_rule (0.95) | Adamu_2025:other_prose |
| Cl/F | `Q27` · CL/F | 0.35 | mg/h |  |  | mg/h | exact (1) | Adamu_2025:other_prose |
| Vz/F | `Q76` · V/F | 5.83 | mg |  |  | mg | exact (1) | Adamu_2025:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| tissues | Q414 | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '14C' (body_burden)
- dropped unlinked row (NIL): 'blood/plasma ratio' — extend the ontology if this is a real PK parameter (source ['tbl2:row2:col1', 'Adamu_2025_table_2:row1:col1'])
- dropped unlinked row (NIL): 'lung' — extend the ontology if this is a real PK parameter (source ['tbl2:row3:col1', 'Adamu_2025_table_2:row2:col1'])
- dropped unlinked row (NIL): 'liver' — extend the ontology if this is a real PK parameter (source ['tbl2:row4:col1', 'Adamu_2025_table_2:row3:col1'])
- dropped unlinked row (NIL): 'kidney' — extend the ontology if this is a real PK parameter (source ['tbl2:row5:col1', 'Adamu_2025_table_2:row4:col1'])
- dropped unlinked row (NIL): 'adipose' — extend the ontology if this is a real PK parameter (source ['tbl2:row6:col1', 'Adamu_2025_table_2:row5:col1'])
- dropped unlinked row (NIL): 'skin' — extend the ontology if this is a real PK parameter (source ['tbl2:row7:col1', 'Adamu_2025_table_2:row6:col1'])
- dropped unlinked row (NIL): 'muscle' — extend the ontology if this is a real PK parameter (source ['tbl2:row8:col1', 'Adamu_2025_table_2:row7:col1'])
- dropped unlinked row (NIL): 'heart' — extend the ontology if this is a real PK parameter (source ['tbl2:row9:col1', 'Adamu_2025_table_2:row8:col1'])
- dropped unlinked row (NIL): 'brain' — extend the ontology if this is a real PK parameter (source ['tbl2:row10:col1', 'Adamu_2025_table_2:row9:col1'])
- dropped unlinked row (NIL): 'testis' — extend the ontology if this is a real PK parameter (source ['tbl2:row11:col1', 'Adamu_2025_table_2:row10:col1'])
- dropped unlinked row (NIL): 'spleen' — extend the ontology if this is a real PK parameter (source ['tbl2:row12:col1', 'Adamu_2025_table_2:row11:col1'])
- dropped unlinked row (NIL): 'bladder' — extend the ontology if this is a real PK parameter (source ['tbl2:row13:col1', 'Adamu_2025_table_2:row12:col1'])
- dropped unlinked row (NIL): 'prostate' — extend the ontology if this is a real PK parameter (source ['tbl2:row14:col1', 'Adamu_2025_table_2:row13:col1'])
- dropped unlinked row (NIL): 'bronchi' — extend the ontology if this is a real PK parameter (source ['tbl2:row15:col1', 'Adamu_2025_table_2:row14:col1'])
- dropped unlinked row (NIL): 'trachea' — extend the ontology if this is a real PK parameter (source ['tbl2:row16:col1', 'Adamu_2025_table_2:row15:col1'])
- dropped unlinked row (NIL): 'esophagus' — extend the ontology if this is a real PK parameter (source ['tbl2:row17:col1', 'Adamu_2025_table_2:row16:col1'])
- dropped unlinked row (NIL): 'thyroid' — extend the ontology if this is a real PK parameter (source ['tbl2:row18:col1', 'Adamu_2025_table_2:row17:col1'])
- dropped unlinked row (NIL): 'pancreas' — extend the ontology if this is a real PK parameter (source ['tbl2:row19:col1', 'Adamu_2025_table_2:row18:col1'])
- dropped unlinked row (NIL): 'thymus' — extend the ontology if this is a real PK parameter (source ['tbl2:row20:col1', 'Adamu_2025_table_2:row19:col1'])
- table mostly unlinked (19/20 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('serum apparent terminal T 1/2'=11.7) from results prose — parameter table was unreadable
- salvaged Q27 ('Cl/F'=0.35) from results prose — parameter table was unreadable
- salvaged Q76 ('Vz/F'=5.83) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=[14C]-PCB28 total radioactivity; metabolites detected and profiled
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'high dose (hd)' subgroup of Adamu_2025 (paper reports 2 populations: high dose (hd), low dose (ld))
- molar mass: none found for '[14C]-PCB28 total radioactivity; metabolites detected and profiled' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '[14C]-PCB28 total radioactivity; metabolites detected and profiled', not biphenyl — the review values are the parent's

**Extraction notes:**
- companion parameter table 1 transcribed (8 record(s))
- companion parameter table 2 transcribed (39 record(s))
- table Adamu_2025_table_S1: no_numeric_grid
- companion parameter table S1 transcribed (0 record(s))
- table Adamu_2025_table_S2: no_numeric_grid
- companion parameter table S2 transcribed (0 record(s))
- LLM selected parameter table(s) 1, 2, S1, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.067 (1/15 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['pcb28', '3-oh-pcb28', 'metabolic conversion'], ['pcb28', "3'-oh-pcb28", 'metabolic conversion'], ['pcb28', "4'-oh-pcb25", 'metabolic conversion'], ['pcb28', "4'-oh-pcb31", 'metabolic conversion'], ['pcb28', '5-oh-pcb28', 'metabolic conversion']] | mismatch |
| `gpt-oss:120b` | `parameters[blood/plasma ratio]` |  | 0.89 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` |  | 0.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 0.35 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` |  | 5.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lung]` |  | 8.99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[serum apparent terminal t 1/2]` | 11.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[serum apparent terminal t1/2]` |  | 11.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[skin]` |  | 53.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tissues]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vz/f]` |  | 5.83 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vz/f]` | 5.83 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | [14C]-PCB28 (2,4,4'-trichlorobiphenyl) | PCB28 (2,4,4'-trichlorobiphenyl) | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | [14C]-PCB28 total radioactivity; metabolites detected and profiled | PCB28 (parent compound) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 11.7 | 11.55 | 0.9868 | 0.25 | reported t½β |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | mg/h |  |  | ['Adamu_2025:other_prose'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | mg |  |  | ['Adamu_2025:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbiphenyl%5D%20Biphenyl_Adamu2025_high_dose_hd&body=Drug%3A%20biphenyl%0ARecord%3A%20Biphenyl_Adamu2025_high_dose_hd%0APaper%3A%20Adamu_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_biphenyl/Biphenyl_Adamu2025_high_dose_hd%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 19:37 UTC</sub>
