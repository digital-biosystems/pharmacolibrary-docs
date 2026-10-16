<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 nonmem_estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Francis2020_reference&quot;,&quot;label&quot;:&quot;Francis_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Ding2026_nonmem_estimates_rse`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUClast, AUC and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUClast, Cmax, AUC and Cmax), so that value has no SI equivalent. Extracted — lumefantrine: n_transit 5, Fab 1, CL/F 4.35 L/h, V1/F 101 L, Q/F 1.65 L/h, V2/F 311 L, t1/2z 7.81 d, AUClast 600 h•mg/mL, … (+1); desbutyllumefantrine: t1/2z 5.78 d, AUC 459 h•µg/mL, Cmax 21.4 ng/mL; artemether: MTT 1.55 h, n_transit 2, Fab 1, CL/F 79.3 L/h, V1/F 141 L, Q/F 21.7 L/h, V2/F 283 L, CL 0.551; dihydroartemisinin: CL/F 255 L/h, V1/F 64.1 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine plus amodiaquine, the second reading lumefantrine; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Ding2026_nonmem_estimates_rse" status="needs_review" stale="false" population="patients with uncomplicated P. falciparum malaria" measured-compound="lumefantrine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 22 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Number of transit compartments | `Q311` · n_transit | 5 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_4:row2:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_4:row3:col1, bcp70301-tbl-0004:footnote | — | not captured |
| CL/F LF (L/h) | `Q27` · CL/F | 4.35 | L/h | 1.2083333333333333e-06 | [l] / [h] | 3.4 | llm_confirmed (0.6) | Ding_2026_table_4:row4:col1 | — | not captured |
| VC/F LF (L) | `Q290` · V1/F | 101 | L | 0.101 | [l] | 8.5 | llm_confirmed (0.6) | Ding_2026_table_4:row5:col1 | — | not captured |
| Q/F LF (L/h) | `Q69` · Q/F | 1.65 | L/h | 4.583333333333333e-07 | [l] / [h] | 6.0 | llm_confirmed (0.6) | Ding_2026_table_4:row6:col1 | — | not captured |
| VP/F LF (L) | `Q82` · V2/F | 311 | L | 0.311 | [l] | 5.3 | llm_confirmed (0.6) | Ding_2026_table_4:row7:col1 | — | not captured |
| T1/2 LF (d) | `Q57` · t1/2z | 7.81 | d | 674784.0 | [d] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row22:col1 | — | not captured |
| AUC LF (h•mg/mL) | `Q74` · AUClast | 600 | h•mg/mL | not captured | [[h] · [mg]] / [ml] | not captured | llm_corrected (0.6) | Ding_2026_table_4:row23:col1 | — | not captured |
| Cmax LF (µg/mL) | `Q32` · Cmax | 15.2 | µg/mL | not captured | [µg] / [ml] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row24:col1 | — | not captured |
| T1/2 DLF (d) | `Q57` · t1/2z | 5.78 | d | 499392.0 | [d] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row26:col1 | — | not captured |
| AUC DLF (h•µg/mL) | `Q88` · AUC | 459 | h•µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row27:col1 | — | not captured |
| Cmax DLF (ng/mL) | `Q32` · Cmax | 21.4 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Ding_2026_table_4:row28:col1 | — | not captured |
| Mean transit time (h) | `Q81` · MTT | 1.55 | h | not captured | [h] | 7.3 | exact (1.0) | Ding_2026_table_2:row1:col1 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | 2 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_2:row2:col1 | — | not captured |
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Ding_2026_table_2:row3:col1 | — | not captured |
| CL/F ARM (L/h) | `Q27` · CL/F | 79.3 | L/h | 2.2027777777777775e-05 | [l] / [h] | 4.8 | llm_confirmed (0.6) | Ding_2026_table_2:row4:col1 | — | not captured |
| Vc/F ARM (L) | `Q290` · V1/F | 141 | L | 0.14100000000000001 | [l] | 7.1 | llm_confirmed (0.6) | Ding_2026_table_2:row5:col1 | — | not captured |
| Q/F ARM (L/h) | `Q69` · Q/F | 21.7 | L/h | 6.027777777777778e-06 | [l] / [h] | 9.32 | llm_confirmed (0.6) | Ding_2026_table_2:row6:col1 | — | not captured |
| Vp/F ARM (L) | `Q82` · V2/F | 283 | L | 0.28300000000000003 | [l] | 23 | llm_confirmed (0.6) | Ding_2026_table_2:row7:col1 | — | not captured |
| Time dependency on CL | `Q22` · CL | 0.551 | not captured | not captured | not captured | 16.7 | llm_confirmed (0.6) | Ding_2026_table_2:row8:col1 | — | not captured |
| CL/F DHA (L/h) | `Q27` · CL/F | 255 | L/h | 7.083333333333334e-05 | [l] / [h] | 5.9 | exact (1.0) | Ding_2026_table_2:row11:col1 | — | not captured |
| Vc/F DHA (L) | `Q290` · V1/F | 64.1 | L | 0.06409999999999999 | [l] | 15.3 | exact (1.0) | Ding_2026_table_2:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F DLF (L/h)', value '7.44') — already have one for this compound
- dropped duplicate Q290 ('VC/F DLF (L)', value '8530') — already have one for this compound
- dropped duplicate Q69 ('Q/F DLF (L/h)', value '1100') — already have one for this compound
- dropped unlinked row (NIL): 'Baseline parasite density on F [%]' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row16:col1'])
- dropped unlinked row (NIL): 'Dose (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row17:col1'])
- dropped unlinked row (NIL): 'Baseline temperature on F [%]' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row18:col1'])
- unit_dimension_mismatch: 'Study effect (TACI) on VC/F, LF [%]' → Q290 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Study effect (TACI) on VC/F, LF [%]', value '-28.1') — already have one for this compound
- dropped unlinked row (NIL): 'Age on CL/F, DLF (year)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row20:col1'])
- unit_dimension_unknown: 'h•mg/mL' (AUClast)
- dropped unlinked row (NIL): 'Day 7 LF concentration (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_4:row25:col1'])
- unit_dimension_unknown: 'h•µg/mL' (AUC)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 45 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 10 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 37.5 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 9.8 (source ['bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Fab' from footnote/prose loose number None (source ['bcp70301-tbl-0004:footnote', 'bcp70301-tbl-0004:footnote']); the table cell was unparseable — needs review
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
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- population split: 'nonmem estimates (%rse)' subgroup of Ding_2026 (paper reports 2 populations: nonem estimates (%rse), nonmem estimates (%rse))
- row roles: 2 per-group rows of none other but 0 reference group(s) — kept as printed
- row roles: 21 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 80/80 row label(s) assigned, 28 linked by role; re-tagged parent→desbutyllumefantrine ×6, parent→artemether ×12, parent→dihydroartemisinin ×6, parent→amodiaquine ×11, parent→desethylamodiaquine ×10, lumefantrine→parent ×5, lumefantrine→desbutyllumefantrine ×3, lumefantrine→amodiaquine ×1
- molar mass: none of 6 PubChem candidate(s) is 'dihydroartemisinin' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'desethylamodiaquine' (LLM) — left in mass units
- molar mass: none found for 'dihydroartemisinin' — its concentrations stay mass-only
- molar mass: none found for 'desethylamodiaquine' — its concentrations stay mass-only

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
| C0_has_structural_params | pass | not captured | 22 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row11:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row12:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row24:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row28:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row22:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row26:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_4:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_4:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_2026_table_2:row7:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_2026_table_2:row8:col1'] |
| C5_unit_missing_Q74 | fail | [mass] * [time] / [length] ** 3 | h•mg/mL | not captured | not captured | ['Ding_2026_table_4:row23:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h•µg/mL | not captured | not captured | ['Ding_2026_table_4:row27:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.35 L/h | not captured | not captured | ['Ding_2026_table_4:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.3 L/h | not captured | not captured | ['Ding_2026_table_2:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 255 L/h | not captured | not captured | ['Ding_2026_table_2:row11:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 101 L | not captured | not captured | ['Ding_2026_table_4:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 141 L | not captured | not captured | ['Ding_2026_table_2:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 64.1 L | not captured | not captured | ['Ding_2026_table_2:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L | not captured | not captured | ['Ding_2026_table_4:row7:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 283 L | not captured | not captured | ['Ding_2026_table_2:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_lumefantrine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2026` / `Ding_2026::nonmem_estimates_rse`)


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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:50 UTC</sub>
