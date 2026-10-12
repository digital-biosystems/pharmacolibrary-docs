<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Potts_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Potts2007_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.471), gpt-oss:120b (not confirmed, agreement 0.647). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clonidine record was rejected because a structural parameter failed a dimension check: the central volume of distribution V1 is reported as 62.5 l 70 kg(-1), a unit inconsistent with a volume of distribution.**

The record for clonidine in children was built from the paper's abstract alone, so reported summary statistics stood in for a fitted model. The dimension mismatch concerns the central volume of distribution, given as 62.5 l 70 kg(-1), which is not a valid volume dimension. Other parameters (clearance 14.6 L/h, intercompartmental clearance 157 l x h(-1) 70 kg(-1), peripheral volume 119 l 70 kg(-1), terminal half-life 25.7 weeks, absorption half-life 0.98 h, bioavailability 1) were extracted, but a second reader returned null for all of them and marked the dose compound and primary analyte as unknown. Extracted — clonidine: CL 14.6 L/h, V1 62.5 l 70 kg(-1), Q 157 l x h(-1) 70 kg(-1), V2 119 l 70 kg(-1), t1/2z 25.7 weeks, t1/2ka 0.98 h, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonidine, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:37.254006+00:00) predates the upstream re-run (2026-10-09 06:09:00.066873+00:00). Current validate status: `rejected`.

## Citation
Potts AL et al., Clonidine disposition in children; a po…, Paediatric anaesthesia (2007)
  ·  DOI: [10.1111/j.1460-9592.2007.02251.x](https://doi.org/10.1111/j.1460-9592.2007.02251.x)

## Model component
<dbs-pgx drug="clonidine" model-id="Clonidine_Potts2007_reference" status="rejected" stale="true" population="children" measured-compound="clonidine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T abs epidural (h) | `Q49` · kabs | 24.5 | h | not captured | [h] | not captured | llm (0.6) | tab_0:row6:col1, tab_0:row6:col2 | — | not captured |
| Lag rectal (min) | `Q83` · tlag | 73.2 | min | 4392.0 | [min] | not captured | llm (0.6) | tab_0:row8:col1, tab_0:row8:col2 | — | not captured |
| b cl | `Q22` · CL | 0.262 | c | not captured | [c] | 27.4 | llm_confirmed (0.6) | tab_0:row9:col2, tab_0:row9:col4 | — | not captured |
| FV1 | `Q63` · V1 | 1.23 | not captured | not captured | not captured | 20.4 | llm (0.6) | tab_0:row11:col2, tab_0:row11:col4 | — | not captured |
| FV2 | `Q64` · V2 | 1.26 | not captured | not captured | not captured | 12.6 | llm (0.6) | tab_0:row12:col2, tab_0:row12:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'T abs epidural (h)' routed out of structural estimates ('%BSV')
- table section iiv: 'T abs rectal (h)' routed out of structural estimates ('%BSV')
- table section iiv: 'Lag rectal (min)' routed out of structural estimates ('%BSV')
- unit_dimension_mismatch: 'T abs epidural (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'T abs rectal (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('T abs rectal (h)', value '32.3') — already have one for this compound
- unit_dimension_mismatch: 'b cl' → Q22 (unit '[length] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'T cl (weeks)' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col2', 'tab_0:row10:col4'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (b cl); Q63 (FV1); Q64 (FV2)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.471 (8/17 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.647 (11/17 fields) | 6 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[fv1].parameter_id` | Q63 | Q290 | mismatch |
| `gpt-oss-120b` | `parameters[lag rectal]` | 73.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t abs epidural].parameter_id` | Q49 | Q83 | mismatch |
| `gpt-oss-120b` | `parameters[t cl]` | not captured | 25.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[b cl].parameter_id` | Q22 | Q23 | mismatch |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag rectal]` | 73.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 0.538 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t abs epidural].parameter_id` | Q49 | Q83 | mismatch |
| `gpt-oss:120b` | `parameters[t abs rectal]` | not captured | 32.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | [length] / [time] | c | not captured | not captured | ['tab_0:row9:col2', 'tab_0:row9:col4'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['tab_0:row6:col1', 'tab_0:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_0:row8:col1', 'tab_0:row8:col2'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row11:col2', 'tab_0:row11:col4'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row12:col2', 'tab_0:row12:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.262 | not captured | not captured | ['tab_0:row9:col2', 'tab_0:row9:col4'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Potts_2007` / `Potts_2007::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 06:09 UTC</sub>
