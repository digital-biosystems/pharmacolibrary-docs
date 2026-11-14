<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amantadine&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/&quot;},{&quot;label&quot;:&quot;deVries_2019 \u00b7 healthy&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amantadine_Berg2020_reference&quot;,&quot;label&quot;:&quot;Berg_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_Berg2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Horadam1981_reference&quot;,&quot;label&quot;:&quot;Horadam_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_Horadam1981_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Kornhuber2006_reference&quot;,&quot;label&quot;:&quot;Kornhuber_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_Kornhuber2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_VargusAdams2010_reference&quot;,&quot;label&quot;:&quot;Vargus-Adams_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_VargusAdams2010_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Aoki1985_reference&quot;,&quot;label&quot;:&quot;Aoki_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_Aoki1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Rees1997_reference&quot;,&quot;label&quot;:&quot;Rees_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amantadine/Amantadine_Rees1997_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amantadine — `Amantadine_deVries2019_healthy`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Amantadine" model-id="Amantadine_deVries2019_healthy" status="needs_review" stale="false" population="adults with normal, moderate or severe renal impairment" measured-compound="Amantadine" parameterization="apparent" topology="1C"></div>

## Citation
deVries T, Dentiste A, Di Lea C, Pichette V, Jacobs D. Effects of Renal Impairment on the Pharmacokinetics of Once-Daily Amantadine Extended-Release Tablets. CNS drugs 33(8):783-789 (2019).
  ·  DOI: [10.1007/s40263-019-00651-1](https://doi.org/10.1007/s40263-019-00651-1)

## Population and dosing

**Population:** adults with normal, moderate or severe renal impairment · condition renal impairment (single-dose pharmacokinetic study) · age group adult.

**Dosed compound ≠ measured compound:** dosed Amantadine hydrochloride extended-release tablet, measured Amantadine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 281.29 | ng/mL |
| Tmax (h)a | tmax | 11.00 | h |
| AUCinf (ng·h/mL) | AUC∞ | 10108.66 | ng·h/mL |
| Oral clearance (L/h) | CL/F | 17.37 | L/h |
| Elimination half-life (h) | t1/2z | 18.47 | h |
| Cumulative amantadine recovered in urine (mg) | Ae | 97.46 | mg |
| Renal clearance (mL/h) | CLR | 10965.10 | mL/h |
| Fraction of dose recovered in urine (%) | fe | 60.91 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 281.29 | ng/mL | 0.0002813 | kg/m3 | ng/ml | exact (1) | deVries_2019_table_2:row0:col3 |
| Tmax (h)a | `Q56` · tmax | 11.00 | h | 3.96e+04 | s | h | llm_confirmed (0.6) | deVries_2019_table_2:row1:col3 |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 10108.66 | ng·h/mL | 36.39 | kg*s/m3 | (h·ng)/ml | exact (1) | deVries_2019_table_2:row2:col3 |
| Oral clearance (L/h) | `Q27` · CL/F | 17.37 | L/h | 4.825e-06 | m3/s | l/h | exact (1) | deVries_2019_table_2:row3:col3 |
| Elimination half-life (h) | `Q57` · t1/2z | 18.47 | h | 6.649e+04 | s | h | half_life_rule (0.95) | deVries_2019_table_2:row4:col3 |
| Cumulative amantadine recovered in urine (mg) | `Q91` · Ae | 97.46 | mg | 9.746e-05 | kg | mg | llm (0.6) | deVries_2019_table_2:row5:col3 |
| Renal clearance (mL/h) | `Q26` · CLR | 10965.10 | mL/h | 3.046e-06 | m3/s | ml/h | exact (1) | deVries_2019_table_2:row6:col3 |
| Fraction of dose recovered in urine (%) | `Q44` · fe | 60.91 | % | 0.6091 |  | % | llm (0.6) | deVries_2019_table_2:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Amantadine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'healthy (n = 8)' subgroup of deVries_2019 (paper reports 4 populations: geometric ls mean, healthy (n = 8), moderate renal impairment (n = 8), severe renal impairment (n = 8))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab3: unbound_uncertainty
- table Tab3: units_need_context
- table Tab3: ragged_grid
- table Tab3: representations disagree; selected evidence retained, not merged
- companion parameter table 2 transcribed (24 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['deVries_2019_table_2:row2:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['deVries_2019_table_2:row6:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['deVries_2019_table_2:row3:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['deVries_2019_table_2:row0:col3'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['deVries_2019_table_2:row7:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['deVries_2019_table_2:row1:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['deVries_2019_table_2:row4:col3'] |
| C5_dimension_Q91 | pass | [mass] |  | ['deVries_2019_table_2:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 17.4 L/h | ['deVries_2019_table_2:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamantadine%5D%20Amantadine_deVries2019_healthy&body=Drug%3A%20amantadine%0ARecord%3A%20Amantadine_deVries2019_healthy%0APaper%3A%20deVries_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amantadine/Amantadine_deVries2019_healthy%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:49 UTC</sub>
