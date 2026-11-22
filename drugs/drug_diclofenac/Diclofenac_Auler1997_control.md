<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Auler_1997 \u00b7 control&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Lucas2016_reference&quot;,&quot;label&quot;:&quot;Lucas_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Lucas2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Idkaidek1998_sustained&quot;,&quot;label&quot;:&quot;Idkaidek_1998_sustained&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Auler1997_control`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Diclofenac AUCt was rejected because its reported unit, microgram hours per milliliter, has dimensions inconsistent with an area-under-the-curve calculation.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Auler1997_control" status="rejected" stale="false" population="surgical patients" measured-compound="diclofenac" parameterization="mechanistic" topology="1C"></div>

## Citation
Auler Júnior JO, Espada EB, Crivelli E, Quintavalle TB, Kurata A, Stolf NA et al. Diclofenac plasma protein binding: PK-PD modelling in cardiac patients submitted to cardiopulmonary bypass. Brazilian journal of medical and biological research = Revista brasileira de pesquisas medicas e biologicas 30(3):369–374 (1997).
  ·  DOI: [10.1590/s0100-879x1997000300010](https://doi.org/10.1590/s0100-879x1997000300010)

## Population and dosing

**Population:** surgical patients · condition post-cardiac surgery · age group adult.

**Dosing:** 70 mg, im, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CMAX (ng/ml) | Cmax | 1811 | ng/ml |
| TMAX (h) | tmax | 0.50 | h |
| AUCT (µg h-1 ml-1) | AUCt | 4.04 | µg h-1 ml-1 |
| α (h-1) | λ1 | 1.98 | h-1 |
| K12 (h-1) | k12 | 0.70 | h-1 |
| K21 (h-1) | k21 | 0.82 | h-1 |
| VdAREA (l/kg) | V | 0.98 | l/kg |
| β (h-1) | kel | 0.30 | h-1 |
| t(1/2)β (h) | t1/2β | 2.33 | h |
| CLT (ml min-1 kg-1) | CL | 5.03 | ml min-1 kg-1 |
| k a (h À1 ) | kabs | 0.94 | h À1 |
| Lag time 1 | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Diclofenac AUCt was rejected because its reported unit, microgram hours per milliliter, has dimensions inconsistent with an area-under-the-curve calculation.**

The record lists the AUCt value as 4.04 with the unit µg h-1 ml-1, which dimensionally represents mass per time per volume rather than the expected mass times time per volume. This unit conflict caused the parameter to be flagged for a dimension mismatch during the review. Additionally, the reported unit could not be converted to standard international units, preventing the parameter from being properly normalized for analysis. Extracted — diclofenac: Cmax 1.81e+03 ng/ml, tmax 0.5 h, AUCt 4.04 µg h-1 ml-1, λ1 1.98 h-1, k12 0.7 h-1, k21 0.82 h-1, V 0.98 l/kg, kel 0.3 h-1, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of binding: this record has none, the second reading 99; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CMAX (ng/ml) | `Q32` · Cmax | 1811 | ng/ml | 0.001811 | kg/m3 | ng/ml | exact (1) | Auler_1997_table_1:row1:col2 |
| TMAX (h) | `Q56` · tmax | 0.50 | h | 1800 | s | h | exact (1) | Auler_1997_table_1:row2:col2 |
| AUCT (µg h-1 ml-1) | `Q19` · AUCt | 4.04 | µg h-1 ml-1 |  |  | µg/(h·ml) | exact (1) | Auler_1997_table_1:row3:col2 |
| α (h-1) | `Q67` · λ1 | 1.98 | h-1 | 0.00055 | 1/s | 1/h | exact (1) | Auler_1997_table_1:row6:col2 |
| K12 (h-1) | `Q301` · k12 | 0.70 | h-1 | 0.0001944 | 1/s | 1/h | exact (1) | Auler_1997_table_1:row7:col2 |
| K21 (h-1) | `Q302` · k21 | 0.82 | h-1 | 0.0002278 | 1/s | 1/h | exact (1) | Auler_1997_table_1:row8:col2 |
| VdAREA (l/kg) | `Q61` · V | 0.98 | l/kg | 0.0686 | m3 | l/kg | llm_confirmed (0.6) | Auler_1997_table_1:row10:col2 |
| β (h-1) | `Q47` · kel | 0.30 | h-1 | 8.333e-05 | 1/s | 1/h | exact (1) | Auler_1997_table_1:row12:col2 |
| t(1/2)β (h) | `Q60` · t1/2β | 2.33 | h | 8388 | s | h | llm_corrected (0.6) | Auler_1997_table_1:row13:col2 |
| CLT (ml min-1 kg-1) | `Q22` · CL | 5.03 | ml min-1 kg-1 | 5.868e-06 | m3/s | ml/(min·kg) | exact (1) | Auler_1997_table_1:row14:col2 |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Idkaidek_1998:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUCT (µg h-1 ml-1)' → Q19 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'RBA (h-1)' — extend the ontology if this is a real PK parameter (source ['Auler_1997_table_1:row4:col2'])
- dropped unlinked row (NIL): 'Binding (%)' — extend the ontology if this is a real PK parameter (source ['Auler_1997_table_1:row9:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'control n = 14' subgroup of Auler_1997 (paper reports 2 populations: control n = 14, cpb n = 10)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[binding]` |  | 99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rba]` |  | 5.20 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | µg h-1 ml-1 ([mass] / [time] / [length] ** 3) | ['Auler_1997_table_1:row3:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Auler_1997_table_1:row14:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Auler_1997_table_1:row7:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Auler_1997_table_1:row8:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Auler_1997_table_1:row1:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Auler_1997_table_1:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Auler_1997_table_1:row2:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['Auler_1997_table_1:row13:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Auler_1997_table_1:row10:col2'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['Auler_1997_table_1:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.03 | ['Auler_1997_table_1:row14:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.1 L/h | ['Auler_1997_table_1:row14:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 68.6 L | ['Auler_1997_table_1:row10:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Auler1997_control&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Auler1997_control%0APaper%3A%20Auler_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Auler1997_control%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:01 UTC</sub>
