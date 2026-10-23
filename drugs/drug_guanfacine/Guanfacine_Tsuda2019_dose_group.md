<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/&quot;},{&quot;label&quot;:&quot;Tsuda_2019 \u00b7 dose_group&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# guanfacine — `Guanfacine_Tsuda2019_dose_group`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="guanfacine" model-id="Guanfacine_Tsuda2019_dose_group" status="rejected" stale="false" population="pediatric ADHD patients" measured-compound="guanfacine" parameterization="mechanistic" topology="2C"></div>

## Citation
Tsuda Y, Matsuo Y, Matsumoto S, Wajima T. Population pharmacokinetic and exposure-response analyses of guanfacine in Japanese pediatric ADHD patients. Drug metabolism and pharmacokinetics 34(6):365–371 (2019).
  ·  DOI: [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001)

## Population and dosing

**Population:** pediatric ADHD patients · condition ADHD · age group mixed.

**Dosing:** 2.8, 5.6, 8.4 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 63 | V1 | 128 | L |
| 64 | V2 | 129 | L |
| AUC ss (ng$hr/mL) | AUCSS | 65 | ng$hr/mL |
| C max,ss (ng/mL) | Cmax | 65 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (AUCSS and Cmax), so that value has no SI equivalent. Extracted — guanfacine: V1 128 L, V2 129 L, AUCSS 65 ng$hr/mL, Cmax 65 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 63 | `Q63` · V1 | 128 | L | 0.128 | m3 | L | llm (0.6) | tab_2:row60:col5 |
| 64 | `Q64` · V2 | 129 | L | 0.129 | m3 | L | llm (0.6) | tab_2:row61:col5 |
| AUC ss (ng$hr/mL) | `Q18` · AUCSS | 65 | ng$hr/mL |  |  | (h·ng$)/ml | space_fold (0.95) | Tsuda_2019_table_3:row1:col1, Tsuda_2019_table_3:row1:col6 |
| C max,ss (ng/mL) | `Q32` · Cmax | 65 | ng/mL |  |  | ng/ml | llm (0.6) | Tsuda_2019_table_3:row4:col1, Tsuda_2019_table_3:row4:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
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
- population split: 'dose group' subgroup of Tsuda_2019 (paper reports 3 populations: all, child (6e12 years), dose group)

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
| `gpt-oss-120b` | `parameters[10]` |  | 75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` |  | 66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[22]` |  | 87 | only_one_extracted |
| `gpt-oss-120b` | `parameters[26]` |  | 91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` |  | 67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[30]` |  | 95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[32]` |  | 97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[34]` |  | 99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[36]` |  | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[37]` |  | 102 | only_one_extracted |
| `gpt-oss-120b` | `parameters[38]` |  | 103 | only_one_extracted |
| `gpt-oss-120b` | `parameters[39]` |  | 104 | only_one_extracted |
| `gpt-oss-120b` | `parameters[41]` |  | 106 | only_one_extracted |
| `gpt-oss-120b` | `parameters[44]` |  | 109 | only_one_extracted |
| `gpt-oss-120b` | `parameters[45]` |  | 110 | only_one_extracted |
| `gpt-oss-120b` | `parameters[46]` |  | 111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[47]` |  | 112 | only_one_extracted |
| `gpt-oss-120b` | `parameters[48]` |  | 113 | only_one_extracted |
| `gpt-oss-120b` | `parameters[49]` |  | 114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[50]` |  | 115 | only_one_extracted |
| `gpt-oss-120b` | `parameters[51]` |  | 116 | only_one_extracted |
| `gpt-oss-120b` | `parameters[53]` |  | 118 | only_one_extracted |
| `gpt-oss-120b` | `parameters[54]` |  | 119 | only_one_extracted |
| `gpt-oss-120b` | `parameters[56]` |  | 121 | only_one_extracted |
| `gpt-oss-120b` | `parameters[59]` |  | 124 | only_one_extracted |
| `gpt-oss-120b` | `parameters[60]` |  | 125 | only_one_extracted |
| `gpt-oss-120b` | `parameters[65]` |  | 130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc ss]` | 65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max,ss]` | 65 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  | ['Tsuda_2019_table_3:row1:col1', 'Tsuda_2019_table_3:row1:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tsuda_2019_table_3:row4:col1', 'Tsuda_2019_table_3:row4:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row60:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row61:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 128 L | ['tab_2:row60:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 129 L | ['tab_2:row61:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bguanfacine%5D%20Guanfacine_Tsuda2019_dose_group&body=Drug%3A%20guanfacine%0ARecord%3A%20Guanfacine_Tsuda2019_dose_group%0APaper%3A%20Tsuda_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_guanfacine/Guanfacine_Tsuda2019_dose_group%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-09 06:32 UTC</sub>
