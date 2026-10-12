<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;De_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_De2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Lidocaine record lacks volume and clearance, and AUC0-3 is reported in percent instead of concentration-time units.**

The record contains no distribution volume or clearance parameters, confirming it is not a compartmental population PK model. The AUC0-3 value of 76 is assigned the unit percent, which is dimensionally inconsistent with an area under the concentration-time curve. Additionally, the Cmax parameter has no extracted value, though a second reader identified 2.59 mg/L in the source. Extracted — lidocaine: tmax 5 min, AUCt 76 %.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 1: this record has none, the second reading 5.61; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-06 05:14:04.576252+00:00) predates the upstream re-run (2026-10-08 19:14:13.680988+00:00). Current validate status: `rejected`.

## Citation
De Cassai A et al., Pharmacokinetics of lidocaine after bil…, Regional anesthesia and pai… (2021)
  ·  DOI: [10.1136/rapm-2020-101718](https://doi.org/10.1136/rapm-2020-101718)

<div class="pk-model-meta" hidden drug="lidocaine" model-id="Lidocaine_De2021_reference" status="rejected" stale="true" population="adults undergoing lumbar spine surgery" measured-compound="lidocaine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Min | `Q36` · Cmin | 1.83 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row15:col1, tab_0:row15:col3, tab_0:row15:col4, tab_0:row15:col5, tab_0:row15:col6, tab_0:row15:col7 | — | not captured |
| Max | `Q32` · Cmax | 5.61 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row16:col1, tab_0:row16:col3, tab_0:row16:col4, tab_0:row16:col5, tab_0:row16:col6, tab_0:row16:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col1', 'tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3', 'tab_0:row4:col4', 'tab_0:row4:col5', 'tab_0:row4:col6', 'tab_0:row4:col7'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3', 'tab_0:row5:col4', 'tab_0:row5:col6', 'tab_0:row5:col7'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1', 'tab_0:row6:col2', 'tab_0:row6:col3', 'tab_0:row6:col4', 'tab_0:row6:col5', 'tab_0:row6:col6', 'tab_0:row6:col7'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1', 'tab_0:row7:col2', 'tab_0:row7:col3', 'tab_0:row7:col4', 'tab_0:row7:col5', 'tab_0:row7:col6', 'tab_0:row7:col7'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1', 'tab_0:row8:col2', 'tab_0:row8:col3', 'tab_0:row8:col4', 'tab_0:row8:col5', 'tab_0:row8:col6', 'tab_0:row8:col7'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3', 'tab_0:row9:col4', 'tab_0:row9:col5', 'tab_0:row9:col6', 'tab_0:row9:col7'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1', 'tab_0:row10:col2', 'tab_0:row10:col3', 'tab_0:row10:col4', 'tab_0:row10:col5', 'tab_0:row10:col6', 'tab_0:row10:col7'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col1', 'tab_0:row11:col2', 'tab_0:row11:col3', 'tab_0:row11:col5', 'tab_0:row11:col6', 'tab_0:row11:col7'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1', 'tab_0:row12:col2', 'tab_0:row12:col3', 'tab_0:row12:col4', 'tab_0:row12:col5', 'tab_0:row12:col6', 'tab_0:row12:col7'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1', 'tab_0:row13:col2', 'tab_0:row13:col3', 'tab_0:row13:col4', 'tab_0:row13:col5', 'tab_0:row13:col6', 'tab_0:row13:col7'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1', 'tab_0:row14:col3', 'tab_0:row14:col4', 'tab_0:row14:col5', 'tab_0:row14:col6', 'tab_0:row14:col7'])
- implicit units: LLM call failed (JSONDecodeError) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[1]` | not captured | 5.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` | not captured | 3.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[4]` | not captured | 1.83 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row16:col1', 'tab_0:row16:col3', 'tab_0:row16:col4', 'tab_0:row16:col5', 'tab_0:row16:col6', 'tab_0:row16:col7'] |
| C5_unit_missing_Q36 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row15:col1', 'tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6', 'tab_0:row15:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lidocaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `De_2021` / `De_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 19:14 UTC</sub>
