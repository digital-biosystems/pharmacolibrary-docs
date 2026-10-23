<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefazolin&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/&quot;},{&quot;label&quot;:&quot;Alli_2023 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefazolin_Ryan2022_reference&quot;,&quot;label&quot;:&quot;Ryan_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Ryan2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefazolin_Santavy2023_reference&quot;,&quot;label&quot;:&quot;Santavy_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Santavy2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefazolin — `Cefazolin_Alli2023_median`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cefazolin model rejected because the metabolite formation rate constant of 188.90 h-1 lacks a path from the dose.

<div class="pk-model-meta" hidden drug="cefazolin" model-id="Cefazolin_Alli2023_median" status="rejected" stale="false" population="adults undergoing cardiac valve replacement surgery with cardiopulmonary bypass" measured-compound="cefazolin" parameterization="mechanistic" topology="2C"></div>

## Citation
Alli A, Paruk F, Roger C, Lipman J, Calleemalay D, Wallis SC et al. Peri-operative pharmacokinetics of cefazolin prophylaxis during valve replacement surgery. PloS one 18(9):e0291425 (2023).
  ·  DOI: [10.1371/journal.pone.0291425](https://doi.org/10.1371/journal.pone.0291425)

## Population and dosing

**Population:** adults undergoing cardiac valve replacement surgery with cardiopulmonary bypass · condition cardiac valve replacement surgery · age group adult · n = n_subjects.

**Dosing:** 2000 mg, iv, multiple, every 4 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (L) | V1 | 3.41 | L |
| Vt (L) | V2 | 6.28 | L |
| kcp (h-1) | k12 | 4.59 | h-1 |
| kpc (h-1) | k21 | 2.35 | h-1 |
| kct (h-1) | kel | 143.84 | h-1 |
| ktc (h-1) | kfm | 188.90 | h-1 |
| Bmax (g/L) | Bmax | 0.87 | g/L |
| Cl | Cl | 3.00 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cefazolin model rejected because the metabolite formation rate constant of 188.90 h-1 lacks a path from the dose.**

The record defines a metabolite formation rate constant (kfm) but provides no subsequent compartment or elimination process for that metabolite. Consequently, the metabolite is an orphan with no path from the administered dose. Additionally, the gram per litre unit for the binding capacity parameter could not be converted to standard SI units. Extracted — cefazolin: V1 3.41 L, V2 6.28 L, k12 4.59 h-1, k21 2.35 h-1, kel 144 h-1, kfm 189 h-1, Bmax 0.87 g/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[kct].parameter_id`: this record has Q47, the second reading Q48; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | 3.41 | L | 0.00341 | m3 | l | exact (1) | pone.0291425.t002:row2:col5 |
| Vt (L) | `Q64` · V2 | 6.28 | L | 0.00628 | m3 | l | llm (0.6) | pone.0291425.t002:row3:col5 |
| kcp (h-1) | `Q301` · k12 | 4.59 | h-1 | 0.001275 | 1/s | 1/h | exact (1) | pone.0291425.t002:row4:col5 |
| kpc (h-1) | `Q302` · k21 | 2.35 | h-1 | 0.0006528 | 1/s | 1/h | exact (1) | pone.0291425.t002:row5:col5 |
| kct (h-1) | `Q47` · kel | 143.84 | h-1 | 0.03996 | 1/s | 1/h | llm (0.6) | pone.0291425.t002:row6:col5 |
| ktc (h-1) | `Q305` · kfm | 188.90 | h-1 | 0.05247 | 1/s | 1/h | llm (0.6) | pone.0291425.t002:row7:col5 |
| Bmax (g/L) | `Q332` · Bmax | 0.87 | g/L |  |  | g/l | exact (1) | pone.0291425.t002:row8:col5 |
| Cl | `Q900` · Cl | 3.00 | L/h | 8.333e-07 | m3/s |  |  | pone.0291425.t002:row1:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cl (L/h) | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'NS' — extend the ontology if this is a real PK parameter (source ['pone.0291425.t002:row9:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefazolin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- bound model equation to Q22 (CL): CL = TVCL*(90/SeCr)
- Q22 (CL) is equation-defined: value moved to equation-variable 'Cl (L/h)'; equation kept verbatim
- population split: 'median' subgroup of Alli_2023 (paper reports 2 populations: mean, median)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation CL = TVCL*(90/SeCr)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[kct].parameter_id` | Q47 | Q48 | mismatch |
| `gpt-oss-120b` | `parameters[ktc]` | 188.90 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vt].parameter_id` | Q64 | Q61 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pone.0291425.t002:row1:col5'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['pone.0291425.t002:row4:col5'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['pone.0291425.t002:row5:col5'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['pone.0291425.t002:row7:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pone.0291425.t002:row6:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pone.0291425.t002:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pone.0291425.t002:row3:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.41 L | ['pone.0291425.t002:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.28 L | ['pone.0291425.t002:row3:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefazolin%5D%20Cefazolin_Alli2023_median&body=Drug%3A%20cefazolin%0ARecord%3A%20Cefazolin_Alli2023_median%0APaper%3A%20Alli_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefazolin/Cefazolin_Alli2023_median%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:52 UTC</sub>
