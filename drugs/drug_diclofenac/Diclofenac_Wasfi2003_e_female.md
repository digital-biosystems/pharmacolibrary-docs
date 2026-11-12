<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Wasfi_2003 \u00b7 e_female&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_RodriguezCruz2021_reference&quot;,&quot;label&quot;:&quot;Rodriguez-Cruz_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_RodriguezCruz2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Standing2008_reference&quot;,&quot;label&quot;:&quot;Standing_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Standing2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Perez_1995_relaxation&quot;,&quot;label&quot;:&quot;Perez_1995 \u00b7 relaxation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Perez_1995_relaxation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Wasfi2003_e_female`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

> This record was reviewed on 2026-11-07 14:42 UTC (Rejected), but the paper was screened again on 2026-11-03 22:55 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The diclofenac intercompartmental clearance of 1.0 mL/min was rejected because this flow unit could not be converted to SI units.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Wasfi2003_e_female" status="rejected" stale="true" population="camels" measured-compound="diclofenac" parameterization="mechanistic" topology="2C"></div>

## Citation
Wasfi IA, Hussain MM, Elghazali M, Alkatheeri NA, Abdel Hadi AA. The disposition of diclofenac in camels after intravenous administration. Veterinary journal (London, England : 1997) 166(3):277–283 (2003).
  ·  DOI: [10.1016/s1090-0233(02)00260-5](https://doi.org/10.1016/s1090-0233(02)00260-5)

## Population and dosing

**Population:** camels · condition healthy · n = 6.

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
| t₁/₂α (h) | t1/2α | 0.36 | h |
| t₁/₂β (h) | t1/2β | 2.73 | h |
| AUC (µg h⁻¹ ml⁻¹) | AUC | 14.2 | µg h⁻¹ ml⁻¹ |
| CLT (l h⁻¹ kg⁻¹) | CL | 0.18 | l h⁻¹ kg⁻¹ |
| VSS (l.kg⁻¹) | Vss | 0.39 | l.kg⁻¹ |
| VC (l.kg⁻¹) | V1 | 0.16 | l.kg⁻¹ |
| AUMC (µg h⁻¹ ml⁻¹) | AUMC | 31.7 | µg h⁻¹ ml⁻¹ |
| MRT (h) | MRT | 2.23 | h |
| Vd (area) (l.kg⁻¹) | V | 0.69 | l.kg⁻¹ |
| flow rate | Q | 1.0 | mL/min |
| k a (h À1 ) | kabs | 0.94 | h À1 |
| Lag time 1 | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The diclofenac intercompartmental clearance of 1.0 mL/min was rejected because this flow unit could not be converted to SI units.**

The record lists the intercompartmental clearance Q as 1.0 mL/min. This unit for intercompartmental flow rate is not compatible with the required SI standardization, meaning the value could not be normalized to a standard volume-per-time format. Consequently, the parameter remained in a non-standard unit, causing a dimensional inconsistency within the model structure. Extracted — diclofenac: t1/2α 0.36 h, t1/2β 2.73 h, AUC 14.2 µg h⁻¹ ml⁻¹, CL 0.18 l h⁻¹ kg⁻¹, Vss 0.39 l.kg⁻¹, V1 0.16 l.kg⁻¹, AUMC 31.7 µg h⁻¹ ml⁻¹, MRT 2.23 h, … (+4).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t₁/₂α (h) | `Q59` · t1/2α | 0.36 | h | 1296 | s | h | exact (1) | Wasfi_2003_table_1:row2:col6 |
| t₁/₂β (h) | `Q60` · t1/2β | 2.73 | h | 9828 | s | h | exact (1) | Wasfi_2003_table_1:row3:col6 |
| AUC (µg h⁻¹ ml⁻¹) | `Q88` · AUC | 14.2 | µg h⁻¹ ml⁻¹ |  |  | µg/(h·ml) | exact (1) | Wasfi_2003_table_1:row4:col6 |
| CLT (l h⁻¹ kg⁻¹) | `Q22` · CL | 0.18 | l h⁻¹ kg⁻¹ |  |  | (l·h-)/kg | exact (1) | Wasfi_2003_table_1:row5:col6 |
| VSS (l.kg⁻¹) | `Q65` · Vss | 0.39 | l.kg⁻¹ | 0.0273 | m3 | l/kg | exact (1) | Wasfi_2003_table_1:row6:col6 |
| VC (l.kg⁻¹) | `Q63` · V1 | 0.16 | l.kg⁻¹ | 0.0112 | m3 | l/kg | exact (1) | Wasfi_2003_table_1:row7:col6 |
| AUMC (µg h⁻¹ ml⁻¹) | `Q20` · AUMC | 31.7 | µg h⁻¹ ml⁻¹ |  |  | µg/(h·ml) | exact (1) | Wasfi_2003_table_1:row8:col6 |
| MRT (h) | `Q53` · MRT | 2.23 | h | 8028 | s | h | exact (1) | Wasfi_2003_table_1:row9:col6 |
| Vd (area) (l.kg⁻¹) | `Q61` · V | 0.69 | l.kg⁻¹ | 0.0483 | m3 | l/kg | space_fold (0.95) | Wasfi_2003_table_1:row10:col6 |
| flow rate | `Q30` · Q | 1.0 | mL/min | 1.667e-08 | m3/s | L/h | review_gapfill (0.7) | Matharoo_2025:review |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Idkaidek_1998:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A (µg)' — extend the ontology if this is a real PK parameter (source ['Wasfi_2003_table_1:row0:col6'])
- dropped unlinked row (NIL): 'B (µg)' — extend the ontology if this is a real PK parameter (source ['Wasfi_2003_table_1:row1:col6'])
- unit_dimension_mismatch: 'AUC (µg h⁻¹ ml⁻¹)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'l h⁻¹ kg⁻¹' (CL)
- unit_dimension_mismatch: 'AUMC (µg h⁻¹ ml⁻¹)' → Q20 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 'CLT (l h⁻¹ kg⁻¹)' — the LLM proposed 'l h⁻¹ kg⁻¹', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'e female' subgroup of Wasfi_2003 (paper reports 6 populations: a male, b male, c male, d female, e female, f female)
- gap-filled Q30 (Q) from Matharoo_2025's review values (primary lacked it)
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- table Wasfi_2003_table_1: ragged_grid
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q20 | fail | [mass] * [time] / [length] ** 3 | µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) | ['Wasfi_2003_table_1:row8:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Matharoo_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Wasfi_2003_table_1:row9:col6'] |
| C5_dimension_Q59 | pass | [time] |  | ['Wasfi_2003_table_1:row2:col6'] |
| C5_dimension_Q60 | pass | [time] |  | ['Wasfi_2003_table_1:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row10:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row7:col6'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Wasfi_2003_table_1:row6:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | µg h⁻¹ ml⁻¹ ([mass] / [time] / [length] ** 3) | ['Wasfi_2003_table_1:row4:col6'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | l h⁻¹ kg⁻¹ | ['Wasfi_2003_table_1:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | ['Wasfi_2003_table_1:row5:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 48.3 L | ['Wasfi_2003_table_1:row10:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.2 L | ['Wasfi_2003_table_1:row7:col6'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 27.3 L | ['Wasfi_2003_table_1:row6:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Wasfi2003_e_female&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Wasfi2003_e_female%0APaper%3A%20Wasfi_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Wasfi2003_e_female%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 22:55 UTC</sub>
