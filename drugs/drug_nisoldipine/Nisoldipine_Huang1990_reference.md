<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nisoldipine&quot;,&quot;href&quot;:&quot;drugs/drug_nisoldipine/&quot;},{&quot;label&quot;:&quot;Huang_1990 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nisoldipine — `Nisoldipine_Huang1990_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance unit min.kg is dimensionally invalid, causing a structural parameter mismatch for m-nisoldipine.**

The record lists total clearance as 9 min.kg, which is not a valid pharmacokinetic unit. This dimensional error triggered a rejection for a structural parameter mismatch. Additionally, the record was built from the abstract alone, so summary statistics stood in for a fitted model. Extracted — m-nisoldipine: t1/2α 4.3 min, t1/2β 63.6 min, V 0.805 L/kg, CL 9 min.kg, t1/2z 84.8 min, tmax 31.2 min, Cmax 50 micrograms/L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has m-nisoldipine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-29 18:27:18.773957+00:00) predates the upstream re-run (2026-10-07 04:45:58.110721+00:00). Current validate status: `rejected`.

## Citation
Huang Y et al., Pharmacokinetics of m-nisoldipine in ra…, Zhongguo yao li xue bao = A… (1990)

<div class="pk-model-meta" hidden drug="nisoldipine" model-id="Nisoldipine_Huang1990_reference" status="rejected" stale="true" population="rabbits and rats" measured-compound="m-nisoldipine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T 1/2 alpha | `Q59` · t1/2α | 4.3 | min | 258.0 | [min] | not captured | llm_corrected (0.6) | Huang_1990:abstract, Huang_1990:abstract | — | not captured |
| T 1/2 beta | `Q60` · t1/2β | 63.6 | min | 3816.0 | [min] | not captured | llm_corrected (0.6) | Huang_1990:abstract, Huang_1990:abstract | — | not captured |
| Vd | `Q61` · V | 0.805 | L/kg | 0.056350000000000004 | [l] / [kg] | not captured | exact (1.0) | Huang_1990:abstract, Huang_1990:abstract, Huang_1990:abstract | — | not captured |
| Cl | `Q22` · CL | 9 | min.kg | not captured | [min] · [kg] | not captured | exact (1.0) | Huang_1990:abstract, Huang_1990:abstract, Huang_1990:abstract | — | not captured |
| T 1/2 | `Q57` · t1/2z | 84.8 | min | 5088.0 | [min] | not captured | space_fold (0.95) | Huang_1990:abstract | — | not captured |
| Tmax | `Q56` · tmax | 31.2 | min | 1872.0 | [min] | not captured | exact (1.0) | Huang_1990:abstract | — | not captured |
| Cmax | `Q32` · Cmax | 49.97 | micrograms/L | not captured | [µg] / [l] | not captured | exact (1.0) | Huang_1990:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cl' → Q22 (unit '[time] * [mass]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=m-nisoldipine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'm-nisoldipine' (LLM) — left in mass units
- molar mass: none found for 'm-nisoldipine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Huang_1990_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |
| `gpt-oss:120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | not captured | 49.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 49.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 alpha]` | not captured | 4.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 alpha]` | 4.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 beta]` | not captured | 63.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 beta]` | 63.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2]` | not captured | 84.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2]` | 84.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | not captured | 31.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 31.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | not captured | 0.805 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 0.805 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | m-nisoldipine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | m-nisoldipine | unknown | mismatch |

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
| C5_dimension_Q22 | fail | [time] * [mass] | min.kg | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract', 'Huang_1990:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Huang_1990:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Huang_1990:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Huang_1990:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract', 'Huang_1990:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.0 | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract', 'Huang_1990:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 56.4 L | not captured | not captured | ['Huang_1990:abstract', 'Huang_1990:abstract', 'Huang_1990:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nisoldipine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Huang_1990` / `Huang_1990::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:45 UTC</sub>
