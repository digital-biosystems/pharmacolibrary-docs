<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;Ding_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_Ding1979_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0), gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The azathioprine record was rejected because the 8-hydroxymercaptopurine metabolite has no path from the dose (an unlinked metabolite), and the model was built from the paper's abstract only, so summary statistics stood in for a fitted model.**

The azathioprine model forms two metabolites, 6-mercaptopurine and 8-hydroxymercaptopurine, but 8-hydroxymercaptopurine was formed with no compartment (n_cmt: 0) and no link parameter, leaving it unreachable from the dose. Because only the abstract was read, the reported values for 6-mercaptopurine — terminal half-life 41.6 min, apparent clearance 48.4 ml/min/kg, apparent volume of distribution 1.76 liters/kg — are summary statistics rather than a fitted model. A second reader also disagreed on the dose compound (azathioprine), the primary analyte, the relation of azathioprine to 6-mercaptopurine (hydrolysis versus metabolism), the parameterization (mechanistic versus apparent), and could not confirm the three parameter values. Extracted — 6-mercaptopurine: t1/2z 41.6 min, CLm,norm/F 48.4 ml/min/kg, Vm,norm/F 1.76 liters/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has azathioprine, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:24:06.160485+00:00) predates the upstream re-run (2026-10-06 23:43:07.897381+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `azathioprine`, measured `6-mercaptopurine`.

## Citation
Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979)

<div class="pk-model-meta" hidden drug="azathioprine" model-id="Azathioprine_Ding1979_reference" status="rejected" stale="true" population="rhesus monkeys" measured-compound="6-mercaptopurine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** CLm,norm/F, Vm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| mean terminal half-life | `Q57` · t1/2z | 41.6 | min | 2496.0 | [min] | not captured | llm (0.6) | Ding_1979:abstract | — | not captured |
| plasma clearance (CLp) | `Q375` · CLm,norm/F | 48.4 | ml/min/kg | 5.6466666666666666e-05 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Ding_1979:abstract | — | not captured |
| volume of distribution (Vdss) | `Q376` · Vm,norm/F | 1.76 | liters/kg | 0.1232 | [l] / [kg] | not captured | exact (1.0) | Ding_1979:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- metabolite 6-mercaptopurine: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- metabolite 6-mercaptopurine: Q61→Q376 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=6-mercaptopurine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures '6-mercaptopurine', not azathioprine — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ding_1979_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/10 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.0 (0/10 fields) | 10 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['azathioprine', '6-mercaptopurine', 'metabolism'], ['azathioprine', '8-hydroxymercaptopurine', 'metabolism']] | [['azathioprine', '6-mercaptopurine', 'hydrolysis'], ['azathioprine', '8-hydroxymercaptopurine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[mean terminal half-life]` | not captured | 41.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean terminal half-life]` | 41.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | not captured | 48.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | 48.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | azathioprine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 6-mercaptopurine | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [['azathioprine', '6-mercaptopurine', 'metabolism'], ['azathioprine', '8-hydroxymercaptopurine', 'metabolism']] | [['azathioprine', '6-mercaptopurine', 'hydrolysis'], ['azathioprine', '8-hydroxymercaptopurine', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[mean terminal half-life]` | 41.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean terminal half-life]` | not captured | 41.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma clearance]` | 48.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma clearance]` | not captured | 48.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | azathioprine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 6-mercaptopurine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ding_1979:abstract'] |
| C5_dimension_Q376 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ding_1979:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Ding_1979:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_azathioprine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_1979` / `Ding_1979::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:43 UTC</sub>
