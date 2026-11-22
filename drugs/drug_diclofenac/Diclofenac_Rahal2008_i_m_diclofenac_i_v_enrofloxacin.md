<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;Rahal_2008 \u00b7 i_m_diclofenac_i_v_enrofloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Lucas2016_reference&quot;,&quot;label&quot;:&quot;Lucas_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Lucas2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Idkaidek1998_sustained&quot;,&quot;label&quot;:&quot;Idkaidek_1998_sustained&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Idkaidek1998_sustained.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_Rahal2008_i_m_diclofenac_i_v_enrofloxacin`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

> The absorption half-life parameter is recorded with a rate unit instead of time, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_Rahal2008_i_m_diclofenac_i_v_enrofloxacin" status="rejected" stale="false" population="sheep" measured-compound="diclofenac" parameterization="apparent" topology="1C"></div>

## Citation
Rahal A, Kumar A, Ahmad AH, Malik JK. Pharmacokinetics of diclofenac and its interaction with enrofloxacin in sheep. Research in veterinary science 84(3):452–456 (2008).
  ·  DOI: [10.1016/j.rvsc.2007.06.002](https://doi.org/10.1016/j.rvsc.2007.06.002)

## Population and dosing

**Population:** sheep.

**Dosing:** 70 mg, iv, single.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| B | A2 | 7.18 | µg mL-1 |
| α/Ka | t1/2ka | 23.97 | h-1 |
| β | kel | 0.37 | h-1 |
| t1/2α/t1/2Ka | t1/2α | 0.04 | h |
| t1/2β | t1/2β | 2.09 | h |
| AUC | AUC | 20.43 | µg h mL-1 |
| AUMC | AUMC | 60.05 | µg h2 mL-1 |
| MRT | MRT | 2.81 | h |
| Vdarea | V/F | 0.13 | L kg-1 |
| CLβ | CL | 0.04 | L kg-1 h-1 |
| F | Fab | 89.54 | per cent |
| Cmax | Cmax | 0.56 | µg mL-1 |
| Tmax | tmax | 2.08 | h |
| k a (h À1 ) | kabs | 0.94 | h À1 |
| Lag time 1 | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The absorption half-life parameter is recorded with a rate unit instead of time, causing a dimension mismatch.**

The parameter identified as the absorption phase half-life has a value of 23.97 with a unit of h-1, whereas a half-life must have units of time. This dimensional conflict indicates the recorded value likely represents a rate constant rather than the half-life itself. No other parameters show similar unit inconsistencies. Extracted — diclofenac: A2 7.18 µg mL-1, t1/2ka 24 h-1, kel 0.37 h-1, t1/2α 0.04 h, t1/2β 2.09 h, AUC 20.4 µg h mL-1, AUMC 60 µg h2 mL-1, MRT 2.81 h, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[b].parameter_id`: this record has Q416, the second reading Q86; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| B | `Q416` · A2 | 7.18 | µg mL-1 |  |  | µg/ml | llm (0.6) | Rahal_2008_table_1:row1:col4 |
| α/Ka | `Q95` · t1/2ka | 23.97 | h-1 |  |  | 1/h | llm (0.6) | Rahal_2008_table_1:row2:col4 |
| β | `Q47` · kel | 0.37 | h-1 | 0.0001028 | 1/s | 1/h | exact (1) | Rahal_2008_table_1:row3:col4 |
| t1/2α/t1/2Ka | `Q59` · t1/2α | 0.04 | h | 144 | s | h | half_life_rule (0.95) | Rahal_2008_table_1:row4:col4 |
| t1/2β | `Q60` · t1/2β | 2.09 | h | 7524 | s | h | half_life_rule (0.95) | Rahal_2008_table_1:row5:col4 |
| AUC | `Q88` · AUC | 20.43 | µg h mL-1 | 73.55 | kg*s/m3 | (h·µg)/ml | exact (1) | Rahal_2008_table_1:row6:col4 |
| AUMC | `Q20` · AUMC | 60.05 | µg h2 mL-1 |  |  | (µg·h2)/ml | exact (1) | Rahal_2008_table_1:row7:col4 |
| MRT | `Q53` · MRT | 2.81 | h | 1.012e+04 | s | h | exact (1) | Rahal_2008_table_1:row8:col4 |
| Vdarea | `Q76` · V/F | 0.13 | L kg-1 | 0.0091 | m3 | l/kg | llm_confirmed (0.6) | Rahal_2008_table_1:row9:col4 |
| CLβ | `Q22` · CL | 0.04 | L kg-1 h-1 | 7.778e-07 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Rahal_2008_table_1:row13:col4 |
| F | `Q40` · Fab | 89.54 | per cent |  |  |  | exact (1) | Rahal_2008_table_1:row16:col4 |
| Cmax | `Q32` · Cmax | 0.56 | µg mL-1 | 0.00056 | kg/m3 | µg/ml | exact (1) | Rahal_2008_table_1:row17:col4 |
| Tmax | `Q56` · tmax | 2.08 | h | 7488 | s | h | exact (1) | Rahal_2008_table_1:row18:col4 |
| k a (h À1 ) | `Q49` · kabs | 0.94 | h À1 | 0.0002611 | 1/s | 1/h | review_gapfill (0.7) | Kim_2016:review |
| Lag time 1 | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Idkaidek_1998:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'B'; source reconciliation required
- table representations disagree for 'α/Ka'; source reconciliation required
- table representations disagree for 'β'; source reconciliation required
- table representations disagree for 't1/2α/t1/2Ka'; source reconciliation required
- table representations disagree for 't1/2β'; source reconciliation required
- table representations disagree for 'AUC'; source reconciliation required
- table representations disagree for 'AUMC'; source reconciliation required
- table representations disagree for 'MRT'; source reconciliation required
- table representations disagree for 'Vdarea'; source reconciliation required
- table representations disagree for 'CLβ'; source reconciliation required
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'Cmax'; source reconciliation required
- table representations disagree for 'Tmax'; source reconciliation required
- unit_dimension_mismatch: 'α/Ka' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_unknown: 'µg h2 mL-1' (AUMC)
- implicit units: 'AUMC' — the LLM proposed 'lg h^2 mL^-1', whose dimension does not fit Q20; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'i.m. diclofenac + i.v. enrofloxacin' subgroup of Rahal_2008 (paper reports 3 populations: i.m. diclofenac, i.m. diclofenac + i.v. enrofloxacin, i.v. diclofenac)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Kim_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from Idkaidek_1998's review values (primary lacked it)

