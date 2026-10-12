<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/&quot;},{&quot;label&quot;:&quot;Saari_2012 \u00b7 covariate_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Morse2021_reference&quot;,&quot;label&quot;:&quot;Morse_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Morse2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxycodone — `Oxycodone_Saari2012_covariate_model`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Oxycodone's initial distribution half-life of 2.5 minutes was rejected because the unit could not be converted to seconds.**

The record lists the initial distribution half-life for oxycodone as 2.5 minutes, but the system could not convert this time unit to the required SI standard. This omission meant the corresponding structural parameter lacked a usable value, triggering a dimension mismatch error. The model builder also disagreed with the second reader on several extracted parameter values, including the first-order absorption rate constant and the initial distribution half-life. Extracted — oxycodone: Q2 153 litre, V 1.15e+03 L, V2 20.2 L, t1/2α 2.5 min, t1/2β 4.2 h, Vss 286 litre, CL 37.7 L/h, V1 173 litre.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has 38.03, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 06:17:55.201382+00:00) predates the upstream re-run (2026-10-07 14:56:39.658903+00:00). Current validate status: `rejected`.

## Citation
Saari TI et al., Oxycodone clearance is markedly reduced…, British journal of anaesthe… (2012)
  ·  DOI: [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395)

<div class="pk-model-meta" hidden drug="oxycodone" model-id="Oxycodone_Saari2012_covariate_model" status="rejected" stale="true" population="individuals aged 19-89 years" measured-compound="oxycodone" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| u 2 (litre) | `Q99` · Q2 | 153 | litre | not captured | [l] | not captured | llm (0.6) | tab_1:row3:col1, tab_1:row3:col4 | — | not captured |
| u 3 (litre h 21 ) | `Q77` · V3 | 1153 | L | 1.153 | L | not captured | llm (0.6) | tab_1:row4:col4 | — | not captured |
| u 4 (litre) | `Q61` · V | 133 | litre | 0.133 | [l] | not captured | llm (0.6) | tab_1:row5:col4 | — | not captured |
| u 5 * | `Q900` · equation variable | 0.549 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row6:col4 | — | not captured |
| t1 2 a (min) | `Q59` · t1/2α | 2.5 | min | 150.0 | [min] | not captured | llm (0.6) | tab_1:row9:col4 | — | not captured |
| t1 2 b (h) | `Q60` · t1/2β | 4.2 | h | 15120.0 | [h] | not captured | llm (0.6) | tab_1:row10:col4 | — | not captured |
| V ss (litre) | `Q65` · Vss | 286 | litre | 0.28600000000000003 | [l] | not captured | space_fold (0.95) | tab_1:row11:col4 | — | not captured |
| CL | `Q22` · CL | 38.03 | L/h | 1.056388888888889e-05 | L/h | not captured | review_gapfill (0.7) | Shi_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'v 2 1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'v 2 2' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'v 2 3' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'v 2 4' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 's 1' routed out of structural estimates ('Residual variability')
- table section residual_error: 's 2 (ng ml 21 )' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'u 1 (litre h 21 )' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col1', 'tab_1:row2:col4'])
- unit_dimension_mismatch: 'u 2 (litre)' → Q99 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'litre h 21' (V3)
- dropped duplicate Q900 ('u 6', value '20.174') — already have one for this compound
- dropped unlinked row (NIL): 'u 7' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col4'])
- dropped unlinked row (NIL): 'DV vs PRED (%)' — extend the ontology if this is a real PK parameter (source ['tab_1:row21:col1', 'tab_1:row24:col1'])
- dropped duplicate Q900 ('DV vs IPRED (%)', value '0.9') — already have one for this compound
- implicit units: 'u 3 (litre h 21 )' → L (from the paper text: "Table 3 caption explicitly states 'litre h 21'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxycodone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'covariate model' subgroup of Saari_2012 (paper reports 2 populations: covariate model, population estimates)
- gap-filled Q22 (CL) from Shi_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_1:row2:col5 = '45.6, 50.8'
- unparsed cell tab_1:row3:col5 = '121, 199'
- unparsed cell tab_1:row4:col1 = 'C L 2 ¼u 3'
- unparsed cell tab_1:row4:col5 = '420, 1989'
- unparsed cell tab_1:row5:col1 = 'V 2 ¼u 4'
- unparsed cell tab_1:row5:col5 = '85.0, 165'
- unparsed cell tab_1:row6:col5 = '0.33, 0.77'
- unparsed cell tab_1:row7:col5 = '20.28, 0.074'
- unparsed cell tab_1:row8:col5 = '2.91, 6.41'
- unparsed cell tab_1:row9:col5 = '1.5, 6.1'
- unparsed cell tab_1:row10:col5 = '3.9, 4.4'
- unparsed cell tab_1:row11:col5 = '268, 299'
- unparsed cell tab_1:row13:col5 = '0.036, 0.067'
- unparsed cell tab_1:row14:col5 = '0.094, 0.21'
- unparsed cell tab_1:row15:col5 = '0.25, 4.6'
- unparsed cell tab_1:row16:col5 = '0.023, 0.28'
- unparsed cell tab_1:row18:col5 = '0.096, 0.126'
- unparsed cell tab_1:row19:col5 = '0.077, 0.165'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 38.03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[u 1]` | not captured | 48.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[u 2].parameter_id` | Q99 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[u 3].parameter_id` | Q77 | Q308 | mismatch |
| `gpt-oss-120b` | `parameters[u 5 *]` | 0.549 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[u 7]` | not captured | 4.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1]` | not captured | 173 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Shi_2026:review'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['tab_1:row9:col4'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab_1:row10:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row11:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col4'] |
| C5_dimension_Q99 | fail | [length] ** 3 | litre | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 38.03 | not captured | not captured | ['Shi_2026:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 38 L/h | not captured | not captured | ['Shi_2026:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 133 L | not captured | not captured | ['tab_1:row5:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 286 L | not captured | not captured | ['tab_1:row11:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxycodone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Saari_2012` / `Saari_2012::covariate_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:56 UTC</sub>
