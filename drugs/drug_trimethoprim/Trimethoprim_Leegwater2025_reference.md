<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Leegwater_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Leegwater2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL_CRRT has no unit.

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Leegwater2025_reference" status="needs_review" stale="false" population="hospitalized patients with renal insufficiency or receiving CRRT" measured-compound="trimethoprim" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Leegwater E, Baidjoe L, Wilms EB, Visser LG, Touw DJ, de Winter BCM et al. Population Pharmacokinetics of Trimethoprim/Sulfamethoxazole: Dosage Optimization for Patients with Renal Insufficiency or Receiving Continuous Renal Replacement Therapy. Clinical pharmacology and therapeutics 117(1):184–192 (2025).
  ·  DOI: [10.1002/cpt.3421](https://doi.org/10.1002/cpt.3421)

## Population and dosing

**Population:** hospitalized patients with renal insufficiency or receiving CRRT · condition renal insufficiency or CRRT · age group adult · n = 168.

**Dosed compound ≠ measured compound:** dosed cotrimoxazole, measured trimethoprim.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Biological availability | Fab | 1 |  |  |  |
| Absorption rate constant | kabs | 0.95 | 1/h | 45 |  |
| Apparent clearance (L/hour)a | CL/F | 1.33 | L/h | 4 |  |
| egfr_on_cl | egfr_on_cl | 0.79 |  | 7 |  |
| CRRT on CL | CL_CRRT | 0.68 |  | 11 |  |
| Volume of distribution (L) | V | 3.87 | L | 24 | 60.2 (11% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL_CRRT has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — trimethoprim: Fab 1, kabs 0.95 1/h, CL/F 1.33 L/h, CL_CRRT 0.68, V 3.87 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cotrimoxazole, the second reading trimethoprim/sulfamethoxazole; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Biological availability | `Q40` · Fab | 1 |  |  |  |  |  | llm (0.6) | cpt3421-tbl-0002:row2:col1, cpt3421-tbl-0002:row2:col3, Leegwater_2025_table_3:row1:col1, Leegwater_2025_table_3:row1:col3 |  |
| Absorption rate constant | `Q49` · kabs | 0.95 | 1/h | 0.0002639 | 1/s | 1/h | 45 | exact (1) | cpt3421-tbl-0002:row3:col1, cpt3421-tbl-0002:row3:col2, cpt3421-tbl-0002:row3:col3, cpt3421-tbl-0002:row3:col4, Leegwater_2025_table_3:row2:col1, Leegwater_2025_table_3:row2:col2, Leegwater_2025_table_3:row2:col3, Leegwater_2025_table_3:row2:col4 |  |
| Apparent clearance (L/hour)a | `Q27` · CL/F | 1.33 | L/h | 3.694e-07 | m3/s | L/h | 4 | llm_confirmed (0.6) | cpt3421-tbl-0002:row4:col1, cpt3421-tbl-0002:row4:col2, cpt3421-tbl-0002:row4:col3, cpt3421-tbl-0002:row4:col4, Leegwater_2025_table_3:row3:col1, Leegwater_2025_table_3:row3:col2, Leegwater_2025_table_3:row3:col3, Leegwater_2025_table_3:row3:col4, Leegwater_2025_table_3:row11:col1, Leegwater_2025_table_3:row11:col2, Leegwater_2025_table_3:row11:col3, Leegwater_2025_table_3:row11:col4 |  |
| egfr_on_cl | `Q900` · egfr_on_cl | 0.79 |  |  |  |  | 7 |  | cpt3421-tbl-0002:row5:col1, cpt3421-tbl-0002:row5:col2, cpt3421-tbl-0002:row5:col3, cpt3421-tbl-0002:row5:col4, Leegwater_2025_table_3:row4:col1, Leegwater_2025_table_3:row4:col2, Leegwater_2025_table_3:row4:col3, Leegwater_2025_table_3:row4:col4, Leegwater_2025_table_3:row12:col1, Leegwater_2025_table_3:row12:col2, Leegwater_2025_table_3:row12:col3, Leegwater_2025_table_3:row12:col4 |  |
| CRRT on CL | `Q357` · CL_CRRT | 0.68 |  |  |  |  | 11 | llm_corrected (0.6) | cpt3421-tbl-0002:row6:col1, cpt3421-tbl-0002:row6:col2, cpt3421-tbl-0002:row6:col3, cpt3421-tbl-0002:row6:col4, Leegwater_2025_table_3:row5:col1, Leegwater_2025_table_3:row5:col2, Leegwater_2025_table_3:row5:col3, Leegwater_2025_table_3:row5:col4, Leegwater_2025_table_3:row13:col1, Leegwater_2025_table_3:row13:col2, Leegwater_2025_table_3:row13:col3, Leegwater_2025_table_3:row13:col4 |  |
| Volume of distribution (L) | `Q61` · V | 3.87 | L | 0.00387 | m3 | l | 24 | exact (1) | cpt3421-tbl-0002:row7:col1, cpt3421-tbl-0002:row7:col2, cpt3421-tbl-0002:row7:col3, cpt3421-tbl-0002:row7:col4, Leegwater_2025_table_3:row6:col1, Leegwater_2025_table_3:row6:col2, Leegwater_2025_table_3:row6:col3, Leegwater_2025_table_3:row6:col4, Leegwater_2025_table_3:row14:col1, Leegwater_2025_table_3:row14:col2, Leegwater_2025_table_3:row14:col3, Leegwater_2025_table_3:row14:col4 | 60.2 (11% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'eGFR on CL' → Q900:egfr_on_cl = 0.79 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Trimethoprim' — extend the ontology if this is a real PK parameter (source ['cpt3421-tbl-0002:row12:col1', 'cpt3421-tbl-0002:row12:col2', 'cpt3421-tbl-0002:row12:col3', 'cpt3421-tbl-0002:row12:col4'])
- dropped unlinked row (NIL): 'Sulfamethoxazole' — extend the ontology if this is a real PK parameter (source ['Leegwater_2025_table_3:row17:col1', 'Leegwater_2025_table_3:row17:col2', 'Leegwater_2025_table_3:row17:col3', 'Leegwater_2025_table_3:row17:col4'])
- dropped unlinked row (NIL): 'N‐acetyl sulfamethoxazole' — extend the ontology if this is a real PK parameter (source ['Leegwater_2025_table_3:row18:col1', 'Leegwater_2025_table_3:row18:col2', 'Leegwater_2025_table_3:row18:col3', 'Leegwater_2025_table_3:row18:col4'])
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). First-order rate constants are conventionally expressed in reciproc')
- implicit units: 'Apparent clearance (L/hour)a' → L/h (from the paper text: "The parameter label in the provided text for item 2 explicitly includes the unit: 'Apparent clearance (L/hour)a'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=trimethoprim
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 32 linked by role; re-tagged parent→trimethoprim ×84
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (58 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- LLM region Leegwater_2025:other_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 11:46:33 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['sulfamethoxazole', 'n-acetyl sulfamethoxazole', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[absorption rate constant]` |  | 0.364 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance (l/hour)a]` |  | 4.23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance (l/hour)a]` | 1.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[biological availability]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[biological availability]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[crrt on cl]` |  | 1.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[crrt on cl]` | 0.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | 0.79 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr]` |  | 0.319 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 132 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 3.87 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cotrimoxazole | trimethoprim/sulfamethoxazole | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt3421-tbl-0002:row4:col1', 'cpt3421-tbl-0002:row4:col2', 'cpt3421-tbl-0002:row4:col3', 'cpt3421-tbl-0002:row4:col4', 'Leegwater_2025_table_3:row3:col1', 'Leegwater_2025_table_3:row3:col2', 'Leegwater_2025_table_3:row3:col3', 'Leegwater_2025_table_3:row3:col4', 'Leegwater_2025_table_3:row11:col1', 'Leegwater_2025_table_3:row11:col2', 'Leegwater_2025_table_3:row11:col3', 'Leegwater_2025_table_3:row11:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt3421-tbl-0002:row3:col1', 'cpt3421-tbl-0002:row3:col2', 'cpt3421-tbl-0002:row3:col3', 'cpt3421-tbl-0002:row3:col4', 'Leegwater_2025_table_3:row2:col1', 'Leegwater_2025_table_3:row2:col2', 'Leegwater_2025_table_3:row2:col3', 'Leegwater_2025_table_3:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cpt3421-tbl-0002:row7:col1', 'cpt3421-tbl-0002:row7:col2', 'cpt3421-tbl-0002:row7:col3', 'cpt3421-tbl-0002:row7:col4', 'Leegwater_2025_table_3:row6:col1', 'Leegwater_2025_table_3:row6:col2', 'Leegwater_2025_table_3:row6:col3', 'Leegwater_2025_table_3:row6:col4', 'Leegwater_2025_table_3:row14:col1', 'Leegwater_2025_table_3:row14:col2', 'Leegwater_2025_table_3:row14:col3', 'Leegwater_2025_table_3:row14:col4'] |
| C5_unit_missing_Q357 | fail | [length] ** 3 / [time] |  | ['cpt3421-tbl-0002:row6:col1', 'cpt3421-tbl-0002:row6:col2', 'cpt3421-tbl-0002:row6:col3', 'cpt3421-tbl-0002:row6:col4', 'Leegwater_2025_table_3:row5:col1', 'Leegwater_2025_table_3:row5:col2', 'Leegwater_2025_table_3:row5:col3', 'Leegwater_2025_table_3:row5:col4', 'Leegwater_2025_table_3:row13:col1', 'Leegwater_2025_table_3:row13:col2', 'Leegwater_2025_table_3:row13:col3', 'Leegwater_2025_table_3:row13:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.33 L/h | ['cpt3421-tbl-0002:row4:col1', 'cpt3421-tbl-0002:row4:col2', 'cpt3421-tbl-0002:row4:col3', 'cpt3421-tbl-0002:row4:col4', 'Leegwater_2025_table_3:row3:col1', 'Leegwater_2025_table_3:row3:col2', 'Leegwater_2025_table_3:row3:col3', 'Leegwater_2025_table_3:row3:col4', 'Leegwater_2025_table_3:row11:col1', 'Leegwater_2025_table_3:row11:col2', 'Leegwater_2025_table_3:row11:col3', 'Leegwater_2025_table_3:row11:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.87 L | ['cpt3421-tbl-0002:row7:col1', 'cpt3421-tbl-0002:row7:col2', 'cpt3421-tbl-0002:row7:col3', 'cpt3421-tbl-0002:row7:col4', 'Leegwater_2025_table_3:row6:col1', 'Leegwater_2025_table_3:row6:col2', 'Leegwater_2025_table_3:row6:col3', 'Leegwater_2025_table_3:row6:col4', 'Leegwater_2025_table_3:row14:col1', 'Leegwater_2025_table_3:row14:col2', 'Leegwater_2025_table_3:row14:col3', 'Leegwater_2025_table_3:row14:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimethoprim%5D%20Trimethoprim_Leegwater2025_reference&body=Drug%3A%20trimethoprim%0ARecord%3A%20Trimethoprim_Leegwater2025_reference%0APaper%3A%20Leegwater_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trimethoprim/Trimethoprim_Leegwater2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:16 UTC</sub>
