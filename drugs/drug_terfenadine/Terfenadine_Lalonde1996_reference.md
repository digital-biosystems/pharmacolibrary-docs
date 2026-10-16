<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;terfenadine&quot;,&quot;href&quot;:&quot;drugs/drug_terfenadine/&quot;},{&quot;label&quot;:&quot;Lalonde_1996 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# terfenadine — `Terfenadine_Lalonde1996_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Terfenadine's second compartment volume of 119.2 has missing units, and its clearance rate of 4.42 per hour prevents the second compartment from being reached.**

The record, built from the abstract alone, lists a peripheral volume with no unit, causing a dimension mismatch. The clearance of 4.42 per hour for a two-compartment model is structurally incompatible with reaching a second compartment. These errors render the population mean values unusable for a valid pharmacokinetic model. Extracted — terfenadine: kabs 2.8 hr-1, tlag 0.33 hr, CL/F 4.42 1/hr, V1/F 89.8 1, Cmax 1.54 ng/ml, tmax 1.3 hr, t1/2z 15.1 hr, V2 119 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has terfenadine, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Lalonde RL et al., Population pharmacokinetics of terfenad…, Pharmaceutical research (1996)
  ·  DOI: [10.1023/a:1016036624935](https://doi.org/10.1023/a:1016036624935)

<div class="pk-model-meta" hidden drug="terfenadine" model-id="Terfenadine_Lalonde1996_reference" status="rejected" stale="false" population="healthy male adults" measured-compound="terfenadine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Population mean Ka | `Q49` · kabs | 2.8 | hr-1 | 0.0007777777777777777 | [1] / [h] | not captured | llm_confirmed (0.6) | Lalonde_1996:abstract | — | not captured |
| Tlag | `Q83` · tlag | 0.33 | hr | 1188.0 | [h] | not captured | exact (1.0) | Lalonde_1996:abstract | — | not captured |
| Cl/F | `Q27` · CL/F | 4.42 | 1/hr | not captured | [1] / [h] | not captured | exact (1.0) | Lalonde_1996:abstract, Lalonde_1996:abstract | — | not captured |
| Vc/F | `Q290` · V1/F | 89.8 | 1 | not captured | [1] | not captured | exact (1.0) | Lalonde_1996:abstract | — | not captured |
| mean terfenadine Cmax | `Q32` · Cmax | 1.54 | ng/ml | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Lalonde_1996:abstract | — | not captured |
| Tmax | `Q56` · tmax | 1.3 | hr | 4680.0 | [h] | not captured | exact (1.0) | Lalonde_1996:abstract | — | not captured |
| t1/2 lambda Z | `Q57` · t1/2z | 15.1 | hr | 54360.0 | [h] | not captured | llm_corrected (0.6) | Lalonde_1996:abstract | — | not captured |
| V lambda Z/F | `Q64` · V2 | 119.2 | 1 | not captured | [1] | not captured | llm_corrected (0.6) | Lalonde_1996:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cl/F' → Q27 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Vc/F' → Q290 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V lambda Z/F' → Q64 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=terfenadine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lalonde_1996_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 4.42 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 1.54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 2.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean terfenadine cmax]` | 1.54 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[population mean ka]` | 2.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 lambda z]` | 15.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 lambda z]` | not captured | 15.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | not captured | 0.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 1.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v lambda z/f]` | 119.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 89.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | terfenadine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | terfenadine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | 1 / [time] | 1/hr | not captured | not captured | ['Lalonde_1996:abstract', 'Lalonde_1996:abstract'] |
| C5_dimension_Q290 | fail | dimensionless | 1 | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q64 | fail | dimensionless | 1 | not captured | not captured | ['Lalonde_1996:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Lalonde_1996:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_terfenadine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lalonde_1996` / `Lalonde_1996::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:42 UTC</sub>
