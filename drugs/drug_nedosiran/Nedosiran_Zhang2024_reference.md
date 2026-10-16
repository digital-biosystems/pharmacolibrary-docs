<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nedosiran&quot;,&quot;href&quot;:&quot;drugs/drug_nedosiran/&quot;},{&quot;label&quot;:&quot;Zhang_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nedosiran — `Nedosiran_Zhang2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. Extracted — nedosiran: CL/F 5.69 L/h, Vmax 3.94 mg/h, Km 293 ng/mL, Q/F 2.45 L/h, V/F 147 L, t1/2ka 1.54.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Zhang S et al., Nedosiran population pharmacokinetic an…, British journal of clinical… (2024)
  ·  DOI: [10.1111/bcp.16194](https://doi.org/10.1111/bcp.16194)

<div class="pk-model-meta" hidden drug="nedosiran" model-id="Nedosiran_Zhang2024_reference" status="rejected" stale="false" population="healthy participants and patients with primary hyperoxaluria type 1 (PH1) and type 2 (PH2)" measured-compound="nedosiran" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 15 covariate effects.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance (CL/F, L/h) | `Q27` · CL/F | 5.69 | L/h | 1.5805555555555558e-06 | [l] / [h] | 11.0 | exact (1.0) | bcp16194-tbl-0001:row1:col1 | — | not captured |
| exponent_for_egfr_on_cl_f | `Q900` · exponent_for_egfr_on_cl_f | 0.87 | not captured | not captured | not captured | 17.5 | not captured (not captured) | bcp16194-tbl-0001:row3:col1 | — | not captured |
| Maximum metabolic rate (V max, mg/h) | `Q66` · Vmax | 3.94 | mg/h | not captured | [mg] / [h] | 15.6 | llm (0.6) | bcp16194-tbl-0001:row4:col1 | — | not captured |
| Michaelis‐Menton constant (K M, ng/mL) | `Q1` · Km | 293.00 | ng/mL | not captured | [ng] / [ml] | 15.0 | llm_confirmed (0.6) | bcp16194-tbl-0001:row5:col1 | — | not captured |
| Apparent intercompartmental clearance (Q/F,L/h) | `Q69` · Q/F | 2.45 | L/h | 6.805555555555557e-07 | [l] / [h] | 13.1 | llm_corrected (0.6) | bcp16194-tbl-0001:row6:col1 | — | not captured |
| Apparent volume of distribution (V c/F, L) | `Q76` · V/F | 147.00 | L | 0.147 | [l] | 3.7 | exact (1.0) | bcp16194-tbl-0001:row7:col1 | — | not captured |
| Covariate effect of PH1 on ka1 | `Q95` · t1/2ka | 1.54 | not captured | not captured | not captured | 7.8 | llm (0.6) | bcp16194-tbl-0001:row14:col1 | — | not captured |
| between_subject_variability_for_v_c_f_cv | `Q900` · between_subject_variability_for_v_c_f_cv | 27.10 | not captured | not captured | not captured | 11.1 | not captured (not captured) | bcp16194-tbl-0001:row16:col1 | — | not captured |
| between_subject_variability_for_k_a1_cv | `Q900` · between_subject_variability_for_k_a1_cv | 42.10 | not captured | not captured | not captured | 9.5 | not captured (not captured) | bcp16194-tbl-0001:row17:col1 | — | not captured |
| between_subject_variability_for_k_a2_cv | `Q900` · between_subject_variability_for_k_a2_cv | 27.60 | not captured | not captured | not captured | 7.5 | not captured (not captured) | bcp16194-tbl-0001:row18:col1 | — | not captured |
| between_subject_variability_for_v_max_cv | `Q900` · between_subject_variability_for_v_max_cv | 35.30 | not captured | not captured | not captured | 14.8 | not captured (not captured) | bcp16194-tbl-0001:row19:col1 | — | not captured |
| between_subject_variability_for_baseline_24_h_u_ox_cv | `Q900` · between_subject_variability_for_baseline_24_h_u_ox_cv | 31.7 | not captured | not captured | not captured | 9.3 | not captured (not captured) | Zhang_2024_table_2:row6:col1 | — | not captured |
| between_subject_variability_for_ic50_cv | `Q900` · between_subject_variability_for_ic50_cv | 86 | not captured | not captured | not captured | 15.5 | not captured (not captured) | Zhang_2024_table_2:row7:col1 | — | not captured |
| between_subject_variability_for_i_max_cv | `Q900` · between_subject_variability_for_i_max_cv | 29.4 | not captured | not captured | not captured | 61.5 | not captured (not captured) | Zhang_2024_table_2:row8:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp16194-tbl-0001:row2:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp16194-tbl-0001:row8:col1 | — | not captured |
| theta_q319_egfr_power | `Q900` · theta_q319_egfr_power | 0.19 | not captured | not captured | not captured | 18.0 | not captured (not captured) | bcp16194-tbl-0001:row9:col1 | — | not captured |
| theta_q82_category | `Q900` · theta_q82_category | 5300.00 | not captured | not captured | not captured | 26.8 | not captured (not captured) | bcp16194-tbl-0001:row10:col1 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | 0.22 | not captured | not captured | not captured | 4.9 | not captured (not captured) | bcp16194-tbl-0001:row12:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | -0.83 | not captured | not captured | not captured | 11.5 | not captured (not captured) | bcp16194-tbl-0001:row13:col1 | — | not captured |
| theta_q312_category | `Q900` · theta_q312_category | 0.35 | not captured | not captured | not captured | 12.6 | not captured (not captured) | bcp16194-tbl-0001:row20:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Exponent for eGFR on CL/F' → Q900:exponent_for_egfr_on_cl_f = 0.87 (power on Q27)
- unit_dimension_mismatch: 'Maximum metabolic rate (V max, mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Percentage of the dose absorbed via the slow pathway (FR1)' — extend the ontology if this is a real PK parameter (source ['bcp16194-tbl-0001:row11:col1'])
- covariate level 'Between‐subject variability for V c/F (%CV)' → Q900:between_subject_variability_for_v_c_f_cv = 27.10 (additive_shift on Q27)
- covariate level 'Between‐subject variability for k a1 (%CV)' → Q900:between_subject_variability_for_k_a1_cv = 42.10 (additive_shift on Q27)
- covariate level 'Between‐subject variability for k a2 (%CV)' → Q900:between_subject_variability_for_k_a2_cv = 27.60 (additive_shift on Q27)
- covariate level 'Between‐subject variability for V max (%CV)' → Q900:between_subject_variability_for_v_max_cv = 35.30 (additive_shift on Q27)
- dropped unlinked row (NIL): 'Baseline 24‐h urinary oxalate (24‐h U ox, μmol/24 h)' — extend the ontology if this is a real PK parameter (source ['Zhang_2024_table_2:row0:col1'])
- dropped PD-category row 'First‐order elimination rate of 24‐h U ox (K out, 1/week)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2024_table_2:row1:col1'])
- dropped PD-category row 'Maximum inhibitory effect (I max, %)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2024_table_2:row2:col1'])
- dropped PD-category row 'Half‐maximal inhibitory concentration in effect compartment (IC50, ng/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2024_table_2:row3:col1'])
- dropped PD-category row 'Hill coefficient (γ)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2024_table_2:row4:col1'])
- dropped PD-category row 'Equilibration half‐life in the effect compartment (λ, week)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2024_table_2:row5:col1'])
- covariate level 'Between‐subject variability for baseline 24‐h U ox (%CV)' → Q900:between_subject_variability_for_baseline_24_h_u_ox_cv = 31.7 (additive_shift on Q27)
- covariate level 'Between‐subject variability for IC50 (%CV)' → Q900:between_subject_variability_for_ic50_cv = 86 (additive_shift on Q27)
- covariate level 'Between‐subject variability for I max (%CV)' → Q900:between_subject_variability_for_i_max_cv = 29.4 (additive_shift on Q27)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q82 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q49 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nedosiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'nedosiran' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (13 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp16194-tbl-0001:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16194-tbl-0001:row1:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['bcp16194-tbl-0001:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16194-tbl-0001:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp16194-tbl-0001:row7:col1'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['bcp16194-tbl-0001:row14:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.69 L/h | not captured | not captured | ['bcp16194-tbl-0001:row1:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 147 L | not captured | not captured | ['bcp16194-tbl-0001:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nedosiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2024` / `Zhang_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:32 UTC</sub>
