<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;phenazone&quot;,&quot;href&quot;:&quot;drugs/drug_phenazone/&quot;},{&quot;label&quot;:&quot;Wasfi_1998 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# phenazone — `Phenazone_Wasfi1998_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118), gpt-oss:120b (partly confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the elimination half-life of 3.25 hours for antipyrine has a dimension mismatch.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. A dimension mismatch was found on the elimination half-life parameter. The second reader disagreed on the presence of values for AUC, half-life, and clearance, though the specific numerical values matched. Extracted — phenazone: t1/2z 3.25 hr, V/F 0.691 l/kg, Vss 0.659 l/kg, V1 0.386 l/kg, CLb 0.148 l/kg/hr, AUC∞ 171 micrograms.ml.hr, kabs 0.158 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has antipyrine, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-01 22:23:03.411491+00:00) predates the upstream re-run (2026-10-07 07:00:24.794481+00:00). Current validate status: `rejected`.

## Citation
Wasfi IA et al., The activity of mixed function oxidases…, Comparative biochemistry an… (1998)
  ·  DOI: [10.1016/s0742-8413(97)00200-4](https://doi.org/10.1016/s0742-8413(97)00200-4)

<div class="pk-model-meta" hidden drug="phenazone" model-id="Phenazone_Wasfi1998_reference" status="rejected" stale="true" population="horses and camels" measured-compound="antipyrine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| elimination half-lives | `Q57` · t1/2z | 3.25 | hr | 11700.0 | [h] | not captured | llm (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| apparent volumes of distribution (area method) | `Q76` · V/F | 0.691 | l/kg | 0.048369999999999996 | [l] / [kg] | not captured | llm_confirmed (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| volumes of distribution at steady state | `Q65` · Vss | 0.659 | l/kg | 0.046130000000000004 | [l] / [kg] | not captured | llm (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| volume of the central compartment of the two-compartment pharmacokinetic model | `Q63` · V1 | 0.386 | l/kg | 0.02702 | [l] / [kg] | not captured | llm_confirmed (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| total body clearances | `Q23` · CLb | 0.148 | l/kg/hr | 2.877777777777778e-06 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| areas under the curves to infinity | `Q17` · AUC∞ | 171.0 | micrograms.ml.hr | not captured | [h] · [µg] · [ml] | not captured | llm (0.6) | Wasfi_1998:abstract, Wasfi_1998:abstract | — | not captured |
| ka | `Q49` · kabs | 5.54 | h -1 | 0.001538888888888889 | 1/h | not captured | review_gapfill (0.7) | Tanaka_2017:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'areas under the curves to infinity' → Q17 (unit '[mass] * [length] ** 3 * [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=antipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q49 (kabs) from Tanaka_2017's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wasfi_1998_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |
| `gpt-oss:120b` | partly confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volumes of distribution]` | 0.691 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volumes of distribution]` | not captured | 0.691 | only_one_extracted |
| `gpt-oss-120b` | `parameters[areas under the curves to infinity]` | 171.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[areas under the curves to infinity]` | not captured | 171.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives]` | 3.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives]` | not captured | 3.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 5.54 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearances]` | 0.148 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearances]` | not captured | 0.148 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment of the two-compartment pharmacokinetic model]` | 0.386 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment of the two-compartment pharmacokinetic model]` | not captured | 0.386 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volumes of distribution at steady state]` | 0.659 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volumes of distribution at steady state]` | not captured | 0.659 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | antipyrine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | antipyrine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[area under the curve to infinity]` | not captured | 171.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[areas under the curves to infinity]` | 171.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | not captured | 3.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-lives]` | 3.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance]` | not captured | 0.148 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearances]` | 0.148 | not captured | only_one_extracted |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | fail | [mass] * [length] ** 3 * [time] | micrograms.ml.hr | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tanaka_2017:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 10.4 L/h | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 27 L | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 46.1 L | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 48.4 L | not captured | not captured | ['Wasfi_1998:abstract', 'Wasfi_1998:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_phenazone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wasfi_1998` / `Wasfi_1998::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:00 UTC</sub>
