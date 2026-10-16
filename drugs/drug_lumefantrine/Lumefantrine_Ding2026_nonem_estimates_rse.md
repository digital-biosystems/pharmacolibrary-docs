<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 nonem_estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Francis2020_reference&quot;,&quot;label&quot;:&quot;Francis_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Ding2026_nonem_estimates_rse`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**No value for lumefantrine's elimination clearance — all 16 extracted parameters describe amodiaquine and desethylamodiaquine, not lumefantrine; t3_param_coverage (+1 more).**

The model was built, but lumefantrine's elimination clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (Fab, AUC∞, Cmax and AUC), so that value has no SI equivalent. Extracted — amodiaquine: kabs 1.93 1/h, Fab 1 relative bioavailability, CL/F 2.25e+03 L/h, Q/F 3.02e+03 L/h, t1/2z 17.7 h, AUC∞ 1.53e+03 h·ng/mL, Cmax 15.1 ng/mL; desethylamodiaquine: CL 32.2 L/h, V1 1.26e+03 L, Q 147 L/h, V2 1.64e+03 L, Q2 37.3 L/h, V3 6.44e+03 L, t1/2z 12.1 d, AUC 96.5 h·µg/L, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine plus amodiaquine, the second reading lumefantrine; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Ding2026_nonem_estimates_rse" status="model_quarantined" stale="false" population="patients with uncomplicated P. falciparum malaria" measured-compound="lumefantrine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 16 extracted.

**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 1.93 | 1/h | 0.0005361111111111111 | 1/h | 20.2 | exact (1.0) | Ding_2026_table_3:row1:col1 | — | not captured |
| F | `Q40` · Fab | 1 | relative bioavailability | not captured | [relativebioavailability] | not captured | exact (1.0) | Ding_2026_table_3:row2:col1 | — | not captured |
| CL/F_AQ (L/h) | `Q27` · CL/F | 2250 | L/h | 0.000625 | [l] / [h] | 3.2 | llm (0.6) | Ding_2026_table_3:row3:col1 | — | not captured |
| Q/F_AQ (L/h) | `Q69` · Q/F | 3020 | L/h | 0.0008388888888888889 | [l] / [h] | 7.6 | llm (0.6) | Ding_2026_table_3:row5:col1 | — | not captured |
| CL/F_DEAQ (L/h) | `Q22` · CL | 32.2 | L/h | 8.944444444444446e-06 | [l] / [h] | 3.5 | exact (1.0) | Ding_2026_table_3:row9:col1 | — | not captured |
| Vc/F_DEAQ (L) | `Q63` · V1 | 1260 | L | 1.26 | [l] | 8.6 | exact (1.0) | Ding_2026_table_3:row10:col1 | — | not captured |
| Q1/F_DEAQ (L/h) | `Q30` · Q | 147 | L/h | 4.0833333333333334e-05 | [l] / [h] | 17.5 | exact (1.0) | Ding_2026_table_3:row11:col1 | — | not captured |
| V1/1/F_DEAQ (L) | `Q64` · V2 | 1640 | L | 1.6400000000000001 | [l] | 15.7 | exact (1.0) | Ding_2026_table_3:row12:col1 | — | not captured |
| Q2/F_DEAQ (L/h) | `Q99` · Q2 | 37.3 | L/h | 1.036111111111111e-05 | [l] / [h] | 11.5 | exact (1.0) | Ding_2026_table_3:row13:col1 | — | not captured |
| V2/2/F_DEAQ (L) | `Q77` · V3 | 6440 | L | 6.44 | [l] | 7.9 | exact (1.0) | Ding_2026_table_3:row14:col1 | — | not captured |
| T1/2_AQ (h) | `Q57` · t1/2z | 17.7 | h | 63720.0 | [h] | not captured | llm (0.6) | Ding_2026_table_3:row17:col1 | — | not captured |
| AUC_0–∞ (h·ng/mL) | `Q17` · AUC∞ | 1530 | h·ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Ding_2026_table_3:row18:col1 | — | not captured |
| Cmax_AQ (ng/mL) | `Q32` · Cmax | 15.1 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Ding_2026_table_3:row19:col1 | — | not captured |
| T1/2_DEAQ (d) | `Q57` · t1/2z | 12.1 | d | 1045440.0 | [d] | not captured | llm (0.6) | Ding_2026_table_3:row20:col1 | — | not captured |
| AUC_DEAQ (h·µg/L) | `Q88` · AUC | 96.5 | h·µg/L | not captured | [[h] · [µg]] / [l] | not captured | llm (0.6) | Ding_2026_table_3:row21:col1 | — | not captured |
| Cmax_DEAQ (ng/mL) | `Q32` · Cmax | 160 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Ding_2026_table_3:row22:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'nonem estimates (%rse)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 45 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 10 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 37.5 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 9.8 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 9.8 (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 37.5 (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'GMR'
- NIL: refused to back-fill base 'IOV' from footnote/prose loose number None (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- dropped value-less row: '%RSE'
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 575 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 310 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'LF'
- dropped value-less row: 'DLF'
- dropped value-less row: 'AL'
- dropped value-less row: 'AQ'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'VC/F'
- dropped value-less row: 'Q/F'
- dropped value-less row: 'VP/F'
- dropped value-less row: 'T 1/2'
- dropped value-less row: 'AUC'
- dropped value-less row: 'C max'
- unit inherited for Fab (Q40): 'relative bioavailability' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'Ka' → 1/h (from the popPK convention: 'First-order absorption rate constants (Ka) are expressed in inverse time units. The magnitude (1.93) is consistent with ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'nonem estimates (%rse)' subgroup of Ding_2026 (paper reports 2 populations: nonem estimates (%rse), nonmem estimates (%rse))
- row roles: 2 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles: 21 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 80/80 row label(s) assigned, 28 linked by role; re-tagged parent→desbutyllumefantrine ×6, parent→artemether ×12, parent→dihydroartemisinin ×6, parent→amodiaquine ×11, parent→desethylamodiaquine ×10, lumefantrine→parent ×5, lumefantrine→desbutyllumefantrine ×3, lumefantrine→amodiaquine ×1
- molar mass: none of 6 PubChem candidate(s) is 'dihydroartemisinin' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'desethylamodiaquine' (LLM) — left in mass units
- molar mass: none found for 'dihydroartemisinin' — its concentrations stay mass-only
- molar mass: none found for 'desethylamodiaquine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Ding_2026_table_4: unparsed_numeric_cell
- companion parameter table 2 transcribed (47 record(s), model stage 'final')
- table Ding_2026_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (35 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.435 (20/46 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['artemether', 'dihydroartemisinin', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | [['artemether', 'dihydroartemisinin', 'metabolism'], ['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f aq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f arm].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f deaq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dha].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dlf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f lf]` | not captured | 4.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f lf]` | 4.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.93 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` | not captured | 5.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` | 5.43 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | not captured | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | 5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` | not captured | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` | 1.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` | not captured | 10.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time dependency on cl]` | not captured | 0.551 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` | not captured | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` | 101 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` | not captured | 311 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` | 311 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f arm].parameter_id` | Q78 | Q82 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine plus amodiaquine | lumefantrine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row18:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row9:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row11:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row19:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row22:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row1:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row17:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row20:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row5:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row14:col1'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_3:row21:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_3:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 32.2 L/h | not captured | not captured | ['Ding_2026_table_3:row9:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.25e+03 L/h | not captured | not captured | ['Ding_2026_table_3:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.26e+03 L | not captured | not captured | ['Ding_2026_table_3:row10:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.64e+03 L | not captured | not captured | ['Ding_2026_table_3:row12:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 8 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['kabs', 'CL/F', 'V1', 'V2'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | pass | 9 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 0.94 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.85 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lumefantrine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2026` / `Ding_2026::nonem_estimates_rse`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lumefantrine/models/modelica/_needs_review/Lumefantrine_Ding2026_nonem_estimates_rse.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lumefantrine/models/modelica/_needs_review/Lumefantrine_Ding2026_nonem_estimates_rse.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonem_estimates_rse/Lumefantrine_Ding2026_nonem_estimates_rse_matlab.zip" download>Lumefantrine_Ding2026_nonem_estimates_rse_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonem_estimates_rse/Lumefantrine_Ding2026_nonem_estimates_rse_matlab_simbio.zip" download>Lumefantrine_Ding2026_nonem_estimates_rse_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonem_estimates_rse/Lumefantrine_Ding2026_nonem_estimates_rse_sbml.zip" download>Lumefantrine_Ding2026_nonem_estimates_rse_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonem_estimates_rse/Lumefantrine_Ding2026_nonem_estimates_rse_cellml.zip" download>Lumefantrine_Ding2026_nonem_estimates_rse_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:50 UTC</sub>
