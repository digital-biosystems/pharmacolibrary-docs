<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/&quot;},{&quot;label&quot;:&quot;Anderson_1996 \u00b7 chinese&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cilazapril_Meredith1989_reference&quot;,&quot;label&quot;:&quot;Meredith_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Meredith1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cilazapril_Song2002_reference&quot;,&quot;label&quot;:&quot;Song_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Song2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cilazapril_Williams1989v2_reference&quot;,&quot;label&quot;:&quot;Williams_1989_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Williams1989v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cilazapril — `Cilazapril_Anderson1996_chinese`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit 0.014 (dimensionless) vs [mass] / [length] ** 3; Q17 unit h ([time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="cilazapril" model-id="Cilazapril_Anderson1996_chinese" status="rejected" stale="false" population="healthy normotensive Chinese and Caucasian volunteers" measured-compound="cilazaprilat" parameterization="mechanistic" topology="1C"></div>

## Citation
Anderson PJ, Critchley JA, Tomlinson B. A comparison of the pharmacokinetics and pharmacodynamics of cilazapril between Chinese and Caucasian healthy, normotensive volunteers. European journal of clinical pharmacology 50(1-2):57–62 (1996).
  ·  DOI: [10.1007/s002280050069](https://doi.org/10.1007/s002280050069)

## Population and dosing

**Population:** healthy normotensive Chinese and Caucasian volunteers · condition healthy · age group adult.

**Dosing:** 2.5 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed cilazapril, measured cilazaprilat.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (µg • l 91 ) | Cmax | 28.2 | 0.014 |
| AUC ∞ (µg • l 91 • h) | AUC∞ | 181 | h |
| t 1/2 (h) | t1/2z | 1.86 | h |
| Cilazaprilat 1 Chinese Single dose 28 2.5 mg | CL | 270.0 | mL/kg/h |
| Vd | V | 8.7 | L |
| Ego-onset ( h) | tlag | -1.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q32 unit 0.014 (dimensionless) vs [mass] / [length] ** 3; Q17 unit h ([time]) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (Cmax and AUC∞), so that value has no SI equivalent. None of the extracted parameters is cilazapril's own; they describe cilazaprilat. Extracted — cilazaprilat: Cmax 28.2 0.014, AUC∞ 181 h, t1/2z 1.86 h, CL 270 mL/kg/h, V 8.7 L, tlag -1.6 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has cilazaprilat, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (µg • l 91 ) | `Q32` · Cmax | 28.2 | 0.014 |  |  | 0.014 | space_fold (0.95) | tab_0:row1:col1 |
| AUC ∞ (µg • l 91 • h) | `Q17` · AUC∞ | 181 | h |  |  | h | space_fold (0.95) | tab_0:row3:col1 |
| t 1/2 (h) | `Q57` · t1/2z | 1.86 | h | 6696 | s | h | half_life_rule (0.95) | tab_0:row4:col1, tab_0:row5:col1 |
| Cilazaprilat 1 Chinese Single dose 28 2.5 mg | `Q22` · CL | 270.0 | mL/kg/h | 5.25e-06 | m3/s | L/h | review_gapfill (0.7) | Ding_2000:review |
| Vd | `Q61` · V | 8.7 | L | 0.0087 | m3 | L | review_gapfill (0.7) | Song_2002:review |
| Ego-onset ( h) | `Q83` · tlag | -1.6 | h | -5760 | s | h | review_gapfill (0.7) | Massarella_1989:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'C max (µg • l 91 )'; source reconciliation required
- table representations disagree for 'AUC ∞ (µg • l 91 • h)'; source reconciliation required
- table representations disagree for 't 1/2 (h)'; source reconciliation required
- unit_dimension_mismatch: 'C max (µg • l 91 )' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC ∞ (µg • l 91 • h)' → Q17 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number 0.187 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cilazaprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'chinese' subgroup of Anderson_1996 (paper reports 2 populations: caucasian, chinese)
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 1 linked by role
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'cilazaprilat' (LLM) — left in mass units
- molar mass: none found for 'cilazaprilat' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Ding_2000's review values (primary lacked it)
- gap-filled Q61 (V) from Song_2002's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Massarella_1989's review values (primary lacked it)

**Extraction notes:**
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[plasma clearance]` |  | 0.27 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | cilazaprilat | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['tab_0:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ding_2000:review'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | 0.014 (dimensionless) | ['tab_0:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row4:col1', 'tab_0:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Song_2002:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Massarella_1989:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 270 | ['Ding_2000:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.9 L/h | ['Ding_2000:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.7 L | ['Song_2002:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcilazapril%5D%20Cilazapril_Anderson1996_chinese&body=Drug%3A%20cilazapril%0ARecord%3A%20Cilazapril_Anderson1996_chinese%0APaper%3A%20Anderson_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cilazapril/Cilazapril_Anderson1996_chinese%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 11:16 UTC</sub>
