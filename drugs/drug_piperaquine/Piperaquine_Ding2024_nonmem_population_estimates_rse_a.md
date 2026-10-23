<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Ding_2024 \u00b7 nonmem_population_estimates_rse_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Ding2024_nonmem_population_estimates_rse_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The piperaquine model was rejected because its simulated terminal half-life (42.036319922424354 h) is roughly ten times shorter than the paper's reported values (ratios 0.0749–0.1102), the output is the parent compartment rather than the measured analyte, the structure is a one-compartment enteral model instead of the paper's three-compartment parent–metabolite structure, and V2/F and ka were not extracted.

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Ding2024_nonmem_population_estimates_rse_a" status="rejected" stale="false" population="pregnant women with uncomplicated Plasmodium falciparum malaria" measured-compound="piperaquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Ding J, Hoglund RM, Tagbor H, Tinto H, Valéa I, Mwapasa V et al. Population pharmacokinetics of amodiaquine and piperaquine in African pregnant women with uncomplicated Plasmodium falciparum infections. CPT: pharmacometrics & systems pharmacology 13(11):1893–1903 (2024).
  ·  DOI: [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211)

## Population and dosing

**Population:** pregnant women with uncomplicated Plasmodium falciparum malaria · condition uncomplicated malaria · age group adult · n = 755.

**Dosing:** 513, 540 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.svg" alt="Piperaquine_Ding2024_nonmem_population_estimates_rse_a diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| F (%) | Fab | 100 |  |  |
| MTT (h) | MTT | 2.11 | h |  |
| Number of transit compartments | n_transit | 2 |  |  |
| CL/F (L/h) | CL/F | 69.9 | L/h | 5.1 |
| VC/F (L) | V1/F | 4240 | L | 36.0 |
| Q1/F (L/h) | Q/F | 265 | L/h | 39.9 |
| Vp1/F (L) | V2/F | 3880 | L | 28.7 |
| Q2/F (L/h) | Q2/F | 103 | L/h | 12.8 |
| Vp2/F (L) | V3/F | 22900 | L | 7.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The piperaquine model was rejected because its simulated terminal half-life (42.036319922424354 h) is roughly ten times shorter than the paper's reported values (ratios 0.0749–0.1102), the output is the parent compartment rather than the measured analyte, the structure is a one-compartment enteral model instead of the paper's three-compartment parent–metabolite structure, and V2/F and ka were not extracted.**

Simulated as the paper dosed it, the model's terminal half-life of 42.036319922424354 h differs from the paper's reported values by ratios of 0.0749 to 0.1102, far beyond tolerance. Parameter coverage found only 4 of 5 parameters emitted or defaulted, with V2/F (3880 L) missing, and ka was left at library defaults rather than estimated from this paper, which also affects the simulated profile. The model structure expected for a parent–metabolite system with three disposition compartments was instead built as a one-compartment enteral model, and the model output is the parent central compartment rather than the compartment of the measured piperaquine analyte. One reported unit could not be converted to SI, so that parameter reached the model builder without an SI value; the builder also defaulted Tlag and assumed F=1, Fm=1 with no molar correction. Extracted — piperaquine: Fab 100, MTT 2.11 h, n_transit 2, CL/F 69.9 L/h, V1/F 4.24e+03 L, Q/F 265 L/h, V2/F 3.88e+03 L, Q2/F 103 L/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has amodiaquine → desethylamodiaquine (metabolism), the second reading none; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 100 |  |  |  |  |  | exact (1) | psp413211-tbl-0003:row1:col1 |
| MTT (h) | `Q81` · MTT | 2.11 | h |  |  | h |  | exact (1) | psp413211-tbl-0003:row2:col1 |
| Number of transit compartments | `Q311` · n_transit | 2 |  |  |  |  |  | exact (1) | psp413211-tbl-0003:row3:col1 |
| CL/F (L/h) | `Q27` · CL/F | 69.9 | L/h | 1.942e-05 | m3/s | l/h | 5.1 | exact (1) | psp413211-tbl-0003:row4:col1 |
| VC/F (L) | `Q290` · V1/F | 4240 | L | 4.24 | m3 | l | 36.0 | exact (1) | psp413211-tbl-0003:row5:col1 |
| Q1/F (L/h) | `Q69` · Q/F | 265 | L/h | 7.361e-05 | m3/s | l/h | 39.9 | exact (1) | psp413211-tbl-0003:row6:col1 |
| Vp1/F (L) | `Q82` · V2/F | 3880 | L | 3.88 | m3 | l | 28.7 | exact (1) | psp413211-tbl-0003:row7:col1 |
| Q2/F (L/h) | `Q80` · Q2/F | 103 | L/h | 2.861e-05 | m3/s | l/h | 12.8 | special_case (0.95) | psp413211-tbl-0003:row8:col1 |
| Vp2/F (L) | `Q78` · V3/F | 22900 | L | 22.9 | m3 | l | 7.9 | exact (1) | psp413211-tbl-0003:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Baseline parasite counts (log scale) were implemented on relative oral bioavailability | Q87 | llm_confirmed |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped PD-category row 'Baseline parasites count on F (%)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413211-tbl-0003:row12:col1'])
- routed 'Dose occasion on F (%)' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=piperaquine
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [0]
- population split: 'nonmem population estimates (%rse a )' subgroup of Ding_2024 (paper reports 2 populations: nonmem estimates (%rse a ), nonmem population estimates (%rse a ))
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 19 linked by role; re-tagged piperaquine→parent ×16, piperaquine→amodiaquine ×8, piperaquine→desethylamodiaquine ×8
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

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
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['amodiaquine', 'desethylamodiaquine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[baseline parasite counts (log scale) were implemented on relative oral bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 69.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 69.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose occasion on f]` |  | 23.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 100 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 2.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 2.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | 2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f]` | 265 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f]` |  | 265 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f]` | 103 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 4240 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 4240 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` | 3880 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` |  | 3880 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` | 22900 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` |  | 22900 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413211-tbl-0003:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413211-tbl-0003:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp413211-tbl-0003:row6:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['psp413211-tbl-0003:row9:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['psp413211-tbl-0003:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp413211-tbl-0003:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 69.9 L/h | ['psp413211-tbl-0003:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.24e+03 L | ['psp413211-tbl-0003:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.88e+03 L | ['psp413211-tbl-0003:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=piperaquine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 470.4 | 42.04 | 0.0894 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 561.6 | 42.04 | 0.0749 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 381.6 | 42.04 | 0.1102 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 420 | 42.04 | 0.1001 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 513 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 513, 540 mg.

<dbs-fmusim paramsurl="drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a/Piperaquine_Ding2024_nonmem_population_estimates_rse_a_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a/Piperaquine_Ding2024_nonmem_population_estimates_rse_a_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Piperaquine_Ding2024_nonmem_population_estimates_rse_a_params.json` · controls `Piperaquine_Ding2024_nonmem_population_estimates_rse_a_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperaquine%5D%20Piperaquine_Ding2024_nonmem_population_estimates_rse_a&body=Drug%3A%20piperaquine%0ARecord%3A%20Piperaquine_Ding2024_nonmem_population_estimates_rse_a%0APaper%3A%20Ding_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:37 UTC</sub>
