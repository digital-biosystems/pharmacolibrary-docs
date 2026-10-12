<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Isberner_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dabrafenib — `Dabrafenib_Isberner2022_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Dabrafenib’s clearance, volume, absorption rate, and lag time were defaulted or unreported despite listed CL/F 13.5 L/h and V1/F 30.8 L, so the model was held back.**

Although the record lists dabrafenib’s apparent CL/F as 13.5 L/h and V1/F as 30.8 L, the built model had no value for dabrafenib’s clearance, volume, absorption rate constant, or absorption lag time, so library placeholders stood in and the model was held back rather than published with invented numbers. The parent-metabolite record structure differed from the one-compartment enteral structure used to build the model, which also assumed first-order depot input and defaulted an unreported absorption rate. The covariate scenarios were not simulated; only the base model was simulated, not the covariate effects defined in the record. Extracted — dabrafenib: V1/F 30.8 L, CL/F 13.5 L/h; trametinib: Q/F 97.7 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has dabrafenib and trametinib, the second reading dabrafenib; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `dabrafenib and trametinib`, measured `dabrafenib, hydroxy-dabrafenib, and trametinib`.

## Citation
Isberner N et al., Monitoring of Dabrafenib and Trametinib…, Cancers (2022)
  ·  DOI: [10.3390/cancers14194566](https://doi.org/10.3390/cancers14194566)

<div class="pk-model-meta" hidden drug="dabrafenib" model-id="Dabrafenib_Isberner2022_reference" status="model_quarantined" stale="false" population="patients with BRAFV600-mutant melanoma" measured-compound="dabrafenib, hydroxy-dabrafenib, and trametinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ind V1/F [L] | `Q290` · V1/F | 30.8 | L | 0.0308 | [l] | not captured | exact (1.0) | cancers-14-04566-t002:row2:col1, cancers-14-04566-t002:row2:col2, cancers-14-04566-t002:row2:col3, cancers-14-04566-t002:row2:col4, cancers-14-04566-t002:row2:col5, cancers-14-04566-t002:row2:col6, cancers-14-04566-t002:row2:col7, cancers-14-04566-t002:row2:col8, cancers-14-04566-t002:row2:col9, cancers-14-04566-t002:row2:col10, cancers-14-04566-t002:row2:col11, cancers-14-04566-t002:row2:col12, cancers-14-04566-t002:row2:col13, cancers-14-04566-t002:row2:col14, cancers-14-04566-t002:row2:col15, cancers-14-04566-t002:row2:col16, cancers-14-04566-t002:row2:col17, cancers-14-04566-t002:row2:col18, cancers-14-04566-t002:row2:col19, cancers-14-04566-t002:row2:col20, cancers-14-04566-t002:row2:col21, cancers-14-04566-t002:row2:col22, cancers-14-04566-t002:row2:col23 | — | not captured |
| Ind CL/F [L/h] | `Q27` · CL/F | 13.5 | L/h | 3.75e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | cancers-14-04566-t002:row3:col2, cancers-14-04566-t002:row3:col3, cancers-14-04566-t002:row3:col4, cancers-14-04566-t002:row3:col5, cancers-14-04566-t002:row3:col6, cancers-14-04566-t002:row3:col7, cancers-14-04566-t002:row3:col8, cancers-14-04566-t002:row3:col9, cancers-14-04566-t002:row3:col10, cancers-14-04566-t002:row3:col11, cancers-14-04566-t002:row3:col12, cancers-14-04566-t002:row3:col13, cancers-14-04566-t002:row3:col14, cancers-14-04566-t002:row3:col15, cancers-14-04566-t002:row3:col16, cancers-14-04566-t002:row3:col17, cancers-14-04566-t002:row3:col18, cancers-14-04566-t002:row3:col19, cancers-14-04566-t002:row3:col20, cancers-14-04566-t002:row3:col21, cancers-14-04566-t002:row3:col22, cancers-14-04566-t002:row3:col23, Isberner_2022_table_3:row2:col1, Isberner_2022_table_3:row2:col2, Isberner_2022_table_3:row2:col3, Isberner_2022_table_3:row2:col4, Isberner_2022_table_3:row2:col5, Isberner_2022_table_3:row2:col6, Isberner_2022_table_3:row2:col7 | — | not captured |
| Ind Q/F [L/h] | `Q69` · Q/F | 97.65 | L/h | 2.7125000000000005e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | Isberner_2022_table_3:row1:col1, Isberner_2022_table_3:row1:col2, Isberner_2022_table_3:row1:col3, Isberner_2022_table_3:row1:col4, Isberner_2022_table_3:row1:col5, Isberner_2022_table_3:row1:col6, Isberner_2022_table_3:row1:col7 | — | not captured |
| theta_q18_category | `Q900` · theta_q18_category | 11125 | not captured | not captured | not captured | not captured | not captured (not captured) | cancers-14-04566-t002:row4:col1, cancers-14-04566-t002:row4:col2, cancers-14-04566-t002:row4:col3, cancers-14-04566-t002:row4:col4, cancers-14-04566-t002:row4:col5, cancers-14-04566-t002:row4:col6, cancers-14-04566-t002:row4:col7, cancers-14-04566-t002:row4:col8, cancers-14-04566-t002:row4:col9, cancers-14-04566-t002:row4:col10, cancers-14-04566-t002:row4:col11, cancers-14-04566-t002:row4:col12, cancers-14-04566-t002:row4:col13, cancers-14-04566-t002:row4:col14, cancers-14-04566-t002:row4:col15, cancers-14-04566-t002:row4:col16, cancers-14-04566-t002:row4:col17, cancers-14-04566-t002:row4:col18, cancers-14-04566-t002:row4:col19, cancers-14-04566-t002:row4:col20, cancers-14-04566-t002:row4:col21, cancers-14-04566-t002:row4:col22, cancers-14-04566-t002:row4:col23 | — | not captured |
| theta_q18_category | `Q900` · theta_q18_category | 326 | not captured | not captured | not captured | not captured | not captured (not captured) | Isberner_2022_table_3:row4:col1, Isberner_2022_table_3:row4:col2, Isberner_2022_table_3:row4:col3, Isberner_2022_table_3:row4:col4, Isberner_2022_table_3:row4:col5, Isberner_2022_table_3:row4:col6, Isberner_2022_table_3:row4:col7 | — | not captured |
| theta_q19_category | `Q900` · theta_q19_category | 358 | not captured | not captured | not captured | not captured | not captured (not captured) | Isberner_2022_table_3:row5:col1, Isberner_2022_table_3:row5:col2, Isberner_2022_table_3:row5:col3, Isberner_2022_table_3:row5:col4, Isberner_2022_table_3:row5:col5, Isberner_2022_table_3:row5:col6, Isberner_2022_table_3:row5:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dt002' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt005' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt010' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt014' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt018' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt019' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt026' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dt027' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'id' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Occasion' — extend the ontology if this is a real PK parameter (source ['cancers-14-04566-t002:row0:col2', 'cancers-14-04566-t002:row0:col3', 'cancers-14-04566-t002:row0:col4', 'cancers-14-04566-t002:row0:col5', 'cancers-14-04566-t002:row0:col6', 'cancers-14-04566-t002:row0:col7', 'cancers-14-04566-t002:row0:col8', 'cancers-14-04566-t002:row0:col9', 'cancers-14-04566-t002:row0:col10', 'cancers-14-04566-t002:row0:col11', 'cancers-14-04566-t002:row0:col12', 'cancers-14-04566-t002:row0:col13', 'cancers-14-04566-t002:row0:col14', 'cancers-14-04566-t002:row0:col15', 'cancers-14-04566-t002:row0:col16', 'cancers-14-04566-t002:row0:col17', 'cancers-14-04566-t002:row0:col18', 'cancers-14-04566-t002:row0:col19', 'cancers-14-04566-t002:row0:col20', 'cancers-14-04566-t002:row0:col21', 'cancers-14-04566-t002:row0:col22', 'cancers-14-04566-t002:row0:col23'])
- dropped unlinked row (NIL): 'Dose [mg/12 h]' — extend the ontology if this is a real PK parameter (source ['cancers-14-04566-t002:row1:col1', 'cancers-14-04566-t002:row1:col2', 'cancers-14-04566-t002:row1:col3', 'cancers-14-04566-t002:row1:col4', 'cancers-14-04566-t002:row1:col5', 'cancers-14-04566-t002:row1:col6', 'cancers-14-04566-t002:row1:col7', 'cancers-14-04566-t002:row1:col8', 'cancers-14-04566-t002:row1:col9', 'cancers-14-04566-t002:row1:col10', 'cancers-14-04566-t002:row1:col11', 'cancers-14-04566-t002:row1:col12', 'cancers-14-04566-t002:row1:col13', 'cancers-14-04566-t002:row1:col14', 'cancers-14-04566-t002:row1:col15', 'cancers-14-04566-t002:row1:col16', 'cancers-14-04566-t002:row1:col17', 'cancers-14-04566-t002:row1:col18', 'cancers-14-04566-t002:row1:col19', 'cancers-14-04566-t002:row1:col20', 'cancers-14-04566-t002:row1:col21', 'cancers-14-04566-t002:row1:col22', 'cancers-14-04566-t002:row1:col23'])
- dropped unlinked row (NIL): 'Dose [mg/24 h]' — extend the ontology if this is a real PK parameter (source ['Isberner_2022_table_3:row0:col1', 'Isberner_2022_table_3:row0:col2', 'Isberner_2022_table_3:row0:col3', 'Isberner_2022_table_3:row0:col4', 'Isberner_2022_table_3:row0:col5', 'Isberner_2022_table_3:row0:col6', 'Isberner_2022_table_3:row0:col7'])
- dropped unlinked row (NIL): 'Ind Kbp' — extend the ontology if this is a real PK parameter (source ['Isberner_2022_table_3:row3:col1', 'Isberner_2022_table_3:row3:col2', 'Isberner_2022_table_3:row3:col3', 'Isberner_2022_table_3:row3:col4', 'Isberner_2022_table_3:row3:col5', 'Isberner_2022_table_3:row3:col6', 'Isberner_2022_table_3:row3:col7'])
- covariate effect for Q18 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q18 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q19 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dabrafenib, hydroxy-dabrafenib, and trametinib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 59 linked by role; re-tagged parent→dabrafenib ×116, parent→trametinib ×35

**Extraction notes:**
- transposed table cancers-14-04566-t002: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Isberner_2022_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (42 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[ind cl/f [l/h]]` | not captured | 13.5 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ind cl/f [l/h]]` | 13.5 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ind v1/f [l]]` | not captured | 30.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ind v1/f [l]]` | 30.8 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q18_category]` | 11125 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q18_category]` | 326 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q19_category]` | not captured | 11125 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q19_category].value` | 358 | 326 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | dabrafenib and trametinib | dabrafenib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | dabrafenib, hydroxy-dabrafenib, and trametinib | dabrafenib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cancers-14-04566-t002:row3:col2', 'cancers-14-04566-t002:row3:col3', 'cancers-14-04566-t002:row3:col4', 'cancers-14-04566-t002:row3:col5', 'cancers-14-04566-t002:row3:col6', 'cancers-14-04566-t002:row3:col7', 'cancers-14-04566-t002:row3:col8', 'cancers-14-04566-t002:row3:col9', 'cancers-14-04566-t002:row3:col10', 'cancers-14-04566-t002:row3:col11', 'cancers-14-04566-t002:row3:col12', 'cancers-14-04566-t002:row3:col13', 'cancers-14-04566-t002:row3:col14', 'cancers-14-04566-t002:row3:col15', 'cancers-14-04566-t002:row3:col16', 'cancers-14-04566-t002:row3:col17', 'cancers-14-04566-t002:row3:col18', 'cancers-14-04566-t002:row3:col19', 'cancers-14-04566-t002:row3:col20', 'cancers-14-04566-t002:row3:col21', 'cancers-14-04566-t002:row3:col22', 'cancers-14-04566-t002:row3:col23', 'Isberner_2022_table_3:row2:col1', 'Isberner_2022_table_3:row2:col2', 'Isberner_2022_table_3:row2:col3', 'Isberner_2022_table_3:row2:col4', 'Isberner_2022_table_3:row2:col5', 'Isberner_2022_table_3:row2:col6', 'Isberner_2022_table_3:row2:col7'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cancers-14-04566-t002:row2:col1', 'cancers-14-04566-t002:row2:col2', 'cancers-14-04566-t002:row2:col3', 'cancers-14-04566-t002:row2:col4', 'cancers-14-04566-t002:row2:col5', 'cancers-14-04566-t002:row2:col6', 'cancers-14-04566-t002:row2:col7', 'cancers-14-04566-t002:row2:col8', 'cancers-14-04566-t002:row2:col9', 'cancers-14-04566-t002:row2:col10', 'cancers-14-04566-t002:row2:col11', 'cancers-14-04566-t002:row2:col12', 'cancers-14-04566-t002:row2:col13', 'cancers-14-04566-t002:row2:col14', 'cancers-14-04566-t002:row2:col15', 'cancers-14-04566-t002:row2:col16', 'cancers-14-04566-t002:row2:col17', 'cancers-14-04566-t002:row2:col18', 'cancers-14-04566-t002:row2:col19', 'cancers-14-04566-t002:row2:col20', 'cancers-14-04566-t002:row2:col21', 'cancers-14-04566-t002:row2:col22', 'cancers-14-04566-t002:row2:col23'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Isberner_2022_table_3:row1:col1', 'Isberner_2022_table_3:row1:col2', 'Isberner_2022_table_3:row1:col3', 'Isberner_2022_table_3:row1:col4', 'Isberner_2022_table_3:row1:col5', 'Isberner_2022_table_3:row1:col6', 'Isberner_2022_table_3:row1:col7'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.5 L/h | not captured | not captured | ['cancers-14-04566-t002:row3:col2', 'cancers-14-04566-t002:row3:col3', 'cancers-14-04566-t002:row3:col4', 'cancers-14-04566-t002:row3:col5', 'cancers-14-04566-t002:row3:col6', 'cancers-14-04566-t002:row3:col7', 'cancers-14-04566-t002:row3:col8', 'cancers-14-04566-t002:row3:col9', 'cancers-14-04566-t002:row3:col10', 'cancers-14-04566-t002:row3:col11', 'cancers-14-04566-t002:row3:col12', 'cancers-14-04566-t002:row3:col13', 'cancers-14-04566-t002:row3:col14', 'cancers-14-04566-t002:row3:col15', 'cancers-14-04566-t002:row3:col16', 'cancers-14-04566-t002:row3:col17', 'cancers-14-04566-t002:row3:col18', 'cancers-14-04566-t002:row3:col19', 'cancers-14-04566-t002:row3:col20', 'cancers-14-04566-t002:row3:col21', 'cancers-14-04566-t002:row3:col22', 'cancers-14-04566-t002:row3:col23', 'Isberner_2022_table_3:row2:col1', 'Isberner_2022_table_3:row2:col2', 'Isberner_2022_table_3:row2:col3', 'Isberner_2022_table_3:row2:col4', 'Isberner_2022_table_3:row2:col5', 'Isberner_2022_table_3:row2:col6', 'Isberner_2022_table_3:row2:col7'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 30.8 L | not captured | not captured | ['cancers-14-04566-t002:row2:col1', 'cancers-14-04566-t002:row2:col2', 'cancers-14-04566-t002:row2:col3', 'cancers-14-04566-t002:row2:col4', 'cancers-14-04566-t002:row2:col5', 'cancers-14-04566-t002:row2:col6', 'cancers-14-04566-t002:row2:col7', 'cancers-14-04566-t002:row2:col8', 'cancers-14-04566-t002:row2:col9', 'cancers-14-04566-t002:row2:col10', 'cancers-14-04566-t002:row2:col11', 'cancers-14-04566-t002:row2:col12', 'cancers-14-04566-t002:row2:col13', 'cancers-14-04566-t002:row2:col14', 'cancers-14-04566-t002:row2:col15', 'cancers-14-04566-t002:row2:col16', 'cancers-14-04566-t002:row2:col17', 'cancers-14-04566-t002:row2:col18', 'cancers-14-04566-t002:row2:col19', 'cancers-14-04566-t002:row2:col20', 'cancers-14-04566-t002:row2:col21', 'cancers-14-04566-t002:row2:col22', 'cancers-14-04566-t002:row2:col23'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dabrafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Isberner_2022` / `Isberner_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_dabrafenib/models/modelica/_needs_review/Dabrafenib_Isberner2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dabrafenib/models/modelica/_needs_review/Dabrafenib_Isberner2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference/Dabrafenib_Isberner2022_reference_matlab.zip" download>Dabrafenib_Isberner2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference/Dabrafenib_Isberner2022_reference_matlab_simbio.zip" download>Dabrafenib_Isberner2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference/Dabrafenib_Isberner2022_reference_sbml.zip" download>Dabrafenib_Isberner2022_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Isberner2022_reference/Dabrafenib_Isberner2022_reference_cellml.zip" download>Dabrafenib_Isberner2022_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:14 UTC</sub>
