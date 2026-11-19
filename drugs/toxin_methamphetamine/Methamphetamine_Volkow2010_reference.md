<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methamphetamine&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/&quot;},{&quot;label&quot;:&quot;Volkow_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methamphetamine_Cook1992_reference&quot;,&quot;label&quot;:&quot;Cook_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Cook1993_reference&quot;,&quot;label&quot;:&quot;Cook_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Cook1993_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Su2025_reference&quot;,&quot;label&quot;:&quot;Su_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Su2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methamphetamine_Yin2021_reference&quot;,&quot;label&quot;:&quot;Yin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methamphetamine/Methamphetamine_Yin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methamphetamine — `Methamphetamine_Volkow2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cmax, AUC and CL have no unit.

<div class="pk-model-meta" hidden drug="Methamphetamine" model-id="Methamphetamine_Volkow2010_reference" status="needs_review" stale="false" population="healthy participants" measured-compound="Methamphetamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Volkow ND, Fowler JS, Wang GJ, Shumay E, Telang F, Thanos PK et al. Distribution and pharmacokinetics of methamphetamine in the human body: clinical implications. PloS one 5(12):e15269 (2010).
  ·  DOI: [10.1371/journal.pone.0015269](https://doi.org/10.1371/journal.pone.0015269)

## Population and dosing

**Population:** healthy participants · condition healthy · n = 19.

**Dosing:** 9.6 micrograms, iv, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Peak % Dose/cc | Cmax | 0.014 | 11C |
| AUC | AUC | 0.029 |  |
| half peak clearance occurred at | CL | 90 | seconds |
| volume of distribution | V | 4.0 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cmax, AUC and CL have no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Oster_2023) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax and CL), so that value has no SI equivalent. Extracted — methamphetamine: Cmax 0.014 11C, AUC 0.029, CL 90 seconds, V 4 L/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Peak % Dose/cc | `Q32` · Cmax | 0.014 | 11C |  |  | 11c | llm_confirmed (0.6) | Volkow_2010_table_1:row1:col3, Volkow_2010_table_1:row2:col3, Volkow_2010_table_1:row4:col3, Volkow_2010_table_1:row5:col3, Volkow_2010_table_1:row7:col3, Volkow_2010_table_1:row8:col3, Volkow_2010_table_1:row10:col3, Volkow_2010_table_1:row11:col3, Volkow_2010_table_1:row13:col3, Volkow_2010_table_1:row14:col3, Volkow_2010_table_1:row16:col3, Volkow_2010_table_1:row17:col3, Volkow_2010_table_1:row19:col3, Volkow_2010_table_1:row20:col3, Volkow_2010_table_1:row22:col3, Volkow_2010_table_1:row23:col3, Volkow_2010_table_1:row25:col3, Volkow_2010_table_1:row26:col3 |
| AUC | `Q88` · AUC | 0.029 |  |  |  |  | exact (1) | Volkow_2010_table_1:row1:col6, Volkow_2010_table_1:row2:col6, Volkow_2010_table_1:row4:col6, Volkow_2010_table_1:row5:col6, Volkow_2010_table_1:row7:col6, Volkow_2010_table_1:row8:col6, Volkow_2010_table_1:row10:col6, Volkow_2010_table_1:row11:col6, Volkow_2010_table_1:row13:col6, Volkow_2010_table_1:row14:col6, Volkow_2010_table_1:row16:col6, Volkow_2010_table_1:row17:col6, Volkow_2010_table_1:row19:col6, Volkow_2010_table_1:row20:col6, Volkow_2010_table_1:row22:col6, Volkow_2010_table_1:row23:col6, Volkow_2010_table_1:row25:col6, Volkow_2010_table_1:row26:col6 |
| half peak clearance occurred at | `Q22` · CL | 90 | seconds |  |  | seconds | boundary (0.8) | Volkow_2010:results_prose |
| volume of distribution | `Q61` · V | 4.0 | L/kg | 0.28 | m3 | L | review_gapfill (0.7) | Oster_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'aa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: '11C' (Cmax)
- dropped unlinked row (NIL): 'Organ weight' — extend the ontology if this is a real PK parameter (source ['Volkow_2010_table_1:row1:col4', 'Volkow_2010_table_1:row2:col4', 'Volkow_2010_table_1:row4:col4', 'Volkow_2010_table_1:row5:col4', 'Volkow_2010_table_1:row7:col4', 'Volkow_2010_table_1:row8:col4', 'Volkow_2010_table_1:row10:col4', 'Volkow_2010_table_1:row11:col4', 'Volkow_2010_table_1:row13:col4', 'Volkow_2010_table_1:row14:col4', 'Volkow_2010_table_1:row16:col4', 'Volkow_2010_table_1:row17:col4', 'Volkow_2010_table_1:row19:col4', 'Volkow_2010_table_1:row20:col4', 'Volkow_2010_table_1:row22:col4', 'Volkow_2010_table_1:row23:col4', 'Volkow_2010_table_1:row25:col4', 'Volkow_2010_table_1:row26:col4'])
- salvaged Q22 ('half peak clearance occurred at'=90) from results prose — parameter table was unreadable
- implicit units: 'Peak % Dose/cc' — the LLM proposed '%Dose/cc', whose dimension does not fit Q32; left unset
- implicit units: 'AUC' — the LLM proposed '%Dose/cc * min', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Methamphetamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Oster_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Volkow_2010_table_1: unparsed_numeric_cell
- transposed table Volkow_2010_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Oster_2023:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | seconds | ['Volkow_2010:results_prose'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | 11C | ['Volkow_2010_table_1:row1:col3', 'Volkow_2010_table_1:row2:col3', 'Volkow_2010_table_1:row4:col3', 'Volkow_2010_table_1:row5:col3', 'Volkow_2010_table_1:row7:col3', 'Volkow_2010_table_1:row8:col3', 'Volkow_2010_table_1:row10:col3', 'Volkow_2010_table_1:row11:col3', 'Volkow_2010_table_1:row13:col3', 'Volkow_2010_table_1:row14:col3', 'Volkow_2010_table_1:row16:col3', 'Volkow_2010_table_1:row17:col3', 'Volkow_2010_table_1:row19:col3', 'Volkow_2010_table_1:row20:col3', 'Volkow_2010_table_1:row22:col3', 'Volkow_2010_table_1:row23:col3', 'Volkow_2010_table_1:row25:col3', 'Volkow_2010_table_1:row26:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Volkow_2010_table_1:row1:col6', 'Volkow_2010_table_1:row2:col6', 'Volkow_2010_table_1:row4:col6', 'Volkow_2010_table_1:row5:col6', 'Volkow_2010_table_1:row7:col6', 'Volkow_2010_table_1:row8:col6', 'Volkow_2010_table_1:row10:col6', 'Volkow_2010_table_1:row11:col6', 'Volkow_2010_table_1:row13:col6', 'Volkow_2010_table_1:row14:col6', 'Volkow_2010_table_1:row16:col6', 'Volkow_2010_table_1:row17:col6', 'Volkow_2010_table_1:row19:col6', 'Volkow_2010_table_1:row20:col6', 'Volkow_2010_table_1:row22:col6', 'Volkow_2010_table_1:row23:col6', 'Volkow_2010_table_1:row25:col6', 'Volkow_2010_table_1:row26:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 90 | ['Volkow_2010:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 280 L | ['Oster_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethamphetamine%5D%20Methamphetamine_Volkow2010_reference&body=Drug%3A%20methamphetamine%0ARecord%3A%20Methamphetamine_Volkow2010_reference%0APaper%3A%20Volkow_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methamphetamine/Methamphetamine_Volkow2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 03:14 UTC</sub>
