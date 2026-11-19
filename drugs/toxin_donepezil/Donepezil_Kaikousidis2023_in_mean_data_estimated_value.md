<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Donepezil&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/&quot;},{&quot;label&quot;:&quot;Kaikousidis_2023 \u00b7 in_mean_data_estimated_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donepezil_Karalis2023_drug_donepezil&quot;,&quot;label&quot;:&quot;Karalis_2023_drug_donepezil&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Karalis2023_drug_donepezil.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Park2025_reference&quot;,&quot;label&quot;:&quot;Park_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Park2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Donepezil_Pyka2024_reference&quot;,&quot;label&quot;:&quot;Pyka_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_donepezil/Donepezil_Pyka2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Donepezil — `Donepezil_Kaikousidis2023_in_mean_data_estimated_value`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> This paper's disposition core is incomplete; v1, V2 and Q have no unit.

<div class="pk-model-meta" hidden drug="Donepezil" model-id="Donepezil_Kaikousidis2023_in_mean_data_estimated_value" status="needs_review" stale="false" population="mice (Donepezil PK after oral solution and intranasal film administration)" measured-compound="Donepezil" parameterization="mechanistic" topology="2C"></div>

## Citation
Kaikousidis C, Papakyriakopoulou P, Dokoumetzidis A, Valsami G. Donepezil Brain and Blood Pharmacokinetic Modeling after Nasal Film and Oral Solution Administration in Mice. Pharmaceutics 15(5):1409 (2023).
  ·  DOI: [10.3390/pharmaceutics15051409](https://doi.org/10.3390/pharmaceutics15051409)

## Population and dosing

**Population:** mice (Donepezil PK after oral solution and intranasal film administration) · condition healthy · n = 3-7 per group.

**Dosing:** 0.1, 4, 10 mg/kg; mg/kg; mg, oral; other; other, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Tlag (min) | tlag | 3.72 | min | 9.97 |
| Mtt (min) | MTT | 60.9 | min | 3.94 |
| ktr (1/min) | ktr | 0.183 | 1/min | 13.50 |
| V1 | V1 | 0.027 |  | 55.15 |
| V2 | V2 | 0.003 |  | 19.28 |
| P1 | equation variable | 0.683 |  | 10.85 |
| P2 | Q | 0.276 |  | 39.13 |
| ka (1/min) | kabs | 0.566 | 1/min | 22.61 |
| k20 (1/min) | ki0 | 0.05 | 1/min | 42.69 |
| CL (L/h) | CL | 10.0 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; v1, V2 and Q have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Jung_2022) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — donepezil: tlag 3.72 min, MTT 60.9 min, ktr 0.183 1/min, V1 0.027, V2 0.003, Q 0.276, kabs 0.566 1/min, ki0 0.05 1/min, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of p1: this record has 0.683, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Tlag (min) | `Q83` · tlag | 3.72 | min | 223.2 | s | min | 9.97 | exact (1) | Kaikousidis_2023_table_3:row1:col1, Kaikousidis_2023_table_3:row13:col1 |
| Mtt (min) | `Q81` · MTT | 60.9 | min | 3654 | s | min | 3.94 | exact (1) | Kaikousidis_2023_table_3:row3:col1, Kaikousidis_2023_table_3:row15:col1 |
| ktr (1/min) | `Q306` · ktr | 0.183 | 1/min | 0.00305 | 1/s | 1/min | 13.50 | exact (1) | Kaikousidis_2023_table_3:row4:col1, Kaikousidis_2023_table_3:row16:col1 |
| V1 | `Q63` · V1 | 0.027 |  |  |  |  | 55.15 | exact (1) | Kaikousidis_2023_table_3:row5:col1, Kaikousidis_2023_table_3:row17:col1 |
| V2 | `Q64` · V2 | 0.003 |  |  |  |  | 19.28 | exact (1) | Kaikousidis_2023_table_3:row6:col1, Kaikousidis_2023_table_3:row18:col1 |
| P1 | `Q900` · equation variable | 0.683 |  | 0.683 |  |  | 10.85 | llm (0.6) | Kaikousidis_2023_table_3:row7:col1, Kaikousidis_2023_table_3:row19:col1 |
| P2 | `Q30` · Q | 0.276 |  |  |  |  | 39.13 | llm (0.6) | Kaikousidis_2023_table_3:row8:col1, Kaikousidis_2023_table_3:row20:col1 |
| ka (1/min) | `Q49` · kabs | 0.566 | 1/min | 0.009433 | 1/s | 1/min | 22.61 | exact (1) | Kaikousidis_2023_table_3:row9:col1, Kaikousidis_2023_table_3:row21:col1 |
| k20 (1/min) | `Q373` · ki0 | 0.05 | 1/min | 0.0008333 | 1/s | 1/min | 42.69 | exact (1) | Kaikousidis_2023_table_3:row10:col1, Kaikousidis_2023_table_3:row22:col1 |
| CL (L/h) | `Q22` · CL | 10.0 | L/h | 2.778e-06 | m3/s | L/h |  | review_gapfill (0.7) | Jung_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Tk0 (min)' — extend the ontology if this is a real PK parameter (source ['Kaikousidis_2023_table_3:row2:col1', 'Kaikousidis_2023_table_3:row14:col1'])
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 351 (char 350)) — units left missing
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1); Q64 (V2); Q30 (P2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Donepezil
- population split: 'in—mean data / estimated value' subgroup of Kaikousidis_2023 (paper reports 4 populations: in—mean data / estimated value, per os blood data / estimated value, per os—mean data / estimated value, total fit—per os and in raw data / estimated value)
- gap-filled Q22 (CL) from Jung_2022's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-15-01409-t004: conflicting_units
- table Kaikousidis_2023_table_1: conflicting_units
- companion parameter table 1 transcribed (15 record(s))
- table Kaikousidis_2023_table_2: conflicting_units
- companion parameter table 2 transcribed (54 record(s))
- table Kaikousidis_2023_table_3: conflicting_units
- companion parameter table 3 transcribed (72 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4
- toxin: the located table(s) gave no kinetic value — 7 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.9 (18/20 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[p1]` | 0.683 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[p2]` | 0.276 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jung_2022:review'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Kaikousidis_2023_table_3:row4:col1', 'Kaikousidis_2023_table_3:row16:col1'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['Kaikousidis_2023_table_3:row10:col1', 'Kaikousidis_2023_table_3:row22:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kaikousidis_2023_table_3:row9:col1', 'Kaikousidis_2023_table_3:row21:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['Kaikousidis_2023_table_3:row3:col1', 'Kaikousidis_2023_table_3:row15:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kaikousidis_2023_table_3:row1:col1', 'Kaikousidis_2023_table_3:row13:col1'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Kaikousidis_2023_table_3:row8:col1', 'Kaikousidis_2023_table_3:row20:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['Kaikousidis_2023_table_3:row5:col1', 'Kaikousidis_2023_table_3:row17:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['Kaikousidis_2023_table_3:row6:col1', 'Kaikousidis_2023_table_3:row18:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10 | ['Jung_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10 L/h | ['Jung_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdonepezil%5D%20Donepezil_Kaikousidis2023_in_mean_data_estimated_value&body=Drug%3A%20donepezil%0ARecord%3A%20Donepezil_Kaikousidis2023_in_mean_data_estimated_value%0APaper%3A%20Kaikousidis_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_donepezil/Donepezil_Kaikousidis2023_in_mean_data_estimated_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:40 UTC</sub>
