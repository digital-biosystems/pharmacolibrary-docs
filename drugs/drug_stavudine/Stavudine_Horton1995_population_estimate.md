<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/&quot;},{&quot;label&quot;:&quot;Horton_1995 \u00b7 population_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Jullien2007_reference&quot;,&quot;label&quot;:&quot;Jullien_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Jullien2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Sinxadi2010_reference&quot;,&quot;label&quot;:&quot;Sinxadi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# stavudine — `Stavudine_Horton1995_population_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The stavudine absorption rate constant (kabs, 2.38) is reported with the unit 'liters/h', a dimension mismatch for a first-order rate constant, and this unit could not be converted to SI, so the record was rejected.**

For stavudine in patients with AIDS or advanced AIDS-related complex (Horton_1995), the absorption rate constant kabs is given as 2.38 with unit 'liters/h'; a rate constant should have dimension 1/time, so the structural parameter fails the dimension check. Because the reported unit could not be translated into an SI value, the parameter entered model construction without a usable numeric value. The remaining stavudine parameters (CL 34.6 L/h, V 23.9 L, Vss 56.1 L, Q 20.3 L/h, Fab 99.1%) are dimensionally consistent. Extracted — stavudine: Fab 99.1 % of dose, CL 34.6 liters/h, V 23.9 liters, Vss 56.1 liters, Q 20.3 liters/h, kabs 2.38 liters/h, λ2 0.003.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ε1: this record has 0.13, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995)
  ·  DOI: [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309)

