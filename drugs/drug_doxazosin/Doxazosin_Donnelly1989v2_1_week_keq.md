<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;doxazosin&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/&quot;},{&quot;label&quot;:&quot;Donnelly_1989_2 \u00b7 1_week_keq&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxazosin_Kaye1986_man&quot;,&quot;label&quot;:&quot;Kaye_1986_man&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_man.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Kaye1986_rat&quot;,&quot;label&quot;:&quot;Kaye_1986_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Young1988_reference&quot;,&quot;label&quot;:&quot;Young_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Young1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Elliott1986_reference&quot;,&quot;label&quot;:&quot;Elliott_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Elliott1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_unknown2023_reference&quot;,&quot;label&quot;:&quot;unknown_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_unknown2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Reid_1990_SBP&quot;,&quot;label&quot;:&quot;Reid_1990 \u00b7 SBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/pd_Reid_1990_SBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxazosin — `Doxazosin_Donnelly1989v2_1_week_keq`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="doxazosin" model-id="Doxazosin_Donnelly1989v2_1_week_keq" status="needs_review" stale="false" population="patients with essential hypertension" measured-compound="doxazosin" parameterization="mechanistic" topology="1C"></div>

## Citation
Donnelly R, Elliott HL, Meredith PA, Reid JL. Concentration-effect relationships and individual responses to doxazosin in essential hypertension. British journal of clinical pharmacology 28(5):517–526 (1989).
  ·  DOI: [10.1111/j.1365-2125.1989.tb03537.x](https://doi.org/10.1111/j.1365-2125.1989.tb03537.x)

## Population and dosing

**Population:** patients with essential hypertension · condition essential hypertension · age group adult.

**Dosing:** 2 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 2 | λ1 | 0.3 | h⁻¹ |
| 5 | equation variable | 2.4 | h⁻¹ |
| 8 | k12 | 0.8 | h⁻¹ |
| Doxazosin (0.3 mgkg-') | V | 45.1 | l kg-1 |
| ka | kabs | 0.077 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hamilton_1985, unknown_2023) cannot stand in for this paper's evidence. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — doxazosin: λ1 0.3 h⁻¹, k12 0.8 h⁻¹, V 45.1 l kg-1, kabs 0.077 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 1: this record has none, the second reading 0.8; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 2 | `Q67` · λ1 | 0.3 | h⁻¹ | 8.333e-05 | 1/s | 1/h | llm (0.6) | Donnelly_1989_2_table_4:row2:col4, Donnelly_1989_2_table_4:row14:col4 |
| 5 | `Q900` · equation variable | 2.4 | h⁻¹ |  |  | 1/h | llm (0.6) | Donnelly_1989_2_table_4:row5:col4, Donnelly_1989_2_table_4:row17:col4 |
| 8 | `Q301` · k12 | 0.8 | h⁻¹ | 0.0002222 | 1/s | 1/h | llm (0.6) | Donnelly_1989_2_table_4:row8:col4, Donnelly_1989_2_table_4:row20:col4 |
| Doxazosin (0.3 mgkg-') | `Q61` · V | 45.1 | l kg-1 | 3.157 | m3 | L | review_gapfill (0.7) | Hamilton_1985:review |
| ka | `Q49` · kabs | 0.077 | h-1 | 2.139e-05 | 1/s | 1/h | review_gapfill (0.7) | unknown_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1 week keq' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row1:col4', 'Donnelly_1989_2_table_4:row13:col4'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row3:col4', 'Donnelly_1989_2_table_4:row15:col4'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row4:col4', 'Donnelly_1989_2_table_4:row16:col4'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row6:col4', 'Donnelly_1989_2_table_4:row18:col4'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row7:col4', 'Donnelly_1989_2_table_4:row19:col4'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row9:col4', 'Donnelly_1989_2_table_4:row21:col4'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Donnelly_1989_2_table_4:row10:col4', 'Donnelly_1989_2_table_4:row22:col4'])
- routed 'Mean s.d.' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxazosin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: '1 week keq' subgroup of Donnelly_1989_2 (paper reports 9 populations: 1 week, 1 week keq, 1 week m, 6 weeks, 6 weeks keq, 6 weeks m, first dose, first dose keq, first dose m)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Hamilton_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from unknown_2023's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 3 transcribed (12 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1]` |  | 0.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | 0.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[5]` | 2.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` | 0.8 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Donnelly_1989_2_table_4:row8:col4', 'Donnelly_1989_2_table_4:row20:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['unknown_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hamilton_1985:review'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Donnelly_1989_2_table_4:row2:col4', 'Donnelly_1989_2_table_4:row14:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.16e+03 L | ['Hamilton_1985:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxazosin%5D%20Doxazosin_Donnelly1989v2_1_week_keq&body=Drug%3A%20doxazosin%0ARecord%3A%20Doxazosin_Donnelly1989v2_1_week_keq%0APaper%3A%20Donnelly_1989_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxazosin/Doxazosin_Donnelly1989v2_1_week_keq%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 10:28 UTC</sub>
