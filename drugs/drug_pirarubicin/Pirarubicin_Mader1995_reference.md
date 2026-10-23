<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;pirarubicin&quot;,&quot;href&quot;:&quot;drugs/drug_pirarubicin/&quot;},{&quot;label&quot;:&quot;Mader_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirarubicin_Robert1988_reference&quot;,&quot;label&quot;:&quot;Robert_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pirarubicin — `Pirarubicin_Mader1995_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="pirarubicin" model-id="Pirarubicin_Mader1995_reference" status="rejected" stale="false" population="patients with advanced breast cancer" measured-compound="THP-ADM (pirarubicin)" parameterization="mechanistic" topology="1C"></div>

## Citation
Mader RM, Zilg H, Schlappack O, Steger GG, Baur M, Greifenberg B et al. Pharmacokinetics of 4'-O-tetrahydropyranyladriamycin given on a weekly schedule in patients with advanced breast cancer. Cancer chemotherapy and pharmacology 37(1-2):91–96 (1995).
  ·  DOI: [10.1007/BF00685634](https://doi.org/10.1007/BF00685634)

## Population and dosing

**Population:** patients with advanced breast cancer · condition advanced breast cancer · age group adult · n = 19.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| half-life of the first disposition phase (t1/2 alpha) | t1/2α | 3.15 | min |
| terminal elimination half-life (t1/2 gamma) | t1/2γ | 13.9 | h |
| mean area under the curve (AUC) of THP-ADM | AUC/dose | 12.2 | ng h ml-1mg-1 m-2 |
| mean plasma clearance | CLnorm | 86.9 | L/h/70 kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is pirarubicin's own; they describe THP-ADM (pirarubicin).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has THP-ADM (pirarubicin), the second reading 4'-O-tetrahydropyranyladriamycin; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| half-life of the first disposition phase (t1/2 alpha) | `Q59` · t1/2α | 3.15 | min | 189 | s | min | llm (0.6) | Mader_1995:abstract |
| terminal elimination half-life (t1/2 gamma) | `Q89` · t1/2γ | 13.9 | h | 5.004e+04 | s | h | llm (0.6) | Mader_1995:abstract |
| mean area under the curve (AUC) of THP-ADM | `Q189` · AUC/dose | 12.2 | ng h ml-1mg-1 m-2 |  |  | (h·ng·mg)/(ml·m-2) | llm_corrected (0.6) | Mader_1995:abstract |
| mean plasma clearance | `Q354` · CLnorm | 86.9 | L/h/70 kg | 2.414e-05 | m3/s | L/h | llm_corrected (0.6) | Mader_1995:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ng h ml-1mg-1 m-2' (AUC/dose)
- unit_dimension_unknown: '1h-1 m-2' (CLnorm)
- implicit units: 'mean area under the curve (AUC) of THP-ADM' — the LLM proposed 'h/L', whose dimension does not fit Q189; left unset
- implicit units: 'mean plasma clearance' → L/h/70 kg (from the popPK convention: 'This is clearance normalized to a 70 kg reference body size; L/h/70 kg is a conventional expression for standardized cle')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=THP-ADM (pirarubicin)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Mader_1995_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[half-life of the first disposition phase]` |  | 3.15 | only_one_extracted |
| `qwen3.8-27b` | `parameters[half-life of the first disposition phase]` | 3.15 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean area under the curve (auc) of thp-adm]` | 12.2 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean area under the curve]` |  | 12.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean plasma clearance]` |  | 86.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean plasma clearance]` | 86.9 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[terminal elimination half-life]` |  | 13.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[terminal elimination half-life]` | 13.9 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | THP-ADM (pirarubicin) | 4'-O-tetrahydropyranyladriamycin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | THP-ADM (pirarubicin) | 4'-O-tetrahydropyranyladriamycin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Mader_1995:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Mader_1995:abstract'] |
| C5_dimension_Q89 | pass | [time] |  | ['Mader_1995:abstract'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | ng h ml-1mg-1 m-2 | ['Mader_1995:abstract'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpirarubicin%5D%20Pirarubicin_Mader1995_reference&body=Drug%3A%20pirarubicin%0ARecord%3A%20Pirarubicin_Mader1995_reference%0APaper%3A%20Mader_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pirarubicin/Pirarubicin_Mader1995_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 19:43 UTC</sub>
