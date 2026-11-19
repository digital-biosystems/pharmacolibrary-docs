<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorouracil&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/&quot;},{&quot;label&quot;:&quot;Suthahar_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daher2014_final_model&quot;,&quot;label&quot;:&quot;Daher_2014_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daher2014_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daryani2016_estimate_se&quot;,&quot;label&quot;:&quot;Daryani_2016_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daryani2016_estimate_se.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Schmulenson2023_estimate&quot;,&quot;label&quot;:&quot;Schmulenson_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Schmulenson2023_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluorouracil — `Fluorouracil_Suthahar2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> C2_reference failed (ratio None).

<div class="pk-model-meta" hidden drug="Fluorouracil" model-id="Fluorouracil_Suthahar2026_reference" status="needs_review" stale="false" population="cancer patients" measured-compound="5-Fluorouracil" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Suthahar T, Veerabhadrappa J, Munshi R, Anbu Raj E, Gota V, Ivaturi V et al. Factors influencing pharmacokinetics of 5-fluorouracil in cancer patients: a systematic review of population pharmacokinetic models. European journal of clinical pharmacology 82(5):126 (2026).
  ·  DOI: [10.1007/s00228-026-04043-5](https://doi.org/10.1007/s00228-026-04043-5)

## Population and dosing

**Population:** cancer patients · condition cancer (chemotherapy patients) · age group adult.

**Dosing:** 300, 500 mg/m2/day, iv, multiple.

**Dosed compound ≠ measured compound:** dosed 5-Fluorouracil (also capecitabine, tegafur/UFT, S-1 pro-drugs), measured 5-Fluorouracil.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 3 covariate effects.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Structural model | equation variable | 23.07 |  |
| methods_for_final_model_evaluation | methods_for_final_model_evaluation | 84.61 |  |
| number_of_samples_used_for_analyses | number_of_samples_used_for_analyses | 46.15 |  |
| Cl(L/h) | CL | 79 | L/h |
| Vc(L) | V1 | 24 | L |
| Vp(L) | V2 | 334 | L |
| Q(L/h) | Q | 19.6 | L/h |
| theta_equation_variable_category | theta_equation_variable_category | 84.61 |  |
| 5-FU K a | kabs | 0.551 | (1/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.438). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C2_reference failed (ratio None).**

Extracted — fluorouracil: CL 79 L/h, V1 24 L, V2 334 L, Q 19.6 L/h, kabs 0.551 (1/h).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has 5-Fluorouracil (also capecitabine, tegafur/UFT, S-1 pro-drugs), the second reading 5-Fluorouracil (IV) and pro‑drugs (Tegafur, Capecitabine, UFT, S‑1); it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Structural model | `Q900` · equation variable | 23.07 |  | 23.07 |  |  | llm (0.6) | Suthahar_2026_table_10:row17:col14 |
| methods_for_final_model_evaluation | `Q900` · methods_for_final_model_evaluation | 84.61 |  |  |  |  |  | Suthahar_2026_table_10:row21:col14 |
| number_of_samples_used_for_analyses | `Q900` · number_of_samples_used_for_analyses | 46.15 |  |  |  |  |  | Suthahar_2026_table_10:row25:col14 |
| Cl(L/h) | `Q22` · CL | 79 | L/h | 2.194e-05 | m3/s | l/h | exact (1) | Suthahar_2026_table_5:row0:col4, Suthahar_2026_table_5:row1:col4, Suthahar_2026_table_5:row3:col4, Suthahar_2026_table_5:row4:col4, Suthahar_2026_table_5:row5:col4, Suthahar_2026_table_5:row6:col4, Suthahar_2026_table_5:row7:col4, Suthahar_2026_table_5:row8:col4, Suthahar_2026_table_5:row9:col4, Suthahar_2026_table_6:row0:col4, Suthahar_2026_table_6:row1:col4, Suthahar_2026_table_6:row2:col4 |
| Vc(L) | `Q63` · V1 | 24 | L | 0.024 | m3 | l | exact (1) | Suthahar_2026_table_5:row0:col5, Suthahar_2026_table_5:row2:col5, Suthahar_2026_table_5:row3:col5, Suthahar_2026_table_5:row4:col5, Suthahar_2026_table_5:row5:col5, Suthahar_2026_table_5:row6:col5, Suthahar_2026_table_5:row7:col5, Suthahar_2026_table_5:row8:col5, Suthahar_2026_table_5:row9:col5, Suthahar_2026_table_6:row0:col5, Suthahar_2026_table_6:row1:col5, Suthahar_2026_table_6:row2:col5, Suthahar_2026_table_7:row0:col5, Suthahar_2026_table_7:row1:col5, Suthahar_2026_table_7:row3:col5 |
| Vp(L) | `Q64` · V2 | 334 | L | 0.334 | m3 | l | exact (1) | Suthahar_2026_table_6:row0:col6, Suthahar_2026_table_6:row1:col6, Suthahar_2026_table_6:row2:col6 |
| Q(L/h) | `Q30` · Q | 19.6 | L/h | 5.444e-06 | m3/s | l/h | exact (1) | Suthahar_2026_table_6:row0:col7, Suthahar_2026_table_6:row1:col7, Suthahar_2026_table_6:row2:col7 |
| theta_equation_variable_category | `Q900` · theta_equation_variable_category | 84.61 |  |  |  |  |  | Suthahar_2026_table_10:row26:col14 |
| 5-FU K a | `Q49` · kabs | 0.551 | (1/h) | 0.0001531 | 1/s | 1/h | review_gapfill (0.7) | Booka_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Title The title identifies the drug(s) and patient population(s) studied' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row0:col14'])
- dropped unlinked row (NIL): 'Abstract Name of drug(s) studied' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row1:col14'])
- dropped unlinked row (NIL): 'Patient population studied' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row2:col14'])
- dropped unlinked row (NIL): 'Primary objective(s)' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row3:col14'])
- dropped unlinked row (NIL): 'Major findings' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row4:col14'])
- dropped unlinked row (NIL): 'Background/Introduction Study rationale' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row5:col14'])
- dropped unlinked row (NIL): 'Specific objectives/hypothesis' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row6:col14'])
- dropped unlinked row (NIL): 'Methods Ethics approval' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row7:col14'])
- dropped unlinked row (NIL): 'Eligibility criteria of study participants' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row8:col14'])
- dropped unlinked row (NIL): 'Co-administration or food' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row9:col14'])
- dropped unlinked row (NIL): 'Dosing/frequency/formulation' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row10:col14'])
- dropped unlinked row (NIL): 'Sampling time and frequency' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row11:col14'])
- dropped unlinked row (NIL): 'Type of sample' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row12:col14'])
- dropped unlinked row (NIL): 'Bioanalytical method' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row13:col14'])
- dropped unlinked row (NIL): 'Modeling software' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row14:col14'])
- dropped unlinked row (NIL): 'Modeling assumptions made' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row15:col14'])
- dropped unlinked row (NIL): 'Estimation method(s) used' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row16:col14'])
- dropped unlinked row (NIL): 'Co-variates tested' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row18:col14'])
- routed 'Co-variates analysis strategy' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate level 'Methods for final model evaluation' → Q900:methods_for_final_model_evaluation = 84.61 (additive_shift on the model)
- dropped unlinked row (NIL): 'External model validation' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row22:col14'])
- dropped unlinked row (NIL): 'Model selection criteria (OFV, AIC, VPC etc)' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row23:col14'])
- covariate level 'Number of samples used for analyses' → Q900:number_of_samples_used_for_analyses = 46.15 (additive_shift on the model)
- dropped unlinked row (NIL): 'Results Demographics details and clinical variables' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row27:col14'])
- dropped unlinked row (NIL): 'Concentration vs. time plot' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row28:col14'])
- dropped unlinked row (NIL): 'Schematic of the final model' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row29:col14'])
- dropped unlinked row (NIL): 'Table of final model parameters' — extend the ontology if this is a real PK parameter (source ['Suthahar_2026_table_10:row30:col14'])
- routed 'CV%/μg/ml' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CL(L/h)', value '1230') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-Fluorouracil
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- gap-filled Q49 (kabs) from Booka_2016's review values (primary lacked it)
- skipped review gap-fill of TLAG from Hill_2020: its label names a different analyte ('tmax') — 'time shift of tmax of the free Pt'
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C2_reference failed (ratio None))

**Extraction notes:**
- table Suthahar_2026_table_5: unparsed_numeric_cell
- transposed table Suthahar_2026_table_5: logical view retains original source coordinates
- companion parameter table 5 transcribed (26 record(s))
- table Suthahar_2026_table_6: unparsed_numeric_cell
- transposed table Suthahar_2026_table_6: logical view retains original source coordinates
- companion parameter table 6 transcribed (15 record(s))
- table Suthahar_2026_table_7: unparsed_numeric_cell
- transposed table Suthahar_2026_table_7: logical view retains original source coordinates
- companion parameter table 7 transcribed (8 record(s))
- table Suthahar_2026_table_8: unparsed_numeric_cell
- transposed table Suthahar_2026_table_8: logical view retains original source coordinates
- companion parameter table 8 transcribed (5 record(s))
- LLM selected parameter table(s) 5, 6, 7, 8

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['tegafur', '5-fluorouracil', 'metabolic activation'], ['capecitabine', '5-fluorouracil', 'metabolic activation'], ['s-1', '5-fluorouracil', 'metabolic activation'], ['uft', '5-fluorouracil', 'metabolic activation']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[dosing/frequency/formulation]` |  | 92.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[methods_for_final_model_evaluation].covariate_forms` | ['additive_shift'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[number_of_samples_used_for_analyses].covariate_forms` | ['additive_shift'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[q]` | 19.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[structural model]` | 23.07 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_equation_variable_category]` | 84.61 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q900_category]` |  | 84.61 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | 5-Fluorouracil (also capecitabine, tegafur/UFT, S-1 pro-drugs) | 5-Fluorouracil (IV) and pro‑drugs (Tegafur, Capecitabine, UFT, S‑1) | mismatch |

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
| C2_reference | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Suthahar_2026_table_5:row0:col4', 'Suthahar_2026_table_5:row1:col4', 'Suthahar_2026_table_5:row3:col4', 'Suthahar_2026_table_5:row4:col4', 'Suthahar_2026_table_5:row5:col4', 'Suthahar_2026_table_5:row6:col4', 'Suthahar_2026_table_5:row7:col4', 'Suthahar_2026_table_5:row8:col4', 'Suthahar_2026_table_5:row9:col4', 'Suthahar_2026_table_6:row0:col4', 'Suthahar_2026_table_6:row1:col4', 'Suthahar_2026_table_6:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Suthahar_2026_table_6:row0:col7', 'Suthahar_2026_table_6:row1:col7', 'Suthahar_2026_table_6:row2:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Booka_2016:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Suthahar_2026_table_5:row0:col5', 'Suthahar_2026_table_5:row2:col5', 'Suthahar_2026_table_5:row3:col5', 'Suthahar_2026_table_5:row4:col5', 'Suthahar_2026_table_5:row5:col5', 'Suthahar_2026_table_5:row6:col5', 'Suthahar_2026_table_5:row7:col5', 'Suthahar_2026_table_5:row8:col5', 'Suthahar_2026_table_5:row9:col5', 'Suthahar_2026_table_6:row0:col5', 'Suthahar_2026_table_6:row1:col5', 'Suthahar_2026_table_6:row2:col5', 'Suthahar_2026_table_7:row0:col5', 'Suthahar_2026_table_7:row1:col5', 'Suthahar_2026_table_7:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Suthahar_2026_table_6:row0:col6', 'Suthahar_2026_table_6:row1:col6', 'Suthahar_2026_table_6:row2:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 79 | ['Suthahar_2026_table_5:row0:col4', 'Suthahar_2026_table_5:row1:col4', 'Suthahar_2026_table_5:row3:col4', 'Suthahar_2026_table_5:row4:col4', 'Suthahar_2026_table_5:row5:col4', 'Suthahar_2026_table_5:row6:col4', 'Suthahar_2026_table_5:row7:col4', 'Suthahar_2026_table_5:row8:col4', 'Suthahar_2026_table_5:row9:col4', 'Suthahar_2026_table_6:row0:col4', 'Suthahar_2026_table_6:row1:col4', 'Suthahar_2026_table_6:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 79 L/h | ['Suthahar_2026_table_5:row0:col4', 'Suthahar_2026_table_5:row1:col4', 'Suthahar_2026_table_5:row3:col4', 'Suthahar_2026_table_5:row4:col4', 'Suthahar_2026_table_5:row5:col4', 'Suthahar_2026_table_5:row6:col4', 'Suthahar_2026_table_5:row7:col4', 'Suthahar_2026_table_5:row8:col4', 'Suthahar_2026_table_5:row9:col4', 'Suthahar_2026_table_6:row0:col4', 'Suthahar_2026_table_6:row1:col4', 'Suthahar_2026_table_6:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 24 L | ['Suthahar_2026_table_5:row0:col5', 'Suthahar_2026_table_5:row2:col5', 'Suthahar_2026_table_5:row3:col5', 'Suthahar_2026_table_5:row4:col5', 'Suthahar_2026_table_5:row5:col5', 'Suthahar_2026_table_5:row6:col5', 'Suthahar_2026_table_5:row7:col5', 'Suthahar_2026_table_5:row8:col5', 'Suthahar_2026_table_5:row9:col5', 'Suthahar_2026_table_6:row0:col5', 'Suthahar_2026_table_6:row1:col5', 'Suthahar_2026_table_6:row2:col5', 'Suthahar_2026_table_7:row0:col5', 'Suthahar_2026_table_7:row1:col5', 'Suthahar_2026_table_7:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 334 L | ['Suthahar_2026_table_6:row0:col6', 'Suthahar_2026_table_6:row1:col6', 'Suthahar_2026_table_6:row2:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference/Fluorouracil_Suthahar2026_reference_modelica.zip" download>Fluorouracil_Suthahar2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference/Fluorouracil_Suthahar2026_reference_matlab.zip" download>Fluorouracil_Suthahar2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference/Fluorouracil_Suthahar2026_reference_matlab_simbio.zip" download>Fluorouracil_Suthahar2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference/Fluorouracil_Suthahar2026_reference_sbml.zip" download>Fluorouracil_Suthahar2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference/Fluorouracil_Suthahar2026_reference_cellml.zip" download>Fluorouracil_Suthahar2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Suthahar T, Veerabhadrappa J, Munshi R, Anbu Raj E, Gota V, Ivaturi V et al. Factors influencing pharmacokinetics of 5-fluorouracil in cancer patients: a systematic review of population pharmacokinetic models. European journal of clinical pharmacology 82(5):126 (2026). [doi:10.1007/s00228-026-04043-5](https://doi.org/10.1007/s00228-026-04043-5)

**This record:** Pharmacolibrary, model `Fluorouracil_Suthahar2026_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference>

```bibtex
@misc{pharmacolibrary_FluorouracilSuthahar2026reference,
  title  = {{Pharmacolibrary model Fluorouracil_Suthahar2026_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference},
  note   = {Parameters from doi:10.1007/s00228-026-04043-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Suthahar2026_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Suthahar2026_reference%0APaper%3A%20Suthahar_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorouracil/Fluorouracil_Suthahar2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:06 UTC</sub>
