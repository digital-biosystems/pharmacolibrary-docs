<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Varghese_2016 \u00b7 dnr_solution&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Quartino_2007_SI&quot;,&quot;label&quot;:&quot;Quartino_2007 \u00b7 SI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/pd_Quartino_2007_SI.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_Varghese2016_dnr_solution`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="daunorubicin" model-id="Daunorubicin_Varghese2016_dnr_solution" status="rejected" stale="false" population="Wistar rats" measured-compound="daunorubicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Varghese SE, Fariya MK, Rajawat GS, Steiniger F, Fahr A, Nagarsenker MS. Lecithin and PLGA-based self-assembled nanocomposite, Lecithmer: preparation, characterization, and pharmacokinetic/pharmacodynamic evaluation. Drug delivery and translational research 6(4):342–353 (2016).
  ·  DOI: [10.1007/s13346-016-0314-y](https://doi.org/10.1007/s13346-016-0314-y)

## Population and dosing

**Population:** Wistar rats · condition healthy.

**Dosing:** 280 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C 0 (ng/mL) | C0 | 19.142 | ng/mL |
| V d (L) | V | 57.46 | L |
| K e (h -1 ) | kel | 0.4237 | h -1 |
| Cl (L/h) | CL | 23.24 | L/h |
| t 1/2 | t1/2z | 1.635 | h |
| AUC (ng h/mL) | AUC | 39.7 | ng h/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (C0), so that value has no SI equivalent. Extracted — daunorubicin: C0 19.1 ng/mL, V 57.5 L, kel 0.424 h -1, CL 23.2 L/h, t1/2z 1.64 h, AUC 39.7 ng h/mL.

Independently confirmed by `gpt-oss-120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C 0 (ng/mL) | `Q86` · C0 | 19.142 | ng/mL |  |  | ng/ml | space_fold (0.95) | Varghese_2016_table_5:row0:col1 |
| V d (L) | `Q61` · V | 57.46 | L | 0.05746 | m3 | l | space_fold (0.95) | Varghese_2016_table_5:row1:col1 |
| K e (h -1 ) | `Q47` · kel | 0.4237 | h -1 | 0.0001177 | 1/s | 1/h | space_fold (0.95) | Varghese_2016_table_5:row2:col1 |
| Cl (L/h) | `Q22` · CL | 23.24 | L/h | 6.456e-06 | m3/s | l/h | exact (1) | Varghese_2016_table_5:row3:col1 |
| t 1/2 | `Q57` · t1/2z | 1.635 | h | 5886 | s | h | half_life_rule (0.95) | Varghese_2016_table_5:row4:col1 |
| AUC (ng h/mL) | `Q88` · AUC | 39.7 | ng h/mL | 0.1429 | kg*s/m3 | (h·ng)/ml | exact (1) | Varghese_2016_table_5:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dnr solution' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'C 0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 't 1/2' → h (from the paper text: 'DNR solution showed a clearance of 23.24 L/h with shorter half-life of 1.635 h than DNR-loaded Lecithmer')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daunorubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'dnr solution' subgroup of Varghese_2016 (paper reports 2 populations: dnr solution, mean increase in paw volume in ml ± sem)

**Extraction notes:**
- table tab_3: representations disagree; selected evidence retained, not merged
- companion parameter table 5 transcribed (12 record(s))
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.635 | 1.714 | 1.048 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Varghese_2016_table_5:row3:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Varghese_2016_table_5:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Varghese_2016_table_5:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Varghese_2016_table_5:row1:col1'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) |  |  | ['Varghese_2016_table_5:row0:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Varghese_2016_table_5:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 23.24 |  |  | ['Varghese_2016_table_5:row3:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.2 L/h |  |  | ['Varghese_2016_table_5:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 57.5 L |  |  | ['Varghese_2016_table_5:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_Varghese2016_dnr_solution&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_Varghese2016_dnr_solution%0APaper%3A%20Varghese_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/Daunorubicin_Varghese2016_dnr_solution%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:58 UTC</sub>
