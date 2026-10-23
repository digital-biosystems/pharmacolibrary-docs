<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Wang_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_Wang2010_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 01:00 UTC (Rejected), but the paper was screened again on 2026-10-07 14:38 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="flurbiprofen" model-id="Flurbiprofen_Wang2010_reference" status="rejected" stale="true" population="general anaesthesia patients undergoing surgery" measured-compound="flurbiprofen" parameterization="apparent" topology="2C"></div>

## Citation
Wang CL, Lin WW, Gong SJ, Huang PF. [Population pharmacokinetic modeling of flurbiprofen]. Yao xue xue bao = Acta pharmaceutica Sinica 45(11):1427–1432 (2010).

## Population and dosing

**Population:** general anaesthesia patients undergoing surgery · condition surgery (dentofacial surgery and otorhinolaryngology) · age group adult · n = 23.

**Dosed compound ≠ measured compound:** dosed flurbiprofen axetil, measured flurbiprofen.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L x h(-1)) | CLm/F | 1.28 | L x h(-1) |
| V1 (L) | V1 | 5.03 | L |
| Q (L x h(-1)) | Q | 8.5 | L x h(-1) |
| V2 (L) | V2 | 4.39 | L |
| CL | CLm/F | 1.32 | L x h(-1) |
| V1 | V1 | 5.23 | L |
| Q | Q | 8.45 | L x h(-1) |
| V2 | V2 | 4.37 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has none, the second reading 1.32; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L x h(-1)) | `Q351` · CLm/F | 1.28 | L x h(-1) |  |  | l/h | exact (1) | Wang_2010:abstract, Wang_2010:abstract, Wang_2010:abstract |
| V1 (L) | `Q63` · V1 | 5.03 | L | 0.00503 | m3 | l | exact (1) | Wang_2010:abstract, Wang_2010:abstract, Wang_2010:abstract |
| Q (L x h(-1)) | `Q30` · Q | 8.5 | L x h(-1) |  |  | l/h | exact (1) | Wang_2010:abstract, Wang_2010:abstract, Wang_2010:abstract |
| V2 (L) | `Q64` · V2 | 4.39 | L | 0.00439 | m3 | l | exact (1) | Wang_2010:abstract, Wang_2010:abstract, Wang_2010:abstract |
| CL | `Q351` · CLm/F | 1.32 | L x h(-1) |  |  | l/h | exact (1) | Wang_2010:abstract |
| V1 | `Q63` · V1 | 5.23 | L | 0.00523 | m3 | l | exact (1) | Wang_2010:abstract |
| Q | `Q30` · Q | 8.45 | L x h(-1) |  |  | l/h | exact (1) | Wang_2010:abstract |
| V2 | `Q64` · V2 | 4.37 | L | 0.00437 | m3 | l | exact (1) | Wang_2010:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL (L x h(-1))' → Q22 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Q (L x h(-1))' → Q30 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CL' → Q22 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Q' → Q30 (unit '[luminosity] / [length] ** 2 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- metabolite flurbiprofen: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=flurbiprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 16 linked by role; re-tagged flurbiprofen→parent ×12
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wang_2010_metadata.yaml (16 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.357 (5/14 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl (l x h(-1))]` | 1.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 1.32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 1.32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q (l x h(-1))]` | 8.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 8.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 8.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 5.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1].value` | 5.03 | 5.23 | mismatch |
| `gpt-oss-120b` | `parameters[v2]` | 4.37 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 / [time] | L x h(-1) | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C5_dimension_Q30 | fail | [luminosity] / [length] ** 2 / [time] | L x h(-1) | ['Wang_2010:abstract'] |
| C5_dimension_Q351 | fail | [luminosity] / [length] ** 2 / [time] | L x h(-1) | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C5_dimension_Q351 | fail | [luminosity] / [length] ** 2 / [time] | L x h(-1) | ['Wang_2010:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Wang_2010:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Wang_2010:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.03 L | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.23 L | ['Wang_2010:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.39 L | ['Wang_2010:abstract', 'Wang_2010:abstract', 'Wang_2010:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.37 L | ['Wang_2010:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflurbiprofen%5D%20Flurbiprofen_Wang2010_reference&body=Drug%3A%20flurbiprofen%0ARecord%3A%20Flurbiprofen_Wang2010_reference%0APaper%3A%20Wang_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flurbiprofen/Flurbiprofen_Wang2010_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:38 UTC</sub>
