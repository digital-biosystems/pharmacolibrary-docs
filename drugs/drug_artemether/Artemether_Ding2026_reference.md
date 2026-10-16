<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Ding2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (MTT, n_transit, Cmax and AUC), so that value has no SI equivalent. Extracted — artemether: MTT 1.55 h, n_transit 2 mg/kg, Fab 1, CL/F 79.3 L/h, V1/F 141 L, Q/F 21.7 L/h, V2/F 283 L; dihydroartemisinin: CL/F 255 L/h, V1/F 64.1 L; amodiaquine: kabs 1.93 1/h, Fab 1, CL/F 2.25e+03 L/h, Q/F 3.02e+03 L/h, t1/2z 17.7 h, Cmax 15.1 ng/mL; desethylamodiaquine: CL/F 32.2 L/h, V1/F 1.26e+03 L, Q/F 117 L/h, V2/F 1.64e+03 L, Q2/F 37.3 L/h, V3/F 6.44e+03 L, t1/2z 12.1 d, AUC 96.5 h·μg/L, … (+1); lumefantrine: MTT 5.43 h, n_transit 5 mg/kg, Fab 1, CL/F 4.35 L/h, V1/F 101 L, Q/F 1.65 L/h, V2/F 311 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f arm].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `artemether, lumefantrine, amodiaquine`, measured `artemether`.

## Citation
Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

