<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Diphenhydramine&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/&quot;},{&quot;label&quot;:&quot;Gelotte_2018 \u00b7 2_to_5_years&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Gyawali2019_reference&quot;,&quot;label&quot;:&quot;Gyawali_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Gyawali2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Yoo1990_reference&quot;,&quot;label&quot;:&quot;Yoo_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Yoo1990_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_control&quot;,&quot;label&quot;:&quot;Kawase_2021_control&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_control.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Kawase2021_lps&quot;,&quot;label&quot;:&quot;Kawase_2021_lps&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Kawase2021_lps.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Simons1990_reference&quot;,&quot;label&quot;:&quot;Simons_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Simons1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diphenhydramine_Xie2016_reference&quot;,&quot;label&quot;:&quot;Xie_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_diphenhydramine/Diphenhydramine_Xie2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Diphenhydramine — `Diphenhydramine_Gelotte2018_2_to_5_years`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg/kg ([mass]) vs [time].

<div class="pk-model-meta" hidden drug="Diphenhydramine" model-id="Diphenhydramine_Gelotte2018_2_to_5_years" status="rejected" stale="false" population="children and adolescents aged 2 to 17 years" measured-compound="diphenhydramine" parameterization="apparent" topology="1C"></div>

## Citation
Gelotte CK, Zimmerman BA, Thompson GA. Single-Dose Pharmacokinetic Study of Diphenhydramine HCl in Children and Adolescents. Clinical pharmacology in drug development 7(4):400–407 (2018).
  ·  DOI: [10.1002/cpdd.391](https://doi.org/10.1002/cpdd.391)

## Population and dosing

**Population:** children and adolescents aged 2 to 17 years · condition healthy · age group mixed · n = 42.

**Dosing:** 12.5, 18.75, 31.25, 50 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed diphenhydramine HCl, measured diphenhydramine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dose (mg/kg) | D1 | 0.556 | mg/kg |
| Cmax (ng/mL) | Cmax | 48.52 | ng/mL |
| Tmax b (h) | tmax | 1.5 | h |
| AUC (ng·h/mL) | AUC | 326.4 | ng·h/mL |
| CL/F,obs (mL/min) | CL/F | 510.9 | mL/min |
| CL/F, scaled (mL/min; scaled to 70 kg) | CLnorm/F | 1486 | mL/min; scaled to 70 kg |
| t½, β (h) | t1/2β | 7.62 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit mg/kg ([mass]) vs [time].**

A reported unit could not be converted (D1 and CLnorm/F), so that value has no SI equivalent. Extracted — diphenhydramine: D1 0.556 mg/kg, Cmax 48.5 ng/mL, tmax 1.5 h, AUC 326 ng·h/mL, CL/F 511 mL/min, CLnorm/F 1.49e+03 mL/min; scaled to 70 kg, t1/2β 7.62 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cl/f, scaled: this record has 1486, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dose (mg/kg) | `Q310` · D1 | 0.556 | mg/kg |  |  | mg/kg | llm (0.6) | Gelotte_2018_table_3:row1:col1 |
| Cmax (ng/mL) | `Q32` · Cmax | 48.52 | ng/mL | 4.852e-05 | kg/m3 | ng/ml | exact (1) | Gelotte_2018_table_3:row2:col1 |
| Tmax b (h) | `Q56` · tmax | 1.5 | h | 5400 | s | h | llm_confirmed (0.6) | Gelotte_2018_table_3:row3:col1 |
| AUC (ng·h/mL) | `Q88` · AUC | 326.4 | ng·h/mL | 1.175 | kg*s/m3 | (h·ng)/ml | exact (1) | Gelotte_2018_table_3:row4:col1 |
| CL/F,obs (mL/min) | `Q27` · CL/F | 510.9 | mL/min | 8.515e-06 | m3/s | ml/min | llm_confirmed (0.6) | Gelotte_2018_table_3:row5:col1 |
| CL/F, scaled (mL/min; scaled to 70 kg) | `Q355` · CLnorm/F | 1486 | mL/min; scaled to 70 kg |  |  | ml/min | llm_corrected (0.6) | Gelotte_2018_table_3:row6:col1 |
| t½, β (h) | `Q60` · t1/2β | 7.62 | h | 2.743e+04 | s | h | half_life_rule (0.95) | Gelotte_2018_table_3:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Gelotte_2018_table_3:row0:col1'])
- unit_dimension_mismatch: 'Dose (mg/kg)' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'mL/min; scaled to 70 kg' (CLnorm/F)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=diphenhydramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '2 to 5 years (n = 8)' subgroup of Gelotte_2018 (paper reports 3 populations: 12 to 17 years (n = 18), 2 to 5 years (n = 8), 6 to 11 years (n = 16))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl/f, scaled]` | 1486 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose]` | 0.556 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Gelotte_2018_table_3:row5:col1'] |
| C5_dimension_Q310 | fail | [time] | mg/kg ([mass]) | ['Gelotte_2018_table_3:row1:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Gelotte_2018_table_3:row2:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Gelotte_2018_table_3:row3:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Gelotte_2018_table_3:row7:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Gelotte_2018_table_3:row4:col1'] |
| C5_unit_missing_Q355 | fail | [length] ** 3 / [time] | mL/min; scaled to 70 kg | ['Gelotte_2018_table_3:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.7 L/h | ['Gelotte_2018_table_3:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiphenhydramine%5D%20Diphenhydramine_Gelotte2018_2_to_5_years&body=Drug%3A%20diphenhydramine%0ARecord%3A%20Diphenhydramine_Gelotte2018_2_to_5_years%0APaper%3A%20Gelotte_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_diphenhydramine/Diphenhydramine_Gelotte2018_2_to_5_years%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 02:54 UTC</sub>
