<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Kong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Malekinejad2014_reference&quot;,&quot;label&quot;:&quot;Malekinejad_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Malekinejad2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Kong2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Unreported parameters k12 and Tlag were left at defaults, and apparent CL/F (363 L/h) ignores bioavailability despite measured atorvastatin.

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Kong2025_reference" status="needs_review" stale="false" population="healthy volunteers and end-stage renal disease patients" measured-compound="atorvastatin" parameterization="apparent" topology="2C"></div>

## Citation
Kong W, Pan Y, Wu Y, Hu Y, Jiang Z, Tian X et al. Microdose Cocktail Study Reveals the Activity and Key Influencing Factors of OATP1B, P-Gp, BCRP, and CYP3A in End-Stage Renal Disease Patients. Clinical pharmacology and therapeutics 117(5):1303–1312 (2025).
  ·  DOI: [10.1002/cpt.3546](https://doi.org/10.1002/cpt.3546)

## Population and dosing

**Population:** healthy volunteers and end-stage renal disease patients · age group adult.

**Dosing:** 0.01, 0.05, 0.1, 0.375 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference.svg" alt="Atorvastatin_Kong2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k a | kabs | 7.53 | 1/h | 21.5 |
| CL/F | CL/F | 363 | L/h | 48.0 |
| V c/F | V1/F | 835 | L | 99.3 |
| V p/F | V2/F | 5830 | L | 62.6 |
| Q/F | Q/F | 3920 | L/h | 30.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Unreported parameters k12 and Tlag were left at defaults, and apparent CL/F (363 L/h) ignores bioavailability despite measured atorvastatin.**

The review flagged that k12 and Tlag used library placeholders rather than estimates from the Kong_2025 paper. The model was also held back because it assumed F=1 and Fm=1, treating apparent clearance as total clearance for oral administration. A second reader disputed the dose compound and primary analyte fields, marking them as unknown rather than atorvastatin. Extracted — atorvastatin: kabs 7.53 1/h, CL/F 363 L/h, V1/F 835 L, V2/F 5.83e+03 L, Q/F 3.92e+03 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atorvastatin, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| k a | `Q49` · kabs | 7.53 | 1/h | 0.002092 | 1/s | 1/h | 21.5 | space_fold (0.95) | cpt3546-tbl-0003:row2:col1, cpt3546-tbl-0003:row10:col1, cpt3546-tbl-0003:row10:col2, cpt3546-tbl-0003:row10:col3, cpt3546-tbl-0003:row17:col1, cpt3546-tbl-0003:row17:col2, cpt3546-tbl-0003:row17:col4, cpt3546-tbl-0003:row25:col1, cpt3546-tbl-0003:row32:col1, cpt3546-tbl-0003:row32:col2 |
| CL/F | `Q27` · CL/F | 363 | L/h | 0.0001008 | m3/s | L/h | 48.0 | exact (1) | cpt3546-tbl-0003:row3:col2, cpt3546-tbl-0003:row3:col3, cpt3546-tbl-0003:row11:col2, cpt3546-tbl-0003:row11:col3, cpt3546-tbl-0003:row18:col2, cpt3546-tbl-0003:row18:col3, cpt3546-tbl-0003:row26:col2, cpt3546-tbl-0003:row26:col3, cpt3546-tbl-0003:row33:col2, cpt3546-tbl-0003:row33:col3 |
| V c/F | `Q290` · V1/F | 835 | L | 0.835 | m3 | L | 99.3 | space_fold (0.95) | cpt3546-tbl-0003:row6:col2, cpt3546-tbl-0003:row13:col2, cpt3546-tbl-0003:row13:col3, cpt3546-tbl-0003:row20:col2, cpt3546-tbl-0003:row20:col3, cpt3546-tbl-0003:row28:col2, cpt3546-tbl-0003:row28:col3, cpt3546-tbl-0003:row34:col2, cpt3546-tbl-0003:row34:col3 |
| V p/F | `Q82` · V2/F | 5830 | L | 5.83 | m3 | L | 62.6 | space_fold (0.95) | cpt3546-tbl-0003:row7:col2, cpt3546-tbl-0003:row14:col2, cpt3546-tbl-0003:row14:col3, cpt3546-tbl-0003:row22:col2, cpt3546-tbl-0003:row29:col2, cpt3546-tbl-0003:row35:col2, cpt3546-tbl-0003:row35:col3 |
| Q/F | `Q69` · Q/F | 3920 | L/h | 0.001089 | m3/s | L/h | 30.2 | exact (1) | cpt3546-tbl-0003:row8:col2, cpt3546-tbl-0003:row8:col3, cpt3546-tbl-0003:row15:col2, cpt3546-tbl-0003:row23:col2, cpt3546-tbl-0003:row30:col2, cpt3546-tbl-0003:row36:col2, cpt3546-tbl-0003:row36:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'DISPTV on CL/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row4:col2'])
- dropped duplicate Q27 ('Veil on CL/F', value '-0.677') — already have one for this compound
- dropped unlinked row (NIL): 'DISDZB on CL/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row12:col2'])
- dropped unlinked row (NIL): 'Clos on CL/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row19:col2'])
- dropped unlinked row (NIL): 'ALB on V c/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row21:col2'])
- dropped unlinked row (NIL): 'DISMDZ on CL/F' — extend the ontology if this is a real PK parameter (source ['cpt3546-tbl-0003:row27:col2'])
- implicit units: 'k a' → 1/h (from the popPK convention: "The paper defines k_a as the 'first-order absorption rate constant' in the Table 3 footnote. In population PK modeling, ")
- implicit units: 'CL/F' → L/h (from the popPK convention: "The paper defines CL/F as 'apparent clearance'. In population PK, clearance parameters are conventionally expressed in v")
- implicit units: 'V c/F' → L (from the popPK convention: "The paper defines V_c/F as 'Apparent volume of distribution for the central compartment'. In population PK, volume param")
- implicit units: 'V p/F' → L (from the popPK convention: "The paper defines V_p/F as 'Apparent volume of distribution for the peripheral compartment'. In population PK, volume pa")
- implicit units: 'Q/F' → L/h (from the popPK convention: "The paper defines Q/F as 'Apparent clearance between V c/F and V p/F' (intercompartmental clearance). In population PK, ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atorvastatin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt3546-tbl-0003:row2:col2 = '18 (NA)'
- unparsed cell cpt3546-tbl-0003:row2:col4 = '18 (18, 18)'
- unparsed cell cpt3546-tbl-0003:row3:col4 = '17 (15, 18)'
- unparsed cell cpt3546-tbl-0003:row4:col4 = '−0.37 (−0.47, −0.29)'
- unparsed cell cpt3546-tbl-0003:row5:col4 = '−0.79 (−1.2, −0.14)'
- unparsed cell cpt3546-tbl-0003:row6:col4 = '25 (22, 29)'
- unparsed cell cpt3546-tbl-0003:row7:col4 = '78 (65, 87)'
- unparsed cell cpt3546-tbl-0003:row8:col4 = '8.1 (6.6, 9.4)'
- unparsed cell cpt3546-tbl-0003:row10:col4 = '1.0 (0.51, 1.93)'
- unparsed cell cpt3546-tbl-0003:row11:col4 = '145 (128, 165)'
- unparsed cell cpt3546-tbl-0003:row12:col4 = '−0.86 (−0.91, −0.82)'
- unparsed cell cpt3546-tbl-0003:row13:col4 = '656 (372, 1,215)'
- unparsed cell cpt3546-tbl-0003:row14:col4 = '528 (129, 728)'
- unparsed cell cpt3546-tbl-0003:row15:col4 = '107 (32, 153)'
- unparsed cell cpt3546-tbl-0003:row18:col4 = '48 (29, 57)'
- unparsed cell cpt3546-tbl-0003:row19:col4 = '−2.9 (−4.8, −1.7)'
- unparsed cell cpt3546-tbl-0003:row20:col4 = '282 (197, 382)'
- unparsed cell cpt3546-tbl-0003:row21:col4 = '−6.6 (−8.0, −4.9)'
- unparsed cell cpt3546-tbl-0003:row22:col4 = '2,407 (1,893, 3,589)'
- unparsed cell cpt3546-tbl-0003:row23:col4 = '45 (35, 62)'
- unparsed cell cpt3546-tbl-0003:row25:col2 = '13 (NA)'
- unparsed cell cpt3546-tbl-0003:row25:col4 = '13 (13, 13)'
- unparsed cell cpt3546-tbl-0003:row26:col4 = '68 (52, 84)'
- unparsed cell cpt3546-tbl-0003:row27:col4 = '0.96 (0.20, 1.68)'
- unparsed cell cpt3546-tbl-0003:row28:col4 = '188 (137, 252)'
- unparsed cell cpt3546-tbl-0003:row29:col4 = '358 (86, 580)'
- unparsed cell cpt3546-tbl-0003:row30:col4 = '36 (24, 45)'
- unparsed cell cpt3546-tbl-0003:row32:col4 = '22 (−36, 57)'
- unparsed cell cpt3546-tbl-0003:row33:col4 = '356 (280, 458)'
- unparsed cell cpt3546-tbl-0003:row34:col4 = '821 (226, 1,930)'
- unparsed cell cpt3546-tbl-0003:row35:col4 = '5,971 (4,228, 7,339)'
- unparsed cell cpt3546-tbl-0003:row36:col4 = '3,302 (2,185, 5,013)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.467 (7/15 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alb on v c/f]` |  | -6.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].rse_percent` | 48.0 | 4.50 | mismatch |
| `gpt-oss-120b` | `parameters[k a].rse_percent` | 21.5 | 19.8 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].rse_percent` | 30.2 | 0 | mismatch |
| `gpt-oss-120b` | `parameters[v c/f].rse_percent` | 99.3 | 7.00 | mismatch |
| `gpt-oss-120b` | `parameters[v p/f].rse_percent` | 62.6 | 9.90 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | atorvastatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt3546-tbl-0003:row3:col2', 'cpt3546-tbl-0003:row3:col3', 'cpt3546-tbl-0003:row11:col2', 'cpt3546-tbl-0003:row11:col3', 'cpt3546-tbl-0003:row18:col2', 'cpt3546-tbl-0003:row18:col3', 'cpt3546-tbl-0003:row26:col2', 'cpt3546-tbl-0003:row26:col3', 'cpt3546-tbl-0003:row33:col2', 'cpt3546-tbl-0003:row33:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt3546-tbl-0003:row6:col2', 'cpt3546-tbl-0003:row13:col2', 'cpt3546-tbl-0003:row13:col3', 'cpt3546-tbl-0003:row20:col2', 'cpt3546-tbl-0003:row20:col3', 'cpt3546-tbl-0003:row28:col2', 'cpt3546-tbl-0003:row28:col3', 'cpt3546-tbl-0003:row34:col2', 'cpt3546-tbl-0003:row34:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt3546-tbl-0003:row2:col1', 'cpt3546-tbl-0003:row10:col1', 'cpt3546-tbl-0003:row10:col2', 'cpt3546-tbl-0003:row10:col3', 'cpt3546-tbl-0003:row17:col1', 'cpt3546-tbl-0003:row17:col2', 'cpt3546-tbl-0003:row17:col4', 'cpt3546-tbl-0003:row25:col1', 'cpt3546-tbl-0003:row32:col1', 'cpt3546-tbl-0003:row32:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt3546-tbl-0003:row8:col2', 'cpt3546-tbl-0003:row8:col3', 'cpt3546-tbl-0003:row15:col2', 'cpt3546-tbl-0003:row23:col2', 'cpt3546-tbl-0003:row30:col2', 'cpt3546-tbl-0003:row36:col2', 'cpt3546-tbl-0003:row36:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt3546-tbl-0003:row7:col2', 'cpt3546-tbl-0003:row14:col2', 'cpt3546-tbl-0003:row14:col3', 'cpt3546-tbl-0003:row22:col2', 'cpt3546-tbl-0003:row29:col2', 'cpt3546-tbl-0003:row35:col2', 'cpt3546-tbl-0003:row35:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 363 L/h | ['cpt3546-tbl-0003:row3:col2', 'cpt3546-tbl-0003:row3:col3', 'cpt3546-tbl-0003:row11:col2', 'cpt3546-tbl-0003:row11:col3', 'cpt3546-tbl-0003:row18:col2', 'cpt3546-tbl-0003:row18:col3', 'cpt3546-tbl-0003:row26:col2', 'cpt3546-tbl-0003:row26:col3', 'cpt3546-tbl-0003:row33:col2', 'cpt3546-tbl-0003:row33:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 835 L | ['cpt3546-tbl-0003:row6:col2', 'cpt3546-tbl-0003:row13:col2', 'cpt3546-tbl-0003:row13:col3', 'cpt3546-tbl-0003:row20:col2', 'cpt3546-tbl-0003:row20:col3', 'cpt3546-tbl-0003:row28:col2', 'cpt3546-tbl-0003:row28:col3', 'cpt3546-tbl-0003:row34:col2', 'cpt3546-tbl-0003:row34:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 5.83e+03 L | ['cpt3546-tbl-0003:row7:col2', 'cpt3546-tbl-0003:row14:col2', 'cpt3546-tbl-0003:row14:col3', 'cpt3546-tbl-0003:row22:col2', 'cpt3546-tbl-0003:row29:col2', 'cpt3546-tbl-0003:row35:col2', 'cpt3546-tbl-0003:row35:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=atorvastatin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; apparent_assumption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_modelica.zip" download>Atorvastatin_Kong2025_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_fmi.zip" download>Atorvastatin_Kong2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_matlab.zip" download>Atorvastatin_Kong2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_matlab_simbio.zip" download>Atorvastatin_Kong2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_sbml.zip" download>Atorvastatin_Kong2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_cellml.zip" download>Atorvastatin_Kong2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5586 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-08 | kg |
| input | model | `Cl` | 0.0001008 | m3/s |
| input | model | `VdPerKg` | 0.01193 | m3/kg |
| input | model | `k21` | 0.0001868 | 1/s |
| input | model | `ka` | 0.002092 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kong W, Pan Y, Wu Y, Hu Y, Jiang Z, Tian X et al. Microdose Cocktail Study Reveals the Activity and Key Influencing Factors of OATP1B, P-Gp, BCRP, and CYP3A in End-Stage Renal Disease Patients. Clinical pharmacology and therapeutics 117(5):1303–1312 (2025). [doi:10.1002/cpt.3546](https://doi.org/10.1002/cpt.3546)

**This record:** Pharmacolibrary v26.09, model `Atorvastatin_Kong2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference>

```bibtex
@misc{pharmacolibrary_AtorvastatinKong2025reference,
  title  = {{Pharmacolibrary model Atorvastatin_Kong2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference},
  note   = {Parameters from doi:10.1002/cpt.3546},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.01 mg, single dose, first-order absorption (ka 7.53 /h, F 1). Doses in the paper: 0.01, 0.05, 0.1, 0.375 mg.

<dbs-fmusim paramsurl="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference/Atorvastatin_Kong2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Atorvastatin_Kong2025_reference_params.json` · controls `Atorvastatin_Kong2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Kong2025_reference&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Kong2025_reference%0APaper%3A%20Kong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-27 12:37 UTC</sub>
