<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;nivolumab&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nivolumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/Nivolumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nivolumab — `Nivolumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (Vnorm), so that value has no SI equivalent. Extracted — nivolumab: CL 9.66 mL/h, V1 4.01 L, Q 35.9 mL/h, V 2.77 L, Vss 0.932 L, CLH -0.382 L/h, CL_PD -0.58 L/h, Vnorm 0.789 %, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl pedst: this record has -0.580, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

<div class="pk-model-meta" hidden drug="nivolumab" model-id="Nivolumab_Hu2024_reference" status="rejected" stale="false" population="pediatric and adult oncology patients" measured-compound="nivolumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL0 REF (mL/h) | `Q22` · CL | 9.66 | mL/h | 2.683333333333333e-09 | [ml] / [h] | 0.279 | llm (0.6) | psp413098-tbl-0004:row2:col2 | — | 0.108 (0.329% RSE) |
| VC REF (L) | `Q63` · V1 | 4.01 | L | 0.00401 | [l] | 0.0434 | llm_confirmed (0.6) | psp413098-tbl-0004:row3:col2, Hu_2024_table_5:row2:col2 | — | 0.0751 (0.274% RSE) |
| Q REF (mL/h) | `Q30` · Q | 35.9 | mL/h | 9.972222222222222e-09 | [ml] / [h] | 1.61 | llm (0.6) | psp413098-tbl-0004:row4:col2, Hu_2024_table_5:row3:col2 | — | not captured |
| VP REF (L) | `Q61` · V | 2.77 | L | 0.00277 | [l] | 0.0701 | llm_corrected (0.6) | psp413098-tbl-0004:row5:col2, Hu_2024_table_5:row4:col2 | — | not captured |
| cl_egfr | `Q900` · cl_egfr | 0.0982 | not captured | not captured | not captured | 0.0357 | not captured (not captured) | psp413098-tbl-0004:row7:col2 | — | not captured |
| VC LBM | `Q65` · Vss | 0.932 | L | 0.0009320000000000001 | L | 0.0325 | llm_corrected (0.6) | psp413098-tbl-0004:row12:col2, Hu_2024_table_5:row6:col2 | — | not captured |
| vc_sex | `Q900` · vc_sex | 0.0195 | not captured | not captured | not captured | 0.0186 | not captured (not captured) | psp413098-tbl-0004:row13:col2 | — | not captured |
| CL HL | `Q25` · CLH | -0.382 | L/h | -1.0611111111111112e-07 | L/h | 0.0331 | llm_corrected (0.6) | psp413098-tbl-0004:row17:col2 | — | not captured |
| CL PEDST | `Q358` · CL_PD | -0.580 | L/h | -1.611111111111111e-07 | L/h | 0.0893 | llm_corrected (0.6) | psp413098-tbl-0004:row20:col2 | — | not captured |
| CL LBM | `Q352` · Vnorm | 0.789 | % | not captured | [%] | not captured | llm_corrected (0.6) | Hu_2024_table_5:row5:col2 | — | not captured |
| theta_cl_sex_cl | `Q900` · theta_cl_sex_cl | -0.0998 | not captured | not captured | not captured | 0.0184 | not captured (not captured) | psp413098-tbl-0004:row8:col2 | — | not captured |
| Peripheral (Vp) | `Q64` · V2 | 4.15 | L | 0.00415 | L | not captured | review_gapfill (0.7) | Leven_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- conflicting source units for 'CL WTB': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL eGFR': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL SEX': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL PS': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAA': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL RAAS': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL HL': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL GBM': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL OTH': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDST': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDHL': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL PEDCNST': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL I1Q3': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL I3Q3': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL BVCO': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- conflicting source units for 'CL ADOST': [{'unit': '0', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}, {'unit': '%', 'source': 'psp413098-tbl-0004:note', 'scope': 'note'}]
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL eGFR' → Q900:cl_egfr = 0.0982 (power on Q22)
- dropped duplicate Q22 ('CL PS', value '0.166') — already have one for this compound
- dropped unlinked row (NIL): 'CL RAAA' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row10:col2'])
- dropped unlinked row (NIL): 'CL RAAS' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row11:col2'])
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped PD-category row 'EMAX REF' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row14:col2'])
- dropped unlinked row (NIL): 'T50 (h)' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row15:col2'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row16:col2'])
- dropped unlinked row (NIL): 'CL GBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row18:col2'])
- dropped duplicate Q22 ('CL OTH', value '0.00699') — already have one for this compound
- dropped duplicate Q358 ('CL PEDHL', value '-0.411') — already have one for this compound
- dropped unlinked row (NIL): 'CL PEDCNST' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row22:col2', 'Hu_2024_table_5:row10:col2'])
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped duplicate Q22 ('CL BVCO', value '0.132') — already have one for this compound
- dropped PD-category row 'EMAX PS' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row26:col2'])
- dropped PD-category row 'EMAX IPICO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row27:col2'])
- dropped PD-category row 'EMAX HL' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row28:col2'])
- dropped PD-category row 'EMAX OTH' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row29:col2'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row30:col2'])
- dropped duplicate Q22 ('CL ADOST', value '-0.223') — already have one for this compound
- dropped duplicate Q358 ('VC PED', value '-0.277') — already have one for this compound
- dropped duplicate Q63 ('VC ADO', value '-0.273') — already have one for this compound
- dropped duplicate Q22 ('CL REF (mL/h)', value '13.5') — already have one for this compound
- unit_dimension_mismatch: 'CL LBM' → Q352 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'CL CNST' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL CNST', value '-0.661') — already have one for this compound
- unit_dimension_mismatch: 'CL PEDOTH' → Q358 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q358 ('CL PEDOTH', value '-0.462') — already have one for this compound
- dropped unlinked row (NIL): 'CL PEDMEL' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_5:row11:col2'])
- dropped unlinked row (NIL): 'CL N1Q3' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_5:row12:col1', 'Hu_2024_table_5:row12:col2'])
- dropped unlinked row (NIL): 'CL N3Q3' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_5:row13:col1', 'Hu_2024_table_5:row13:col2'])
- implicit units: 'VC LBM' → L (from the popPK convention: 'VC denotes volume of distribution. In population pharmacokinetic modeling, volumes are standardly reported in liters (L)')
- implicit units: 'CL HL' → L/h (from the popPK convention: 'CL denotes clearance. In population pharmacokinetic modeling, clearance parameters are standardly reported in liters per')
- implicit units: 'CL PEDST' → L/h (from the popPK convention: 'CL denotes clearance. In population pharmacokinetic modeling, clearance parameters are standardly reported in liters per')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nivolumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'nivolumab' — its concentrations stay mass-only
- gap-filled Q64 (V2) from Leven_2019's review values (primary lacked it)

**Extraction notes:**
- table psp413098-tbl-0004: conflicting_units
- table psp413098-tbl-0004: unparsed_numeric_cell
- table Hu_2024_table_5: unbound_uncertainty
- table Hu_2024_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (41 record(s), model stage 'full')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.65 (13/20 fields) | 7 |
| `gpt-oss:120b` | not confirmed | 0.571 (12/21 fields) | 9 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl pedst]` | -0.580 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_egfr]` | 0.0982 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q ref]` | 35.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t50]` | not captured | 2670 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr_power]` | not captured | 0.0982 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc ref].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vp ref]` | not captured | 3.47 | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[cl hl]` | not captured | -0.382 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl pedst]` | -0.580 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_egfr]` | 0.0982 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_egfr_power]` | not captured | 0.0982 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc ref].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss:120b` | `parameters[vp ref]` | not captured | 3.47 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | nivolumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nivolumab | unknown | mismatch |

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
| C2_base_sign_Q358 | fail | not captured | -0.58 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0004:row2:col2'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0004:row17:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0004:row4:col2', 'Hu_2024_table_5:row3:col2'] |
| C5_dimension_Q352 | fail | dimensionless | % | not captured | not captured | ['Hu_2024_table_5:row5:col2'] |
| C5_dimension_Q358 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0004:row20:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0004:row5:col2', 'Hu_2024_table_5:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0004:row3:col2', 'Hu_2024_table_5:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Leven_2019:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0004:row12:col2', 'Hu_2024_table_5:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.66 | not captured | not captured | ['psp413098-tbl-0004:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00966 L/h | not captured | not captured | ['psp413098-tbl-0004:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['psp413098-tbl-0004:row5:col2', 'Hu_2024_table_5:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.01 L | not captured | not captured | ['psp413098-tbl-0004:row3:col2', 'Hu_2024_table_5:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.15 L | not captured | not captured | ['Leven_2019:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.932 L | not captured | not captured | ['psp413098-tbl-0004:row12:col2', 'Hu_2024_table_5:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nivolumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_2024` / `Hu_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:46 UTC</sub>
