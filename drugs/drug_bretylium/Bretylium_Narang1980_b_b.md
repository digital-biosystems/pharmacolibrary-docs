<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;Bretylium&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/&quot;},{&quot;label&quot;:&quot;Narang_1980 \u00b7 b_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bretylium_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Kamath1981_reference&quot;,&quot;label&quot;:&quot;Kamath_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Kamath1981_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Rapeport1985_anderson_et_al_1980b&quot;,&quot;label&quot;:&quot;Rapeport_1985_anderson_et_al_1980b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Rapeport1985_anderson_et_al_1980b.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Rapeport1985_garret_et_al&quot;,&quot;label&quot;:&quot;Rapeport_1985_garret_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Rapeport1985_garret_et_al.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bretylium_Rapeport1985_narang_et_al&quot;,&quot;label&quot;:&quot;Rapeport_1985_narang_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bretylium/Bretylium_Rapeport1985_narang_et_al.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Bretylium — `Bretylium_Narang1980_b_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the blood flow parameter has a dimension mismatch and the peripheral compartment is unreachable from the dose.

<div class="pk-model-meta" hidden drug="Bretylium" model-id="Bretylium_Narang1980_b_b" status="rejected" stale="false" population="normal male volunteers" measured-compound="bretylium" parameterization="mechanistic" topology="2C"></div>

## Citation
Narang PK, Adir J, Josselson J, Yacobi A, Sadler J. Pharmacokinetics of bretylium in man after intravenous administration. Journal of pharmacokinetics and biopharmaceutics 8(4):363–372 (1980).
  ·  DOI: [10.1007/BF01059384](https://doi.org/10.1007/BF01059384)

## Population and dosing

**Population:** normal male volunteers · condition healthy · age group adult · n = &gt;=4.

**Dosing:** 280 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α (hr-1) | λ1 | 2.16 | hr-1 |
| t1/2,α (min) | t1/2α | 19.3 | min |
| β (hr-1) | kel | 0.100 | hr-1 |
| t1/2,β (hr) | t1/2β | 6.93 | hr |
| k12 (hr-1) | k12 | 1.242 | hr-1 |
| k21 (hr-1) | k21 | 0.384 | hr-1 |
| kar (hr-1) | kabs | 0.018 | hr-1 |
| Vc (liters/kg) | V1 | 1.37 | liters/kg |
| Vd,β (liters/kg) | V2 | 7.34 | liters/kg |
| Vdss (liters/kg) | Vss | 5.78 | liters/kg |
| RC (liters/hr-kg) | CLR | 0.709 | L/h/kg |
| TBC (liters/hr-kg) | Qb | 0.734 | L/h/kg |
| Percent dose in urine after 24 hr | fe | 79.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the blood flow parameter has a dimension mismatch and the peripheral compartment is unreachable from the dose.**

The blood flow parameter (Qb) is reported in liters/hr-kg, a unit that could not be converted to SI, causing a dimension mismatch on this structural parameter. Additionally, the model structure contains an unreachable peripheral compartment, meaning there is no path from the dose to that compartment. The second reader disagreed on the dose compound, identifying it as bretylium tosylate rather than bretylium. Extracted — bretylium: λ1 2.16 hr-1, t1/2α 19.3 min, kel 0.1 hr-1, t1/2β 6.93 hr, k12 1.24 hr-1, k21 0.384 hr-1, kabs 0.018 hr-1, V1 1.37 liters/kg, … (+5).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bretylium, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α (hr-1) | `Q67` · λ1 | 2.16 | hr-1 |  |  | 1/h | exact (1) | Narang_1980_table_2:row0:col4 |
| t1/2,α (min) | `Q59` · t1/2α | 19.3 | min | 1158 | s | min | llm_corrected (0.6) | Narang_1980_table_2:row1:col4 |
| β (hr-1) | `Q47` · kel | 0.100 | hr-1 | 2.778e-05 | 1/s | 1/h | exact (1) | Narang_1980_table_2:row2:col4 |
| t1/2,β (hr) | `Q60` · t1/2β | 6.93 | hr | 2.495e+04 | s | h | llm_corrected (0.6) | Narang_1980_table_2:row3:col4 |
| k12 (hr-1) | `Q301` · k12 | 1.242 | hr-1 | 0.000345 | 1/s | 1/h | exact (1) | Narang_1980_table_2:row4:col4 |
| k21 (hr-1) | `Q302` · k21 | 0.384 | hr-1 | 0.0001067 | 1/s | 1/h | exact (1) | Narang_1980_table_2:row5:col4 |
| kar (hr-1) | `Q49` · kabs | 0.018 | hr-1 | 5e-06 | 1/s | 1/h | llm (0.6) | Narang_1980_table_2:row7:col4 |
| Vc (liters/kg) | `Q63` · V1 | 1.37 | liters/kg | 0.0959 | m3 | l/kg | exact (1) | Narang_1980_table_2:row9:col4 |
| Vd,β (liters/kg) | `Q64` · V2 | 7.34 | liters/kg | 0.5138 | m3 | l/kg | llm_corrected (0.6) | Narang_1980_table_2:row10:col4 |
| Vdss (liters/kg) | `Q65` · Vss | 5.78 | liters/kg | 0.4046 | m3 | l/kg | llm (0.6) | Narang_1980_table_2:row11:col4 |
| RC (liters/hr-kg) | `Q26` · CLR | 0.709 | L/h/kg | 1.379e-05 | m3/s | L/h | llm (0.6) | Narang_1980_table_2:row12:col4 |
| TBC (liters/hr-kg) | `Q54` · Qb | 0.734 | L/h/kg | 1.427e-05 | m3/s | L/h | llm (0.6) | Narang_1980_table_2:row13:col4 |
| Percent dose in urine after 24 hr | `Q44` · fe | 79.7 |  |  |  |  | llm (0.6) | Narang_1980_table_2:row14:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α (hr-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q47 ('ke (hr-1)', value '0.519') — already have one for this compound
- dropped duplicate Q49 ('ka1 (hr-1)', value '0.537') — already have one for this compound
- unit_dimension_unknown: 'liters/hr-kg' (CLR)
- unit_dimension_unknown: 'liters/hr-kg' (Qb)
- dropped unlinked row (NIL): 'after 72 hr' — extend the ontology if this is a real PK parameter (source ['Narang_1980_table_2:row15:col4'])
- implicit units: 'RC (liters/hr-kg)' → L/h/kg (from the paper text: "The parameter is labeled 'RC (liters/hr-kg)' in the input list, and the text in the Abstract states 'apparent volume of ")
- implicit units: 'TBC (liters/hr-kg)' → L/h/kg (from the paper text: "The parameter is labeled 'TBC (liters/hr-kg)' in the input list. While 'TBC' is defined in the prompt as blood flow (Qb)")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc (liters/kg)); Q64 (Vd,β (liters/kg))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bretylium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'b. b.' subgroup of Narang_1980 (paper reports 5 populations: b. b., j. j., mean, p. k., s. b.)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k12].value` | 1.242 | 1.033 | mismatch |
| `gpt-oss-120b` | `parameters[k21].value` | 0.384 | 0.286 | mismatch |
| `gpt-oss-120b` | `parameters[kar].value` | 0.018 | 0.089 | mismatch |
| `gpt-oss-120b` | `parameters[percent dose in urine after 24 hr].value` | 79.7 | 71.9 | mismatch |
| `gpt-oss-120b` | `parameters[rc].value` | 0.709 | 0.608 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2,α].value` | 19.3 | 25.2 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2,β].value` | 6.93 | 7.8 | mismatch |
| `gpt-oss-120b` | `parameters[tbc].parameter_id` | Q54 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[tbc].value` | 0.734 | 10.724 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 1.37 | 1.34 | mismatch |
| `gpt-oss-120b` | `parameters[vd,β].parameter_id` | Q64 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vd,β].value` | 7.34 | 8.18 | mismatch |
| `gpt-oss-120b` | `parameters[vdss].value` | 5.78 | 5.90 | mismatch |
| `gpt-oss-120b` | `parameters[α].value` | 2.16 | 1.81 | mismatch |
| `gpt-oss-120b` | `parameters[β].value` | 0.100 | 0.09 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | bretylium | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bretylium | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Narang_1980_table_2:row12:col4'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Narang_1980_table_2:row4:col4'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Narang_1980_table_2:row5:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Narang_1980_table_2:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Narang_1980_table_2:row7:col4'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Narang_1980_table_2:row13:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Narang_1980_table_2:row1:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Narang_1980_table_2:row3:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Narang_1980_table_2:row9:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Narang_1980_table_2:row10:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Narang_1980_table_2:row11:col4'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | ['Narang_1980_table_2:row0:col4'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 95.9 L | ['Narang_1980_table_2:row9:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 514 L | ['Narang_1980_table_2:row10:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 405 L | ['Narang_1980_table_2:row11:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbretylium%5D%20Bretylium_Narang1980_b_b&body=Drug%3A%20bretylium%0ARecord%3A%20Bretylium_Narang1980_b_b%0APaper%3A%20Narang_1980%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bretylium/Bretylium_Narang1980_b_b%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 16:03 UTC</sub>
