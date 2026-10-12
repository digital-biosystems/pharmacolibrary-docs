<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/&quot;},{&quot;label&quot;:&quot;Tsuda_2019 \u00b7 all&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# guanfacine — `Guanfacine_Tsuda2019_all`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Guanfacine's central volume of distribution is set to 128 L, creating a pharmacokinetically impossible structure with no dose path.**

The central compartment volume is extracted as 128 L, a value inconsistent with typical guanfacine pharmacokinetics. A validation check identified an unreachable compartment, confirming the model structure is broken. The second reader disagreed on the parameterization and noted that several extracted parameters are missing, including values for 66, 75, 67, 87, 91, 95, and 97. Extracted — guanfacine: V1 128 L, V2 129 L, AUCSS 11 ng$hr/mL, Cmax 11 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019)
  ·  DOI: [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001)

<div class="pk-model-meta" hidden drug="guanfacine" model-id="Guanfacine_Tsuda2019_all" status="rejected" stale="false" population="pediatric ADHD patients" measured-compound="guanfacine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 63 | `Q63` · V1 | 128 | L | 0.128 | L | not captured | llm (0.6) | tab_2:row60:col5 | — | not captured |
| 64 | `Q64` · V2 | 129 | L | 0.129 | L | not captured | llm (0.6) | tab_2:row61:col5 | — | not captured |
| AUC ss (ng$hr/mL) | `Q18` · AUCSS | 11 | ng$hr/mL | not captured | [[h] · [ng$]] / [ml] | not captured | space_fold (0.95) | Tsuda_2019_table_3:row1:col4, Tsuda_2019_table_3:row1:col6 | — | not captured |
| C max,ss (ng/mL) | `Q32` · Cmax | 11 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Tsuda_2019_table_3:row4:col4, Tsuda_2019_table_3:row4:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'all' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col6'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col6'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col6'])
- dropped unlinked row (NIL): '4 5' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col1', 'tab_2:row4:col3'])
- dropped unlinked row (NIL): '6 7 8' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col3'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col6'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col5'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col5'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col5'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col5'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col5'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col5'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col5'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col5'])
- dropped unlinked row (NIL): '18' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col5'])
- dropped unlinked row (NIL): '19' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col5'])
- dropped unlinked row (NIL): '20' — extend the ontology if this is a real PK parameter (source ['tab_2:row17:col5'])
- dropped unlinked row (NIL): '21' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col5'])
- dropped unlinked row (NIL): '22' — extend the ontology if this is a real PK parameter (source ['tab_2:row19:col5'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['tab_2:row20:col5'])
- dropped unlinked row (NIL): '24' — extend the ontology if this is a real PK parameter (source ['tab_2:row21:col5'])
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['tab_2:row22:col5'])
- dropped unlinked row (NIL): '26' — extend the ontology if this is a real PK parameter (source ['tab_2:row23:col5'])
- dropped unlinked row (NIL): '27' — extend the ontology if this is a real PK parameter (source ['tab_2:row24:col5'])
- dropped unlinked row (NIL): '28' — extend the ontology if this is a real PK parameter (source ['tab_2:row25:col5'])
- dropped unlinked row (NIL): '29' — extend the ontology if this is a real PK parameter (source ['tab_2:row26:col5'])
- dropped unlinked row (NIL): '30' — extend the ontology if this is a real PK parameter (source ['tab_2:row27:col5'])
- dropped unlinked row (NIL): '31' — extend the ontology if this is a real PK parameter (source ['tab_2:row28:col5'])
- dropped unlinked row (NIL): '32' — extend the ontology if this is a real PK parameter (source ['tab_2:row29:col5'])
- dropped unlinked row (NIL): '33' — extend the ontology if this is a real PK parameter (source ['tab_2:row30:col5'])
- dropped unlinked row (NIL): '34' — extend the ontology if this is a real PK parameter (source ['tab_2:row31:col5'])
- dropped unlinked row (NIL): '35' — extend the ontology if this is a real PK parameter (source ['tab_2:row32:col5'])
- dropped unlinked row (NIL): '36' — extend the ontology if this is a real PK parameter (source ['tab_2:row33:col5'])
- dropped unlinked row (NIL): '37' — extend the ontology if this is a real PK parameter (source ['tab_2:row34:col5'])
- dropped unlinked row (NIL): '38' — extend the ontology if this is a real PK parameter (source ['tab_2:row35:col5'])
- dropped unlinked row (NIL): '39' — extend the ontology if this is a real PK parameter (source ['tab_2:row36:col5'])
- dropped unlinked row (NIL): '40' — extend the ontology if this is a real PK parameter (source ['tab_2:row37:col5'])
- dropped unlinked row (NIL): '41' — extend the ontology if this is a real PK parameter (source ['tab_2:row38:col5'])
- dropped unlinked row (NIL): '42' — extend the ontology if this is a real PK parameter (source ['tab_2:row39:col5'])
- dropped unlinked row (NIL): '43' — extend the ontology if this is a real PK parameter (source ['tab_2:row40:col5'])
- dropped unlinked row (NIL): '44' — extend the ontology if this is a real PK parameter (source ['tab_2:row41:col5'])
- dropped unlinked row (NIL): '45' — extend the ontology if this is a real PK parameter (source ['tab_2:row42:col5'])
- dropped unlinked row (NIL): '46' — extend the ontology if this is a real PK parameter (source ['tab_2:row43:col5'])
- dropped unlinked row (NIL): '47' — extend the ontology if this is a real PK parameter (source ['tab_2:row44:col5'])
- dropped unlinked row (NIL): '48' — extend the ontology if this is a real PK parameter (source ['tab_2:row45:col5'])
- dropped unlinked row (NIL): '49' — extend the ontology if this is a real PK parameter (source ['tab_2:row46:col5'])
- dropped unlinked row (NIL): '50' — extend the ontology if this is a real PK parameter (source ['tab_2:row47:col5'])
- dropped unlinked row (NIL): '51' — extend the ontology if this is a real PK parameter (source ['tab_2:row48:col5'])
- dropped unlinked row (NIL): '52' — extend the ontology if this is a real PK parameter (source ['tab_2:row49:col5'])
- dropped unlinked row (NIL): '53' — extend the ontology if this is a real PK parameter (source ['tab_2:row50:col5'])
- dropped unlinked row (NIL): '54' — extend the ontology if this is a real PK parameter (source ['tab_2:row51:col5'])
- dropped unlinked row (NIL): '55' — extend the ontology if this is a real PK parameter (source ['tab_2:row52:col5'])
- dropped unlinked row (NIL): '56' — extend the ontology if this is a real PK parameter (source ['tab_2:row53:col5'])
- dropped unlinked row (NIL): '57' — extend the ontology if this is a real PK parameter (source ['tab_2:row54:col5'])
- dropped unlinked row (NIL): '58' — extend the ontology if this is a real PK parameter (source ['tab_2:row55:col5'])
- dropped unlinked row (NIL): '59' — extend the ontology if this is a real PK parameter (source ['tab_2:row56:col5'])
- dropped unlinked row (NIL): '60' — extend the ontology if this is a real PK parameter (source ['tab_2:row57:col5'])
- dropped unlinked row (NIL): '61' — extend the ontology if this is a real PK parameter (source ['tab_2:row58:col5'])
- dropped unlinked row (NIL): '62' — extend the ontology if this is a real PK parameter (source ['tab_2:row59:col5'])
- dropped unlinked row (NIL): '65' — extend the ontology if this is a real PK parameter (source ['tab_2:row62:col5'])
- implicit units: '63' → L (from the popPK convention: 'V1 is the volume of distribution of the central compartment. In population pharmacokinetic modeling, volumes of distribu')
- implicit units: '64' → L (from the popPK convention: 'V2 is the volume of distribution of the peripheral compartment. In population pharmacokinetic modeling, volumes of distr')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=guanfacine
- population split: 'all' subgroup of Tsuda_2019 (paper reports 3 populations: all, child (6e12 years), dose group)

