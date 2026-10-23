<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;simvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/&quot;},{&quot;label&quot;:&quot;Tsamandouras_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Corsini1999_reference&quot;,&quot;label&quot;:&quot;Corsini_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Corsini1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Mauro1993_reference&quot;,&quot;label&quot;:&quot;Mauro_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Mauro1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Sun2022_reference&quot;,&quot;label&quot;:&quot;Sun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Sun2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Friedrich2014_reference&quot;,&quot;label&quot;:&quot;Friedrich_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Friedrich2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Jadhav2023_reference&quot;,&quot;label&quot;:&quot;Jadhav_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/Simvastatin_Jadhav2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wei_2014_LDL_C&quot;,&quot;label&quot;:&quot;Wei_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_simvastatin/pd_Wei_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# simvastatin — `Simvastatin_Tsamandouras2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The apparent intercompartmental clearance parameter value of 384.08 L/h was recorded with hours in its label, causing a unit mismatch rejection.

<div class="pk-model-meta" hidden drug="simvastatin" model-id="Simvastatin_Tsamandouras2014_reference" status="rejected" stale="false" population="individuals from three clinical trials" measured-compound="simvastatin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Tsamandouras N, Dickinson G, Guo Y, Hall S, Rostami-Hodjegan A, Galetin A et al. Identification of the effect of multiple polymorphisms on the pharmacokinetics of simvastatin and simvastatin acid using a population-modeling approach. Clinical pharmacology and therapeutics 96(1):90–100 (2014).
  ·  DOI: [10.1038/clpt.2014.55](https://doi.org/10.1038/clpt.2014.55)

## Population and dosing

**Population:** individuals from three clinical trials · condition healthy · age group adult · n = 74.

**Dosing:** 20, 40 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Lag time (h) | tlag | 0.230 | h | 0.231 |
| θ₁; ka (1/h) | kabs | 2.24 |  | 2.11 |
| θ₂; Q/F (L/h) | Q/F | 384.08 | L/h | 386 |
| θ₃; CLSVA/VSA (h) | CL/F | 0.0958 | h | 0.0975 |
| θ₆; VSC/F (L) | V/F | 2735.72 | L | 2770 |
| age_coefficient_on_f | age_coefficient_on_f | 0.0135 |  | 0.0133 |
| θ₁₄; rs776746 (AA) on CLSVA/VSA | k14 | -0.591 |  | -0.562 |
| theta_q314_ethnicity | theta_q314_ethnicity | 0.701 |  | 0.682 |
| theta_q319_weight_power | theta_q319_weight_power | 0.892 |  | 0.887 |
| theta_q319_weight_power | theta_q319_weight_power | 0.75 |  | 0.75 |
| theta_q319_weight_power | theta_q319_weight_power | 1 |  | 1 |
| theta_q319_weight_power | theta_q319_weight_power | 1 |  | 1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.464). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The apparent intercompartmental clearance parameter value of 384.08 L/h was recorded with hours in its label, causing a unit mismatch rejection.**

The record labels the intercompartmental clearance as 'Q/F (L/h)' but the parameter definition identifies it as 'CLSVA/VSA (h)'. This contradiction means the extracted value of 384.08 has incompatible dimensions for the specified physiological meaning. Consequently, the unit could not be converted to SI, preventing the model from being built with consistent physical units. Extracted — simvastatin: tlag 0.23 h, kabs 2.24, Q/F 384 L/h, CL/F 0.0958 h, V/F 2.74e+03 L, k14 -0.591.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has simvastatin, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Lag time (h) | `Q83` · tlag | 0.230 | h | 828 | s | h | 0.231 | exact (1) | Tsamandouras_2014_table_p4_1:row1:col1, Tsamandouras_2014_table_p4_1:row1:col2 |
| θ₁; ka (1/h) | `Q49` · kabs | 2.24 |  |  |  |  | 2.11 | llm_confirmed (0.6) | Tsamandouras_2014_table_p4_1:row2:col1, Tsamandouras_2014_table_p4_1:row2:col2 |
| θ₂; Q/F (L/h) | `Q69` · Q/F | 384.08 | L/h | 0.0001067 | m3/s | l/h | 386 | llm_confirmed (0.6) | Tsamandouras_2014_table_p4_1:row3:col1, Tsamandouras_2014_table_p4_1:row3:col2 |
| θ₃; CLSVA/VSA (h) | `Q27` · CL/F | 0.0958 | h |  |  | h | 0.0975 | llm (0.6) | Tsamandouras_2014_table_p4_1:row4:col1, Tsamandouras_2014_table_p4_1:row4:col2 |
| θ₆; VSC/F (L) | `Q76` · V/F | 2735.72 | L | 2.736 | m3 | l | 2770 | llm (0.6) | Tsamandouras_2014_table_p4_1:row7:col1, Tsamandouras_2014_table_p4_1:row7:col2 |
| age_coefficient_on_f | `Q900` · age_coefficient_on_f | 0.0135 |  |  |  |  | 0.0133 |  | Tsamandouras_2014_table_p4_1:row11:col1, Tsamandouras_2014_table_p4_1:row11:col2 |
| θ₁₄; rs776746 (AA) on CLSVA/VSA | `Q347` · k14 | -0.591 |  |  |  |  | -0.562 | llm (0.6) | Tsamandouras_2014_table_p4_1:row16:col1, Tsamandouras_2014_table_p4_1:row16:col2 |
| theta_q314_ethnicity | `Q900` · theta_q314_ethnicity | 0.701 |  |  |  |  | 0.682 |  | Tsamandouras_2014_table_p4_1:row14:col1, Tsamandouras_2014_table_p4_1:row14:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.892 |  |  |  |  | 0.887 |  | Tsamandouras_2014_table_p4_1:row21:col1, Tsamandouras_2014_table_p4_1:row21:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.75 |  |  |  |  | 0.75 |  | Tsamandouras_2014_table_p4_1:row22:col1, Tsamandouras_2014_table_p4_1:row22:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1 |  |  |  |  | 1 |  | Tsamandouras_2014_table_p4_1:row23:col1, Tsamandouras_2014_table_p4_1:row23:col2 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1 |  |  |  |  | 1 |  | Tsamandouras_2014_table_p4_1:row24:col1, Tsamandouras_2014_table_p4_1:row24:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θ₃; CLSVA/VSA (h)' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('θ₄; CLSV/F (L/h)', value '1038.9') — already have one for this compound
- dropped duplicate Q27 ('θ₅; CLSVA/VSA (1/h)', value '0.293') — already have one for this compound
- dropped duplicate Q76 ('θ₇; VSP/F (L)', value '4041.7') — already have one for this compound
- dropped duplicate Q49 ('θ₈; rs4148162 (TCAC/TCAC) on ka', value '-0.522') — already have one for this compound
- covariate level 'θ₉; Age coefficient on F' → Q900:age_coefficient_on_f = 0.0135 (linear_fractional on Q69)
- dropped unlinked row (NIL): 'θ₁₀; rs35599367 (TC) on F' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row12:col1', 'Tsamandouras_2014_table_p4_1:row12:col2'])
- dropped unlinked row (NIL): 'θ₁₁; rs776746 (AA) on CLSVA/VSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row13:col1', 'Tsamandouras_2014_table_p4_1:row13:col2'])
- dropped unlinked row (NIL): 'θ₁₃; rs4149056 (TC) on VSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row15:col1', 'Tsamandouras_2014_table_p4_1:row15:col2'])
- dropped unlinked row (NIL): 'θ₁₅; rs1 2422149 (AA) on CLSVA/VSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row17:col1', 'Tsamandouras_2014_table_p4_1:row17:col2'])
- dropped unlinked row (NIL): 'θ₁₆; rs2231142 (AA) on CLSVA/VSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row18:col1', 'Tsamandouras_2014_table_p4_1:row18:col2'])
- dropped unlinked row (NIL): 'θ₁₇; rs4253728 (AA|AG) on CLSVA/VSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row19:col1', 'Tsamandouras_2014_table_p4_1:row19:col2'])
- dropped unlinked row (NIL): 'θ₁₈; rs4149056 (TC) on CLSA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row20:col1', 'Tsamandouras_2014_table_p4_1:row20:col2'])
- dropped duplicate Q49 ('ka', value '73.44') — already have one for this compound
- dropped duplicate Q69 ('Q/F', value '123.43') — already have one for this compound
- dropped duplicate Q27 ('CLSVA/VSA', value '20.59') — already have one for this compound
- dropped duplicate Q27 ('CLSV/F', value '53.87') — already have one for this compound
- dropped duplicate Q27 ('CLSA/VSA', value '12.84') — already have one for this compound
- dropped unlinked row (NIL): 'VSC/F' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row32:col1', 'Tsamandouras_2014_table_p4_1:row32:col2'])
- dropped unlinked row (NIL): 'VSP/F' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row33:col1', 'Tsamandouras_2014_table_p4_1:row33:col2'])
- dropped unlinked row (NIL): 'eps1_SV' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row41:col1', 'Tsamandouras_2014_table_p4_1:row41:col2'])
- dropped unlinked row (NIL): 'eps2_SV' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row42:col1', 'Tsamandouras_2014_table_p4_1:row42:col2'])
- dropped unlinked row (NIL): 'eps1_SVA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row43:col1', 'Tsamandouras_2014_table_p4_1:row43:col2'])
- dropped unlinked row (NIL): 'eps2_SVA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row44:col1', 'Tsamandouras_2014_table_p4_1:row44:col2'])
- dropped unlinked row (NIL): 'eps3_SVA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row45:col1', 'Tsamandouras_2014_table_p4_1:row45:col2'])
- dropped unlinked row (NIL): 'm_SVA' — extend the ontology if this is a real PK parameter (source ['Tsamandouras_2014_table_p4_1:row46:col1', 'Tsamandouras_2014_table_p4_1:row46:col2'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Tsamandouras_2014_table_p4_1:row1:col3 = '(0.224, 0.235)'
- unparsed cell Tsamandouras_2014_table_p4_1:row2:col3 = '(1.44, 3.45)'
- unparsed cell Tsamandouras_2014_table_p4_1:row3:col3 = '(272.1, 515.6)'
- unparsed cell Tsamandouras_2014_table_p4_1:row4:col3 = '(0.078, 0.115)'
- unparsed cell Tsamandouras_2014_table_p4_1:row5:col3 = '(905.4, 1,189.2)'
- unparsed cell Tsamandouras_2014_table_p4_1:row6:col3 = '(0.256, 0.327)'
- unparsed cell Tsamandouras_2014_table_p4_1:row7:col3 = '(2,265.4, 3,290.9)'
- unparsed cell Tsamandouras_2014_table_p4_1:row8:col3 = '(2,923.3, 5,549.6)'
- unparsed cell Tsamandouras_2014_table_p4_1:row10:col3 = '(−0.736, −0.141)'
- unparsed cell Tsamandouras_2014_table_p4_1:row11:col3 = '(0.005, 0.021)'
- unparsed cell Tsamandouras_2014_table_p4_1:row12:col3 = '(−0.226, 1.399)'
- unparsed cell Tsamandouras_2014_table_p4_1:row13:col3 = '(0.257, 1.402)'
- unparsed cell Tsamandouras_2014_table_p4_1:row14:col3 = '(0.307, 1.186)'
- unparsed cell Tsamandouras_2014_table_p4_1:row15:col3 = '(−0.592, −0.309)'
- unparsed cell Tsamandouras_2014_table_p4_1:row16:col3 = '(0.191, 1.012)'
- unparsed cell Tsamandouras_2014_table_p4_1:row17:col3 = '(0.524, 1.123)'
- unparsed cell Tsamandouras_2014_table_p4_1:row18:col3 = '(−0.530, −0.224)'
- unparsed cell Tsamandouras_2014_table_p4_1:row19:col3 = '(−0.368, −0.076)'
- unparsed cell Tsamandouras_2014_table_p4_1:row20:col3 = '(−0.562, −0.293)'
- unparsed cell Tsamandouras_2014_table_p4_1:row21:col3 = '(0.445, 1.301)'
- unparsed cell Tsamandouras_2014_table_p4_1:row27:col3 = '(45.98, 147.39)'
- unparsed cell Tsamandouras_2014_table_p4_1:row28:col3 = '(77.24, 188.85)'
- unparsed cell Tsamandouras_2014_table_p4_1:row29:col3 = '(22.24, 42.42)'
- unparsed cell Tsamandouras_2014_table_p4_1:row30:col3 = '(41.38, 65.88)'
- unparsed cell Tsamandouras_2014_table_p4_1:row31:col3 = '(0.80, 23.16)'
- unparsed cell Tsamandouras_2014_table_p4_1:row32:col3 = '(30.38, 92.76)'
- unparsed cell Tsamandouras_2014_table_p4_1:row33:col3 = '(32.29, 84.28)'
- unparsed cell Tsamandouras_2014_table_p4_1:row35:col3 = '(53.05, 147.43)'
- unparsed cell Tsamandouras_2014_table_p4_1:row36:col3 = '(12.71, 48.71)'
- unparsed cell Tsamandouras_2014_table_p4_1:row38:col3 = '(10.47, 147.28)'
- unparsed cell Tsamandouras_2014_table_p4_1:row39:col3 = '(8.04, 30.86)'
- unparsed cell Tsamandouras_2014_table_p4_1:row41:col3 = '(0.117, 0.261)'
- unparsed cell Tsamandouras_2014_table_p4_1:row42:col3 = '(0.071, 0.142)'
- unparsed cell Tsamandouras_2014_table_p4_1:row43:col3 = '(0.012, 0.031)'
- unparsed cell Tsamandouras_2014_table_p4_1:row44:col3 = '(1.134, 8.223)'
- unparsed cell Tsamandouras_2014_table_p4_1:row45:col3 = '(0.027, 0.061)'
- unparsed cell Tsamandouras_2014_table_p4_1:row46:col3 = '(0.051, 0.167)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.464 (13/28 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_cl_ethnicity]` |  | 0.701 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_ethnicity]` | 0.701 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` |  | 0.892 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power].rse_percent` | 0.887 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power].value` | 0.892 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[θ10; rs35599367 (tc) on f]` |  | 0.537 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ13; rs4149056 (tc) on vsa]` |  | 0.462 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ14; rs776746 (aa) on clsva/vsa]` | -0.591 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ18; rs4149056 (tc) on clsa]` |  | -0.434 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ3; clsva/vsa]` | 0.0958 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ3; clsva/vsa]` |  | 0.0958 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ4; clsv/f]` |  | 1038.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ5; clsva/vsa]` |  | 0.293 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | simvastatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | simvastatin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | fail | [time] | h | ['Tsamandouras_2014_table_p4_1:row4:col1', 'Tsamandouras_2014_table_p4_1:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tsamandouras_2014_table_p4_1:row3:col1', 'Tsamandouras_2014_table_p4_1:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tsamandouras_2014_table_p4_1:row7:col1', 'Tsamandouras_2014_table_p4_1:row7:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tsamandouras_2014_table_p4_1:row1:col1', 'Tsamandouras_2014_table_p4_1:row1:col2'] |
| C5_unit_missing_Q347 | fail | 1 / [time] |  | ['Tsamandouras_2014_table_p4_1:row16:col1', 'Tsamandouras_2014_table_p4_1:row16:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Tsamandouras_2014_table_p4_1:row2:col1', 'Tsamandouras_2014_table_p4_1:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.74e+03 L | ['Tsamandouras_2014_table_p4_1:row7:col1', 'Tsamandouras_2014_table_p4_1:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Tsamandouras2014_reference&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Tsamandouras2014_reference%0APaper%3A%20Tsamandouras_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_simvastatin/Simvastatin_Tsamandouras2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-16 00:30 UTC</sub>
