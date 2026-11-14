<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clonidine&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/&quot;},{&quot;label&quot;:&quot;Tang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Cloesmeijer2020_reference&quot;,&quot;label&quot;:&quot;Cloesmeijer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Cloesmeijer2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q6h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q6h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_dog&quot;,&quot;label&quot;:&quot;Pflaum_2026_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_dog.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_human&quot;,&quot;label&quot;:&quot;Pflaum_2026_human&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_human.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q8h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q8h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q8h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clonidine — `Clonidine_Tang2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clonidine" model-id="Clonidine_Tang2025_reference" status="rejected" stale="false" population="neonates with neonatal opioid withdrawal syndrome (NOWS) receiving clonidine as primary therapy" measured-compound="Clonidine" parameterization="apparent" topology="1C"></div>

## Citation
Tang F, Ng CM, Horn J, Bada HS, Leggas M. Pharmacokinetic Modeling and Model-Based Hypothesis Generation for Dose Optimization of Clonidine in Neonates With Neonatal Opioid Withdrawal Syndrome. Clinical pharmacology and therapeutics 117(5):1254-1263 (2025).
  ·  DOI: [10.1002/cpt.3507](https://doi.org/10.1002/cpt.3507)

## Population and dosing

**Population:** neonates with neonatal opioid withdrawal syndrome (NOWS) receiving clonidine as primary therapy · condition neonatal opioid withdrawal syndrome · age group neonate.

**Dosing:** 1, 2 µg/kg/dose, other, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLnorm/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F per 70 kg (L/hour) | CLnorm/F | 13.6 | L/hour | 4.71 |
| V/F per 70 kg (L) | Vnorm/F | 416 | L | 7.82 |
| Ka (hour−1) | kabs | 0.889 | hour−1 | 15.6 |
| T50 (day) | kfm | 6.40 | day | 4.78 |
| theta_q27_wt_power | theta_q27_wt_power | 0.75 |  |  |
| theta_q319_wt_power | theta_q319_wt_power | 1 |  |  |
| theta_q76_weight_power | theta_q76_weight_power | 0.0224 |  | 21.8 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[cl/f per 70 kg].parameter_id`: this record has Q355, the second reading Q27; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F per 70 kg (L/hour) | `Q355` · CLnorm/F | 13.6 | L/hour | 3.778e-06 | m3/s | l/h | 4.71 | llm_corrected (0.6) | cpt3507-tbl-0003:row2:col1 |
| V/F per 70 kg (L) | `Q353` · Vnorm/F | 416 | L | 0.416 | m3 | l | 7.82 | llm_corrected (0.6) | cpt3507-tbl-0003:row3:col1 |
| Ka (hour−1) | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | 15.6 | exact (1) | cpt3507-tbl-0003:row4:col1 |
| T50 (day) | `Q305` · kfm | 6.40 | day |  |  | d | 4.78 | llm (0.6) | cpt3507-tbl-0003:row9:col1 |
| theta_q27_wt_power | `Q900` · theta_q27_wt_power | 0.75 |  |  |  |  |  |  | cpt3507-tbl-0003:row5:col1 |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 1 |  |  |  |  |  |  | cpt3507-tbl-0003:row6:col1 |
| theta_q76_weight_power | `Q900` · theta_q76_weight_power | 0.0224 |  |  |  |  | 21.8 |  | cpt3507-tbl-0003:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpt3507-tbl-0003:row8:col1', 'cpt3507-tbl-0003:footnote'])
- unit_dimension_mismatch: 'T50 (day)' → Q305 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'CI'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CV'
- dropped value-less row: 'Ka'
- dropped value-less row: 'PMA'
- dropped value-less row: 'PNA'
- dropped value-less row: 'RSE'
- dropped value-less row: 'T50'
- dropped value-less row: 'V/F'
- dropped value-less row: 'WT'
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl/f per 70 kg].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[cl/f per 70 kg].parameter_id` | Q355 | Q27 | mismatch |
| `gpt-oss:120b` | `parameters[t50].parameter_id` | Q305 | Q57 | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_f_wt_power]` |  | 0.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_wt_power]` | 0.75 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_wt_power]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q76_weight_power]` | 0.0224 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v_f_weight_power]` |  | 0.0224 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v_f_wt_power]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f per 70 kg].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss:120b` | `parameters[v/f per 70 kg].parameter_id` | Q353 | Q76 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q305 | fail | 1 / [time] | day ([time]) | ['cpt3507-tbl-0003:row9:col1'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['cpt3507-tbl-0003:row3:col1'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['cpt3507-tbl-0003:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt3507-tbl-0003:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Tang2025_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Tang2025_reference%0APaper%3A%20Tang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clonidine/Clonidine_Tang2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:57 UTC</sub>