<div class="pk-model-meta" hidden drug="artemether" model-id="Artemether_Ding2026_reference" status="rejected" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria" measured-compound="artemether" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 31 extracted.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean transit time (h) | `Q81` · MTT | 1.55 | h | not captured | [h] | 7.3 | exact (1.0) | bcp70301-tbl-0002:row3:col1 | — | 62.7 (None% RSE) |
| Number of transit compartments | `Q311` · n_transit | 2 | mg/kg | not captured | [mg] / [kg] | not captured | exact (1.0) | bcp70301-tbl-0002:row4:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp70301-tbl-0002:row5:col1 | — | not captured |
| CL/F ARM (L/h) | `Q27` · CL/F | 79.3 | L/h | 2.2027777777777775e-05 | [l] / [h] | 4.8 | llm_confirmed (0.6) | bcp70301-tbl-0002:row6:col1 | — | 21.1 (None% RSE) |
| VC/F ARM (L) | `Q290` · V1/F | 141 | L | 0.14100000000000001 | [l] | 7.1 | llm_confirmed (0.6) | bcp70301-tbl-0002:row7:col1 | — | 42.5 (None% RSE) |
| Q/F ARM (L/h) | `Q69` · Q/F | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | 9.32 | llm_confirmed (0.6) | bcp70301-tbl-0002:row8:col1 | — | not captured |
| Vp/F ARM (L) | `Q82` · V2/F | 283 | L | 0.28300000000000003 | [l] | 23 | llm_confirmed (0.6) | bcp70301-tbl-0002:row9:col1 | — | not captured |
| CL/F DHA (L/h) | `Q27` · CL/F | 255 | L/h | 7.083333333333334e-05 | [l] / [h] | 5.9 | exact (1.0) | bcp70301-tbl-0002:row13:col1 | — | not captured |
| Vc/F DHA (L) | `Q290` · V1/F | 64.1 | L | 0.06409999999999999 | [l] | 15.3 | exact (1.0) | bcp70301-tbl-0002:row14:col1 | — | not captured |
| Ka | `Q49` · kabs | 1.93 | 1/h | 0.0005361111111111111 | 1/h | 20.2 | exact (1.0) | Ding_2026_table_3:row2:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_3:row3:col1 | — | not captured |
| CL/F AQ (L/h) | `Q27` · CL/F | 2250 | L/h | 0.000625 | [l] / [h] | 3.2 | llm_confirmed (0.6) | Ding_2026_table_3:row4:col1 | — | not captured |
| Q/F AQ (L/h) | `Q69` · Q/F | 3020 | L/h | 0.0008388888888888889 | [l] / [h] | 7.6 | llm_confirmed (0.6) | Ding_2026_table_3:row6:col1 | — | not captured |
| CL/F DEAQ (L/h) | `Q27` · CL/F | 32.2 | L/h | 8.944444444444446e-06 | [l] / [h] | 3.5 | exact (1.0) | Ding_2026_table_3:row10:col1 | — | not captured |
| VC/F DEAQ (L) | `Q290` · V1/F | 1260 | L | 1.26 | [l] | 8.6 | exact (1.0) | Ding_2026_table_3:row11:col1 | — | not captured |
| Q1/F DEAQ (L/h) | `Q69` · Q/F | 117 | L/h | 3.2500000000000004e-05 | [l] / [h] | 17.5 | exact (1.0) | Ding_2026_table_3:row12:col1 | — | not captured |
| Vp1/F DEAQ (L) | `Q82` · V2/F | 1640 | L | 1.6400000000000001 | [l] | 15.7 | exact (1.0) | Ding_2026_table_3:row13:col1 | — | not captured |
| Q2/F DEAQ (L/h) | `Q80` · Q2/F | 37.3 | L/h | 1.036111111111111e-05 | [l] / [h] | 11.5 | special_case (0.95) | Ding_2026_table_3:row14:col1 | — | not captured |
| Vp2/F DEAQ (L) | `Q78` · V3/F | 6440 | L | 6.44 | [l] | 7.9 | exact (1.0) | Ding_2026_table_3:row15:col1 | — | not captured |
| T 1/2 AQ (h) | `Q57` · t1/2z | 17.7 | h | 63720.0 | [h] | not captured | llm (0.6) | Ding_2026_table_3:row18:col1 | — | not captured |
| C max AQ (ng/mL) | `Q32` · Cmax | 15.1 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Ding_2026_table_3:row20:col1 | — | not captured |
| T 1/2 DEAQ (d) | `Q57` · t1/2z | 12.1 | d | 1045440.0 | [d] | not captured | llm (0.6) | Ding_2026_table_3:row21:col1 | — | not captured |
| AUCDEAQ (h·μg/L) | `Q88` · AUC | 96.5 | h·μg/L | not captured | [[h] · [µg]] / [l] | not captured | llm (0.6) | Ding_2026_table_3:row22:col1 | — | not captured |
| C max DEAQ (ng/mL) | `Q32` · Cmax | 160 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Ding_2026_table_3:row23:col1 | — | not captured |
| Mean transit time (h) | `Q81` · MTT | 5.43 | h | not captured | [h] | 5.8 | exact (1.0) | Ding_2026_table_4:row2:col1 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | 5 | mg/kg | not captured | [mg] / [kg] | not captured | exact (1.0) | Ding_2026_table_4:row3:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_4:row4:col1 | — | not captured |
| CL/F LF (L/h) | `Q27` · CL/F | 4.35 | L/h | 1.2083333333333333e-06 | [l] / [h] | 3.4 | llm_confirmed (0.6) | Ding_2026_table_4:row5:col1 | — | not captured |
| VC,/F LF (L) | `Q290` · V1/F | 101 | L | 0.101 | [l] | 8.5 | llm_corrected (0.6) | Ding_2026_table_4:row6:col1 | — | not captured |
| Q/F LF (L/h) | `Q69` · Q/F | 1.65 | L/h | 4.583333333333333e-07 | [l] / [h] | 6.0 | llm_confirmed (0.6) | Ding_2026_table_4:row7:col1 | — | not captured |
| Vp,/F LF (L) | `Q82` · V2/F | 311 | L | 0.311 | [l] | 5.3 | llm_corrected (0.6) | Ding_2026_table_4:row8:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 9 row(s) → desethylamodiaquine, 7 row(s) → desbutyllumefantrine, 7 row(s) → dihydroartemisinin (abbreviation 23)
- table section iiv: 'CL/F ARM (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DHA (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F AQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DEAQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'VC/F DEAQ (L)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'Mean transit time (h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC,/F LF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F DLF (L/h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC/F DLF (L)' routed out of structural estimates ('CV for IIV/ISV')
- dropped unlinked row (NIL): 'Time dependency on CL' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0002:row10:col1'])
- dropped duplicate Q27 ('CL/F DLF (L/h)', value '744') — already have one for this compound
- dropped duplicate Q290 ('VC/F DLF (L)', value '8530') — already have one for this compound
- dropped duplicate Q69 ('Q/F DLF (L/h)', value '1100') — already have one for this compound
- dropped unlinked row (NIL): 'Baseline parasite density on F (%)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row17:col1'])
- dropped unlinked row (NIL): 'Dose (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row18:col1'])
- dropped unlinked row (NIL): 'Baseline temperature on F (%)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row19:col1'])
- unit_dimension_mismatch: 'Study effect (TACT) on VC/F LF (%)' → Q290 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Study effect (TACT) on VC/F LF (%)', value '-28.1') — already have one for this compound
- dropped unlinked row (NIL): 'Age on CL/F DLF (year)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row21:col1'])
- unit inherited for n_transit (Q311): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'Ka' → 1/h (from the popPK convention: 'Ka is the first-order absorption rate constant. The paper does not explicitly state the unit for Ka in the provided text')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemether
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles: 25 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 30 linked by role; re-tagged parent→artemether ×10, parent→dihydroartemisinin ×4, parent→amodiaquine ×8, parent→desethylamodiaquine ×12, parent→lumefantrine ×20, parent→desbutyllumefantrine ×1
- molar mass: none of 1 PubChem candidate(s) is 'desbutyllumefantrine' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'desethylamodiaquine' (LLM) — left in mass units
- molar mass: none found for 'desbutyllumefantrine' — its concentrations stay mass-only
- molar mass: none found for 'desethylamodiaquine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table bcp70301-tbl-0002: ragged_grid
- table Ding_2026_table_3: ragged_grid
- table Ding_2026_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (38 record(s), model stage 'final')
- table Ding_2026_table_4: ragged_grid
- table Ding_2026_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (41 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (30/39 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f aq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f arm].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f deaq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dha].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dlf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f lf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 1.93 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` | not captured | 10.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 31 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q40 | fail | 1.0 | 79.3 | 79.3 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row13:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row20:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row23:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row2:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row18:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row21:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70301-tbl-0002:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row7:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70301-tbl-0002:row9:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row8:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row22:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.3 L/h | not captured | not captured | ['bcp70301-tbl-0002:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 255 L/h | not captured | not captured | ['bcp70301-tbl-0002:row13:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.25e+03 L/h | not captured | not captured | ['Ding_2026_table_3:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32.2 L/h | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.35 L/h | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 141 L | not captured | not captured | ['bcp70301-tbl-0002:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 64.1 L | not captured | not captured | ['bcp70301-tbl-0002:row14:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.26e+03 L | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 101 L | not captured | not captured | ['Ding_2026_table_4:row6:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 283 L | not captured | not captured | ['bcp70301-tbl-0002:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.64e+03 L | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | not captured | not captured | ['Ding_2026_table_4:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_artemether/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2026` / `Ding_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:01 UTC</sub>
