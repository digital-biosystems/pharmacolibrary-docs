<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Wasfi_2003 \u00b7 sex&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Lucas2016_reference&quot;,&quot;label&quot;:&quot;Lucas_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Lucas2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Idkaidek1998_sustained&quot;,&quot;label&quot;:&quot;Idkaidek_1998_sustained&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Wasfi2003_sex`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q20 unit µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Wasfi2003_sex" status="rejected" stale="false" population="camels" measured-compound="diclofenac" parameterization="mechanistic" topology="2C"></div>

## Citation
Wasfi IA, Hussain MM, Elghazali M, Alkatheeri NA, Abdel Hadi AA. The disposition of diclofenac in camels after intravenous administration. Veterinary journal (London, England : 1997) 166(3):277–283 (2003).
  ·  DOI: [10.1016/s1090-0233(02)00260-5](https://doi.org/10.1016/s1090-0233(02)00260-5)

## Population and dosing

**Population:** camels · condition healthy · age group adult.

**Dosing:** 175 mg, iv, single.

> **Species: camelid.** This record comes from an animal study (camelid), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (µg) | A1 | 12.5 | µg |
| t₁/₂α (h) | t1/2α | 0.34 | h |
| t₁/₂β (h) | t1/2β | 2.25 | h |
| AUC (µg h⁻¹ ml⁻¹) | AUC | 12.1 | µg h⁻¹ ml⁻¹ |
| CLT (l h⁻¹ kg⁻¹) | CL | 0.21 | l h⁻¹ kg⁻¹ |
| VSS (l.kg⁻¹) | Vss | 0.39 | l.kg⁻¹ |
| VC (l.kg⁻¹) | V1 | 1.37 | l.kg⁻¹ |
| AUMC (µg h⁻¹ ml⁻¹) | AUMC | 22.7 | µg h⁻¹ ml⁻¹ |
| MRT (h) | MRT | 1.87 | h |
| Vd (area) (l.kg⁻¹) | V | 0.67 | l.kg⁻¹ |
| k a (h À1 ) | kabs | 0.94 | h À1 |
| Lag time 1 | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.294). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q20 unit µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (A1, AUC and AUMC), so that value has no SI equivalent. Extracted — diclofenac: A1 12.5 µg, t1/2α 0.34 h, t1/2β 2.25 h, AUC 12.1 µg h⁻¹ ml⁻¹, CL 0.21 l h⁻¹ kg⁻¹, Vss 0.39 l.kg⁻¹, V1 1.37 l.kg⁻¹, AUMC 22.7 µg h⁻¹ ml⁻¹, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of a: this record has 12.5, the second reading none; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (µg) | `Q415` · A1 | 12.5 | µg |  |  | µg | llm (0.6) | Wasfi_2003_table_1:row0:col1 |
| t₁/₂α (h) | `Q59` · t1/2α | 0.34 | h | 1224 | s | h | half_life_rule (0.95) | Wasfi_2003_table_1:row2:col1 |
| t₁/₂β (h) | `Q60` · t1/2β | 2.25 | h | 8100 | s | h | half_life_rule (0.95) | Wasfi_2003_table_1:row3:col1 |
| AUC (µg h⁻¹ ml⁻¹) | `Q88` · AUC | 12.1 | µg h⁻¹ ml⁻¹ |  |  | µg/(h·ml) | exact (1) | Wasfi_2003_table_1:row4:col1 |
| CLT (l h⁻¹ kg⁻¹) | `Q22` · CL | 0.21 | l h⁻¹ kg⁻¹ | 4.083e-06 | m3/s | l/(h·kg) | exact (1) | Wasfi_2003_table_1:row5:col1 |
| VSS (l.kg⁻¹) | `Q65` · Vss | 0.39 | l.kg⁻¹ | 0.0273 | m3 | l/kg | exact (1) | Wasfi_2003_table_1:row6:col1 |
| VC (l.kg⁻¹) | `Q63` · V1 | 1.37 | l.kg⁻¹ | 0.0959 | m3 | l/kg | exact (1) | Wasfi_2003_table_1:row7:col1 |
| AUMC (µg h⁻¹ ml⁻¹) | `Q20` · AUMC | 22.7 | µg h⁻¹ ml⁻¹ |  |  | µg/(h·ml) | exact (1) | Wasfi_2003_table_1:row8:col1 |
| MRT (h) | `Q53` · MRT | 1.87 | h | 6732 | s | h | exact (1) | Wasfi_2003_table_1:row9:col1 |
| Vd (area) (l.kg⁻¹) | `Q61` · V | 0.67 | l.kg⁻¹ | 0.0469 | m3 | l/kg | space_fold (0.95) | Wasfi_2003_table_1:row10:col1 |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Idkaidek_1998:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sex' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'B (µg)' — extend the ontology if this is a real PK parameter (source ['Wasfi_2003_table_1:row1:col1'])
- unit_dimension_mismatch: 'AUC (µg h⁻¹ ml⁻¹)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUMC (µg h⁻¹ ml⁻¹)' → Q20 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'sex' subgroup of Wasfi_2003 (paper reports 3 populations: a male, d female, sex)
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- table Wasfi_2003_table_1: ragged_grid
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.294 (5/17 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 12.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc].value` | 12.1 | 14.2 | mismatch |
| `gpt-oss-120b` | `parameters[aumc].value` | 22.7 | 31.7 | mismatch |
| `gpt-oss-120b` | `parameters[b]` |  | 1.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clt].value` | 0.21 | 0.18 | mismatch |
| `gpt-oss-120b` | `parameters[k a]` | 0.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time 1]` | 0.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt].value` | 1.87 | 2.23 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2α].value` | 0.34 | 0.36 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2β].value` | 2.25 | 2.73 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 1.37 | 0.16 | mismatch |
| `gpt-oss-120b` | `parameters[vd (area)].value` | 0.67 | 0.69 | mismatch |

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
| C5_dimension_Q20 | fail | [mass] * [time] / [length] ** 3 | µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) | ['Wasfi_2003_table_1:row8:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wasfi_2003_table_1:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Wasfi_2003_table_1:row9:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Wasfi_2003_table_1:row2:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Wasfi_2003_table_1:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row10:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row7:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) | ['Wasfi_2003_table_1:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.21 | ['Wasfi_2003_table_1:row5:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.7 L/h | ['Wasfi_2003_table_1:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 46.9 L | ['Wasfi_2003_table_1:row10:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 95.9 L | ['Wasfi_2003_table_1:row7:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.3 L | ['Wasfi_2003_table_1:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Wasfi2003_sex&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Wasfi2003_sex%0APaper%3A%20Wasfi_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Wasfi2003_sex%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:05 UTC</sub>