<div class="pk-model-meta" hidden drug="stavudine" model-id="Stavudine_Horton1995_population_estimate" status="rejected" stale="false" population="patients with AIDS or advanced AIDS-related complex" measured-compound="stavudine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F (% of dose) | `Q40` · Fab | 99.1 | % of dose | not captured | not captured | not captured | exact (1.0) | Horton_1995_table_3:row0:col1 | — | not captured |
| CL (liters/h) | `Q22` · CL | 34.6 | liters/h | 9.61111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Horton_1995_table_3:row1:col1 | — | not captured |
| V 1 (liters) | `Q61` · V | 23.9 | liters | 0.023899999999999998 | [l] | not captured | space_fold (0.95) | Horton_1995_table_3:row2:col1 | — | not captured |
| V ss (liters) | `Q65` · Vss | 56.1 | liters | 0.056100000000000004 | [l] | not captured | space_fold (0.95) | Horton_1995_table_3:row3:col1 | — | not captured |
| Q (liters/h) | `Q30` · Q | 20.3 | liters/h | 5.63888888888889e-06 | [l] / [h] | not captured | exact (1.0) | Horton_1995_table_3:row4:col1 | — | not captured |
| K a (liters/h) | `Q49` · kabs | 2.38 | liters/h | not captured | [l] / [h] | not captured | space_fold (0.95) | Horton_1995_table_3:row5:col1 | — | not captured |
| ε1 | `Q900` · equation variable | 0.13 | not captured | not captured | not captured | not captured | llm (0.6) | Horton_1995_table_3:row6:col1 | — | not captured |
| ε2 | `Q68` · λ2 | 0.003 | not captured | not captured | not captured | not captured | llm (0.6) | Horton_1995_table_3:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (liters/h) | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'K a (liters/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tab_5:footnote']); the table cell was unparseable — needs review
- implicit units: 'ε2' — the LLM proposed '1/h', whose dimension does not fit Q68; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=stavudine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1 (liters)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'population estimate' subgroup of Horton_1995 (paper reports 2 populations: null value, population estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table tab_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_5:row0:col2 = '[18.8 (11.6, 26) ϩ'
- unparsed cell tab_5:row0:col3 = '0.13 (0.03, 0.24) ⅐'
- unparsed cell tab_5:row0:col4 = 'TBW] ⅐ [1.2 (1.0,'
- unparsed cell tab_5:row0:col5 = '1.38) Ϫ stage] ⅐'
- unparsed cell tab_5:row0:col6 = '[1.5 (1.12),'
- unparsed cell tab_5:row0:col9 = '11, 25'
- unparsed cell tab_5:row1:col2 = '8.18 (4.68, 11.7) 70 (44.9, 95.2) 13.1 (7.7, 18.5) 1.35 (1.13, 1.57) 0.17 (0.13, 0.21) 0.002 (0, 0.003)'
- unparsed cell tab_5:row2:col9 = '24, 123'
- unparsed cell tab_5:row3:col9 = '0, 46'
- unparsed cell tab_5:row4:col9 = '67, 94'
- transposed table Horton_1995_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Horton_1995_table_3:row0:col2 = '82.3, 116'
- unparsed cell Horton_1995_table_3:row0:col4 = '1, 36'
- unparsed cell Horton_1995_table_3:row1:col2 = '28.9, 40.3'
- unparsed cell Horton_1995_table_3:row1:col4 = '0, 43'
- unparsed cell Horton_1995_table_3:row2:col2 = '18.8, 29.0'
- unparsed cell Horton_1995_table_3:row3:col2 = '47.3, 64.9'
- unparsed cell Horton_1995_table_3:row4:col2 = '16.3, 24.3'
- unparsed cell Horton_1995_table_3:row4:col4 = '0, 71'
- unparsed cell Horton_1995_table_3:row5:col2 = '1.8, 3.0'
- unparsed cell Horton_1995_table_3:row5:col4 = '31, 175'
- unparsed cell Horton_1995_table_3:row6:col2 = '0.09, 0.17'
- unparsed cell Horton_1995_table_3:row7:col2 = '0, 0.006'
- companion parameter table 3 transcribed (12 record(s))
- unparsed cell Horton_1995_table_4:row1:col2 = '1.41 (1.18, 1.64)'
- unparsed cell Horton_1995_table_4:row1:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row2:col2 = '0.17 (0.04, 0.3)'
- unparsed cell Horton_1995_table_4:row2:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row3:col2 = '1.23 (1.01, 1.45)'
- unparsed cell Horton_1995_table_4:row3:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row4:col2 = '1.12 (0.9, 1.34)'
- unparsed cell Horton_1995_table_4:row4:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row5:col2 = '0.05 (Ϫ0.03, 0.13)'
- unparsed cell Horton_1995_table_4:row5:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row6:col2 = '0.93 (0.74, 1.12)'
- unparsed cell Horton_1995_table_4:row6:col4 = 'Ͼ0.05'
- unparsed cell Horton_1995_table_4:row7:col2 = '0.94 (0.54, 1.35)'
- unparsed cell Horton_1995_table_4:row7:col4 = 'Ͼ0.2'
- unparsed cell Horton_1995_table_4:row8:col2 = '0.01 (Ϫ0.22, 0.25)'
- unparsed cell Horton_1995_table_4:row8:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row9:col2 = '0.99 (0.75, 1.23)'
- unparsed cell Horton_1995_table_4:row9:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row10:col2 = '0.99 (0.76, 1.22)'
- unparsed cell Horton_1995_table_4:row10:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row12:col2 = '0.689 (0.207, 1.17)'
- unparsed cell Horton_1995_table_4:row12:col4 = 'Ͻ0.05'
- unparsed cell Horton_1995_table_4:row13:col2 = 'Ϫ0.589 (Ϫ1.399, 0.221)'
- unparsed cell Horton_1995_table_4:row13:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row14:col2 = 'Ϫ0.076 (Ϫ0.706, 0.554)'
- unparsed cell Horton_1995_table_4:row14:col4 = 'Ͼ0.3'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ε1]` | 0.13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ε2]` | 0.003 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 1.1 | 0.479 | 0.4355 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Horton_1995_table_3:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_5:row0:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Horton_1995_table_3:row4:col1'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | liters/h | not captured | not captured | ['Horton_1995_table_3:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Horton_1995_table_3:row2:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Horton_1995_table_3:row3:col1'] |
| C5_unit_missing_Q68 | fail | [mass] / [time] | not captured | not captured | not captured | ['Horton_1995_table_3:row7:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 34.6 L/h | not captured | not captured | ['Horton_1995_table_3:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.9 L | not captured | not captured | ['Horton_1995_table_3:row2:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 56.1 L | not captured | not captured | ['Horton_1995_table_3:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_stavudine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Horton_1995` / `Horton_1995::population_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:16 UTC</sub>
