<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;,&quot;href&quot;:&quot;drugs/drug_leflunomide/&quot;},{&quot;label&quot;:&quot;Hopkins_2015 \u00b7 initial_literature_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# leflunomide — `Leflunomide_Hopkins2015_initial_literature_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kfm has no unit.

<div class="pk-model-meta" hidden drug="leflunomide" model-id="Leflunomide_Hopkins2015_initial_literature_estimate" status="needs_review" stale="false" population="rheumatoid arthritis patients" measured-compound="teriflunomide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hopkins AM, Wiese MD, Proudman SM, O'Doherty CE, Foster D, Upton RN. Semiphysiologically Based Pharmacokinetic Model of Leflunomide Disposition in Rheumatoid Arthritis Patients. CPT: pharmacometrics & systems pharmacology 4(6):362–371 (2015).
  ·  DOI: [10.1002/psp4.46](https://doi.org/10.1002/psp4.46)

## Population and dosing

**Population:** rheumatoid arthritis patients · condition rheumatoid arthritis · age group adult · n = &gt;= 18 years, 69 RA patients.

**Dosed compound ≠ measured compound:** dosed leflunomide, measured teriflunomide.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| QCO (L/day/70 kg FFM) | QH | 8640 | L/day/70kg |
| QBODY (L/day/70 kg FFM) | Q | 6480 | L/day/70kg |
| VLUNG (L/70 kg FFM) | V | 1 | L/70kg |
| VLIV (L/70 kg FFM) | VH | 1.5 | L/70kg |
| VPORT (L/70 kg FFM) | Vnorm | 0.5 | L/70kg |
| VBODYLEF (L/70 kg FFM) | V1 | 7.5 | L/70kg |
| KALEF (day−1) | kabs | 24 | day−1 |
| KA (day−1) | kabs | 39.6 | day−1 |
| KOFF (day−1) | kel | 69120 | day−1 |
| VBILE (L/70 kg FFM) | V | 0.5 | L/70kg |
| CLM (L/day/70 kg FFM) | CLfm | 566.4 | L/day/70kg |
| MFCLL (θ1) | kfm | 0.7 |  |
| LGTFU (θ2) | fm | -6.14 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kfm has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — leflunomide: QH 8.64e+03 L/day/70kg, Q 6.48e+03 L/day/70kg, V 1 L/70kg, VH 1.5 L/70kg, Vnorm 0.5 L/70kg, V1 7.5 L/70kg, kabs 24 day−1; teriflunomide: kabs 39.6 day−1, kel 6.91e+04 day−1, V 0.5 L/70kg, CLfm 566 L/day/70kg, kfm 0.7, fm -6.14.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has leflunomide, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| QCO (L/day/70 kg FFM) | `Q369` · QH | 8640 | L/day/70kg | 0.0001 | m3/s | L/h | exact (1) | tbl1:row3:col2 |
| QBODY (L/day/70 kg FFM) | `Q30` · Q | 6480 | L/day/70kg | 7.5e-05 | m3/s | L/h | llm (0.6) | tbl1:row7:col2 |
| VLUNG (L/70 kg FFM) | `Q61` · V | 1 | L/70kg | 0.001 | m3 | L | llm (0.6) | tbl1:row8:col2 |
| VLIV (L/70 kg FFM) | `Q368` · VH | 1.5 | L/70kg | 0.0015 | m3 | L | exact (1) | tbl1:row9:col2 |
| VPORT (L/70 kg FFM) | `Q352` · Vnorm | 0.5 | L/70kg | 0.0005 | m3 | L | llm (0.6) | tbl1:row10:col2 |
| VBODYLEF (L/70 kg FFM) | `Q63` · V1 | 7.5 | L/70kg | 0.0075 | m3 | L | exact (1) | tbl1:row12:col2 |
| KALEF (day−1) | `Q49` · kabs | 24 | day−1 | 0.0002778 | 1/s | 1/d | exact (1) | tbl1:row13:col2 |
| KA (day−1) | `Q49` · kabs | 39.6 | day−1 | 0.0004583 | 1/s | 1/d | exact (1) | tbl1:row15:col2 |
| KOFF (day−1) | `Q47` · kel | 69120 | day−1 | 0.8 | 1/s | 1/d | exact (1) | tbl1:row16:col2 |
| VBILE (L/70 kg FFM) | `Q61` · V | 0.5 | L/70kg | 0.0005 | m3 | L | exact (1) | tbl1:row17:col2 |
| CLM (L/day/70 kg FFM) | `Q370` · CLfm | 566.4 | L/day/70kg | 6.556e-06 | m3/s | L/h | exact (1) | tbl1:row21:col2 |
| MFCLL (θ1) | `Q305` · kfm | 0.7 |  |  |  |  | exact (1) | tbl1:row22:col2 |
| LGTFU (θ2) | `Q45` · fm | -6.14 |  |  |  |  | exact (1) | tbl1:row25:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| aQREABS (L/day/70 kg FFM) | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OBJ' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col2'])
- unit_dimension_unknown: 'L/day/70 kg FFM' (QH)
- dropped duplicate Q369 ('QH (L/day/70 kg FFM)', value '2160') — already have one for this compound
- dropped duplicate Q369 ('QHP (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q369 ('QHA (L/day/70 kg FFM)', value None) — already have one for this compound
- unit_dimension_unknown: 'L/day/70 kg FFM' (Q)
- unit_dimension_unknown: 'L/70 kg FFM' (V)
- unit_dimension_unknown: 'L/70 kg FFM' (VH)
- unit_dimension_unknown: 'L/70 kg FFM' (Vnorm)
- dropped unlinked row (NIL): 'CPROT (mg/L)' — extend the ontology if this is a real PK parameter (source ['tbl1:row11:col2'])
- unit_dimension_unknown: 'L/70 kg FFM' (V1)
- dropped unlinked row (NIL): 'RATEBBM (day−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col2'])
- dropped unlinked row (NIL): 'BILEFLOW (L/day/70 kg FFM)' — extend the ontology if this is a real PK parameter (source ['tbl1:row18:col2'])
- unit_dimension_unknown: 'L/day/70 kg FFM' (CL)
- dropped duplicate Q22 ('aQE (L/day/70 kg FFM)', value None) — already have one for this compound
- unit_dimension_unknown: 'L/day/70 kg FFM' (CLfm)
- dropped duplicate Q370 ('CLL (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q370 ('CLLM (L/day/70 kg FFM)', value None) — already have one for this compound
- dropped duplicate Q45 ('FU', value '0.00215') — already have one for this compound
- dropped duplicate Q22 ('CLINT (θ3) (L/day/70 kg FFM)', value '36') — already have one for this compound
- dropped unlinked row (NIL): 'QBILE (θ4) (L/day/70 kg FFM)' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col2'])
- dropped duplicate Q63 ('VBODY (θ5) (L/70 kg FFM)', value '7.5') — already have one for this compound
- dropped unlinked row (NIL): '(σ1; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row40:col2'])
- dropped unlinked row (NIL): '(σ2; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row43:col2'])
- dropped unlinked row (NIL): '(σ3; %CV)' — extend the ontology if this is a real PK parameter (source ['tbl1:row46:col2'])
- implicit units: 'QCO (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 8640. T")
- implicit units: 'QBODY (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 6480. Q")
- implicit units: 'VLUNG (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 1. VLUNG is")
- implicit units: 'VLIV (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 1.5. VLIV i")
- implicit units: 'VPORT (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 0.5. VPORT ")
- implicit units: 'VBODYLEF (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 7.5. VBODYL")
- implicit units: 'VBILE (L/70 kg FFM)' → L/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/70 kg FFM)' immediately preceding the value 0.5. VBILE ")
- implicit units: 'CLM (L/day/70 kg FFM)' → L/day/70kg (from the paper text: "The parameter table header/caption context lists the unit as '(L/day/70 kg FFM)' immediately preceding the value 566.4. ")
- metabolite volume: 'VBILE (L/70 kg FFM)' Q63→Q61 for teriflunomide — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (QBODY (L/day/70 kg FFM)); Q61 (VLUNG (L/70 kg FFM)); Q63 (VBODYLEF (L/70 kg FFM)); Q61 (VBILE (L/70 kg FFM)); Q22 (aQREABS (L/day/70 kg FFM))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=teriflunomide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — hepatic compartment; parent 1 + hepatic, metabolites [1] (site hepatic: 'the record carries a hepatic compartment parameter (Q368, Q369)')
- status held at route_to_review — not promoted
- population split: 'initial literature estimate' subgroup of Hopkins_2015 (paper reports 3 populations: base model, covariate model, initial literature estimate)
- row roles (LLM): model_class=compartmental; 43/43 row label(s) assigned, 45 linked by role; re-tagged leflunomide→parent ×3, leflunomide→teriflunomide ×64
- review gap-fill skipped: this record measures 'teriflunomide', not leflunomide — the review values are the parent's