**Extraction notes:**
- unparsed cell tab_2:row3:col4 = '95% CI of parameter estimate'
- unparsed cell tab_2:row3:col5 = 'Bootstrap median (95% CI)'
- unparsed cell tab_2:row4:col4 = '23.7e25.3'
- unparsed cell tab_2:row4:col5 = '24.5 (23.7e25.3)'
- unparsed cell tab_2:row4:col6 = '69 70'
- unparsed cell tab_2:row5:col4 = '0.644e0.834 547e671'
- unparsed cell tab_2:row5:col5 = '0.741 (0.645e0.836) 608 (550e671)'
- unparsed cell tab_2:row5:col6 = '71 72 73'
- unparsed cell Tsuda_2019_table_3:row1:col3 = '45.59 (26.86e76.07)'
- unparsed cell Tsuda_2019_table_3:row1:col5 = '54.32 (29.73e88.48)'
- unparsed cell Tsuda_2019_table_3:row1:col7 = '46.05 (26.86e88.48)'
- unparsed cell Tsuda_2019_table_3:row4:col3 = '2.47 (1.51e3.92)'
- unparsed cell Tsuda_2019_table_3:row4:col5 = '2.92 (2.06e4.23)'
- unparsed cell Tsuda_2019_table_3:row4:col7 = '2.59 (1.51e4.23)'
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (5/35 fields) | 30 |

