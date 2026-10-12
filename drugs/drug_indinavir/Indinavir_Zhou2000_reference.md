<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;indinavir&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/&quot;},{&quot;label&quot;:&quot;Zhou_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indinavir_Cressey2011_reference&quot;,&quot;label&quot;:&quot;Cressey_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Cressey2011_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Indinavir_Csajka2004_reference&quot;,&quot;label&quot;:&quot;Csajka_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Csajka2004_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Indinavir_Kappelhoff2005_reference&quot;,&quot;label&quot;:&quot;Kappelhoff_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indinavir/Indinavir_Kappelhoff2005_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# indinavir — `Indinavir_Zhou2000_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Indinavir clearance unit (l/h) mismatched with concentration (micromol/L) and AUC (mg·h/L), making the model mathematically inconsistent.**

The clearance is reported as 10.5 l/h, while concentration is in micromol/L and AUC in mg·h/L, creating a dimensional conflict. The record is abstract-only, so summary statistics substitute for fitted parameters, leaving the unit incompatibility unresolved. This mismatch prevents consistent mass-balance calculation across the one-compartment structure. Extracted — indinavir: Ct 0.42 micromol/l, Cmax 9.51 micromol/l, AUCt 29.6 mg*h/L, t1/2z 1.5 h, CL 10.5 l h -1, V 96.6 l, kabs 0.871 h -1, tlag 0.485 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Zhou XJ et al., Plasma population pharmacokinetics and…, AIDS (London, England) (2000)
  ·  DOI: [10.1097/00002030-200012220-00008](https://doi.org/10.1097/00002030-200012220-00008)

<div class="pk-model-meta" hidden drug="indinavir" model-id="Indinavir_Zhou2000_reference" status="rejected" stale="false" population="HIV-1-infected adults" measured-compound="indinavir" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean model-predicted plasma IDV level at 8 h | `Q75` · Ct | 0.42 | micromol/l | not captured | [µM] / [l] | not captured | llm (0.6) | Zhou_2000:abstract | — | not captured |
| maximal level | `Q32` · Cmax | 9.51 | micromol/l | not captured | [µM] / [l] | not captured | llm (0.6) | Zhou_2000:abstract | — | not captured |
| area under the plasma level-time curve up to 8 h | `Q19` · AUCt | 29.56 | mg*h/L | not captured | mg*h/L | not captured | llm (0.6) | Zhou_2000:abstract | — | not captured |
| plasma half-life | `Q57` · t1/2z | 1.5 | h | 5400.0 | [h] | not captured | llm (0.6) | Zhou_2000:abstract | — | not captured |
| Clearance | `Q22` · CL | 10.5 | l h -1 | 2.916666666666667e-06 | L/h | not captured | review_gapfill (0.7) | Kappelhoff_2005:review | — | not captured |
| volume of distribution | `Q61` · V | 96.6 | l | 0.09659999999999999 | L | not captured | review_gapfill (0.7) | Kappelhoff_2005:review | — | not captured |
| absorption rate constant | `Q49` · kabs | 0.871 | h -1 | 0.00024194444444444445 | 1/h | not captured | review_gapfill (0.7) | Kappelhoff_2005:review | — | not captured |
| absorption lag-time | `Q83` · tlag | 0.485 | h | 1746.0 | h | not captured | review_gapfill (0.7) | Kappelhoff_2005:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for CL from footnote/prose kept as documentation only (['Zhou_2000:abstract'])
- covariate category for V from footnote/prose kept as documentation only (['Zhou_2000:abstract'])
- unit_dimension_mismatch: 'Mean model-predicted plasma IDV level at 8 h' → Q75 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'maximal level' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'micromol/l x h' (AUCt)
- implicit units: 'area under the plasma level-time curve up to 8 h' → mg*h/L (from the popPK convention: 'No unit is provided in the text or table. In population PK, AUCt is typically reported as drug mass per concentration un')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indinavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Kappelhoff_2005's review values (primary lacked it)
- gap-filled Q61 (V) from Kappelhoff_2005's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kappelhoff_2005's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kappelhoff_2005's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Zhou_2000_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[absorption lag-time]` | 0.485 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.871 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 10.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean model-predicted plasma idv level at 8 h]` | 0.42 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma idv level at 8 h]` | not captured | 0.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution].value` | 96.6 | 1.74 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Zhou_2000:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kappelhoff_2005:review'] |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | micromol/l | not captured | not captured | ['Zhou_2000:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kappelhoff_2005:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Zhou_2000:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kappelhoff_2005:review'] |
| C5_dimension_Q75 | fail | [substance] / [length] ** 3 | micromol/l | not captured | not captured | ['Zhou_2000:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kappelhoff_2005:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.5 | not captured | not captured | ['Kappelhoff_2005:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.5 L/h | not captured | not captured | ['Kappelhoff_2005:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 96.6 L | not captured | not captured | ['Kappelhoff_2005:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_indinavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhou_2000` / `Zhou_2000::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:01 UTC</sub>
