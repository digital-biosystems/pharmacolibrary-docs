<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;mercaptopurine&quot;,&quot;href&quot;:&quot;drugs/drug_mercaptopurine/&quot;},{&quot;label&quot;:&quot;Jost_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mercaptopurine — `Mercaptopurine_Jost2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected: the mercaptopurine/methotrexate record lacks any distribution volume and clearance, and its metabolism links to 6-thioguanine nucleotides and methotrexate polyglutamates 2 to 7 are unconnected to the dose.**

The record is an exposure/outcome paper for children with acute lymphoblastic leukemia, measuring absolute neutrophil count, with only ktr (7.19), slope (67.8), γ (16.5) and an additive error (0.226) reported; no volume or clearance/elimination parameters exist, so it is not a compartmental population PK model. The structure check also found an unreachable compartment or unlinked metabolite: the metabolism links from 6-mercaptopurine to 6-thioguanine nucleotides and from methotrexate to methotrexate polyglutamates 2 to 7 have no path from the dose. A second reader disagreed on the dose compound, primary analyte, the links, and the parameter identities for ktr and γ, but these disagreements do not change the missing PK parameters. Extracted — mercaptopurine: ktr 7.19, slope 67.8, t1/2γ 16.5, add_error 0.226.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 6-mercaptopurine and methotrexate, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:40.951262+00:00) predates the upstream re-run (2026-10-07 16:51:54.282158+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `6-mercaptopurine and methotrexate`, measured `absolute neutrophil count`.

## Citation
Jost F et al., Model-Based Simulation of Maintenance T…, Frontiers in physiology (2020)
  ·  DOI: [10.3389/fphys.2020.00217](https://doi.org/10.3389/fphys.2020.00217)

## Model component
<dbs-pgx drug="mercaptopurine" model-id="Mercaptopurine_Jost2020_reference" status="rejected" stale="true" population="children with acute lymphoblastic leukemia" measured-compound="absolute neutrophil count" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k tr | `Q338` · ktr | 7.19 | not captured | not captured | not captured | not captured | llm (0.5) | tab_4:row3:col1, tab_4:row3:col2, tab_4:row8:col1, tab_4:row8:col2 | — | not captured |
| slope | `Q335` · slope | 67.8 | not captured | not captured | not captured | not captured | exact (1.0) | tab_4:row4:col1, tab_4:row4:col2, tab_4:row9:col1, tab_4:row9:col2 | — | not captured |
| γ | `Q89` · t1/2γ | 16.5 | not captured | not captured | not captured | not captured | llm (0.5) | tab_4:row5:col1, tab_4:row5:col2, tab_4:row10:col1, tab_4:row10:col2 | — | not captured |
| Proportional additive error | `Q317` · add_error | 0.226 | not captured | not captured | not captured | not captured | boundary (0.8) | tab_4:row11:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Base' — extend the ontology if this is a real PK parameter (source ['tab_4:row2:col1', 'tab_4:row2:col2', 'tab_4:row7:col1', 'tab_4:row7:col2'])
- dropped unlinked row (NIL): 'Mean absolute error' — extend the ontology if this is a real PK parameter (source ['tab_4:row13:col1', 'tab_4:row13:col2'])
- dropped unlinked row (NIL): 'Root mean squared error' — extend the ontology if this is a real PK parameter (source ['tab_4:row14:col1', 'tab_4:row14:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=absolute neutrophil count
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- review gap-fill skipped: this record measures 'absolute neutrophil count', not mercaptopurine — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_4:row11:col2 = '0.226 (FIXED)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.059 (1/17 fields) | 16 |
| `gpt-oss:120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `model.links` | [['6-mercaptopurine', '6-thioguanine nucleotides', 'metabolism'], ['methotrexate', 'methotrexate polyglutamates 2 to 7', 'metabolism']] | [['6-mercaptopurine', '6-thioguanine nucleotides', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | 0.22 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm3]` | not captured | 0.019 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k tr]` | 7.19 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` | not captured | 12.72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 31.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kma]` | not captured | 2.3765 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kme]` | not captured | 9.9216 | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional additive error]` | 0.226 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[slope]` | 67.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[x6tgn]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[xpr]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[γ]` | 16.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 6-mercaptopurine and methotrexate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | absolute neutrophil count | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [['6-mercaptopurine', '6-thioguanine nucleotides', 'metabolism'], ['methotrexate', 'methotrexate polyglutamates 2 to 7', 'metabolism']] | [['6mp', '6-tgn', 'metabolism'], ['mtx', 'mtxpg2-7', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[k tr].parameter_id` | Q338 | Q306 | mismatch |
| `gpt-oss:120b` | `parameters[γ].parameter_id` | Q89 | Q343 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | 6-mercaptopurine and methotrexate | 6MP, MTX | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | absolute neutrophil count | 6MP | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q317 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_4:row11:col1'] |
| C5_unit_missing_Q338 | fail | 1 / [time] | not captured | not captured | not captured | ['tab_4:row3:col1', 'tab_4:row3:col2', 'tab_4:row8:col1', 'tab_4:row8:col2'] |
| C5_unit_missing_Q89 | fail | [time] | not captured | not captured | not captured | ['tab_4:row5:col1', 'tab_4:row5:col2', 'tab_4:row10:col1', 'tab_4:row10:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mercaptopurine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jost_2020` / `Jost_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:51 UTC</sub>
