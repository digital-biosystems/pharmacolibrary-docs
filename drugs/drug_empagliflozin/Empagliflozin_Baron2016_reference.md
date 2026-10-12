<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;empagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/&quot;},{&quot;label&quot;:&quot;Baron_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Baron_2016_FPG&quot;,&quot;label&quot;:&quot;Baron_2016 \u00b7 FPG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Baron_2016_FPG.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rascher_2025_HbA1c&quot;,&quot;label&quot;:&quot;Rascher_2025 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Rascher_2025_HbA1c.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sato_2024_HbA1c&quot;,&quot;label&quot;:&quot;Sato_2024 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Sato_2024_HbA1c.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# empagliflozin — `Empagliflozin_Baron2016_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

### Reviewer guidance

**The empagliflozin three-compartment model for type 2 diabetes patients was quarantined because clearance, volume of distribution, absorption rate constant and absorption lag time had no source values and library placeholders were substituted.**

Although the record lists CL 0.0110, V2 1.27, Q/F 6.34, V3 0.959 and kabs 1.23, the coverage check found only 2 of 4 expected parameters emitted or defaulted, with V2 and Q/F neither emitted nor defaulted. The model builder substituted generic placeholder values for empagliflozin's clearance, volume of distribution, absorption rate constant and absorption lag time, and the absorption rate constant was flagged as invented since it was not reported in the source. Bioavailability was assumed F=1 and Fm=1 with no molar correction, making the parameterization apparent. A second reader assigned an absorption lag time of 0.500 where this record has none. Extracted — empagliflozin: CL 0.011, V2 1.27, Q/F 6.34, V3 0.959, kabs 1.23.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has empagliflozin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:52.947879+00:00) predates the upstream re-run (2026-10-04 23:44:24.614412+00:00). Current validate status: `extracted`.

## Citation
Baron KT et al., Population Pharmacokinetics and Exposur…, Diabetes therapy : research… (2016)
  ·  DOI: [10.1007/s13300-016-0174-y](https://doi.org/10.1007/s13300-016-0174-y)

## Model component
<dbs-pgx drug="empagliflozin" model-id="Empagliflozin_Baron2016_reference" status="extracted" stale="true" population="patients with type 2 diabetes" measured-compound="empagliflozin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.0110 | L/h | 3.0555555555555555e-09 | L/h | 199 | exact (1.0) | Baron_2016_table_S1:row1:col1, Baron_2016_table_S1:row1:col3, Baron_2016_table_S1:row2:col1, Baron_2016_table_S1:row2:col3, Baron_2016_table_S1:row3:col1, Baron_2016_table_S1:row3:col3, Baron_2016_table_S1:row4:col1, Baron_2016_table_S1:row4:col3, Baron_2016_table_S1:row5:col1, Baron_2016_table_S1:row5:col3, Baron_2016_table_S1:row6:col1, Baron_2016_table_S1:row6:col3, Baron_2016_table_S1:row7:col1, Baron_2016_table_S1:row7:col3, Baron_2016_table_S1:row8:col1, Baron_2016_table_S1:row8:col3, Baron_2016_table_S1:row9:col1, Baron_2016_table_S1:row9:col3, Baron_2016_table_S1:row10:col1, Baron_2016_table_S1:row10:col3, Baron_2016_table_S1:row11:col1, Baron_2016_table_S1:row11:col3, Baron_2016_table_S1:row12:col1, Baron_2016_table_S1:row12:col3 | — | not captured |
| V2 | `Q64` · V2 | 1.27 | L | 0.00127 | L | 15.3 | exact (1.0) | Baron_2016_table_S1:row14:col1, Baron_2016_table_S1:row14:col3, Baron_2016_table_S1:row15:col1, Baron_2016_table_S1:row15:col3, Baron_2016_table_S1:row16:col1, Baron_2016_table_S1:row16:col3, Baron_2016_table_S1:row17:col1, Baron_2016_table_S1:row17:col3, Baron_2016_table_S1:row18:col1, Baron_2016_table_S1:row18:col3 | — | not captured |
| Q/F | `Q69` · Q/F | 6.34 | L/h | 1.7611111111111112e-06 | L/h | 4.22 | exact (1.0) | Baron_2016_table_S1:row19:col1, Baron_2016_table_S1:row19:col3 | — | not captured |
| V3 | `Q77` · V3 | 0.959 | L | 0.000959 | L | 5.04 | exact (1.0) | Baron_2016_table_S1:row21:col1, Baron_2016_table_S1:row21:col3, Baron_2016_table_S1:row22:col1, Baron_2016_table_S1:row22:col3, Baron_2016_table_S1:row23:col1, Baron_2016_table_S1:row23:col3, Baron_2016_table_S1:row24:col1, Baron_2016_table_S1:row24:col3, Baron_2016_table_S1:row25:col1, Baron_2016_table_S1:row25:col3 | — | not captured |
| ka | `Q49` · kabs | 1.23 | 1/h | 0.00034166666666666666 | 1/h | 2.21 | exact (1.0) | Baron_2016_table_S1:row27:col1, Baron_2016_table_S1:row27:col3, Baron_2016_table_S1:row28:col1, Baron_2016_table_S1:row28:col3, Baron_2016_table_S1:row29:col1, Baron_2016_table_S1:row29:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ALAG1' — extend the ontology if this is a real PK parameter (source ['Baron_2016_table_S1:row30:col1'])
- dropped value-less row: '*'
- implicit units: 'CL' → L/h (from the paper text: "The text states: 'Typical population PK parameters ... were: CL/F, 10.6 L/h'")
- implicit units: 'V2' → L (from the paper text: "The text states: 'V 2/F, 3.14 L'")
- implicit units: 'Q/F' → L/h (from the paper text: "The text states: 'apparent intercompartmental clearance (Q/F), 6.34 L/h'")
- implicit units: 'V3' → L (from the paper text: "The text states: 'V 3/F, 70.6 L'")
- implicit units: 'ka' → 1/h (from the popPK convention: "The text lists 'first-order k a' but provides a value with unit 'L/h' which is dimensionally incorrect for a first-order")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=empagliflozin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Baron_2016_table_S1:row1:col4 = '–0.234 (–0.347, –0.128)'
- unparsed cell Baron_2016_table_S1:row2:col4 = '0.322 (0.207, 0.440)'
- unparsed cell Baron_2016_table_S1:row3:col4 = '0.886 (0.845, 0.919)'
- unparsed cell Baron_2016_table_S1:row4:col4 = '1.02 (0.982, 1.05)'
- unparsed cell Baron_2016_table_S1:row5:col4 = '1.06 (1.02, 1.10)'
- unparsed cell Baron_2016_table_S1:row6:col4 = '0.334 (0.282, 0.383)'
- unparsed cell Baron_2016_table_S1:row7:col4 = '0.881 (0.843, 0.924)'
- unparsed cell Baron_2016_table_S1:row8:col4 = '–0.217 (–0.364, –0.0745)'
- unparsed cell Baron_2016_table_S1:row9:col4 = '0.0204 (–0.0157, 0.0535)'
- unparsed cell Baron_2016_table_S1:row10:col4 = '–0.0435 (–0.0860, 0.00296)'
- unparsed cell Baron_2016_table_S1:row11:col4 = '–0.0493 (–0.0916, –0.00796)'
- unparsed cell Baron_2016_table_S1:row12:col4 = '0.00852 (–0.0388, 0.0496)'
- unparsed cell Baron_2016_table_S1:row14:col4 = '0.804 (–0.00742, 1.85)'
- unparsed cell Baron_2016_table_S1:row15:col4 = '1.22 (0.971, 1.81)'
- unparsed cell Baron_2016_table_S1:row16:col4 = '2.10 (0.0972, 3.65)'
- unparsed cell Baron_2016_table_S1:row17:col4 = '1.11 (0.300, 2.29)'
- unparsed cell Baron_2016_table_S1:row18:col4 = '1.29 (0.930, 1480)'
- unparsed cell Baron_2016_table_S1:row19:col4 = '6.31 (5.72, 6.91)'
- unparsed cell Baron_2016_table_S1:row21:col4 = '0.154 (–0.120, 0.381)'
- unparsed cell Baron_2016_table_S1:row22:col4 = '0.832 (0.751, 0.909)'
- unparsed cell Baron_2016_table_S1:row23:col4 = '–0.177 (–0.608, 0.179)'
- unparsed cell Baron_2016_table_S1:row24:col4 = '0.690 (0.423, 0.937)'
- unparsed cell Baron_2016_table_S1:row25:col4 = '0.963 (0.865, 1.07)'
- unparsed cell Baron_2016_table_S1:row27:col4 = '0.114 (–0.0210, 0.238)'
- unparsed cell Baron_2016_table_S1:row28:col4 = '1.16 (1.11, 1.23)'
- unparsed cell Baron_2016_table_S1:row29:col4 = '1.23 (1.18, 1.29)'
- unparsed cell Baron_2016_table_S1:row30:col4 = '0.500 (0.500, 0.500)'
- unparsed cell Baron_2016_table_S1:row37:col1 = '3.50e + 0.5'
- unparsed cell Baron_2016_table_S1:row37:col4 = '3.52e + 05 (2.85e + 05, 4.23e + 05)'
- companion parameter table S1 transcribed (54 record(s), model stage 'final')
- LLM selected parameter table(s) S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.8 (12/15 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alag1]` | not captured | 0.500 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | empagliflozin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | empagliflozin | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Baron_2016_table_S1:row1:col1', 'Baron_2016_table_S1:row1:col3', 'Baron_2016_table_S1:row2:col1', 'Baron_2016_table_S1:row2:col3', 'Baron_2016_table_S1:row3:col1', 'Baron_2016_table_S1:row3:col3', 'Baron_2016_table_S1:row4:col1', 'Baron_2016_table_S1:row4:col3', 'Baron_2016_table_S1:row5:col1', 'Baron_2016_table_S1:row5:col3', 'Baron_2016_table_S1:row6:col1', 'Baron_2016_table_S1:row6:col3', 'Baron_2016_table_S1:row7:col1', 'Baron_2016_table_S1:row7:col3', 'Baron_2016_table_S1:row8:col1', 'Baron_2016_table_S1:row8:col3', 'Baron_2016_table_S1:row9:col1', 'Baron_2016_table_S1:row9:col3', 'Baron_2016_table_S1:row10:col1', 'Baron_2016_table_S1:row10:col3', 'Baron_2016_table_S1:row11:col1', 'Baron_2016_table_S1:row11:col3', 'Baron_2016_table_S1:row12:col1', 'Baron_2016_table_S1:row12:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Baron_2016_table_S1:row27:col1', 'Baron_2016_table_S1:row27:col3', 'Baron_2016_table_S1:row28:col1', 'Baron_2016_table_S1:row28:col3', 'Baron_2016_table_S1:row29:col1', 'Baron_2016_table_S1:row29:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Baron_2016_table_S1:row14:col1', 'Baron_2016_table_S1:row14:col3', 'Baron_2016_table_S1:row15:col1', 'Baron_2016_table_S1:row15:col3', 'Baron_2016_table_S1:row16:col1', 'Baron_2016_table_S1:row16:col3', 'Baron_2016_table_S1:row17:col1', 'Baron_2016_table_S1:row17:col3', 'Baron_2016_table_S1:row18:col1', 'Baron_2016_table_S1:row18:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Baron_2016_table_S1:row19:col1', 'Baron_2016_table_S1:row19:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Baron_2016_table_S1:row21:col1', 'Baron_2016_table_S1:row21:col3', 'Baron_2016_table_S1:row22:col1', 'Baron_2016_table_S1:row22:col3', 'Baron_2016_table_S1:row23:col1', 'Baron_2016_table_S1:row23:col3', 'Baron_2016_table_S1:row24:col1', 'Baron_2016_table_S1:row24:col3', 'Baron_2016_table_S1:row25:col1', 'Baron_2016_table_S1:row25:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.011 L/h | not captured | not captured | ['Baron_2016_table_S1:row1:col1', 'Baron_2016_table_S1:row1:col3', 'Baron_2016_table_S1:row2:col1', 'Baron_2016_table_S1:row2:col3', 'Baron_2016_table_S1:row3:col1', 'Baron_2016_table_S1:row3:col3', 'Baron_2016_table_S1:row4:col1', 'Baron_2016_table_S1:row4:col3', 'Baron_2016_table_S1:row5:col1', 'Baron_2016_table_S1:row5:col3', 'Baron_2016_table_S1:row6:col1', 'Baron_2016_table_S1:row6:col3', 'Baron_2016_table_S1:row7:col1', 'Baron_2016_table_S1:row7:col3', 'Baron_2016_table_S1:row8:col1', 'Baron_2016_table_S1:row8:col3', 'Baron_2016_table_S1:row9:col1', 'Baron_2016_table_S1:row9:col3', 'Baron_2016_table_S1:row10:col1', 'Baron_2016_table_S1:row10:col3', 'Baron_2016_table_S1:row11:col1', 'Baron_2016_table_S1:row11:col3', 'Baron_2016_table_S1:row12:col1', 'Baron_2016_table_S1:row12:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.27 L | not captured | not captured | ['Baron_2016_table_S1:row14:col1', 'Baron_2016_table_S1:row14:col3', 'Baron_2016_table_S1:row15:col1', 'Baron_2016_table_S1:row15:col3', 'Baron_2016_table_S1:row16:col1', 'Baron_2016_table_S1:row16:col3', 'Baron_2016_table_S1:row17:col1', 'Baron_2016_table_S1:row17:col3', 'Baron_2016_table_S1:row18:col1', 'Baron_2016_table_S1:row18:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2', 'Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 2.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_empagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Baron_2016` / `Baron_2016::reference`)
- model: `../../../knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Baron2016_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_empagliflozin/models/modelica/_needs_review/Empagliflozin_Baron2016_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 23:44 UTC</sub>
