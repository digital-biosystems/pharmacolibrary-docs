<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamethoxazole&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/&quot;},{&quot;label&quot;:&quot;Leegwater_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfamethoxazole_Hess1993_reference&quot;,&quot;label&quot;:&quot;Hess_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Hess1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfamethoxazole_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfamethoxazole/Sulfamethoxazole_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfamethoxazole — `Sulfamethoxazole_Leegwater2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record is held back because the N-acetyl sulfamethoxazole clearance parameter (0.194 L/h) is listed as 0.194 without a unit.**

The extracted parameter for N-acetyl sulfamethoxazole clearance has the value 0.194 but lacks a unit, preventing conversion to SI. The primary sulfamethoxazole clearance parameter (4.23 L/h) correctly includes its unit. This missing unit on the metabolite clearance prevents the model builder from validating the dimensional consistency of the elimination pathway. Extracted — sulfamethoxazole: Fab 1, kabs 0.364 1/h, CL/F 4.23 L/h, CL 1.13, V 132 L; N-acetyl sulfamethoxazole: CL 0.194 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cotrimoxazole, the second reading sulfamethoxazole; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `cotrimoxazole`, measured `sulfamethoxazole`.

## Citation
Leegwater E et al., Population Pharmacokinetics of Trimetho…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3421](https://doi.org/10.1002/cpt.3421)

<div class="pk-model-meta" hidden drug="sulfamethoxazole" model-id="Sulfamethoxazole_Leegwater2025_reference" status="needs_review" stale="false" population="hospitalized patients with renal insufficiency or receiving CRRT" measured-compound="sulfamethoxazole" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Biological availability | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3421-tbl-0003:row2:col1, cpt3421-tbl-0003:row2:col3, Leegwater_2025_table_2:row1:col1, Leegwater_2025_table_2:row1:col3 | — | not captured |
| Absorption rate constant | `Q49` · kabs | 0.364 | 1/h | 0.0001011111111111111 | 1/h | 54 | exact (1.0) | cpt3421-tbl-0003:row3:col1, cpt3421-tbl-0003:row3:col2, cpt3421-tbl-0003:row3:col3, cpt3421-tbl-0003:row3:col4, Leegwater_2025_table_2:row2:col1, Leegwater_2025_table_2:row2:col2, Leegwater_2025_table_2:row2:col3, Leegwater_2025_table_2:row2:col4 | — | not captured |
| Apparent clearance (L/hour)a | `Q27` · CL/F | 4.23 | L/h | 1.175e-06 | L/h | 13 | llm_confirmed (0.6) | cpt3421-tbl-0003:row4:col1, cpt3421-tbl-0003:row4:col2, cpt3421-tbl-0003:row4:col3, cpt3421-tbl-0003:row4:col4, cpt3421-tbl-0003:row12:col1, cpt3421-tbl-0003:row12:col2, cpt3421-tbl-0003:row12:col3, cpt3421-tbl-0003:row12:col4, Leegwater_2025_table_2:row3:col1, Leegwater_2025_table_2:row3:col2, Leegwater_2025_table_2:row3:col3, Leegwater_2025_table_2:row3:col4 | — | not captured |
| CRRT on CL | `Q22` · CL | 1.13 | not captured | not captured | not captured | 16 | llm_confirmed (0.6) | cpt3421-tbl-0003:row6:col1, cpt3421-tbl-0003:row6:col2, cpt3421-tbl-0003:row6:col3, cpt3421-tbl-0003:row6:col4, cpt3421-tbl-0003:row14:col1, cpt3421-tbl-0003:row14:col2, cpt3421-tbl-0003:row14:col3, cpt3421-tbl-0003:row14:col4, Leegwater_2025_table_2:row5:col1, Leegwater_2025_table_2:row5:col2, Leegwater_2025_table_2:row5:col3, Leegwater_2025_table_2:row5:col4 | — | 39.2 (12% RSE) |
| Volume of distribution (L) | `Q61` · V | 132 | L | 0.132 | [l] | 10 | exact (1.0) | cpt3421-tbl-0003:row7:col1, cpt3421-tbl-0003:row7:col2, cpt3421-tbl-0003:row7:col3, cpt3421-tbl-0003:row7:col4, cpt3421-tbl-0003:row15:col1, cpt3421-tbl-0003:row15:col2, cpt3421-tbl-0003:row15:col3, cpt3421-tbl-0003:row15:col4, Leegwater_2025_table_2:row6:col1, Leegwater_2025_table_2:row6:col2, Leegwater_2025_table_2:row6:col3, Leegwater_2025_table_2:row6:col4 | — | 29.8 (32% RSE) |
| N‐acetyl sulfamethoxazole | `Q22` · CL | 0.194 | L/h | 5.3888888888888886e-08 | L/h | 8 | exact (1.0) | cpt3421-tbl-0003:row19:col1, cpt3421-tbl-0003:row19:col2, cpt3421-tbl-0003:row19:col3, cpt3421-tbl-0003:row19:col4 | — | not captured |
| Trimethoprim | `Q900` · equation variable | 0.167 | not captured | not captured | not captured | 10 | llm (0.6) | Leegwater_2025_table_2:row11:col1, Leegwater_2025_table_2:row11:col2, Leegwater_2025_table_2:row11:col3, Leegwater_2025_table_2:row11:col4 | — | not captured |
| theta_equation_variable_egfr | `Q900` · theta_equation_variable_egfr | 0.319 | not captured | not captured | not captured | 36 | not captured (not captured) | cpt3421-tbl-0003:row5:col1, cpt3421-tbl-0003:row5:col2, cpt3421-tbl-0003:row5:col3, cpt3421-tbl-0003:row5:col4, cpt3421-tbl-0003:row13:col1, cpt3421-tbl-0003:row13:col2, cpt3421-tbl-0003:row13:col3, cpt3421-tbl-0003:row13:col4, Leegwater_2025_table_2:row4:col1, Leegwater_2025_table_2:row4:col2, Leegwater_2025_table_2:row4:col3, Leegwater_2025_table_2:row4:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Sulfamethoxazole' — extend the ontology if this is a real PK parameter (source ['cpt3421-tbl-0003:row18:col1', 'cpt3421-tbl-0003:row18:col2', 'cpt3421-tbl-0003:row18:col3', 'cpt3421-tbl-0003:row18:col4'])
- covariate category for CL from footnote/prose kept as documentation only (['cpt3421-tbl-0003:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['cpt3421-tbl-0003:footnote', 'cpt3421-tbl-0003:footnote']); the table cell was unparseable — needs review
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'Absorption rate constants are first-order rate constants. In population pharmacokinetic studies, these are conventionall')
- implicit units: 'Apparent clearance (L/hour)a' → L/h (from the paper text: "The parameter name in the list provided ('Apparent clearance (L/hour)a') explicitly contains the unit 'L/hour', which is")
- implicit units: 'N‐acetyl sulfamethoxazole' → L/h (from the popPK convention: 'The parameter represents the clearance of N-acetyl sulfamethoxazole. Clearance parameters in population PK are conventio')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulfamethoxazole
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles: 2 per-group rows of sulfamethoxazole other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 36 linked by role; re-tagged parent→sulfamethoxazole ×84, parent→N-acetyl sulfamethoxazole ×8, sulfamethoxazole→N-acetyl sulfamethoxazole ×1
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'N-acetyl sulfamethoxazole' (LLM) — left in mass units
- molar mass: none found for 'N-acetyl sulfamethoxazole' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (38 record(s))
- LLM selected parameter table(s) 2, 3
- LLM region Leegwater_2025:other_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 11:28:36 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['sulfamethoxazole', 'n-acetyl sulfamethoxazole', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | not captured | 0.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.364 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance (l/hour)a]` | not captured | 1.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent clearance (l/hour)a]` | 4.23 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[biological availability]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[biological availability]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[crrt on cl]` | not captured | 0.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[crrt on cl]` | 1.13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[egfr_on_cl]` | not captured | 0.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[n‐acetyl sulfamethoxazole]` | 0.194 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_equation_variable_egfr]` | 0.319 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[trimethoprim]` | 0.167 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 3.87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 132 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cotrimoxazole | sulfamethoxazole | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0003:row19:col1', 'cpt3421-tbl-0003:row19:col2', 'cpt3421-tbl-0003:row19:col3', 'cpt3421-tbl-0003:row19:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0003:row4:col1', 'cpt3421-tbl-0003:row4:col2', 'cpt3421-tbl-0003:row4:col3', 'cpt3421-tbl-0003:row4:col4', 'cpt3421-tbl-0003:row12:col1', 'cpt3421-tbl-0003:row12:col2', 'cpt3421-tbl-0003:row12:col3', 'cpt3421-tbl-0003:row12:col4', 'Leegwater_2025_table_2:row3:col1', 'Leegwater_2025_table_2:row3:col2', 'Leegwater_2025_table_2:row3:col3', 'Leegwater_2025_table_2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0003:row3:col1', 'cpt3421-tbl-0003:row3:col2', 'cpt3421-tbl-0003:row3:col3', 'cpt3421-tbl-0003:row3:col4', 'Leegwater_2025_table_2:row2:col1', 'Leegwater_2025_table_2:row2:col2', 'Leegwater_2025_table_2:row2:col3', 'Leegwater_2025_table_2:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt3421-tbl-0003:row7:col1', 'cpt3421-tbl-0003:row7:col2', 'cpt3421-tbl-0003:row7:col3', 'cpt3421-tbl-0003:row7:col4', 'cpt3421-tbl-0003:row15:col1', 'cpt3421-tbl-0003:row15:col2', 'cpt3421-tbl-0003:row15:col3', 'cpt3421-tbl-0003:row15:col4', 'Leegwater_2025_table_2:row6:col1', 'Leegwater_2025_table_2:row6:col2', 'Leegwater_2025_table_2:row6:col3', 'Leegwater_2025_table_2:row6:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3421-tbl-0003:row6:col1', 'cpt3421-tbl-0003:row6:col2', 'cpt3421-tbl-0003:row6:col3', 'cpt3421-tbl-0003:row6:col4', 'cpt3421-tbl-0003:row14:col1', 'cpt3421-tbl-0003:row14:col2', 'cpt3421-tbl-0003:row14:col3', 'cpt3421-tbl-0003:row14:col4', 'Leegwater_2025_table_2:row5:col1', 'Leegwater_2025_table_2:row5:col2', 'Leegwater_2025_table_2:row5:col3', 'Leegwater_2025_table_2:row5:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.194 L/h | not captured | not captured | ['cpt3421-tbl-0003:row19:col1', 'cpt3421-tbl-0003:row19:col2', 'cpt3421-tbl-0003:row19:col3', 'cpt3421-tbl-0003:row19:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.23 L/h | not captured | not captured | ['cpt3421-tbl-0003:row4:col1', 'cpt3421-tbl-0003:row4:col2', 'cpt3421-tbl-0003:row4:col3', 'cpt3421-tbl-0003:row4:col4', 'cpt3421-tbl-0003:row12:col1', 'cpt3421-tbl-0003:row12:col2', 'cpt3421-tbl-0003:row12:col3', 'cpt3421-tbl-0003:row12:col4', 'Leegwater_2025_table_2:row3:col1', 'Leegwater_2025_table_2:row3:col2', 'Leegwater_2025_table_2:row3:col3', 'Leegwater_2025_table_2:row3:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 132 L | not captured | not captured | ['cpt3421-tbl-0003:row7:col1', 'cpt3421-tbl-0003:row7:col2', 'cpt3421-tbl-0003:row7:col3', 'cpt3421-tbl-0003:row7:col4', 'cpt3421-tbl-0003:row15:col1', 'cpt3421-tbl-0003:row15:col2', 'cpt3421-tbl-0003:row15:col3', 'cpt3421-tbl-0003:row15:col4', 'Leegwater_2025_table_2:row6:col1', 'Leegwater_2025_table_2:row6:col2', 'Leegwater_2025_table_2:row6:col3', 'Leegwater_2025_table_2:row6:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfamethoxazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Leegwater_2025` / `Leegwater_2025::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:57 UTC</sub>
