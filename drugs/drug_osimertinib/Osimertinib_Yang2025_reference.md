<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Yang2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because AZ5104 is unreachable from the dose despite the reported osimertinib-to-AZ5104 formation fraction, Fm, of 0.25.

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Yang2025_reference" status="rejected" stale="false" population="patients with EGFR-mutated advanced NSCLC across six studies" measured-compound="osimertinib and AZ5104" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Yang J, Olabode D, Sawant-Basak A, Baldry R, Vishwanathan K, Bachina S et al. Population Pharmacokinetics and Exposure-Response Analysis of First-Line Osimertinib Plus Chemotherapy in Patients with EGFR-Mutated Advanced NSCLC. Clinical pharmacology and therapeutics 118(5):1110–1121 (2025).
  ·  DOI: [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759)

## Population and dosing

**Population:** patients with EGFR-mutated advanced NSCLC across six studies · condition EGFR-mutated advanced NSCLC · age group adult · n = 2196.

**Dosing:** 40, 80 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed osimertinib (plus platinum-pemetrexed in FLAURA2), measured osimertinib and AZ5104.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLptot/F, L/h | CL/F | 14.35 | L/h | 0.98 |  |
| CLm/F, L/h | CL/F | 32.05 | L/h | 1.22 |  |
| K a , 1/h | kabs | 0.26 | 1/h | 3.41 |  |
| V p /F, L | V2/F | 1151 | L | 2.10 |  |
| F m | fm | 0.25 |  |  |  |
| V m /F, L | V1/F | 151 | L | 2.95 |  |
| ALB on CLm/F | CL | 0.72 |  | 11.74 | 0.19 (None% RSE) |
| ALB on V m /F | V | 0.65 |  | 27.43 |  |
| theta_q319_wt | theta_q319_wt | 0.36 |  | 11.73 |  |
| theta_v2_f_wt | theta_v2_f_wt | 0.64 |  | 14.01 |  |
| theta_clm_f_wt | theta_clm_f_wt | 0.74 |  | 6.53 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.607). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because AZ5104 is unreachable from the dose despite the reported osimertinib-to-AZ5104 formation fraction, Fm, of 0.25.**

