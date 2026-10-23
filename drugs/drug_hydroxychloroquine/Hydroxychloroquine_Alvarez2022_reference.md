<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;hydroxychloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/&quot;},{&quot;label&quot;:&quot;Alvarez_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_estimate&quot;,&quot;label&quot;:&quot;Balevic_2019_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_postnatal&quot;,&quot;label&quot;:&quot;Balevic_2019_postnatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_postnatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Balevic2019_prenatal&quot;,&quot;label&quot;:&quot;Balevic_2019_prenatal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Balevic2019_prenatal.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_corresponding_estimated_value&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_corresponding_estimated_value_in_model_by_carmichael_et_al_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_corresponding_estimated_value.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_estimate&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Zahr2021_reference&quot;,&quot;label&quot;:&quot;Zahr_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# hydroxychloroquine — `Hydroxychloroquine_Alvarez2022_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 07:02 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="hydroxychloroquine" model-id="Hydroxychloroquine_Alvarez2022_reference" status="extracted" stale="true" population="hospitalized COVID-19 patients" measured-compound="hydroxychloroquine" parameterization="apparent" topology="general_linear"></div>

## Citation
Alvarez JC, Davido B, Moine P, Etting I, Annane D, Larabi IA et al. Population Pharmacokinetics of Hydroxychloroquine and 3 Metabolites in COVID-19 Patients and Pharmacokinetic/Pharmacodynamic Application. Pharmaceuticals (Basel, Switzerland) 15(2) (2022).
  ·  DOI: [10.3390/ph15020256](https://doi.org/10.3390/ph15020256)

## Population and dosing

**Population:** hospitalized COVID-19 patients · condition COVID-19 · age group adult · n = 100.

**Dosing:** 200, 400 mg, oral, multiple.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Lag (fixed) | tlag | 0.389 | h |  |  |
| KA (fixed) | kabs | 1.15 | 1/h |  |  |
| CL/F HCQ | CL/F | 5.60 | L/h | 15.5 |  |
| VP/F HCQ | V2/F | 1850 | L | 10.7 |  |
| CL HCQ_DesCQ | CLfm | 4.99 | L/h | 17.5 |  |
| CL DesCQ | CL | 49.8 | L/h | 23.7 | 1.327 (None% RSE) |
| CL HCQ_DesHCQ | CLfm | 9.63 | L/h | 10.3 |  |
| CL DesHCQ | CL | 8.89 | L/h | 27.8 |  |
| CL HCQ_DiDesCQ | CLfm | 1.84 | L/h | 10.8 |  |
| CL DiDesCQ | CL | 11.6 | L/h | 27.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hydroxychloroquine model was quarantined because elimination clearance and intercompartmental clearance had no extracted values and library placeholders were substituted, and only 1 of 5 parameters (CL 7.57) was covered.**

The record lists tlag 0.389, kabs 1.15, CL/F 9.16 and V2/F 2190 for hydroxychloroquine, but the parameter-coverage check found only 1 of 5 expected parameters covered, with tlag, kabs, CL/F and V2/F neither emitted nor defaulted. Hydroxychloroquine's elimination clearance and intercompartmental clearance had no source value, so library placeholders stood in and the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 with no molar correction, treating the parameterization as apparent. Extracted — hydroxychloroquine: tlag 0.389, kabs 1.15, CL/F 9.16, V2/F 2.19e+03, CL 7.57.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has hydroxychloroquine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Lag (fixed) | `Q83` · tlag | 0.389 | h | 1400 | s | h |  | llm (0.6) | pharmaceuticals-15-00256-t002:row2:col2 |  |
| KA (fixed) | `Q49` · kabs | 1.15 | 1/h | 0.0003194 | 1/s | 1/h |  | exact (1) | pharmaceuticals-15-00256-t002:row3:col1, pharmaceuticals-15-00256-t002:row3:col2 |  |
| CL/F HCQ | `Q27` · CL/F | 5.60 | L/h | 1.556e-06 | m3/s | L/h | 15.5 | llm_confirmed (0.6) | pharmaceuticals-15-00256-t002:row4:col2, pharmaceuticals-15-00256-t002:row4:col3, pharmaceuticals-15-00256-t002:row4:col4, pharmaceuticals-15-00256-t002:row4:col5 |  |
| VP/F HCQ | `Q82` · V2/F | 1850 | L | 1.85 | m3 | L | 10.7 | llm_confirmed (0.6) | pharmaceuticals-15-00256-t002:row5:col2, pharmaceuticals-15-00256-t002:row5:col3, pharmaceuticals-15-00256-t002:row5:col4, pharmaceuticals-15-00256-t002:row5:col5 |  |
| CL HCQ_DesCQ | `Q370` · CLfm | 4.99 | L/h | 1.386e-06 | m3/s | L/h | 17.5 | exact (1) | pharmaceuticals-15-00256-t002:row6:col2, pharmaceuticals-15-00256-t002:row6:col3, pharmaceuticals-15-00256-t002:row6:col4, pharmaceuticals-15-00256-t002:row6:col5 |  |
| CL DesCQ | `Q22` · CL | 49.8 | L/h | 1.383e-05 | m3/s | L/h | 23.7 | exact (1) | pharmaceuticals-15-00256-t002:row7:col2, pharmaceuticals-15-00256-t002:row7:col3, pharmaceuticals-15-00256-t002:row7:col4, pharmaceuticals-15-00256-t002:row7:col5 | 1.327 (None% RSE) |
| CL HCQ_DesHCQ | `Q370` · CLfm | 9.63 | L/h | 2.675e-06 | m3/s | L/h | 10.3 | exact (1) | pharmaceuticals-15-00256-t002:row8:col2, pharmaceuticals-15-00256-t002:row8:col3, pharmaceuticals-15-00256-t002:row8:col4, pharmaceuticals-15-00256-t002:row8:col5 |  |
| CL DesHCQ | `Q22` · CL | 8.89 | L/h | 2.469e-06 | m3/s | L/h | 27.8 | exact (1) | pharmaceuticals-15-00256-t002:row9:col2, pharmaceuticals-15-00256-t002:row9:col3, pharmaceuticals-15-00256-t002:row9:col4, pharmaceuticals-15-00256-t002:row9:col5 |  |
| CL HCQ_DiDesCQ | `Q370` · CLfm | 1.84 | L/h | 5.111e-07 | m3/s | L/h | 10.8 | exact (1) | pharmaceuticals-15-00256-t002:row10:col2, pharmaceuticals-15-00256-t002:row10:col3, pharmaceuticals-15-00256-t002:row10:col4, pharmaceuticals-15-00256-t002:row10:col5 |  |
| CL DiDesCQ | `Q22` · CL | 11.6 | L/h | 3.222e-06 | m3/s | L/h | 27.2 | exact (1) | pharmaceuticals-15-00256-t002:row11:col2, pharmaceuticals-15-00256-t002:row11:col3, pharmaceuticals-15-00256-t002:row11:col4, pharmaceuticals-15-00256-t002:row11:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Q1']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL HCQ' routed out of structural estimates ('Inter Individual Variability (ω)')
- table section iiv: 'VP HCQ' routed out of structural estimates ('Inter Individual Variability (ω)')
- table section iiv: 'CL DesCQ' routed out of structural estimates ('Inter Individual Variability (ω)')
- table section iiv: 'CL DesHCQ' routed out of structural estimates ('Inter Individual Variability (ω)')
- table section iiv: 'CL DiDesCQ' routed out of structural estimates ('Inter Individual Variability (ω)')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'fixed' (tlag)
- unit_dimension_unknown: 'fixed' (kabs)
- routed 'Proportional HCQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive HCQ' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional DesCQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive DesCQ' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional DesHCQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive DesHCQ' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional DiDescCQ' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive DiDescCQ' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Lag (fixed)' → h (from the popPK convention: 'No unit stated in text or footnotes; lag times are conventionally in h, and 0.389 h is a plausible absorption lag time.')
- implicit units: 'KA (fixed)' → 1/h (from the popPK convention: 'No unit stated; KA is a first-order absorption rate constant, conventionally in 1/h, consistent with value 1.15.')
- implicit units: 'CL/F HCQ' → L/h (from the popPK convention: 'No unit stated; CL/F is apparent oral clearance, conventionally L/h, consistent with value 5.60 for HCQ.')
- implicit units: 'VP/F HCQ' → L (from the popPK convention: 'No unit stated; VP/F is a volume of distribution, conventionally L, consistent with value 1850 L for HCQ.')
- implicit units: 'CL HCQ_DesCQ' → L/h (from the popPK convention: 'No unit stated; CLfm is a clearance, conventionally L/h, consistent with value 4.99.')
- implicit units: 'CL DesCQ' → L/h (from the popPK convention: 'No unit stated; metabolite CL is a clearance, conventionally L/h, consistent with value 49.8.')
- implicit units: 'CL HCQ_DesHCQ' → L/h (from the popPK convention: 'No unit stated; CLfm is a clearance, conventionally L/h, consistent with value 9.63.')
- implicit units: 'CL DesHCQ' → L/h (from the popPK convention: 'No unit stated; metabolite CL is a clearance, conventionally L/h, consistent with value 8.89.')
- implicit units: 'CL HCQ_DiDesCQ' → L/h (from the popPK convention: 'No unit stated; CLfm is a clearance, conventionally L/h, consistent with value 1.84.')
- implicit units: 'CL DiDesCQ' → L/h (from the popPK convention: 'No unit stated; metabolite CL is a clearance, conventionally L/h, consistent with value 11.6.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=hydroxychloroquine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 47 linked by role; re-tagged parent→desethylchloroquine ×20, parent→desethylhydroxychloroquine ×20, parent→didesethylchloroquine ×20
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (8/24 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl descq].value` | 49.8 | 85.8 | mismatch |
| `gpt-oss-120b` | `parameters[cl deshcq].value` | 8.89 | 15.2 | mismatch |
| `gpt-oss-120b` | `parameters[cl didescq].value` | 11.6 | 20.5 | mismatch |
| `gpt-oss-120b` | `parameters[cl hcq_descq].value` | 4.99 | 7.57 | mismatch |
| `gpt-oss-120b` | `parameters[cl hcq_deshcq].value` | 9.63 | 11.5 | mismatch |
| `gpt-oss-120b` | `parameters[cl hcq_didescq].value` | 1.84 | 2.17 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f hcq]` | 5.60 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f hcq]` |  | 9.16 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 0.389 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` |  | 0.389 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f hcq]` | 1850 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f hcq]` |  | 2190 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | hydroxychloroquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | hydroxychloroquine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row7:col2', 'pharmaceuticals-15-00256-t002:row7:col3', 'pharmaceuticals-15-00256-t002:row7:col4', 'pharmaceuticals-15-00256-t002:row7:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row9:col2', 'pharmaceuticals-15-00256-t002:row9:col3', 'pharmaceuticals-15-00256-t002:row9:col4', 'pharmaceuticals-15-00256-t002:row9:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row11:col2', 'pharmaceuticals-15-00256-t002:row11:col3', 'pharmaceuticals-15-00256-t002:row11:col4', 'pharmaceuticals-15-00256-t002:row11:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row4:col2', 'pharmaceuticals-15-00256-t002:row4:col3', 'pharmaceuticals-15-00256-t002:row4:col4', 'pharmaceuticals-15-00256-t002:row4:col5'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row6:col2', 'pharmaceuticals-15-00256-t002:row6:col3', 'pharmaceuticals-15-00256-t002:row6:col4', 'pharmaceuticals-15-00256-t002:row6:col5'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row8:col2', 'pharmaceuticals-15-00256-t002:row8:col3', 'pharmaceuticals-15-00256-t002:row8:col4', 'pharmaceuticals-15-00256-t002:row8:col5'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['pharmaceuticals-15-00256-t002:row10:col2', 'pharmaceuticals-15-00256-t002:row10:col3', 'pharmaceuticals-15-00256-t002:row10:col4', 'pharmaceuticals-15-00256-t002:row10:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceuticals-15-00256-t002:row3:col1', 'pharmaceuticals-15-00256-t002:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pharmaceuticals-15-00256-t002:row5:col2', 'pharmaceuticals-15-00256-t002:row5:col3', 'pharmaceuticals-15-00256-t002:row5:col4', 'pharmaceuticals-15-00256-t002:row5:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceuticals-15-00256-t002:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 49.8 L/h | ['pharmaceuticals-15-00256-t002:row7:col2', 'pharmaceuticals-15-00256-t002:row7:col3', 'pharmaceuticals-15-00256-t002:row7:col4', 'pharmaceuticals-15-00256-t002:row7:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.89 L/h | ['pharmaceuticals-15-00256-t002:row9:col2', 'pharmaceuticals-15-00256-t002:row9:col3', 'pharmaceuticals-15-00256-t002:row9:col4', 'pharmaceuticals-15-00256-t002:row9:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.6 L/h | ['pharmaceuticals-15-00256-t002:row11:col2', 'pharmaceuticals-15-00256-t002:row11:col3', 'pharmaceuticals-15-00256-t002:row11:col4', 'pharmaceuticals-15-00256-t002:row11:col5'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.6 L/h | ['pharmaceuticals-15-00256-t002:row4:col2', 'pharmaceuticals-15-00256-t002:row4:col3', 'pharmaceuticals-15-00256-t002:row4:col4', 'pharmaceuticals-15-00256-t002:row4:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.85e+03 L | ['pharmaceuticals-15-00256-t002:row5:col2', 'pharmaceuticals-15-00256-t002:row5:col3', 'pharmaceuticals-15-00256-t002:row5:col4', 'pharmaceuticals-15-00256-t002:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 1 covered | neither emitted nor in defaulted[]: ['tlag', 'kabs', 'CL/F', 'V2/F'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 40 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 40 |  | no simulated metric for this quantity (single reference sim) |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxychloroquine%5D%20Hydroxychloroquine_Alvarez2022_reference&body=Drug%3A%20hydroxychloroquine%0ARecord%3A%20Hydroxychloroquine_Alvarez2022_reference%0APaper%3A%20Alvarez_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hydroxychloroquine/Hydroxychloroquine_Alvarez2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:02 UTC</sub>
