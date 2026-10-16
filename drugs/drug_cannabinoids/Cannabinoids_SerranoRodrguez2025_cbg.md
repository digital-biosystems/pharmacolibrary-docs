<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;cannabinoids&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/&quot;},{&quot;label&quot;:&quot;Serrano-Rodr\u00edguez_2025 \u00b7 cbg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cannabinoids_Harrison2022_reference&quot;,&quot;label&quot;:&quot;Harrison_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Harrison2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_Nachnani2024_reference&quot;,&quot;label&quot;:&quot;Nachnani_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_Nachnani2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_chov2025_r_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_r_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_r_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cannabinoids_chov2025_s_hhc_population_pk_model&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_s_hhc_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cannabinoids/Cannabinoids_chov2025_s_hhc_population_pk_model.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cannabinoids — `Cannabinoids_SerranoRodrguez2025_cbg`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the metabolite apparent clearance CLm/F (0.016 L/h/kg) for cannabigerol glucuronide was combined with the parent's bioavailability F (0.29), applying a double correction to an already apparent parameter.**

The model links cannabigerol to its glucuronide metabolite via metabolism, and reports the metabolite clearance as CLm/F, an apparent value that already accounts for the unknown fraction converted (fm not identifiable). Applying the parent's absolute bioavailability F of 0.29 on top of this apparent clearance corrects the same quantity twice, violating apparent-parameter coherence. All other parameters (kabs 0.95 1/h, kel 1.43 1/h, CL 1.75 L/h/kg, V1 43 L/kg, Q 82.35 L/h/kg, V2 41.29 L/kg, Vmax 0.0041 L/kg) were extracted with values and units. Extracted — cannabinoids: Fab 0.29, kabs 0.95, kel 1.43, CL 1.75 l/h/kg, V1 43 L/kg, Q 82.3 L/h/kg, V2 41.3 L/kg, Vmax 0.0041 L/kg, … (+1).

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:24:32.252309+00:00) predates the upstream re-run (2026-10-07 05:53:11.199735+00:00). Current validate status: `rejected`.

## Citation
Serrano-Rodríguez JM et al., Metabolism, pharmacokinetics, and bioav…, Frontiers in veterinary sci… (2025)
  ·  DOI: [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214)

<div class="pk-model-meta" hidden drug="cannabinoids" model-id="Cannabinoids_SerranoRodrguez2025_cbg" status="rejected" stale="true" population="healthy adult horses" measured-compound="cannabigerol" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.29 | not captured | not captured | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row1:col4, Serrano-Rodríguez_2025_table_S1:row1:col5, Serrano-Rodríguez_2025_table_S1:row1:col6, Serrano-Rodríguez_2025_table_S1:row1:col7 | — | 0.29 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.95 | not captured | not captured | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row2:col4, Serrano-Rodríguez_2025_table_S1:row2:col5, Serrano-Rodríguez_2025_table_S1:row2:col6, Serrano-Rodríguez_2025_table_S1:row2:col7 | — | 0.41 (None% RSE) |
| β | `Q47` · kel | 1.43 | not captured | not captured | not captured | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row4:col4, Serrano-Rodríguez_2025_table_S1:row4:col5, Serrano-Rodríguez_2025_table_S1:row4:col6, Serrano-Rodríguez_2025_table_S1:row4:col7 | — | not captured |
| Cl (l/h/kg) | `Q22` · CL | 1.75 | l/h/kg | 3.4027777777777775e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row6:col4, Serrano-Rodríguez_2025_table_S1:row6:col5, Serrano-Rodríguez_2025_table_S1:row6:col6, Serrano-Rodríguez_2025_table_S1:row6:col7 | — | not captured |
| Vc (L/kg) | `Q63` · V1 | 43 | L/kg | 3.0100000000000002 | [l] / [kg] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row7:col4, Serrano-Rodríguez_2025_table_S1:row7:col5, Serrano-Rodríguez_2025_table_S1:row7:col6, Serrano-Rodríguez_2025_table_S1:row7:col7 | — | not captured |
| Q (L/h/kg) | `Q30` · Q | 82.35 | L/h/kg | 0.0016012499999999998 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row8:col4, Serrano-Rodríguez_2025_table_S1:row8:col5, Serrano-Rodríguez_2025_table_S1:row8:col6 | — | not captured |
| Vp (L/kg) | `Q64` · V2 | 41.29 | L/kg | 2.8903 | [l] / [kg] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row9:col4, Serrano-Rodríguez_2025_table_S1:row9:col5, Serrano-Rodríguez_2025_table_S1:row9:col6, Serrano-Rodríguez_2025_table_S1:row9:col7 | — | not captured |
| Vm (L/kg) | `Q66` · Vmax | 0.0041 | L/kg | 0.00028700000000000004 | [l] / [kg] | not captured | special_case (0.95) | Serrano-Rodríguez_2025_table_S1:row10:col4, Serrano-Rodríguez_2025_table_S1:row10:col5, Serrano-Rodríguez_2025_table_S1:row10:col6, Serrano-Rodríguez_2025_table_S1:row10:col7 | — | not captured |
| Clm (L/h/kg) | `Q351` · CLm/F | 0.016 | L/h/kg | 3.1111111111111107e-07 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Serrano-Rodríguez_2025_table_S1:row12:col4, Serrano-Rodríguez_2025_table_S1:row12:col5, Serrano-Rodríguez_2025_table_S1:row12:col6, Serrano-Rodríguez_2025_table_S1:row12:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row8:col4', 'Serrano-Rodríguez_2025_table_S1:row8:col5', 'Serrano-Rodríguez_2025_table_S1:row8:col6'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row12:col4', 'Serrano-Rodríguez_2025_table_S1:row12:col5', 'Serrano-Rodríguez_2025_table_S1:row12:col6', 'Serrano-Rodríguez_2025_table_S1:row12:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |
| C5_dimension_Q66 | pass | [length] ** 3 | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row10:col4', 'Serrano-Rodríguez_2025_table_S1:row10:col5', 'Serrano-Rodríguez_2025_table_S1:row10:col6', 'Serrano-Rodríguez_2025_table_S1:row10:col7'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row4:col4', 'Serrano-Rodríguez_2025_table_S1:row4:col5', 'Serrano-Rodríguez_2025_table_S1:row4:col6', 'Serrano-Rodríguez_2025_table_S1:row4:col7'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row2:col4', 'Serrano-Rodríguez_2025_table_S1:row2:col5', 'Serrano-Rodríguez_2025_table_S1:row2:col6', 'Serrano-Rodríguez_2025_table_S1:row2:col7'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.29 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 122 L/h | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row6:col4', 'Serrano-Rodríguez_2025_table_S1:row6:col5', 'Serrano-Rodríguez_2025_table_S1:row6:col6', 'Serrano-Rodríguez_2025_table_S1:row6:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.01e+03 L | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row7:col4', 'Serrano-Rodríguez_2025_table_S1:row7:col5', 'Serrano-Rodríguez_2025_table_S1:row7:col6', 'Serrano-Rodríguez_2025_table_S1:row7:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.89e+03 L | not captured | not captured | ['Serrano-Rodríguez_2025_table_S1:row9:col4', 'Serrano-Rodríguez_2025_table_S1:row9:col5', 'Serrano-Rodríguez_2025_table_S1:row9:col6', 'Serrano-Rodríguez_2025_table_S1:row9:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cannabinoids/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Serrano-Rodríguez_2025` / `Serrano-Rodríguez_2025::cbg`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:53 UTC</sub>
