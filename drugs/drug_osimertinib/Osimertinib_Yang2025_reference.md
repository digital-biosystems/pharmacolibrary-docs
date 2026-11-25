<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jones_2023_pEGFR&quot;,&quot;label&quot;:&quot;Jones_2023 \u00b7 pEGFR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Yang2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Yang2025_reference" status="rejected" stale="false" population="patients with EGFR-mutated advanced NSCLC" measured-compound="osimertinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Yang J, Olabode D, Sawant-Basak A, Baldry R, Vishwanathan K, Bachina S et al. Population Pharmacokinetics and Exposure-Response Analysis of First-Line Osimertinib Plus Chemotherapy in Patients with EGFR-Mutated Advanced NSCLC. Clinical pharmacology and therapeutics 118(5):1110–1121 (2025).
  ·  DOI: [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759)

## Population and dosing

**Population:** patients with EGFR-mutated advanced NSCLC · condition EGFR-mutated advanced non-small cell lung cancer · age group adult.

**Dosing:** 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLpilot/F, L/h | CL/F | 14.35 | L/h |
| CLm/F, L/h | CL/F | 32.05 | L/h |
| Ka, 1/h | kabs | 0.26 | 1/h |
| Vp/F, L | V2/F | 1.151 | L |
| Fm | fm | 0.25 |  |
| Vm/F, L | V1/F | 151 | L |
| ALB on CLm/F | CL | 0.72 |  |
| ALB on Vm/F | V | 0.65 |  |
| theta_q314_wt | theta_q314_wt | 0.36 |  |
| theta_v2_f_wt | theta_v2_f_wt | 0.64 |  |
| theta_clm_f_wt | theta_clm_f_wt | 0.74 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789), qwen3.8-27b (not confirmed, agreement 0.607). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — osimertinib: CL/F 14.3 L/h, kabs 0.26 1/h, V2/F 1.15 L; AZ5104: CL/F 32 L/h, fm 0.25, V1/F 151 L, CL 0.72, V 0.65.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clpilot/f].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLpilot/F, L/h | `Q27` · CL/F | 14.35 | L/h | 3.986e-06 | m3/s | l/h | llm (0.6) | Yang_2025_table_2:row1:col1 |
| CLm/F, L/h | `Q27` · CL/F | 32.05 | L/h | 8.903e-06 | m3/s | l/h | exact (1) | Yang_2025_table_2:row2:col1 |
| Ka, 1/h | `Q49` · kabs | 0.26 | 1/h | 7.222e-05 | 1/s | 1/h | exact (1) | Yang_2025_table_2:row3:col1 |
| Vp/F, L | `Q82` · V2/F | 1.151 | L | 0.001151 | m3 | l | exact (1) | Yang_2025_table_2:row4:col1 |
| Fm | `Q45` · fm | 0.25 |  | 0.25 |  |  | exact (1) | Yang_2025_table_2:row5:col1 |
| Vm/F, L | `Q290` · V1/F | 151 | L | 0.151 | m3 | l | exact (1) | Yang_2025_table_2:row6:col1 |
| ALB on CLm/F | `Q22` · CL | 0.72 |  |  |  |  | llm_confirmed (0.6) | Yang_2025_table_2:row12:col1 |
| ALB on Vm/F | `Q61` · V | 0.65 |  |  |  |  | llm_confirmed (0.6) | Yang_2025_table_2:row13:col1 |
| theta_q314_wt | `Q900` · theta_q314_wt | 0.36 |  |  |  |  |  | Yang_2025_table_2:row7:col1 |
| theta_v2_f_wt | `Q900` · theta_v2_f_wt | 0.64 |  |  |  |  |  | Yang_2025_table_2:row9:col1 |
| theta_clm_f_wt | `Q900` · theta_clm_f_wt | 0.74 |  |  |  |  |  | Yang_2025_table_2:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 4 row(s) → AZ5104 (m_suffix 4)
- table section iiv: 'IIV on CLpilot/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'Correlation CLpilot/F-CLm/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on CLm/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on Ka' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on Vp/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on Vm/F' routed out of structural estimates ('Between subject variability')
- table section residual_error: 'Parent proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Parent additive component (nM)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite additive component (nM)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ALB on CLpilot/F' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_2:row8:col1'])
- dropped unlinked row (NIL): 'ALB on Vp/F' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_2:row10:col1'])
- dropped unlinked row (NIL): 'Asian (NonCHN or nonJPN) on CLm/F' — extend the ontology if this is a real PK parameter (source ['Yang_2025_table_2:row14:col1'])
- dropped duplicate Q351 ('JPN on CLm/F', value '0.18') — already have one for this compound
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number 41.09 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 3.62 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 3.99 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number 21.76 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number 46.12 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- metabolite az5104: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- metabolite az5104: Q367→Q61 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 11 linked by role; re-tagged parent→AZ5104 ×12, osimertinib→parent ×3, osimertinib→AZ5104 ×2
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Yang_2025_table_2: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.789 (15/19 fields) | 4 |
| `qwen3.8-27b` | not confirmed | 0.607 (17/28 fields) | 11 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clm/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clpilot/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` |  | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_wt]` | 0.36 |  | only_one_extracted |
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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Yang_2025_table_2:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Yang_2025_table_2:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Yang_2025_table_2:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Yang_2025_table_2:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Yang_2025_table_2:row4:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Yang_2025_table_2:row12:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Yang_2025_table_2:row13:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.3 L/h | ['Yang_2025_table_2:row1:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32 L/h | ['Yang_2025_table_2:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 151 L | ['Yang_2025_table_2:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.15 L | ['Yang_2025_table_2:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bosimertinib%5D%20Osimertinib_Yang2025_reference&body=Drug%3A%20osimertinib%0ARecord%3A%20Osimertinib_Yang2025_reference%0APaper%3A%20Yang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_osimertinib/Osimertinib_Yang2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:30 UTC</sub>
