<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Keunecke_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Keunecke2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The record was held back with negative metabolite-formation fractions for M-2 (−0.355) and M-5 (−1.09), alongside incomplete parameter coverage and defaulted Q2.

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Keunecke2020_reference" status="needs_review" stale="false" population="patients with advanced solid tumours" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></div>

## Citation
Keunecke A, Hoefman S, Drenth HJ, Zisowsky J, Cleton A, Ploeger BA. Population pharmacokinetics of regorafenib in solid tumours: Exposure in clinical practice considering enterohepatic circulation and food intake. British journal of clinical pharmacology 86(12):2362–2376 (2020).
  ·  DOI: [10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334)

## Population and dosing

**Population:** patients with advanced solid tumours · condition advanced solid tumours · age group adult.

**Dosing:** 160 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 13 extracted, plus 4 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| k a, h−1 | kabs | 0.482 | h−1 |  |  |
| FRM2 | fm | -0.355 |  | 26.7 |  |
| CLP/(1‐FRM2), L h−1 | CL | 4.02 | L h−1 |  | 0.206 (8.16% RSE) |
| bmi_on_regorafenib_clearance | bmi_on_regorafenib_clearance | -0.363 |  |  |  |
| VCP/(1‐FRM2), L | V1 | 10.7 | L |  |  |
| k GE, h−1 | kcomp | 100 | h−1 |  |  |
| QP/(1‐FRM2), L/h−1 | Q | 11.0 | L/h |  |  |
| VPP/(1‐FRM2), L | V2 | 162 | L |  |  |
| k CG, h−1 | k14 | 0.141 | h−1 | 13.5 |  |
| CLM‐2, L h−1 | CL | 2.45 | L h−1 | 4.98 |  |
| CLM‐5, L h−1 | CL | 0.746 | L h−1 | 28.8 |  |
| FRM5 | fm | -1.09 |  | 19.4 |  |
| VC/Foral, L | V1/F | 10.7 | L | 18.1 |  |
| VP/Foral, L | V2/F | 162 | L | 16.1 |  |
| theta_cl_sex | theta_cl_sex | 0.169 |  |  |  |
| theta_q351_sex | theta_q351_sex | 0.380 |  | 5.06 |  |
| theta_cl_sex | theta_cl_sex | 0.761 |  | 5.08 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.806). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was held back with negative metabolite-formation fractions for M-2 (−0.355) and M-5 (−1.09), alongside incomplete parameter coverage and defaulted Q2.**

