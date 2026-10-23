<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;cannabinoids&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/&quot;},{&quot;label&quot;:&quot;Serrano-Rodr\u00edguez_2025 \u00b7 cbg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cannabinoids_Harrison2022_reference&quot;,&quot;label&quot;:&quot;Harrison_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Harrison2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_Nachnani2024_reference&quot;,&quot;label&quot;:&quot;Nachnani_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Nachnani2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_chov2025_r_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_r_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_chov2025_s_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_s_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_s_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cannabinoids — `Cannabinoids_SerranoRodrguez2025_cbg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> This record was reviewed on 2026-10-05 09:24 UTC (Rejected), but the paper was screened again on 2026-10-07 05:53 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record was rejected because the metabolite apparent clearance CLm/F (0.016 L/h/kg) for cannabigerol glucuronide was combined with the parent's bioavailability F (0.29), applying a double correction to an already apparent parameter.

<div class="pk-model-meta" hidden drug="cannabinoids" model-id="Cannabinoids_SerranoRodrguez2025_cbg" status="rejected" stale="true" population="healthy adult horses" measured-compound="cannabigerol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Serrano-Rodríguez JM, Miraz R, Saitua A, Díez de Castro E, Ledesma-Escobar C, Ferreiro-Vera C et al. Metabolism, pharmacokinetics, and bioavailability of cannabigerol in horses following intravenous and oral administration with micellar and oil formulations. Frontiers in veterinary science 12:1688214 (2025).
  ·  DOI: [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult · n = 8.

**Dosing:** 70, 700 mg, iv, oral, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| F | Fab | 0.29 |  | 0.29 (None% RSE) |
| ka (1/h) | kabs | 0.95 |  | 0.41 (None% RSE) |
| β | kel | 1.43 |  |  |
| Cl (l/h/kg) | CL | 1.75 | l/h/kg |  |
| Vc (L/kg) | V1 | 43 | L/kg |  |
| Q (L/h/kg) | Q | 82.35 | L/h/kg |  |
| Vp (L/kg) | V2 | 41.29 | L/kg |  |
| Vm (L/kg) | Vmax | 0.0041 | L/kg |  |
| Clm (L/h/kg) | CLm/F | 0.016 | L/h/kg |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the metabolite apparent clearance CLm/F (0.016 L/h/kg) for cannabigerol glucuronide was combined with the parent's bioavailability F (0.29), applying a double correction to an already apparent parameter.**

The model links cannabigerol to its glucuronide metabolite via metabolism, and reports the metabolite clearance as CLm/F, an apparent value that already accounts for the unknown fraction converted (fm not identifiable). Applying the parent's absolute bioavailability F of 0.29 on top of this apparent clearance corrects the same quantity twice, violating apparent-parameter coherence. All other parameters (kabs 0.95 1/h, kel 1.43 1/h, CL 1.75 L/h/kg, V1 43 L/kg, Q 82.35 L/h/kg, V2 41.29 L/kg, Vmax 0.0041 L/kg) were extracted with values and units. Extracted — cannabinoids: Fab 0.29, kabs 0.95, kel 1.43, CL 1.75 l/h/kg, V1 43 L/kg, Q 82.3 L/h/kg, V2 41.3 L/kg, Vmax 0.0041 L/kg, … (+1).

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.29 |  |  |  |  | exact (1) | Serrano-Rodríguez_2025_table_S1:row1:col4, Serrano-Rodríguez_2025_table_S1:row1:col5, Serrano-Rodríguez_2025_table_S1:row1:col6, Serrano-Rodríguez_2025_table_S1:row1:col7 | 0.29 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.95 |  |  |  |  | exact (1) | Serrano-Rodríguez_2025_table_S1:row2:col4, Serrano-Rodríguez_2025_table_S1:row2:col5, Serrano-Rodríguez_2025_table_S1:row2:col6, Serrano-Rodríguez_2025_table_S1:row2:col7 | 0.41 (None% RSE) |
| β | `Q47` · kel | 1.43 |  |  |  |  | exact (1) | Serrano-Rodríguez_2025_table_S1:row4:col4, Serrano-Rodríguez_2025_table_S1:row4:col5, Serrano-Rodríguez_2025_table_S1:row4:col6, Serrano-Rodríguez_2025_table_S1:row4:col7 |  |
| Cl (l/h/kg) | `Q22` · CL | 1.75 | l/h/kg | 3.403e-05 | m3/s | l/(h·kg) | exact (1) | Serrano-Rodríguez_2025_table_S1:row6:col4, Serrano-Rodríguez_2025_table_S1:row6:col5, Serrano-Rodríguez_2025_table_S1:row6:col6, Serrano-Rodríguez_2025_table_S1:row6:col7 |  |
| Vc (L/kg) | `Q63` · V1 | 43 | L/kg | 3.01 | m3 | l/kg | exact (1) | Serrano-Rodríguez_2025_table_S1:row7:col4, Serrano-Rodríguez_2025_table_S1:row7:col5, Serrano-Rodríguez_2025_table_S1:row7:col6, Serrano-Rodríguez_2025_table_S1:row7:col7 |  |
| Q (L/h/kg) | `Q30` · Q | 82.35 | L/h/kg | 0.001601 | m3/s | l/(h·kg) | exact (1) | Serrano-Rodríguez_2025_table_S1:row8:col4, Serrano-Rodríguez_2025_table_S1:row8:col5, Serrano-Rodríguez_2025_table_S1:row8:col6 |  |
| Vp (L/kg) | `Q64` · V2 | 41.29 | L/kg | 2.89 | m3 | l/kg | exact (1) | Serrano-Rodríguez_2025_table_S1:row9:col4, Serrano-Rodríguez_2025_table_S1:row9:col5, Serrano-Rodríguez_2025_table_S1:row9:col6, Serrano-Rodríguez_2025_table_S1:row9:col7 |  |
| Vm (L/kg) | `Q66` · Vmax | 0.0041 | L/kg | 0.000287 | m3 | l/kg | special_case (0.95) | Serrano-Rodríguez_2025_table_S1:row10:col4, Serrano-Rodríguez_2025_table_S1:row10:col5, Serrano-Rodríguez_2025_table_S1:row10:col6, Serrano-Rodríguez_2025_table_S1:row10:col7 |  |
| Clm (L/h/kg) | `Q351` · CLm/F | 0.016 | L/h/kg | 3.111e-07 | m3/s | l/(h·kg) | exact (1) | Serrano-Rodríguez_2025_table_S1:row12:col4, Serrano-Rodríguez_2025_table_S1:row12:col5, Serrano-Rodríguez_2025_table_S1:row12:col6, Serrano-Rodríguez_2025_table_S1:row12:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Micellar' — extend the ontology if this is a real PK parameter (source ['Serrano-Rodríguez_2025_table_3:row1:col2', 'Serrano-Rodríguez_2025_table_3:row1:col3', 'Serrano-Rodríguez_2025_table_3:row2:col2', 'Serrano-Rodríguez_2025_table_3:row2:col3', 'Serrano-Rodríguez_2025_table_3:row3:col2', 'Serrano-Rodríguez_2025_table_3:row3:col3'])
- dropped unlinked row (NIL): 'Oil' — extend the ontology if this is a real PK parameter (source ['Serrano-Rodríguez_2025_table_3:row4:col3', 'Serrano-Rodríguez_2025_table_3:row5:col3', 'Serrano-Rodríguez_2025_table_3:row6:col2', 'Serrano-Rodríguez_2025_table_3:row6:col3'])
- dropped unlinked row (NIL): 'Covka_formulation' — extend the ontology if this is a real PK parameter (source ['Serrano-Rodríguez_2025_table_S1:row3:col4', 'Serrano-Rodríguez_2025_table_S1:row3:col5', 'Serrano-Rodríguez_2025_table_S1:row3:col6'])
- routed 'Covγ_formulation' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cannabigerol
- population split: 'cbg' subgroup of Serrano-Rodríguez_2025 (paper reports 3 populations: cbg, cbg-g, iv formulation of cbg at 1.0 mg/kg)
- review gap-fill skipped: this record measures 'cannabigerol', not cannabinoids — the review values are the parent's

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Serrano-Rodríguez_2025_table_S1:row8:col4', 'Serrano-Rodríguez_2025_table_S1:row8:col5', 'Serrano-Rodríguez_2025_table_S1:row8:col6'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Serrano-Rodríguez_2025_table_S1:row12:col4', 'Serrano-Rodríguez_2025_table_S1:row12:col5', 'Serrano-Rodríguez_2025_table_S1:row12:col6', 'Serrano-Rodríguez_2025_table_S1:row12:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |
| C5_dimension_Q66 | pass | [length] ** 3 |  | ['Serrano-Rodríguez_2025_table_S1:row10:col4', 'Serrano-Rodríguez_2025_table_S1:row10:col5', 'Serrano-Rodríguez_2025_table_S1:row10:col6', 'Serrano-Rodríguez_2025_table_S1:row10:col7'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Serrano-Rodríguez_2025_table_S1:row4:col4', 'Serrano-Rodríguez_2025_table_S1:row4:col5', 'Serrano-Rodríguez_2025_table_S1:row4:col6', 'Serrano-Rodríguez_2025_table_S1:row4:col7'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Serrano-Rodríguez_2025_table_S1:row2:col4', 'Serrano-Rodríguez_2025_table_S1:row2:col5', 'Serrano-Rodríguez_2025_table_S1:row2:col6', 'Serrano-Rodríguez_2025_table_S1:row2:col7'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.29 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 122 L/h | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.01e+03 L | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.89e+03 L | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabinoids%5D%20Cannabinoids_SerranoRodrguez2025_cbg&body=Drug%3A%20cannabinoids%0ARecord%3A%20Cannabinoids_SerranoRodrguez2025_cbg%0APaper%3A%20Serrano-Rodr%C3%ADguez_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabinoids/Cannabinoids_SerranoRodrguez2025_cbg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:53 UTC</sub>
