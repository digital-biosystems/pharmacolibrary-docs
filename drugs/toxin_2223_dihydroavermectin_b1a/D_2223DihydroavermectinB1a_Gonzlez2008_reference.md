<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;22,23-dihydroavermectin b1a&quot;,&quot;href&quot;:&quot;drugs/toxin_2223_dihydroavermectin_b1a/&quot;},{&quot;label&quot;:&quot;Gonz\u00e1lez_2008 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 22,23-dihydroavermectin b1a — `D_2223DihydroavermectinB1a_Gonzlez2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="22,23-dihydroavermectin b1a" model-id="D_2223DihydroavermectinB1a_Gonzlez2008_reference" status="rejected" stale="false" population="healthy volunteers and onchocerciasis patients" measured-compound="ivermectin (22,23-dihydroavermectin B1a)" parameterization="mechanistic" topology="retention"></div>

## Citation
González Canga A, Sahagún Prieto AM, Diez Liébana MJ, Fernández Martínez N, Sierra Vega M, García Vieitez JJ. The pharmacokinetics and interactions of ivermectin in humans--a mini-review. The AAPS journal 10(1):42–46 (2008).
  ·  DOI: [10.1208/s12248-007-9000-9](https://doi.org/10.1208/s12248-007-9000-9)

## Population and dosing

**Population:** healthy volunteers and onchocerciasis patients · condition healthy and Onchocerca volvulus infection / disseminated strongyloidiasis · age group adult.

**Dosed compound ≠ measured compound:** dosed ivermectin (22,23-dihydroavermectin B1a/B1b, 80:20), measured ivermectin (22,23-dihydroavermectin B1a).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Elimination t1/2 (h) | t1/2z | 12 | h |
| Absorption Cmax (ng·ml−1) | Cmax | 23.1 | ng·ml−1 |
| Absorption tmax (h) | tmax | 4.3 | h |
| Absorption t1/2(abs) (h) | t1/2ka | 0.5 | h |
| Elimination Cl (1 kg−1·day−1) | CLnorm | 4.28 | 1 kg−1·day−1 |
| CL | CL | 7.698 | L/h |
| Ka | kabs | 0.7082 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination t1/2 (h) | `Q57` · t1/2z | 12 | h | 4.32e+04 | s | h | half_life_rule (0.95) | González_2008_table_1:row1:col5, González_2008_table_1:row2:col5, González_2008_table_1:row3:col5, González_2008_table_1:row4:col5, González_2008_table_1:row5:col5, González_2008_table_1:row6:col5, González_2008_table_1:row10:col5, González_2008_table_1:row14:col5, González_2008_table_1:row15:col5, González_2008_table_1:row16:col5, González_2008_table_1:row17:col5 |
| Absorption Cmax (ng·ml−1) | `Q32` · Cmax | 23.1 | ng·ml−1 | 2.31e-05 | kg/m3 | ng/ml | llm_corrected (0.6) | González_2008_table_1:row2:col2, González_2008_table_1:row3:col2, González_2008_table_1:row4:col2, González_2008_table_1:row5:col2, González_2008_table_1:row6:col2, González_2008_table_1:row7:col2, González_2008_table_1:row8:col2, González_2008_table_1:row9:col2, González_2008_table_1:row10:col2, González_2008_table_1:row11:col2, González_2008_table_1:row12:col2, González_2008_table_1:row14:col2, González_2008_table_1:row15:col2, González_2008_table_1:row16:col2 |
| Absorption tmax (h) | `Q56` · tmax | 4.3 | h | 1.548e+04 | s | h | llm_corrected (0.6) | González_2008_table_1:row2:col3, González_2008_table_1:row3:col3, González_2008_table_1:row4:col3, González_2008_table_1:row5:col3, González_2008_table_1:row6:col3, González_2008_table_1:row7:col3, González_2008_table_1:row8:col3, González_2008_table_1:row9:col3, González_2008_table_1:row10:col3, González_2008_table_1:row14:col3, González_2008_table_1:row15:col3, González_2008_table_1:row16:col3 |
| Absorption t1/2(abs) (h) | `Q95` · t1/2ka | 0.5 | h | 1800 | s | h | half_life_rule (0.95) | González_2008_table_1:row2:col4, González_2008_table_1:row3:col4, González_2008_table_1:row4:col4, González_2008_table_1:row5:col4, González_2008_table_1:row6:col4 |
| Elimination Cl (1 kg−1·day−1) | `Q354` · CLnorm | 4.28 | 1 kg−1·day−1 |  |  | 1/(d·kg) | llm_corrected (0.6) | González_2008_table_1:row2:col6, González_2008_table_1:row3:col6, González_2008_table_1:row4:col6, González_2008_table_1:row5:col6, González_2008_table_1:row6:col6, González_2008_table_1:row16:col6 |
| CL | `Q22` · CL | 7.698 | L/h | 2.138e-06 | m3/s | L/h | review_gapfill (0.7) | Fimbo_2023:review |
| Ka | `Q49` · kabs | 0.7082 | /h | 0.0001967 | 1/s | 1/h | review_gapfill (0.7) | Fimbo_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Elimination Cl (1 kg−1·day−1)' → Q354 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'C max'
- dropped value-less row: 't max'
- dropped value-less row: 't 1/2abs'
- dropped value-less row: 't 1/2'
- dropped value-less row: 'Cl'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ivermectin (22,23-dihydroavermectin B1a)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: none found for 'ivermectin (22,23-dihydroavermectin B1a)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Fimbo_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Fimbo_2023's review values (primary lacked it)

**Extraction notes:**
- table González_2008_table_1: unparsed_numeric_cell
- transposed table González_2008_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fimbo_2023:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['González_2008_table_1:row2:col2', 'González_2008_table_1:row3:col2', 'González_2008_table_1:row4:col2', 'González_2008_table_1:row5:col2', 'González_2008_table_1:row6:col2', 'González_2008_table_1:row7:col2', 'González_2008_table_1:row8:col2', 'González_2008_table_1:row9:col2', 'González_2008_table_1:row10:col2', 'González_2008_table_1:row11:col2', 'González_2008_table_1:row12:col2', 'González_2008_table_1:row14:col2', 'González_2008_table_1:row15:col2', 'González_2008_table_1:row16:col2'] |
| C5_dimension_Q354 | fail | [length] ** 3 / [time] | 1 kg−1·day−1 (1 / [time]) | ['González_2008_table_1:row2:col6', 'González_2008_table_1:row3:col6', 'González_2008_table_1:row4:col6', 'González_2008_table_1:row5:col6', 'González_2008_table_1:row6:col6', 'González_2008_table_1:row16:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fimbo_2023:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['González_2008_table_1:row2:col3', 'González_2008_table_1:row3:col3', 'González_2008_table_1:row4:col3', 'González_2008_table_1:row5:col3', 'González_2008_table_1:row6:col3', 'González_2008_table_1:row7:col3', 'González_2008_table_1:row8:col3', 'González_2008_table_1:row9:col3', 'González_2008_table_1:row10:col3', 'González_2008_table_1:row14:col3', 'González_2008_table_1:row15:col3', 'González_2008_table_1:row16:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['González_2008_table_1:row1:col5', 'González_2008_table_1:row2:col5', 'González_2008_table_1:row3:col5', 'González_2008_table_1:row4:col5', 'González_2008_table_1:row5:col5', 'González_2008_table_1:row6:col5', 'González_2008_table_1:row10:col5', 'González_2008_table_1:row14:col5', 'González_2008_table_1:row15:col5', 'González_2008_table_1:row16:col5', 'González_2008_table_1:row17:col5'] |
| C5_dimension_Q95 | pass | [time] |  | ['González_2008_table_1:row2:col4', 'González_2008_table_1:row3:col4', 'González_2008_table_1:row4:col4', 'González_2008_table_1:row5:col4', 'González_2008_table_1:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.698 | ['Fimbo_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.7 L/h | ['Fimbo_2023:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2223_dihydroavermectin_b1a%5D%20D_2223DihydroavermectinB1a_Gonzlez2008_reference&body=Drug%3A%202223_dihydroavermectin_b1a%0ARecord%3A%20D_2223DihydroavermectinB1a_Gonzlez2008_reference%0APaper%3A%20Gonz%C3%A1lez_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2223_dihydroavermectin_b1a/D_2223DihydroavermectinB1a_Gonzlez2008_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:21 UTC</sub>
