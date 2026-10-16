<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadobutrol&quot;,&quot;href&quot;:&quot;drugs/drug_gadobutrol/&quot;},{&quot;label&quot;:&quot;Hahn_2009 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadobutrol — `Gadobutrol_Hahn2009_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Gadolinium’s reported Ct of 414 micromol/L is an exposure summary, not a fitted compartmental model with clearance and distribution volume.**

No volume or clearance — not a compartmental population PK model. The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was read, so summary statistics stood in for a fitted model; a structural-parameter dimensional mismatch was also recorded, but the affected parameter is not identified. Extracted — gadolinium: CLnorm 0.1 L/h/kg, Vnorm 0.2 L/kg, Ct 414 micromol/L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has gadolinium, the second reading gadobutrol; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `gadobutrol`, measured `gadolinium`.

## Citation
Hahn G et al., Pharmacokinetics and safety of gadobutr…, Investigative radiology (2009)
  ·  DOI: [10.1097/RLI.0b013e3181bfe2d2](https://doi.org/10.1097/RLI.0b013e3181bfe2d2)

<div class="pk-model-meta" hidden drug="gadobutrol" model-id="Gadobutrol_Hahn2009_reference" status="rejected" stale="false" population="pediatric patients aged 2 to 17 years undergoing contrast-enhanced MRI or MR angiography" measured-compound="gadolinium" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| body weight-normalized total body clearance (all ages) | `Q354` · CLnorm | 0.1 | L/h/kg | 1.944444444444445e-06 | [l] / [[h] · [kg]] | not captured | llm_corrected (0.6) | Hahn_2009:abstract | — | not captured |
| body weight-normalized median estimates of total volume of distribution (for all ages) | `Q352` · Vnorm | 0.2 | L/kg | 0.014 | [l] / [kg] | not captured | llm_corrected (0.6) | Hahn_2009:abstract | — | not captured |
| Median gadolinium plasma concentrations at 20 minutes postinjection (13 kg subject) | `Q75` · Ct | 414 | micromol/L | not captured | [µM] / [l] | not captured | llm (0.6) | Hahn_2009:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q354 ('body weight-normalized total body clearance (in the 2 to 6 year age group)', value 0.13) — already have one for this compound
- dropped duplicate Q354 ('body weight-normalized total body clearance (in the 7 to 11 year age group)', value 0.1) — already have one for this compound
- dropped duplicate Q354 ('body weight-normalized total body clearance (in the 12 to 17 year age group)', value 0.09) — already have one for this compound
- dropped duplicate Q352 ('body weight-normalized median estimates of total volume of distribution (in the 2 to 6 year age group)', value 0.24) — already have one for this compound
- dropped duplicate Q352 ('body weight-normalized median estimates of total volume of distribution (in the 7 to 11 year age group)', value 0.19) — already have one for this compound
- dropped duplicate Q352 ('body weight-normalized median estimates of total volume of distribution (in the 12 to 17 year age group)', value 0.18) — already have one for this compound
- unit_dimension_mismatch: 'Median gadolinium plasma concentrations at 20 minutes postinjection (13 kg subject)' → Q75 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Median gadolinium plasma concentrations at 20 minutes postinjection (65 kg subject)' → Q75 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ('Median gadolinium plasma concentrations at 20 minutes postinjection (65 kg subject)', value 518) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadolinium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'gadolinium', not gadobutrol — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hahn_2009_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[body weight-normalized median estimates of total volume of distribution]` | not captured | 0.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[body weight-normalized median estimates of total volume of distribution]` | 0.2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[body weight-normalized total body clearance (l/h/kg) per age group]` | not captured | 0.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[body weight-normalized total body clearance]` | 0.1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[median gadolinium plasma concentrations at 20 minutes postinjection]` | 414 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | gadolinium | gadobutrol | mismatch |

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
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hahn_2009:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hahn_2009:abstract'] |
| C5_dimension_Q75 | fail | [substance] / [length] ** 3 | micromol/L | not captured | not captured | ['Hahn_2009:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_gadobutrol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hahn_2009` / `Hahn_2009::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:36 UTC</sub>