**Extraction notes:**
- unparsed cell tbl1:row3:col3 = '26, 27'
- unparsed cell tbl1:row4:col3 = '26, 27'
- unparsed cell tbl1:row5:col3 = '26, 28'
- unparsed cell tbl1:row6:col3 = '26, 28'
- unparsed cell tbl1:row7:col3 = '26, 27'
- unparsed cell tbl1:row8:col3 = '26, 27'
- unparsed cell tbl1:row9:col3 = '26, 27'
- unparsed cell tbl1:row10:col3 = '22, 24'
- unparsed cell tbl1:row12:col3 = '9, 18'
- unparsed cell tbl1:row17:col3 = '30, 31, 32'
- unparsed cell tbl1:row18:col1 = 'Bile flow for turnover of bile volume over 24 hours'
- unparsed cell tbl1:row18:col3 = '30, 31, 32'
- unparsed cell tbl1:row19:col3 = '30, 31, 32'
- unparsed cell tbl1:row20:col3 = '30, 31, 32'
- unparsed cell tbl1:row21:col3 = '9, 10'
- unparsed cell tbl1:row23:col3 = '9, 10'
- unparsed cell tbl1:row24:col3 = '9, 10'
- unparsed cell tbl1:row29:col3 = '9, 17'
- companion parameter table 3 transcribed (10 record(s), model stage 'base')
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (10/30 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aqreabs]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint (θ3)]` |  | 36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cll]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fu]` |  | 0.00215 | only_one_extracted |
| `gpt-oss-120b` | `parameters[koff]` |  | 69120 | only_one_extracted |
| `gpt-oss-120b` | `parameters[koff]` | 69120 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lgtfu]` |  | -6.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lgtfu]` | -6.14 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mfcll].parameter_id` | Q305 | Q45 | mismatch |
| `gpt-oss-120b` | `parameters[qbile (θ4)]` |  | 1140 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qbody]` | 6480 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qco].parameter_id` | Q369 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[qh]` |  | 2160 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ratebbm]` |  | 23.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vbile]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vbody (θ5)]` |  | 7.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vliv]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vport].parameter_id` | Q352 | Q64 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | leflunomide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | teriflunomide | unknown | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tbl1:row7:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['tbl1:row10:col2'] |
| C5_dimension_Q368 | pass | [length] ** 3 |  | ['tbl1:row9:col2'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['tbl1:row3:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['tbl1:row21:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tbl1:row16:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl1:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl1:row15:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl1:row8:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl1:row17:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tbl1:row12:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] |  | ['tbl1:row22:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1 L | ['tbl1:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.5 L | ['tbl1:row17:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.5 L | ['tbl1:row12:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bleflunomide%5D%20Leflunomide_Hopkins2015_initial_literature_estimate&body=Drug%3A%20leflunomide%0ARecord%3A%20Leflunomide_Hopkins2015_initial_literature_estimate%0APaper%3A%20Hopkins_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:58 UTC</sub>
