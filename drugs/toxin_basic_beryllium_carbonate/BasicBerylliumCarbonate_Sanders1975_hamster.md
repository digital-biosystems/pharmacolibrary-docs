<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Basic beryllium carbonate&quot;,&quot;href&quot;:&quot;drugs/toxin_basic_beryllium_carbonate/&quot;},{&quot;label&quot;:&quot;Sanders_1975 \u00b7 hamster&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BasicBerylliumCarbonate_Finch1990_reference&quot;,&quot;label&quot;:&quot;Finch_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_basic_beryllium_carbonate/BasicBerylliumCarbonate_Finch1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Basic beryllium carbonate — `BasicBerylliumCarbonate_Sanders1975_hamster`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume; cL has no unit.

<div class="pk-model-meta" hidden drug="Basic beryllium carbonate" model-id="BasicBerylliumCarbonate_Sanders1975_hamster" status="needs_review" stale="false" population="male and female Wistar rats and Syrian golden hamsters" measured-compound="Beryllium" parameterization="mechanistic" topology="1C"></div>

## Citation
Sanders CL, Cannon WC, Powers GJ, Adee RR, Meier DM. Toxicology of high-fired beryllium oxide inhaled by rodents. II. Metabolism and early effects. Archives of environmental health 30(11):546–551 (1975).
  ·  DOI: [10.1080/00039896.1975.10666773](https://doi.org/10.1080/00039896.1975.10666773)

## Population and dosing

**Population:** male and female Wistar rats and Syrian golden hamsters · condition occupational exposure · age group adult · n = 685.

**Dosing:** 0.012, 0.16 mg, inhaled, single.

**Dosed compound ≠ measured compound:** dosed Beryllium oxide, measured Beryllium.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Alveolar clearance from day 4 to 63 | CL | 38.0 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is basic beryllium carbonate's own; they describe Beryllium oxide. Extracted — Beryllium oxide: CL 38.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Alveolar clearance from day 4 to 63 | `Q22` · CL | 38.0 |  | llm_confirmed (0.6) | Sanders_1975_table_1:row5:col3, Sanders_1975_table_1:row5:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'hamster' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Total lung deposition, µg Be'; source reconciliation required
- table representations disagree for 'Tracheobronchial deposition, all excreta from days 0 to 3'; source reconciliation required
- table representations disagree for 'Alveolar deposition'; source reconciliation required
- table representations disagree for 'Alveolar clearance from day 4 to 63'; source reconciliation required
- table representations disagree for 'Lung at day 63'; source reconciliation required
- dropped unlinked row (NIL): 'Total lung deposition, µg Be' — extend the ontology if this is a real PK parameter (source ['Sanders_1975_table_1:row0:col3', 'Sanders_1975_table_1:row0:col4'])
- dropped unlinked row (NIL): 'Tracheobronchial deposition, all excreta from days 0 to 3' — extend the ontology if this is a real PK parameter (source ['Sanders_1975_table_1:row2:col3', 'Sanders_1975_table_1:row2:col4'])
- dropped unlinked row (NIL): 'Alveolar deposition' — extend the ontology if this is a real PK parameter (source ['Sanders_1975_table_1:row3:col3', 'Sanders_1975_table_1:row3:col4'])
- dropped unlinked row (NIL): 'Lung at day 63' — extend the ontology if this is a real PK parameter (source ['Sanders_1975_table_1:row6:col3', 'Sanders_1975_table_1:row6:col4'])
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: 'Alveolar clearance from day 4 to 63' — the LLM proposed '1/h', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Beryllium
- status held at "Needs review" — not promoted
- population split: 'hamster' subgroup of Sanders_1975 (paper reports 8 populations: alveolar deposition cleared in 30 days, %, excreta, 0-3 days, excreta, 4-30 days, hamster, initial alveolar deposition, lung, 30 days, rat, total body, 30 days)
- molar mass: no plausible PubChem entry for 'Beryllium' ('beryllium') — left in mass units
- molar mass: none found for 'Beryllium' — its concentrations stay mass-only

**Extraction notes:**
- table tab_0: representations disagree; selected evidence retained, not merged
- table Sanders_1975_table_2: unbound_uncertainty
- companion parameter table 2 transcribed (71 record(s))
- companion parameter table 3 transcribed (36 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Sanders_1975_table_1:row5:col3', 'Sanders_1975_table_1:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 38 | ['Sanders_1975_table_1:row5:col3', 'Sanders_1975_table_1:row5:col4'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbasic_beryllium_carbonate%5D%20BasicBerylliumCarbonate_Sanders1975_hamster&body=Drug%3A%20basic_beryllium_carbonate%0ARecord%3A%20BasicBerylliumCarbonate_Sanders1975_hamster%0APaper%3A%20Sanders_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_basic_beryllium_carbonate/BasicBerylliumCarbonate_Sanders1975_hamster%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 07:01 UTC</sub>
