<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Keunecke_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Keunecke2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.806). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The record was held back with negative metabolite-formation fractions for M-2 (−0.355) and M-5 (−1.09), alongside incomplete parameter coverage and defaulted Q2.**

Q2 uses library defaults, not estimates from this paper; these values affect the simulated profile but are not supported by this paper and need to be extracted or explicitly justified as conventions. Parameter coverage was 4 of 10: kabs, V1, kcomp, V2, V1/F and V2/F were neither emitted nor defaulted, despite having values in the record; the substitutions also assumed F=1 and Fm=1, with no molar correction. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. Extracted — regorafenib: kabs 0.482 h−1, CL 4.02 L h−1, V1 10.7 L, kcomp 100 h−1, Q 11 L/h, V2 162 L, k14 0.141 h−1, V1/F 10.7 L, … (+1); M-2: fm -0.355, CL 2.45 L h−1; M-5: CL 0.746 L h−1, fm -1.09.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of k cg: this record has 0.141, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Keunecke A et al., Population pharmacokinetics of regorafe…, British journal of clinical… (2020)
  ·  DOI: [10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334)

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Keunecke2020_reference" status="needs_review" stale="false" population="patients with advanced solid tumours" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></div>

**Model structure:** 3-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 13 extracted, plus 4 covariate effects.

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a, h−1 | `Q49` · kabs | 0.482 | h−1 | 0.00013388888888888888 | [1] / [h] | not captured | exact (1.0) | bcp14334-tbl-0003:row2:col1, Keunecke_2020_table_1:row1:col1, Keunecke_2020_table_2:row1:col1 | — | not captured |
| FRM2 | `Q45` · fm | -0.355 | not captured | not captured | not captured | 26.7 | exact (1.0) | bcp14334-tbl-0003:row3:col1, Keunecke_2020_table_2:row2:col1, Keunecke_2020_table_2:row2:col2, Keunecke_2020_table_2:row2:col3, Keunecke_2020_table_2:row2:col4, Keunecke_2020_table_2:row2:col5 | — | not captured |
| CLP/(1‐FRM2), L h−1 | `Q22` · CL | 4.02 | L h−1 | 1.1166666666666664e-06 | [l] / [h] | not captured | exact (1.0) | bcp14334-tbl-0003:row4:col1, Keunecke_2020_table_2:row3:col1 | — | 0.206 (8.16% RSE) |
| bmi_on_regorafenib_clearance | `Q900` · bmi_on_regorafenib_clearance | -0.363 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp14334-tbl-0003:row6:col1 | — | not captured |
| VCP/(1‐FRM2), L | `Q63` · V1 | 10.7 | L | 0.0107 | [l] | not captured | exact (1.0) | bcp14334-tbl-0003:row7:col1, Keunecke_2020_table_2:row4:col1 | — | not captured |
| k GE, h−1 | `Q48` · kcomp | 100 | h−1 | 0.027777777777777776 | [1] / [h] | not captured | llm (0.6) | bcp14334-tbl-0003:row8:col1, Keunecke_2020_table_1:row4:col1, Keunecke_2020_table_2:row5:col1 | — | not captured |
| QP/(1‐FRM2), L/h−1 | `Q30` · Q | 11.0 | L/h | 3.055555555555555e-06 | L/h | not captured | exact (1.0) | bcp14334-tbl-0003:row12:col1 | — | not captured |
| VPP/(1‐FRM2), L | `Q64` · V2 | 162 | L | 0.162 | [l] | not captured | exact (1.0) | bcp14334-tbl-0003:row13:col1, Keunecke_2020_table_2:row10:col1 | — | not captured |
| k CG, h−1 | `Q347` · k14 | 0.141 | h−1 | 3.9166666666666665e-05 | [1] / [h] | 13.5 | llm (0.6) | bcp14334-tbl-0003:row14:col1, Keunecke_2020_table_1:row10:col1, Keunecke_2020_table_1:row10:col2, Keunecke_2020_table_1:row10:col3, Keunecke_2020_table_1:row10:col4, Keunecke_2020_table_1:row10:col5, Keunecke_2020_table_2:row11:col1 | — | not captured |
| CLM‐2, L h−1 | `Q22` · CL | 2.45 | L h−1 | 6.805555555555557e-07 | [l] / [h] | 4.98 | exact (1.0) | bcp14334-tbl-0003:row16:col1, bcp14334-tbl-0003:row16:col2, bcp14334-tbl-0003:row16:col3, bcp14334-tbl-0003:row16:col4, bcp14334-tbl-0003:row16:col5, Keunecke_2020_table_2:row13:col1, Keunecke_2020_table_2:row13:col2, Keunecke_2020_table_2:row13:col3, Keunecke_2020_table_2:row13:col4, Keunecke_2020_table_2:row13:col5 | — | not captured |
| CLM‐5, L h−1 | `Q22` · CL | 0.746 | L h−1 | 2.0722222222222223e-07 | [l] / [h] | 28.8 | exact (1.0) | bcp14334-tbl-0003:row18:col1, bcp14334-tbl-0003:row18:col2, bcp14334-tbl-0003:row18:col3, bcp14334-tbl-0003:row18:col4, bcp14334-tbl-0003:row18:col5, Keunecke_2020_table_2:row14:col1, Keunecke_2020_table_2:row14:col2, Keunecke_2020_table_2:row14:col3, Keunecke_2020_table_2:row14:col4, Keunecke_2020_table_2:row14:col5 | — | not captured |
| FRM5 | `Q45` · fm | -1.09 | not captured | not captured | not captured | 19.4 | exact (1.0) | bcp14334-tbl-0003:row20:col1, Keunecke_2020_table_2:row15:col1, Keunecke_2020_table_2:row15:col2, Keunecke_2020_table_2:row15:col3, Keunecke_2020_table_2:row15:col4, Keunecke_2020_table_2:row15:col5 | — | not captured |
| VC/Foral, L | `Q290` · V1/F | 10.7 | L | 0.0107 | [l] | 18.1 | llm (0.6) | Keunecke_2020_table_1:row3:col1, Keunecke_2020_table_1:row3:col2, Keunecke_2020_table_1:row3:col3, Keunecke_2020_table_1:row3:col4, Keunecke_2020_table_1:row3:col5 | — | not captured |
| VP/Foral, L | `Q82` · V2/F | 162 | L | 0.162 | [l] | 16.1 | llm (0.6) | Keunecke_2020_table_1:row9:col1, Keunecke_2020_table_1:row9:col2, Keunecke_2020_table_1:row9:col3, Keunecke_2020_table_1:row9:col4, Keunecke_2020_table_1:row9:col5 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.169 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp14334-tbl-0003:row5:col1 | — | not captured |
| theta_q351_sex | `Q900` · theta_q351_sex | 0.380 | not captured | not captured | not captured | 5.06 | not captured (not captured) | bcp14334-tbl-0003:row17:col1, bcp14334-tbl-0003:row17:col2, bcp14334-tbl-0003:row17:col3, bcp14334-tbl-0003:row17:col4, bcp14334-tbl-0003:row17:col5 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.761 | not captured | not captured | not captured | 5.08 | not captured (not captured) | bcp14334-tbl-0003:row19:col1, bcp14334-tbl-0003:row19:col2, bcp14334-tbl-0003:row19:col3, bcp14334-tbl-0003:row19:col4, bcp14334-tbl-0003:row19:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Q2']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Parent Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐2 Add. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐2 Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐5 Add. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'M‐5 Prop. error, SD' routed out of structural estimates ('Residual error')
- table section residual_error: 'SD of proportional error' routed out of structural estimates ('Residual error')
- covariate level 'BMI on regorafenib clearance' → Q900:bmi_on_regorafenib_clearance = -0.363 (linear_fractional on Q22)
- unit_dimension_unknown: 'L/h−1' (Q)
- dropped unlinked row (NIL): 'DGE, h' — extend the ontology if this is a real PK parameter (source ['bcp14334-tbl-0003:row15:col1', 'Keunecke_2020_table_1:row11:col1', 'Keunecke_2020_table_2:row12:col1'])
- dropped duplicate Q22 ('CL/Foral, L h−1', value '4.02') — already have one for this compound
- dropped duplicate Q30 ('Q/Foral, L h−1', value '11.0') — already have one for this compound
- dropped duplicate Q30 ('QP/(1‐FRM2), L h−1', value '11.0') — already have one for this compound
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'QP/(1‐FRM2), L/h−1' → L/h (from the paper text: 'The parameter listing gives “L/h−1 = 11.0,” and the table caption defines Q as “intercompartmental clearance.” Interpret')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=regorafenib
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- row roles (LLM): model_class=compartmental; 39/39 row label(s) assigned, 63 linked by role; re-tagged parent→M-2 ×49, parent→M-5 ×49
- molar mass: no plausible PubChem entry for 'M-5' ('no full name in the paper') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M-2' (LLM) — left in mass units
- molar mass: none found for 'M-2' — its concentrations stay mass-only
- molar mass: none found for 'M-5' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (39 record(s))
- companion parameter table 2 transcribed (86 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.806 (25/31 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[k cg]` | 0.141 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[k ge]` | 100 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_regorafenib_clearance]` | not captured | 0.169 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | 0.169 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q351_sex]` | 0.380 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp/foral]` | 162 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row12:col1'] |
| C5_dimension_Q347 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row14:col1', 'Keunecke_2020_table_1:row10:col1', 'Keunecke_2020_table_1:row10:col2', 'Keunecke_2020_table_1:row10:col3', 'Keunecke_2020_table_1:row10:col4', 'Keunecke_2020_table_1:row10:col5', 'Keunecke_2020_table_2:row11:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row8:col1', 'Keunecke_2020_table_1:row4:col1', 'Keunecke_2020_table_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14334-tbl-0003:row2:col1', 'Keunecke_2020_table_1:row1:col1', 'Keunecke_2020_table_2:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.02 L/h | not captured | not captured | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.45 L/h | not captured | not captured | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.746 L/h | not captured | not captured | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.7 L | not captured | not captured | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 10.7 L | not captured | not captured | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 162 L | not captured | not captured | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L | not captured | not captured | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 10 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kabs', 'V1', 'kcomp', 'V2', 'V1/F', 'V2/F'] |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_regorafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Keunecke_2020` / `Keunecke_2020::reference`)
- model: `../../../knowledgebase/drugs/drug_regorafenib/models/modelica/Regorafenib_Keunecke2020_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_regorafenib/models/modelica/Regorafenib_Keunecke2020_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_modelica.zip" download>Regorafenib_Keunecke2020_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab.zip" download>Regorafenib_Keunecke2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab_simbio.zip" download>Regorafenib_Keunecke2020_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_sbml.zip" download>Regorafenib_Keunecke2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_cellml.zip" download>Regorafenib_Keunecke2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:40 UTC</sub>
