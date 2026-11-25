<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;mitoxantrone&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/&quot;},{&quot;label&quot;:&quot;Lacayo_2002 \u00b7 control_arm&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mitoxantrone_Launay1989_reference&quot;,&quot;label&quot;:&quot;Launay_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Launay1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mitoxantrone_Brandon2026_reference&quot;,&quot;label&quot;:&quot;Brandon_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/Mitoxantrone_Brandon2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Meg_as_Vericat_2019_LPC&quot;,&quot;label&quot;:&quot;Meg\u00edas-Vericat_2019 \u00b7 LPC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_mitoxantrone/pd_Meg_as_Vericat_2019_LPC.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mitoxantrone — `Mitoxantrone_Lacayo2002_control_arm`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit h ([time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="mitoxantrone" model-id="Mitoxantrone_Lacayo2002_control_arm" status="rejected" stale="false" population="children with acute myeloid leukemia" measured-compound="mitoxantrone" parameterization="mechanistic" topology="1C"></div>

## Citation
Lacayo NJ, Lum BL, Becton DL, Weinstein H, Ravindranath Y, Chang MN et al. Pharmacokinetic interactions of cyclosporine with etoposide and mitoxantrone in children with acute myeloid leukemia. Leukemia 16(5):920–927 (2002).
  ·  DOI: [10.1038/sj.leu.2402455](https://doi.org/10.1038/sj.leu.2402455)

## Population and dosing

**Population:** children with acute myeloid leukemia · condition acute myeloid leukemia · age group mixed.

**Dosing:** 60, 100 mg/m2, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance l/h/m 2 ) | CL | 3.8 | L/h/m2 |
| AUC (mg*h/l) | AUC | 66 | mg*h/l |
| V 1 (l/m 2 ) | V | 6.5 | l/m 2 |
| T . ␣ (h) | AUCt | 0.37 | h |
| T . ␤ (h) | t1/2β | 3.5 | h |
| T . ␥ (h) | t1/2γ | 24 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583), qwen3.8-27b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit h ([time]) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (CL and AUCt), so that value has no SI equivalent. Extracted — mitoxantrone: CL 3.8 L/h/m2, AUC 66 mg*h/l, V 6.5 l/m 2, AUCt 0.37 h, t1/2β 3.5 h, t1/2γ 24 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mitoxantrone, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance l/h/m 2 ) | `Q22` · CL | 3.8 | L/h/m2 |  |  | L/h/m2 | llm_confirmed (0.6) | tab_0:row4:col1 |
| AUC (mg*h/l) | `Q88` · AUC | 66 | mg*h/l | 237.6 | kg*s/m3 | (h·mg)/l | exact (1) | tab_0:row5:col1 |
| V 1 (l/m 2 ) | `Q61` · V | 6.5 | l/m 2 | 0.01125 | m3 | l/m2 | space_fold (0.95) | tab_0:row6:col1, tab_0:row13:col1 |
| T . ␣ (h) | `Q19` · AUCt | 0.37 | h |  |  | h | llm (0.6) | tab_0:row7:col1, tab_0:row14:col1 |
| T . ␤ (h) | `Q60` · t1/2β | 3.5 | h | 1.26e+04 | s | h | llm (0.6) | tab_0:row8:col1, tab_0:row15:col1 |
| T . ␥ (h) | `Q89` · t1/2γ | 24 | h | 8.64e+04 | s | h | llm (0.6) | tab_0:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Etoposide'; source reconciliation required
- table representations disagree for 'Dose (mg/m 2 )'; source reconciliation required
- table representations disagree for 'Clearance l/h/m 2 )'; source reconciliation required
- table representations disagree for 'AUC (mg*h/l)'; source reconciliation required
- table representations disagree for 'V 1 (l/m 2 )'; source reconciliation required
- table representations disagree for 'T . ␣ (h)'; source reconciliation required
- table representations disagree for 'T . ␤ (h)'; source reconciliation required
- table representations disagree for 'Mitoxantrone'; source reconciliation required
- table representations disagree for 'Clearance (l/h/m 2 )'; source reconciliation required
- table representations disagree for 'AUC (ng*h/l)'; source reconciliation required
- table representations disagree for 'T . ␥ (h)'; source reconciliation required
- dropped unlinked row (NIL): 'Etoposide' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col1'])
- dropped unlinked row (NIL): 'Dose (mg/m 2 )' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1'])
- unit_dimension_mismatch: 'T . ␣ (h)' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Mitoxantrone' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- dropped duplicate Q22 ('Clearance (l/h/m 2 )', value '57') — already have one for this compound
- dropped duplicate Q88 ('AUC (ng*h/l)', value '194') — already have one for this compound
- implicit units: 'Clearance l/h/m 2 )' → L/h/m2 (from the paper text: "The parameter label in the input string is 'Clearance l/h/m 2 )', and the paper text confirms the use of body surface ar")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mitoxantrone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1 (l/m 2 )' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'control arm' subgroup of Lacayo_2002 (paper reports 2 populations: control arm, csa arm)

**Extraction notes:**
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged
- table Lacayo_2002_table_3: units_need_context
- companion parameter table 3 transcribed (12 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 4 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |
| `qwen3.8-27b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t . ␣].parameter_id` | Q19 | Q57 | mismatch |
| `gpt-oss-120b` | `parameters[t . ␥]` | 24 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mitoxantrone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mitoxantrone | unknown | mismatch |
| `qwen3.8-27b` | `parameters[clearance l/h/m 2 )].parameter_id` | Q354 | Q22 | mismatch |
| `qwen3.8-27b` | `parameters[clearance]` | 57 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t . ␣].parameter_id` | Q57 | Q361 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | etoposide and mitoxantrone, with or without cyclosporine | mitoxantrone, etoposide | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | mitoxantrone | mitoxantrone, etoposide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['tab_0:row7:col1', 'tab_0:row14:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row4:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['tab_0:row8:col1', 'tab_0:row15:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row6:col1', 'tab_0:row13:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_0:row5:col1'] |
| C5_dimension_Q89 | pass | [time] |  | ['tab_0:row16:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.8 | ['tab_0:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 11.2 L | ['tab_0:row6:col1', 'tab_0:row13:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmitoxantrone%5D%20Mitoxantrone_Lacayo2002_control_arm&body=Drug%3A%20mitoxantrone%0ARecord%3A%20Mitoxantrone_Lacayo2002_control_arm%0APaper%3A%20Lacayo_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mitoxantrone/Mitoxantrone_Lacayo2002_control_arm%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:38 UTC</sub>
