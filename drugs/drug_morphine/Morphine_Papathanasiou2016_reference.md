<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Ihmsen2021_reference&quot;,&quot;label&quot;:&quot;Ihmsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Ihmsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_f&quot;,&quot;label&quot;:&quot;Andersen_1986_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_j&quot;,&quot;label&quot;:&quot;Andersen_1986_j&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_j.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_k&quot;,&quot;label&quot;:&quot;Andersen_1986_k&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_k.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Papathanasiou2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Morphine's first intercompartmental clearance was rejected because its unit 'ng' is mass, not volume, conflicting with the required volume dimension.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Papathanasiou2016_reference" status="rejected" stale="false" population="rats" measured-compound="morphine, gabapentin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Papathanasiou T, Juul RV, Gabel-Jensen C, Kreilgaard M, Lund TM. Population Pharmacokinetic Modelling of Morphine, Gabapentin and their Combination in the Rat. Pharmaceutical research 33(11):2630–2643 (2016).
  ·  DOI: [10.1007/s11095-016-1988-z](https://doi.org/10.1007/s11095-016-1988-z)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 70, 210, 490 mg, subcutaneous, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLMor / F (L/min) | CL/F | 0.0148 | L/min | 2.9 |  |
| VMor / F (L) | V/F | 0.171 | L | 16.3 |  |
| Q1Mor / F (L/min) | Q/F | 0.0394 | L/min | 8.6 |  |
| V3Mor / F (L) | V2/F | 0.611 | L | 4.1 |  |
| Q2Mor / F (L/min) | Q2/F | 0.0043 | L/min | 8.8 |  |
| V4Mor / F (L) | V3/F | 1.96 | L | 22.7 |  |
| ka, max, Mor (min⁻¹) | kabs | 0.101 | min⁻¹ | 8.9 | 22.2 (11% RSE) |
| CLM3G / Fmet (L/min) | CL | 0.0121 | L/min | 9.1 |  |
| VM3G / Fmet (L) | V | 0.672 | L | 6.7 |  |
| kmax.65 (ng/min) | equation variable | 2.07 | ng/min | 15.8 |  |
| Km.65 (ng) | Km | 124 | ng | 40.6 |  |
| ktr (min⁻¹) | ktr | 0.726 | min⁻¹ | 23.3 |  |
| ka,Gab (min⁻¹) | kabs | 0.0805 | min⁻¹ | 5.6 |  |
| theta_q22_wt_power | theta_q22_wt_power | 0.00125 |  | 3.3 |  |
| theta_q63_wt_power | theta_q63_wt_power | 0.25 |  | 1.9 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.432). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Morphine's first intercompartmental clearance was rejected because its unit 'ng' is mass, not volume, conflicting with the required volume dimension.**

