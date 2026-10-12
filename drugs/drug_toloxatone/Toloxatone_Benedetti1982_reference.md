<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;toloxatone&quot;,&quot;href&quot;:&quot;drugs/drug_toloxatone/&quot;},{&quot;label&quot;:&quot;Benedetti_1982 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Toloxatone_Vistelle1992_reference&quot;,&quot;label&quot;:&quot;Vistelle_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# toloxatone — `Toloxatone_Benedetti1982_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has toloxatone, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:41:49.969037+00:00) predates the upstream re-run (2026-10-06 23:51:35.215545+00:00). Current validate status: `rejected`.

## Citation
Benedetti MS et al., Pharmacokinetics of toloxatone in man f…, Arzneimittel-Forschung (1982)

<div class="pk-model-meta" hidden drug="toloxatone" model-id="Toloxatone_Benedetti1982_reference" status="rejected" stale="true" population="healthy adult volunteers" measured-compound="toloxatone" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Protein binding | `Q46` · fu | 50 | % | not captured | [%] | not captured | exact (1.0) | Benedetti_1982:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Cmax (p.o.) | Q32 | not captured | exact |
| tmax (p.o.) | Q56 | not captured | exact |
| t 1/2 beta (p.o.) | Q60 | not captured | llm_corrected |
| Plasma clearance | Q354 | not captured | llm_corrected |
| apparent volume of distribution | Q76 | not captured | exact |
| availability of the gelatin capsule | Q41 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax (i.v.)', value None) — already have one for this compound
- dropped duplicate Q60 ('t 1/2 beta (i.v.)', value None) — already have one for this compound
- unit_dimension_mismatch: 'Plasma clearance' → Q354 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=toloxatone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Benedetti_1982_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (2/16 fields) | 14 |
| `gpt-oss:120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[availability of the gelatin capsule]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding to plasma proteins]` | not captured | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[protein binding]` | 50 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 beta]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | toloxatone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | toloxatone | unknown | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma clearance]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 beta]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Benedetti_1982:abstract'] |
| C5_dimension_Q354 | fail | [length] ** 3 * [mass] / [time] | l/h . kg | not captured | not captured | ['Benedetti_1982:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Benedetti_1982:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Benedetti_1982:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Benedetti_1982:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_toloxatone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Benedetti_1982` / `Benedetti_1982::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:51 UTC</sub>
