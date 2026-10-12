<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Deyme_2019 \u00b7 nikanjan_32&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Deyme2019_nikanjan_32`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fluorouracil/irinotecan record was rejected because a structural parameter failed a dimensional check and the metabolites SN38G and APC are formed from SN38 with no metabolism rate parameter, leaving them unlinked; one reported unit could not be converted to SI.**

The dimension mismatch concerns a structural parameter of the general linear structure, and the metabolism links for SN38G and APC (both formed from SN38) carry no link parameter, so these metabolites have no quantified formation path. One reported unit could not be expressed in SI units, so that parameter reached the model without a usable value. A second reader disagreed on the dose compound and primary analyte (fluorouracil vs unknown) and on the metabolism links, reading fluorouracil→5FUH2 and fluorouracil→5FDHU in addition to the irinotecan→SN38 chain, and read null for k10 (0.18 h⁻¹), Q1 (0.52 L/h), Q2 (3 L/h) and Vmax (1387 mg/h). Extracted — irinotecan: Vmax 1.39e+03 mg/h, Q 0.52 L/h, Q2 3 L/h, kel 0.18 h⁻¹; fluorouracil: V 161 L, kabs 0.757 h−1, tlag 0.000552 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has fluorouracil → fluorouracil metabolite 5fuh2 (metabolism); fluorouracil → fluorouracil metabolite 5fdhu (metabolism); irinotecan → sn38 (metabolism) …, the second reading fluorouracil → 5fuh2 (metabolism); fluorouracil → 5fdhu (metabolism); irinotecan → sn38 (metabolism) …; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:28:06.098935+00:00) predates the upstream re-run (2026-10-07 16:59:41.226696+00:00). Current validate status: `rejected`.

## Citation
Deyme L et al., Population pharmacokinetics of FOLFIRIN…, Cancer chemotherapy and pha… (2019)
  ·  DOI: [10.1007/s00280-018-3722-5](https://doi.org/10.1007/s00280-018-3722-5)

<div class="pk-model-meta" hidden drug="fluorouracil" model-id="Fluorouracil_Deyme2019_nikanjan_32" status="rejected" stale="true" population="adults with digestive cancers" measured-compound="fluorouracil" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 1387 | L | 1.387 | [l] | not captured | exact (1.0) | Deyme_2019_table_4:row6:col9 | — | not captured |
| k12 (h-1) | `Q301` · k12 | 7.33 | h-1 | 0.002036111111111111 | [1] / [h] | not captured | exact (1.0) | Deyme_2019_table_4:row9:col5, Deyme_2019_table_4:row9:col9 | — | not captured |
| k21 (h-1) | `Q302` · k21 | 0.0587 | h-1 | 1.6305555555555556e-05 | [1] / [h] | not captured | exact (1.0) | Deyme_2019_table_4:row10:col5, Deyme_2019_table_4:row10:col9 | — | not captured |
| Metabolized fraction | `Q45` · fm | 0.18 | mg/L | not captured | [mg] / [l] | not captured | llm (0.6) | Deyme_2019_table_4:row11:col9 | — | not captured |
| Ka, Absorption rate constant | `Q49` · kabs | 0.757 | h-1 | 0.0002102777777777778 | 1/h | not captured | review_gapfill (0.7) | Bae_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'nikanjan (2015) [32]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluorouracil
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- population split: 'nikanjan (2015) [32]' subgroup of Deyme_2019 (paper reports 15 populations: bastian (2003) [26], beaty (2010) [31], berg (2015) [37], bressolle (1999) [33], delord (2003) [25], fouadni (2006) [30], kho (2006) [24], kimura (2010) [29], klein (2005) [38], nikanjan (2015) [32], poujol (2007) [27], terret (2000) [23], thompson (2008) [28], van kuilenburg (2012) [36], woloch (2012) [35])
- row roles: 2 per-group rows of irinotecan clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 45 linked by role; re-tagged SN38→irinotecan ×10, parent→irinotecan ×1, parent→SN38 ×1
- molar mass: none of 1 PubChem candidate(s) is 'APC' (LLM) — left in mass units
- molar mass: none found for 'APC' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Bae_2026's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 4, 5, 6
- transposed table Deyme_2019_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Deyme_2019_table_4:row1:col4 = '16 (68%)'
- unparsed cell Deyme_2019_table_4:row1:col7 = '128 (56%)'
- unparsed cell Deyme_2019_table_4:row1:col9 = '11.76ᶜ'
- unparsed cell Deyme_2019_table_4:row1:col10 = '25.2 (39%)'
- unparsed cell Deyme_2019_table_4:row1:col11 = '12.2 (17%)'
- unparsed cell Deyme_2019_table_4:row1:col13 = '17ᵈ'
- unparsed cell Deyme_2019_table_4:row1:col14 = '14.1 (62%)'
- unparsed cell Deyme_2019_table_4:row3:col3 = '51 (43%)'
- unparsed cell Deyme_2019_table_4:row3:col9 = '367.0ᶜ'
- unparsed cell Deyme_2019_table_4:row3:col10 = '452.5 (34%)'
- unparsed cell Deyme_2019_table_4:row3:col13 = '188ᵈ'
- unparsed cell Deyme_2019_table_4:row3:col14 = '136 (66%)'
- unparsed cell Deyme_2019_table_4:row6:col1 = '12.7 (31%)'
- unparsed cell Deyme_2019_table_4:row6:col2 = '54.9 (19%)'
- unparsed cell Deyme_2019_table_4:row6:col3 = '120 (29%)'
- unparsed cell Deyme_2019_table_4:row6:col4 = '22ᵃ'
- unparsed cell Deyme_2019_table_4:row6:col5 = '14.7 (82%)'
- unparsed cell Deyme_2019_table_4:row6:col6 = '15.3 (42%)'
- unparsed cell Deyme_2019_table_4:row6:col7 = '21.9 (36%)'
- unparsed cell Deyme_2019_table_4:row7:col3 = '22 (50%)'
- unparsed cell Deyme_2019_table_4:row7:col5 = '334 (138%)'
- unparsed cell Deyme_2019_table_4:row7:col6 = '15.8 (18%)'
- unparsed cell Deyme_2019_table_4:row7:col7 = '17.7 (26%)'
- unparsed cell Deyme_2019_table_4:row7:col9 = '67.48ᶜ'
- unparsed cell Deyme_2019_table_4:row7:col10 = '68 (36%)'
- unparsed cell Deyme_2019_table_4:row7:col13 = '33.2ᵈ'
- unparsed cell Deyme_2019_table_4:row7:col14 = '34.8 (56%)'
- unparsed cell Deyme_2019_table_4:row8:col3 = '6 (82%)'
- unparsed cell Deyme_2019_table_4:row8:col5 = '19.6 (118%)'
- unparsed cell Deyme_2019_table_4:row8:col6 = '68.8 (26%)'
- unparsed cell Deyme_2019_table_4:row8:col7 = '58.3 (26%)'
- unparsed cell Deyme_2019_table_4:row8:col9 = '4.68ᶜ'
- unparsed cell Deyme_2019_table_4:row11:col1 = '0.85ᵃ'
- transposed table Deyme_2019_table_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Deyme_2019_table_5:row0:col1 = '43.8 (32%)'
- unparsed cell Deyme_2019_table_5:row0:col4 = '34.2 (34%)'
- unparsed cell Deyme_2019_table_5:row0:col5 = '31.7 (22%)'
- unparsed cell Deyme_2019_table_5:row2:col1 = '147 (39%)'
- unparsed cell Deyme_2019_table_5:row4:col5 = '186.2 (21%)'
- unparsed cell Deyme_2019_table_5:row5:col1 = '27.6 (67%)'
- unparsed cell Deyme_2019_table_5:row5:col5 = '6.2ᵉ'
- unparsed cell Deyme_2019_table_5:row7:col2 = '2.58ᵃ'
- unparsed cell Deyme_2019_table_5:row7:col3 = '4.56 (31%)'
- unparsed cell Deyme_2019_table_5:row8:col2 = '0.698 (39%)'
- unparsed cell Deyme_2019_table_5:row9:col2 = '0.0842 (14%)'
- unparsed cell Deyme_2019_table_5:row10:col2 = '15.7 (35%)'
- unparsed cell Deyme_2019_table_6:row0:col1 = '17.60 (47%)'
- unparsed cell Deyme_2019_table_6:row0:col3 = '26.300 (79%)'
- unparsed cell Deyme_2019_table_6:row0:col4 = '2650 (68%)'
- unparsed cell Deyme_2019_table_6:row1:col2 = '349 (37%)'
- unparsed cell Deyme_2019_table_6:row1:col5 = '2.52 (28%)'
- unparsed cell Deyme_2019_table_6:row1:col7 = '2.58 (13%)'
- unparsed cell Deyme_2019_table_6:row1:col8 = '0.0426 (61%)'
- unparsed cell Deyme_2019_table_6:row2:col2 = '311.7 (25%)'
- unparsed cell Deyme_2019_table_6:row2:col5 = '2.52 (33%)'
- unparsed cell Deyme_2019_table_6:row2:col6 = '2.6 (52%)'
- unparsed cell Deyme_2019_table_6:row3:col1 = '302.7f (46%)'
- unparsed cell Deyme_2019_table_6:row3:col2 = '132.7f (47%)'
- unparsed cell Deyme_2019_table_6:row3:col3 = '4913f'
- unparsed cell Deyme_2019_table_6:row3:col4 = '285f'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |
| `gpt-oss:120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['fluorouracil', 'fluorouracil metabolite 5fuh2', 'metabolism'], ['fluorouracil', 'fluorouracil metabolite 5fdhu', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['irinotecan', 'apc', 'metabolism']] | [['fluorouracil', '5fuh2', 'metabolism'], ['fluorouracil', '5fdhu', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['irinotecan', 'apc', 'metabolism'], ['oxaliplatin', 'ultrafiltrated platinum', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[k12]` | 7.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.0587 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka, absorption rate constant]` | 0.757 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[metabolized fraction]` | 0.18 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 1387 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['sn38', 'apc', 'metabolism']] | [['fluorouracil', '5fuh2', 'metabolism'], ['fluorouracil', '5fdhu', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38g', 'metabolism'], ['irinotecan', 'apc', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[k10]` | 0.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q1]` | 0.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q2]` | 3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vmax]` | 1387 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | fluorouracil | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | fluorouracil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Deyme_2019_table_4:row9:col5', 'Deyme_2019_table_4:row9:col9'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Deyme_2019_table_4:row10:col5', 'Deyme_2019_table_4:row10:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Deyme_2019_table_4:row6:col9'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.39e+03 L | not captured | not captured | ['Deyme_2019_table_4:row6:col9'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Deyme_2019` / `Deyme_2019::nikanjan_32`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:59 UTC</sub>