The record lists Q/F as 0.0394 L/min, but the check flagged the unit 'ng' as mass, which cannot represent a volume of distribution. Additionally, a reported unit for this parameter could not be converted to standard units, so the parameter lacked a valid SI value. A second reader disagreed that gabapentin was a measured compound in this morphine model. Extracted — morphine: CL/F 0.0148 L/min, V/F 0.171 L, Q/F 0.0394 L/min, V2/F 0.611 L, Q2/F 0.0043 L/min, V3/F 1.96 L, kabs 0.101 min⁻¹; morphine-3-glucuronide: CL 0.0121 L/min, V 0.672 L, Km 124 ng, ktr 0.726 min⁻¹; gabapentin: kabs 0.0805 min⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has morphine, gabapentin, the second reading morphine; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLMor / F (L/min) | `Q27` · CL/F | 0.0148 | L/min | 2.467e-07 | m3/s | l/min | 2.9 | llm (0.6) | Papathanasiou_2016_table_p7_1:row1:col1 |  |
| VMor / F (L) | `Q76` · V/F | 0.171 | L | 0.000171 | m3 | l | 16.3 | llm (0.6) | Papathanasiou_2016_table_p7_1:row2:col1 |  |
| Q1Mor / F (L/min) | `Q69` · Q/F | 0.0394 | L/min | 6.567e-07 | m3/s | l/min | 8.6 | exact (1) | Papathanasiou_2016_table_p7_1:row3:col1 |  |
| V3Mor / F (L) | `Q82` · V2/F | 0.611 | L | 0.000611 | m3 | l | 4.1 | exact (1) | Papathanasiou_2016_table_p7_1:row4:col1 |  |
| Q2Mor / F (L/min) | `Q80` · Q2/F | 0.0043 | L/min | 7.167e-08 | m3/s | l/min | 8.8 | special_case (0.95) | Papathanasiou_2016_table_p7_1:row5:col1 |  |
| V4Mor / F (L) | `Q78` · V3/F | 1.96 | L | 0.00196 | m3 | l | 22.7 | exact (1) | Papathanasiou_2016_table_p7_1:row6:col1 |  |
| ka, max, Mor (min⁻¹) | `Q49` · kabs | 0.101 | min⁻¹ | 0.001683 | 1/s | 1/min | 8.9 | llm_confirmed (0.6) | Papathanasiou_2016_table_p7_1:row7:col1 | 22.2 (11% RSE) |
| CLM3G / Fmet (L/min) | `Q22` · CL | 0.0121 | L/min | 2.017e-07 | m3/s | l/min | 9.1 | exact (1) | Papathanasiou_2016_table_p7_1:row12:col1 |  |
| VM3G / Fmet (L) | `Q61` · V | 0.672 | L | 0.000672 | m3 | l | 6.7 | exact (1) | Papathanasiou_2016_table_p7_1:row13:col1 |  |
| kmax.65 (ng/min) | `Q900` · equation variable | 2.07 | ng/min |  |  | ng/min | 15.8 | llm (0.6) | Papathanasiou_2016_table_p7_1:row15:col1 |  |
| Km.65 (ng) | `Q1` · Km | 124 | ng |  |  | ng | 40.6 | llm (0.6) | Papathanasiou_2016_table_p7_1:row16:col1 |  |
| ktr (min⁻¹) | `Q306` · ktr | 0.726 | min⁻¹ | 0.0121 | 1/s | 1/min | 23.3 | exact (1) | Papathanasiou_2016_table_p7_1:row19:col1 |  |
| ka,Gab (min⁻¹) | `Q49` · kabs | 0.0805 | min⁻¹ | 0.001342 | 1/s | 1/min | 5.6 | llm_confirmed (0.6) | Papathanasiou_2016_table_p7_1:row26:col1 |  |
| theta_q22_wt_power | `Q900` · theta_q22_wt_power | 0.00125 |  |  |  |  | 3.3 |  | Papathanasiou_2016_table_p7_1:row24:col1 |  |
| theta_q63_wt_power | `Q900` · theta_q63_wt_power | 0.25 |  |  |  |  | 1.9 |  | Papathanasiou_2016_table_p7_1:row25:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLMor / F (L/min)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'VMor / F (L)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'V3Mor / F (L)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'Q2Mor / F (L/min)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'ka, max, Mor (min⁻¹)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'CLM3G / Fmet (L/min)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'VM3G / Fmet (L)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'kmax.65 (ng/min)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'CLGab · (WT/285)3/4 (L/min)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section iiv: 'ka,Gab (min⁻¹)' routed out of structural estimates ('IIV (RSE) [Shrinkage]')
- table section residual_error: 'σMor,prop (%)' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σMor,add (ng/ml)' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σM3G,prop (%)' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σM3G,add (ng/ml)' routed out of structural estimates ('Residual Error')
- table section residual_error: 'corr. σMor,add - σM3G,add (%)' routed out of structural estimates ('Residual Error')
- table section residual_error: 'σGab,prop (%)' routed out of structural estimates ('Residual Error')
- dropped unlinked row (NIL): 'A50, Mor (ng)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row8:col1'])
- dropped unlinked row (NIL): 'Fbil (%)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row14:col1'])
- unit_dimension_mismatch: 'Km.65 (ng)' → Q1 (unit '[mass]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Freq (min)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row17:col1'])
- dropped unlinked row (NIL): 'Del (unitless)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row18:col1'])
- dropped unlinked row (NIL): 'O-Gab (unitless)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row20:col1'])
- dropped unlinked row (NIL): 'F50,Gab (ug)' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2016_table_p7_1:row27:col1'])
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'VM3G / Fmet (L)' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=morphine, gabapentin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 21 linked by role; re-tagged parent→morphine ×15, parent→morphine-3-glucuronide ×13, parent→gabapentin ×7
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.432 (16/37 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clmor / f]` |  | 0.0148 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmor / f]` | 0.0148 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[del]` |  | 0.631 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fbil]` |  | 0.375 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, max, mor]` |  | 0.101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, max, mor]` | 0.101 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kmax.65].parameter_id` | Q900 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[ktr]` | 0.726 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1mor / f]` |  | 0.0394 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1mor / f]` | 0.0394 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2mor / f]` |  | 0.0043 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2mor / f]` | 0.0043 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3mor / f]` |  | 0.611 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3mor / f]` | 0.611 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4mor / f]` |  | 1.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4mor / f]` | 1.96 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmor / f]` |  | 0.171 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmor / f]` | 0.171 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | morphine, gabapentin | morphine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | morphine, gabapentin | morphine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | ng ([mass]) | ['Papathanasiou_2016_table_p7_1:row16:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Papathanasiou_2016_table_p7_1:row12:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Papathanasiou_2016_table_p7_1:row1:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Papathanasiou_2016_table_p7_1:row19:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Papathanasiou_2016_table_p7_1:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Papathanasiou_2016_table_p7_1:row26:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Papathanasiou_2016_table_p7_1:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Papathanasiou_2016_table_p7_1:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Papathanasiou_2016_table_p7_1:row2:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Papathanasiou_2016_table_p7_1:row6:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Papathanasiou_2016_table_p7_1:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Papathanasiou_2016_table_p7_1:row4:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.726 L/h | ['Papathanasiou_2016_table_p7_1:row12:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.888 L/h | ['Papathanasiou_2016_table_p7_1:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.672 L | ['Papathanasiou_2016_table_p7_1:row13:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 0.171 L | ['Papathanasiou_2016_table_p7_1:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 0.611 L | ['Papathanasiou_2016_table_p7_1:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Papathanasiou2016_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Papathanasiou2016_reference%0APaper%3A%20Papathanasiou_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Papathanasiou2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:51 UTC</sub>
