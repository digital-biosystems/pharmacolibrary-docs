<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;neomycin&quot;,&quot;href&quot;:&quot;drugs/drug_neomycin/&quot;},{&quot;label&quot;:&quot;Samuel_1968 \u00b7 neomycin&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# neomycin — `Neomycin_Samuel1968_neomycin`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has neomycin, the second reading neomycin sulfate; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:11.496565+00:00) predates the upstream re-run (2026-10-04 02:31:13.322220+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `neomycin`, measured `cholesterol`.

## Citation
Samuel P et al., Effect of neomycin on exchangeable pool…, The Journal of clinical inv… (1968)
  ·  DOI: [10.1172/JCI105870](https://doi.org/10.1172/JCI105870)

<div class="pk-model-meta" hidden drug="neomycin" model-id="Neomycin_Samuel1968_neomycin" status="rejected" stale="true" population="adults with hypercholesterolemia" measured-compound="cholesterol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 100 α₁, day⁻¹ | `Q67` · λ1 | 13.9 | not captured | not captured | not captured | not captured | llm (0.6) | Samuel_1968_table_2:row2:col6, Samuel_1968_table_2:row2:col7, Samuel_1968_table_2:row2:col8, Samuel_1968_table_2:row2:col9 | — | not captured |
| 100 α₂, day⁻¹ | `Q59` · t1/2α | 1.50 | not captured | not captured | not captured | not captured | llm (0.6) | Samuel_1968_table_2:row3:col6, Samuel_1968_table_2:row3:col7, Samuel_1968_table_2:row3:col8, Samuel_1968_table_2:row3:col9 | — | not captured |
| (t₁/₂)₁, day | `Q57` · t1/2z | 5.0 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Samuel_1968_table_2:row4:col6, Samuel_1968_table_2:row4:col7, Samuel_1968_table_2:row4:col8, Samuel_1968_table_2:row4:col9 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): "a₁', % g⁻¹" — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_2:row0:col6', 'Samuel_1968_table_2:row0:col7', 'Samuel_1968_table_2:row0:col8', 'Samuel_1968_table_2:row0:col9'])
- dropped unlinked row (NIL): "a₂', % g⁻¹" — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_2:row1:col6', 'Samuel_1968_table_2:row1:col7', 'Samuel_1968_table_2:row1:col8', 'Samuel_1968_table_2:row1:col9'])
- dropped duplicate Q57 ('(t₁/₂)₂, day', value '46') — already have one for this compound
- dropped unlinked row (NIL): 'Ms*' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row0:col6', 'Samuel_1968_table_3:row0:col7', 'Samuel_1968_table_3:row0:col8', 'Samuel_1968_table_3:row0:col9'])
- dropped unlinked row (NIL): 'Ma†' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row1:col6', 'Samuel_1968_table_3:row1:col7', 'Samuel_1968_table_3:row1:col8', 'Samuel_1968_table_3:row1:col9'])
- dropped unlinked row (NIL): '100 A§' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row2:col6', 'Samuel_1968_table_3:row2:col7', 'Samuel_1968_table_3:row2:col8', 'Samuel_1968_table_3:row2:col9'])
- dropped unlinked row (NIL): '100 D‖' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row3:col6', 'Samuel_1968_table_3:row3:col7', 'Samuel_1968_table_3:row3:col8', 'Samuel_1968_table_3:row3:col9'])
- dropped unlinked row (NIL): '10⁴ BC¶' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row4:col6', 'Samuel_1968_table_3:row4:col7', 'Samuel_1968_table_3:row4:col8', 'Samuel_1968_table_3:row4:col9'])
- dropped unlinked row (NIL): '(Ia)t=0**' — extend the ontology if this is a real PK parameter (source ['Samuel_1968_table_3:row5:col6', 'Samuel_1968_table_3:row5:col7', 'Samuel_1968_table_3:row5:col8', 'Samuel_1968_table_3:row5:col9'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cholesterol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'neomycin' subgroup of Samuel_1968 (paper reports 3 populations: control, neomycin, placebo)
- review gap-fill skipped: this record measures 'cholesterol', not neomycin — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[(t1/2)1].parameter_id` | Q57 | Q59 | mismatch |
| `gpt-oss-120b` | `parameters[(t1/2)2]` | not captured | 46 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 e_b/m_b, % day-]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 r_ab/m_a, % day-]` | not captured | 4.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[100 α2].parameter_id` | Q59 | Q68 | mismatch |
| `gpt-oss-120b` | `parameters[e_b]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | neomycin | neomycin sulfate | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q57 | fail | [time] | not captured | not captured | not captured | ['Samuel_1968_table_2:row4:col6', 'Samuel_1968_table_2:row4:col7', 'Samuel_1968_table_2:row4:col8', 'Samuel_1968_table_2:row4:col9'] |
| C5_unit_missing_Q59 | fail | [time] | not captured | not captured | not captured | ['Samuel_1968_table_2:row3:col6', 'Samuel_1968_table_2:row3:col7', 'Samuel_1968_table_2:row3:col8', 'Samuel_1968_table_2:row3:col9'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['Samuel_1968_table_2:row2:col6', 'Samuel_1968_table_2:row2:col7', 'Samuel_1968_table_2:row2:col8', 'Samuel_1968_table_2:row2:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_neomycin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Samuel_1968` / `Samuel_1968::neomycin`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 02:31 UTC</sub>
