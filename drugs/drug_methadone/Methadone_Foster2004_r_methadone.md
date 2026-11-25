<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;methadone&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/&quot;},{&quot;label&quot;:&quot;Foster_2004 \u00b7 r_methadone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methadone_Gittel2021_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Gittel2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methadone_Shin2024_reference&quot;,&quot;label&quot;:&quot;Shin_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Shin2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methadone_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methadone — `Methadone_Foster2004_r_methadone`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="methadone" model-id="Methadone_Foster2004_r_methadone" status="rejected" stale="false" population="methadone maintenance patients" measured-compound="racmethadone" parameterization="apparent" topology="2C"></div>

## Citation
Foster DJ, Somogyi AA, White JM, Bochner F. Population pharmacokinetics of (R)-, (S)- and rac-methadone in methadone maintenance patients. British journal of clinical pharmacology 57(6):742–755 (2004).
  ·  DOI: [10.1111/j.1365-2125.2004.02079.x](https://doi.org/10.1111/j.1365-2125.2004.02079.x)

## Population and dosing

**Population:** methadone maintenance patients · condition opioid dependence · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (l h -1 ) | CL/F | 8.7 | l h -1 |
| V c /F (l) | V1/F | 145 | l |
| k 12 (h -1 ) | k12 | 0.54 | h -1 |
| k 21 (h -1 ) | k21 | 0.18 | h -1 |
| k a (h -1 ) | kabs | 0.55 | h -1 |
| t lag (h) | tlag | 0.53 | h |
| t 1/2a (h) | t1/2α | 0.90 | h |
| t 1/2b (h) | t1/2β | 51 | h |
| V dss /F (l) | Vss | 597 | l |
| V p /F (l) | V2/F | 444 | l |
| AUC t (mg.hr. ml -1 ) † | AUCt | 4.02 | mg.hr. ml -1 |
| MRT (h) | MRT | 69 | h |
| C max (ng.ml -1 ) † | Cmax | 225 | ng.ml -1 |
| C last (ng.ml -1 ) † | Ct | 139 | ng.ml -1 |
| T max (h) | tmax | 2.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.81). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

None of the extracted parameters is methadone's own; they describe (R)-methadone. Extracted — (R)-methadone: CL/F 8.7 l h -1, V1/F 145 l, k12 0.54 h -1, k21 0.18 h -1, kabs 0.55 h -1, tlag 0.53 h, t1/2α 0.9 h, t1/2β 51 h, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has racmethadone, the second reading rac-methadone; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 8.7 | l h -1 | 2.417e-06 | m3/s | l/h | exact (1) | tab_1:row1:col2 |
| V c /F (l) | `Q290` · V1/F | 145 | l | 0.145 | m3 | l | space_fold (0.95) | tab_1:row2:col2 |
| k 12 (h -1 ) | `Q301` · k12 | 0.54 | h -1 | 0.00015 | 1/s | 1/h | space_fold (0.95) | tab_1:row3:col2 |
| k 21 (h -1 ) | `Q302` · k21 | 0.18 | h -1 | 5e-05 | 1/s | 1/h | space_fold (0.95) | tab_1:row4:col2 |
| k a (h -1 ) | `Q49` · kabs | 0.55 | h -1 | 0.0001528 | 1/s | 1/h | space_fold (0.95) | tab_1:row5:col2 |
| t lag (h) | `Q83` · tlag | 0.53 | h | 1908 | s | h | space_fold (0.95) | tab_1:row6:col2 |
| t 1/2a (h) | `Q59` · t1/2α | 0.90 | h | 3240 | s | h | llm (0.6) | tab_1:row7:col2 |
| t 1/2b (h) | `Q60` · t1/2β | 51 | h | 1.836e+05 | s | h | llm (0.6) | tab_1:row8:col2 |
| V dss /F (l) | `Q65` · Vss | 597 | l | 0.597 | m3 | l | llm (0.6) | tab_1:row9:col2 |
| V p /F (l) | `Q82` · V2/F | 444 | l | 0.444 | m3 | l | space_fold (0.95) | tab_1:row10:col2 |
| AUC t (mg.hr. ml -1 ) † | `Q19` · AUCt | 4.02 | mg.hr. ml -1 | 1.447e+04 | kg*s/m3 | (h·mg)/ml | space_fold (0.95) | tab_1:row12:col2 |
| MRT (h) | `Q53` · MRT | 69 | h | 2.484e+05 | s | h | exact (1) | tab_1:row13:col2 |
| C max (ng.ml -1 ) † | `Q32` · Cmax | 225 | ng.ml -1 | 0.000225 | kg/m3 | ng/ml | space_fold (0.95) | tab_1:row14:col2 |
| C last (ng.ml -1 ) † | `Q75` · Ct | 139 | ng.ml -1 | 0.000139 | kg/m3 | ng/ml | llm (0.6) | tab_1:row15:col2 |
| T max (h) | `Q56` · tmax | 2.5 | h | 9000 | s | h | space_fold (0.95) | tab_1:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '(r)-methadone' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q82 ('V db /F (l)', value '637') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=racmethadone
- population split: '(r)-methadone' subgroup of Foster_2004 (paper reports 3 populations: (r)-methadone, (s)-methadone, rac-methadone)
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 3 PubChem candidate(s) is 'racmethadone' (LLM) — left in mass units
- molar mass: none found for 'racmethadone' — its concentrations stay mass-only

**Extraction notes:**
- table Foster_2004_table_3: unknown_column_role
- table Foster_2004_table_3: units_need_context
- table Foster_2004_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (3 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.81 (17/21 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t 1/2a].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss-120b` | `parameters[v dss /f].parameter_id` | Q65 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | racmethadone | rac-methadone | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | racmethadone | rac-methadone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_1:row12:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row2:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab_1:row3:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab_1:row4:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_1:row14:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row5:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_1:row13:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_1:row16:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['tab_1:row7:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_1:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_1:row9:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['tab_1:row15:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row10:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_1:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.7 L/h | ['tab_1:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 145 L | ['tab_1:row2:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 597 L | ['tab_1:row9:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 444 L | ['tab_1:row10:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethadone%5D%20Methadone_Foster2004_r_methadone&body=Drug%3A%20methadone%0ARecord%3A%20Methadone_Foster2004_r_methadone%0APaper%3A%20Foster_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methadone/Methadone_Foster2004_r_methadone%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:25 UTC</sub>
