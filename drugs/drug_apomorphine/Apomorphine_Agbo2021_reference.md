<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;,&quot;href&quot;:&quot;drugs/drug_apomorphine/&quot;},{&quot;label&quot;:&quot;Agbo_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apomorphine — `Apomorphine_Agbo2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The metabolite apomorphine-sulfate was rejected as an orphan compartment with no structural path from the apomorphine dose.

<div class="pk-model-meta" hidden drug="apomorphine" model-id="Apomorphine_Agbo2021_reference" status="rejected" stale="false" population="healthy subjects and patients with Parkinson&#39;s disease" measured-compound="apomorphine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Agbo F, Crass RL, Chiu YY, Chapel S, Galluppi G, Blum D et al. Population pharmacokinetic analysis of apomorphine sublingual film or subcutaneous apomorphine in healthy subjects and patients with Parkinson's disease. Clinical and translational science 14(4):1464–1475 (2021).
  ·  DOI: [10.1111/cts.13008](https://doi.org/10.1111/cts.13008)

## Population and dosing

**Population:** healthy subjects and patients with Parkinson's disease · condition Parkinson's disease · age group mixed.

**Dosing:** 2, 5, 10, 25, 50 mg, sublingual, subcutaneous, multiple, every 2 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F | CL/F | 80.7 | L/h | 25.0 |  |
| V 2/F | V1/F | 438 | L | 8.39 |  |
| V 3/F | V2/F | 1.42 | L | 34.2 | 41.7 (None% RSE) |
| k30 | kel | 1.28 | 1/h | 38.5 |  |
| fraction_not_swallowed_and_available_for_sublingual_absorption | fraction_not_swallowed_and_available_for_sublingual_absorption | 0.910 |  | 5.86 |  |
| Fraction absorbed relative to subcutaneous administration | Frel | 0.202 |  | 12.8 |  |
| k26 | kel | 0.613 | 1/h | 14.0 |  |
| k62 | kfm | 0.00480 | 1/h | 15.9 |  |
| contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | -0.194 |  | 61.5 |  |
| body_weight_on_v_2_f | body_weight_on_v_2_f | 1.53 |  | 24.8 |  |
| theta_q49_category | theta_q49_category | 6.58 |  | 16.2 |  |
| theta_q95_category | theta_q95_category | 17.6 |  | 8.40 |  |
| theta_q49_category | theta_q49_category | 0.205 |  | 87.9 |  |
| theta_q78_sex | theta_q78_sex | -0.310 |  | 21.4 |  |
| Ka | kabs | 14.9 | h−1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The metabolite apomorphine-sulfate was rejected as an orphan compartment with no structural path from the apomorphine dose.**

The record defines the metabolite with a value of 0 for its compartment count, which implies no physical compartment exists. Although a metabolic link parameter is defined, the resulting structure leaves the metabolite unreachable from the parent drug. Consequently, the metabolite is treated as an unlinked orphan, failing the structural connectivity requirement. Extracted — apomorphine: CL/F 80.7 L/h, V1/F 438 L, V2/F 1.42 L, kel 1.28 1/h, Frel 0.202, kel 0.613 1/h, kfm 0.0048 1/h, kabs 14.9 h−1.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 80.7 | L/h | 2.242e-05 | m3/s | L/h | 25.0 | exact (1) | cts13008-tbl-0003:row1:col1, cts13008-tbl-0003:row1:col2, cts13008-tbl-0003:row1:col3, cts13008-tbl-0003:row1:col4 |  |
| V 2/F | `Q290` · V1/F | 438 | L | 0.438 | m3 | L | 8.39 | exact (1) | cts13008-tbl-0003:row2:col1, cts13008-tbl-0003:row2:col2, cts13008-tbl-0003:row2:col3, cts13008-tbl-0003:row2:col4 |  |
| V 3/F | `Q82` · V2/F | 1.42 | L | 0.00142 | m3 | L | 34.2 | exact (1) | cts13008-tbl-0003:row3:col1, cts13008-tbl-0003:row3:col2, cts13008-tbl-0003:row3:col3, cts13008-tbl-0003:row3:col4 | 41.7 (None% RSE) |
| k30 | `Q47` · kel | 1.28 | 1/h | 0.0003556 | 1/s | 1/h | 38.5 | exact (1) | cts13008-tbl-0003:row6:col1, cts13008-tbl-0003:row6:col2, cts13008-tbl-0003:row6:col3, cts13008-tbl-0003:row6:col4 |  |
| fraction_not_swallowed_and_available_for_sublingual_absorption | `Q900` · fraction_not_swallowed_and_available_for_sublingual_absorption | 0.910 |  |  |  |  | 5.86 |  | cts13008-tbl-0003:row8:col1, cts13008-tbl-0003:row8:col2, cts13008-tbl-0003:row8:col3, cts13008-tbl-0003:row8:col4 |  |
| Fraction absorbed relative to subcutaneous administration | `Q87` · Frel | 0.202 |  |  |  |  | 12.8 | llm_corrected (0.6) | cts13008-tbl-0003:row9:col1, cts13008-tbl-0003:row9:col2, cts13008-tbl-0003:row9:col3, cts13008-tbl-0003:row9:col4 |  |
| k26 | `Q47` · kel | 0.613 | 1/h | 0.0001703 | 1/s | 1/h | 14.0 | exact (1) | cts13008-tbl-0003:row10:col1, cts13008-tbl-0003:row10:col2, cts13008-tbl-0003:row10:col3, cts13008-tbl-0003:row10:col4 |  |
| k62 | `Q305` · kfm | 0.00480 | 1/h | 1.333e-06 | 1/s | 1/h | 15.9 | exact (1) | cts13008-tbl-0003:row11:col1, cts13008-tbl-0003:row11:col2, cts13008-tbl-0003:row11:col3, cts13008-tbl-0003:row11:col4 |  |
| contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | `Q900` · contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration | -0.194 |  |  |  |  | 61.5 |  | cts13008-tbl-0003:row13:col1, cts13008-tbl-0003:row13:col2, cts13008-tbl-0003:row13:col3 |  |
| body_weight_on_v_2_f | `Q900` · body_weight_on_v_2_f | 1.53 |  |  |  |  | 24.8 |  | cts13008-tbl-0003:row14:col1, cts13008-tbl-0003:row14:col2, cts13008-tbl-0003:row14:col3, cts13008-tbl-0003:row14:col4 |  |
| theta_q49_category | `Q900` · theta_q49_category | 6.58 |  |  |  |  | 16.2 |  | cts13008-tbl-0003:row4:col1, cts13008-tbl-0003:row4:col2, cts13008-tbl-0003:row4:col3, cts13008-tbl-0003:row4:col4 |  |
| theta_q95_category | `Q900` · theta_q95_category | 17.6 |  |  |  |  | 8.40 |  | cts13008-tbl-0003:row5:col1, cts13008-tbl-0003:row5:col2, cts13008-tbl-0003:row5:col3, cts13008-tbl-0003:row5:col4 |  |
| theta_q49_category | `Q900` · theta_q49_category | 0.205 |  |  |  |  | 87.9 |  | cts13008-tbl-0003:row7:col1, cts13008-tbl-0003:row7:col2, cts13008-tbl-0003:row7:col3 |  |
| theta_q78_sex | `Q900` · theta_q78_sex | -0.310 |  |  |  |  | 21.4 |  | cts13008-tbl-0003:row16:col1, cts13008-tbl-0003:row16:col2, cts13008-tbl-0003:row16:col3 |  |
| Ka | `Q49` · kabs | 14.9 | h−1 | 0.004139 | 1/s | 1/h |  | review_gapfill (0.7) | Nasser_2024:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Apomorphine' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Apomorphine sulfate' routed out of structural estimates ('Residual variability')
- table section iiv: 'k23' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V 2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V 3/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'k a for sublingual administration' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'F 1' routed out of structural estimates ('Interindividual variability')
- column 'ase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Fraction not swallowed and available for sublingual absorption' → Q900:fraction_not_swallowed_and_available_for_sublingual_absorption = 0.910 (additive_shift on Q27)
- dropped unlinked row (NIL): 'Dose of sublingual apomorphine on F 1' — extend the ontology if this is a real PK parameter (source ['cts13008-tbl-0003:row12:col1', 'cts13008-tbl-0003:row12:col2', 'cts13008-tbl-0003:row12:col3'])
- covariate level 'Contact time under the tongue for sublingual film on k a for sublingual administration' → Q900:contact_time_under_the_tongue_for_sublingual_film_on_k_a_for_sublingual_administration = -0.194 (additive_shift on Q27)
- covariate level 'Body weight on V 2/F' → Q900:body_weight_on_v_2_f = 1.53 (linear_fractional on Q27)
- dropped duplicate Q82 ('Study CTH−103 on V 2/F', value '-0.555') — already have one for this compound
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q95 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q78 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F' → L/h (from the paper text: "The text states: 'Mean (95% CI) typical apomorphine apparent systemic clearance and apparent central volume of distribut")
- implicit units: 'V 2/F' → L (from the paper text: "The text states: 'Mean (95% CI) typical apomorphine apparent systemic clearance and apparent central volume of distribut")
- implicit units: 'V 3/F' → L (from the popPK convention: 'V3/F represents the apparent volume of distribution of the peripheral compartment. In population PK, volumes of distribu')
- implicit units: 'k30' → 1/h (from the popPK convention: 'k30 is an elimination rate constant (kel). First-order rate constants are conventionally expressed in reciprocal time (1')
- implicit units: 'k26' → 1/h (from the popPK convention: 'k26 is an elimination rate constant (kel) for the metabolite or second compartment. First-order rate constants are conve')
- implicit units: 'k62' → 1/h (from the popPK convention: 'k62 is a first-order rate constant governing the formation of a metabolite (kfm). First-order rate constants are convent')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apomorphine
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 43 linked by role; re-tagged parent→apomorphine-sulfate ×15
- molar mass: no plausible PubChem entry for 'apomorphine-sulfate' ('apomorphine-sulfate') — left in mass units
- molar mass: none found for 'apomorphine-sulfate' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Nasser_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13008-tbl-0003:row4:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row5:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row6:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row7:col4 = '(−0.15 to 0.55)'
- unparsed cell cts13008-tbl-0003:row7:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row10:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row11:col5 = 'h–1'
- unparsed cell cts13008-tbl-0003:row12:col4 = '(−0.870 to 0.459)'
- unparsed cell cts13008-tbl-0003:row13:col4 = '(–0.428 to –0.0400)'
- unparsed cell cts13008-tbl-0003:row15:col4 = '(–0.648 to −0.462)'
- unparsed cell cts13008-tbl-0003:row16:col4 = '(–0.440 to –0.180)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts13008-tbl-0003:row1:col1', 'cts13008-tbl-0003:row1:col2', 'cts13008-tbl-0003:row1:col3', 'cts13008-tbl-0003:row1:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts13008-tbl-0003:row2:col1', 'cts13008-tbl-0003:row2:col2', 'cts13008-tbl-0003:row2:col3', 'cts13008-tbl-0003:row2:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['cts13008-tbl-0003:row11:col1', 'cts13008-tbl-0003:row11:col2', 'cts13008-tbl-0003:row11:col3', 'cts13008-tbl-0003:row11:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts13008-tbl-0003:row6:col1', 'cts13008-tbl-0003:row6:col2', 'cts13008-tbl-0003:row6:col3', 'cts13008-tbl-0003:row6:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts13008-tbl-0003:row10:col1', 'cts13008-tbl-0003:row10:col2', 'cts13008-tbl-0003:row10:col3', 'cts13008-tbl-0003:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Nasser_2024:review'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts13008-tbl-0003:row3:col1', 'cts13008-tbl-0003:row3:col2', 'cts13008-tbl-0003:row3:col3', 'cts13008-tbl-0003:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 80.7 L/h | ['cts13008-tbl-0003:row1:col1', 'cts13008-tbl-0003:row1:col2', 'cts13008-tbl-0003:row1:col3', 'cts13008-tbl-0003:row1:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 438 L | ['cts13008-tbl-0003:row2:col1', 'cts13008-tbl-0003:row2:col2', 'cts13008-tbl-0003:row2:col3', 'cts13008-tbl-0003:row2:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.42 L | ['cts13008-tbl-0003:row3:col1', 'cts13008-tbl-0003:row3:col2', 'cts13008-tbl-0003:row3:col3', 'cts13008-tbl-0003:row3:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapomorphine%5D%20Apomorphine_Agbo2021_reference&body=Drug%3A%20apomorphine%0ARecord%3A%20Apomorphine_Agbo2021_reference%0APaper%3A%20Agbo_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apomorphine/Apomorphine_Agbo2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:09 UTC</sub>
