<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_abemaciclib/&quot;},{&quot;label&quot;:&quot;Fleisher_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abemaciclib — `Abemaciclib_Fleisher2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The hydrolysis-link parameter for doxorubicin is absent (none), leaving doxorubicin unreachable and causing rejection.

<div class="pk-model-meta" hidden drug="abemaciclib" model-id="Abemaciclib_Fleisher2021_reference" status="rejected" stale="false" population="clinical subjects from published pharmacokinetic studies; clinical model translated to TNBC patients" measured-compound="abemaciclib; doxorubicin; liposomal doxorubicin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Fleisher B, Lezeau J, Werkman C, Jacobs B, Ait-Oudhia S. In vitro to Clinical Translation of Combinatorial Effects of Doxorubicin and Abemaciclib in Rb-Positive Triple Negative Breast Cancer: A Systems-Based Pharmacokinetic/Pharmacodynamic Modeling Approach. Breast cancer (Dove Medical Press) 13:87–105 (2021).
  ·  DOI: [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161)

## Population and dosing

**Population:** clinical subjects from published pharmacokinetic studies; clinical model translated to TNBC patients · condition triple-negative breast cancer (clinical translation).

**Dosing:** 25, 50, 60, 75 mg/m2, iv, multiple, every 504 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka 1/h) | kabs | 0.31 | 1/h |
| CL (L/h) | CL | 21.7 | L/h |
| Vc (L) | V1 | 592 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The hydrolysis-link parameter for doxorubicin is absent (none), leaving doxorubicin unreachable and causing rejection.**

The record specifies hydrolysis from liposomal doxorubicin to doxorubicin, but gives that link no parameter value. The finding is that doxorubicin is unlinked from the dose. Extracted — abemaciclib: kabs 0.31 1/h, CL 21.7 L/h, V1 592 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has abemaciclib; doxorubicin; liposomal doxorubicin, the second reading abemaciclib; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka 1/h) | `Q49` · kabs | 0.31 | 1/h | 8.611e-05 | 1/s | 1/h | llm_confirmed (0.6) | t0002:row2:col6, t0002:row2:col7, t0002:row2:col8, t0002:row2:col9 |
| CL (L/h) | `Q22` · CL | 21.7 | L/h | 6.028e-06 | m3/s | l/h | exact (1) | t0002:row6:col6, t0002:row6:col7, t0002:row6:col8, t0002:row6:col9 |
| Vc (L) | `Q63` · V1 | 592 | L | 0.592 | m3 | l | exact (1) | t0002:row10:col6, t0002:row10:col7, t0002:row10:col8, t0002:row10:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'ηka (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ηCL (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ηVc (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'ka 1/h)' → 1/h (from the paper text: 'The parameter is listed as “ka 1/h)” and defined as “kabs: Absorption rate constant.”')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abemaciclib; doxorubicin; liposomal doxorubicin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t0002:row16:col1 = 'IIV of Q2'
- unparsed cell t0002:row17:col1 = 'IIV of Q3'
- unparsed cell t0002:row20:col1 = 'IIV of Vp2'
- unparsed cell t0002:row21:col1 = 'IIV of Vp3'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['liposomal doxorubicin', 'doxorubicin', 'hydrolysis']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[vc].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[ηka]` |  | -0.002 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | abemaciclib; doxorubicin; liposomal doxorubicin | abemaciclib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | abemaciclib; doxorubicin; liposomal doxorubicin | abemaciclib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0002:row6:col6', 't0002:row6:col7', 't0002:row6:col8', 't0002:row6:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['t0002:row2:col6', 't0002:row2:col7', 't0002:row2:col8', 't0002:row2:col9'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t0002:row10:col6', 't0002:row10:col7', 't0002:row10:col8', 't0002:row10:col9'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21.7 | ['t0002:row6:col6', 't0002:row6:col7', 't0002:row6:col8', 't0002:row6:col9'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.7 L/h | ['t0002:row6:col6', 't0002:row6:col7', 't0002:row6:col8', 't0002:row6:col9'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 592 L | ['t0002:row10:col6', 't0002:row10:col7', 't0002:row10:col8', 't0002:row10:col9'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babemaciclib%5D%20Abemaciclib_Fleisher2021_reference&body=Drug%3A%20abemaciclib%0ARecord%3A%20Abemaciclib_Fleisher2021_reference%0APaper%3A%20Fleisher_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abemaciclib/Abemaciclib_Fleisher2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:15 UTC</sub>
