<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl pedoth: this record has none, the second reading -0.462; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

<div class="pk-model-meta" hidden drug="ipilimumab" model-id="Ipilimumab_Hu2024_reference" status="accepted_with_caveats" stale="false" population="pediatric and adult oncology patients" measured-compound="ipilimumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL REF (mL/h) | `Q22` · CL | 13.5 | mL/h | 3.75e-09 | [ml] / [h] | 0.2.07 | llm_confirmed (0.6) | psp413098-tbl-0005:row2:col2, psp413098-tbl-0005:row2:col3 | — | 0.108 (0.00604% RSE) |
| VC REF (L) | `Q63` · V1 | 4.01 | L | 0.00401 | [l] | 0.0434 | llm_confirmed (0.6) | psp413098-tbl-0005:row3:col2, psp413098-tbl-0005:row3:col3, Hu_2024_table_4:row2:col2, Hu_2024_table_4:row2:col3 | — | 0.0751 (0.00764% RSE) |
| Q REF (mL/h) | `Q30` · Q | 35.9 | mL/h | 9.972222222222222e-09 | [ml] / [h] | 1.61 | llm (0.6) | psp413098-tbl-0005:row4:col2, psp413098-tbl-0005:row4:col3, Hu_2024_table_4:row3:col2, Hu_2024_table_4:row3:col3 | — | not captured |
| VP REF (L) | `Q64` · V2 | 2.77 | L | 0.00277 | [l] | 0.0701 | llm_confirmed (0.6) | psp413098-tbl-0005:row5:col2, psp413098-tbl-0005:row5:col3, Hu_2024_table_4:row4:col2, Hu_2024_table_4:row4:col3 | — | not captured |
| cl_sex | `Q900` · cl_sex | -0.0998 | not captured | not captured | not captured | 0.0184 | not captured (not captured) | Hu_2024_table_4:row7:col2, Hu_2024_table_4:row7:col3 | — | not captured |
| vc_sex | `Q900` · vc_sex | 0.0195 | not captured | not captured | not captured | 0.0186 | not captured (not captured) | Hu_2024_table_4:row12:col2, Hu_2024_table_4:row12:col3 | — | not captured |
| T50 (h) | `Q57` · t1/2z | 2670 | h | 9612000.0 | [h] | 442 | llm (0.6) | Hu_2024_table_4:row14:col2, Hu_2024_table_4:row14:col3 | — | not captured |
| theta_cl_egfr_power | `Q900` · theta_cl_egfr_power | 0.0982 | not captured | not captured | not captured | 0.0357 | not captured (not captured) | Hu_2024_table_4:row6:col2, Hu_2024_table_4:row6:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- column 'parameter note' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CL LBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row6:col2', 'psp413098-tbl-0005:row6:col3'])
- dropped duplicate Q63 ('VC LBM', value '0.932') — already have one for this compound
- dropped unlinked row (NIL): 'CL CNST' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row8:col2', 'psp413098-tbl-0005:row8:col3'])
- dropped duplicate Q22 ('CL OTH', value '0.00699') — already have one for this compound
- dropped duplicate Q22 ('CL PEDOTH', value '-0.462') — already have one for this compound
- dropped duplicate Q22 ('CL PEDCNST', value '-0.801') — already have one for this compound
- dropped duplicate Q22 ('CL PEDMEL', value '-0.347') — already have one for this compound
- dropped duplicate Q22 ('CL N1Q3', value '0.0417') — already have one for this compound
- dropped duplicate Q22 ('CL N3Q3', value '0.316') — already have one for this compound
- dropped duplicate Q63 ('VC PED', value '-0.277') — already have one for this compound
- dropped unlinked row (NIL): 'VC ADO' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0005:row16:col2', 'psp413098-tbl-0005:row16:col3', 'Hu_2024_table_4:row32:col2', 'Hu_2024_table_4:row32:col3'])
- dropped duplicate Q22 ('CL0 REF (mL/h)', value '9.66') — already have one for this compound
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL SEX' → Q900:cl_sex = -0.0998 (linear_fractional on Q22)
- dropped duplicate Q22 ('CL PS', value '0.166') — already have one for this compound
- dropped duplicate Q22 ('CL RAAA', value '0.0693') — already have one for this compound
- dropped duplicate Q22 ('CL RAAS', value '0.00333') — already have one for this compound
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'EMAX REF' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row13:col2', 'Hu_2024_table_4:row13:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row15:col2', 'Hu_2024_table_4:row15:col3'])
- dropped duplicate Q22 ('CL HL', value '-0.382') — already have one for this compound
- dropped duplicate Q22 ('CL GBM', value '-0.578') — already have one for this compound
- dropped duplicate Q22 ('CL PEDST', value '-0.580') — already have one for this compound
- dropped duplicate Q22 ('CL PEDHL', value '-0.411') — already have one for this compound
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped duplicate Q22 ('CL BVCO', value '0.132') — already have one for this compound
- dropped unlinked row (NIL): 'EMAX PS' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row25:col2', 'Hu_2024_table_4:row25:col3'])
- dropped PD-category row 'EMAX IPICO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row26:col2', 'Hu_2024_table_4:row26:col3'])
- dropped unlinked row (NIL): 'EMAX HL' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_4:row27:col2', 'Hu_2024_table_4:row27:col3'])
- dropped PD-category row 'EMAX OTH' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row28:col2', 'Hu_2024_table_4:row28:col3'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Hu_2024_table_4:row29:col2', 'Hu_2024_table_4:row29:col3'])
- dropped duplicate Q22 ('CL ADOST', value '-0.223') — already have one for this compound
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number 10.7 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number 22.2 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 16.7 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 162 (source ['psp413098-tbl-0005:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ipilimumab
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413098-tbl-0005:row2:col4 = '13.1 to 13.9'
- unparsed cell psp413098-tbl-0005:row3:col4 = '3.84 to 3.96'
- unparsed cell psp413098-tbl-0005:row4:col4 = '31.2 to 40.4'
- unparsed cell psp413098-tbl-0005:row5:col4 = '3.31 to 3.63'
- unparsed cell psp413098-tbl-0005:row6:col4 = '0.684 to 0.894'
- unparsed cell psp413098-tbl-0005:row7:col4 = '0.805 to 0.943'
- unparsed cell psp413098-tbl-0005:row8:col4 = '−1.12 to −0.199'
- unparsed cell psp413098-tbl-0005:row9:col4 = '−1.24 to −0.154'
- unparsed cell psp413098-tbl-0005:row10:col1 = 'Pediatric (&lt;18 years) other solid tumors on CL'
- unparsed cell psp413098-tbl-0005:row10:col4 = '−0.677 to −0.248'
- unparsed cell psp413098-tbl-0005:row11:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell psp413098-tbl-0005:row11:col4 = '−1.04 to −0.294'
- unparsed cell psp413098-tbl-0005:row12:col1 = 'Pediatric (&lt;18 years) melanoma on CL'
- unparsed cell psp413098-tbl-0005:row12:col4 = '−0.557 to −0.138'
- unparsed cell psp413098-tbl-0005:row13:col4 = '−0.00318 to 0.0866'
- unparsed cell psp413098-tbl-0005:row14:col4 = '−0.0390 to 0.670'
- unparsed cell psp413098-tbl-0005:row15:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell psp413098-tbl-0005:row15:col4 = '−0.404 to −0.188'
- unparsed cell psp413098-tbl-0005:row16:col1 = 'Adolescents (12–17) years on VC'
- unparsed cell psp413098-tbl-0005:row16:col4 = '−0.283 to −0.150'
- unparsed cell psp413098-tbl-0005:row18:col4 = '0.130 to 0.163'
- unparsed cell psp413098-tbl-0005:row19:col4 = '0.0390 to 0.0672'
- unparsed cell psp413098-tbl-0005:row20:col4 = '0.0178 to 0.0339'
- unparsed cell psp413098-tbl-0005:row22:col4 = '0.171 to 0.199'
- unparsed cell psp413098-tbl-0005:row23:col4 = '0.805 to 1.48'
- unparsed cell Hu_2024_table_4:row1:col4 = '8.98 to 10.3'
- unparsed cell Hu_2024_table_4:row2:col4 = '3.93 to 4.10'
- unparsed cell Hu_2024_table_4:row3:col4 = '32.8 to 39.2'
- unparsed cell Hu_2024_table_4:row4:col4 = '2.62 to 2.93'
- unparsed cell Hu_2024_table_4:row5:col4 = '0.566 to 0.693'
- unparsed cell Hu_2024_table_4:row6:col4 = '0.0206 to 0.174'
- unparsed cell Hu_2024_table_4:row7:col4 = '−0.135 to −0.0630'
- unparsed cell Hu_2024_table_4:row8:col4 = '0.128 to 0.207'
- unparsed cell Hu_2024_table_4:row9:col4 = '−0.0237 to 0.159'
- unparsed cell Hu_2024_table_4:row10:col4 = '−0.0693 to 0.0786'
- unparsed cell Hu_2024_table_4:row11:col4 = '0.872 to 1.00'
- unparsed cell Hu_2024_table_4:row12:col4 = '−0.0168 to 0.0578'
- unparsed cell Hu_2024_table_4:row13:col4 = '−0.385 to −0.184'
- unparsed cell Hu_2024_table_4:row14:col4 = '1890 to 3750'
- unparsed cell Hu_2024_table_4:row15:col4 = '1.69 to 3.71'
- unparsed cell Hu_2024_table_4:row16:col4 = '−0.447 to −0.321'
- unparsed cell Hu_2024_table_4:row17:col4 = '−0.643 to −0.493'
- unparsed cell Hu_2024_table_4:row18:col4 = '−0.0679 to 0.0789'
- unparsed cell Hu_2024_table_4:row19:col1 = 'Pediatric (&lt;12 years) solid tumors on CL'
- unparsed cell Hu_2024_table_4:row19:col4 = '−0.761 to −0.406'
- unparsed cell Hu_2024_table_4:row20:col1 = 'Pediatric (&lt;18 years) lymphoma on CL'
- unparsed cell Hu_2024_table_4:row20:col4 = '−0.554 to −0.227'
- unparsed cell Hu_2024_table_4:row21:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell Hu_2024_table_4:row21:col4 = '−0.930 to −0.654'
- unparsed cell Hu_2024_table_4:row22:col4 = '−0.00235 to 0.208'
- unparsed cell Hu_2024_table_4:row23:col4 = '0.278 to 0.416'
- unparsed cell Hu_2024_table_4:row24:col4 = '−0.0572 to 0.282'
- unparsed cell Hu_2024_table_4:row25:col4 = '−0.263 to −0.0708'
- unparsed cell Hu_2024_table_4:row26:col4 = '−0.361 to 0.0274'
- unparsed cell Hu_2024_table_4:row27:col4 = '0.0391 to 0.233'
- unparsed cell Hu_2024_table_4:row28:col4 = '−0.0210 to 0.263'
- unparsed cell Hu_2024_table_4:row29:col1 = 'Pediatric (&lt;18 years) CNS tumors on E max'
- unparsed cell Hu_2024_table_4:row29:col4 = '0.439 to 1.03'
- unparsed cell Hu_2024_table_4:row30:col1 = 'Adolescent (12–17 years) solid tumors on CL'
- unparsed cell Hu_2024_table_4:row30:col4 = '−0.393 to −0.0655'
- unparsed cell Hu_2024_table_4:row31:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell Hu_2024_table_4:row31:col4 = '−0.364 to −0.181'
- unparsed cell Hu_2024_table_4:row32:col1 = 'Adolescents (12–17 years) on VC'
- unparsed cell Hu_2024_table_4:row32:col4 = '−0.322 to −0.222'
- unparsed cell Hu_2024_table_4:row34:col4 = '0.0957 to 0.120'
- unparsed cell Hu_2024_table_4:row35:col4 = '0.0607 to 0.0904'
- unparsed cell Hu_2024_table_4:row36:col4 = '0.0816 to 0.262'
- unparsed cell Hu_2024_table_4:row37:col4 = '0.0163 to 0.0281'
- unparsed cell Hu_2024_table_4:row39:col4 = '0.191 to 0.206'
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
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413098-tbl-0005:row4:col2', 'psp413098-tbl-0005:row4:col3', 'Hu_2024_table_4:row3:col2', 'Hu_2024_table_4:row3:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Hu_2024_table_4:row14:col2', 'Hu_2024_table_4:row14:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'psp413098-tbl-0005:row3:col3', 'Hu_2024_table_4:row2:col2', 'Hu_2024_table_4:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413098-tbl-0005:row5:col2', 'psp413098-tbl-0005:row5:col3', 'Hu_2024_table_4:row4:col2', 'Hu_2024_table_4:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.5 | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['psp413098-tbl-0005:row2:col2', 'psp413098-tbl-0005:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.01 L | not captured | not captured | ['psp413098-tbl-0005:row3:col2', 'psp413098-tbl-0005:row3:col3', 'Hu_2024_table_4:row2:col2', 'Hu_2024_table_4:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['psp413098-tbl-0005:row5:col2', 'psp413098-tbl-0005:row5:col3', 'Hu_2024_table_4:row4:col2', 'Hu_2024_table_4:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=ipilimumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ipilimumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hu_2024` / `Hu_2024::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ipilimumab/models/modelica/Ipilimumab_Hu2024_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ipilimumab/models/modelica/Ipilimumab_Hu2024_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ipilimumab/models/modelica/Ipilimumab_Hu2024_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_modelica.zip" download>Ipilimumab_Hu2024_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_fmi.zip" download>Ipilimumab_Hu2024_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab.zip" download>Ipilimumab_Hu2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_matlab_simbio.zip" download>Ipilimumab_Hu2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sbml.zip" download>Ipilimumab_Hu2024_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_cellml.zip" download>Ipilimumab_Hu2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference.svg" alt="Ipilimumab_Hu2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7–700 mg.

<dbs-fmusim paramsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference/Ipilimumab_Hu2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Ipilimumab_Hu2024_reference_params.json` · controls `Ipilimumab_Hu2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:50 UTC</sub>
