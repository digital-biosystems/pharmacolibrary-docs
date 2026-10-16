<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Sanghavi2020_reference&quot;,&quot;label&quot;:&quot;Sanghavi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (CLnorm), so that value has no SI equivalent. Extracted — ipilimumab: CL 13.5 mL/h, V1 4.01 L, Q 35.9 mL/h, Vnorm 0.932 L/kg, CLnorm -0.661 %, V -0.273, CLH -0.382, CL_PD -0.58, … (+1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl pedoth: this record has none, the second reading -0.462; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

<div class="pk-model-meta" hidden drug="ipilimumab" model-id="Ipilimumab_Hu2024_reference" status="rejected" stale="false" population="pediatric oncology patients" measured-compound="ipilimumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL REF (mL/h) | `Q22` · CL | 13.5 | mL/h | 3.75e-09 | [ml] / [h] | not captured | llm_confirmed (0.6) | psp413098-tbl-0005:row2:col2 | — | 0.108 (0.329% RSE) |
| VC REF (L) | `Q63` · V1 | 4.01 | L | 0.00401 | [l] | 0.0434 | llm_confirmed (0.6) | psp413098-tbl-0005:row3:col2, Hu_2024_table_4:row2:col2 | — | 0.0751 (0.274% RSE) |
| Q REF (mL/h) | `Q30` · Q | 35.9 | mL/h | 9.972222222222222e-09 | [ml] / [h] | 1.61 | llm (0.6) | psp413098-tbl-0005:row4:col2, Hu_2024_table_4:row3:col2 | — | not captured |
| VC LBM | `Q352` · Vnorm | 0.932 | L/kg | 0.06524 | L | 0.0325 | llm_corrected (0.6) | psp413098-tbl-0005:row7:col2, Hu_2024_table_4:row11:col2 | — | not captured |
| CL CNST | `Q354` · CLnorm | -0.661 | % | not captured | [%] | not captured | llm_corrected (0.6) | psp413098-tbl-0005:row8:col2 | — | not captured |
| VC ADO | `Q61` · V | -0.273 | not captured | not captured | not captured | 0.0253 | llm_corrected (0.6) | psp413098-tbl-0005:row16:col2, Hu_2024_table_4:row32:col2 | — | not captured |
| cl_sex | `Q900` · cl_sex | -0.0998 | not captured | not captured | not captured | 0.0184 | not captured (not captured) | Hu_2024_table_4:row7:col2 | — | not captured |
| vc_sex | `Q900` · vc_sex | 0.0195 | not captured | not captured | not captured | 0.0186 | not captured (not captured) | Hu_2024_table_4:row12:col2 | — | not captured |
| CL HL | `Q25` · CLH | -0.382 | not captured | not captured | not captured | 0.0331 | llm_corrected (0.6) | Hu_2024_table_4:row16:col2 | — | not captured |
| CL PEDST | `Q358` · CL_PD | -0.580 | not captured | not captured | not captured | 0.0893 | llm_corrected (0.6) | Hu_2024_table_4:row19:col2 | — | not captured |
| theta_cl_egfr_power | `Q900` · theta_cl_egfr_power | 0.0982 | not captured | not captured | not captured | 0.0357 | not captured (not captured) | Hu_2024_table_4:row6:col2 | — | not captured |
| Peripheral (Vp) | `Q64` · V2 | 4.15 | L | 0.00415 | L | not captured | review_gapfill (0.7) | Leven_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- column 'parameter note' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- conflicting source units for 'CL WTB': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL eGFR': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL SEX': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PS': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAA': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAS': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL HL': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL GBM': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL OTH': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDHL': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDCNST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL I1Q3': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL I3Q3': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL BVCO': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- conflicting source units for 'CL ADOST': [{'unit': '0', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}, {'unit': '%', 'source': 'Hu_2024_table_4:note', 'scope': 'note'}]
- dropped unlinked row (NIL): 'VP REF (L)' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row5:col2', 'Hu_2024_table_4:row4:col2'])
- dropped unlinked row (NIL): 'CL LBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row6:col2'])
- unit_dimension_mismatch: 'CL CNST' → Q354 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL OTH', value '0.00699') — already have one for this compound
- dropped unlinked row (NIL): 'CL PEDOTH' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row10:col2'])
- dropped duplicate Q22 ('CL PEDCNST', value '-0.801') — already have one for this compound
- dropped unlinked row (NIL): 'CL PEDMEL' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row12:col2'])
- dropped unlinked row (NIL): 'CL N1Q3' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row13:col1', 'psp413098-tbl-0005:row13:col2'])
- dropped unlinked row (NIL): 'CL N3Q3' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row14:col1', 'psp413098-tbl-0005:row14:col2'])
- dropped unlinked row (NIL): 'VC PED' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row15:col2', 'Hu_2024_table_4:row31:col2'])
- dropped unlinked row (NIL): 'CL0 REF (mL/h)' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row1:col2'])
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL SEX' → Q900:cl_sex = -0.0998 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'CL PS' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row8:col2'])
- dropped duplicate Q22 ('CL RAAA', value '0.0693') — already have one for this compound
- dropped duplicate Q22 ('CL RAAS', value '0.00333') — already have one for this compound
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped PD-category row 'EMAX REF' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row13:col2'])
- dropped unlinked row (NIL): 'T50 (h)' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row14:col2'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row15:col2'])
- dropped duplicate Q22 ('CL GBM', value '-0.578') — already have one for this compound
- dropped duplicate Q358 ('CL PEDHL', value '-0.411') — already have one for this compound
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped duplicate Q22 ('CL BVCO', value '0.132') — already have one for this compound
- dropped PD-category row 'EMAX PS' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row25:col2'])
- dropped PD-category row 'EMAX IPICO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row26:col2'])
- dropped unlinked row (NIL): 'EMAX HL' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row27:col2'])
- dropped PD-category row 'EMAX OTH' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row28:col2'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row29:col2'])
- dropped unlinked row (NIL): 'CL ADOST' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row30:col2'])
- implicit units: 'VC LBM' → L/kg (from the popPK convention: 'The parameter VC_LBM is a volume of distribution normalized to a standard body size (Lean Body Mass). In population PK, ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ipilimumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only
- gap-filled Q64 (V2) from Leven_2019's review values (primary lacked it)

**Extraction notes:**
- table psp413098-tbl-0005: unbound_uncertainty
- table psp413098-tbl-0005: unparsed_numeric_cell
- table Hu_2024_table_4: conflicting_units
- table Hu_2024_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (76 record(s), model stage 'full')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl pedoth]` | not captured | -0.462 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl ref].covariate_forms` | ['linear_fractional', 'linear_fractional', 'power'] | ['linear_fractional', 'power'] | mismatch |
| `qwen3.8-27b` | `parameters[cl_egfr]` | not captured | 0.0982 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl_sex]` | -0.0998 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_egfr_power]` | 0.0982 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex_cl]` | not captured | -0.0998 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q63_sex_vc]` | not captured | 0.0195 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc ref].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[vc ref].value` | 4.01 | 3.90 | mismatch |
| `qwen3.8-27b` | `parameters[vc_sex]` | 0.0195 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp ref].value` | 2.77 | 3.47 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q25 | fail | not captured | -0.382 | not captured | not captured | not captured |
| C2_base_sign_Q354 | fail | not captured | -0.661 | not captured | not captured | not captured |
| C2_base_sign_Q358 | fail | not captured | -0.58 | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.273 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row4:col2', 'Hu_2024_table_4:row3:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row7:col2', 'Hu_2024_table_4:row11:col2'] |
| C5_dimension_Q354 | fail | dimensionless | % | not captured | not captured | ['psp413098-tbl-0005:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'Hu_2024_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Leven_2019:review'] |
| C5_unit_missing_Q25 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hu_2024_table_4:row16:col2'] |
| C5_unit_missing_Q358 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hu_2024_table_4:row19:col2'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row16:col2', 'Hu_2024_table_4:row32:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.5 | not captured | not captured | ['psp413098-tbl-0005:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['psp413098-tbl-0005:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.01 L | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'Hu_2024_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.15 L | not captured | not captured | ['Leven_2019:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ipilimumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_2024` / `Hu_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 19:35 UTC</sub>
