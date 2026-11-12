<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;datopotamab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_datopotamab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Hong_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# datopotamab deruxtecan — `DatopotamabDeruxtecan_Hong2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-11-07 16:53 UTC (Needs review), but the paper was screened again on 2026-10-13 13:25 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Km, Vmax, Qd and kel have no unit.

<div class="pk-model-meta" hidden drug="datopotamab deruxtecan" model-id="DatopotamabDeruxtecan_Hong2025_reference" status="needs_review" stale="true" population="patients with advanced solid tumors" measured-compound="datopotamab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Hong Y, Peigné S, Pan Υ, Friberg Hietala S, McLaughlin A, Tajima N et al. Population Pharmacokinetic Analysis of Datopotamab Deruxtecan (Dato-DXd), a TROP2-Directed Antibody-Drug Conjugate, in Patients With Advanced Solid Tumors. CPT: pharmacometrics & systems pharmacology 14(12):2149–2160 (2025).
  ·  DOI: [10.1002/psp4.70118](https://doi.org/10.1002/psp4.70118)

## Population and dosing

**Population:** patients with advanced solid tumors · condition advanced solid tumors · age group adult.

**Dosing:** 280, 420, 560, 37800 mg, iv, multiple, every 432 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 14 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLlinDatoDXd | CL | 0.386 | L/h | 2.34 |  |
| V cDatoDXd | equation variable | 3.06 |  | 0.959 |  |
| Q DatoDXd | Q | 0.422 | L/h | 1.92 |  |
| V pDatoDXd | V | 2.88 | L | 1.62 |  |
| K m | Km | 4490 |  | 4.06 |  |
| V max | Vmax | 8410 |  | 3.07 | 0.192 (5.78% RSE) |
| wt_on_v_cdatodxd | wt_on_v_cdatodxd | 0.415 |  | 7.12 |  |
| wt_on_v_pdatodxd | wt_on_v_pdatodxd | 0.311 |  | 20.4 |  |
| age_on_cllindatodxd | age_on_cllindatodxd | -0.306 |  | 20.9 |  |
| albumin_on_cllindatodxd | albumin_on_cllindatodxd | -0.788 |  | 9.41 |  |
| region_japan_on_cllindatodxd | region_japan_on_cllindatodxd | -0.219 |  | 10.8 |  |
| female_sex_on_cllindatodxd | female_sex_on_cllindatodxd | -0.263 |  | 7.24 |  |
| Tumor size on V max | Qd | 0.125 |  | 12.4 |  |
| female_sex_on_v_cdatodxd | female_sex_on_v_cdatodxd | -0.160 |  | 7.06 |  |
| CLDXd | CL | 2.66 | L/h | 1.57 |  |
| V cDXd | V | 25.1 | L | 2.24 |  |
| Factor1 | equation variable | 0.696 |  | 0.750 |  |
| β | kel | 0.259 |  | 2.85 |  |
| wt_on_cldxd | wt_on_cldxd | 0.298 |  |  |  |
| wt_on_v_cdxd | wt_on_v_cdxd | 0.530 |  |  |  |
| albumin_on_cldxd | albumin_on_cldxd | 0.343 |  | 13.9 |  |
| region_europe_on_cldxd | region_europe_on_cldxd | 0.240 |  | 12.1 |  |
| female_sex_on_v_cdxd | female_sex_on_v_cdxd | -0.185 |  | 10.6 |  |
| theta_equation_variable_wt | theta_equation_variable_wt | 0.750 |  |  |  |
| theta_q312_region | theta_q312_region | 0.196 |  | 15.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.26). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Km, Vmax, Qd and kel have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — datopotamab deruxtecan: CL 0.386 L/h, Q 0.422 L/h, V 2.88 L, Km 4.49e+03, Vmax 8.41e+03, Qd 0.125; DXd: CL 2.66 L/h, V 25.1 L, kel 0.259.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has datopotamab_deruxtecan, the second reading unknown; it also differs on 36 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLlinDatoDXd | `Q22` · CL | 0.386 | L/h | 1.072e-07 | m3/s | L/h | 2.34 | llm (0.6) | psp470118-tbl-0001:row1:col2, psp470118-tbl-0001:row1:col4 |  |
| V cDatoDXd | `Q900` · equation variable | 3.06 |  |  |  |  | 0.959 | llm (0.6) | psp470118-tbl-0001:row2:col2, psp470118-tbl-0001:row2:col4 |  |
| Q DatoDXd | `Q30` · Q | 0.422 | L/h | 1.172e-07 | m3/s | L/h | 1.92 | exact (1) | psp470118-tbl-0001:row3:col2, psp470118-tbl-0001:row3:col4 |  |
| V pDatoDXd | `Q61` · V | 2.88 | L | 0.00288 | m3 | L | 1.62 | llm (0.6) | psp470118-tbl-0001:row4:col2, psp470118-tbl-0001:row4:col4 |  |
| K m | `Q1` · Km | 4490 |  |  |  |  | 4.06 | space_fold (0.95) | psp470118-tbl-0001:row5:col2, psp470118-tbl-0001:row5:col4 |  |
| V max | `Q66` · Vmax | 8410 |  |  |  |  | 3.07 | special_case (0.95) | psp470118-tbl-0001:row6:col2, psp470118-tbl-0001:row6:col4 | 0.192 (5.78% RSE) |
| wt_on_v_cdatodxd | `Q900` · wt_on_v_cdatodxd | 0.415 |  |  |  |  | 7.12 |  | psp470118-tbl-0001:row8:col2, psp470118-tbl-0001:row8:col4 |  |
| wt_on_v_pdatodxd | `Q900` · wt_on_v_pdatodxd | 0.311 |  |  |  |  | 20.4 |  | psp470118-tbl-0001:row9:col2, psp470118-tbl-0001:row9:col4 |  |
| age_on_cllindatodxd | `Q900` · age_on_cllindatodxd | -0.306 |  |  |  |  | 20.9 |  | psp470118-tbl-0001:row10:col2, psp470118-tbl-0001:row10:col4 |  |
| albumin_on_cllindatodxd | `Q900` · albumin_on_cllindatodxd | -0.788 |  |  |  |  | 9.41 |  | psp470118-tbl-0001:row11:col2, psp470118-tbl-0001:row11:col4 |  |
| region_japan_on_cllindatodxd | `Q900` · region_japan_on_cllindatodxd | -0.219 |  |  |  |  | 10.8 |  | psp470118-tbl-0001:row12:col2, psp470118-tbl-0001:row12:col4 |  |
| female_sex_on_cllindatodxd | `Q900` · female_sex_on_cllindatodxd | -0.263 |  |  |  |  | 7.24 |  | psp470118-tbl-0001:row13:col2, psp470118-tbl-0001:row13:col4 |  |
| Tumor size on V max | `Q364` · Qd | 0.125 |  |  |  |  | 12.4 | llm (0.6) | psp470118-tbl-0001:row14:col2, psp470118-tbl-0001:row14:col4 |  |
| female_sex_on_v_cdatodxd | `Q900` · female_sex_on_v_cdatodxd | -0.160 |  |  |  |  | 7.06 |  | psp470118-tbl-0001:row15:col2, psp470118-tbl-0001:row15:col4 |  |
| CLDXd | `Q22` · CL | 2.66 | L/h | 7.389e-07 | m3/s | L/h | 1.57 | exact (1) | Hong_2025_table_2:row0:col2, Hong_2025_table_2:row0:col4 |  |
| V cDXd | `Q61` · V | 25.1 | L | 0.0251 | m3 | L | 2.24 | exact (1) | Hong_2025_table_2:row1:col2, Hong_2025_table_2:row1:col4 |  |
| Factor1 | `Q900` · equation variable | 0.696 |  |  |  |  | 0.750 | llm (0.6) | Hong_2025_table_2:row2:col2, Hong_2025_table_2:row2:col4 |  |
| β | `Q47` · kel | 0.259 |  |  |  |  | 2.85 | exact (1) | Hong_2025_table_2:row3:col2, Hong_2025_table_2:row3:col4 |  |
| wt_on_cldxd | `Q900` · wt_on_cldxd | 0.298 |  |  |  |  |  |  | Hong_2025_table_2:row4:col2 |  |
| wt_on_v_cdxd | `Q900` · wt_on_v_cdxd | 0.530 |  |  |  |  |  |  | Hong_2025_table_2:row5:col2 |  |
| albumin_on_cldxd | `Q900` · albumin_on_cldxd | 0.343 |  |  |  |  | 13.9 |  | Hong_2025_table_2:row6:col2, Hong_2025_table_2:row6:col4 |  |
| region_europe_on_cldxd | `Q900` · region_europe_on_cldxd | 0.240 |  |  |  |  | 12.1 |  | Hong_2025_table_2:row8:col2, Hong_2025_table_2:row8:col4 |  |
| female_sex_on_v_cdxd | `Q900` · female_sex_on_v_cdxd | -0.185 |  |  |  |  | 10.6 |  | Hong_2025_table_2:row11:col2, Hong_2025_table_2:row11:col4 |  |
| theta_equation_variable_wt | `Q900` · theta_equation_variable_wt | 0.750 |  |  |  |  |  |  | psp470118-tbl-0001:row7:col2 |  |
| theta_q312_region | `Q900` · theta_q312_region | 0.196 |  |  |  |  | 15.6 |  | Hong_2025_table_2:row9:col2, Hong_2025_table_2:row9:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'shr(%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'shr (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- linked 'Q DatoDXd' as 'Q' → Q30 (Q) for  — compound marker removed
- covariate level 'WT on V cDatoDXd' → Q900:wt_on_v_cdatodxd = 0.415 (linear_fractional on Q22)
- covariate level 'WT on V pDatoDXd' → Q900:wt_on_v_pdatodxd = 0.311 (linear_fractional on Q22)
- covariate level 'Age on CLlinDatoDXd' → Q900:age_on_cllindatodxd = -0.306 (linear_fractional on Q22)
- covariate level 'Albumin on CLlinDatoDXd' → Q900:albumin_on_cllindatodxd = -0.788 (linear_fractional on Q22)
- covariate level 'Region Japan on CLlinDatoDXd' → Q900:region_japan_on_cllindatodxd = -0.219 (linear_fractional on Q22)
- covariate level 'Female sex on CLlinDatoDXd' → Q900:female_sex_on_cllindatodxd = -0.263 (linear_fractional on Q22)
- covariate level 'Female sex on V cDatoDXd' → Q900:female_sex_on_v_cdatodxd = -0.160 (linear_fractional on Q22)
- dropped duplicate Q900 ('OFV', value '-9340.64') — already have one for this compound
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['psp470118-tbl-0001:row24:col2', 'Hong_2025_table_2:row17:col2'])
- covariate level 'WT on CLDXd' → Q900:wt_on_cldxd = 0.298 (linear_fractional on Q22)
- covariate level 'WT on V cDXd' → Q900:wt_on_v_cdxd = 0.530 (linear_fractional on Q22)
- covariate level 'Albumin on CLDXd' → Q900:albumin_on_cldxd = 0.343 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'AST on CLDXd' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_2:row7:col2', 'Hong_2025_table_2:row7:col4'])
- covariate level 'Region Europe on CLDXd' → Q900:region_europe_on_cldxd = 0.240 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Tot. bil. on CLDXd' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_2:row10:col2', 'Hong_2025_table_2:row10:col4'])
- covariate level 'Female sex on V cDXd' → Q900:female_sex_on_v_cdxd = -0.185 (linear_fractional on Q22)
- covariate effect for Q312 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLlinDatoDXd' → L/h (from the popPK convention: 'CLlinDatoDXd is a linear clearance parameter. In population PK for antibody-drug conjugates like Dato-DXd, clearance is ')
- implicit units: 'Q DatoDXd' → L/h (from the popPK convention: 'Q DatoDXd is the intercompartmental clearance. By convention, intercompartmental clearances in population PK models are ')
- implicit units: 'V pDatoDXd' → L (from the popPK convention: 'V pDatoDXd is the peripheral volume of distribution. By convention, volumes of distribution are expressed in L. The valu')
- implicit units: 'Tumor size on V max' — the LLM proposed 'mm', whose dimension does not fit Q364; left unset
- implicit units: 'CLDXd' → L/h (from the popPK convention: 'CLDXd is the linear clearance of the payload DXd. By convention, clearance is expressed in L/h.')
- implicit units: 'V cDXd' → L (from the popPK convention: 'V cDXd is the central volume of distribution for DXd. By convention, volumes are expressed in L.')
- metabolite volume: 'V cDXd' Q63→Q61 for DXd — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=datopotamab_deruxtecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 38/38 row label(s) assigned, 12 linked by role; re-tagged parent→DXd ×28
- molar mass: none found for 'datopotamab_deruxtecan' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp470118-tbl-0001:row1:col3 = '(0.353, 0.410)'
- unparsed cell psp470118-tbl-0001:row2:col3 = '(3.01, 3.11)'
- unparsed cell psp470118-tbl-0001:row3:col3 = '(0.388, 0.461)'
- unparsed cell psp470118-tbl-0001:row4:col3 = '(2.78, 3.00)'
- unparsed cell psp470118-tbl-0001:row5:col3 = '(3260, 6190)'
- unparsed cell psp470118-tbl-0001:row6:col3 = '(6840, 10,400)'
- unparsed cell psp470118-tbl-0001:row8:col3 = '(0.374, 0.458)'
- unparsed cell psp470118-tbl-0001:row9:col3 = '(0.210, 0.429)'
- unparsed cell psp470118-tbl-0001:row10:col3 = '(−0.430, −0.191)'
- unparsed cell psp470118-tbl-0001:row11:col3 = '(−0.931, −0.640)'
- unparsed cell psp470118-tbl-0001:row12:col3 = '(−0.263, −0.177)'
- unparsed cell psp470118-tbl-0001:row13:col3 = '(−0.308, −0.224)'
- unparsed cell psp470118-tbl-0001:row14:col3 = '(0.0928, 0.164)'
- unparsed cell psp470118-tbl-0001:row15:col3 = '(−0.178, −0.143)'
- unparsed cell psp470118-tbl-0001:row16:col3 = '(0.242, 0.300)'
- unparsed cell psp470118-tbl-0001:row17:col3 = '(0.134, 0.153)'
- unparsed cell psp470118-tbl-0001:row18:col3 = '(0.216, 0.367)'
- unparsed cell psp470118-tbl-0001:row19:col3 = '(0.268, 0.341)'
- unparsed cell psp470118-tbl-0001:row20:col3 = '(0.165, 0.229)'
- unparsed cell psp470118-tbl-0001:row21:col3 = '(0.409, 0.516)'
- unparsed cell psp470118-tbl-0001:row22:col3 = '(0.117, 0.126)'
- unparsed cell Hong_2025_table_2:row0:col3 = '(2.58, 2.73)'
- unparsed cell Hong_2025_table_2:row1:col3 = '(24.0, 26.2)'
- unparsed cell Hong_2025_table_2:row2:col3 = '(0.685, 0.707)'
- unparsed cell Hong_2025_table_2:row3:col3 = '(0.245, 0.276)'
- unparsed cell Hong_2025_table_2:row6:col3 = '(0.181, 0.508)'
- unparsed cell Hong_2025_table_2:row7:col3 = '(−0.217, −0.0781)'
- unparsed cell Hong_2025_table_2:row8:col3 = '(0.180, 0.320)'
- unparsed cell Hong_2025_table_2:row9:col3 = '(0.131, 0.267)'
- unparsed cell Hong_2025_table_2:row10:col3 = '(−0.187, −0.0939)'
- unparsed cell Hong_2025_table_2:row11:col3 = '(−0.221, −0.145)'
- unparsed cell Hong_2025_table_2:row12:col3 = '(0.286, 0.339)'
- unparsed cell Hong_2025_table_2:row13:col3 = '(0.340, 0.380)'
- unparsed cell Hong_2025_table_2:row14:col3 = '(0.249, 0.328)'
- unparsed cell Hong_2025_table_2:row15:col3 = '(0.277, 0.290)'
- companion parameter table 2 transcribed (36 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.26 (13/50 fields) | 37 |

<details><summary>37 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['datopotamab_deruxtecan', 'dxd', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[age_on_cllindatodxd]` | -0.306 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[albumin_on_cldxd]` | 0.343 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[albumin_on_cllindatodxd]` | -0.788 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldxd]` | 2.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cllindatodxd].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[factor1]` | 0.696 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[female_sex_on_cllindatodxd]` | -0.263 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[female_sex_on_v_cdatodxd]` | -0.160 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[female_sex_on_v_cdxd]` | -0.185 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[region_europe_on_cldxd]` | 0.240 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[region_japan_on_cllindatodxd]` | -0.219 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_age]` |  | -0.306 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.788 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_region]` |  | -0.219 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` |  | -0.263 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt]` |  | 0.750 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_equation_variable_wt]` | 0.750 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q312_region]` | 0.196 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt]` |  | 0.415 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_region]` |  | 0.196 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_sex]` |  | -0.160 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_wt]` |  | 0.530 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tumor size on v max]` | 0.125 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v cdatodxd].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v cdatodxd].parameter_id` | Q900 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v cdxd]` |  | 25.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v cdxd]` | 25.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v pdatodxd]` | 2.88 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_on_cldxd]` | 0.298 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_on_v_cdatodxd]` | 0.415 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_on_v_cdxd]` | 0.530 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_on_v_pdatodxd].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[β]` |  | 0.259 | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.259 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | datopotamab_deruxtecan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | datopotamab_deruxtecan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470118-tbl-0001:row1:col2', 'psp470118-tbl-0001:row1:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hong_2025_table_2:row0:col2', 'Hong_2025_table_2:row0:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp470118-tbl-0001:row3:col2', 'psp470118-tbl-0001:row3:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp470118-tbl-0001:row4:col2', 'psp470118-tbl-0001:row4:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hong_2025_table_2:row1:col2', 'Hong_2025_table_2:row1:col4'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['psp470118-tbl-0001:row5:col2', 'psp470118-tbl-0001:row5:col4'] |
| C5_unit_missing_Q364 | fail | [length] ** 3 / [time] |  | ['psp470118-tbl-0001:row14:col2', 'psp470118-tbl-0001:row14:col4'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Hong_2025_table_2:row3:col2', 'Hong_2025_table_2:row3:col4'] |
| C5_unit_missing_Q66 | fail | [mass] / [time] |  | ['psp470118-tbl-0001:row6:col2', 'psp470118-tbl-0001:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.386 | ['psp470118-tbl-0001:row1:col2', 'psp470118-tbl-0001:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.386 L/h | ['psp470118-tbl-0001:row1:col2', 'psp470118-tbl-0001:row1:col4'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.66 L/h | ['Hong_2025_table_2:row0:col2', 'Hong_2025_table_2:row0:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.88 L | ['psp470118-tbl-0001:row4:col2', 'psp470118-tbl-0001:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 25.1 L | ['Hong_2025_table_2:row1:col2', 'Hong_2025_table_2:row1:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdatopotamab_deruxtecan%5D%20DatopotamabDeruxtecan_Hong2025_reference&body=Drug%3A%20datopotamab_deruxtecan%0ARecord%3A%20DatopotamabDeruxtecan_Hong2025_reference%0APaper%3A%20Hong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_datopotamab_deruxtecan/DatopotamabDeruxtecan_Hong2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 13:25 UTC</sub>
