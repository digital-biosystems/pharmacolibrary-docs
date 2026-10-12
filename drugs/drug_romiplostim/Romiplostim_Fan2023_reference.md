<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;romiplostim&quot;,&quot;href&quot;:&quot;drugs/drug_romiplostim/&quot;},{&quot;label&quot;:&quot;Fan_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# romiplostim — `Romiplostim_Fan2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The romiplostim elimination rate constant kel is reported as 52.94 with the unit 'units' (×10–4/h), a dimension mismatch that could not be converted to SI, so the record was rejected.**

The elimination rate constant kel for romiplostim carries the verbatim unit 'units' (label KE ×10–4/h), which does not match the dimension of a rate constant and could not be expressed in SI units, so no usable value reached the model. The absorption rate constant kabs (0.0269 1/h) was read consistently by both readers. A second reader additionally extracted parameters tmp (106) and tret (35.13) that are absent from this record. Extracted — romiplostim: kel 52.9 units, kabs 0.0269 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of tmp: this record has none, the second reading 106; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:43.381102+00:00) predates the upstream re-run (2026-10-05 19:24:12.692844+00:00). Current validate status: `rejected`.

## Citation
Fan X et al., Novel Combination of Erythropoietin and…, ACS pharmacology & translat… (2023)
  ·  DOI: [10.1021/acsptsci.3c00194](https://doi.org/10.1021/acsptsci.3c00194)

<div class="pk-model-meta" hidden drug="romiplostim" model-id="Romiplostim_Fan2023_reference" status="rejected" stale="true" population="rats with chemotherapy-induced anemia and thrombocytopenia" measured-compound="romiplostim" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KE (×10–4/h) | `Q47` · kel | 52.94 | units | not captured | [units] | 16.02 | exact (1.0) | tbl1:row8:col2, tbl1:row8:col3 | — | not captured |
| KAE (1/h) | `Q49` · kabs | 0.0269 | 1/h | 7.472222222222222e-06 | 1/h | not captured | review_gapfill (0.7) | Fan_2023_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'kill (mL/μg)' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col2', 'tbl1:row1:col3'])
- dropped unlinked row (NIL): 'RBC0 (×1012 cells/L)' — extend the ontology if this is a real PK parameter (source ['tbl1:row2:col2', 'tbl1:row2:col3'])
- dropped unlinked row (NIL): 'TRET (h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row3:col2', 'tbl1:row3:col3'])
- dropped unlinked row (NIL): 'TRBC (h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row4:col2', 'tbl1:row4:col3'])
- dropped unlinked row (NIL): 'PLT0 (×1012 cells/L)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col2', 'tbl1:row5:col3'])
- dropped unlinked row (NIL): 'TMP (h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col2', 'tbl1:row6:col3'])
- dropped unlinked row (NIL): 'TPLT (h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col2', 'tbl1:row7:col3'])
- unit_dimension_mismatch: 'KE (×10–4/h)' → Q47 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'MCH (pg/cell)' — extend the ontology if this is a real PK parameter (source ['tbl1:row9:col2', 'tbl1:row9:col3'])
- dropped unlinked row (NIL): 'SmaxRM1' — extend the ontology if this is a real PK parameter (source ['tbl1:row10:col2', 'tbl1:row10:col3'])
- dropped unlinked row (NIL): 'SmaxRM2' — extend the ontology if this is a real PK parameter (source ['tbl1:row11:col2', 'tbl1:row11:col3'])
- dropped unlinked row (NIL): 'SmaxPLT1' — extend the ontology if this is a real PK parameter (source ['tbl1:row12:col2', 'tbl1:row12:col3'])
- dropped unlinked row (NIL): 'SmaxPLT2' — extend the ontology if this is a real PK parameter (source ['tbl1:row13:col2', 'tbl1:row13:col3'])
- dropped unlinked row (NIL): 'SmaxEPO' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col2', 'tbl1:row14:col3'])
- dropped PD-category row 'SC50E (mIU/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row15:col2', 'tbl1:row15:col3'])
- dropped PD-category row 'Ke0 (1/h)' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row16:col2', 'tbl1:row16:col3'])
- table mostly unlinked (13/16 table-cell rows NIL) — likely the wrong table was located, not 3 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=romiplostim
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'romiplostim' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Fan_2023_2's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[tmp]` | not captured | 106 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tret]` | not captured | 35.13 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row8:col2', 'tbl1:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Fan_2023_2:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_romiplostim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2023` / `Fan_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 19:24 UTC</sub>
