<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;ondansetron&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/&quot;},{&quot;label&quot;:&quot;Chiang_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ondansetron_Chiang2021_estimate&quot;,&quot;label&quot;:&quot;Chiang_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Chiang2021v2_reference&quot;,&quot;label&quot;:&quot;Chiang_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Chiang2021v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ondansetron_Landau2026_reference&quot;,&quot;label&quot;:&quot;Landau_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ondansetron/Ondansetron_Landau2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ondansetron — `Ondansetron_Chiang2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.35), gpt-oss:120b (not confirmed, agreement 0.381). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The ondansetron record was rejected because its central volume of distribution V1 of 17.5 mL is physiologically implausible, indicating a unit or scale extraction error in the parameter values.**

The record lists ondansetron clearance CL as 525.0 mL/h and central volume V1 as 17.5 mL in a one-compartment structure. A central volume of only 17.5 mL is far below any plausible volume of distribution for ondansetron, which is why the clearance/volume physiological-window check flagged the magnitude as implausible and attributed it to a unit or scale extraction error. The source is a review reference read from secondary text, and the second reader left several extracted values unconfirmed, with no independent reading available for most of them. Extracted — ondansetron: CL 525 mL⋅h -1, V1 17.5 mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on parameter Q301: this record has 2.14, the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:16.274238+00:00) predates the upstream re-run (2026-10-04 14:05:44.913178+00:00). Current validate status: `rejected`.

## Citation
Chiang M et al., Pharmacokinetic Modeling of the Effect…, Pharmaceutical research (2024)
  ·  DOI: [10.1007/s11095-024-03739-6](https://doi.org/10.1007/s11095-024-03739-6)

<div class="pk-model-meta" hidden drug="ondansetron" model-id="Ondansetron_Chiang2024_reference" status="rejected" stale="true" population="wild-type and Pgp knockout rats" measured-compound="ondansetron" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (mL⋅h -1 ) | `Q22` · CL | 525.0 | mL⋅h -1 | 1.4583333333333332e-07 | L/h | not captured | review (0.7) | Chiang_2024:review | — | not captured |
| V 1 | `Q63` · V1 | 17.5 | mL | 1.75e-05 | L | not captured | review (0.7) | Chiang_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Chiang_2024) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.35 (7/20 fields) | 13 |
| `gpt-oss:120b` | not confirmed | 0.381 (8/21 fields) | 13 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q301]` | 2.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q302]` | 2.62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q303]` | 17.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q304]` | 39.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q315]` | 0.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q347]` | 9.37 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q348]` | 71.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q410]` | 3.58 | 3.58 | mismatch |
| `gpt-oss-120b` | `values[Q47]` | 3.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q51]` | 6.84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `values[Q57]` | 0.638 | 0.58 | mismatch |
| `gpt-oss-120b` | `values[Q60]` | not captured | 0.638 | only_one_extracted |
| `gpt-oss-120b` | `values[Q63]` | 17.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q301]` | 2.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q302]` | 2.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q303]` | 17.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q304]` | 39.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q315]` | 0.05 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q347]` | 9.37 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q348]` | 71.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q410]` | 3.58 | 3.58 | mismatch |
| `gpt-oss:120b` | `values[Q47]` | 3.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q51]` | 6.84 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q59]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `values[Q63]` | 17.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `values[Q77]` | not captured | 0.6 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chiang_2024:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chiang_2024:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 525.0 | not captured | not captured | ['Chiang_2024:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.525 L/h | not captured | not captured | ['Chiang_2024:review'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0175 L | not captured | not captured | ['Chiang_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ondansetron/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chiang_2024` / `Chiang_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 14:05 UTC</sub>
