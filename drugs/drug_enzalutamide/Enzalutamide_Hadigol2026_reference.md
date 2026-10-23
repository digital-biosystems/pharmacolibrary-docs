<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;enzalutamide&quot;,&quot;href&quot;:&quot;drugs/drug_enzalutamide/&quot;},{&quot;label&quot;:&quot;Hadigol_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enzalutamide_Hadigol2026_reference&quot;,&quot;label&quot;:&quot;Hadigol_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enzalutamide — `Enzalutamide_Hadigol2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="enzalutamide" model-id="Enzalutamide_Hadigol2026_reference" status="accepted_with_caveats" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="enzalutamide" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Hadigol M, Williams JH, Shi H, Yang DZ, Hoffman J, Wang DD. Population Pharmacokinetics Analysis of Talazoparib and Enzalutamide Combination Therapy for Patients With Metastatic Castration-Resistant Prostate Cancer. Journal of clinical pharmacology 66(2):e70125 (2026).
  ·  DOI: [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

## Population and dosing

**Population:** patients with metastatic castration-resistant prostate cancer · condition metastatic castration-resistant prostate cancer · age group adult · n = 811.

**Dosing:** 0.5 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite N-desmethyl enzalutamide: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 14 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference.svg" alt="Enzalutamide_Hadigol2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ CLe/Fe (L/h) | CL/F | 0.425 | L/h | 0.74 |
| θ Vce/Fe (L) | V/F | 25.293 | L | 11.31 |
| θ Qe/Fe (L/h) | Q/F | 20.644 | L/h | 7.29 |
| θ kae (1/h) | kabs | 3.431 | 1/h | 13.85 |
| θ Fe (Fixed) | fe | 1.000 | Fixed |  |
| body_weight_effect_on_cle_fe | body_weight_effect_on_cle_fe | 0.549 | Fixed | 6.42 |
| body_weight_effect_on_vce_fe | body_weight_effect_on_vce_fe | 3.495 | Fixed | 7.99 |
| θ CLn (L/h) | CL | 0.286 | L/h | 0.89 |
| θ Vcn (L) | V1 | 44.944 | L | 9.32 |
| θ Qn (L/h) | Q | 9.443 | L/h | 14.28 |
| θ Vpn (L) | V2 | 52.373 | L | 7.23 |
| θ Fmet (Fixed) | fm | 0.634 | Fixed |  |
| effect_of_body_weight_on_vcn | effect_of_body_weight_on_vcn | 0.027 | Fixed | 2.52 |
| (L/h) | CL | 5.078 | L/h | 3.887 |
| θ Vct/Ft (L) | V1/F | 14.389 | L | 0.462 |
| θ Qt/Ft (L/h) | Q | 15.568 | L/h | 0.053 |
| θ Ft (Fixed) | equation variable | 1.000 | Fixed |  |
| θ kat (1/h) | kabs | 0.157 | 1/h | 0.071 |
| theta_cl_f_age | theta_cl_f_age | -0.003 |  | 27.53 |
| theta_v_f_age | theta_v_f_age | 1.223 |  | 22.17 |
| theta_q319_body_weight | theta_q319_body_weight | 0.006 |  | 9.42 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.408). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (fe, body_weight_effect_on_cle_fe, body_weight_effect_on_vce_fe and fm), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has enzalutamide, the second reading unknown; it also differs on 28 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ CLe/Fe (L/h) | `Q27` · CL/F | 0.425 | L/h | 1.181e-07 | m3/s | l/h | 0.74 | llm (0.6) | jcph70125-tbl-0001:row1:col1, jcph70125-tbl-0001:row1:col2, jcph70125-tbl-0001:row1:col3 |
| θ Vce/Fe (L) | `Q76` · V/F | 25.293 | L | 0.02529 | m3 | l | 11.31 | llm (0.6) | jcph70125-tbl-0001:row2:col1, jcph70125-tbl-0001:row2:col2, jcph70125-tbl-0001:row2:col3 |
| θ Qe/Fe (L/h) | `Q69` · Q/F | 20.644 | L/h | 5.734e-06 | m3/s | l/h | 7.29 | llm (0.6) | jcph70125-tbl-0001:row3:col1, jcph70125-tbl-0001:row3:col2, jcph70125-tbl-0001:row3:col3 |
| θ kae (1/h) | `Q49` · kabs | 3.431 | 1/h | 0.0009531 | 1/s | 1/h | 13.85 | exact (1) | jcph70125-tbl-0001:row5:col1, jcph70125-tbl-0001:row5:col2, jcph70125-tbl-0001:row5:col3 |
| θ Fe (Fixed) | `Q44` · fe | 1.000 | Fixed |  |  | fixed |  | llm_confirmed (0.6) | jcph70125-tbl-0001:row6:col1 |
| body_weight_effect_on_cle_fe | `Q900` · body_weight_effect_on_cle_fe | 0.549 | Fixed |  |  | fixed | 6.42 |  | jcph70125-tbl-0001:row9:col1, jcph70125-tbl-0001:row9:col2, jcph70125-tbl-0001:row9:col3 |
| body_weight_effect_on_vce_fe | `Q900` · body_weight_effect_on_vce_fe | 3.495 | Fixed |  |  | fixed | 7.99 |  | jcph70125-tbl-0001:row11:col1, jcph70125-tbl-0001:row11:col2, jcph70125-tbl-0001:row11:col3 |
| θ CLn (L/h) | `Q22` · CL | 0.286 | L/h | 7.944e-08 | m3/s | l/h | 0.89 | exact (1) | Hadigol_2026_table_2:row0:col1, Hadigol_2026_table_2:row0:col2, Hadigol_2026_table_2:row0:col3 |
| θ Vcn (L) | `Q63` · V1 | 44.944 | L | 0.04494 | m3 | l | 9.32 | exact (1) | Hadigol_2026_table_2:row1:col1, Hadigol_2026_table_2:row1:col2, Hadigol_2026_table_2:row1:col3 |
| θ Qn (L/h) | `Q30` · Q | 9.443 | L/h | 2.623e-06 | m3/s | l/h | 14.28 | exact (1) | Hadigol_2026_table_2:row2:col1, Hadigol_2026_table_2:row2:col2, Hadigol_2026_table_2:row2:col3 |
| θ Vpn (L) | `Q64` · V2 | 52.373 | L | 0.05237 | m3 | l | 7.23 | exact (1) | Hadigol_2026_table_2:row3:col1, Hadigol_2026_table_2:row3:col2, Hadigol_2026_table_2:row3:col3 |
| θ Fmet (Fixed) | `Q45` · fm | 0.634 | Fixed |  |  | fixed |  | exact (1) | Hadigol_2026_table_2:row4:col1 |
| effect_of_body_weight_on_vcn | `Q900` · effect_of_body_weight_on_vcn | 0.027 | Fixed |  |  | fixed | 2.52 |  | Hadigol_2026_table_2:row6:col1, Hadigol_2026_table_2:row6:col2, Hadigol_2026_table_2:row6:col3 |
| (L/h) | `Q22` · CL | 5.078 | L/h | 1.411e-06 | m3/s | l/h | 3.887 | exact (1) | Hadigol_2026_table_3:row0:col1, Hadigol_2026_table_3:row0:col2, Hadigol_2026_table_3:row0:col3 |
| θ Vct/Ft (L) | `Q290` · V1/F | 14.389 | L | 0.01439 | m3 | l | 0.462 | llm (0.6) | Hadigol_2026_table_3:row1:col1, Hadigol_2026_table_3:row1:col2, Hadigol_2026_table_3:row1:col3 |
| θ Qt/Ft (L/h) | `Q30` · Q | 15.568 | L/h | 4.324e-06 | m3/s | l/h | 0.053 | llm (0.6) | Hadigol_2026_table_3:row3:col1, Hadigol_2026_table_3:row3:col2, Hadigol_2026_table_3:row3:col3 |
| θ Ft (Fixed) | `Q900` · equation variable | 1.000 | Fixed |  |  | fixed |  | llm (0.6) | Hadigol_2026_table_3:row4:col1 |
| θ kat (1/h) | `Q49` · kabs | 0.157 | 1/h | 4.361e-05 | 1/s | 1/h | 0.071 | exact (1) | Hadigol_2026_table_3:row5:col1, Hadigol_2026_table_3:row5:col3 |
| theta_cl_f_age | `Q900` · theta_cl_f_age | -0.003 |  |  |  |  | 27.53 |  | jcph70125-tbl-0001:row8:col1, jcph70125-tbl-0001:row8:col2, jcph70125-tbl-0001:row8:col3 |
| theta_v_f_age | `Q900` · theta_v_f_age | 1.223 |  |  |  |  | 22.17 |  | jcph70125-tbl-0001:row10:col1, jcph70125-tbl-0001:row10:col2, jcph70125-tbl-0001:row10:col3 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.006 |  |  |  |  | 9.42 |  | Hadigol_2026_table_2:row5:col1, Hadigol_2026_table_2:row5:col2, Hadigol_2026_table_2:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q76 ('θ Vpe/Fe (L)', value '45.928') — already have one for this compound
- unit_dimension_unknown: 'Fixed' (fe)
- routed 'Thetarized sigma' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- covariate level 'Body weight effect on θ CLe/Fe' → Q900:body_weight_effect_on_cle_fe = 0.549 (linear_fractional on Q27)
- covariate level 'Body weight effect on θ Vce/Fe' → Q900:body_weight_effect_on_vce_fe = 3.495 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0001:row15:col1', 'Hadigol_2026_table_2:row11:col1', 'Hadigol_2026_table_3:row11:col1'])
- unit_dimension_unknown: 'Fixed' (fm)
- covariate level 'Effect of body weight on θ Vcn' → Q900:effect_of_body_weight_on_vcn = 0.027 (linear_fractional on Q27)
- routed 'Thetarized σ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- linked '(L/h)' as 'CL' → Q22 (CL) for talazoparib — compound marker removed
- dropped duplicate Q290 ('θ Vpt/Ft (L)', value '382.135') — already have one for this compound
- unit_dimension_unknown: 'Fixed' (equation variable)
- dropped value-less row: 'θ slope (mL/ng)' (captured trailing unit 'mL/ng' for child rows)
- dropped unlinked row (NIL): 'BCCL effect on' — extend the ontology if this is a real PK parameter (source ['Hadigol_2026_table_3:row8:col1', 'Hadigol_2026_table_3:row8:col2', 'Hadigol_2026_table_3:row8:col3'])
- unit inherited for body_weight_effect_on_cle_fe (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for body_weight_effect_on_vce_fe (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for effect_of_body_weight_on_vcn (Q900): 'Fixed' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'θ kae (1/h)' → 1/h (from the paper text: "The paper text states for enzalutamide: 'The first‐order absorption rate constant ... were estimated to be 0.872 1/h'.")
- implicit units: 'θ kat (1/h)' → 1/h (from the paper text: "The paper text states for talazoparib: 'The first‐order absorption rate constant ... were estimated to be 1.22 1/h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enzalutamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 42 linked by role; re-tagged parent→N-desmethyl enzalutamide ×29, parent→talazoparib ×24
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70125-tbl-0001:row1:col6 = '0.425 [0.419, 0.431]'
- unparsed cell jcph70125-tbl-0001:row2:col6 = '25.155 [21.773, 28.655]'
- unparsed cell jcph70125-tbl-0001:row3:col6 = '20.655 [18.274, 23.322]'
- unparsed cell jcph70125-tbl-0001:row4:col6 = '46.001 [43.1, 48.806]'
- unparsed cell jcph70125-tbl-0001:row5:col6 = '3.423 [2.79, 4.552]'
- unparsed cell jcph70125-tbl-0001:row7:col6 = '0.146 [0.143, 0.149]'
- unparsed cell jcph70125-tbl-0001:row8:col6 = '−0.003 [−0.005, −0.002]'
- unparsed cell jcph70125-tbl-0001:row9:col6 = '0.55 [0.485, 0.619]'
- unparsed cell jcph70125-tbl-0001:row10:col6 = '1.238 [0.647, 1.842]'
- unparsed cell jcph70125-tbl-0001:row11:col6 = '3.505 [3.105, 3.904]'
- unparsed cell jcph70125-tbl-0001:row12:col6 = '0.037 [0.034, 0.041]'
- unparsed cell jcph70125-tbl-0001:row13:col6 = '−0.015 [−0.029, −0.002]'
- unparsed cell jcph70125-tbl-0001:row14:col6 = '0.354 [0.283, 0.453]'
- unparsed cell Hadigol_2026_table_2:row0:col6 = '0.286 [0.281, 0.291]'
- unparsed cell Hadigol_2026_table_2:row1:col6 = '45.032 [41.657, 48.433]'
- unparsed cell Hadigol_2026_table_2:row2:col6 = '9.433 [8.157, 10.909'
- unparsed cell Hadigol_2026_table_2:row3:col6 = '52.341 [49.486, 54.751]'
- unparsed cell Hadigol_2026_table_2:row5:col6 = '0.006 [0.005, 0.007]'
- unparsed cell Hadigol_2026_table_2:row6:col6 = '0.027 [0.026, 0.028]'
- unparsed cell Hadigol_2026_table_2:row7:col6 = '0.126 [0.123, 0.128]'
- unparsed cell Hadigol_2026_table_2:row8:col6 = '0.057 [0.051, 0.063]'
- unparsed cell Hadigol_2026_table_2:row9:col6 = '0.006 [−0.005, 0.017]'
- unparsed cell Hadigol_2026_table_2:row10:col6 = '0.341 [0.292, 0.395]'
- companion parameter table 2 transcribed (38 record(s), model stage 'final')
- unparsed cell Hadigol_2026_table_3:row0:col6 = '5.072 [4.821, 5.344]'
- unparsed cell Hadigol_2026_table_3:row1:col6 = '14.382 [14.067, 14.735]'
- unparsed cell Hadigol_2026_table_3:row2:col6 = '382.208 [364.472, 399.944]'
- unparsed cell Hadigol_2026_table_3:row3:col6 = '15.568 [15.536, 15.598]'
- unparsed cell Hadigol_2026_table_3:row5:col2 = '1.11 × 10−4'
- unparsed cell Hadigol_2026_table_3:row5:col6 = '0.157 [0.156, 0.157]'
- unparsed cell Hadigol_2026_table_3:row6:col1 = '6.58 × 10−6'
- unparsed cell Hadigol_2026_table_3:row6:col2 = '1.22 × 10−6'
- unparsed cell Hadigol_2026_table_3:row6:col6 = '6.56 × 10−6 [4.98 × 10−6, 8.21 × 10−6]'
- unparsed cell Hadigol_2026_table_3:row7:col6 = '0.354 [0.344, 0.365]'
- unparsed cell Hadigol_2026_table_3:row8:col6 = '0.452 [0.38, 0.523]'
- unparsed cell Hadigol_2026_table_3:row9:col6 = '0.074 [0.062, 0.087]'
- unparsed cell Hadigol_2026_table_3:row10:col6 = '2.55 [2.023, 3.325]'
- companion parameter table 3 transcribed (34 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.408 (20/49 fields) | 29 |

<details><summary>29 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1‐normal]` |  | 5.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2‐mild]` |  | 4.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bccl effect on]` |  | 0.455 | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_effect_on_cle_fe]` | 0.549 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_effect_on_vce_fe]` | 3.495 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_body_weight_on_vcn]` | 0.027 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` | -0.003 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` |  | -0.003 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight]` |  | 0.549 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` | 0.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q354_body_weight]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_age]` |  | 1.223 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_body_weight]` |  | 0.027 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_age]` | 1.223 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_body_weight]` |  | 3.495 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cle/fe]` | 0.425 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cle/fe]` |  | 0.425 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ fe]` | 1.000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ fe]` |  | 1.000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ ft].parameter_id` | Q900 | Q44 | mismatch |
| `gpt-oss-120b` | `parameters[θ kae]` | 3.431 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ kae]` |  | 3.431 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ qe/fe]` | 20.644 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ qe/fe]` |  | 20.644 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vce/fe]` | 25.293 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vce/fe]` |  | 25.293 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ vpt/ft]` |  | 382.135 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | enzalutamide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | enzalutamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 14 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hadigol_2026_table_3:row0:col1', 'Hadigol_2026_table_3:row0:col2', 'Hadigol_2026_table_3:row0:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70125-tbl-0001:row1:col1', 'jcph70125-tbl-0001:row1:col2', 'jcph70125-tbl-0001:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Hadigol_2026_table_3:row1:col1', 'Hadigol_2026_table_3:row1:col2', 'Hadigol_2026_table_3:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Hadigol_2026_table_2:row2:col1', 'Hadigol_2026_table_2:row2:col2', 'Hadigol_2026_table_2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Hadigol_2026_table_3:row3:col1', 'Hadigol_2026_table_3:row3:col2', 'Hadigol_2026_table_3:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph70125-tbl-0001:row5:col1', 'jcph70125-tbl-0001:row5:col2', 'jcph70125-tbl-0001:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hadigol_2026_table_3:row5:col1', 'Hadigol_2026_table_3:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph70125-tbl-0001:row3:col1', 'jcph70125-tbl-0001:row3:col2', 'jcph70125-tbl-0001:row3:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph70125-tbl-0001:row2:col1', 'jcph70125-tbl-0001:row2:col2', 'jcph70125-tbl-0001:row2:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | ['Hadigol_2026_table_3:row0:col1', 'Hadigol_2026_table_3:row0:col2', 'Hadigol_2026_table_3:row0:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.425 L/h | ['jcph70125-tbl-0001:row1:col1', 'jcph70125-tbl-0001:row1:col2', 'jcph70125-tbl-0001:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.4 L | ['Hadigol_2026_table_3:row1:col1', 'Hadigol_2026_table_3:row1:col2', 'Hadigol_2026_table_3:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44.9 L | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 52.4 L | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 25.3 L | ['jcph70125-tbl-0001:row2:col1', 'jcph70125-tbl-0001:row2:col2', 'jcph70125-tbl-0001:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_metabolite_built[N-desmethyl enzalutamide] |  | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.044944000000000005, 'CL': 7.944444444444444e-08, 'formation': 7.484722222222222e-08} | N-desmethyl enzalutamide = compartment M1 with its own numbers |
| T3_metabolite_output[N-desmethyl enzalutamide] |  | pass |  | 2.17e-06 | C_M1 (N-desmethyl enzalutamide) must rise above 0 when the parent is dosed |
| T3_molar_mass[N-desmethyl enzalutamide] |  | pass |  | {'MW': 0.46443599999999996, 'MW_m1': 0.45041000000000003} | formation is molecule-for-molecule |
| T3_output_variable |  | pass | C_central (measured=enzalutamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 12 scholar param(s) emitted or defaulted | 12 covered | all structural parameters accounted for |
| T3_shared_parameters |  | skipped |  |  | parent–metabolite template: every compound has its own slot |
| T3_topology_template |  | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_modelica.zip" download>Enzalutamide_Hadigol2026_reference_modelica.zip</a> <span class="pk-size">(5.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_fmi.zip" download>Enzalutamide_Hadigol2026_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_matlab.zip" download>Enzalutamide_Hadigol2026_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_sbml.zip" download>Enzalutamide_Hadigol2026_reference_sbml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_cellml.zip" download>Enzalutamide_Hadigol2026_reference_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-07 | kg |
| input | model | `CL1` | 4.321e-08 | m3/s |
| input | model | `CLm1` | 7.944e-08 | m3/s |
| input | model | `MW` | 0.4644 |  |
| input | model | `MW_m1` | 0.4504 |  |
| input | model | `Vd1` | 0.02529 |  |
| input | model | `Vd1m1` | 0.04494 | m3 |
| input | model | `Vd2m1` | 0.05237 |  |
| input | model | `ka` | 0.0009531 | 1/s |
| input | model | `q12` | 5.734e-06 |  |
| input | model | `q13` | 4.324e-06 |  |
| input | model | `q1_m11` | 7.485e-08 | m3/s |
| input | model | `q21` | 5.734e-06 |  |
| input | model | `q31` | 4.324e-06 |  |
| input | model | `qm11_m12` | 2.623e-06 |  |
| input | model | `qm12_m11` | 2.623e-06 |  |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Hadigol M, Williams JH, Shi H, Yang DZ, Hoffman J, Wang DD. Population Pharmacokinetics Analysis of Talazoparib and Enzalutamide Combination Therapy for Patients With Metastatic Castration-Resistant Prostate Cancer. Journal of clinical pharmacology 66(2):e70125 (2026). [doi:10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

**This record:** Pharmacolibrary v26.09, model `Enzalutamide_Hadigol2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference>

```bibtex
@misc{pharmacolibrary_EnzalutamideHadigol2026reference,
  title  = {{Pharmacolibrary model Enzalutamide_Hadigol2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference},
  note   = {Parameters from doi:10.1002/jcph.70125},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.5 mg, single dose, first-order absorption (ka 3.43 /h, F 1). Dose in the paper: 0.5 mg.

<dbs-fmusim paramsurl="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference/Enzalutamide_Hadigol2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Enzalutamide_Hadigol2026_reference_params.json` · controls `Enzalutamide_Hadigol2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benzalutamide%5D%20Enzalutamide_Hadigol2026_reference&body=Drug%3A%20enzalutamide%0ARecord%3A%20Enzalutamide_Hadigol2026_reference%0APaper%3A%20Hadigol_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enzalutamide/Enzalutamide_Hadigol2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:20 UTC</sub>