Q2 uses library defaults, not estimates from this paper; these values affect the simulated profile but are not supported by this paper and need to be extracted or explicitly justified as conventions. Parameter coverage was 4 of 10: kabs, V1, kcomp, V2, V1/F and V2/F were neither emitted nor defaulted, despite having values in the record; the substitutions also assumed F=1 and Fm=1, with no molar correction. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. Extracted — regorafenib: kabs 0.482 h−1, CL 4.02 L h−1, V1 10.7 L, kcomp 100 h−1, Q 11 L/h, V2 162 L, k14 0.141 h−1, V1/F 10.7 L, … (+1); M-2: fm -0.355, CL 2.45 L h−1; M-5: CL 0.746 L h−1, fm -1.09.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of k cg: this record has 0.141, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a, h−1 | `Q49` · kabs | 0.482 | h−1 | 0.0001339 | 1/s | 1/h |  | exact (1) | bcp14334-tbl-0003:row2:col1, Keunecke_2020_table_1:row1:col1, Keunecke_2020_table_2:row1:col1 |  |
| FRM2 | `Q45` · fm | -0.355 |  |  |  |  | 26.7 | exact (1) | bcp14334-tbl-0003:row3:col1, Keunecke_2020_table_2:row2:col1, Keunecke_2020_table_2:row2:col2, Keunecke_2020_table_2:row2:col3, Keunecke_2020_table_2:row2:col4, Keunecke_2020_table_2:row2:col5 |  |
| CLP/(1‐FRM2), L h−1 | `Q22` · CL | 4.02 | L h−1 | 1.117e-06 | m3/s | l/h |  | exact (1) | bcp14334-tbl-0003:row4:col1, Keunecke_2020_table_2:row3:col1 | 0.206 (8.16% RSE) |
| bmi_on_regorafenib_clearance | `Q900` · bmi_on_regorafenib_clearance | -0.363 |  |  |  |  |  |  | bcp14334-tbl-0003:row6:col1 |  |
| VCP/(1‐FRM2), L | `Q63` · V1 | 10.7 | L | 0.0107 | m3 | l |  | exact (1) | bcp14334-tbl-0003:row7:col1, Keunecke_2020_table_2:row4:col1 |  |
| k GE, h−1 | `Q48` · kcomp | 100 | h−1 | 0.02778 | 1/s | 1/h |  | llm (0.6) | bcp14334-tbl-0003:row8:col1, Keunecke_2020_table_1:row4:col1, Keunecke_2020_table_2:row5:col1 |  |
| QP/(1‐FRM2), L/h−1 | `Q30` · Q | 11.0 | L/h | 3.056e-06 | m3/s | L/h |  | exact (1) | bcp14334-tbl-0003:row12:col1 |  |
| VPP/(1‐FRM2), L | `Q64` · V2 | 162 | L | 0.162 | m3 | l |  | exact (1) | bcp14334-tbl-0003:row13:col1, Keunecke_2020_table_2:row10:col1 |  |
| k CG, h−1 | `Q347` · k14 | 0.141 | h−1 | 3.917e-05 | 1/s | 1/h | 13.5 | llm (0.6) | bcp14334-tbl-0003:row14:col1, Keunecke_2020_table_1:row10:col1, Keunecke_2020_table_1:row10:col2, Keunecke_2020_table_1:row10:col3, Keunecke_2020_table_1:row10:col4, Keunecke_2020_table_1:row10:col5, Keunecke_2020_table_2:row11:col1 |  |
| CLM‐2, L h−1 | `Q22` · CL | 2.45 | L h−1 | 6.806e-07 | m3/s | l/h | 4.98 | exact (1) | bcp14334-tbl-0003:row16:col1, bcp14334-tbl-0003:row16:col2, bcp14334-tbl-0003:row16:col3, bcp14334-tbl-0003:row16:col4, bcp14334-tbl-0003:row16:col5, Keunecke_2020_table_2:row13:col1, Keunecke_2020_table_2:row13:col2, Keunecke_2020_table_2:row13:col3, Keunecke_2020_table_2:row13:col4, Keunecke_2020_table_2:row13:col5 |  |
| CLM‐5, L h−1 | `Q22` · CL | 0.746 | L h−1 | 2.072e-07 | m3/s | l/h | 28.8 | exact (1) | bcp14334-tbl-0003:row18:col1, bcp14334-tbl-0003:row18:col2, bcp14334-tbl-0003:row18:col3, bcp14334-tbl-0003:row18:col4, bcp14334-tbl-0003:row18:col5, Keunecke_2020_table_2:row14:col1, Keunecke_2020_table_2:row14:col2, Keunecke_2020_table_2:row14:col3, Keunecke_2020_table_2:row14:col4, Keunecke_2020_table_2:row14:col5 |  |
| FRM5 | `Q45` · fm | -1.09 |  |  |  |  | 19.4 | exact (1) | bcp14334-tbl-0003:row20:col1, Keunecke_2020_table_2:row15:col1, Keunecke_2020_table_2:row15:col2, Keunecke_2020_table_2:row15:col3, Keunecke_2020_table_2:row15:col4, Keunecke_2020_table_2:row15:col5 |  |
| VC/Foral, L | `Q290` · V1/F | 10.7 | L | 0.0107 | m3 | l | 18.1 | llm (0.6) | Keunecke_2020_table_1:row3:col1, Keunecke_2020_table_1:row3:col2, Keunecke_2020_table_1:row3:col3, Keunecke_2020_table_1:row3:col4, Keunecke_2020_table_1:row3:col5 |  |
| VP/Foral, L | `Q82` · V2/F | 162 | L | 0.162 | m3 | l | 16.1 | llm (0.6) | Keunecke_2020_table_1:row9:col1, Keunecke_2020_table_1:row9:col2, Keunecke_2020_table_1:row9:col3, Keunecke_2020_table_1:row9:col4, Keunecke_2020_table_1:row9:col5 |  |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.169 |  |  |  |  |  |  | bcp14334-tbl-0003:row5:col1 |  |
| theta_q351_sex | `Q900` · theta_q351_sex | 0.380 |  |  |  |  | 5.06 |  | bcp14334-tbl-0003:row17:col1, bcp14334-tbl-0003:row17:col2, bcp14334-tbl-0003:row17:col3, bcp14334-tbl-0003:row17:col4, bcp14334-tbl-0003:row17:col5 |  |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.761 |  |  |  |  | 5.08 |  | bcp14334-tbl-0003:row19:col1, bcp14334-tbl-0003:row19:col2, bcp14334-tbl-0003:row19:col3, bcp14334-tbl-0003:row19:col4, bcp14334-tbl-0003:row19:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[k cg]` | 0.141 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[k ge]` | 100 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_regorafenib_clearance]` |  | 0.169 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | 0.169 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q351_sex]` | 0.380 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp/foral]` | 162 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcp14334-tbl-0003:row12:col1'] |
| C5_dimension_Q347 | pass | 1 / [time] |  | ['bcp14334-tbl-0003:row14:col1', 'Keunecke_2020_table_1:row10:col1', 'Keunecke_2020_table_1:row10:col2', 'Keunecke_2020_table_1:row10:col3', 'Keunecke_2020_table_1:row10:col4', 'Keunecke_2020_table_1:row10:col5', 'Keunecke_2020_table_2:row11:col1'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['bcp14334-tbl-0003:row8:col1', 'Keunecke_2020_table_1:row4:col1', 'Keunecke_2020_table_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcp14334-tbl-0003:row2:col1', 'Keunecke_2020_table_1:row1:col1', 'Keunecke_2020_table_2:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.02 L/h | ['bcp14334-tbl-0003:row4:col1', 'Keunecke_2020_table_2:row3:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.45 L/h | ['bcp14334-tbl-0003:row16:col1', 'bcp14334-tbl-0003:row16:col2', 'bcp14334-tbl-0003:row16:col3', 'bcp14334-tbl-0003:row16:col4', 'bcp14334-tbl-0003:row16:col5', 'Keunecke_2020_table_2:row13:col1', 'Keunecke_2020_table_2:row13:col2', 'Keunecke_2020_table_2:row13:col3', 'Keunecke_2020_table_2:row13:col4', 'Keunecke_2020_table_2:row13:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.746 L/h | ['bcp14334-tbl-0003:row18:col1', 'bcp14334-tbl-0003:row18:col2', 'bcp14334-tbl-0003:row18:col3', 'bcp14334-tbl-0003:row18:col4', 'bcp14334-tbl-0003:row18:col5', 'Keunecke_2020_table_2:row14:col1', 'Keunecke_2020_table_2:row14:col2', 'Keunecke_2020_table_2:row14:col3', 'Keunecke_2020_table_2:row14:col4', 'Keunecke_2020_table_2:row14:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.7 L | ['Keunecke_2020_table_1:row3:col1', 'Keunecke_2020_table_1:row3:col2', 'Keunecke_2020_table_1:row3:col3', 'Keunecke_2020_table_1:row3:col4', 'Keunecke_2020_table_1:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 10.7 L | ['bcp14334-tbl-0003:row7:col1', 'Keunecke_2020_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 162 L | ['bcp14334-tbl-0003:row13:col1', 'Keunecke_2020_table_2:row10:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L | ['Keunecke_2020_table_1:row9:col1', 'Keunecke_2020_table_1:row9:col2', 'Keunecke_2020_table_1:row9:col3', 'Keunecke_2020_table_1:row9:col4', 'Keunecke_2020_table_1:row9:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 10 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['kabs', 'V1', 'kcomp', 'V2', 'V1/F', 'V2/F'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_modelica.zip" download>Regorafenib_Keunecke2020_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab.zip" download>Regorafenib_Keunecke2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_matlab_simbio.zip" download>Regorafenib_Keunecke2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_sbml.zip" download>Regorafenib_Keunecke2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference/Regorafenib_Keunecke2020_reference_cellml.zip" download>Regorafenib_Keunecke2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Keunecke A, Hoefman S, Drenth HJ, Zisowsky J, Cleton A, Ploeger BA. Population pharmacokinetics of regorafenib in solid tumours: Exposure in clinical practice considering enterohepatic circulation and food intake. British journal of clinical pharmacology 86(12):2362–2376 (2020). [doi:10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334)

**This record:** Pharmacolibrary v26.09, model `Regorafenib_Keunecke2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference>

```bibtex
@misc{pharmacolibrary_RegorafenibKeunecke2020reference,
  title  = {{Pharmacolibrary model Regorafenib_Keunecke2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference},
  note   = {Parameters from doi:10.1111/bcp.14334},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bregorafenib%5D%20Regorafenib_Keunecke2020_reference&body=Drug%3A%20regorafenib%0ARecord%3A%20Regorafenib_Keunecke2020_reference%0APaper%3A%20Keunecke_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:40 UTC</sub>
