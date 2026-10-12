<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;duloxetine&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/&quot;},{&quot;label&quot;:&quot;Skinner_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Duloxetine_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Sharma2000_reference&quot;,&quot;label&quot;:&quot;Sharma_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Sharma2000_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Shibata2023_reference&quot;,&quot;label&quot;:&quot;Shibata_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Shibata2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Tianmei2007_reference&quot;,&quot;label&quot;:&quot;Tianmei_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Tianmei2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# duloxetine — `Duloxetine_Skinner2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833), gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The duloxetine record was held back because the model builder assumed F=1, Fm=1 and no molar correction, and left the absorption lag time (Tlag) at a default instead of an explicit estimate.**

The record for duloxetine (Skinner_2004, women with urinary incontinence and healthy women) contains CL/F 52.6 l/h, V/F 954 l and Ka 0.257 h−1, but the apparent-parameter assumption (F=1, Fm=1, no molar correction) was judged not acceptable, and Tlag was defaulted rather than estimated. A second reader also extracted additional parameters absent from this record, including AUC0–t 824.5, AUC0–∞ 699.3, Cmax 49.8, λz 0.072 and tmax 0.139, and did not confirm the Ka value of 0.257 h−1. Extracted — duloxetine: CL/F 52.6 l h -1, V/F 954 l, kabs 0.257 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc 0-•: this record has 699.3, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:40.057242+00:00) predates the upstream re-run (2026-10-06 22:53:33.822270+00:00). Current validate status: `rejected`.

