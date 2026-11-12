<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;22,23-dihydroavermectin b1a&quot;,&quot;href&quot;:&quot;drugs/toxin_2223_dihydroavermectin_b1a/&quot;},{&quot;label&quot;:&quot;Albariqi_2022 \u00b7 2_04_mg_kg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 22,23-dihydroavermectin b1a — `D_2223DihydroavermectinB1a_Albariqi2022_2_04_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="22,23-dihydroavermectin b1a" model-id="D_2223DihydroavermectinB1a_Albariqi2022_2_04_mg_kg" status="needs_review" stale="false" population="BALB/c mice" measured-compound="ivermectin (22,23-dihydroavermectin B1a)" parameterization="mechanistic" topology="1C"></div>

## Citation
Albariqi AH, Wang Y, Chang RYK, Quan DH, Wang X, Kalfas S et al. Pharmacokinetics and safety of inhaled ivermectin in mice as a potential COVID-19 treatment. International journal of pharmaceutics 619:121688 (2022).
  ·  DOI: [10.1016/j.ijpharm.2022.121688](https://doi.org/10.1016/j.ijpharm.2022.121688)

## Population and dosing

**Population:** BALB/c mice · condition healthy · age group adult · n = 4 (PK, n=8 for distribution).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax | tmax | 1 |  |
| Cmax | Cmax | 0.75 |  |
| Ke | kel | 0.16 |  |
| t1/2 | t1/2z | 4.23 |  |
| AUC0-∞ | AUC∞ | 14.64 |  |
| CL | CL | 0.139 |  |
| Vd | V | 0.85 |  |
| Ka | kabs | 0.7082 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

Independently confirmed by `gpt-oss:120b`.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax | `Q56` · tmax | 1 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row5:col4, Albariqi_2022_table_p5_1:row6:col4, Albariqi_2022_table_p5_1:row7:col4, Albariqi_2022_table_p5_1:row8:col4 |
| Cmax | `Q32` · Cmax | 0.75 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row5:col5, Albariqi_2022_table_p5_1:row6:col5, Albariqi_2022_table_p5_1:row7:col5, Albariqi_2022_table_p5_1:row8:col5 |
| Ke | `Q47` · kel | 0.16 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row6:col2, Albariqi_2022_table_p5_1:row8:col2 |
| t1/2 | `Q57` · t1/2z | 4.23 |  |  |  |  | half_life_rule (0.95) | Albariqi_2022_table_p5_1:row6:col3, Albariqi_2022_table_p5_1:row8:col3 |
| AUC0-∞ | `Q17` · AUC∞ | 14.64 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row6:col6, Albariqi_2022_table_p5_1:row8:col6 |
| CL | `Q22` · CL | 0.139 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row6:col7, Albariqi_2022_table_p5_1:row8:col7 |
| Vd | `Q61` · V | 0.85 |  |  |  |  | exact (1) | Albariqi_2022_table_p5_1:row6:col8, Albariqi_2022_table_p5_1:row8:col8 |
| Ka | `Q49` · kabs | 0.7082 | /h | 0.0001967 | 1/s | 1/h | review_gapfill (0.7) | Fimbo_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 275 (char 274)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ivermectin (22,23-dihydroavermectin B1a)
- population split: '2.04 mg/kg' subgroup of Albariqi_2022 (paper reports 2 populations: 2.04 mg/kg, 3.15 mg/kg)
- molar mass: none found for 'ivermectin (22,23-dihydroavermectin B1a)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Fimbo_2023's review values (primary lacked it)

**Extraction notes:**
- table Albariqi_2022_table_p5_1: units_need_context
- transposed table Albariqi_2022_table_p5_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fimbo_2023:review'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['Albariqi_2022_table_p5_1:row6:col6', 'Albariqi_2022_table_p5_1:row8:col6'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Albariqi_2022_table_p5_1:row6:col7', 'Albariqi_2022_table_p5_1:row8:col7'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Albariqi_2022_table_p5_1:row5:col5', 'Albariqi_2022_table_p5_1:row6:col5', 'Albariqi_2022_table_p5_1:row7:col5', 'Albariqi_2022_table_p5_1:row8:col5'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Albariqi_2022_table_p5_1:row6:col2', 'Albariqi_2022_table_p5_1:row8:col2'] |
| C5_unit_missing_Q56 | fail | [time] |  | ['Albariqi_2022_table_p5_1:row5:col4', 'Albariqi_2022_table_p5_1:row6:col4', 'Albariqi_2022_table_p5_1:row7:col4', 'Albariqi_2022_table_p5_1:row8:col4'] |
| C5_unit_missing_Q57 | fail | [time] |  | ['Albariqi_2022_table_p5_1:row6:col3', 'Albariqi_2022_table_p5_1:row8:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Albariqi_2022_table_p5_1:row6:col8', 'Albariqi_2022_table_p5_1:row8:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.139 | ['Albariqi_2022_table_p5_1:row6:col7', 'Albariqi_2022_table_p5_1:row8:col7'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2223_dihydroavermectin_b1a%5D%20D_2223DihydroavermectinB1a_Albariqi2022_2_04_mg_kg&body=Drug%3A%202223_dihydroavermectin_b1a%0ARecord%3A%20D_2223DihydroavermectinB1a_Albariqi2022_2_04_mg_kg%0APaper%3A%20Albariqi_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2223_dihydroavermectin_b1a/D_2223DihydroavermectinB1a_Albariqi2022_2_04_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:21 UTC</sub>
