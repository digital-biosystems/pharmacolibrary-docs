<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;aztreonam&quot;,&quot;href&quot;:&quot;drugs/drug_aztreonam/&quot;},{&quot;label&quot;:&quot;Das_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aztreonam — `Aztreonam_Das2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The intercompartmental clearance for aztreonam was recorded with area under the curve units, creating a dimension mismatch that prevents simulation.**

The parameter labeled AUC has a meaning describing area under the concentration-time curve, yet its value is 10.7 with units of L/h, which is a clearance unit. The label for this parameter reads Q*WT/70** 0.75 (L/h), indicating it represents intercompartmental clearance, not area under the curve. This inconsistency between the pharmacokinetic meaning, the label, and the units constitutes a dimensional error in the model structure. Extracted — aztreonam: CLnorm 5.21 L/h, V1 6.83 L, AUC 10.7 L/h, V2 5.76 L, Bmax 3.24, CL 10.4 L/h, Q 4.96 L/h, kabs 0.459 1/h, … (+3).

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Das S et al., Dose selection for aztreonam-avibactam,…, European journal of clinica… (2024)
  ·  DOI: [10.1007/s00228-023-03609-x](https://doi.org/10.1007/s00228-023-03609-x)

<div class="pk-model-meta" hidden drug="aztreonam" model-id="Aztreonam_Das2024_reference" status="rejected" stale="false" population="patients with complicated infections (healthy subjects and patients with cIAI/cUTI)" measured-compound="aztreonam" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 11 extracted, plus 10 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1: CL*WT/70** 0.75 (L/h) | `Q354` · CLnorm | 5.21 | L/h | 1.4472222222222223e-06 | [l] / [h] | 3.73 | llm_corrected (0.6) | Das_2024_table_S3:row0:col1 | — | not captured |
| θ2: Vc*WT/70 (L) | `Q63` · V1 | 6.83 | L | 0.00683 | [l] | 4.43 | llm_confirmed (0.6) | Das_2024_table_S3:row1:col1 | — | 30.0 (25.4% RSE) |
| θ3: Q*WT/70** 0.75 (L/h) | `Q88` · AUC | 10.7 | L/h | not captured | [l] / [h] | 12.2 | llm (0.6) | Das_2024_table_S3:row2:col1 | — | not captured |
| θ4: Vp*WT/70 (L) | `Q64` · V2 | 5.76 | L | 0.0057599999999999995 | [l] | 5.27 | llm_confirmed (0.6) | Das_2024_table_S3:row3:col1 | — | 21.9 (20.5% RSE) |
| θ5: (CL + θ5*(CrCL–80)) | `Q900` · equation variable | 0.0158 | not captured | not captured | not captured | 21.3 | llm_corrected (0.6) | Das_2024_table_S3:row5:col1 | — | not captured |
| θ6: (Bmax) a | `Q332` · Bmax | 3.24 | not captured | not captured | not captured | 19.7 | llm_confirmed (0.6) | Das_2024_table_S3:row6:col1 | — | not captured |
| θ1: CL (L/h) | `Q22` · CL | 10.4 | L/h | 2.8888888888888894e-06 | [l] / [h] | 3.3 | llm_confirmed (0.6) | Das_2024_table_S4:row0:col1, Das_2024_table_S5:row0:col1 | — | 14.1 (12.5% RSE) |
| θ4: Q (L/h) | `Q30` · Q | 4.96 | L/h | 1.3777777777777778e-06 | [l] / [h] | 5.8 | llm (0.6) | Das_2024_table_S4:row3:col1 | — | not captured |
| θ6: Ka | `Q49` · kabs | 0.459 | 1/h | 0.0001275 | 1/h | 12.2 | llm_confirmed (0.6) | Das_2024_table_S4:row5:col1 | — | not captured |
| θ18: θ18** phase II cIAI patient effect on Vc | `Q61` · V | 2.66 | not captured | not captured | not captured | 11.2 | llm_corrected (0.6) | Das_2024_table_S4:row17:col1 | — | not captured |
| ηCL2 | `Q99` · Q2 | 0.313 | not captured | not captured | not captured | 2.3 | llm (0.6) | Das_2024_table_S5:row15:col1 | — | not captured |
| ηVp2 | `Q77` · V3 | 1.683 | not captured | not captured | not captured | 6.9 | llm_confirmed (0.6) | Das_2024_table_S5:row18:col1 | — | 12.72 (None% RSE) |
| theta_q356_category | `Q900` · theta_q356_category | 17.1 | not captured | not captured | not captured | 9.8 | not captured (not captured) | Das_2024_table_S4:row1:col1 | — | not captured |
| theta_clnorm_wt_power | `Q900` · theta_clnorm_wt_power | 0.206 | not captured | not captured | not captured | 57.3 | not captured (not captured) | Das_2024_table_S4:row9:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.516 | not captured | not captured | not captured | 35.3 | not captured (not captured) | Das_2024_table_S4:row10:col1 | — | not captured |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 1.33 | not captured | not captured | not captured | 31.7 | not captured (not captured) | Das_2024_table_S4:row11:col1 | — | not captured |
| theta_equation_variable_wt_power | `Q900` · theta_equation_variable_wt_power | 1.23 | not captured | not captured | not captured | 15.3 | not captured (not captured) | Das_2024_table_S4:row12:col1 | — | not captured |
| theta_q1_age | `Q900` · theta_q1_age | -1.13 | not captured | not captured | not captured | 47.3 | not captured (not captured) | Das_2024_table_S4:row13:col1 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.957 | not captured | not captured | not captured | 3.6 | not captured (not captured) | Das_2024_table_S4:row14:col1 | — | not captured |
| theta_cl_category | `Q900` · theta_cl_category | 20.5 | L/h | not captured | not captured | 7.9 | not captured (not captured) | Das_2024_table_S5:row5:col1 | — | not captured |
| theta_cl_crcl_power | `Q900` · theta_cl_crcl_power | 1.1 | not captured | not captured | not captured | 2.1 | not captured (not captured) | Das_2024_table_S5:row6:col1 | — | not captured |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.998 | not captured | not captured | not captured | 8.2 | not captured (not captured) | Das_2024_table_S5:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'θ1: CL*WT/70** 0.75 (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ2: Vc*WT/70 (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ4: Vp*WT/70 (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ1: CL (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ3: Vc (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ4: Q (L/h)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ5: Vp (L)' routed out of structural estimates ('IIV, % (RSE%)')
- table section iiv: 'θ1: CL (L/h)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ2: Vc (L)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ3: Q (L/h)' routed out of structural estimates ('IIV, %')
- table section iiv: 'θ4: Vp (L)' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηCL2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVc2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηCL–Vc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp–ηCL covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηVp–ηVc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ 2' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηCL covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηVc covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'ηQ–ηVp covarianceb' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase Ib' routed out of structural estimates ('IIV, %')
- table section iiv: 'Additive error, phase Ib' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase IIb' routed out of structural estimates ('IIV, %')
- table section iiv: 'Proportional error, phase IIIb' routed out of structural estimates ('IIV, %')
- column 'numbers of subjects (number of samples)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'modeling objectives and simulations' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Aztreonam Iteration 1aAztreonam-avibactam Phase I dose-finding trial (interim data) [18]' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1', 'Tab2:row1:col2'])
- dropped unlinked row (NIL): 'Aztreonam Iteration 1bAztreonam-avibactam Phase I dose-finding trial (interim data) [18]Published aztreonam renal impairment studies [32, 33]' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1'])
- dropped unlinked row (NIL): 'Avibactam Iteration 1Ceftazidime-avibactam program: 5 Phase I trials, 1 Phase II trial in cIAIAztreonam-avibactam Phase I dose-finding trial (interim data) [18]' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1'])
- dropped unlinked row (NIL): 'Aztreonam Iteration 2Aztreonam-avibactam Phase I dose-finding trial (final data) [18]Published aztreonam renal impairment studies [32, 33]' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row4:col2'])
- dropped unlinked row (NIL): 'Avibactam Iteration 2Ceftazidime-avibactam program: 11 Phase I trials, 2 Phase II trials, 4 Phase III trials [21, 22]' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- unit_dimension_mismatch: 'θ3: Q*WT/70** 0.75 (L/h)' → Q88 (unit '[length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'θ7: (B50) a' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S3:row7:col1'])
- dropped duplicate Q900 ('θ8: (IF (AGE&gt;65) Vc&Vp*θ8AGE)', value '0.779') — already have one for this compound
- unit_dimension_unknown: 'CrCL–80' (equation variable)
- dropped duplicate Q900 ('θ9: (IF CrCL&lt;80) CrCL= θ5* θ9*(CrCL–80)', value '2.86') — already have one for this compound
- dropped duplicate Q63 ('θ3: Vc (L)', value '12.8') — already have one for this compound
- dropped duplicate Q63 ('θ5: Vp (L)', value '6.99') — already have one for this compound
- dropped unlinked row (NIL): 'θ7: F1' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S4:row6:col1'])
- dropped duplicate Q22 ('8: CL, (nCrCL/80)**8, nCrCL &lt;80 mL/min and not ESRD', value '1.23') — already have one for this compound
- dropped duplicate Q22 ('θ9: CL, Change in CL due to ESRD', value '0.0447') — already have one for this compound
- dropped duplicate Q22 ('θ16: Concomitant ceftazidime-avibactam on CL', value '0.963') — already have one for this compound
- dropped duplicate Q22 ('θ17: θ17** phase II cIAI patient effect on CL', value '1.45') — already have one for this compound
- dropped duplicate Q63 ('θ2: Vc (L)', value '12.0') — already have one for this compound
- dropped duplicate Q30 ('θ3: Q (L/h)', value '4.99') — already have one for this compound
- dropped unlinked row (NIL): 'θ4: Vp (L)' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S5:row3:col1'])
- unit_dimension_unknown: 'CL*θ5' (equation variable)
- dropped duplicate Q900 ('θ5: ESRD effect on CL (CL*θ5)', value '0.0671') — already have one for this compound
- dropped unlinked row (NIL): '8: CL, (1+8*(CrCL–80)), CrCL ≥80 mL/min' — extend the ontology if this is a real PK parameter (source ['Das_2024_table_S5:row7:col1'])
- dropped duplicate Q63 ('θ9: Population effect on Vc (cIAI, phase II), Vc*(1+9)', value '1.34') — already have one for this compound
- dropped duplicate Q22 ('θ10: Population effect on CL (cIAI, phase II), CL*(1+10)', value '0.305') — already have one for this compound
- dropped duplicate Q63 ('θ11: Population effect on Vc (cUTI), Vc*(1+11)', value '0.394') — already have one for this compound
- dropped duplicate Q63 ('θ12: Population effect on Vc (cIAI, phase III), Vc*(1+12)', value '0.275') — already have one for this compound
- dropped duplicate Q900 ('θ16: APACHE effect on CL, CL*(1+16)', value '-0.2') — already have one for this compound
- dropped duplicate Q64 ('ηVc2', value '1.009') — already have one for this compound
- dropped duplicate Q99 ('ηQ 2', value '5.302') — already have one for this compound
- covariate effect for Q356 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'θ6: Ka' → 1/h (from the popPK convention: 'Ka (absorption rate constant) is a first-order rate constant; the value 0.459 is consistent with a typical absorption ra')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (θ2: Vc*WT/70 (L)); Q64 (θ4: Vp*WT/70 (L)); Q22 (θ1: CL (L/h)); Q30 (θ4: Q (L/h)); Q61 (θ18: θ18** phase II cIAI patient effect on Vc); Q99 (ηCL2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aztreonam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col3 = 'Various aztreonam PK scenarios evaluated in Iteration 1a simulations, including patient factors for patients with CF and cIAI (see Supplementary Table 1)Patient factors for Phase II patients with cIAI and variability from avibactam models in the ceftazidime-avibactam program (Case 4) used for Iteration 1b simulations'
- unparsed cell Tab2:row4:col3 = 'Scaling of aztreonam Vc larger in patients than healthy volunteers i.e., + 27.5% as per avibactamPatient factors and variability from avibactam models in ceftazidime-avibactam program (Phase I, Phase II cIAI, Phase III cIAI and cUTI)Simulations used ceftazidime-avibactam Phase III age, weight, and CrCL covariate distributionsNonlinear plasma protein binding for aztreonam'
- companion parameter table S3 transcribed (15 record(s))
- companion parameter table S4 transcribed (22 record(s))
- companion parameter table S5 transcribed (46 record(s))
- LLM selected parameter table(s) S2, S3, S4, S5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_center_consistency_wt | fail | not captured | [70.0, 71.2] | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row3:col1'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S3:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Das_2024_table_S4:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S3:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S3:row3:col1'] |
| C5_dimension_Q88 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Das_2024_table_S3:row2:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S4:row17:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 | not captured | not captured | not captured | ['Das_2024_table_S5:row18:col1'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Das_2024_table_S5:row15:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.4 | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Das_2024_table_S4:row0:col1', 'Das_2024_table_S5:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.83 L | not captured | not captured | ['Das_2024_table_S3:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.76 L | not captured | not captured | ['Das_2024_table_S3:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_aztreonam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Das_2024` / `Das_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:12 UTC</sub>
