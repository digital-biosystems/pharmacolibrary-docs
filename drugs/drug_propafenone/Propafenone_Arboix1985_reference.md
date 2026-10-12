<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;propafenone&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/&quot;},{&quot;label&quot;:&quot;Arboix_1985 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_150_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_150_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_300_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_300_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_300_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propafenone — `Propafenone_Arboix1985_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The propafenone two-compartment record was rejected because a structural parameter has a dimension mismatch and the model structure contains an unreachable compartment, with all five parameter values (t1/2α 2.8 min, t1/2β 80 min, kel 0.12 min⁻¹, Vdβ 1.6 l/kg, CL 1.03 l/h) disputed by a second reader.**

The record was built from the paper's abstract only, so reported summary statistics stood in for a fitted model. A dimension mismatch was flagged on a structural parameter, and the model structure contains an unreachable compartment with no path from the dose. A second reader returned no value for any of the five parameters — kel 0.12 min⁻¹, CL 1.03 l/h, t1/2α 2.8 min, t1/2β 80 min and Vdβ 1.6 l/kg — disagreeing with all of them. Extracted — propafenone: t1/2α 2.8 min, t1/2β 80 min, kel 0.12 min, -1, V2 1.6 1/kg, CL 1.03 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has propafenone, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:30.205576+00:00) predates the upstream re-run (2026-10-06 04:13:48.856782+00:00). Current validate status: `rejected`.

## Citation
Arboix M et al., Pharmacokinetics of intravenous propafe…, Methods and findings in exp… (1985)

<div class="pk-model-meta" hidden drug="propafenone" model-id="Propafenone_Arboix1985_reference" status="rejected" stale="true" population="patients with paroxysmal supraventricular tachycardia" measured-compound="propafenone" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2 alpha | `Q59` · t1/2α | 2.8 | min | 168.0 | [min] | not captured | llm_corrected (0.6) | Arboix_1985:abstract | — | not captured |
| t 1/2 beta | `Q60` · t1/2β | 80 | min | 4800.0 | [min] | not captured | llm_corrected (0.6) | Arboix_1985:abstract | — | not captured |
| Kel | `Q47` · kel | 0.12 | 1/h | 3.3333333333333335e-05 | 1/h | not captured | exact (1.0) | Arboix_1985:abstract | — | not captured |
| Vd beta | `Q64` · V2 | 1.6 | 1/kg | not captured | [1] / [kg] | not captured | llm_corrected (0.6) | Arboix_1985:abstract | — | not captured |
| Cl | `Q22` · CL | 1.03 | 1/h | not captured | [1] / [h] | not captured | exact (1.0) | Arboix_1985:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'min, -1' (kel)
- unit_dimension_mismatch: 'Vd beta' → Q64 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Cl' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'AUR' — extend the ontology if this is a real PK parameter (source ['Arboix_1985:abstract'])
- implicit units: 'Kel' → 1/h (from the popPK convention: 'Elimination rate constants (Kel) are first-order rate constants, which are conventionally expressed in reciprocal time u')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propafenone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Arboix_1985_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 1.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 1.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kel]` | 0.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kel]` | not captured | 0.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 alpha]` | 2.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 alpha]` | not captured | 2.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 beta]` | 80 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 beta]` | not captured | 80 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd beta]` | 1.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd beta]` | not captured | 1.6 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | propafenone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | propafenone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | 1 / [time] | 1/h | not captured | not captured | ['Arboix_1985:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Arboix_1985:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Arboix_1985:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Arboix_1985:abstract'] |
| C5_dimension_Q64 | fail | dimensionless | 1/kg | not captured | not captured | ['Arboix_1985:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.03 | not captured | not captured | ['Arboix_1985:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_propafenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Arboix_1985` / `Arboix_1985::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 04:13 UTC</sub>