<details><summary>30 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[10]` | not captured | 75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | not captured | 66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[22]` | not captured | 87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[26]` | not captured | 91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | not captured | 67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[30]` | not captured | 95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[32]` | not captured | 97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[34]` | not captured | 99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[36]` | not captured | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[37]` | not captured | 102 | only_one_extracted |
| `gpt-oss-120b` | `parameters[38]` | not captured | 103 | only_one_extracted |
| `gpt-oss-120b` | `parameters[39]` | not captured | 104 | only_one_extracted |
| `gpt-oss-120b` | `parameters[41]` | not captured | 106 | only_one_extracted |
| `gpt-oss-120b` | `parameters[44]` | not captured | 109 | only_one_extracted |
| `gpt-oss-120b` | `parameters[45]` | not captured | 110 | only_one_extracted |
| `gpt-oss-120b` | `parameters[46]` | not captured | 111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[47]` | not captured | 112 | only_one_extracted |
| `gpt-oss-120b` | `parameters[48]` | not captured | 113 | only_one_extracted |
| `gpt-oss-120b` | `parameters[49]` | not captured | 114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[50]` | not captured | 115 | only_one_extracted |
| `gpt-oss-120b` | `parameters[51]` | not captured | 116 | only_one_extracted |
| `gpt-oss-120b` | `parameters[53]` | not captured | 118 | only_one_extracted |
| `gpt-oss-120b` | `parameters[54]` | not captured | 119 | only_one_extracted |
| `gpt-oss-120b` | `parameters[56]` | not captured | 121 | only_one_extracted |
| `gpt-oss-120b` | `parameters[59]` | not captured | 124 | only_one_extracted |
| `gpt-oss-120b` | `parameters[60]` | not captured | 125 | only_one_extracted |
| `gpt-oss-120b` | `parameters[65]` | not captured | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc ss]` | 11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max,ss]` | 11 | not captured | only_one_extracted |

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
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tsuda_2019_table_3:row1:col4', 'Tsuda_2019_table_3:row1:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tsuda_2019_table_3:row4:col4', 'Tsuda_2019_table_3:row4:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row60:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row61:col5'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 128 L | not captured | not captured | ['tab_2:row60:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 129 L | not captured | not captured | ['tab_2:row61:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_guanfacine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tsuda_2019` / `Tsuda_2019::all`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 06:32 UTC</sub>
