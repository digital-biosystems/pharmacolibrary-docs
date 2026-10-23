<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artesunate&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/&quot;},{&quot;label&quot;:&quot;Mim_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artesunate_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Pfaffendorf2026_reference&quot;,&quot;label&quot;:&quot;Pfaffendorf_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Pfaffendorf2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Lohy2017_reference&quot;,&quot;label&quot;:&quot;Lohy_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Lohy2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artesunate — `Artesunate_Mim2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The artesunate record was rejected because total clearance CL = 286.01 was reported with the unit 'CL', which is not a valid unit, giving a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="artesunate" model-id="Artesunate_Mim2026_reference" status="rejected" stale="false" population="P. berghei-infected Swiss mice" measured-compound="artesunate" parameterization="mechanistic" topology="1C"></div>

## Citation
Mim SR, Vieira Santos V, Pereira LC, Pica K, Miranda ALLdS, Quadros HC et al. Pharmacokinetic and pharmacodynamic modeling of anti-plasmodial drugs mefloquine plus artesunate: insights on translational application. Antimicrobial agents and chemotherapy 70(3):e0171725 (2026).
  ·  DOI: [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25)

## Population and dosing

**Population:** P. berghei-infected Swiss mice · condition malaria (P. berghei-infected) · age group adult · n = 6.

**Dosing:** 3850, 7000 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Absorption rate constant, Ka | kabs | 0.28 | 1/h | 24.4 |
| Total clearance, CL | CL | 286.01 | CL | 5.22 |
| Volume of central compartment, V1 | V | 4039.63 | mL/kg | 11.2 |
| Inter-compartmental clearance, Q | Q | 20636.48 | mL/h/kg | 36.0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The artesunate record was rejected because total clearance CL = 286.01 was reported with the unit 'CL', which is not a valid unit, giving a dimension mismatch on a structural parameter.**

In the Mim_2026 model of artesunate in P. berghei-infected Swiss mice, the clearance parameter CL carries the verbatim unit 'CL' instead of a flow unit such as mL/h/kg, so its dimensions cannot be reconciled with the model structure. The inter-compartmental clearance Q = 20636.48 mL/h/kg and volume V = 4039.63 mL/kg were reported with proper units, but the clearance unit could not be converted to SI, so the parameter reached the model without an SI value. The one-compartment structure with absorption rate constant kabs = 0.28 1/h is otherwise stated. Extracted — artesunate: kabs 0.28 1/h, CL 286 CL, V 4.04e+03 mL/kg, Q 2.06e+04 mL/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artesunate, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, Ka | `Q49` · kabs | 0.28 | 1/h | 7.778e-05 | 1/s | 1/h | 24.4 | llm_confirmed (0.6) | T2:row1:col1, T2:row1:col2, Mim_2026_table_1:row0:col1, Mim_2026_table_1:row0:col2, Mim_2026_table_1:row0:col3, Mim_2026_table_1:row0:col4 |
| Total clearance, CL | `Q22` · CL | 286.01 | CL |  |  | cl | 5.22 | exact (1) | T2:row2:col2, T2:row2:col3, T2:row2:col4, Mim_2026_table_1:row1:col2, Mim_2026_table_1:row1:col3, Mim_2026_table_1:row1:col4 |
| Volume of central compartment, V1 | `Q61` · V | 4039.63 | mL/kg | 0.2828 | m3 | L | 11.2 | boundary_compartment (0.9) | T2:row3:col2, T2:row3:col3, T2:row3:col4, Mim_2026_table_1:row2:col2, Mim_2026_table_1:row2:col3, Mim_2026_table_1:row2:col4 |
| Inter-compartmental clearance, Q | `Q30` · Q | 20636.48 | mL/h/kg | 0.0004013 | m3/s | L/h | 36.0 | llm_confirmed (0.6) | T2:row5:col2, T2:row5:col3, T2:row5:col4, Mim_2026_table_1:row4:col2, Mim_2026_table_1:row4:col3, Mim_2026_table_1:row4:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Total clearance, CL' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q63 ('Volume of central compartment, V2', value '41817.36') — already have one for this compound
- implicit units: 'Absorption rate constant, Ka' → 1/h (from the paper text: "Text states 'The estimated absorption rate constant (0.28 h⁻¹)' and 'The absorption rate constants (Ka) were fixed at 0.")
- implicit units: 'Volume of central compartment, V1' → mL/kg (from the paper text: "Text states 'a moderate volume of distribution (4,039.63 mL/kg)' matching V1 = 4039.63.")
- implicit units: 'Inter-compartmental clearance, Q' → mL/h/kg (from the paper text: "Text reports MQ clearance as '286 mL/h/kg'; Q is an intercompartmental clearance of the same model, so it shares the bod")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Total clearance, CL); Q63 (Volume of central compartment, V1); Q30 (Inter-compartmental clearance, Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=artesunate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Volume of central compartment, V1' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (19 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['artesunate', 'dihydroartemisinin', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `parameters[volume of central compartment, v1].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | artesunate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | artesunate | unknown | mismatch |

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
| C5_dimension_Q22 | fail | [length] ** 3 | CL | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_1:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4', 'Mim_2026_table_1:row4:col2', 'Mim_2026_table_1:row4:col3', 'Mim_2026_table_1:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row1:col1', 'T2:row1:col2', 'Mim_2026_table_1:row0:col1', 'Mim_2026_table_1:row0:col2', 'Mim_2026_table_1:row0:col3', 'Mim_2026_table_1:row0:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'Mim_2026_table_1:row2:col2', 'Mim_2026_table_1:row2:col3', 'Mim_2026_table_1:row2:col4'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 286 | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4', 'Mim_2026_table_1:row1:col2', 'Mim_2026_table_1:row1:col3', 'Mim_2026_table_1:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 283 L | ['T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4', 'Mim_2026_table_1:row2:col2', 'Mim_2026_table_1:row2:col3', 'Mim_2026_table_1:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartesunate%5D%20Artesunate_Mim2026_reference&body=Drug%3A%20artesunate%0ARecord%3A%20Artesunate_Mim2026_reference%0APaper%3A%20Mim_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artesunate/Artesunate_Mim2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:46 UTC</sub>
