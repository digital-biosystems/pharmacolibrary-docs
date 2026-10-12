<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Hadigol_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Hadigol2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The absorption rate constant parameters for talazoparib and enzalutamide carry the non-convertible unit mL/ng.**

Both kabs values (0.157 and 3.431) are labeled with units of mL/ng rather than standard rate units. Because this unit cannot be converted to SI, the parameters lack a valid numerical value for the model. Extracted — talazoparib: CL 5.08 L/h, V1/F 14.4 L, V 382 L, Q 15.6 L/h, kabs 0.157 mL/ng; enzalutamide: CL/F 0.425 L/h, V/F 25.3 L, Q/F 20.6 L/h, kabs 3.43 mL/ng, fe 1 Fixed; N-desmethyl enzalutamide: CL 0.286 L/h, V1 44.9 L, Q 9.44 L/h, V2 52.4 L, fm 0.634 Fixed.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has talazoparib, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Hadigol M et al., Population Pharmacokinetics Analysis of…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70125](https://doi.org/10.1002/jcph.70125)

<div class="pk-model-meta" hidden drug="talazoparib" model-id="Talazoparib_Hadigol2026_reference" status="rejected" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="talazoparib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 15 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| (L/h) | `Q22` · CL | 5.078 | L/h | 1.4105555555555555e-06 | [l] / [h] | 3.887 | exact (1.0) | jcph70125-tbl-0003:row1:col1, jcph70125-tbl-0003:row1:col2, jcph70125-tbl-0003:row1:col3 | — | not captured |
| θ Vct/Ft (L) | `Q290` · V1/F | 14.389 | L | 0.014388999999999999 | [l] | 0.462 | llm (0.6) | jcph70125-tbl-0003:row2:col1, jcph70125-tbl-0003:row2:col2, jcph70125-tbl-0003:row2:col3 | — | not captured |
| θ Vpt/Ft (L) | `Q61` · V | 382.135 | L | 0.382135 | [l] | 4.735 | llm (0.6) | jcph70125-tbl-0003:row3:col1, jcph70125-tbl-0003:row3:col2, jcph70125-tbl-0003:row3:col3 | — | not captured |
| θ Qt/Ft (L/h) | `Q30` · Q | 15.568 | L/h | 4.3244444444444445e-06 | [l] / [h] | 0.053 | exact (1.0) | jcph70125-tbl-0003:row4:col1, jcph70125-tbl-0003:row4:col2, jcph70125-tbl-0003:row4:col3 | — | not captured |
| θ kat (1/h) | `Q49` · kabs | 0.157 | mL/ng | not captured | [ml] / [ng] | 0.071 | exact (1.0) | jcph70125-tbl-0003:row6:col1, jcph70125-tbl-0003:row6:col3 | — | not captured |
| θ CLe/Fe (L/h) | `Q27` · CL/F | 0.425 | L/h | 1.1805555555555555e-07 | [l] / [h] | 0.74 | llm (0.6) | Hadigol_2026_table_1:row0:col1, Hadigol_2026_table_1:row0:col2, Hadigol_2026_table_1:row0:col3 | — | not captured |
| θ Vce/Fe (L) | `Q76` · V/F | 25.293 | L | 0.025293 | [l] | 11.31 | llm (0.6) | Hadigol_2026_table_1:row1:col1, Hadigol_2026_table_1:row1:col2, Hadigol_2026_table_1:row1:col3 | — | not captured |
| θ Qe/Fe (L/h) | `Q69` · Q/F | 20.644 | L/h | 5.7344444444444445e-06 | [l] / [h] | 7.29 | llm (0.6) | Hadigol_2026_table_1:row2:col1, Hadigol_2026_table_1:row2:col2, Hadigol_2026_table_1:row2:col3 | — | not captured |
| θ kae (1/h) | `Q49` · kabs | 3.431 | mL/ng | not captured | [ml] / [ng] | 13.85 | exact (1.0) | Hadigol_2026_table_1:row4:col1, Hadigol_2026_table_1:row4:col2, Hadigol_2026_table_1:row4:col3 | — | not captured |
| θ Fe (Fixed) | `Q44` · fe | 1.000 | Fixed | not captured | [fixed] | not captured | llm_confirmed (0.6) | Hadigol_2026_table_1:row5:col1 | — | not captured |
| θ CLn (L/h) | `Q22` · CL | 0.286 | L/h | 7.944444444444444e-08 | [l] / [h] | 0.89 | exact (1.0) | Hadigol_2026_table_2:row0:col1, Hadigol_2026_table_2:row0:col2, Hadigol_2026_table_2:row0:col3 | — | not captured |
| θ Vcn (L) | `Q63` · V1 | 44.944 | L | 0.044944000000000005 | [l] | 9.32 | exact (1.0) | Hadigol_2026_table_2:row1:col1, Hadigol_2026_table_2:row1:col2, Hadigol_2026_table_2:row1:col3 | — | not captured |
| θ Qn (L/h) | `Q30` · Q | 9.443 | L/h | 2.6230555555555555e-06 | [l] / [h] | 14.28 | exact (1.0) | Hadigol_2026_table_2:row2:col1, Hadigol_2026_table_2:row2:col2, Hadigol_2026_table_2:row2:col3 | — | not captured |
| θ Vpn (L) | `Q64` · V2 | 52.373 | L | 0.052372999999999996 | [l] | 7.23 | exact (1.0) | Hadigol_2026_table_2:row3:col1, Hadigol_2026_table_2:row3:col2, Hadigol_2026_table_2:row3:col3 | — | not captured |
| θ Fmet (Fixed) | `Q45` · fm | 0.634 | Fixed | not captured | [fixed] | not captured | exact (1.0) | Hadigol_2026_table_2:row4:col1 | — | not captured |
| theta_cl_f_age | `Q900` · theta_cl_f_age | -0.003 | not captured | not captured | not captured | 27.53 | not captured (not captured) | Hadigol_2026_table_1:row7:col1, Hadigol_2026_table_1:row7:col2, Hadigol_2026_table_1:row7:col3 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.549 | not captured | not captured | not captured | 6.42 | not captured (not captured) | Hadigol_2026_table_1:row8:col1, Hadigol_2026_table_1:row8:col2, Hadigol_2026_table_1:row8:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 3.495 | not captured | not captured | not captured | 7.99 | not captured (not captured) | Hadigol_2026_table_1:row10:col1, Hadigol_2026_table_1:row10:col2, Hadigol_2026_table_1:row10:col3 | — | not captured |
| theta_q354_body_weight | `Q900` · theta_q354_body_weight | 0.006 | not captured | not captured | not captured | 9.42 | not captured (not captured) | Hadigol_2026_table_2:row5:col1, Hadigol_2026_table_2:row5:col2, Hadigol_2026_table_2:row5:col3 | — | not captured |
| theta_q1_body_weight | `Q900` · theta_q1_body_weight | 0.027 | not captured | not captured | not captured | 2.52 | not captured (not captured) | Hadigol_2026_table_2:row6:col1, Hadigol_2026_table_2:row6:col2, Hadigol_2026_table_2:row6:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked '(L/h)' as 'CL' → Q22 (CL) for  — compound marker removed
- linked 'θ Qt/Ft (L/h)' as 'Q' → Q30 (Q) for  — compound marker removed
- dropped unlinked row (NIL): 'θ Ft (Fixed)' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row5:col1'])
- dropped value-less row: 'θ slope (mL/ng)' (captured trailing unit 'mL/ng' for child rows)
- routed 'Thetarized σ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'BCCL effect on' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row9:col1', 'jcph70125-tbl-0003:row9:col2', 'jcph70125-tbl-0003:row9:col3'])
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['jcph70125-tbl-0003:row12:col1', 'Hadigol_2026_table_1:row14:col1', 'Hadigol_2026_table_2:row11:col1'])
- dropped duplicate Q76 ('θ Vpe/Fe (L)', value '45.928') — already have one for this compound
- unit 'mL/ng' inherited from a section-header row for kabs (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_mismatch: 'θ kae (1/h)' → Q49 (unit '[length] ** 3 / [mass]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'Fixed' (fe)
- routed 'Thetarized sigma' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Age effect on θ Vce/Fe' — extend the ontology if this is a real PK parameter (source ['Hadigol_2026_table_1:row9:col1', 'Hadigol_2026_table_1:row9:col2', 'Hadigol_2026_table_1:row9:col3'])
- unit_dimension_unknown: 'Fixed' (fm)
- dropped value-less row: 'CLe/Fe'
- dropped value-less row: 'CLn'
- dropped value-less row: 'Fe'
- dropped value-less row: 'Fmet'
- dropped value-less row: 'kae'
- dropped value-less row: 'Qe/Fe'
- dropped value-less row: 'Qn'
- dropped value-less row: 'Vce/Fe'
- dropped value-less row: 'Vcn'
- dropped value-less row: 'Vpe/Fe'
- dropped value-less row: 'Vpn'
- unit inherited for kabs (Q49): 'mL/ng' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 47/47 row label(s) assigned, 52 linked by role; re-tagged parent→enzalutamide ×46, parent→N-desmethyl enzalutamide ×33, talazoparib→enzalutamide ×6, talazoparib→N-desmethyl enzalutamide ×5
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70125-tbl-0003:row1:col6 = '5.072 [4.821, 5.344]'
- unparsed cell jcph70125-tbl-0003:row2:col6 = '14.382 [14.067, 14.735]'
- unparsed cell jcph70125-tbl-0003:row3:col6 = '382.208 [364.472, 399.944]'
- unparsed cell jcph70125-tbl-0003:row4:col6 = '15.568 [15.536, 15.598]'
- unparsed cell jcph70125-tbl-0003:row6:col2 = '1.11 × 10−4'
- unparsed cell jcph70125-tbl-0003:row6:col6 = '0.157 [0.156, 0.157]'
- unparsed cell jcph70125-tbl-0003:row7:col1 = '6.58 × 10−6'
- unparsed cell jcph70125-tbl-0003:row7:col2 = '1.22 × 10−6'
- unparsed cell jcph70125-tbl-0003:row7:col6 = '6.56 × 10−6 [4.98 × 10−6, 8.21 × 10−6]'
- unparsed cell jcph70125-tbl-0003:row8:col6 = '0.354 [0.344, 0.365]'
- unparsed cell jcph70125-tbl-0003:row9:col6 = '0.452 [0.38, 0.523]'
- unparsed cell jcph70125-tbl-0003:row10:col6 = '0.074 [0.062, 0.087]'
- unparsed cell jcph70125-tbl-0003:row11:col6 = '2.55 [2.023, 3.325]'
- unparsed cell Hadigol_2026_table_1:row0:col6 = '0.425 [0.419, 0.431]'
- unparsed cell Hadigol_2026_table_1:row1:col6 = '25.155 [21.773, 28.655]'
- unparsed cell Hadigol_2026_table_1:row2:col6 = '20.655 [18.274, 23.322]'
- unparsed cell Hadigol_2026_table_1:row3:col6 = '46.001 [43.1, 48.806]'
- unparsed cell Hadigol_2026_table_1:row4:col6 = '3.423 [2.79, 4.552]'
- unparsed cell Hadigol_2026_table_1:row6:col6 = '0.146 [0.143, 0.149]'
- unparsed cell Hadigol_2026_table_1:row7:col6 = '−0.003 [−0.005, −0.002]'
- unparsed cell Hadigol_2026_table_1:row8:col6 = '0.55 [0.485, 0.619]'
- unparsed cell Hadigol_2026_table_1:row9:col6 = '1.238 [0.647, 1.842]'
- unparsed cell Hadigol_2026_table_1:row10:col6 = '3.505 [3.105, 3.904]'
- unparsed cell Hadigol_2026_table_1:row11:col6 = '0.037 [0.034, 0.041]'
- unparsed cell Hadigol_2026_table_1:row12:col6 = '−0.015 [−0.029, −0.002]'
- unparsed cell Hadigol_2026_table_1:row13:col6 = '0.354 [0.283, 0.453]'
- companion parameter table 1 transcribed (47 record(s), model stage 'final')
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0003:row1:col1', 'jcph70125-tbl-0003:row1:col2', 'jcph70125-tbl-0003:row1:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_1:row0:col1', 'Hadigol_2026_table_1:row0:col2', 'Hadigol_2026_table_1:row0:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0003:row2:col1', 'jcph70125-tbl-0003:row2:col2', 'jcph70125-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70125-tbl-0003:row4:col1', 'jcph70125-tbl-0003:row4:col2', 'jcph70125-tbl-0003:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_2:row2:col1', 'Hadigol_2026_table_2:row2:col2', 'Hadigol_2026_table_2:row2:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [mass] | mL/ng | not captured | not captured | ['Hadigol_2026_table_1:row4:col1', 'Hadigol_2026_table_1:row4:col2', 'Hadigol_2026_table_1:row4:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70125-tbl-0003:row3:col1', 'jcph70125-tbl-0003:row3:col2', 'jcph70125-tbl-0003:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hadigol_2026_table_1:row2:col1', 'Hadigol_2026_table_1:row2:col2', 'Hadigol_2026_table_1:row2:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hadigol_2026_table_1:row1:col1', 'Hadigol_2026_table_1:row1:col2', 'Hadigol_2026_table_1:row1:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | mL/ng | not captured | not captured | ['jcph70125-tbl-0003:row6:col1', 'jcph70125-tbl-0003:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.08 L/h | not captured | not captured | ['jcph70125-tbl-0003:row1:col1', 'jcph70125-tbl-0003:row1:col2', 'jcph70125-tbl-0003:row1:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.286 L/h | not captured | not captured | ['Hadigol_2026_table_2:row0:col1', 'Hadigol_2026_table_2:row0:col2', 'Hadigol_2026_table_2:row0:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.425 L/h | not captured | not captured | ['Hadigol_2026_table_1:row0:col1', 'Hadigol_2026_table_1:row0:col2', 'Hadigol_2026_table_1:row0:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['jcph70125-tbl-0003:row2:col1', 'jcph70125-tbl-0003:row2:col2', 'jcph70125-tbl-0003:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 382 L | not captured | not captured | ['jcph70125-tbl-0003:row3:col1', 'jcph70125-tbl-0003:row3:col2', 'jcph70125-tbl-0003:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44.9 L | not captured | not captured | ['Hadigol_2026_table_2:row1:col1', 'Hadigol_2026_table_2:row1:col2', 'Hadigol_2026_table_2:row1:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 52.4 L | not captured | not captured | ['Hadigol_2026_table_2:row3:col1', 'Hadigol_2026_table_2:row3:col2', 'Hadigol_2026_table_2:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 25.3 L | not captured | not captured | ['Hadigol_2026_table_1:row1:col1', 'Hadigol_2026_table_1:row1:col2', 'Hadigol_2026_table_1:row1:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_talazoparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hadigol_2026` / `Hadigol_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:44 UTC</sub>
