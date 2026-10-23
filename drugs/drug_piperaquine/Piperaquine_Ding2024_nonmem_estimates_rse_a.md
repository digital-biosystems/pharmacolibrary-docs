<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Ding_2024 \u00b7 nonmem_estimates_rse_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Ding2024_nonmem_estimates_rse_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The piperaquine record is rejected because the amodiaquine oral clearance CL/F of 6780 L/h and V/F of 272000 L are physiologically implausible, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Ding2024_nonmem_estimates_rse_a" status="rejected" stale="false" population="pregnant women with uncomplicated Plasmodium falciparum malaria" measured-compound="piperaquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Ding J, Hoglund RM, Tagbor H, Tinto H, Valéa I, Mwapasa V et al. Population pharmacokinetics of amodiaquine and piperaquine in African pregnant women with uncomplicated Plasmodium falciparum infections. CPT: pharmacometrics & systems pharmacology 13(11):1893–1903 (2024).
  ·  DOI: [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211)

## Population and dosing

**Population:** pregnant women with uncomplicated Plasmodium falciparum malaria · condition uncomplicated malaria · age group adult · n = 755.

**Dosing:** 513, 540 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| FAQ (%) | Fab | 100 |  |  |
| Ka (1/h) | kabs | 0.589 | 1/h |  |
| MTT (h) | MTT | 0.236 | h |  |
| Number of transit compartment | n_transit | 2 |  |  |
| CL/FAQ (L/h) | CL/F | 6780 | L/h | 4.9 |
| VC/FAQ (L) | V/F | 272000 | L | 8.9 |
| CL/FDEAQ (L/h) | CL | 38.3 | L/h | 9.6 |
| VC/FDEAQ (L) | V1 | 861 | L | 15.7 |
| Q/FDEAQ (L/h) | Q | 81.7 | L/h | 7.0 |
| Vp/FDEAQ (L) | V2 | 13200 | L | 13.4 |
| gestational_age_on_faq | gestational_age_on_faq | 1.28 |  | 25.0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.115). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The piperaquine record is rejected because the amodiaquine oral clearance CL/F of 6780 L/h and V/F of 272000 L are physiologically implausible, indicating a unit or scale extraction error.**

