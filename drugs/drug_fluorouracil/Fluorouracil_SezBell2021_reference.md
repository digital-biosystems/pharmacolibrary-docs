<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;S\u00e1ez-Bell\u00f3_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_SezBell2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Q has no unit; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_SezBell2021_reference" status="needs_review" stale="false" population="adults with colorectal cancer" measured-compound="capecitabine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Sáez-Belló M, Mangas-Sanjuán V, Martínez-Gómez MA, López-Montenegro Soria MÁ, Climente-Martí M, Merino-Sanjuán M. Evaluation of ABC gene polymorphisms on the pharmacokinetics and pharmacodynamics of capecitabine in colorectal patients: Implications for dosing recommendations. British journal of clinical pharmacology 87(3):905–915 (2021).
  ·  DOI: [10.1111/bcp.14441](https://doi.org/10.1111/bcp.14441)

## Population and dosing

**Population:** adults with colorectal cancer · condition colorectal cancer · age group adult · n = 48.

**Dosing:** 1250, 2500 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t lag (h) | tlag | 0.28 | h |
| ka (h-1) | kabs | 2.07 | h-1 |
| CL0 CAP (L/h) | CL | 284 | L/h |
| V2 CAP (L) | V2 | 433 | L |
| V3 5'-DFUR(L) | V3 | 1 | L |
| CL2 (%) | Q | 64 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Q has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — fluorouracil: tlag 0.28 h, kabs 2.07 h-1, CL 284 L/h, V2 433 L, V3 1 L, Q 64.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has capecitabine, the second reading 5-FU; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t lag (h) | `Q83` · tlag | 0.28 | h | 1008 | s | h | space_fold (0.95) | Sáez-Belló_2021_table_p5_1:row0:col1, Sáez-Belló_2021_table_p5_1:row0:col4 |
| ka (h-1) | `Q49` · kabs | 2.07 | h-1 | 0.000575 | 1/s | 1/h | exact (1) | Sáez-Belló_2021_table_p5_1:row2:col1, Sáez-Belló_2021_table_p5_1:row2:col4 |
| CL0 CAP (L/h) | `Q22` · CL | 284 | L/h | 7.889e-05 | m3/s | l/h | llm (0.6) | Sáez-Belló_2021_table_p5_1:row3:col1, Sáez-Belló_2021_table_p5_1:row3:col2, Sáez-Belló_2021_table_p5_1:row3:col4, Sáez-Belló_2021_table_p5_1:row3:col5, Sáez-Belló_2021_table_p5_1:row3:col6 |
| V2 CAP (L) | `Q64` · V2 | 433 | L | 0.433 | m3 | l | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row9:col1, Sáez-Belló_2021_table_p5_1:row9:col2, Sáez-Belló_2021_table_p5_1:row9:col4, Sáez-Belló_2021_table_p5_1:row9:col5, Sáez-Belló_2021_table_p5_1:row9:col6 |
| V3 5'-DFUR(L) | `Q77` · V3 | 1 | L | 0.001 | m3 | l | llm_confirmed (0.6) | Sáez-Belló_2021_table_p5_1:row10:col1, Sáez-Belló_2021_table_p5_1:row10:col4 |
| CL2 (%) | `Q30` · Q | 64 |  |  |  |  | special_case (0.95) | Sáez-Belló_2021_table_p5_1:row16:col1, Sáez-Belló_2021_table_p5_1:row16:col2, Sáez-Belló_2021_table_p5_1:row16:col3, Sáez-Belló_2021_table_p5_1:row16:col4, Sáez-Belló_2021_table_p5_1:row16:col5, Sáez-Belló_2021_table_p5_1:row16:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q83 ('beta_t lag_oxalipatin', value '0.80') — already have one for this compound
- dropped duplicate Q22 ('CL2 CAP (L/h)', value '25.6') — already have one for this compound
- dropped duplicate Q22 ("CL3 5'-DFUR (L/h)", value '8.6') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL3_rs6720173' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row6:col1', 'Sáez-Belló_2021_table_p5_1:row6:col2', 'Sáez-Belló_2021_table_p5_1:row6:col4', 'Sáez-Belló_2021_table_p5_1:row6:col5', 'Sáez-Belló_2021_table_p5_1:row6:col6'])
- dropped duplicate Q22 ('CL4 5-FU (L/h)', value '12.0') — already have one for this compound
- dropped unlinked row (NIL): 'beta_CL4_rs2271862' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row8:col1', 'Sáez-Belló_2021_table_p5_1:row8:col2', 'Sáez-Belló_2021_table_p5_1:row8:col4', 'Sáez-Belló_2021_table_p5_1:row8:col5', 'Sáez-Belló_2021_table_p5_1:row8:col6'])
- dropped duplicate Q77 ('V4 5-FU(L)', value '1') — already have one for this compound
- dropped duplicate Q83 ('t lag (%)', value '18') — already have one for this compound
- dropped duplicate Q49 ('ka (%)', value '105') — already have one for this compound
- dropped unlinked row (NIL): 'CL0 (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row15:col1', 'Sáez-Belló_2021_table_p5_1:row15:col2', 'Sáez-Belló_2021_table_p5_1:row15:col3', 'Sáez-Belló_2021_table_p5_1:row15:col4', 'Sáez-Belló_2021_table_p5_1:row15:col5', 'Sáez-Belló_2021_table_p5_1:row15:col6'])
- dropped unlinked row (NIL): 'CL3 (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row17:col1', 'Sáez-Belló_2021_table_p5_1:row17:col2', 'Sáez-Belló_2021_table_p5_1:row17:col3', 'Sáez-Belló_2021_table_p5_1:row17:col4', 'Sáez-Belló_2021_table_p5_1:row17:col5', 'Sáez-Belló_2021_table_p5_1:row17:col6'])
- dropped unlinked row (NIL): 'CL4 (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row18:col1', 'Sáez-Belló_2021_table_p5_1:row18:col2', 'Sáez-Belló_2021_table_p5_1:row18:col3', 'Sáez-Belló_2021_table_p5_1:row18:col4', 'Sáez-Belló_2021_table_p5_1:row18:col5', 'Sáez-Belló_2021_table_p5_1:row18:col6'])
- dropped duplicate Q64 ('V2 (%)', value '52') — already have one for this compound
- dropped duplicate Q22 ('CorroCL2 – CL0 (%)', value '87') — already have one for this compound
- dropped unlinked row (NIL): 'Corroka – CL0 (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row21:col1', 'Sáez-Belló_2021_table_p5_1:row21:col2', 'Sáez-Belló_2021_table_p5_1:row21:col3', 'Sáez-Belló_2021_table_p5_1:row21:col4', 'Sáez-Belló_2021_table_p5_1:row21:col5'])
- dropped unlinked row (NIL): 'Corroka – CL2 (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row22:col1', 'Sáez-Belló_2021_table_p5_1:row22:col2', 'Sáez-Belló_2021_table_p5_1:row22:col3', 'Sáez-Belló_2021_table_p5_1:row22:col4', 'Sáez-Belló_2021_table_p5_1:row22:col5'])
- dropped unlinked row (NIL): 'CAP (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row24:col1', 'Sáez-Belló_2021_table_p5_1:row24:col2', 'Sáez-Belló_2021_table_p5_1:row24:col3', 'Sáez-Belló_2021_table_p5_1:row24:col4', 'Sáez-Belló_2021_table_p5_1:row24:col5', 'Sáez-Belló_2021_table_p5_1:row24:col6'])
- dropped unlinked row (NIL): "5'-DFUR (%)" — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row25:col1', 'Sáez-Belló_2021_table_p5_1:row25:col2', 'Sáez-Belló_2021_table_p5_1:row25:col3', 'Sáez-Belló_2021_table_p5_1:row25:col4', 'Sáez-Belló_2021_table_p5_1:row25:col5', 'Sáez-Belló_2021_table_p5_1:row25:col6'])
- dropped unlinked row (NIL): '5-FU (%)' — extend the ontology if this is a real PK parameter (source ['Sáez-Belló_2021_table_p5_1:row26:col1', 'Sáez-Belló_2021_table_p5_1:row26:col2', 'Sáez-Belló_2021_table_p5_1:row26:col3', 'Sáez-Belló_2021_table_p5_1:row26:col4', 'Sáez-Belló_2021_table_p5_1:row26:col5', 'Sáez-Belló_2021_table_p5_1:row26:col6'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL0 CAP (L/h)); Q64 (V2 CAP (L)); Q30 (CL2 (%))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=capecitabine
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- review gap-fill skipped: this record measures 'capecitabine', not fluorouracil — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Sáez-Belló_2021_table_p5_1:row21:col6 = '−88 to −71'
- unparsed cell Sáez-Belló_2021_table_p5_1:row22:col6 = '−101 to −87'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism'], ["5'-deoxy-5-fluorouridine", '5-fluorouracil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[5'-dfur]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta_cl4_rs2271862]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl0 cap].value` | 284 | 12 | mismatch |
| `gpt-oss-120b` | `parameters[cl2]` | 64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2 cap].value` | 433 | 13 | mismatch |
| `gpt-oss-120b` | `parameters[v4 5-fu]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | capecitabine | 5-FU | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row3:col1', 'Sáez-Belló_2021_table_p5_1:row3:col2', 'Sáez-Belló_2021_table_p5_1:row3:col4', 'Sáez-Belló_2021_table_p5_1:row3:col5', 'Sáez-Belló_2021_table_p5_1:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row2:col1', 'Sáez-Belló_2021_table_p5_1:row2:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Sáez-Belló_2021_table_p5_1:row9:col1', 'Sáez-Belló_2021_table_p5_1:row9:col2', 'Sáez-Belló_2021_table_p5_1:row9:col4', 'Sáez-Belló_2021_table_p5_1:row9:col5', 'Sáez-Belló_2021_table_p5_1:row9:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Sáez-Belló_2021_table_p5_1:row10:col1', 'Sáez-Belló_2021_table_p5_1:row10:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Sáez-Belló_2021_table_p5_1:row0:col1', 'Sáez-Belló_2021_table_p5_1:row0:col4'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Sáez-Belló_2021_table_p5_1:row16:col1', 'Sáez-Belló_2021_table_p5_1:row16:col2', 'Sáez-Belló_2021_table_p5_1:row16:col3', 'Sáez-Belló_2021_table_p5_1:row16:col4', 'Sáez-Belló_2021_table_p5_1:row16:col5', 'Sáez-Belló_2021_table_p5_1:row16:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 284 | ['Sáez-Belló_2021_table_p5_1:row3:col1', 'Sáez-Belló_2021_table_p5_1:row3:col2', 'Sáez-Belló_2021_table_p5_1:row3:col4', 'Sáez-Belló_2021_table_p5_1:row3:col5', 'Sáez-Belló_2021_table_p5_1:row3:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 284 L/h | ['Sáez-Belló_2021_table_p5_1:row3:col1', 'Sáez-Belló_2021_table_p5_1:row3:col2', 'Sáez-Belló_2021_table_p5_1:row3:col4', 'Sáez-Belló_2021_table_p5_1:row3:col5', 'Sáez-Belló_2021_table_p5_1:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 433 L | ['Sáez-Belló_2021_table_p5_1:row9:col1', 'Sáez-Belló_2021_table_p5_1:row9:col2', 'Sáez-Belló_2021_table_p5_1:row9:col4', 'Sáez-Belló_2021_table_p5_1:row9:col5', 'Sáez-Belló_2021_table_p5_1:row9:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_SezBell2021_reference&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_SezBell2021_reference%0APaper%3A%20S%C3%A1ez-Bell%C3%B3_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluorouracil/Fluorouracil_SezBell2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-15 08:57 UTC</sub>
