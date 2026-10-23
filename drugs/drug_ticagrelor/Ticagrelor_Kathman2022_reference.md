<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;Kathman_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_Kathman2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Rejected), but the paper was screened again on 2026-10-05 16:24 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected: the record is not a compartmental population PK model for ticagrelor/PB2452 — it reports no distribution volume and no clearance or elimination rate — and the association rate constant kon carries the unit 'THETA2', a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="ticagrelor" model-id="Ticagrelor_Kathman2022_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="PB2452" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kathman SJ, Wheeler JJ, Bhatt DL, Arnold SE, Lee JS. Population pharmacokinetic-pharmacodynamic modeling of PB2452, a monoclonal antibody fragment being developed as a ticagrelor reversal agent, in healthy volunteers. CPT: pharmacometrics & systems pharmacology 11(1):68–81 (2022).
  ·  DOI: [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 61.

**Dosed compound ≠ measured compound:** dosed ticagrelor, PB2452, measured PB2452.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q3/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| THETA2 | Q2 | 1.05 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.195). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: the record is not a compartmental population PK model for ticagrelor/PB2452 — it reports no distribution volume and no clearance or elimination rate — and the association rate constant kon carries the unit 'THETA2', a dimension mismatch on a structural parameter.**

The paper (Kathman_2022, healthy volunteers, PB2452 measured) is an exposure/outcome study: no volume of distribution and no clearance or elimination parameter exist for the model, so it fails the requirement of being a compartmental population PK model. A dimension check also failed on a structural parameter: kon, the second-order association rate constant for drug-target binding, is labelled 'Kon (nmol−1 × h−1) = EXP(THETA2)' but its unit is recorded as 'THETA2', which does not match the expected dimensions. The parameter list mixes ticagrelor parameters (CL/F = EXP(2.81) L/h, V1/F = EXP(5.04) L, V2/F = EXP(4.02) L, Q3/F = EXP(2.34) L/h) with metabolite parameters (CL = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) L/h, V1 = EXP(1.95) L, V2 = EXP(3.74) L, Q = EXP(−0.765) L/h), while Q2 carries the value 1.05 under a THETA2 label, consistent with the kon/THETA2 confusion. Extracted — ticagrelor: Q2 1.05.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ticagrelor, PB2452, the second reading unknown; it also differs on 32 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| THETA2 | `Q99` · Q2 | 1.05 |  | llm (0.6) | psp412734-tbl-0003:row7:col1, psp412734-tbl-0003:row7:col2, psp412734-tbl-0003:row7:col3, Kathman_2022_table_2:row4:col1, Kathman_2022_table_2:row4:col2, Kathman_2022_table_2:row4:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Kon (nmol−1 × h−1) = EXP(THETA2) | Q329 | llm_confirmed |
| Kd (nmol) = EXP(−4) | Q331 | llm_confirmed |
| Ktr (h−1) = EXP(THETA4 + THETA13*(LOG(WT)−4.35)) | Q306 | llm_confirmed |
| CL/F (L/h) = EXP(2.81) clearance of TICA | Q27 | llm_corrected |
| V1/F (L) = EXP(5.04) central volume of TICA | Q290 | llm_corrected |
| V2/F (L) = EXP(4.02) peripheral volume of TICA | Q82 | llm_corrected |
| Q1/F L (h) = EXP(2.34) intercompartmental clearance of TICA | Q309 | llm_corrected |
| CLM (L/h) = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) clearance of TAM | Q22 | llm_confirmed |
| VM1 (L) = EXP(1.95) central volume of TAM | Q63 | llm_confirmed |
| VM2 (L) = EXP(3.74) peripheral volume of TAM | Q64 | llm_confirmed |
| Q_ant (L/h) = EXP(−0.765) intercompartmental clearance of PB2452 | Q30 | llm_confirmed |
| Koff2 = Kon*Kd2 | Q900 | llm_corrected |
| theta_q321_category | Q900 |  |
| theta_q320_category | Q900 |  |
| theta_q321_wt | Q900 |  |
| theta_q49_category | Q900 |  |
| theta_q45_category | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'THETA1' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row3:col1', 'psp412734-tbl-0003:row3:col2', 'psp412734-tbl-0003:row3:col3', 'Kathman_2022_table_2:row2:col1', 'Kathman_2022_table_2:row2:col2', 'Kathman_2022_table_2:row2:col3'])
- unit_dimension_unknown: 'THETA2' (kon)
- unit_dimension_mismatch: 'Kd (nmol) = EXP(−4)' → Q331 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'THETA3' (KD)
- dropped duplicate Q331 ('Kd2 (nmol) = EXP(THETA3)', value None) — already have one for this compound
- dropped unlinked row (NIL): 'THETA3' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row11:col1', 'psp412734-tbl-0003:row11:col2', 'psp412734-tbl-0003:row11:col3', 'Kathman_2022_table_2:row6:col1', 'Kathman_2022_table_2:row6:col2', 'Kathman_2022_table_2:row6:col3'])
- unit_dimension_mismatch: 'Ktr (h−1) = EXP(THETA4 + THETA13*(LOG(WT)−4.35))' → Q306 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'THETA4' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row13:col1', 'psp412734-tbl-0003:row13:col2', 'psp412734-tbl-0003:row13:col3', 'Kathman_2022_table_2:row8:col1', 'Kathman_2022_table_2:row8:col2', 'Kathman_2022_table_2:row8:col3'])
- dropped unlinked row (NIL): 'THETA13' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row14:col1', 'psp412734-tbl-0003:row14:col2', 'psp412734-tbl-0003:row14:col3'])
- unit_dimension_unknown: 'THETA5' (kon)
- dropped duplicate Q329 ('Kon2 (nmol−1 × h−1) = EXP(THETA5)', value None) — already have one for this compound
- dropped unlinked row (NIL): 'THETA5' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row16:col1', 'psp412734-tbl-0003:row16:col2', 'psp412734-tbl-0003:row16:col3'])
- dropped unlinked row (NIL): 'THETA6' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row18:col1', 'psp412734-tbl-0003:row18:col2', 'psp412734-tbl-0003:row18:col3'])
- dropped unlinked row (NIL): 'THETA7' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row20:col1', 'psp412734-tbl-0003:row20:col2', 'psp412734-tbl-0003:row20:col3'])
- dropped unlinked row (NIL): 'THETA8' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row22:col1', 'psp412734-tbl-0003:row22:col2', 'psp412734-tbl-0003:row22:col3'])
- dropped unlinked row (NIL): 'THETA12' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row23:col1', 'psp412734-tbl-0003:row23:col2', 'psp412734-tbl-0003:row23:col3'])
- dropped unlinked row (NIL): 'THETA9' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row25:col1', 'psp412734-tbl-0003:row25:col2', 'psp412734-tbl-0003:row25:col3'])
- unit_dimension_mismatch: 'CL/F (L/h) = EXP(2.81) clearance of TICA' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V1/F (L) = EXP(5.04) central volume of TICA' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V2/F (L) = EXP(4.02) peripheral volume of TICA' → Q82 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q1/F L (h) = EXP(2.34) intercompartmental clearance of TICA' → Q309 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLM (L/h) = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) clearance of TAM' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'THETA10' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row37:col1', 'psp412734-tbl-0003:row37:col2', 'psp412734-tbl-0003:row37:col3'])
- dropped unlinked row (NIL): 'THETA11' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row38:col1', 'psp412734-tbl-0003:row38:col2', 'psp412734-tbl-0003:row38:col3'])
- unit_dimension_mismatch: 'VM1 (L) = EXP(1.95) central volume of TAM' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'VM2 (L) = EXP(3.74) peripheral volume of TAM' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Q2M (L/h) = EXP(1.48) intercompartment clearance of TAM' → Q99 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q99 ('Q2M (L/h) = EXP(1.48) intercompartment clearance of TAM', value None) — already have one for this compound
- unit_dimension_mismatch: 'CL_ant (L/h) = EXP(0.631) clearance of PB2452' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL_ant (L/h) = EXP(0.631) clearance of PB2452', value None) — already have one for this compound
- unit_dimension_mismatch: 'Q_ant (L/h) = EXP(−0.765) intercompartmental clearance of PB2452' → Q30 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V_ant (L) = EXP(1.05) central volume of PB2452' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('V_ant (L) = EXP(1.05) central volume of PB2452', value None) — already have one for this compound
- unit_dimension_mismatch: 'V_ant_perp (L) = EXP(1.28) peripheral volume of PB2452' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q64 ('V_ant_perp (L) = EXP(1.28) peripheral volume of PB2452', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA1' (CL)
- dropped duplicate Q22 ('CL (L/h) = EXP(THETA1)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA2' (V1)
- dropped duplicate Q63 ('V1 (L) = EXP(THETA2)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA3' (Q)
- dropped duplicate Q30 ('Q (L/h) = EXP(THETA3)', value None) — already have one for this compound
- unit_dimension_unknown: 'THETA4' (V2)
- dropped duplicate Q64 ('V2 (L) = EXP(THETA4)', value None) — already have one for this compound
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q320 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q320 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q321 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=PB2452
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- review gap-fill skipped: this record measures 'PB2452', not ticagrelor — the review values are the parent's

**Extraction notes:**
- unparsed cell psp412734-tbl-0003:row3:col4 = '23.3%'
- unparsed cell psp412734-tbl-0003:row7:col4 = '43.6%'
- unparsed cell psp412734-tbl-0003:row11:col4 = '25.9%'
- unparsed cell psp412734-tbl-0003:row13:col4 = '25.0%'
- unparsed cell psp412734-tbl-0003:row16:col4 = '30.4%'
- unparsed cell psp412734-tbl-0003:row18:col4 = '23.6%'
- unparsed cell psp412734-tbl-0003:row20:col4 = '59.8%'
- unparsed cell psp412734-tbl-0003:row22:col4 = '25.3%'
- unparsed cell psp412734-tbl-0003:row25:col4 = '20.7%'
- unparsed cell psp412734-tbl-0003:row37:col4 = '23.9%'
- unparsed cell psp412734-tbl-0003:row41:col4 = '10% Fixed'
- unparsed cell psp412734-tbl-0003:row45:col4 = '5% Fixed'
- unparsed cell Kathman_2022_table_2:row2:col4 = '37.8%'
- unparsed cell Kathman_2022_table_2:row4:col4 = '40.4%'
- unparsed cell Kathman_2022_table_2:row6:col4 = '42.8%'
- unparsed cell Kathman_2022_table_2:row8:col4 = '62.9%'
- companion parameter table 2 transcribed (28 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.195 (8/41 fields) | 33 |

<details><summary>33 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ticagrelor', 'tam', 'metabolism']] | [['ticagrelor', 'ticagrelor metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ant (l/h) = exp(0.631) clearance of pb2452]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[koff2 = kon*kd2].parameter_id` | Q900 | Q330 | mismatch |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2m (l/h) = exp(1.48) intercompartment clearance of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta2]` | 1.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta3]` |  | -0.770 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta4]` |  | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta6]` |  | 2.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1 (l) = exp]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant (l) = exp(1.05) central volume of pb2452]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant_perp (l) = exp(1.28) peripheral volume of pb2452]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ticagrelor, PB2452 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | PB2452 | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row36:col1', 'psp412734-tbl-0003:row36:col2', 'psp412734-tbl-0003:row36:col3'] |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row28:col1', 'psp412734-tbl-0003:row28:col2', 'psp412734-tbl-0003:row28:col3'] |
| C5_dimension_Q290 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row30:col1', 'psp412734-tbl-0003:row30:col2', 'psp412734-tbl-0003:row30:col3'] |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row47:col1', 'psp412734-tbl-0003:row47:col2', 'psp412734-tbl-0003:row47:col3'] |
| C5_dimension_Q306 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row12:col1', 'psp412734-tbl-0003:row12:col2', 'psp412734-tbl-0003:row12:col3'] |
| C5_dimension_Q309 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row34:col1', 'psp412734-tbl-0003:row34:col2', 'psp412734-tbl-0003:row34:col3'] |
| C5_dimension_Q331 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row8:col1', 'psp412734-tbl-0003:row8:col2', 'psp412734-tbl-0003:row8:col3'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row39:col1', 'psp412734-tbl-0003:row39:col2', 'psp412734-tbl-0003:row39:col3'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row41:col1', 'psp412734-tbl-0003:row41:col2', 'psp412734-tbl-0003:row41:col3'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | Units | ['psp412734-tbl-0003:row32:col1', 'psp412734-tbl-0003:row32:col2', 'psp412734-tbl-0003:row32:col3'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] |  | ['psp412734-tbl-0003:row7:col1', 'psp412734-tbl-0003:row7:col2', 'psp412734-tbl-0003:row7:col3', 'Kathman_2022_table_2:row4:col1', 'Kathman_2022_table_2:row4:col2', 'Kathman_2022_table_2:row4:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bticagrelor%5D%20Ticagrelor_Kathman2022_reference&body=Drug%3A%20ticagrelor%0ARecord%3A%20Ticagrelor_Kathman2022_reference%0APaper%3A%20Kathman_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 16:24 UTC</sub>
