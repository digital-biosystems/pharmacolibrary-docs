<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;erythropoietin&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/&quot;},{&quot;label&quot;:&quot;Frymoyer_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erythropoietin — `Erythropoietin_Frymoyer2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No value for erythropoietin's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant.**

The model was built, but erythropoietin's clearance, volume of distribution, central→peripheral rate constant and peripheral→central rate constant had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — erythropoietin: CL 0.0289, V1 0.25, V2 0.326, Q 0.0308.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[cl (l/h)1].value`: this record has 0.0289, the second reading 0.0263; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:37:55.762015+00:00) predates the upstream re-run (2026-10-05 21:06:00.502229+00:00). Current validate status: `rejected`.

## Citation
Frymoyer A et al., High-dose erythropoietin population pha…, Pediatric research (2017)
  ·  DOI: [10.1038/pr.2017.15](https://doi.org/10.1038/pr.2017.15)

## Model component
<dbs-pgx drug="erythropoietin" model-id="Erythropoietin_Frymoyer2017_reference" status="rejected" stale="true" population="neonates with hypoxic-ischemic encephalopathy receiving hypothermia" measured-compound="erythropoietin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)1 | `Q22` · CL | 0.0289 | L/h | 8.027777777777777e-09 | L/h | not captured | llm_confirmed (0.6) | T2:row2:col1, T2:row2:col2, T2:row2:col3, T2:row2:col4 | — | not captured |
| V1 (L)2 | `Q63` · V1 | 0.250 | L | 0.00025 | L | not captured | llm_confirmed (0.6) | T2:row3:col1, T2:row3:col2, T2:row3:col3, T2:row3:col4 | — | not captured |
| V2 (L)3 | `Q64` · V2 | 0.326 | L | 0.000326 | L | not captured | llm_confirmed (0.6) | T2:row4:col1, T2:row4:col2, T2:row4:col3, T2:row4:col4 | — | not captured |
| Q (L/h)4 | `Q30` · Q | 0.0308 | L/h | 8.555555555555557e-09 | L/h | not captured | llm (0.6) | T2:row5:col1, T2:row5:col2, T2:row5:col3, T2:row5:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Population pharmacokinetic Parameters' — extend the ontology if this is a real PK parameter (source ['T2:row0:col3', 'T2:row0:col4'])
- dropped unlinked row (NIL): 'CL, %CV' — extend the ontology if this is a real PK parameter (source ['T2:row7:col2'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL (L/h)1' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CL in the table or text. However, CL is a clearance parameter, and the ')
- implicit units: 'V1 (L)2' → L (from the popPK convention: 'The paper does not explicitly state the unit for V1 in the table or text. However, V1 is a volume of distribution parame')
- implicit units: 'V2 (L)3' → L (from the popPK convention: 'The paper does not explicitly state the unit for V2 in the table or text. However, V2 is a volume of distribution parame')
- implicit units: 'Q (L/h)4' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q in the table or text. However, Q is an intercompartmental clearance p')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=erythropoietin
- molar mass: none found for 'erythropoietin' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell T2:row7:col1 = '20.1%'
- unparsed cell T2:row7:col3 = '19.5%'
- unparsed cell T2:row7:col4 = '9.6% – 25.1%'
- unparsed cell T2:row8:col1 = '35.1%'
- unparsed cell T2:row8:col3 = '35.0%'
- unparsed cell T2:row8:col4 = '30.2% – 39.4%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (4/8 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl (l/h)1].value` | 0.0289 | 0.0263 | mismatch |
| `gpt-oss:120b` | `parameters[q (l/h)4].value` | 0.0308 | 0.0218 | mismatch |
| `gpt-oss:120b` | `parameters[v1 (l)2].value` | 0.250 | 0.230 | mismatch |
| `gpt-oss:120b` | `parameters[v2 (l)3].value` | 0.326 | 0.266 | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0289 | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0289 L/h | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.25 L | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.326 L | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 10000 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_erythropoietin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frymoyer_2017` / `Frymoyer_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_erythropoietin/models/modelica/_needs_review/Erythropoietin_Frymoyer2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_erythropoietin/models/modelica/_needs_review/Erythropoietin_Frymoyer2017_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 21:06 UTC</sub>
