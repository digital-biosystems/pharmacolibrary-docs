<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;linezolid&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/&quot;},{&quot;label&quot;:&quot;Ngara_2025 \u00b7 estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linezolid_BandnVilar2022_reference&quot;,&quot;label&quot;:&quot;Band\u00edn-Vilar_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/Linezolid_BandnVilar2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linezolid_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/Linezolid_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vera_Yunca_2025_bacterial_load&quot;,&quot;label&quot;:&quot;Vera-Yunca_2025 \u00b7 bacterial load&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/pd_Vera_Yunca_2025_bacterial_load.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linezolid — `Linezolid_Ngara2025_estimates_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> This record was reviewed on 2026-11-07 15:27 UTC (Rejected), but the paper was screened again on 2026-10-13 12:25 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. CL/F 404 L/h and V1/F 764 L are implausibly large for mouse linezolid, likely unit extraction errors.

<div class="pk-model-meta" hidden drug="linezolid" model-id="Linezolid_Ngara2025_estimates_rse" status="rejected" stale="true" population="mice with tuberculosis" measured-compound="linezolid" parameterization="apparent" topology="2C"></div>

## Citation
Ngara B, Flori L, van Wijk RC, Ernest JP, Tyagi S, Soni H et al. Translational Modeling of BTZ-043 to Predict Phase 2A Efficacy and Evaluate Drug-Drug Interactions With Bedaquiline, Pretomanid, and Linezolid in Murine Models. The Journal of infectious diseases 231(5):e901–e911 (2025).
  ·  DOI: [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088)

## Population and dosing

**Population:** mice with tuberculosis · condition tuberculosis · age group adult.

**Dosing:** 7000 mg, oral, multiple, every 12 h.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, Lh−1 | CL/F | 404 |  | 9 |
| Km, mgL−1 | Km | 0.948 |  | 15 |
| Vc/F, L | V1/F | 764 | L | 21 |
| Vmax, mgL−1h−1 | Vmax | 1.9 |  | 12 |
| Vp/F, L | V2/F | 0.203 | L | 15 |
| Q/F, Lh−1 | Q/F | 0.042 | L/h | 23 |
| Kd, d−1 | KD | 0.41 | d−1 |  |
| Ka, h−1 | kabs | 1.69 | h−1 |  |
| MTT | MTT | 0.34 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.783). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F 404 L/h and V1/F 764 L are implausibly large for mouse linezolid, likely unit extraction errors.**

The record lists total clearance and central volume as 404 L/h and 764 L, respectively, which are magnitudes orders of magnitude too high for a murine population. One parameter unit was not recognized as standard SI, preventing conversion to a usable value for plausibility assessment. A second reviewer also disputed the extracted model structure and several pharmacodynamic parameter values. Extracted — linezolid: CL/F 404, Km 0.948, V1/F 764 L, Vmax 1.9, V2/F 0.203 L, Q/F 0.042 L/h, KD 0.41 d−1, kabs 1.69 h−1, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading not captured → not captured (not captured); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, Lh−1 | `Q27` · CL/F | 404 |  |  |  |  | 9 | llm_confirmed (0.6) | Ngara_2025_table_1:row1:col1, Ngara_2025_table_1:row25:col1 |
| Km, mgL−1 | `Q1` · Km | 0.948 |  |  |  |  | 15 | llm_confirmed (0.6) | Ngara_2025_table_1:row2:col1 |
| Vc/F, L | `Q290` · V1/F | 764 | L | 0.764 | m3 | l | 21 | exact (1) | Ngara_2025_table_1:row3:col1, Ngara_2025_table_1:row27:col1 |
| Vmax, mgL−1h−1 | `Q66` · Vmax | 1.9 |  |  |  |  | 12 | llm_confirmed (0.6) | Ngara_2025_table_1:row4:col1 |
| Vp/F, L | `Q82` · V2/F | 0.203 | L | 0.000203 | m3 | l | 15 | exact (1) | Ngara_2025_table_1:row5:col1 |
| Q/F, Lh−1 | `Q69` · Q/F | 0.042 | L/h | 1.167e-08 | m3/s | L/h | 23 | llm_confirmed (0.6) | Ngara_2025_table_1:row6:col1 |
| Kd, d−1 | `Q331` · KD | 0.41 | d−1 |  |  | 1/d |  | exact (1) | Ngara_2025_table_1:row17:col1 |
| Ka, h−1 | `Q49` · kabs | 1.69 | h−1 | 0.0004694 | 1/s | 1/h |  | exact (1) | Ngara_2025_table_1:row26:col1 |
| MTT | `Q81` · MTT | 0.34 |  |  |  |  |  | exact (1) | Ngara_2025_table_1:row29:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Emax, d−1' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ngara_2025_table_1:row11:col1'])
- dropped PD-category row 'EC50, mgL−1' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ngara_2025_table_1:row12:col1'])
- unit_dimension_mismatch: 'Kd, d−1' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('KB, %', value '20.3') — already have one for this compound
- dropped unlinked row (NIL): 'B50, log10 CFU' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row19:col1'])
- dropped unlinked row (NIL): 'KT, %' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row21:col1'])
- dropped unlinked row (NIL): 'T50, d' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row23:col1'])
- dropped unlinked row (NIL): 'ntr' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row30:col1'])
- dropped duplicate Q69 ('Q/F', value '68') — already have one for this compound
- dropped duplicate Q82 ('Vp/F', value '382') — already have one for this compound
- dropped unlinked row (NIL): 'Observed CFU drop day−1, %' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row38:col1'])
- dropped unlinked row (NIL): 'Predicted CFU drop day−1, %' — extend the ontology if this is a real PK parameter (source ['Ngara_2025_table_1:row39:col1'])
- implicit units: 'Q/F, Lh−1' → L/h (from the popPK convention: 'Q/F is an intercompartmental clearance parameter. The conventional unit for clearances in population PK is L/h. The valu')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=linezolid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'estimates (rse %)' subgroup of Ngara_2025 (paper reports 2 populations: estimates (rse %), estimates (rse%))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (32 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.783 (18/23 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[kt, %]` |  | 70.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ntr]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[observed cfu drop day-1, %]` |  | 12.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t50]` |  | 17.4 | only_one_extracted |

</details>

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Ngara_2025_table_1:row3:col1', 'Ngara_2025_table_1:row27:col1'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | d−1 (1 / [time]) | ['Ngara_2025_table_1:row17:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ngara_2025_table_1:row26:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Ngara_2025_table_1:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Ngara_2025_table_1:row5:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['Ngara_2025_table_1:row2:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Ngara_2025_table_1:row1:col1', 'Ngara_2025_table_1:row25:col1'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['Ngara_2025_table_1:row4:col1'] |
| C5_unit_missing_Q81 | fail | [time] |  | ['Ngara_2025_table_1:row29:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 764 L | ['Ngara_2025_table_1:row3:col1', 'Ngara_2025_table_1:row27:col1'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.203 L | ['Ngara_2025_table_1:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blinezolid%5D%20Linezolid_Ngara2025_estimates_rse&body=Drug%3A%20linezolid%0ARecord%3A%20Linezolid_Ngara2025_estimates_rse%0APaper%3A%20Ngara_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_linezolid/Linezolid_Ngara2025_estimates_rse%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 12:25 UTC</sub>