**Extraction notes:**
- table tab_0: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.857 (18/21 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b].parameter_id` | Q416 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[clβ].parameter_id` | Q22 | Q23 | mismatch |
| `gpt-oss-120b` | `parameters[α/ka].parameter_id` | Q95 | Q49 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Rahal_2008_table_1:row13:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Rahal_2008_table_1:row17:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Rahal_2008_table_1:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kim_2016:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Rahal_2008_table_1:row8:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Rahal_2008_table_1:row18:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Rahal_2008_table_1:row4:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Rahal_2008_table_1:row5:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Rahal_2008_table_1:row9:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Idkaidek_1998:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Rahal_2008_table_1:row6:col4'] |
| C5_dimension_Q95 | fail | [time] | h-1 (1 / [time]) | ['Rahal_2008_table_1:row2:col4'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 | µg h2 mL-1 | ['Rahal_2008_table_1:row7:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.8 L/h | ['Rahal_2008_table_1:row13:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 9.1 L | ['Rahal_2008_table_1:row9:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiclofenac%5D%20Diclofenac_Rahal2008_i_m_diclofenac_i_v_enrofloxacin&body=Drug%3A%20diclofenac%0ARecord%3A%20Diclofenac_Rahal2008_i_m_diclofenac_i_v_enrofloxacin%0APaper%3A%20Rahal_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diclofenac/Diclofenac_Rahal2008_i_m_diclofenac_i_v_enrofloxacin%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:01 UTC</sub>
