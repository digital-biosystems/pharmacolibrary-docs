<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;nivolumab&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/&quot;},{&quot;label&quot;:&quot;Hu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nivolumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nivolumab/Nivolumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nivolumab — `Nivolumab_Hu2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the peritoneal dialysis clearance parameter for nivolumab has an implausible negative value of -0.580.

<div class="pk-model-meta" hidden drug="nivolumab" model-id="Nivolumab_Hu2024_reference" status="rejected" stale="false" population="pediatric oncology patients" measured-compound="nivolumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Hu Z, Liu S, Zhao Y, Du S, Hamuro L, Shen J et al. Nivolumab and ipilimumab population pharmacokinetics in support of pediatric dose recommendations-Going beyond the body-size effect. CPT: pharmacometrics & systems pharmacology 13(3):476–493 (2024).
  ·  DOI: [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098)

## Population and dosing

**Population:** pediatric oncology patients · condition oncology · age group mixed.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL0 REF (mL/h) | CL | 9.66 | mL/h | 0.279 | 0.147 (0.00853% RSE) |
| VC REF (L) | V | 3.90 | L | 0.0307 |  |
| Q REF (mL/h) | Q | 35.8 | mL/h | 2.33 |  |
| cl_egfr | cl_egfr | 0.0982 |  | 0.0357 |  |
| vc_sex | vc_sex | 0.0195 |  | 0.0186 |  |
| CL PEDST | CL_PD | -0.580 |  | 0.0893 |  |
| theta_cl_sex_cl | theta_cl_sex_cl | -0.0998 |  | 0.0184 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the peritoneal dialysis clearance parameter for nivolumab has an implausible negative value of -0.580.**

The parameter labeled 'CL PEDST' is defined as drug clearance by peritoneal dialysis, yet its value is -0.580. Clearance parameters must be non-negative, making this value physiologically impossible. A second reader disagreed on the assignment of several covariate effects, noting that the value 0.0982 was recorded as a generic covariate effect rather than a specific power term, and that a different negative value of -0.382 was expected for a different clearance parameter. Extracted — nivolumab: CL 9.66 mL/h, V 3.9 L, Q 35.8 mL/h, CL_PD -0.58.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl pedst: this record has -0.580, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL0 REF (mL/h) | `Q22` · CL | 9.66 | mL/h | 2.683e-09 | m3/s | ml/h | 0.279 | llm (0.6) | psp413098-tbl-0004:row2:col2, psp413098-tbl-0004:row2:col3 | 0.147 (0.00853% RSE) |
| VC REF (L) | `Q61` · V | 3.90 | L | 0.0039 | m3 | l | 0.0307 | llm_corrected (0.6) | psp413098-tbl-0004:row3:col2, psp413098-tbl-0004:row3:col3, Hu_2024_table_5:row2:col2, Hu_2024_table_5:row2:col3 |  |
| Q REF (mL/h) | `Q30` · Q | 35.8 | mL/h | 9.944e-09 | m3/s | ml/h | 2.33 | llm (0.6) | psp413098-tbl-0004:row4:col2, psp413098-tbl-0004:row4:col3, Hu_2024_table_5:row3:col2, Hu_2024_table_5:row3:col3 |  |
| cl_egfr | `Q900` · cl_egfr | 0.0982 |  |  |  |  | 0.0357 |  | psp413098-tbl-0004:row7:col2, psp413098-tbl-0004:row7:col3 |  |
| vc_sex | `Q900` · vc_sex | 0.0195 |  |  |  |  | 0.0186 |  | psp413098-tbl-0004:row13:col2, psp413098-tbl-0004:row13:col3 |  |
| CL PEDST | `Q358` · CL_PD | -0.580 |  |  |  |  | 0.0893 | llm_corrected (0.6) | psp413098-tbl-0004:row20:col2, psp413098-tbl-0004:row20:col3 |  |
| theta_cl_sex_cl | `Q900` · theta_cl_sex_cl | -0.0998 |  |  |  |  | 0.0184 |  | psp413098-tbl-0004:row8:col2, psp413098-tbl-0004:row8:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- column 'parameter note' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q61 ('VP REF (L)', value '3.47') — already have one for this compound
- dropped duplicate Q22 ('CL WTB', value '0.630') — already have one for this compound
- covariate level 'CL eGFR' → Q900:cl_egfr = 0.0982 (power on Q22)
- dropped duplicate Q22 ('CL PS', value '0.166') — already have one for this compound
- dropped duplicate Q22 ('CL RAAA', value '0.0693') — already have one for this compound
- dropped duplicate Q22 ('CL RAAS', value '0.00333') — already have one for this compound
- dropped unlinked row (NIL): 'VC LBM' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row12:col2', 'psp413098-tbl-0004:row12:col3', 'Hu_2024_table_5:row6:col2', 'Hu_2024_table_5:row6:col3'])
- covariate level 'VC SEX' → Q900:vc_sex = 0.0195 (linear_fractional on Q22)
- dropped PD-category row 'EMAX REF' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row14:col2', 'psp413098-tbl-0004:row14:col3'])
- dropped unlinked row (NIL): 'T50 (h)' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row15:col2', 'psp413098-tbl-0004:row15:col3'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row16:col2', 'psp413098-tbl-0004:row16:col3'])
- dropped duplicate Q22 ('CL HL', value '-0.382') — already have one for this compound
- dropped duplicate Q22 ('CL GBM', value '-0.578') — already have one for this compound
- dropped duplicate Q22 ('CL OTH', value '-0.698') — already have one for this compound
- dropped duplicate Q358 ('CL PEDHL', value '-0.411') — already have one for this compound
- dropped duplicate Q22 ('CL PEDCNST', value '-0.668') — already have one for this compound
- dropped duplicate Q22 ('CL I1Q3', value '0.0973') — already have one for this compound
- dropped duplicate Q22 ('CL I3Q3', value '0.349') — already have one for this compound
- dropped duplicate Q22 ('CL BVCO', value '0.132') — already have one for this compound
- dropped PD-category row 'EMAX PS' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row26:col2', 'psp413098-tbl-0004:row26:col3'])
- dropped PD-category row 'EMAX IPICO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row27:col2', 'psp413098-tbl-0004:row27:col3'])
- dropped PD-category row 'EMAX HL' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row28:col2', 'psp413098-tbl-0004:row28:col3'])
- dropped PD-category row 'EMAX OTH' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row29:col2', 'psp413098-tbl-0004:row29:col3'])
- dropped PD-category row 'EMAX PEDCNST' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413098-tbl-0004:row30:col2', 'psp413098-tbl-0004:row30:col3'])
- dropped duplicate Q22 ('CL ADOST', value '-0.223') — already have one for this compound
- dropped unlinked row (NIL): 'VC PED' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row32:col2', 'psp413098-tbl-0004:row32:col3', 'Hu_2024_table_5:row14:col2', 'Hu_2024_table_5:row14:col3'])
- dropped unlinked row (NIL): 'VC ADO' — extend the ontology if this is a real PK parameter (source ['psp413098-tbl-0004:row33:col2', 'psp413098-tbl-0004:row33:col3', 'Hu_2024_table_5:row15:col2', 'Hu_2024_table_5:row15:col3'])
- dropped duplicate Q22 ('CL REF (mL/h)', value '13.5') — already have one for this compound
- dropped duplicate Q22 ('CL LBM', value '0.789') — already have one for this compound
- dropped duplicate Q22 ('CL CNST', value '-0.661') — already have one for this compound
- dropped duplicate Q358 ('CL PEDOTH', value '-0.462') — already have one for this compound
- dropped unlinked row (NIL): 'CL PEDMEL' — extend the ontology if this is a real PK parameter (source ['Hu_2024_table_5:row11:col2', 'Hu_2024_table_5:row11:col3'])
- dropped duplicate Q22 ('CL N1Q3', value '0.0417') — already have one for this compound
- dropped duplicate Q22 ('CL N3Q3', value '0.316') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nivolumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: none found for 'nivolumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp413098-tbl-0004:row2:col4 = '8.98 to 10.3'
- unparsed cell psp413098-tbl-0004:row3:col4 = '3.93 to 4.10'
- unparsed cell psp413098-tbl-0004:row4:col4 = '32.8 to 39.2'
- unparsed cell psp413098-tbl-0004:row5:col4 = '2.62 to 2.93'
- unparsed cell psp413098-tbl-0004:row6:col4 = '0.566 to 0.693'
- unparsed cell psp413098-tbl-0004:row7:col4 = '0.0206 to 0.174'
- unparsed cell psp413098-tbl-0004:row8:col4 = '−0.135 to −0.0630'
- unparsed cell psp413098-tbl-0004:row9:col4 = '0.128 to 0.207'
- unparsed cell psp413098-tbl-0004:row10:col4 = '−0.0237 to 0.159'
- unparsed cell psp413098-tbl-0004:row11:col4 = '−0.0693 to 0.0786'
- unparsed cell psp413098-tbl-0004:row12:col4 = '0.872 to 1.00'
- unparsed cell psp413098-tbl-0004:row13:col4 = '−0.0168 to 0.0578'
- unparsed cell psp413098-tbl-0004:row14:col4 = '−0.385 to −0.184'
- unparsed cell psp413098-tbl-0004:row15:col4 = '1890 to 3750'
- unparsed cell psp413098-tbl-0004:row16:col4 = '1.69 to 3.71'
- unparsed cell psp413098-tbl-0004:row17:col4 = '−0.447 to −0.321'
- unparsed cell psp413098-tbl-0004:row18:col4 = '−0.643 to −0.493'
- unparsed cell psp413098-tbl-0004:row19:col4 = '−0.0679 to 0.0789'
- unparsed cell psp413098-tbl-0004:row20:col1 = 'Pediatric (&lt;12 years) solid tumors on CL'
- unparsed cell psp413098-tbl-0004:row20:col4 = '−0.761 to −0.406'
- unparsed cell psp413098-tbl-0004:row21:col1 = 'Pediatric (&lt;18 years) lymphoma on CL'
- unparsed cell psp413098-tbl-0004:row21:col4 = '−0.554 to −0.227'
- unparsed cell psp413098-tbl-0004:row22:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell psp413098-tbl-0004:row22:col4 = '−0.930 to −0.654'
- unparsed cell psp413098-tbl-0004:row23:col4 = '−0.00235 to 0.208'
- unparsed cell psp413098-tbl-0004:row24:col4 = '0.278 to 0.416'
- unparsed cell psp413098-tbl-0004:row25:col4 = '−0.0572 to 0.282'
- unparsed cell psp413098-tbl-0004:row26:col4 = '−0.263 to −0.0708'
- unparsed cell psp413098-tbl-0004:row27:col4 = '−0.361 to 0.0274'
- unparsed cell psp413098-tbl-0004:row28:col4 = '0.0391 to 0.233'
- unparsed cell psp413098-tbl-0004:row29:col4 = '−0.0210 to 0.263'
- unparsed cell psp413098-tbl-0004:row30:col1 = 'Pediatric (&lt;18 years) CNS tumors on E max'
- unparsed cell psp413098-tbl-0004:row30:col4 = '0.439 to 1.03'
- unparsed cell psp413098-tbl-0004:row31:col1 = 'Adolescent (12–17 years) solid tumors on CL'
- unparsed cell psp413098-tbl-0004:row31:col4 = '−0.393 to −0.0655'
- unparsed cell psp413098-tbl-0004:row32:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell psp413098-tbl-0004:row32:col4 = '−0.364 to −0.181'
- unparsed cell psp413098-tbl-0004:row33:col1 = 'Adolescents (12–17 years) on VC'
- unparsed cell psp413098-tbl-0004:row33:col4 = '−0.322 to −0.222'
- unparsed cell psp413098-tbl-0004:row35:col4 = '0.0957 to 0.120'
- unparsed cell psp413098-tbl-0004:row36:col4 = '0.0607 to 0.0904'
- unparsed cell psp413098-tbl-0004:row37:col4 = '0.0816 to 0.262'
- unparsed cell psp413098-tbl-0004:row38:col4 = '0.0163 to 0.0281'
- unparsed cell psp413098-tbl-0004:row40:col4 = '0.191 to 0.206'
- unparsed cell Hu_2024_table_5:row1:col4 = '13.1 to 13.9'
- unparsed cell Hu_2024_table_5:row2:col4 = '3.84 to 3.96'
- unparsed cell Hu_2024_table_5:row3:col4 = '31.2 to 40.4'
- unparsed cell Hu_2024_table_5:row4:col4 = '3.31 to 3.63'
- unparsed cell Hu_2024_table_5:row5:col4 = '0.684 to 0.894'
- unparsed cell Hu_2024_table_5:row6:col4 = '0.805 to 0.943'
- unparsed cell Hu_2024_table_5:row7:col4 = '−1.12 to −0.199'
- unparsed cell Hu_2024_table_5:row8:col4 = '−1.24 to −0.154'
- unparsed cell Hu_2024_table_5:row9:col1 = 'Pediatric (&lt;18 years) other solid tumors on CL'
- unparsed cell Hu_2024_table_5:row9:col4 = '−0.677 to −0.248'
- unparsed cell Hu_2024_table_5:row10:col1 = 'Pediatric (&lt;18 years) CNS tumors on CL'
- unparsed cell Hu_2024_table_5:row10:col4 = '−1.04 to −0.294'
- unparsed cell Hu_2024_table_5:row11:col1 = 'Pediatric (&lt;18 years) melanoma on CL'
- unparsed cell Hu_2024_table_5:row11:col4 = '−0.557 to −0.138'
- unparsed cell Hu_2024_table_5:row12:col4 = '−0.00318 to 0.0866'
- unparsed cell Hu_2024_table_5:row13:col4 = '−0.0390 to 0.670'
- unparsed cell Hu_2024_table_5:row14:col1 = 'Pediatric (&lt;12 years) on VC'
- unparsed cell Hu_2024_table_5:row14:col4 = '−0.404 to −0.188'
- unparsed cell Hu_2024_table_5:row15:col1 = 'Adolescents (12–17) years on VC'
- unparsed cell Hu_2024_table_5:row15:col4 = '−0.283 to −0.150'
- unparsed cell Hu_2024_table_5:row17:col4 = '0.130 to 0.163'
- unparsed cell Hu_2024_table_5:row18:col4 = '0.0390 to 0.0672'
- unparsed cell Hu_2024_table_5:row19:col4 = '0.0178 to 0.0339'
- unparsed cell Hu_2024_table_5:row21:col4 = '0.171 to 0.199'
- unparsed cell Hu_2024_table_5:row22:col4 = '0.805 to 1.48'
- companion parameter table 5 transcribed (42 record(s), model stage 'full')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.65 (13/20 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl pedst]` | -0.580 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_egfr]` | 0.0982 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q ref]` | 35.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t50]` |  | 2670 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr_power]` |  | 0.0982 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc ref].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[vp ref]` |  | 3.47 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q358 | fail |  | -0.58 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413098-tbl-0004:row2:col2', 'psp413098-tbl-0004:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413098-tbl-0004:row4:col2', 'psp413098-tbl-0004:row4:col3', 'Hu_2024_table_5:row3:col2', 'Hu_2024_table_5:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp413098-tbl-0004:row3:col2', 'psp413098-tbl-0004:row3:col3', 'Hu_2024_table_5:row2:col2', 'Hu_2024_table_5:row2:col3'] |
| C5_unit_missing_Q358 | fail | [length] ** 3 / [time] |  | ['psp413098-tbl-0004:row20:col2', 'psp413098-tbl-0004:row20:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.66 | ['psp413098-tbl-0004:row2:col2', 'psp413098-tbl-0004:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00966 L/h | ['psp413098-tbl-0004:row2:col2', 'psp413098-tbl-0004:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.9 L | ['psp413098-tbl-0004:row3:col2', 'psp413098-tbl-0004:row3:col3', 'Hu_2024_table_5:row2:col2', 'Hu_2024_table_5:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnivolumab%5D%20Nivolumab_Hu2024_reference&body=Drug%3A%20nivolumab%0ARecord%3A%20Nivolumab_Hu2024_reference%0APaper%3A%20Hu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nivolumab/Nivolumab_Hu2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:35 UTC</sub>
