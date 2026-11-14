<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Thalidomide&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/&quot;},{&quot;label&quot;:&quot;Miura_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thalidomide_Chen1989_reference&quot;,&quot;label&quot;:&quot;Chen_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Chen1989_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Eriksson1995_reference&quot;,&quot;label&quot;:&quot;Eriksson_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Eriksson1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Eriksson2003_reference&quot;,&quot;label&quot;:&quot;Eriksson_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Eriksson2003_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Piscitelli1997_reference&quot;,&quot;label&quot;:&quot;Piscitelli_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Piscitelli1997_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Teo2004v2_reference&quot;,&quot;label&quot;:&quot;Teo_2004_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Teo2004v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thalidomide_Atoyebi2019_reference&quot;,&quot;label&quot;:&quot;Atoyebi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thalidomide/Thalidomide_Atoyebi2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thalidomide — `Thalidomide_Miura2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Thalidomide" model-id="Thalidomide_Miura2021_reference" status="rejected" stale="false" population="rats and chimeric mice humanized with human hepatocytes" measured-compound="5&#39;-hydroxythalidomide" parameterization="mechanistic" topology="1C"></div>

## Citation
Miura T, Uehara S, Shimizu M, Suemizu H, Yamazaki H. Pharmacokinetics of primary oxidative metabolites of thalidomide in rats and in chimeric mice humanized with different human hepatocytes. The Journal of toxicological sciences 46(7):311–317 (2021).
  ·  DOI: [10.2131/jts.46.311](https://doi.org/10.2131/jts.46.311)

## Population and dosing

**Population:** rats and chimeric mice humanized with human hepatocytes · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed Thalidomide, measured 5'-hydroxythalidomide.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fraction absorbed × intestinal availability | Fab | 1 |  |
| theta_q25_hepatic | theta_q25_hepatic | 0.0925 |  |
| theta_q26_renal | theta_q26_renal | 0.0097 |  |
| theta_q32_category | theta_q32_category | 56100 |  |
| theta_q88_category | theta_q88_category | 562000 |  |
| CL = 102.043 ≈ 110 mL/min | CL | 110.0 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has 5'-hydroxythalidomide, the second reading thalidomide; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fraction absorbed × intestinal availability | `Q40` · Fab | 1 |  | 1 |  |  | llm_confirmed (0.6) | Miura_2021_table_p4_1:row0:col2 |
| theta_q25_hepatic | `Q900` · theta_q25_hepatic | 0.0925 |  |  |  |  |  | Miura_2021_table_p4_1:row4:col2 |
| theta_q26_renal | `Q900` · theta_q26_renal | 0.0097 |  |  |  |  |  | Miura_2021_table_p4_1:row5:col2 |
| theta_q32_category | `Q900` · theta_q32_category | 56100 |  |  |  |  |  | Miura_2021_table_p4_1:row15:col2, Miura_2021_table_p4_1:row22:col2 |
| theta_q88_category | `Q900` · theta_q88_category | 562000 |  |  |  |  |  | Miura_2021_table_p4_1:row18:col2, Miura_2021_table_p4_1:row25:col2 |
| CL = 102.043 ≈ 110 mL/min | `Q22` · CL | 110.0 | mL/min | 1.833e-06 | m3/s | L/h | review_gapfill (0.7) | Mallillin_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Absorption rate constant | Q49 | exact |
| theta_q3_hepatic | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- column 'abbreviation (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Absorption rate constant' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'Table 1 . Physiological, experimental, and final calculated parameters for rat PBPK models for thalidomide and its primary oxidative metabolites.'
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q3 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'hepatic'/'' on Q3 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'hepatic'/'' on Q25 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'renal'/'' on Q26 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q32 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q32 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q88 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q88 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5'-hydroxythalidomide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/17 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for "5'-hydroxythalidomide" — its concentrations stay mass-only
- molar mass: none found for '5-hydroxythalidomide' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Mallillin_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Miura_2021_table_p4_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[theta_q32_category].value` | 56100 | 43700 | mismatch |
| `gpt-oss:120b` | `parameters[theta_q88_category].value` | 562000 | 627000 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 5'-hydroxythalidomide | thalidomide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Mallillin_2026:review'] |
| C5_dimension_Q49 | fail | 1 / [time] | unit ([luminosity] / [length] ** 2) | ['Miura_2021_table_p4_1:row1:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 110 | ['Mallillin_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.6 L/h | ['Mallillin_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthalidomide%5D%20Thalidomide_Miura2021_reference&body=Drug%3A%20thalidomide%0ARecord%3A%20Thalidomide_Miura2021_reference%0APaper%3A%20Miura_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thalidomide/Thalidomide_Miura2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 02:11 UTC</sub>
