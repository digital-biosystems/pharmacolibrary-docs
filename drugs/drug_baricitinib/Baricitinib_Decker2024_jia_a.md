<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2024 \u00b7 jia_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2024_jia_a`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.812). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Baricitinib clearance and volume parameters had units recorded as 'years' instead of flow or volume, and a model compartment lacked a dosing path.**

Total clearance and volume of distribution both list 'years' as their unit, which is dimensionally incompatible with their definitions. Additionally, the model structure contains a compartment that is unreachable from the dose, rendering its parameters unidentifiable. Extracted — baricitinib: CL/F 4.87 years, CLR 3.12 L/h, CLNR 1.68 L/h, V/F 27.5 years, V1/F 21.7 L, V2/F 4.85 L, t1/2z 6.39 h, AUCSS 410 ng*h/mL, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose: this record has none, the second reading 2; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131)

<div class="pk-model-meta" hidden drug="baricitinib" model-id="Baricitinib_Decker2024_jia_a" status="rejected" stale="false" population="pediatric patients with juvenile idiopathic arthritis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) c | `Q27` · CL/F | 4.87 | years | not captured | [years] | not captured | llm_confirmed (0.6) | Decker_2024_table_3:row4:col1, Decker_2024_table_3:row4:col2, Decker_2024_table_3:row4:col3, Decker_2024_table_3:row4:col4, Decker_2024_table_3:row4:col5, Decker_2024_table_3:row4:col6 | — | not captured |
| CLr (L/h) | `Q26` · CLR | 3.12 | L/h | 8.666666666666668e-07 | [l] / [h] | not captured | exact (1.0) | Decker_2024_table_3:row5:col1, Decker_2024_table_3:row5:col2, Decker_2024_table_3:row5:col3, Decker_2024_table_3:row5:col4, Decker_2024_table_3:row5:col5, Decker_2024_table_3:row5:col6 | — | not captured |
| CLnr (L/h) | `Q79` · CLNR | 1.68 | L/h | 4.6666666666666666e-07 | [l] / [h] | not captured | exact (1.0) | Decker_2024_table_3:row6:col1, Decker_2024_table_3:row6:col2, Decker_2024_table_3:row6:col3, Decker_2024_table_3:row6:col4, Decker_2024_table_3:row6:col5, Decker_2024_table_3:row6:col6 | — | not captured |
| V/F (L) c | `Q76` · V/F | 27.5 | years | not captured | [years] | not captured | llm_confirmed (0.6) | Decker_2024_table_3:row7:col1, Decker_2024_table_3:row7:col2, Decker_2024_table_3:row7:col3, Decker_2024_table_3:row7:col4, Decker_2024_table_3:row7:col5, Decker_2024_table_3:row7:col6 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 21.7 | L | 0.0217 | [l] | not captured | exact (1.0) | Decker_2024_table_3:row8:col1, Decker_2024_table_3:row8:col2, Decker_2024_table_3:row8:col3, Decker_2024_table_3:row8:col4, Decker_2024_table_3:row8:col5, Decker_2024_table_3:row8:col6 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 4.85 | L | 0.00485 | [l] | not captured | exact (1.0) | Decker_2024_table_3:row9:col1, Decker_2024_table_3:row9:col2, Decker_2024_table_3:row9:col3, Decker_2024_table_3:row9:col4, Decker_2024_table_3:row9:col5, Decker_2024_table_3:row9:col6 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 6.39 | h | 23004.0 | [h] | not captured | exact (1.0) | Decker_2024_table_3:row10:col1, Decker_2024_table_3:row10:col2, Decker_2024_table_3:row10:col3, Decker_2024_table_3:row10:col4, Decker_2024_table_3:row10:col5, Decker_2024_table_3:row10:col6 | — | not captured |
| AUCτ,ss (ng*h/mL) | `Q18` · AUCSS | 410 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_corrected (0.6) | Decker_2024_table_3:row11:col1, Decker_2024_table_3:row11:col4, Decker_2024_table_3:row11:col5, Decker_2024_table_3:row11:col6 | — | not captured |
| C max,ss (ng/mL) | `Q32` · Cmax | 87.4 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Decker_2024_table_3:row12:col1, Decker_2024_table_3:row12:col4, Decker_2024_table_3:row12:col5, Decker_2024_table_3:row12:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |
| Q | Q30 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row2:col1', 'Decker_2024_table_3:row2:col2', 'Decker_2024_table_3:row2:col3', 'Decker_2024_table_3:row2:col4', 'Decker_2024_table_3:row2:col5', 'Decker_2024_table_3:row2:col6'])
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['Decker_2024_table_3:row3:col1', 'Decker_2024_table_3:row3:col2', 'Decker_2024_table_3:row3:col3', 'Decker_2024_table_3:row3:col4', 'Decker_2024_table_3:row3:col5', 'Decker_2024_table_3:row3:col6'])
- unit_dimension_mismatch: 'CL/F (L/h) c' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V/F (L) c' → Q76 (unit '[time]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- bound model equation to Q30 (Q): Q = 2.67*((WTE/74)^0.75)
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'jia a' subgroup of Decker_2024 (paper reports 3 populations: jia a, population mean (%see), ra b)

**Extraction notes:**
- unparsed cell psp413131-tbl-0002:row1:col3 = '0.452 (0.373–0.512)'
- unparsed cell psp413131-tbl-0002:row2:col3 = '0.538 (0.323–0.847)'
- unparsed cell psp413131-tbl-0002:row3:col3 = '3.32 (3.20–3.46)'
- unparsed cell psp413131-tbl-0002:row4:col3 = '6.41 (6.23–6.52)'
- unparsed cell psp413131-tbl-0002:row5:col3 = '92.6 (90.1–94.5)'
- unparsed cell psp413131-tbl-0002:row6:col3 = '2.76 (2.62–2.88)'
- unparsed cell psp413131-tbl-0002:row7:col3 = '25.1 (21.2–30.1)'
- unparsed cell psp413131-tbl-0002:row8:col3 = '0.147 (0.144–0.150)'
- unparsed cell psp413131-tbl-0002:row11:col3 = '0.00589 (0.00349–0.00852)'
- unparsed cell psp413131-tbl-0002:row14:col3 = '0.360 (0.346–0.377)'
- unparsed cell Decker_2024_table_3:row11:col2 = '254 (27) d'
- unparsed cell Decker_2024_table_3:row11:col3 = '500 (57) e'
- unparsed cell Decker_2024_table_3:row11:col7 = '483 (40) f'
- unparsed cell Decker_2024_table_3:row12:col2 = '56.8 (22) d'
- unparsed cell Decker_2024_table_3:row12:col3 = '79.0 (33) e'
- unparsed cell Decker_2024_table_3:row12:col7 = '53.3 (22) f'
- companion parameter table 3 transcribed (71 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation F = (CLnr/F + CLr/F)*((WTE/74)^0.75)
- captured model equation Q = 2.67*((WTE/74)^0.75)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.812 (13/16 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | not captured | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row11:col1', 'Decker_2024_table_3:row11:col4', 'Decker_2024_table_3:row11:col5', 'Decker_2024_table_3:row11:col6'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row5:col1', 'Decker_2024_table_3:row5:col2', 'Decker_2024_table_3:row5:col3', 'Decker_2024_table_3:row5:col4', 'Decker_2024_table_3:row5:col5', 'Decker_2024_table_3:row5:col6'] |
| C5_dimension_Q27 | fail | [time] | years | not captured | not captured | ['Decker_2024_table_3:row4:col1', 'Decker_2024_table_3:row4:col2', 'Decker_2024_table_3:row4:col3', 'Decker_2024_table_3:row4:col4', 'Decker_2024_table_3:row4:col5', 'Decker_2024_table_3:row4:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row8:col1', 'Decker_2024_table_3:row8:col2', 'Decker_2024_table_3:row8:col3', 'Decker_2024_table_3:row8:col4', 'Decker_2024_table_3:row8:col5', 'Decker_2024_table_3:row8:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row12:col1', 'Decker_2024_table_3:row12:col4', 'Decker_2024_table_3:row12:col5', 'Decker_2024_table_3:row12:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row10:col1', 'Decker_2024_table_3:row10:col2', 'Decker_2024_table_3:row10:col3', 'Decker_2024_table_3:row10:col4', 'Decker_2024_table_3:row10:col5', 'Decker_2024_table_3:row10:col6'] |
| C5_dimension_Q76 | fail | [time] | years | not captured | not captured | ['Decker_2024_table_3:row7:col1', 'Decker_2024_table_3:row7:col2', 'Decker_2024_table_3:row7:col3', 'Decker_2024_table_3:row7:col4', 'Decker_2024_table_3:row7:col5', 'Decker_2024_table_3:row7:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Decker_2024_table_3:row6:col1', 'Decker_2024_table_3:row6:col2', 'Decker_2024_table_3:row6:col3', 'Decker_2024_table_3:row6:col4', 'Decker_2024_table_3:row6:col5', 'Decker_2024_table_3:row6:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Decker_2024_table_3:row9:col1', 'Decker_2024_table_3:row9:col2', 'Decker_2024_table_3:row9:col3', 'Decker_2024_table_3:row9:col4', 'Decker_2024_table_3:row9:col5', 'Decker_2024_table_3:row9:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 21.7 L | not captured | not captured | ['Decker_2024_table_3:row8:col1', 'Decker_2024_table_3:row8:col2', 'Decker_2024_table_3:row8:col3', 'Decker_2024_table_3:row8:col4', 'Decker_2024_table_3:row8:col5', 'Decker_2024_table_3:row8:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.85 L | not captured | not captured | ['Decker_2024_table_3:row9:col1', 'Decker_2024_table_3:row9:col2', 'Decker_2024_table_3:row9:col3', 'Decker_2024_table_3:row9:col4', 'Decker_2024_table_3:row9:col5', 'Decker_2024_table_3:row9:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_baricitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Decker_2024` / `Decker_2024::jia_a`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:46 UTC</sub>
