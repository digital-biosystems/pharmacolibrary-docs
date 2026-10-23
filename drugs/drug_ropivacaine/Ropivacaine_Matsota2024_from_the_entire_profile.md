<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;ropivacaine&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/&quot;},{&quot;label&quot;:&quot;Matsota_2024 \u00b7 from_the_entire_profile&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ropivacaine_Mahmoud2020_reference&quot;,&quot;label&quot;:&quot;Mahmoud_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Mahmoud2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Matsota2024_arterial&quot;,&quot;label&quot;:&quot;Matsota_2024_arterial&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Matsota2024_arterial.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Song2019_reference&quot;,&quot;label&quot;:&quot;Song_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Song2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Cusato2011_reference&quot;,&quot;label&quot;:&quot;Cusato_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Cusato2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Hansen2001_reference&quot;,&quot;label&quot;:&quot;Hansen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_Hansen2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_McCann2001_reference&quot;,&quot;label&quot;:&quot;McCann_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropivacaine/Ropivacaine_McCann2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ropivacaine — `Ropivacaine_Matsota2024_from_the_entire_profile`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The recorded volume of distribution (160 ml) and clearance (0.87 L/kg/h) fall outside the physiological window for ropivacaine.

<div class="pk-model-meta" hidden drug="ropivacaine" model-id="Ropivacaine_Matsota2024_from_the_entire_profile" status="rejected" stale="false" population="adult patients undergoing open thoracotomy" measured-compound="ropivacaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Matsota P, Karalis V, Saranteas T, Kiospe F, Markantonis SL. Ropivacaine pharmacokinetics in the arterial and venous pools after ultrasound-guided continuous thoracic paravertebral nerve block. Journal of anaesthesiology, clinical pharmacology 40(2):283–292 (2024).
  ·  DOI: [10.4103/joacp.joacp_353_22](https://doi.org/10.4103/joacp.joacp_353_22)

## Population and dosing

**Population:** adult patients undergoing open thoracotomy · condition open thoracotomy · age group adult · n = 18.

**Dosing:** 28, 125 mg, other, multiple, every 1 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution of the central compartment (Vap) for the arterial pool | V | 160 | ml |
| clearance | CL | 0.87 | L/kg/h |
| ka | kabs | 32.0 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The recorded volume of distribution (160 ml) and clearance (0.87 L/kg/h) fall outside the physiological window for ropivacaine.**

The central compartment volume is specified as 160 ml, which is implausibly small for an adult patient. Simultaneously, the total clearance is listed as 0.87 L/kg/h, a value that exceeds typical physiological limits. These magnitudes indicate a unit or scale extraction error rather than valid pharmacokinetic estimates. Extracted — ropivacaine: V 160 ml, CL 0.87 L/kg/h, kabs 32 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of asince ropivacaine administration is extravascular, the vap and cl estimates actually refer to vap/f and cl/f, respectively, where f is the bioavailable fraction: this record has none, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution of the central compartment (Vap) for the arterial pool | `Q61` · V | 160 | ml | 0.00016 | m3 | L | boundary_compartment (0.9) | Matsota_2024:results_prose |
| clearance | `Q22` · CL | 0.87 | L/kg/h | 1.692e-05 | m3/s | L/h | review_gapfill (0.7) | Mahmoud_2020:review |
| ka | `Q49` · kabs | 32.0 | h-1 | 0.008889 | 1/s | 1/h | review_gapfill (0.7) | Ling_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'from the entire profile' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Minimum' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row3:col4', 'Matsota_2024_table_3:row3:col5', 'Matsota_2024_table_3:row3:col6', 'Matsota_2024_table_3:row11:col4', 'Matsota_2024_table_3:row11:col5', 'Matsota_2024_table_3:row11:col6'])
- dropped unlinked row (NIL): 'First quartile' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row4:col4', 'Matsota_2024_table_3:row4:col5', 'Matsota_2024_table_3:row4:col6', 'Matsota_2024_table_3:row12:col4', 'Matsota_2024_table_3:row12:col5', 'Matsota_2024_table_3:row12:col6'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row5:col4', 'Matsota_2024_table_3:row5:col5', 'Matsota_2024_table_3:row5:col6', 'Matsota_2024_table_3:row13:col4', 'Matsota_2024_table_3:row13:col5', 'Matsota_2024_table_3:row13:col6'])
- dropped unlinked row (NIL): 'Third quartile' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row6:col4', 'Matsota_2024_table_3:row6:col5', 'Matsota_2024_table_3:row6:col6', 'Matsota_2024_table_3:row14:col4', 'Matsota_2024_table_3:row14:col5', 'Matsota_2024_table_3:row14:col6'])
- dropped unlinked row (NIL): 'Maximum' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row7:col4', 'Matsota_2024_table_3:row7:col5', 'Matsota_2024_table_3:row7:col6', 'Matsota_2024_table_3:row15:col4', 'Matsota_2024_table_3:row15:col5', 'Matsota_2024_table_3:row15:col6'])
- dropped unlinked row (NIL): 'Average' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row8:col4', 'Matsota_2024_table_3:row8:col5', 'Matsota_2024_table_3:row8:col6', 'Matsota_2024_table_3:row16:col4', 'Matsota_2024_table_3:row16:col5', 'Matsota_2024_table_3:row16:col6'])
- dropped unlinked row (NIL): 'Coefficient of variation' — extend the ontology if this is a real PK parameter (source ['Matsota_2024_table_3:row9:col4', 'Matsota_2024_table_3:row9:col5', 'Matsota_2024_table_3:row9:col6', 'Matsota_2024_table_3:row17:col4', 'Matsota_2024_table_3:row17:col5', 'Matsota_2024_table_3:row17:col6'])
- table mostly unlinked (7/7 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q63 ('volume of distribution of the central compartment (Vap) for the arterial pool'=160) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ropivacaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'volume of distribution of the central compartment (Vap) for the arterial pool' is the general volume)
- status held at route_to_review — not promoted
- population split: 'from the entire profile' subgroup of Matsota_2024 (paper reports 3 populations: arterial, from the entire profile, only from the single-bolus part)
- gap-filled Q22 (CL) from Mahmoud_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ling_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell joacp_353_22-t002:row7:col4 = '&lt;0.001'
- companion parameter table 3 transcribed (84 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[asince ropivacaine administration is extravascular, the vap and cl estimates actually refer to vap/f and cl/f, respectively, where f is the bioavailable fraction]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 190.48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 0.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 32.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[third quartile]` |  | 14401.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution of the central compartment (vap) for the arterial pool]` | 160 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Mahmoud_2020:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ling_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.87 | ['Mahmoud_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 60.9 L/h | ['Mahmoud_2020:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.16 L | ['Matsota_2024:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropivacaine%5D%20Ropivacaine_Matsota2024_from_the_entire_profile&body=Drug%3A%20ropivacaine%0ARecord%3A%20Ropivacaine_Matsota2024_from_the_entire_profile%0APaper%3A%20Matsota_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ropivacaine/Ropivacaine_Matsota2024_from_the_entire_profile%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:39 UTC</sub>
