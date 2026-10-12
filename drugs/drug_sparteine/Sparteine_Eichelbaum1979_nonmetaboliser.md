<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;sparteine&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/&quot;},{&quot;label&quot;:&quot;Eichelbaum_1979 \u00b7 nonmetaboliser&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sparteine_ChoSchultz2009_reference&quot;,&quot;label&quot;:&quot;Cho-Schultz_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_ChoSchultz2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_Eichelbaum1997_reference&quot;,&quot;label&quot;:&quot;Eichelbaum_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Eichelbaum1997_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_Brsen2001_reference&quot;,&quot;label&quot;:&quot;Br\u00f8sen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Brsen2001_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sparteine_Gross1996_reference&quot;,&quot;label&quot;:&quot;Gross_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparteine/Sparteine_Gross1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sparteine — `Sparteine_Eichelbaum1979_nonmetaboliser`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The sparteine model was rejected because the peripheral compartment is unreachable from the dose, and the non-renal clearance value of 126.3 ml/min is disputed.**

The record defines a three-compartment structure but lacks a path from the dose to the peripheral compartment, rendering it an orphan. The non-renal clearance is recorded as 126.3 ml/min, while a second reader identified a conflicting value of 471. Additionally, the second reader disagreed on the transfer rate constant k21, citing 0.0046 instead of the recorded 0.0774. Extracted — sparteine: AUC 255, V2 436 L, k21 0.0774 1/min, k12 0.0401 1/min, KD 0.00929, V1 68.2 L, V 132 L, CLNR 126 ml/min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of /3: this record has none, the second reading 0.0046; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Eichelbaum M et al., Influence of the defective metabolism o…, European journal of clinica… (1979)
  ·  DOI: [10.1007/BF00562060](https://doi.org/10.1007/BF00562060)

<div class="pk-model-meta" hidden drug="sparteine" model-id="Sparteine_Eichelbaum1979_nonmetaboliser" status="rejected" stale="false" population="healthy adult male volunteers" measured-compound="sparteine" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 254.9 | not captured | not captured | not captured | not captured | exact (1.0) | tab_0:row6:col3, tab_0:row6:col4, tab_0:row6:col5, tab_0:row6:col6 | — | not captured |
| Vp | `Q64` · V2 | 435.5 | L | 0.4355 | L | not captured | exact (1.0) | tab_0:row7:col3, tab_0:row7:col4, tab_0:row7:col5, tab_0:row7:col6 | — | not captured |
| k21 | `Q302` · k21 | 0.0774 | 1/min | 0.00129 | 1/h | not captured | exact (1.0) | tab_0:row8:col3, tab_0:row8:col4, tab_0:row8:col5, tab_0:row8:col6, tab_0:row8:col7 | — | not captured |
| k12 | `Q301` · k12 | 0.0401 | 1/min | 0.0006683333333333333 | 1/h | not captured | exact (1.0) | tab_0:row9:col4, tab_0:row9:col5, tab_0:row9:col6, tab_0:row9:col7 | — | not captured |
| k d | `Q331` · KD | 0.00929 | not captured | not captured | not captured | not captured | space_fold (0.95) | tab_0:row10:col3, tab_0:row10:col4, tab_0:row10:col5, tab_0:row10:col6, tab_0:row10:col7 | — | not captured |
| V 1 | `Q63` · V1 | 68.2 | L | 0.06820000000000001 | L | not captured | space_fold (0.95) | tab_0:row12:col4, tab_0:row12:col5, tab_0:row12:col6, tab_0:row12:col7, tab_0:row12:col8 | — | not captured |
| Vd,~s | `Q61` · V | 132.2 | L | 0.13219999999999998 | L | not captured | llm_confirmed (0.6) | tab_0:row13:col4, tab_0:row13:col5, tab_0:row13:col6, tab_0:row13:col7, tab_0:row13:col8 | — | not captured |
| Clre n | `Q79` · CLNR | 126.3 | ml/min | 2.1049999999999998e-06 | L/h | not captured | llm (0.6) | tab_0:row15:col3, tab_0:row15:col4, tab_0:row15:col5, tab_0:row15:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5', 'tab_0:row4:col6', 'tab_0:row4:col7'])
- dropped unlinked row (NIL): '/3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col5', 'tab_0:row5:col6', 'tab_0:row5:col7'])
- dropped unlinked row (NIL): 'fc' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col4', 'tab_0:row11:col5', 'tab_0:row11:col6', 'tab_0:row11:col7', 'tab_0:row11:col8'])
- dropped duplicate Q61 ('Vd, #', value '136.3') — already have one for this compound
- dropped unlinked row (NIL): '60' — extend the ontology if this is a real PK parameter (source ['tab_0:row23:col3', 'tab_0:row23:col4'])
- dropped unlinked row (NIL): 'Plasma' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row0:col3'])
- dropped unlinked row (NIL): 'Urine' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row1:col3'])
- dropped unlinked row (NIL): '0-2' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row9:col3', 'Eichelbaum_1979_table_3:row9:col4'])
- dropped unlinked row (NIL): '2-4' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row10:col3', 'Eichelbaum_1979_table_3:row10:col4'])
- dropped unlinked row (NIL): '4-6' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row11:col3', 'Eichelbaum_1979_table_3:row11:col4'])
- dropped unlinked row (NIL): '6-9' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row12:col3', 'Eichelbaum_1979_table_3:row12:col4'])
- dropped unlinked row (NIL): '9-12' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row13:col3', 'Eichelbaum_1979_table_3:row13:col4'])
- dropped unlinked row (NIL): '12-24' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row14:col3', 'Eichelbaum_1979_table_3:row14:col4'])
- dropped unlinked row (NIL): '24-36' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row15:col3', 'Eichelbaum_1979_table_3:row15:col4'])
- dropped unlinked row (NIL): '36-48' — extend the ontology if this is a real PK parameter (source ['Eichelbaum_1979_table_3:row16:col3', 'Eichelbaum_1979_table_3:row16:col4'])
- implicit units: 'AUC' — the LLM proposed 'mg h/l', whose dimension does not fit Q88; left unset
- implicit units: 'Vp' → L (from the popPK convention: 'Vp (or V2) represents the volume of distribution of the peripheral compartment. Volumes of distribution are conventional')
- implicit units: 'k21' → 1/min (from the popPK convention: 'k21 is a first-order rate constant. The paper reports half-lives in minutes (e.g., 156 min, 409 min). Therefore, rate co')
- implicit units: 'k12' → 1/min (from the popPK convention: 'k12 is a first-order rate constant. Consistent with k21 and the time units (minutes) used in the paper for half-lives, t')
- implicit units: 'k d' — the LLM proposed '1/min', whose dimension does not fit Q331; left unset
- implicit units: 'V 1' → L (from the paper text: "The text explicitly states: 'the volume of distribution of the central compartment (V1) in nonmetabolisers was appreciab")
- implicit units: 'Vd,~s' → L (from the popPK convention: 'Vd,ss is the volume of distribution at steady state. Like other volumes of distribution (V1, Vp), it is conventionally e')
- implicit units: 'Clre n' → ml/min (from the paper text: "The abstract states: 'total plasma clearance were observed between metabolisers (156 rain; 535 mlmin -t) and nonmetaboli")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sparteine
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- population split: 'nonmetaboliser' subgroup of Eichelbaum_1979 (paper reports 4 populations: metaboliser, metabolisers, nonmetaboliser, nonmetabolisers)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row3:col1 = 'rain-1'
- unparsed cell tab_0:row5:col1 = 'rain -1'
- unparsed cell tab_0:row7:col1 = 'ml • min -1'
- unparsed cell tab_0:row8:col1 = 'rain-1'
- unparsed cell tab_0:row9:col1 = 'rain-1'
- unparsed cell tab_0:row9:col3 = '0,0727'
- unparsed cell tab_0:row10:col1 = 'rain-1'
- unparsed cell tab_0:row15:col1 = 'ml" min -1'
- unparsed cell tab_0:row23:col5 = '1440 rnin'
- unparsed cell tab_0:row23:col6 = 'administration of 200 mg sparteine sulfate'
- unparsed cell Eichelbaum_1979_table_3:row10:col1 = '32.2 __+ 1.5'
- unparsed cell Eichelbaum_1979_table_3:row11:col1 = '42.3 + 1.0'
- companion parameter table 3 transcribed (34 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (12/20 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[/3]` | not captured | 0.0046 | only_one_extracted |
| `gpt-oss:120b` | `parameters[0-2]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[24-36]` | not captured | 7.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[36-48]` | not captured | 7.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[6-9]` | not captured | 4.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[60]` | not captured | 540 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clre n].parameter_id` | Q79 | Q26 | mismatch |
| `gpt-oss:120b` | `parameters[urine]` | not captured | 471 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row9:col4', 'tab_0:row9:col5', 'tab_0:row9:col6', 'tab_0:row9:col7'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5', 'tab_0:row8:col6', 'tab_0:row8:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7', 'tab_0:row13:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7', 'tab_0:row12:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row10:col3', 'tab_0:row10:col4', 'tab_0:row10:col5', 'tab_0:row10:col6', 'tab_0:row10:col7'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5', 'tab_0:row6:col6'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 132 L | not captured | not captured | ['tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7', 'tab_0:row13:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 68.2 L | not captured | not captured | ['tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7', 'tab_0:row12:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 436 L | not captured | not captured | ['tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sparteine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eichelbaum_1979` / `Eichelbaum_1979::nonmetaboliser`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 21:54 UTC</sub>
