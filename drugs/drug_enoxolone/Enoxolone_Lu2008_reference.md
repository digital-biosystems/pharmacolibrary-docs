<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;,&quot;href&quot;:&quot;drugs/drug_enoxolone/&quot;},{&quot;label&quot;:&quot;Lu_2008 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enoxolone — `Enoxolone_Lu2008_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record was rejected because glycyrrhetic acid’s distribution volume, V, was 2.427 L/kg, a structural parameter with a dimensional mismatch.

<div class="pk-model-meta" hidden drug="enoxolone" model-id="Enoxolone_Lu2008_reference" status="rejected" stale="false" population="rats" measured-compound="glycyrrhetic acid (GA; enoxolone)" parameterization="mechanistic" topology="1C"></div>

## Citation
Lu Y, Li J, Du SY. [Study on pharmacokinetics of glycyrrhetic acid in rats by RP-HPLC]. Zhongguo Zhong yao za zhi = Zhongguo zhongyao zazhi = China journal of Chinese materia medica 33(11):1294–1296 (2008).

## Population and dosing

**Population:** rats.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2alpha | t1/2α | 0.153 | h |
| t1/2beta | t1/2β | 2.365 | h |
| C(max) | Cmax | 2.074 | mg x L(-1) |
| CL | CL | 0.715 | L/h |
| V(d) | V | 2.427 | L x kg(-1) |
| AUC(0-6 h) | AUC | 1.302 | mg x h(-1) x L(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because glycyrrhetic acid’s distribution volume, V, was 2.427 L/kg, a structural parameter with a dimensional mismatch.**

The reported V is the volume of distribution, and the finding identifies a dimension mismatch on a structural parameter. The record was built from the abstract alone, so the reported summary statistics stood in for a fitted model. Extracted — glycyrrhetic acid (GA; enoxolone): t1/2α 0.153 h, t1/2β 2.37 h, Cmax 2.07 mg x L(-1), CL 0.715 L/h, V 2.43 L x kg(-1), AUC 1.3 mg x h(-1) x L(-1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has glycyrrhetic acid (GA; enoxolone), the second reading glycyrrhetic acid; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2alpha | `Q59` · t1/2α | 0.153 | h | 550.8 | s | h | llm_confirmed (0.6) | Lu_2008:abstract |
| t1/2beta | `Q60` · t1/2β | 2.365 | h | 8514 | s | h | llm_confirmed (0.6) | Lu_2008:abstract |
| C(max) | `Q32` · Cmax | 2.074 | mg x L(-1) |  |  | mg/l | llm (0.6) | Lu_2008:abstract |
| CL | `Q22` · CL | 0.715 | L/h | 1.986e-07 | m3/s | L/h | exact (1) | Lu_2008:abstract |
| V(d) | `Q61` · V | 2.427 | L x kg(-1) |  |  | l/kg | exact (1) | Lu_2008:abstract |
| AUC(0-6 h) | `Q88` · AUC | 1.302 | mg x h(-1) x L(-1) |  |  | mg/(h·l) | exact (1) | Lu_2008:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mg x L(-1)' (Cmax)
- unit_dimension_unknown: 'L x h(-1) x kg(-1)' (CL)
- unit_dimension_mismatch: 'V(d)' → Q61 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_unknown: 'mg x h(-1) x L(-1)' (AUC)
- implicit units: 'CL' → L/h (from the popPK convention: 'Clearance is conventionally reported in L/h in population PK, and 0.715 is consistent with that scale.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycyrrhetic acid (GA; enoxolone)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'glycyrrhetic acid (GA; enoxolone)' (LLM) — left in mass units
- molar mass: none found for 'glycyrrhetic acid (GA; enoxolone)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Lu_2008_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.125 (2/16 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc]` | 1.302 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[c]` | 2.074 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 0.715 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2alpha]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2alpha]` | 0.153 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2beta]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2beta]` | 2.365 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` | 2.427 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | glycyrrhetic acid (GA; enoxolone) | glycyrrhetic acid | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | glycyrrhetic acid (GA; enoxolone) | glycyrrhetic acid | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lu_2008:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Lu_2008:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Lu_2008:abstract'] |
| C5_dimension_Q61 | fail | [luminosity] / [length] ** 2 | L x kg(-1) | ['Lu_2008:abstract'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | mg x L(-1) | ['Lu_2008:abstract'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | mg x h(-1) x L(-1) | ['Lu_2008:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.715 | ['Lu_2008:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.715 L/h | ['Lu_2008:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benoxolone%5D%20Enoxolone_Lu2008_reference&body=Drug%3A%20enoxolone%0ARecord%3A%20Enoxolone_Lu2008_reference%0APaper%3A%20Lu_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enoxolone/Enoxolone_Lu2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 13:37 UTC</sub>
