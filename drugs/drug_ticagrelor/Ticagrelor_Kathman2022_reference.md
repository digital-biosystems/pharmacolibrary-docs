<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;Kathman_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_Kathman2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.195). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected: the record is not a compartmental population PK model for ticagrelor/PB2452 — it reports no distribution volume and no clearance or elimination rate — and the association rate constant kon carries the unit 'THETA2', a dimension mismatch on a structural parameter.**

The paper (Kathman_2022, healthy volunteers, PB2452 measured) is an exposure/outcome study: no volume of distribution and no clearance or elimination parameter exist for the model, so it fails the requirement of being a compartmental population PK model. A dimension check also failed on a structural parameter: kon, the second-order association rate constant for drug-target binding, is labelled 'Kon (nmol−1 × h−1) = EXP(THETA2)' but its unit is recorded as 'THETA2', which does not match the expected dimensions. The parameter list mixes ticagrelor parameters (CL/F = EXP(2.81) L/h, V1/F = EXP(5.04) L, V2/F = EXP(4.02) L, Q3/F = EXP(2.34) L/h) with metabolite parameters (CL = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) L/h, V1 = EXP(1.95) L, V2 = EXP(3.74) L, Q = EXP(−0.765) L/h), while Q2 carries the value 1.05 under a THETA2 label, consistent with the kon/THETA2 confusion. Extracted — ticagrelor: Q2 1.05.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ticagrelor, PB2452, the second reading unknown; it also differs on 32 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:30.545705+00:00) predates the upstream re-run (2026-10-05 16:24:19.294542+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `ticagrelor, PB2452`, measured `PB2452`.

## Citation
Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734)

<div class="pk-model-meta" hidden drug="ticagrelor" model-id="Ticagrelor_Kathman2022_reference" status="rejected" stale="true" population="healthy volunteers" measured-compound="PB2452" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, Q3/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA2 | `Q99` · Q2 | 1.05 | not captured | not captured | not captured | not captured | llm (0.6) | psp412734-tbl-0003:row7:col1, psp412734-tbl-0003:row7:col2, psp412734-tbl-0003:row7:col3, Kathman_2022_table_2:row4:col1, Kathman_2022_table_2:row4:col2, Kathman_2022_table_2:row4:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Kon (nmol−1 × h−1) = EXP(THETA2) | Q329 | not captured | llm_confirmed |
| Kd (nmol) = EXP(−4) | Q331 | not captured | llm_confirmed |
| Ktr (h−1) = EXP(THETA4 + THETA13*(LOG(WT)−4.35)) | Q306 | not captured | llm_confirmed |
| CL/F (L/h) = EXP(2.81) clearance of TICA | Q27 | not captured | llm_corrected |
| V1/F (L) = EXP(5.04) central volume of TICA | Q290 | not captured | llm_corrected |
| V2/F (L) = EXP(4.02) peripheral volume of TICA | Q82 | not captured | llm_corrected |
| Q1/F L (h) = EXP(2.34) intercompartmental clearance of TICA | Q309 | not captured | llm_corrected |
| CLM (L/h) = EXP(THETA11 + THETA10*(LOG(WT)−4.35)) clearance of TAM | Q22 | not captured | llm_confirmed |
| VM1 (L) = EXP(1.95) central volume of TAM | Q63 | not captured | llm_confirmed |
| VM2 (L) = EXP(3.74) peripheral volume of TAM | Q64 | not captured | llm_confirmed |
| Q_ant (L/h) = EXP(−0.765) intercompartmental clearance of PB2452 | Q30 | not captured | llm_confirmed |
| Koff2 = Kon*Kd2 | Q900 | not captured | llm_corrected |
| theta_q321_category | Q900 | not captured | not captured |
| theta_q320_category | Q900 | not captured | not captured |
| theta_q321_wt | Q900 | not captured | not captured |
| theta_q49_category | Q900 | not captured | not captured |
| theta_q45_category | Q900 | not captured | not captured |

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
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ant (l/h) = exp(0.631) clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[koff2 = kon*kd2].parameter_id` | Q900 | Q330 | mismatch |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2m (l/h) = exp(1.48) intercompartment clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta2]` | 1.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta3]` | not captured | -0.770 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta4]` | not captured | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta6]` | not captured | 2.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1 (l) = exp]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant (l) = exp(1.05) central volume of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant_perp (l) = exp(1.28) peripheral volume of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ticagrelor, PB2452 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | PB2452 | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row36:col1', 'psp412734-tbl-0003:row36:col2', 'psp412734-tbl-0003:row36:col3'] |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row28:col1', 'psp412734-tbl-0003:row28:col2', 'psp412734-tbl-0003:row28:col3'] |
| C5_dimension_Q290 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row30:col1', 'psp412734-tbl-0003:row30:col2', 'psp412734-tbl-0003:row30:col3'] |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row47:col1', 'psp412734-tbl-0003:row47:col2', 'psp412734-tbl-0003:row47:col3'] |
| C5_dimension_Q306 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row12:col1', 'psp412734-tbl-0003:row12:col2', 'psp412734-tbl-0003:row12:col3'] |
| C5_dimension_Q309 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row34:col1', 'psp412734-tbl-0003:row34:col2', 'psp412734-tbl-0003:row34:col3'] |
| C5_dimension_Q331 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row8:col1', 'psp412734-tbl-0003:row8:col2', 'psp412734-tbl-0003:row8:col3'] |
| C5_dimension_Q63 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row39:col1', 'psp412734-tbl-0003:row39:col2', 'psp412734-tbl-0003:row39:col3'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row41:col1', 'psp412734-tbl-0003:row41:col2', 'psp412734-tbl-0003:row41:col3'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['psp412734-tbl-0003:row32:col1', 'psp412734-tbl-0003:row32:col2', 'psp412734-tbl-0003:row32:col3'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412734-tbl-0003:row7:col1', 'psp412734-tbl-0003:row7:col2', 'psp412734-tbl-0003:row7:col3', 'Kathman_2022_table_2:row4:col1', 'Kathman_2022_table_2:row4:col2', 'Kathman_2022_table_2:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ticagrelor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kathman_2022` / `Kathman_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 16:24 UTC</sub>
