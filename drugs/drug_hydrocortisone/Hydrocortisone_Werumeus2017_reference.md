<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone&quot;,&quot;href&quot;:&quot;drugs/drug_hydrocortisone/&quot;},{&quot;label&quot;:&quot;Werumeus_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydrocortisone — `Hydrocortisone_Werumeus2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Salivary cortisol is an orphan compartment with no dose path, and hydrocortisone clearance units failed conversion, invalidating the record.

<div class="pk-model-meta" hidden drug="hydrocortisone" model-id="Hydrocortisone_Werumeus2017_reference" status="rejected" stale="false" population="adults with secondary adrenal insufficiency" measured-compound="cortisol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Werumeus Buning J, Touw DJ, Brummelman P, Dullaart RPF, van den Berg G, van der Klauw MM et al. Pharmacokinetics of oral hydrocortisone - Results and implications from a randomized controlled trial. Metabolism: clinical and experimental 71:7–16 (2017).
  ·  DOI: [10.1016/j.metabol.2017.02.005](https://doi.org/10.1016/j.metabol.2017.02.005)

## Population and dosing

**Population:** adults with secondary adrenal insufficiency · condition secondary adrenal insufficiency · age group adult · n = 43.

**Dosing:** 10, 15, 20 mg, oral, multiple, every 8 h.

**Dosed compound ≠ measured compound:** dosed hydrocortisone, measured cortisol.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 337.58 | L/h |
| V d (L) | V | 486.25 | L |
| t 1/2 (h) | kel | 1.00 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Salivary cortisol is an orphan compartment with no dose path, and hydrocortisone clearance units failed conversion, invalidating the record.**

The model defines salivary cortisol as a metabolite of plasma free cortisol but contains no parameter or rate constant linking it to a parent dose, making it unreachable from the administration site. The clearance parameter for plasma free cortisol was extracted with units that could not be converted to SI, preventing a valid numerical evaluation of the elimination rate. Additionally, the second reader disagreed on the primary analyte identity, suggesting the model may have confused the administered drug (hydrocortisone) with its metabolite (cortisol). Extracted — plasma free cortisol: CL 338 L/h, V 486 L, kel 1 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hydrocortisone, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 337.58 | L/h | 9.377e-05 | m3/s | l/h | exact (1) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col6, tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col3, tab_1:row11:col4, tab_1:row11:col5, tab_1:row11:col6 |
| V d (L) | `Q61` · V | 486.25 | L | 0.4863 | m3 | l | exact (1) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6, tab_1:row8:col1, tab_1:row8:col2, tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col6, tab_1:row12:col1, tab_1:row12:col2, tab_1:row12:col3, tab_1:row12:col4, tab_1:row12:col5, tab_1:row12:col6 |
| t 1/2 (h) | `Q47` · kel | 1.00 | h |  |  | h | exact (1) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col4, tab_1:row5:col5, tab_1:row9:col1, tab_1:row9:col2, tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col5, tab_1:row13:col1, tab_1:row13:col2, tab_1:row13:col3, tab_1:row13:col4, tab_1:row13:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'monte carlo simulation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 't 1/2 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- metabolite volume: 'V d (L)' Q63→Q61 for plasma free cortisol — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cortisol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 3/3 row label(s) assigned, 51 linked by role; re-tagged parent→plasma free cortisol ×51
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (1/10 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['hydrocortisone', 'plasma free cortisol', 'metabolism'], ['plasma total cortisol', 'plasma free cortisol', 'interconversion'], ['plasma free cortisol', 'salivary cortisol', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` |  | 195.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 337.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` |  | 1.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2]` | 1.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` |  | 445.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v d]` | 486.25 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | hydrocortisone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cortisol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.17 | 0.998 | 0.853 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C5_dimension_Q47 | fail | [time] | h |  |  | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row9:col1', 'tab_1:row9:col2', 'tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3', 'tab_1:row13:col4', 'tab_1:row13:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5', 'tab_1:row12:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 337.6 |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 338 L/h |  |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3', 'tab_1:row11:col4', 'tab_1:row11:col5', 'tab_1:row11:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 486 L |  |  | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col4', 'tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4', 'tab_1:row12:col5', 'tab_1:row12:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrocortisone%5D%20Hydrocortisone_Werumeus2017_reference&body=Drug%3A%20hydrocortisone%0ARecord%3A%20Hydrocortisone_Werumeus2017_reference%0APaper%3A%20Werumeus_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydrocortisone/Hydrocortisone_Werumeus2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 19:13 UTC</sub>