## Citation
Skinner MH et al., Effect of age on the pharmacokinetics o…, British journal of clinical… (2004)
  ·  DOI: [10.1046/j.1365-2125.2003.01963.x](https://doi.org/10.1046/j.1365-2125.2003.01963.x)

## Model component
<dbs-pgx drug="duloxetine" model-id="Duloxetine_Skinner2004_reference" status="rejected" stale="true" population="healthy volunteers and women with urinary incontinence" measured-compound="duloxetine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC 0-t (ng h -1 ml -1 ) | `Q19` · AUCt | 824.5 | ng h -1 ml -1 | not captured | [ng] / [[h] · [ml]] | not captured | space_fold (0.95) | Skinner_2004_table_2:row3:col2, Skinner_2004_table_2:row3:col4 | — | not captured |
| AUC 0-• (ng h -1 ml -1 ) | `Q17` · AUC∞ | 699.3 | ng h -1 ml -1 | not captured | [ng] / [[h] · [ml]] | not captured | llm_corrected (0.6) | Skinner_2004_table_2:row4:col1, Skinner_2004_table_2:row4:col2, Skinner_2004_table_2:row4:col4 | — | not captured |
| C max (ng ml -1 ) | `Q32` · Cmax | 49.8 | ng ml -1 | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Skinner_2004_table_2:row5:col1, Skinner_2004_table_2:row5:col2, Skinner_2004_table_2:row5:col4 | — | not captured |
| T max | `Q56` · tmax | 0.139 | years | not captured | [years] | not captured | space_fold (0.95) | Skinner_2004_table_2:row6:col5 | — | not captured |
| CL/F (l h -1 ) | `Q27` · CL/F | 52.9 | l h -1 | 1.4694444444444445e-05 | [l] / [h] | not captured | exact (1.0) | Skinner_2004_table_2:row7:col2, Skinner_2004_table_2:row7:col4 | — | not captured |
| V/F (l) | `Q76` · V/F | 962.0 | l | 0.962 | [l] | not captured | exact (1.0) | Skinner_2004_table_2:row8:col1, Skinner_2004_table_2:row8:col2, Skinner_2004_table_2:row8:col4 | — | not captured |
| l z (h -1 ) | `Q47` · kel | 0.072 | h -1 | 1.9999999999999998e-05 | [1] / [h] | not captured | llm (0.6) | Skinner_2004_table_2:row9:col1, Skinner_2004_table_2:row9:col2, Skinner_2004_table_2:row9:col4 | — | not captured |
| Ka (h-1) | `Q49` · kabs | 1.46 | h-1 | 0.00040555555555555554 | 1/h | not captured | review_gapfill (0.7) | Chen_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Skinner_2004_table_2:row1:col1', 'Skinner_2004_table_2:row1:col2'])
- unit_dimension_mismatch: 'AUC 0-t (ng h -1 ml -1 )' → Q19 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC 0-• (ng h -1 ml -1 )' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- covariate creatinine for CLR from footnote/prose kept as documentation only (['tab_0:footnote'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=duloxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Chen_2024's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Skinner_2004_table_2:row3:col1 = '6 77.7 (49)'
- unparsed cell Skinner_2004_table_2:row3:col3 = '146.8 (-123.6, 417.3)'
- unparsed cell Skinner_2004_table_2:row4:col3 = '167.6 (-119.1, 454.2)'
- unparsed cell Skinner_2004_table_2:row5:col3 = '-0.4 (-15.1, 14.4)'
- unparsed cell Skinner_2004_table_2:row6:col2 = '4.0 (2.0-4.0)'
- unparsed cell Skinner_2004_table_2:row6:col3 = '5.0 (1.0-6.0)'
- unparsed cell Skinner_2004_table_2:row6:col4 = '1 (-1, 2) b'
- unparsed cell Skinner_2004_table_2:row7:col1 = '7 0.3 (48)'
- unparsed cell Skinner_2004_table_2:row7:col3 = '-17.4 (-41.1, 6.23)'
- unparsed cell Skinner_2004_table_2:row8:col3 = '115.9 (-168.6, 400.4)'
- unparsed cell Skinner_2004_table_2:row9:col3 = '-0.022 (-0.036, -0.008)'
- companion parameter table 2 transcribed (19 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |
| `gpt-oss:120b` | partly confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc 0-•]` | 699.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc 0-t]` | not captured | 824.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc 0-•]` | not captured | 699.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | not captured | 49.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.257 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[l z]` | not captured | 0.072 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t max]` | not captured | 0.139 | only_one_extracted |

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
| C5_dimension_Q17 | fail | [mass] / [time] / [length] ** 3 | ng h -1 ml -1 | not captured | not captured | ['Skinner_2004_table_2:row4:col1', 'Skinner_2004_table_2:row4:col2', 'Skinner_2004_table_2:row4:col4'] |
| C5_dimension_Q19 | fail | [mass] / [time] / [length] ** 3 | ng h -1 ml -1 | not captured | not captured | ['Skinner_2004_table_2:row3:col2', 'Skinner_2004_table_2:row3:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Skinner_2004_table_2:row7:col2', 'Skinner_2004_table_2:row7:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Skinner_2004_table_2:row5:col1', 'Skinner_2004_table_2:row5:col2', 'Skinner_2004_table_2:row5:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Skinner_2004_table_2:row9:col1', 'Skinner_2004_table_2:row9:col2', 'Skinner_2004_table_2:row9:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chen_2024:review'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Skinner_2004_table_2:row6:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Skinner_2004_table_2:row8:col1', 'Skinner_2004_table_2:row8:col2', 'Skinner_2004_table_2:row8:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 52.9 L/h | not captured | not captured | ['Skinner_2004_table_2:row7:col2', 'Skinner_2004_table_2:row7:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 962 L | not captured | not captured | ['Skinner_2004_table_2:row8:col1', 'Skinner_2004_table_2:row8:col2', 'Skinner_2004_table_2:row8:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=duloxetine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 1.3768285319493181e-05 | not captured | non-numeric value |
| T1_cmax | reference | skipped | not captured | 1.3768285319493181e-05 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 12.560066348166535 | not captured | non-numeric value |
| T1_tmax | reference | skipped | not captured | 7.695390781563126 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_duloxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Skinner_2004` / `Skinner_2004::reference`)
- model: `../../../knowledgebase/drugs/drug_duloxetine/models/modelica/Duloxetine_Skinner2004_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_duloxetine/models/modelica/Duloxetine_Skinner2004_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_duloxetine/models/modelica/Duloxetine_Skinner2004_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:53 UTC</sub>
