<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Allopurinol&quot;,&quot;href&quot;:&quot;drugs/toxin_allopurinol/&quot;},{&quot;label&quot;:&quot;Chu_2022_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Allopurinol_Deferm2021_reference&quot;,&quot;label&quot;:&quot;Deferm_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_allopurinol/Allopurinol_Deferm2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Allopurinol_Hande1978_reference&quot;,&quot;label&quot;:&quot;Hande_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_allopurinol/Allopurinol_Hande1978_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Allopurinol — `Allopurinol_Chu2022v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Allopurinol" model-id="Allopurinol_Chu2022v2_reference" status="rejected" stale="false" population="neonates with hypoxic-ischemic encephalopathy (asphyxiated neonates)" measured-compound="Allopurinol" parameterization="apparent" topology="2C"></div>

## Citation
Chu WY, Allegaert K, Dorlo TPC, Huitema ADR, ALBINO Study Group. Semi-mechanistic Modeling of Hypoxanthine, Xanthine, and Uric Acid Metabolism in Asphyxiated Neonates. Clinical pharmacokinetics 61(11):1545-1558 (2022).
  ·  DOI: [10.1007/s40262-022-01164-9](https://doi.org/10.1007/s40262-022-01164-9)

## Population and dosing

**Population:** neonates with hypoxic-ischemic encephalopathy (asphyxiated neonates) · condition hypoxic-ischemic encephalopathy (perinatal asphyxia) · age group neonate · n = 37.

**Dosing:** 700, 1400 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL1 | CL | 0.74 | L/h |  |
| V1 | V1 | 2.8 | L | 21 (None% RSE) |
| CL2/fm | CLfm | 0.3 | L/h |  |
| V2/fm | V2/F | 10.39 | L |  |
| k30 | ki0 | 0.0043 | 1/h | 48 (None% RSE) |
| Init4D | equation variable | 0.45 | mg/L |  |
| k45 | kcomp | 0.2 | 1/h | 35 (None% RSE) |
| Moderate-severe HIE—Init5D | D1 | 1.2 | - |  |
| absorption rate constant (long-acting tablets (once daily)) | kabs | 0.14 | /h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading allopurinol → oxypurinol (metabolism); hypoxanthine → xanthine (degradation); xanthine → uric acid (degradation); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL1 | `Q22` · CL | 0.74 | L/h | 2.056e-07 | m3/s | l/h | llm (0.6) | Chu_2022_2_table_2:row1:col3 |  |
| V1 | `Q63` · V1 | 2.8 | L | 0.0028 | m3 | l | exact (1) | Chu_2022_2_table_2:row2:col3 | 21 (None% RSE) |
| CL2/fm | `Q370` · CLfm | 0.3 | L/h | 8.333e-08 | m3/s | l/h | llm_corrected (0.6) | Chu_2022_2_table_2:row3:col3 |  |
| V2/fm | `Q82` · V2/F | 10.39 | L | 0.01039 | m3 | l | llm (0.6) | Chu_2022_2_table_2:row4:col3 |  |
| k30 | `Q373` · ki0 | 0.0043 | 1/h | 1.194e-06 | 1/s | 1/h | exact (1) | Chu_2022_2_table_2:row8:col3 | 48 (None% RSE) |
| Init4D | `Q900` · equation variable | 0.45 | mg/L |  |  | mg/l | llm (0.6) | Chu_2022_2_table_2:row11:col3 |  |
| k45 | `Q48` · kcomp | 0.2 | 1/h | 5.556e-05 | 1/s | 1/h | exact (1) | Chu_2022_2_table_2:row12:col3 | 35 (None% RSE) |
| Moderate-severe HIE—Init5D | `Q310` · D1 | 1.2 | - |  |  | - | llm (0.6) | Chu_2022_2_table_2:row22:col3 |  |
| absorption rate constant (long-acting tablets (once daily)) | `Q49` · kabs | 0.14 | /h | 3.889e-05 | 1/s | 1/h | review_gapfill (0.7) | Okada_2024:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL1' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V1' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CL2/fm' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V2/fm' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Init4D' routed out of structural estimates ('IIV (%)')
- table section iiv: 'k40' routed out of structural estimates ('IIV (%)')
- table section iiv: 'k56' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Init6D' routed out of structural estimates ('IIV (%)')
- table section iiv: 'k60' routed out of structural estimates ('IIV (%)')
- table representations disagree for 'CL1'; source reconciliation required
- table representations disagree for 'V1'; source reconciliation required
- table representations disagree for 'CL2/fm'; source reconciliation required
- table representations disagree for 'V2/fm'; source reconciliation required
- table representations disagree for 'IC50 auto'; source reconciliation required
- table representations disagree for 'IC50'; source reconciliation required
- table representations disagree for 'k30'; source reconciliation required
- table representations disagree for 'kin4'; source reconciliation required
- table representations disagree for 'Init4D'; source reconciliation required
- table representations disagree for 'k45'; source reconciliation required
- table representations disagree for 'k40'; source reconciliation required
- table representations disagree for 'kin5'; source reconciliation required
- table representations disagree for 'Init5D'; source reconciliation required
- table representations disagree for 'k56'; source reconciliation required
- table representations disagree for 'Init6D'; source reconciliation required
- table representations disagree for 'k60'; source reconciliation required
- table representations disagree for 'Moderate-severe HIE—Init4D'; source reconciliation required
- table representations disagree for 'Moderate-severe HIE—Init5D'; source reconciliation required
- table representations disagree for 'Proportional error'; source reconciliation required
- table representations disagree for 'Additive error'; source reconciliation required
- dropped PD-category row 'IC50 auto' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chu_2022_2_table_2:row5:col3'])
- dropped PD-category row 'IC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chu_2022_2_table_2:row7:col3'])
- dropped PD-category row 'kin4' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chu_2022_2_table_2:row9:col3'])
- dropped duplicate Q373 ('k40', value '0.5') — already have one for this compound
- dropped PD-category row 'kin5' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chu_2022_2_table_2:row14:col3'])
- dropped PD-category row 'Init5D' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chu_2022_2_table_2:row16:col3'])
- dropped duplicate Q48 ('k56', value '2.65') — already have one for this compound
- dropped duplicate Q900 ('Init6D', value '37.98') — already have one for this compound
- dropped duplicate Q373 ('k60', value '0.032') — already have one for this compound
- unit_dimension_unknown: '-' (equation variable)
- dropped duplicate Q900 ('Moderate-severe HIE—Init4D', value '2.9') — already have one for this compound
- unit_dimension_unknown: '-' (D1)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Allopurinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q49 (kabs) from Okada_2024's review values (primary lacked it)

**Extraction notes:**
- table Chu_2022_2_table_2: multiple_interval_summaries
- table Chu_2022_2_table_2: missing_label
- table Chu_2022_2_table_2: unparsed_numeric_cell
- table Tab2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 27 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['allopurinol', 'oxypurinol', 'metabolism'], ['hypoxanthine', 'xanthine', 'degradation'], ['xanthine', 'uric acid', 'degradation']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[init4d].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss:120b` | `parameters[moderate-severe hie—init5d]` | 1.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/fm].parameter_id` | Q82 | Q64 | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Chu_2022_2_table_2:row1:col3'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Chu_2022_2_table_2:row3:col3'] |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['Chu_2022_2_table_2:row8:col3'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Chu_2022_2_table_2:row12:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Okada_2024:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Chu_2022_2_table_2:row2:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Chu_2022_2_table_2:row4:col3'] |
| C5_unit_missing_Q310 | fail | [time] | - | ['Chu_2022_2_table_2:row22:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.74 L/h | ['Chu_2022_2_table_2:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.8 L | ['Chu_2022_2_table_2:row2:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.4 L | ['Chu_2022_2_table_2:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Ballopurinol%5D%20Allopurinol_Chu2022v2_reference&body=Drug%3A%20allopurinol%0ARecord%3A%20Allopurinol_Chu2022v2_reference%0APaper%3A%20Chu_2022_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_allopurinol/Allopurinol_Chu2022v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 17:32 UTC</sub>
