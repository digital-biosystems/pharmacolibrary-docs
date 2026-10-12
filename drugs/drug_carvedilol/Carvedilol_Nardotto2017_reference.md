<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Nardotto_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Nardotto2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.074), gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The carvedilol absorption parameter was rejected for a dimension mismatch: it is reported as 17.41 h⁻¹ (label 'KaR (h-1)') but its meaning is an absorption half-life, a time quantity, so the value and unit contradict the parameter's definition.**

In this parent–metabolite model for carvedilol in type-2 diabetes and healthy subjects, the parameter named t1/2ka is labeled 'KaR (h-1)' with value 17.41 in units of h⁻¹, yet its meaning is the half-life of the absorption phase — a time, not a rate — giving a structural parameter with mismatched dimensions. The record also reached review without an SI value because the reported unit could not be converted. Secondary readers further disagreed on several extracted values, e.g. FR as 18.25 versus 17.67, KaR as 17.41 versus 10.25, and a renal clearance of 16.50 L/h versus none, so the extraction itself is not settled. Extracted — carvedilol: t1/2ka 17.4 h -1, FR 18.2, V 17.9 L, Q3 17.9 L/h, CLR 16.5 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has carvedilol enantiomers, the second reading carvedilol; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:09.159210+00:00) predates the upstream re-run (2026-10-07 00:33:23.563545+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `carvedilol`, measured `carvedilol enantiomers`.

## Citation
Nardotto GHB et al., Population pharmacokinetics of carvedil…, European journal of pharmac… (2017)
  ·  DOI: [10.1016/j.ejps.2017.05.033](https://doi.org/10.1016/j.ejps.2017.05.033)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Nardotto2017_reference" status="extracted" stale="true" population="type-2 diabetes and healthy subjects" measured-compound="carvedilol enantiomers" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KaR (h -1 ) | `Q49` · kabs | 10.63 | h -1 | 0.002952777777777778 | [1] / [h] | not captured | exact (1.0) | tab_1:row6:col3, tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col7, tab_1:row6:col9 | — | not captured |
| FR (%) | `Q43` · FR | 19.54 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col7, tab_1:row8:col9 | — | not captured |
| VcR (L) | `Q63` · V1 | 0.67 | L | 0.00067 | [l] | not captured | llm (0.6) | tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col6, tab_1:row9:col8 | — | not captured |
| QR (L/h) | `Q30` · Q | 12.67 | L/h | 3.5194444444444445e-06 | [l] / [h] | not captured | llm (0.6) | tab_1:row10:col3, tab_1:row10:col4, tab_1:row10:col5, tab_1:row10:col7, tab_1:row10:col9 | — | not captured |
| CLR_CYP2D6 (L/h) | `Q370` · CLfm | 15.42 | L/h | 4.2833333333333335e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row15:col3, tab_1:row15:col4, tab_1:row15:col5, tab_1:row15:col7, tab_1:row15:col9 | — | not captured |
| (L/h) | `Q22` · CL | 4.85 | L/h | 1.3472222222222222e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row22:col2, tab_1:row22:col3, tab_1:row22:col4, tab_1:row22:col5, tab_1:row22:col6, tab_1:row22:col7, tab_1:row22:col9 | — | not captured |
| Total CLR (L/h) | `Q26` · CLR | 16.25 | L/h | 4.513888888888889e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | tab_1:row28:col7 | — | not captured |
| OHC_CLR (L/h) | `Q22` · CL | 14.08 | L/h | 3.911111111111111e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row32:col3, tab_1:row32:col7 | — | not captured |
| OHC_VcR (L) | `Q61` · V | 16.14 | L | 0.01614 | [l] | not captured | exact (1.0) | tab_1:row33:col3, tab_1:row33:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q63 ('VpR (L)', value '64.44') — already have one for this compound
- dropped duplicate Q370 ('CLR_CYP2C9', value '10.50') — already have one for this compound
- linked '(L/h)' as 'CL' → Q22 (CL) for carvedilol enantiomers — compound marker removed
- dropped duplicate Q22 ('DMC_CLR (L/h)', value '16.24') — already have one for this compound
- metabolite volume: 'OHC_VcR (L)' Q63→Q61 for carvedilol metabolites — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (VcR (L)); Q30 (QR (L/h)); Q22 ((L/h)); Q22 (OHC_CLR (L/h)); Q61 (OHC_VcR (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carvedilol enantiomers
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 48 linked by role; re-tagged parent→carvedilol enantiomers ×40, parent→carvedilol metabolites ×13
- molar mass: no plausible PubChem entry for 'carvedilol enantiomers' ('carvedilol enantiomers') — left in mass units
- molar mass: none found for 'carvedilol enantiomers' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row6:col2 = '0.86 (0.54-1.46)'
- unparsed cell tab_1:row6:col6 = '0.85 (0.75-1.02)'
- unparsed cell tab_1:row6:col8 = '0.12 0.16) (0.08-'
- unparsed cell tab_1:row7:col2 = '4.81 (3.47 -7.19)'
- unparsed cell tab_1:row7:col6 = '4.19 (3.87-5.20)'
- unparsed cell tab_1:row7:col8 = '0.110 0.16) (0.08-'
- unparsed cell tab_1:row8:col2 = '25.40 (16.89 -51.54)'
- unparsed cell tab_1:row8:col6 = '23.13 (18.49-30.20)'
- unparsed cell tab_1:row8:col8 = '0.16 0.25) (0.11-'
- unparsed cell tab_1:row9:col2 = '21.42 (7.84 -68.06) 16.88'
- unparsed cell tab_1:row9:col5 = '19.63 (16.30-26.02)'
- unparsed cell tab_1:row9:col7 = '0.66 (0.42-1.1)'
- unparsed cell tab_1:row10:col2 = '28.52 (7.52-34.13)'
- unparsed cell tab_1:row10:col6 = '28.49 (21.83-35.84)'
- unparsed cell tab_1:row10:col8 = '0.18 (0.13-0.26)'
- unparsed cell tab_1:row15:col1 = 'EM T2DM EM CYP2D6'
- unparsed cell tab_1:row15:col2 = '13.70 (7.45-27.56)'
- unparsed cell tab_1:row15:col6 = '6.07 (5.42-8.04)'
- unparsed cell tab_1:row15:col8 = '0.11 (0.08-0.15)'
- unparsed cell tab_1:row21:col1 = 'T2DM'
- unparsed cell tab_1:row21:col8 = '(0.16-'
- unparsed cell tab_1:row22:col1 = 'CYP2D6'
- unparsed cell tab_1:row22:col8 = '0.35)'
- unparsed cell tab_1:row28:col1 = 'T2DM CYP2D6 EM'
- unparsed cell tab_1:row28:col2 = '29.01 (19.34-44.04)'
- unparsed cell tab_1:row28:col6 = '21.69 (17.74-26.34)'
- unparsed cell tab_1:row32:col2 = '31.10 --'
- unparsed cell tab_1:row32:col6 = '42.87 (34.39-53.43)'
- unparsed cell tab_1:row33:col2 = '10.05 --'
- unparsed cell tab_1:row33:col6 = '9.98 (8.72-11.42)'
- unparsed cell tab_1:row34:col2 = '131.54 --'
- unparsed cell tab_1:row34:col6 = '142.44 (102.62-'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.074 (2/27 fields) | 25 |
| `gpt-oss:120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>45 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['carvedilol', 'carvedilol metabolites', 'metabolism']] | [['carvedilol', 'carvedilol metabolite', 'metabolism'], ['r-carvedilol', 'carvedilol metabolite', 'metabolism'], ['s-carvedilol', 'carvedilol metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[]` | 4.85 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr_cyp2d6]` | not captured | 18.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr_cyp2d6]` | 15.42 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cls_cyp2d6]` | not captured | 17.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fr]` | not captured | 17.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fr]` | 19.54 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kar]` | not captured | 10.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kar]` | 10.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kas]` | not captured | 15.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ohc_clr]` | not captured | 14.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ohc_clr]` | 14.08 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ohc_vcr]` | not captured | 16.14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ohc_vcr]` | 16.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qr]` | not captured | 18.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qr]` | 12.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qs]` | not captured | 15.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clr]` | not captured | 16.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clr]` | 16.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcr]` | not captured | 0.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcr]` | 0.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcs]` | not captured | 16.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vpr]` | not captured | 16.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vps]` | not captured | 16.24 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | carvedilol enantiomers | carvedilol | mismatch |
| `gpt-oss:120b` | `model.links` | [['carvedilol', 'carvedilol metabolites', 'metabolism']] | [['carvedilol', 'carvedilol metabolite', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[]` | 4.85 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr_cyp2d6]` | not captured | 15.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr_cyp2d6]` | 15.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | not captured | 19.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | 19.54 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kar]` | not captured | 10.63 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kar]` | 10.63 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_clr]` | not captured | 14.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_clr]` | 14.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_vcr]` | not captured | 16.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_vcr]` | 16.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qr]` | not captured | 12.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qr]` | 12.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qs]` | not captured | 14.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total clr]` | 16.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vcr]` | not captured | 0.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vcr]` | 0.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpr]` | not captured | 64.44 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | carvedilol enantiomers | carvedilol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row32:col3', 'tab_1:row32:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row28:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5', 'tab_1:row10:col7', 'tab_1:row10:col9'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row15:col3', 'tab_1:row15:col4', 'tab_1:row15:col5', 'tab_1:row15:col7', 'tab_1:row15:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col7', 'tab_1:row6:col9'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row33:col3', 'tab_1:row33:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col6', 'tab_1:row9:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.85 | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.85 L/h | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.1 L/h | not captured | not captured | ['tab_1:row32:col3', 'tab_1:row32:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 16.1 L | not captured | not captured | ['tab_1:row33:col3', 'tab_1:row33:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.67 L | not captured | not captured | ['tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col6', 'tab_1:row9:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nardotto_2017` / `Nardotto_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_modelica.zip" download>Carvedilol_Nardotto2017_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_matlab.zip" download>Carvedilol_Nardotto2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_matlab_simbio.zip" download>Carvedilol_Nardotto2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_sbml.zip" download>Carvedilol_Nardotto2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_cellml.zip" download>Carvedilol_Nardotto2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:33 UTC</sub>
