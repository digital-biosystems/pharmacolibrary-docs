<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Alprazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/&quot;},{&quot;label&quot;:&quot;Abduljalil_2021 \u00b7 milk_predicted_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Yamamoto2019_reference&quot;,&quot;label&quot;:&quot;Yamamoto_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/Alprazolam_Yamamoto2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alprazolam — `Alprazolam_Abduljalil2021_milk_predicted_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Alprazolam" model-id="Alprazolam_Abduljalil2021_milk_predicted_mean" status="rejected" stale="false" population="lactating women (and predicted infant exposure)" measured-compound="Alprazolam" parameterization="mechanistic" topology="retention"></div>

## Citation
Abduljalil K, Pansari A, Ning J, Jamei M. Prediction of drug concentrations in milk during breastfeeding, integrating predictive algorithms within a physiologically-based pharmacokinetic model. CPT: pharmacometrics & systems pharmacology 10(8):878–889 (2021).
  ·  DOI: [10.1002/psp4.12662](https://doi.org/10.1002/psp4.12662)

## Population and dosing

**Population:** lactating women (and predicted infant exposure) · condition healthy lactating women · age group adult · n = 8.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Half‐life (h) | t1/2z | 2.48 | h |
| AUCINF (mg/L/h) | AUC∞ | 17.90 | mg/L/h |
| fu | fu | 0.99 |  |
| M/P ratio | CL_ratio | 0.83 |  |
| Cmax (ng/ml) | Cmax | 4.68 | ng/ml |
| Tmax (h)* | tmax | 1.00 | h |
| AUCt (mg/L.hr) | AUCt | 17.4 | mg/L.hr |
| Clearance | CL | 8.23 | L/h |
| absorption rate constant for the slow absorption component | kabs | 5.37 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[auct].value`: this record has 17.4, the second reading 13.93; it also differs on 2 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Half‐life (h) | `Q57` · t1/2z | 2.48 | h | 8928 | s | h | llm (0.6) | psp412662-tbl-0001:row4:col8, psp412662-tbl-0001:row11:col8, psp412662-tbl-0001:row22:col8, psp412662-tbl-0001:row28:col8 |
| AUCINF (mg/L/h) | `Q17` · AUC∞ | 17.90 | mg/L/h |  |  | mg/(h·l) | exact (1) | psp412662-tbl-0001:row5:col8 |
| fu | `Q46` · fu | 0.99 |  | 0.99 |  |  | exact (1) | psp412662-tbl-0001:row6:col8 |
| M/P ratio | `Q31` · CL_ratio | 0.83 |  | 0.83 |  |  | llm (0.6) | psp412662-tbl-0001:row7:col8, psp412662-tbl-0001:row13:col8, psp412662-tbl-0001:row18:col8, psp412662-tbl-0001:row24:col8 |
| Cmax (ng/ml) | `Q32` · Cmax | 4.68 | ng/ml | 4.68e-06 | kg/m3 | ng/ml | exact (1) | psp412662-tbl-0001:row9:col8 |
| Tmax (h)* | `Q56` · tmax | 1.00 | h | 3600 | s | h | llm_confirmed (0.6) | psp412662-tbl-0001:row10:col8 |
| AUCt (mg/L.hr) | `Q19` · AUCt | 17.4 | mg/L.hr | 62.64 | kg*s/m3 | mg/(h·l) | exact (1) | psp412662-tbl-0001:row23:col8, psp412662-tbl-0001:row26:col8 |
| Clearance | `Q22` · CL | 8.23 | L/h | 2.286e-06 | m3/s | L/h | review_gapfill (0.7) | Klein_2026:review |
| absorption rate constant for the slow absorption component | `Q49` · kabs | 5.37 | h−1 | 0.001492 | 1/s | 1/h | review_gapfill (0.7) | Klein_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Half‐life (h)'; source reconciliation required
- table representations disagree for 'AUCINF (mg/L/h)'; source reconciliation required
- table representations disagree for 'fu'; source reconciliation required
- table representations disagree for 'M/P ratio'; source reconciliation required
- table representations disagree for 'Cmax (ng/ml)'; source reconciliation required
- table representations disagree for 'Tmax (h)*'; source reconciliation required
- table representations disagree for 'Cmax (mg/L)'; source reconciliation required
- table representations disagree for 'Tmax (h)'; source reconciliation required
- table representations disagree for 'AUCt (mg/L.hr)'; source reconciliation required
- unit_dimension_mismatch: 'AUCINF (mg/L/h)' → Q17 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q32 ('Cmax (mg/L)', value '1.7') — already have one for this compound
- dropped duplicate Q56 ('Tmax (h)', value '1.5') — already have one for this compound
- dropped value-less row: 'Half-life'
- dropped value-less row: 'AUCINF'
- dropped value-less row: 'AUCt'
- dropped value-less row: 'fu'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Tmax'
- dropped value-less row: 'CLpo'
- dropped value-less row: 'M/P ratio'
- dropped value-less row: 'PK'
- dropped value-less row: '*'
- dropped value-less row: 'a'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alprazolam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'milk / predicted / mean' subgroup of Abduljalil_2021 (paper reports 4 populations: milk / observed / mean, milk / predicted / mean, plasma / observed / mean, plasma / predicted / mean)
- gap-filled Q22 (CL) from Klein_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Klein_2026's review values (primary lacked it)

**Extraction notes:**
- table psp412662-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.727 (8/11 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auct].value` | 17.4 | 13.93 | mismatch |
| `gpt-oss:120b` | `parameters[half‐life].value` | 2.48 | 5.84 | mismatch |
| `gpt-oss:120b` | `parameters[m/p ratio]` | 0.83 |  | only_one_extracted |

</details>

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
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | mg/L/h ([mass] / [length] ** 3 / [time]) | ['psp412662-tbl-0001:row5:col8'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['psp412662-tbl-0001:row23:col8', 'psp412662-tbl-0001:row26:col8'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['psp412662-tbl-0001:row9:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['psp412662-tbl-0001:row10:col8'] |
| C5_dimension_Q57 | pass | [time] |  | ['psp412662-tbl-0001:row4:col8', 'psp412662-tbl-0001:row11:col8', 'psp412662-tbl-0001:row22:col8', 'psp412662-tbl-0001:row28:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.23 | ['Klein_2026:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.23 L/h | ['Klein_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balprazolam%5D%20Alprazolam_Abduljalil2021_milk_predicted_mean&body=Drug%3A%20alprazolam%0ARecord%3A%20Alprazolam_Abduljalil2021_milk_predicted_mean%0APaper%3A%20Abduljalil_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alprazolam/Alprazolam_Abduljalil2021_milk_predicted_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:15 UTC</sub>