AZ5104 is listed as a one-compartment central metabolite formed from osimertinib, but the record shows no path from the dose to it. The metabolism link uses Fm = 0.25, the fraction of osimertinib converted to AZ5104, while the link parameter’s kind is unknown. Extracted — osimertinib: CL/F 14.3 L/h, kabs 0.26 1/h, V2/F 1.15e+03 L; AZ5104: CL/F 32 L/h, fm 0.25, V1/F 151 L, CL 0.72, V 0.65.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has osimertinib (plus platinum-pemetrexed in FLAURA2), the second reading osimertinib; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLptot/F, L/h | `Q27` · CL/F | 14.35 | L/h | 3.986e-06 | m3/s | l/h | 0.98 | llm (0.6) | cpt3759-tbl-0002:row2:col1, cpt3759-tbl-0002:row2:col2 |  |
| CLm/F, L/h | `Q27` · CL/F | 32.05 | L/h | 8.903e-06 | m3/s | l/h | 1.22 | exact (1) | cpt3759-tbl-0002:row3:col1, cpt3759-tbl-0002:row3:col2 |  |
| K a , 1/h | `Q49` · kabs | 0.26 | 1/h | 7.222e-05 | 1/s | 1/h | 3.41 | exact (1) | cpt3759-tbl-0002:row4:col1, cpt3759-tbl-0002:row4:col2 |  |
| V p /F, L | `Q82` · V2/F | 1151 | L | 1.151 | m3 | l | 2.10 | space_fold (0.95) | cpt3759-tbl-0002:row5:col1, cpt3759-tbl-0002:row5:col2 |  |
| F m | `Q45` · fm | 0.25 |  |  |  |  |  | exact (1) | cpt3759-tbl-0002:row6:col1 |  |
| V m /F, L | `Q290` · V1/F | 151 | L | 0.151 | m3 | l | 2.95 | exact (1) | cpt3759-tbl-0002:row7:col1, cpt3759-tbl-0002:row7:col2 |  |
| ALB on CLm/F | `Q22` · CL | 0.72 |  |  |  |  | 11.74 | llm_confirmed (0.6) | cpt3759-tbl-0002:row13:col1, cpt3759-tbl-0002:row13:col2 | 0.19 (None% RSE) |
| ALB on V m /F | `Q61` · V | 0.65 |  |  |  |  | 27.43 | llm (0.6) | cpt3759-tbl-0002:row14:col1, cpt3759-tbl-0002:row14:col2 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.36 |  |  |  |  | 11.73 |  | cpt3759-tbl-0002:row8:col1, cpt3759-tbl-0002:row8:col2 |  |
| theta_v2_f_wt | `Q900` · theta_v2_f_wt | 0.64 |  |  |  |  | 14.01 |  | cpt3759-tbl-0002:row10:col1, cpt3759-tbl-0002:row10:col2 |  |
| theta_clm_f_wt | `Q900` · theta_clm_f_wt | 0.74 |  |  |  |  | 6.53 |  | cpt3759-tbl-0002:row12:col1, cpt3759-tbl-0002:row12:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CLptot/F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'Correlation CLptot/F‐CLm/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on CLm/F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on K a a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on V p /F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on V m /F a' routed out of structural estimates ('Between subject variability')
- table section residual_error: 'Parent proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Parent additive component (nM)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite additive component (nM)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('ALB on CLptot/F', value '0.67') — already have one for this compound
- dropped duplicate Q82 ('ALB on V p /F', value '1.57') — already have one for this compound
- dropped unlinked row (NIL): 'Asian (NonCHN or nonJPN) on CLm/F' — extend the ontology if this is a real PK parameter (source ['cpt3759-tbl-0002:row15:col1', 'cpt3759-tbl-0002:row15:col2'])
- dropped duplicate Q351 ('JPN on CLm/F', value '0.18') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- metabolite az5104: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- metabolite az5104: Q367→Q61 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib and AZ5104
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 11 linked by role; re-tagged parent→AZ5104 ×23
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt3759-tbl-0002:row2:col3 = '14.35 (14.26–14.69)'
- unparsed cell cpt3759-tbl-0002:row3:col3 = '32.06 (31.78–32.82)'
- unparsed cell cpt3759-tbl-0002:row4:col3 = '0.26 (0.24–0.28)'
- unparsed cell cpt3759-tbl-0002:row5:col3 = '1,151 (1118–1,223)'
- unparsed cell cpt3759-tbl-0002:row7:col3 = '151 (140–163)'
- unparsed cell cpt3759-tbl-0002:row8:col3 = '0.36 (0.29–0.44)'
- unparsed cell cpt3759-tbl-0002:row9:col3 = '0.68 (0.60–0.81)'
- unparsed cell cpt3759-tbl-0002:row10:col3 = '0.64 (0.53–0.88)'
- unparsed cell cpt3759-tbl-0002:row11:col3 = '1.58 (1.53–2.06)'
- unparsed cell cpt3759-tbl-0002:row12:col3 = '0.74 (0.69–0.84)'
- unparsed cell cpt3759-tbl-0002:row13:col3 = '0.72 (0.62–0.87)'
- unparsed cell cpt3759-tbl-0002:row14:col3 = '0.68 (1.28–0.42)'
- unparsed cell cpt3759-tbl-0002:row15:col3 = '0.16 (0.13–0.19)'
- unparsed cell cpt3759-tbl-0002:row16:col3 = '0.18 (0.15–0.21)'
- unparsed cell cpt3759-tbl-0002:row18:col3 = '0.19 (0.18–0.20)'
- unparsed cell cpt3759-tbl-0002:row19:col3 = '0.19 (0.17–0.19)'
- unparsed cell cpt3759-tbl-0002:row20:col3 = '0.24 (0.22–0.24)'
- unparsed cell cpt3759-tbl-0002:row21:col3 = '0.71 (0.62–0.84)'
- unparsed cell cpt3759-tbl-0002:row22:col3 = '0.54 (0.51–0.61)'
- unparsed cell cpt3759-tbl-0002:row23:col3 = '0.51 (0.42–0.59)'
- unparsed cell cpt3759-tbl-0002:row25:col3 = '0.22 (0.21–0.23)'
- unparsed cell cpt3759-tbl-0002:row26:col3 = '29.52 (26.13–34.23)'
- unparsed cell cpt3759-tbl-0002:row27:col3 = '0.23 (0.22–0.24)'
- unparsed cell cpt3759-tbl-0002:row28:col3 = '0.36 (0.31–0.42)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.607 (17/28 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alb on clm/f]` | 0.72 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[asian (nonchn or nonjpn) on clm/f]` |  | 0.16 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[clptot/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.36 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q76_wt]` |  | 0.64 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_f_wt]` | 0.64 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v p /f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[wt_on_clptot_f]` |  | 0.36 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | osimertinib (plus platinum-pemetrexed in FLAURA2) | osimertinib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | osimertinib and AZ5104 | osimertinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt3759-tbl-0002:row2:col1', 'cpt3759-tbl-0002:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt3759-tbl-0002:row3:col1', 'cpt3759-tbl-0002:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt3759-tbl-0002:row7:col1', 'cpt3759-tbl-0002:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt3759-tbl-0002:row4:col1', 'cpt3759-tbl-0002:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt3759-tbl-0002:row5:col1', 'cpt3759-tbl-0002:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['cpt3759-tbl-0002:row13:col1', 'cpt3759-tbl-0002:row13:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['cpt3759-tbl-0002:row14:col1', 'cpt3759-tbl-0002:row14:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.3 L/h | ['cpt3759-tbl-0002:row2:col1', 'cpt3759-tbl-0002:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32 L/h | ['cpt3759-tbl-0002:row3:col1', 'cpt3759-tbl-0002:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 151 L | ['cpt3759-tbl-0002:row7:col1', 'cpt3759-tbl-0002:row7:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.15e+03 L | ['cpt3759-tbl-0002:row5:col1', 'cpt3759-tbl-0002:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bosimertinib%5D%20Osimertinib_Yang2025_reference&body=Drug%3A%20osimertinib%0ARecord%3A%20Osimertinib_Yang2025_reference%0APaper%3A%20Yang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_osimertinib/Osimertinib_Yang2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:49 UTC</sub>
