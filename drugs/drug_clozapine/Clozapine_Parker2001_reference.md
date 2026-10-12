<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Parker_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Parker2001_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The clozapine rat model was rejected because the extracted clearance (CL = 0.28 L/h) and volume (V1 = 0.14 L, V2 = 0.31 L) fall outside the physiological window, indicating a unit or scale extraction error.**

The record reports clozapine clearance of 0.28 L/h with central and peripheral volumes of 0.14 L and 0.31 L, plus intercompartmental clearance Q = 0.47 L/h and micro-rate constant kcomp = 2.7 1/h, in a parent–metabolite structure linking clozapine to desmethylclozapine by metabolism. The clearance/volume check judged these magnitudes physiologically implausible for rats, attributing the failure to a unit or scale extraction error. No other causes (topology, missing units, defaults) are recorded; the rejection rests on this implausibility finding. Extracted — clozapine: kcomp 2.7 1/h, CL 0.28 L/h, V1 0.14 L, Q 0.47 L/h, V2 0.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of kco: this record has 2.7, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Parker TJ et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2001)
  ·  DOI: [10.1038/sj.bjp.0703791](https://doi.org/10.1038/sj.bjp.0703791)

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Parker2001_reference" status="rejected" stale="false" population="rats (preclinical PK/PD study)" measured-compound="clozapine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Kco | `Q48` · kcomp | 2.7 | 1/h | 0.00075 | 1/h | 18 | llm (0.6) | Parker_2001_table_5:row1:col2, Parker_2001_table_5:row1:col3, Parker_2001_table_5:row1:col4, Parker_2001_table_5:row1:col6, Parker_2001_table_5:row1:col7, Parker_2001_table_5:row14:col2, Parker_2001_table_5:row14:col3, Parker_2001_table_5:row14:col4, Parker_2001_table_5:row14:col6, Parker_2001_table_5:row14:col7 | — | not captured |
| N | `Q900` · equation variable | 1.5 | not captured | not captured | not captured | 0.28 | llm (0.6) | Parker_2001_table_5:row5:col2, Parker_2001_table_5:row5:col3, Parker_2001_table_5:row18:col2, Parker_2001_table_5:row18:col3 | — | not captured |
| CL | `Q22` · CL | 0.28 | L/h | 7.777777777777778e-08 | L/h | 16 | exact (1.0) | Parker_2001_table_2:row1:col2, Parker_2001_table_2:row1:col3, Parker_2001_table_2:row1:col4, Parker_2001_table_2:row1:col6, Parker_2001_table_2:row1:col7, Parker_2001_table_2:row7:col2, Parker_2001_table_2:row7:col3, Parker_2001_table_2:row7:col4, Parker_2001_table_2:row7:col6, Parker_2001_table_2:row7:col7, Parker_2001_table_2:row15:col2, Parker_2001_table_2:row15:col3, Parker_2001_table_2:row15:col4, Parker_2001_table_2:row15:col6, Parker_2001_table_2:row15:col7 | — | not captured |
| V1 | `Q63` · V1 | 0.14 | L | 0.00014000000000000001 | L | 39 | exact (1.0) | Parker_2001_table_2:row2:col1, Parker_2001_table_2:row2:col2, Parker_2001_table_2:row2:col3, Parker_2001_table_2:row2:col4, Parker_2001_table_2:row2:col6, Parker_2001_table_2:row2:col7, Parker_2001_table_2:row8:col1, Parker_2001_table_2:row8:col2, Parker_2001_table_2:row8:col3, Parker_2001_table_2:row8:col4, Parker_2001_table_2:row8:col6, Parker_2001_table_2:row8:col7, Parker_2001_table_2:row16:col1, Parker_2001_table_2:row16:col2, Parker_2001_table_2:row16:col3, Parker_2001_table_2:row16:col4, Parker_2001_table_2:row16:col6, Parker_2001_table_2:row16:col7 | — | not captured |
| Q | `Q30` · Q | 0.47 | L/h | 1.3055555555555556e-07 | L/h | 17 | exact (1.0) | Parker_2001_table_2:row3:col2, Parker_2001_table_2:row3:col3, Parker_2001_table_2:row3:col4, Parker_2001_table_2:row3:col6, Parker_2001_table_2:row3:col7, Parker_2001_table_2:row9:col2, Parker_2001_table_2:row9:col3, Parker_2001_table_2:row9:col4, Parker_2001_table_2:row9:col6, Parker_2001_table_2:row9:col7, Parker_2001_table_2:row17:col2, Parker_2001_table_2:row17:col3, Parker_2001_table_2:row17:col4, Parker_2001_table_2:row17:col6, Parker_2001_table_2:row17:col7 | — | not captured |
| V2 | `Q64` · V2 | 0.31 | L | 0.00031 | L | 6.9 | exact (1.0) | Parker_2001_table_2:row4:col1, Parker_2001_table_2:row4:col2, Parker_2001_table_2:row4:col3, Parker_2001_table_2:row4:col4, Parker_2001_table_2:row4:col6, Parker_2001_table_2:row4:col7, Parker_2001_table_2:row10:col1, Parker_2001_table_2:row10:col2, Parker_2001_table_2:row10:col3, Parker_2001_table_2:row10:col4, Parker_2001_table_2:row10:col6, Parker_2001_table_2:row10:col7, Parker_2001_table_2:row18:col1, Parker_2001_table_2:row18:col2, Parker_2001_table_2:row18:col3, Parker_2001_table_2:row18:col4, Parker_2001_table_2:row18:col6, Parker_2001_table_2:row18:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row2:col2', 'Parker_2001_table_5:row2:col3', 'Parker_2001_table_5:row2:col4', 'Parker_2001_table_5:row2:col6', 'Parker_2001_table_5:row2:col7', 'Parker_2001_table_5:row15:col2', 'Parker_2001_table_5:row15:col3', 'Parker_2001_table_5:row15:col4', 'Parker_2001_table_5:row15:col6', 'Parker_2001_table_5:row15:col7'])
- dropped PD-category row 'Emax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row3:col2', 'Parker_2001_table_5:row3:col3', 'Parker_2001_table_5:row3:col4', 'Parker_2001_table_5:row3:col6', 'Parker_2001_table_5:row3:col7', 'Parker_2001_table_5:row16:col2', 'Parker_2001_table_5:row16:col3', 'Parker_2001_table_5:row16:col4', 'Parker_2001_table_5:row16:col6', 'Parker_2001_table_5:row16:col7'])
- dropped PD-category row 'EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row4:col2', 'Parker_2001_table_5:row4:col3', 'Parker_2001_table_5:row4:col4', 'Parker_2001_table_5:row4:col6', 'Parker_2001_table_5:row4:col7', 'Parker_2001_table_5:row17:col2', 'Parker_2001_table_5:row17:col3', 'Parker_2001_table_5:row17:col4', 'Parker_2001_table_5:row17:col6', 'Parker_2001_table_5:row17:col7'])
- dropped PD-category row 'Emax (2)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row6:col2', 'Parker_2001_table_5:row6:col3', 'Parker_2001_table_5:row6:col4', 'Parker_2001_table_5:row6:col6', 'Parker_2001_table_5:row6:col7'])
- dropped PD-category row 'EC50 (2)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Parker_2001_table_5:row7:col2', 'Parker_2001_table_5:row7:col3', 'Parker_2001_table_5:row7:col4', 'Parker_2001_table_5:row7:col6', 'Parker_2001_table_5:row7:col7'])
- dropped unlinked row (NIL): 'N (2)' — extend the ontology if this is a real PK parameter (source ['Parker_2001_table_5:row8:col2', 'Parker_2001_table_5:row8:col3'])
- implicit units: 'Kco' → 1/h (from the popPK convention: 'Paper gives no unit for micro-rate constants; first-order distribution rate constants are conventionally in 1/h in popul')
- implicit units: 'CL' → L/h (from the paper text: "Text states 'Population CL and V1 were estimated as ... 0.28 l h 71 ... (S 18327)', i.e. L/h for CL.")
- implicit units: 'V1' → L (from the paper text: "Text states '... and 0.14 l (S 18327)', i.e. L for V1.")
- implicit units: 'Q' → L/h (from the popPK convention: 'No unit stated for Q in text or table; intercompartmental clearances are conventionally in L/h in population PK, consist')
- implicit units: 'V2' → L (from the popPK convention: 'No unit stated for V2 in text or table; peripheral volumes of distribution are conventionally in L, consistent with a va')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clozapine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- final table tab_4: grid unusable → re-running vision table extraction for Parker_2001
- unparsed cell Parker_2001_table_5:row1:col1 = 'h−1'
- unparsed cell Parker_2001_table_5:row2:col1 = 'µV s−1'
- unparsed cell Parker_2001_table_5:row3:col1 = 'µV s−1'
- unparsed cell Parker_2001_table_5:row4:col1 = 'ng ml−1'
- unparsed cell Parker_2001_table_5:row6:col1 = 'µV s−1'
- unparsed cell Parker_2001_table_5:row7:col1 = 'ng ml−1'
- unparsed cell Parker_2001_table_5:row10:col6 = '0*'
- unparsed cell Parker_2001_table_5:row11:col6 = '0*'
- unparsed cell Parker_2001_table_5:row14:col1 = 'h−1'
- unparsed cell Parker_2001_table_5:row15:col1 = 'µV s−1'
- unparsed cell Parker_2001_table_5:row16:col1 = 'µV s−1'
- unparsed cell Parker_2001_table_5:row17:col1 = 'ng ml−1'
- unparsed cell Parker_2001_table_5:row20:col6 = '0*'
- unparsed cell Parker_2001_table_2:row1:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row3:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row7:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row9:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row11:col6 = '0*'
- unparsed cell Parker_2001_table_2:row12:col6 = '0*'
- unparsed cell Parker_2001_table_2:row13:col6 = '0*'
- unparsed cell Parker_2001_table_2:row15:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row17:col1 = '1 h⁻¹'
- unparsed cell Parker_2001_table_2:row19:col6 = '0*'
- companion parameter table 2 transcribed (98 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kco]` | 2.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[n]` | 1.5 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Parker_2001_table_2:row3:col2', 'Parker_2001_table_2:row3:col3', 'Parker_2001_table_2:row3:col4', 'Parker_2001_table_2:row3:col6', 'Parker_2001_table_2:row3:col7', 'Parker_2001_table_2:row9:col2', 'Parker_2001_table_2:row9:col3', 'Parker_2001_table_2:row9:col4', 'Parker_2001_table_2:row9:col6', 'Parker_2001_table_2:row9:col7', 'Parker_2001_table_2:row17:col2', 'Parker_2001_table_2:row17:col3', 'Parker_2001_table_2:row17:col4', 'Parker_2001_table_2:row17:col6', 'Parker_2001_table_2:row17:col7'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Parker_2001_table_5:row1:col2', 'Parker_2001_table_5:row1:col3', 'Parker_2001_table_5:row1:col4', 'Parker_2001_table_5:row1:col6', 'Parker_2001_table_5:row1:col7', 'Parker_2001_table_5:row14:col2', 'Parker_2001_table_5:row14:col3', 'Parker_2001_table_5:row14:col4', 'Parker_2001_table_5:row14:col6', 'Parker_2001_table_5:row14:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Parker_2001_table_2:row2:col1', 'Parker_2001_table_2:row2:col2', 'Parker_2001_table_2:row2:col3', 'Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row2:col6', 'Parker_2001_table_2:row2:col7', 'Parker_2001_table_2:row8:col1', 'Parker_2001_table_2:row8:col2', 'Parker_2001_table_2:row8:col3', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row8:col6', 'Parker_2001_table_2:row8:col7', 'Parker_2001_table_2:row16:col1', 'Parker_2001_table_2:row16:col2', 'Parker_2001_table_2:row16:col3', 'Parker_2001_table_2:row16:col4', 'Parker_2001_table_2:row16:col6', 'Parker_2001_table_2:row16:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Parker_2001_table_2:row4:col1', 'Parker_2001_table_2:row4:col2', 'Parker_2001_table_2:row4:col3', 'Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row4:col6', 'Parker_2001_table_2:row4:col7', 'Parker_2001_table_2:row10:col1', 'Parker_2001_table_2:row10:col2', 'Parker_2001_table_2:row10:col3', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row10:col6', 'Parker_2001_table_2:row10:col7', 'Parker_2001_table_2:row18:col1', 'Parker_2001_table_2:row18:col2', 'Parker_2001_table_2:row18:col3', 'Parker_2001_table_2:row18:col4', 'Parker_2001_table_2:row18:col6', 'Parker_2001_table_2:row18:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.28 | not captured | not captured | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.28 L/h | not captured | not captured | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.14 L | not captured | not captured | ['Parker_2001_table_2:row2:col1', 'Parker_2001_table_2:row2:col2', 'Parker_2001_table_2:row2:col3', 'Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row2:col6', 'Parker_2001_table_2:row2:col7', 'Parker_2001_table_2:row8:col1', 'Parker_2001_table_2:row8:col2', 'Parker_2001_table_2:row8:col3', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row8:col6', 'Parker_2001_table_2:row8:col7', 'Parker_2001_table_2:row16:col1', 'Parker_2001_table_2:row16:col2', 'Parker_2001_table_2:row16:col3', 'Parker_2001_table_2:row16:col4', 'Parker_2001_table_2:row16:col6', 'Parker_2001_table_2:row16:col7'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.31 L | not captured | not captured | ['Parker_2001_table_2:row4:col1', 'Parker_2001_table_2:row4:col2', 'Parker_2001_table_2:row4:col3', 'Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row4:col6', 'Parker_2001_table_2:row4:col7', 'Parker_2001_table_2:row10:col1', 'Parker_2001_table_2:row10:col2', 'Parker_2001_table_2:row10:col3', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row10:col6', 'Parker_2001_table_2:row10:col7', 'Parker_2001_table_2:row18:col1', 'Parker_2001_table_2:row18:col2', 'Parker_2001_table_2:row18:col3', 'Parker_2001_table_2:row18:col4', 'Parker_2001_table_2:row18:col6', 'Parker_2001_table_2:row18:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_clozapine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Parker_2001` / `Parker_2001::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:14 UTC</sub>
