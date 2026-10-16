<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Hadigol_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Talazoparib_Hadigol2026_reference&quot;,&quot;label&quot;:&quot;Hadigol_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Hadigol2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (fe, fm and equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has talazoparib, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `talazoparib and enzalutamide`, measured `talazoparib`.

## Citation
Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

<div class="pk-model-meta" hidden drug="talazoparib" model-id="Talazoparib_Hadigol2026_reference" status="accepted_with_caveats" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="talazoparib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent–metabolite model: parent with 1 compartment(s); metabolite N-desmethyl enzalutamide: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 15 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ CLe/Fe (L/h) | `Q27` · CL/F | 0.425 | L/h | 1.1805555555555555e-07 | [l] / [h] | 0.74 | llm (0.6) | jcph70125-tbl-0001:row1:col1 | — | not captured |
| θ Vce/Fe (L) | `Q76` · V/F | 25.293 | L | 0.025293 | [l] | 11.31 | llm (0.6) | jcph70125-tbl-0001:row2:col1 | — | not captured |
| θ Qe/Fe (L/h) | `Q69` · Q/F | 20.644 | L/h | 5.7344444444444445e-06 | [l] / [h] | 7.29 | llm (0.6) | jcph70125-tbl-0001:row3:col1 | — | not captured |
| θ kae (1/h) | `Q49` · kabs | 3.431 | 1/h | 0.0009530555555555556 | [1] / [h] | 13.85 | exact (1.0) | jcph70125-tbl-0001:row5:col1 | — | not captured |
| θ Fe (Fixed) | `Q44` · fe | 1.000 | R | not captured | [r] | not captured | llm_confirmed (0.6) | jcph70125-tbl-0001:row6:col1 | — | not captured |
| θ CLn (L/h) | `Q22` · CL | 0.286 | L/h | 7.944444444444444e-08 | [l] / [h] | 0.89 | exact (1.0) | Hadigol_2026_table_2:row0:col1 | — | not captured |
| θ Vcn (L) | `Q63` · V1 | 44.944 | L | 0.044944000000000005 | [l] | 9.32 | exact (1.0) | Hadigol_2026_table_2:row1:col1 | — | not captured |
| θ Qn (L/h) | `Q30` · Q | 9.443 | L/h | 2.6230555555555555e-06 | [l] / [h] | 14.28 | exact (1.0) | Hadigol_2026_table_2:row2:col1 | — | not captured |
| θ Vpn (L) | `Q64` · V2 | 52.373 | L | 0.052372999999999996 | [l] | 7.23 | exact (1.0) | Hadigol_2026_table_2:row3:col1 | — | not captured |
| θ Fmet (Fixed) | `Q45` · fm | 0.634 | R | not captured | [r] | not captured | exact (1.0) | Hadigol_2026_table_2:row4:col1 | — | not captured |
| (L/h) | `Q22` · CL | 5.078 | L/h | 1.4105555555555555e-06 | [l] / [h] | 3.887 | exact (1.0) | Hadigol_2026_table_3:row0:col1 | — | not captured |
| θ Vct/Ft (L) | `Q61` · V | 14.389 | L | 0.014388999999999999 | [l] | 0.462 | llm (0.6) | Hadigol_2026_table_3:row1:col1 | — | not captured |
| θ Vpt/Ft (L) | `Q76` · V/F | 382.135 | L | 0.382135 | [l] | 4.735 | llm (0.6) | Hadigol_2026_table_3:row2:col1 | — | not captured |
| θ Qt/Ft (L/h) | `Q69` · Q/F | 15.568 | L/h | 4.3244444444444445e-06 | [l] / [h] | 0.053 | llm (0.6) | Hadigol_2026_table_3:row3:col1 | — | not captured |
| θ Ft (Fixed) | `Q900` · equation variable | 1.000 | Fixed | not captured | [fixed] | not captured | llm (0.6) | Hadigol_2026_table_3:row4:col1 | — | not captured |
| θ kat (1/h) | `Q49` · kabs | 0.157 | 1/h | 4.361111111111111e-05 | [1] / [h] | 0.071 | exact (1.0) | Hadigol_2026_table_3:row5:col1 | — | not captured |
| theta_cl_f_age | `Q900` · theta_cl_f_age | -0.003 | not captured | not captured | not captured | 27.53 | not captured (not captured) | jcph70125-tbl-0001:row8:col1 | — | not captured |
| theta_q82_age | `Q900` · theta_q82_age | 1.223 | not captured | not captured | not captured | 22.17 | not captured (not captured) | jcph70125-tbl-0001:row10:col1 | — | not captured |
| theta_q354_body_weight | `Q900` · theta_q354_body_weight | 0.006 | not captured | not captured | not captured | 9.42 | not captured (not captured) | Hadigol_2026_table_2:row5:col1 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.027 | not captured | not captured | not captured | 2.52 | not captured (not captured) | Hadigol_2026_table_2:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Fe, enzalutamide bioavailability | Q87 | not captured | llm_corrected |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q76 ('θ Vpe/Fe (L)', value '45.928') — already have one for this compound
- unit_dimension_unknown: 'R' (fe)
- routed 'Thetarized sigma' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Body weight effect on θ CLe/Fe' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0001:row9:col1'])
- dropped unlinked row (NIL): 'Body weight effect on θ Vce/Fe' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0001:row11:col1'])
- unit_dimension_unknown: 'R' (fm)
- routed 'Thetarized σ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- linked '(L/h)' as 'CL' → Q22 (CL) for talazoparib — compound marker removed
- unit_dimension_unknown: 'Fixed' (equation variable)
- dropped unlinked row (NIL): 'BCCL effect on' — extend the ontology if this is a real PK parameter (source ['Hadigol_2026_table_3:row8:col1'])
- dropped value-less row: 'CLe/Fe, enzalutamide apparent clearance'
- dropped value-less row: 'CLn, N‐desmethyl enzalutamide clearance'
- dropped value-less row: 'Fmet, fraction of enzalutamide converted to N‐desmethyl metabolite'
- dropped value-less row: 'kae, enzalutamide first‐order absorption rate constant'
- dropped value-less row: 'Qe/Fe, enzalutamide apparent inter‐compartmental clearance'
- dropped value-less row: 'Qn, N‐desmethyl enzalutamide inter‐compartmental clearance'
- dropped value-less row: 'Vce/Fe, enzalutamide apparent central volume of distribution'
- dropped value-less row: 'Vcn, N‐desmethyl enzalutamide central volume of distribution'
- dropped value-less row: 'Vpe/Fe, enzalutamide apparent peripheral volume of distribution'
- dropped value-less row: 'Vpn, N‐desmethyl enzalutamide peripheral volume of distribution'
- covariate effect for Q82 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 45/45 row label(s) assigned, 15 linked by role; re-tagged parent→enzalutamide ×13, parent→N-desmethyl enzalutamide ×11, parent→talazoparib ×9
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Hadigol_2026_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (47 record(s), model stage 'final')
- table Hadigol_2026_table_3: unbound_uncertainty
- table Hadigol_2026_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (43 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.48 (24/50 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1‐normal]` | not captured | 5.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2‐mild]` | not captured | 4.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[]` | 5.078 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[]` | not captured | 5.078 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight]` | 0.549 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q1_body_weight]` | 0.027 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_body_weight]` | not captured | 0.549 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | 3.495 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_body_weight]` | not captured | 3.495 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_body_weight]` | not captured | 0.027 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_age]` | not captured | 1.223 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cle/fe].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θ ft]` | not captured | 1.000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ kat]` | 0.157 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ kat]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ qt/ft]` | 15.568 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ qt/ft]` | not captured | 15.568 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vce/fe].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θ vcn].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[θ vct/ft]` | 14.389 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vct/ft]` | not captured | 14.389 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vpe/fe]` | not captured | 45.928 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vpt/ft]` | 382.135 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vpt/ft]` | not captured | 382.135 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | talazoparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | talazoparib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row0:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row0:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_3:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0001:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_3:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0001:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_3:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | not captured | not captured | ['Hadigol_2026_table_2:row0:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | not captured | not captured | ['Hadigol_2026_table_3:row0:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.425 L/h | not captured | not captured | ['jcph70125-tbl-0001:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['Hadigol_2026_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44.9 L | not captured | not captured | ['Hadigol_2026_table_2:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 52.4 L | not captured | not captured | ['Hadigol_2026_table_2:row3:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 25.3 L | not captured | not captured | ['jcph70125-tbl-0001:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 382 L | not captured | not captured | ['Hadigol_2026_table_3:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[N-desmethyl enzalutamide] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.044944000000000005, 'CL': 7.944444444444444e-08, 'formation': 7.484722222222222e-08} | not captured | N-desmethyl enzalutamide = compartment M1 with its own numbers |
| T3_metabolite_output[N-desmethyl enzalutamide] | not captured | pass | not captured | 1.0561344804722262e-06 | not captured | C_M1 (N-desmethyl enzalutamide) must rise above 0 when the parent is dosed |
| T3_molar_mass[N-desmethyl enzalutamide] | not captured | pass | not captured | {'MW': 0.380359, 'MW_m1': 0.45041000000000003} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=talazoparib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 13 scholar param(s) emitted or defaulted | 13 covered | not captured | all structural parameters accounted for |
| T3_shared_parameters | not captured | skipped | not captured | not captured | not captured | parent–metabolite template: every compound has its own slot |
| T3_topology_template | not captured | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_talazoparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hadigol_2026` / `Hadigol_2026::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_talazoparib/models/modelica/Talazoparib_Hadigol2026_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_talazoparib/models/modelica/Talazoparib_Hadigol2026_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_talazoparib/models/modelica/Talazoparib_Hadigol2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_modelica.zip" download>Talazoparib_Hadigol2026_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_fmi.zip" download>Talazoparib_Hadigol2026_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_matlab.zip" download>Talazoparib_Hadigol2026_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_sbml.zip" download>Talazoparib_Hadigol2026_reference_sbml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_cellml.zip" download>Talazoparib_Hadigol2026_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference.svg" alt="Talazoparib_Hadigol2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.35 mg, single dose, first-order absorption (ka 3.43 /h, F 1). Doses in the paper: 0.35, 0.5, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_talazoparib/Talazoparib_Hadigol2026_reference/Talazoparib_Hadigol2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Talazoparib_Hadigol2026_reference_params.json` · controls `Talazoparib_Hadigol2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:00 UTC</sub>
