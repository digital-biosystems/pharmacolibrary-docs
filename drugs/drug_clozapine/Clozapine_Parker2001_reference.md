<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Parker_2001 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Parker2001_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The clozapine rat model was rejected because the extracted clearance (CL = 0.28 L/h) and volume (V1 = 0.14 L, V2 = 0.31 L) fall outside the physiological window, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Parker2001_reference" status="rejected" stale="false" population="rats (preclinical PK/PD study)" measured-compound="clozapine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Parker TJ, Della Pasqua OE, Loizillon E, Chezaubernard C, Jochemsen R, Danhof M. Pharmacokinetic-pharmacodynamic modelling in the early development phase of anti-psychotics: a comparison of the effects of clozapine, S 16924 and S 18327 in the EEG model in rats. British journal of pharmacology 132(1):151–158 (2001).
  ·  DOI: [10.1038/sj.bjp.0703791](https://doi.org/10.1038/sj.bjp.0703791)

## Population and dosing

**Population:** rats (preclinical PK/PD study) · condition healthy (preclinical, rat EEG model) · age group adult · n = 8.

**Dosing:** 280, 437.5, 1225 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Kco | kcomp | 2.7 | 1/h | 18 |
| N | equation variable | 1.5 |  | 0.28 |
| CL | CL | 0.28 | L/h | 16 |
| V1 | V1 | 0.14 | L | 39 |
| Q | Q | 0.47 | L/h | 17 |
| V2 | V2 | 0.31 | L | 6.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clozapine rat model was rejected because the extracted clearance (CL = 0.28 L/h) and volume (V1 = 0.14 L, V2 = 0.31 L) fall outside the physiological window, indicating a unit or scale extraction error.**

The record reports clozapine clearance of 0.28 L/h with central and peripheral volumes of 0.14 L and 0.31 L, plus intercompartmental clearance Q = 0.47 L/h and micro-rate constant kcomp = 2.7 1/h, in a parent–metabolite structure linking clozapine to desmethylclozapine by metabolism. The clearance/volume check judged these magnitudes physiologically implausible for rats, attributing the failure to a unit or scale extraction error. No other causes (topology, missing units, defaults) are recorded; the rejection rests on this implausibility finding. Extracted — clozapine: kcomp 2.7 1/h, CL 0.28 L/h, V1 0.14 L, Q 0.47 L/h, V2 0.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of kco: this record has 2.7, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Kco | `Q48` · kcomp | 2.7 | 1/h | 0.00075 | 1/s | 1/h | 18 | llm (0.6) | Parker_2001_table_5:row1:col2, Parker_2001_table_5:row1:col3, Parker_2001_table_5:row1:col4, Parker_2001_table_5:row1:col6, Parker_2001_table_5:row1:col7, Parker_2001_table_5:row14:col2, Parker_2001_table_5:row14:col3, Parker_2001_table_5:row14:col4, Parker_2001_table_5:row14:col6, Parker_2001_table_5:row14:col7 |
| N | `Q900` · equation variable | 1.5 |  |  |  |  | 0.28 | llm (0.6) | Parker_2001_table_5:row5:col2, Parker_2001_table_5:row5:col3, Parker_2001_table_5:row18:col2, Parker_2001_table_5:row18:col3 |
| CL | `Q22` · CL | 0.28 | L/h | 7.778e-08 | m3/s | L/h | 16 | exact (1) | Parker_2001_table_2:row1:col2, Parker_2001_table_2:row1:col3, Parker_2001_table_2:row1:col4, Parker_2001_table_2:row1:col6, Parker_2001_table_2:row1:col7, Parker_2001_table_2:row7:col2, Parker_2001_table_2:row7:col3, Parker_2001_table_2:row7:col4, Parker_2001_table_2:row7:col6, Parker_2001_table_2:row7:col7, Parker_2001_table_2:row15:col2, Parker_2001_table_2:row15:col3, Parker_2001_table_2:row15:col4, Parker_2001_table_2:row15:col6, Parker_2001_table_2:row15:col7 |
| V1 | `Q63` · V1 | 0.14 | L | 0.00014 | m3 | L | 39 | exact (1) | Parker_2001_table_2:row2:col1, Parker_2001_table_2:row2:col2, Parker_2001_table_2:row2:col3, Parker_2001_table_2:row2:col4, Parker_2001_table_2:row2:col6, Parker_2001_table_2:row2:col7, Parker_2001_table_2:row8:col1, Parker_2001_table_2:row8:col2, Parker_2001_table_2:row8:col3, Parker_2001_table_2:row8:col4, Parker_2001_table_2:row8:col6, Parker_2001_table_2:row8:col7, Parker_2001_table_2:row16:col1, Parker_2001_table_2:row16:col2, Parker_2001_table_2:row16:col3, Parker_2001_table_2:row16:col4, Parker_2001_table_2:row16:col6, Parker_2001_table_2:row16:col7 |
| Q | `Q30` · Q | 0.47 | L/h | 1.306e-07 | m3/s | L/h | 17 | exact (1) | Parker_2001_table_2:row3:col2, Parker_2001_table_2:row3:col3, Parker_2001_table_2:row3:col4, Parker_2001_table_2:row3:col6, Parker_2001_table_2:row3:col7, Parker_2001_table_2:row9:col2, Parker_2001_table_2:row9:col3, Parker_2001_table_2:row9:col4, Parker_2001_table_2:row9:col6, Parker_2001_table_2:row9:col7, Parker_2001_table_2:row17:col2, Parker_2001_table_2:row17:col3, Parker_2001_table_2:row17:col4, Parker_2001_table_2:row17:col6, Parker_2001_table_2:row17:col7 |
| V2 | `Q64` · V2 | 0.31 | L | 0.00031 | m3 | L | 6.9 | exact (1) | Parker_2001_table_2:row4:col1, Parker_2001_table_2:row4:col2, Parker_2001_table_2:row4:col3, Parker_2001_table_2:row4:col4, Parker_2001_table_2:row4:col6, Parker_2001_table_2:row4:col7, Parker_2001_table_2:row10:col1, Parker_2001_table_2:row10:col2, Parker_2001_table_2:row10:col3, Parker_2001_table_2:row10:col4, Parker_2001_table_2:row10:col6, Parker_2001_table_2:row10:col7, Parker_2001_table_2:row18:col1, Parker_2001_table_2:row18:col2, Parker_2001_table_2:row18:col3, Parker_2001_table_2:row18:col4, Parker_2001_table_2:row18:col6, Parker_2001_table_2:row18:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at "Needs review" — not promoted

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
| `gpt-oss-120b` | `parameters[kco]` | 2.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[n]` | 1.5 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Parker_2001_table_2:row3:col2', 'Parker_2001_table_2:row3:col3', 'Parker_2001_table_2:row3:col4', 'Parker_2001_table_2:row3:col6', 'Parker_2001_table_2:row3:col7', 'Parker_2001_table_2:row9:col2', 'Parker_2001_table_2:row9:col3', 'Parker_2001_table_2:row9:col4', 'Parker_2001_table_2:row9:col6', 'Parker_2001_table_2:row9:col7', 'Parker_2001_table_2:row17:col2', 'Parker_2001_table_2:row17:col3', 'Parker_2001_table_2:row17:col4', 'Parker_2001_table_2:row17:col6', 'Parker_2001_table_2:row17:col7'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Parker_2001_table_5:row1:col2', 'Parker_2001_table_5:row1:col3', 'Parker_2001_table_5:row1:col4', 'Parker_2001_table_5:row1:col6', 'Parker_2001_table_5:row1:col7', 'Parker_2001_table_5:row14:col2', 'Parker_2001_table_5:row14:col3', 'Parker_2001_table_5:row14:col4', 'Parker_2001_table_5:row14:col6', 'Parker_2001_table_5:row14:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Parker_2001_table_2:row2:col1', 'Parker_2001_table_2:row2:col2', 'Parker_2001_table_2:row2:col3', 'Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row2:col6', 'Parker_2001_table_2:row2:col7', 'Parker_2001_table_2:row8:col1', 'Parker_2001_table_2:row8:col2', 'Parker_2001_table_2:row8:col3', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row8:col6', 'Parker_2001_table_2:row8:col7', 'Parker_2001_table_2:row16:col1', 'Parker_2001_table_2:row16:col2', 'Parker_2001_table_2:row16:col3', 'Parker_2001_table_2:row16:col4', 'Parker_2001_table_2:row16:col6', 'Parker_2001_table_2:row16:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Parker_2001_table_2:row4:col1', 'Parker_2001_table_2:row4:col2', 'Parker_2001_table_2:row4:col3', 'Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row4:col6', 'Parker_2001_table_2:row4:col7', 'Parker_2001_table_2:row10:col1', 'Parker_2001_table_2:row10:col2', 'Parker_2001_table_2:row10:col3', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row10:col6', 'Parker_2001_table_2:row10:col7', 'Parker_2001_table_2:row18:col1', 'Parker_2001_table_2:row18:col2', 'Parker_2001_table_2:row18:col3', 'Parker_2001_table_2:row18:col4', 'Parker_2001_table_2:row18:col6', 'Parker_2001_table_2:row18:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.28 | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.28 L/h | ['Parker_2001_table_2:row1:col2', 'Parker_2001_table_2:row1:col3', 'Parker_2001_table_2:row1:col4', 'Parker_2001_table_2:row1:col6', 'Parker_2001_table_2:row1:col7', 'Parker_2001_table_2:row7:col2', 'Parker_2001_table_2:row7:col3', 'Parker_2001_table_2:row7:col4', 'Parker_2001_table_2:row7:col6', 'Parker_2001_table_2:row7:col7', 'Parker_2001_table_2:row15:col2', 'Parker_2001_table_2:row15:col3', 'Parker_2001_table_2:row15:col4', 'Parker_2001_table_2:row15:col6', 'Parker_2001_table_2:row15:col7'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.14 L | ['Parker_2001_table_2:row2:col1', 'Parker_2001_table_2:row2:col2', 'Parker_2001_table_2:row2:col3', 'Parker_2001_table_2:row2:col4', 'Parker_2001_table_2:row2:col6', 'Parker_2001_table_2:row2:col7', 'Parker_2001_table_2:row8:col1', 'Parker_2001_table_2:row8:col2', 'Parker_2001_table_2:row8:col3', 'Parker_2001_table_2:row8:col4', 'Parker_2001_table_2:row8:col6', 'Parker_2001_table_2:row8:col7', 'Parker_2001_table_2:row16:col1', 'Parker_2001_table_2:row16:col2', 'Parker_2001_table_2:row16:col3', 'Parker_2001_table_2:row16:col4', 'Parker_2001_table_2:row16:col6', 'Parker_2001_table_2:row16:col7'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.31 L | ['Parker_2001_table_2:row4:col1', 'Parker_2001_table_2:row4:col2', 'Parker_2001_table_2:row4:col3', 'Parker_2001_table_2:row4:col4', 'Parker_2001_table_2:row4:col6', 'Parker_2001_table_2:row4:col7', 'Parker_2001_table_2:row10:col1', 'Parker_2001_table_2:row10:col2', 'Parker_2001_table_2:row10:col3', 'Parker_2001_table_2:row10:col4', 'Parker_2001_table_2:row10:col6', 'Parker_2001_table_2:row10:col7', 'Parker_2001_table_2:row18:col1', 'Parker_2001_table_2:row18:col2', 'Parker_2001_table_2:row18:col3', 'Parker_2001_table_2:row18:col4', 'Parker_2001_table_2:row18:col6', 'Parker_2001_table_2:row18:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Parker2001_reference&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Parker2001_reference%0APaper%3A%20Parker_2001%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Parker2001_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 15:14 UTC</sub>
