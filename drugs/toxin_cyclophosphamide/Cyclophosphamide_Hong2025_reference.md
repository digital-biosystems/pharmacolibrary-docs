<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cyclophosphamide&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/&quot;},{&quot;label&quot;:&quot;Hong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cyclophosphamide_Barnett2021_reference&quot;,&quot;label&quot;:&quot;Barnett_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Barnett2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Baudry2019_reference&quot;,&quot;label&quot;:&quot;Baudry_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Baudry2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Campagne2019_reference&quot;,&quot;label&quot;:&quot;Campagne_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Campagne2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cyclophosphamide_Hong2025_reference&quot;,&quot;label&quot;:&quot;Hong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Cyclophosphamide_Veal2016_reference&quot;,&quot;label&quot;:&quot;Veal_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cyclophosphamide/Cyclophosphamide_Veal2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cyclophosphamide — `Cyclophosphamide_Hong2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Record refused because oral bioavailability (F) and lag time (Tlag) used library defaults instead of paper-specific estimates.

<div class="pk-model-meta" hidden drug="Cyclophosphamide" model-id="Cyclophosphamide_Hong2025_reference" status="needs_review" stale="false" population="pediatric patients undergoing haploidentical HSCT" measured-compound="Cyclophosphamide" parameterization="mechanistic" topology="1C"></div>

## Citation
Hong KT, Bae S, Sunwoo Y, Lee J, Park HJ, Kim BK et al. Pharmacokinetics of post-transplant cyclophosphamide and its associations with clinical outcomes in pediatric haploidentical hematopoietic stem cell transplantation. Biomarker research 13(1):48 (2025).
  ·  DOI: [10.1186/s40364-025-00749-3](https://doi.org/10.1186/s40364-025-00749-3)

## Population and dosing

**Population:** pediatric patients undergoing haploidentical HSCT · condition myeloablative conditioning regimen · age group child · n = 15.

**Dosing:** 1015 mg, iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference.svg" alt="Cyclophosphamide_Hong2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLIND (L/h/kg) | CLnorm | 0.0346 | L/h/kg | 10 |
| CLNON (L/h) | CLNR | 0.715 | L/h | 20 |
| CL(L/h) | CL | 4.31 | L/h |  |
| Vz(L) | V | 14.07 | L |  |
| t1/2(h) | t1/2z | 2.48 | h |  |
| theta_v_category | theta_v_category | 0.636 | L | 4 |
| K a | kabs | 0.773 | day -1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record refused because oral bioavailability (F) and lag time (Tlag) used library defaults instead of paper-specific estimates.**

The model builder defaulted oral bioavailability (F) and absorption lag time (Tlag) because these parameters were not extracted, meaning the simulated profile relies on unsupported library placeholders rather than fitted values. Additionally, while the record defines volume covariate effects, the simulation was restricted to the reference individual, failing to exercise the covariate scenarios. Extracted — cyclophosphamide: CLnorm 0.0346 L/h/kg, CLNR 0.715 L/h, CL 4.31 L/h, V 14.1 L, t1/2z 2.48 h, kabs 0.773 day -1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLIND (L/h/kg) | `Q354` · CLnorm | 0.0346 | L/h/kg | 6.728e-07 | m3/s | l/(h·kg) | 10 | llm (0.6) | Tab6:row5:col1 |
| CLNON (L/h) | `Q79` · CLNR | 0.715 | L/h | 1.986e-07 | m3/s | l/h | 20 | llm (0.6) | Tab6:row6:col1 |
| CL(L/h) | `Q22` · CL | 4.31 | L/h | 1.197e-06 | m3/s | l/h |  | exact (1) | Hong_2025_table_S2:row0:col6, Hong_2025_table_S2:row1:col6, Hong_2025_table_S2:row2:col6, Hong_2025_table_S2:row3:col6, Hong_2025_table_S2:row4:col6, Hong_2025_table_S2:row5:col6, Hong_2025_table_S2:row6:col6, Hong_2025_table_S2:row7:col6, Hong_2025_table_S2:row8:col6, Hong_2025_table_S2:row9:col6, Hong_2025_table_S2:row10:col6, Hong_2025_table_S2:row11:col6, Hong_2025_table_S2:row12:col6, Hong_2025_table_S2:row13:col6, Hong_2025_table_S2:row14:col6 |
| Vz(L) | `Q61` · V | 14.07 | L | 0.01407 | m3 | l |  | exact (1) | Hong_2025_table_S2:row0:col7, Hong_2025_table_S2:row1:col7, Hong_2025_table_S2:row2:col7, Hong_2025_table_S2:row3:col7, Hong_2025_table_S2:row4:col7, Hong_2025_table_S2:row5:col7, Hong_2025_table_S2:row6:col7, Hong_2025_table_S2:row7:col7, Hong_2025_table_S2:row8:col7, Hong_2025_table_S2:row9:col7, Hong_2025_table_S2:row10:col7, Hong_2025_table_S2:row11:col7, Hong_2025_table_S2:row12:col7, Hong_2025_table_S2:row13:col7, Hong_2025_table_S2:row14:col7 |
| t1/2(h) | `Q57` · t1/2z | 2.48 | h | 8928 | s | h |  | half_life_rule (0.95) | Hong_2025_table_S2:row0:col8, Hong_2025_table_S2:row1:col8, Hong_2025_table_S2:row2:col8, Hong_2025_table_S2:row3:col8, Hong_2025_table_S2:row4:col8, Hong_2025_table_S2:row5:col8, Hong_2025_table_S2:row6:col8, Hong_2025_table_S2:row7:col8, Hong_2025_table_S2:row8:col8, Hong_2025_table_S2:row9:col8, Hong_2025_table_S2:row10:col8, Hong_2025_table_S2:row11:col8, Hong_2025_table_S2:row12:col8, Hong_2025_table_S2:row13:col8, Hong_2025_table_S2:row14:col8 |
| theta_v_category | `Q900` · theta_v_category | 0.636 | L |  |  |  | 4 |  | Tab6:row3:col1 |
| K a | `Q49` · kabs | 0.773 | day -1 | 8.947e-06 | 1/s | 1/h |  | review_gapfill (0.7) | Luo_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section residual_error: 'Proportional residual error' routed out of structural estimates ('Residual Error†')
- table section residual_error: 'Additive residual error' routed out of structural estimates ('Residual Error†')
- dropped PD-category row 'Enzyme degradation rate (KENZ, h− 1)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab6:row7:col1'])
- dropped unlinked row (NIL): 'CLIND (%)' — extend the ontology if this is a real PK parameter (source ['Tab6:row17:col1'])
- dropped 'CLNON (%)' → Q79: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a clearance — the row is a variability or a ratio, not the estimate
- dropped unlinked row (NIL): 'Age(year)' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_S2:row0:col1', 'Hong_2025_table_S2:row1:col1', 'Hong_2025_table_S2:row2:col1', 'Hong_2025_table_S2:row3:col1', 'Hong_2025_table_S2:row4:col1', 'Hong_2025_table_S2:row5:col1', 'Hong_2025_table_S2:row6:col1', 'Hong_2025_table_S2:row7:col1', 'Hong_2025_table_S2:row8:col1', 'Hong_2025_table_S2:row9:col1', 'Hong_2025_table_S2:row10:col1', 'Hong_2025_table_S2:row11:col1', 'Hong_2025_table_S2:row12:col1', 'Hong_2025_table_S2:row13:col1', 'Hong_2025_table_S2:row14:col1'])
- dropped unlinked row (NIL): 'Body weight(kg)' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_S2:row0:col3', 'Hong_2025_table_S2:row1:col3', 'Hong_2025_table_S2:row2:col3', 'Hong_2025_table_S2:row3:col3', 'Hong_2025_table_S2:row4:col3', 'Hong_2025_table_S2:row5:col3', 'Hong_2025_table_S2:row6:col3', 'Hong_2025_table_S2:row7:col3', 'Hong_2025_table_S2:row8:col3', 'Hong_2025_table_S2:row9:col3', 'Hong_2025_table_S2:row10:col3', 'Hong_2025_table_S2:row11:col3', 'Hong_2025_table_S2:row12:col3', 'Hong_2025_table_S2:row13:col3', 'Hong_2025_table_S2:row14:col3'])
- dropped unlinked row (NIL): 'Height(cm)' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_S2:row0:col4', 'Hong_2025_table_S2:row1:col4', 'Hong_2025_table_S2:row2:col4', 'Hong_2025_table_S2:row3:col4', 'Hong_2025_table_S2:row4:col4', 'Hong_2025_table_S2:row5:col4', 'Hong_2025_table_S2:row6:col4', 'Hong_2025_table_S2:row7:col4', 'Hong_2025_table_S2:row8:col4', 'Hong_2025_table_S2:row9:col4', 'Hong_2025_table_S2:row10:col4', 'Hong_2025_table_S2:row11:col4', 'Hong_2025_table_S2:row12:col4', 'Hong_2025_table_S2:row13:col4', 'Hong_2025_table_S2:row14:col4'])
- dropped unlinked row (NIL): 'Body surface area(m2)' — extend the ontology if this is a real PK parameter (source ['Hong_2025_table_S2:row0:col5', 'Hong_2025_table_S2:row1:col5', 'Hong_2025_table_S2:row2:col5', 'Hong_2025_table_S2:row3:col5', 'Hong_2025_table_S2:row4:col5', 'Hong_2025_table_S2:row5:col5', 'Hong_2025_table_S2:row6:col5', 'Hong_2025_table_S2:row7:col5', 'Hong_2025_table_S2:row8:col5', 'Hong_2025_table_S2:row9:col5', 'Hong_2025_table_S2:row10:col5', 'Hong_2025_table_S2:row11:col5', 'Hong_2025_table_S2:row12:col5', 'Hong_2025_table_S2:row13:col5', 'Hong_2025_table_S2:row14:col5'])
- dropped duplicate covariate effect 'category'/'' on Q61 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cyclophosphamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — 3 metabolites — the templates hold two
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 33 linked by role
- molar mass: none of 1 PubChem candidate(s) is 'Carboxy-ethyl phosphoramide mustard' (LLM) — left in mass units
- molar mass: none found for 'Carboxy-ethyl phosphoramide mustard' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Luo_2022's review values (primary lacked it)

**Extraction notes:**
- transposed table Hong_2025_table_S2: logical view retains original source coordinates
- companion parameter table S2 transcribed (105 record(s))
- LLM selected parameter table(s) 6, S2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hong_2025_table_S2:row0:col6', 'Hong_2025_table_S2:row1:col6', 'Hong_2025_table_S2:row2:col6', 'Hong_2025_table_S2:row3:col6', 'Hong_2025_table_S2:row4:col6', 'Hong_2025_table_S2:row5:col6', 'Hong_2025_table_S2:row6:col6', 'Hong_2025_table_S2:row7:col6', 'Hong_2025_table_S2:row8:col6', 'Hong_2025_table_S2:row9:col6', 'Hong_2025_table_S2:row10:col6', 'Hong_2025_table_S2:row11:col6', 'Hong_2025_table_S2:row12:col6', 'Hong_2025_table_S2:row13:col6', 'Hong_2025_table_S2:row14:col6'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab6:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Luo_2022:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hong_2025_table_S2:row0:col8', 'Hong_2025_table_S2:row1:col8', 'Hong_2025_table_S2:row2:col8', 'Hong_2025_table_S2:row3:col8', 'Hong_2025_table_S2:row4:col8', 'Hong_2025_table_S2:row5:col8', 'Hong_2025_table_S2:row6:col8', 'Hong_2025_table_S2:row7:col8', 'Hong_2025_table_S2:row8:col8', 'Hong_2025_table_S2:row9:col8', 'Hong_2025_table_S2:row10:col8', 'Hong_2025_table_S2:row11:col8', 'Hong_2025_table_S2:row12:col8', 'Hong_2025_table_S2:row13:col8', 'Hong_2025_table_S2:row14:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hong_2025_table_S2:row0:col7', 'Hong_2025_table_S2:row1:col7', 'Hong_2025_table_S2:row2:col7', 'Hong_2025_table_S2:row3:col7', 'Hong_2025_table_S2:row4:col7', 'Hong_2025_table_S2:row5:col7', 'Hong_2025_table_S2:row6:col7', 'Hong_2025_table_S2:row7:col7', 'Hong_2025_table_S2:row8:col7', 'Hong_2025_table_S2:row9:col7', 'Hong_2025_table_S2:row10:col7', 'Hong_2025_table_S2:row11:col7', 'Hong_2025_table_S2:row12:col7', 'Hong_2025_table_S2:row13:col7', 'Hong_2025_table_S2:row14:col7'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Tab6:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.31 | ['Hong_2025_table_S2:row0:col6', 'Hong_2025_table_S2:row1:col6', 'Hong_2025_table_S2:row2:col6', 'Hong_2025_table_S2:row3:col6', 'Hong_2025_table_S2:row4:col6', 'Hong_2025_table_S2:row5:col6', 'Hong_2025_table_S2:row6:col6', 'Hong_2025_table_S2:row7:col6', 'Hong_2025_table_S2:row8:col6', 'Hong_2025_table_S2:row9:col6', 'Hong_2025_table_S2:row10:col6', 'Hong_2025_table_S2:row11:col6', 'Hong_2025_table_S2:row12:col6', 'Hong_2025_table_S2:row13:col6', 'Hong_2025_table_S2:row14:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.31 L/h | ['Hong_2025_table_S2:row0:col6', 'Hong_2025_table_S2:row1:col6', 'Hong_2025_table_S2:row2:col6', 'Hong_2025_table_S2:row3:col6', 'Hong_2025_table_S2:row4:col6', 'Hong_2025_table_S2:row5:col6', 'Hong_2025_table_S2:row6:col6', 'Hong_2025_table_S2:row7:col6', 'Hong_2025_table_S2:row8:col6', 'Hong_2025_table_S2:row9:col6', 'Hong_2025_table_S2:row10:col6', 'Hong_2025_table_S2:row11:col6', 'Hong_2025_table_S2:row12:col6', 'Hong_2025_table_S2:row13:col6', 'Hong_2025_table_S2:row14:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.1 L | ['Hong_2025_table_S2:row0:col7', 'Hong_2025_table_S2:row1:col7', 'Hong_2025_table_S2:row2:col7', 'Hong_2025_table_S2:row3:col7', 'Hong_2025_table_S2:row4:col7', 'Hong_2025_table_S2:row5:col7', 'Hong_2025_table_S2:row6:col7', 'Hong_2025_table_S2:row7:col7', 'Hong_2025_table_S2:row8:col7', 'Hong_2025_table_S2:row9:col7', 'Hong_2025_table_S2:row10:col7', 'Hong_2025_table_S2:row11:col7', 'Hong_2025_table_S2:row12:col7', 'Hong_2025_table_S2:row13:col7', 'Hong_2025_table_S2:row14:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=Cyclophosphamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.005239 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.005239 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.005239 | non-numeric value |
| T1_cmax | reference | skipped |  | 0.005239 | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 21.52 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_modelica.zip" download>Cyclophosphamide_Hong2025_reference_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_fmi.zip" download>Cyclophosphamide_Hong2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_matlab.zip" download>Cyclophosphamide_Hong2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_matlab_simbio.zip" download>Cyclophosphamide_Hong2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_sbml.zip" download>Cyclophosphamide_Hong2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_cellml.zip" download>Cyclophosphamide_Hong2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2611 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001015 | kg |
| input | model | `Cl` | 1.197e-06 | m3/s |
| input | model | `VdPerKg` | 0.000201 | m3/kg |
| input | model | `ka` | 8.947e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hong KT, Bae S, Sunwoo Y, Lee J, Park HJ, Kim BK et al. Pharmacokinetics of post-transplant cyclophosphamide and its associations with clinical outcomes in pediatric haploidentical hematopoietic stem cell transplantation. Biomarker research 13(1):48 (2025). [doi:10.1186/s40364-025-00749-3](https://doi.org/10.1186/s40364-025-00749-3)

**This record:** Pharmacolibrary, model `Cyclophosphamide_Hong2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference>

```bibtex
@misc{pharmacolibrary_CyclophosphamideHong2025reference,
  title  = {{Pharmacolibrary model Cyclophosphamide_Hong2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference},
  note   = {Parameters from doi:10.1186/s40364-025-00749-3},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1015 mg, single dose, first-order absorption (ka 0.0322 /h, F 0.9). Dose in the paper: 1015 mg.

<dbs-fmusim paramsurl="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference/Cyclophosphamide_Hong2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Cyclophosphamide_Hong2025_reference_params.json` · controls `Cyclophosphamide_Hong2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyclophosphamide%5D%20Cyclophosphamide_Hong2025_reference&body=Drug%3A%20cyclophosphamide%0ARecord%3A%20Cyclophosphamide_Hong2025_reference%0APaper%3A%20Hong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cyclophosphamide/Cyclophosphamide_Hong2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 05:24 UTC</sub>