The model is a parent–metabolite structure for amodiaquine with the metabolite desethylamodiaquine, yet the drug is listed as piperaquine, and the only piperaquine entry is an Frel covariate effect with no value. The amodiaquine CL/F of 6780 L/h and V/F of 272000 L fall far outside physiological ranges, consistent with a unit or scale extraction error. A reported unit could not be converted to SI, so the parameter was recorded without an SI value, making the magnitude check fail. Extracted — amodiaquine: Fab 100, kabs 0.589 1/h, n_transit 2, CL/F 6.78e+03 L/h, V/F 2.72e+05 L; piperaquine: MTT 0.236 h; desethylamodiaquine: CL 38.3 L/h, V1 861 L, Q 81.7 L/h, V2 1.32e+04 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has amodiaquine → desethylamodiaquine (metabolism), the second reading none; it also differs on 22 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| FAQ (%) | `Q40` · Fab | 100 |  |  |  |  |  | llm (0.6) | Ding_2024_table_2:row1:col1 |
| Ka (1/h) | `Q49` · kabs | 0.589 | 1/h | 0.0001636 | 1/s | 1/h |  | exact (1) | Ding_2024_table_2:row2:col1 |
| MTT (h) | `Q81` · MTT | 0.236 | h |  |  | h |  | exact (1) | Ding_2024_table_2:row3:col1 |
| Number of transit compartment | `Q311` · n_transit | 2 |  |  |  |  |  | llm_confirmed (0.6) | Ding_2024_table_2:row4:col1 |
| CL/FAQ (L/h) | `Q27` · CL/F | 6780 | L/h | 0.001883 | m3/s | l/h | 4.9 | llm (0.6) | Ding_2024_table_2:row5:col1 |
| VC/FAQ (L) | `Q76` · V/F | 272000 | L | 272 | m3 | l | 8.9 | llm (0.6) | Ding_2024_table_2:row6:col1 |
| CL/FDEAQ (L/h) | `Q22` · CL | 38.3 | L/h | 1.064e-05 | m3/s | l/h | 9.6 | exact (1) | Ding_2024_table_2:row9:col1 |
| VC/FDEAQ (L) | `Q63` · V1 | 861 | L | 0.861 | m3 | l | 15.7 | exact (1) | Ding_2024_table_2:row10:col1 |
| Q/FDEAQ (L/h) | `Q30` · Q | 81.7 | L/h | 2.269e-05 | m3/s | l/h | 7.0 | exact (1) | Ding_2024_table_2:row11:col1 |
| Vp/FDEAQ (L) | `Q64` · V2 | 13200 | L | 13.2 | m3 | l | 13.4 | exact (1) | Ding_2024_table_2:row12:col1 |
| gestational_age_on_faq | `Q900` · gestational_age_on_faq | 1.28 |  |  |  |  | 25.0 |  | Ding_2024_table_2:row15:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Baseline parasite counts (log scale) were implemented on relative oral bioavailability | Q87 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- covariate level 'Gestational age on FAQ (%)' → Q900:gestational_age_on_faq = 1.28 (linear_fractional on Q27)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'No unit stated in text or footnotes; Ka is a first-order absorption rate constant, conventionally in 1/h, consistent wit')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=piperaquine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- population split: 'nonmem estimates (%rse a )' subgroup of Ding_2024 (paper reports 2 populations: nonmem estimates (%rse a ), nonmem population estimates (%rse a ))
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 19 linked by role; re-tagged piperaquine→parent ×16, piperaquine→amodiaquine ×8, piperaquine→desethylamodiaquine ×8
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413211-tbl-0003:row1:col4 = '33.6 (27.2–40.2)'
- unparsed cell psp413211-tbl-0003:row4:col2 = '69.3 (62.5–76.1)'
- unparsed cell psp413211-tbl-0003:row5:col2 = '4010 (1600‐7600)'
- unparsed cell psp413211-tbl-0003:row5:col4 = '125 (37–308)'
- unparsed cell psp413211-tbl-0003:row6:col2 = '243 (63–472)'
- unparsed cell psp413211-tbl-0003:row7:col2 = '3860 (1240–5730)'
- unparsed cell psp413211-tbl-0003:row8:col2 = '100 (76–127)'
- unparsed cell psp413211-tbl-0003:row9:col2 = '22,800 (19,900–26,700)'
- unparsed cell psp413211-tbl-0003:row10:col2 = '0.215 (0.177–0.256)'
- unparsed cell psp413211-tbl-0003:row12:col2 = '−12.1 (−16.2 to −7.3)'
- unparsed cell Ding_2024_table_2:row1:col4 = '30.4 (24.9–35.4)'
- unparsed cell Ding_2024_table_2:row5:col2 = '6770 (6130–7440)'
- unparsed cell Ding_2024_table_2:row6:col2 = '270,000 (228,000–322,000)'
- unparsed cell Ding_2024_table_2:row7:col2 = '0.262 (0.200–0.338)'
- unparsed cell Ding_2024_table_2:row9:col2 = '38.0 (30.4–43.6)'
- unparsed cell Ding_2024_table_2:row9:col4 = '19.2 (6.2–36.2)'
- unparsed cell Ding_2024_table_2:row10:col2 = '897 (656–1240)'
- unparsed cell Ding_2024_table_2:row10:col4 = '191 (103–318)'
- unparsed cell Ding_2024_table_2:row11:col2 = '82.2 (72.1–94.5)'
- unparsed cell Ding_2024_table_2:row12:col2 = '13,400 (11,200–17,100)'
- unparsed cell Ding_2024_table_2:row13:col2 = '0.122 (0.096–0.148)'
- unparsed cell Ding_2024_table_2:row15:col2 = '1.29 (0.65–1.92)'
- companion parameter table 2 transcribed (21 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.115 (3/26 fields) | 23 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['amodiaquine', 'desethylamodiaquine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[baseline parasite counts (log scale) were implemented on relative oral bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 69.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/faq]` | 6780 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/fdeaq]` | 38.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose occasion on f]` |  | 23.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[faq]` | 100 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[gestational_age_on_faq]` | 1.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.589 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.236 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 2.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartment]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/fdeaq]` | 81.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f]` |  | 265 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 4240 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/faq]` | 272000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/fdeaq]` | 861 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/fdeaq]` | 13200 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` |  | 3880 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` |  | 22900 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 19.6 | 15.58 | 0.795 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2024_table_2:row9:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2024_table_2:row5:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2024_table_2:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Ding_2024_table_2:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Ding_2024_table_2:row10:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Ding_2024_table_2:row12:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Ding_2024_table_2:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 38.3 L/h |  |  | ['Ding_2024_table_2:row9:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.78e+03 L/h |  |  | ['Ding_2024_table_2:row5:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 861 L |  |  | ['Ding_2024_table_2:row10:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32e+04 L |  |  | ['Ding_2024_table_2:row12:col1'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 2.72e+05 L |  |  | ['Ding_2024_table_2:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperaquine%5D%20Piperaquine_Ding2024_nonmem_estimates_rse_a&body=Drug%3A%20piperaquine%0ARecord%3A%20Piperaquine_Ding2024_nonmem_estimates_rse_a%0APaper%3A%20Ding_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_estimates_rse_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:37 UTC</sub>
