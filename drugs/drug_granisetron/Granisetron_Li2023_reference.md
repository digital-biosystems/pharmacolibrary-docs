<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;granisetron&quot;,&quot;href&quot;:&quot;drugs/drug_granisetron/&quot;},{&quot;label&quot;:&quot;Li_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# granisetron — `Granisetron_Li2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-04 13:55 UTC); the status shown comes from the current checks. Granisetron's distribution volume (1.5462161 mL) and clearance (0.25423392 mL/h) are physiologically implausible for a healthy-adult model, indicating a unit or scale extraction error, so the record was rejected.

<div class="pk-model-meta" hidden drug="granisetron" model-id="Granisetron_Li2023_reference" status="rejected" stale="true" population="healthy adults" measured-compound="granisetron" parameterization="mechanistic" topology="1C"></div>

## Citation
Li J, Hu P, Zhou L, Nagahama F, Chen R. Population pharmacokinetic analysis of transdermal granisetron in healthy Chinese and Caucasian volunteers. Frontiers in pharmacology 14:1154026 (2023).
  ·  DOI: [10.3389/fphar.2023.1154026](https://doi.org/10.3389/fphar.2023.1154026)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 136.

**Dosing:** 34.3 mg/52 cm2, transdermal, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (1/h) | kabs | 0.0179879 | 1/h | 3.6330732 |
| V (mL) | V | 1.5462161 | mL | 13.121334 |
| CL (mL/h) | CL | 0.25423392 | mL/h | 5.5226182 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Granisetron's distribution volume (1.5462161 mL) and clearance (0.25423392 mL/h) are physiologically implausible for a healthy-adult model, indicating a unit or scale extraction error, so the record was rejected.**

The extracted parameters for granisetron give a volume of distribution of 1.5462161 mL and total clearance of 0.25423392 mL/h, magnitudes far below any physiological window for granisetron in healthy adults, consistent with a unit/scale extraction error (the labels read mL and mL/h). The absorption rate constant of 0.0179879 1/h is also very slow. The rejection was based on this implausible clearance/volume magnitude. Extracted — granisetron: kabs 0.018, V 1.55 mL, CL 0.254 mL/h.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.0179879 | 1/h | 4.997e-06 | 1/s | 1/h | 3.6330732 | exact (1) | T3:row3:col1, T3:row3:col2, T3:row3:col3, T3:row7:col2, T3:row7:col3 |
| V (mL) | `Q61` · V | 1.5462161 | mL | 1.546e-06 | m3 | ml | 13.121334 | exact (1) | T3:row4:col1, T3:row4:col2, T3:row4:col3, T3:row8:col1, T3:row8:col2, T3:row8:col3 |
| CL (mL/h) | `Q22` · CL | 0.25423392 | mL/h | 7.062e-11 | m3/s | ml/h | 5.5226182 | exact (1) | T3:row5:col1, T3:row5:col2, T3:row5:col3, T3:row9:col1, T3:row9:col2, T3:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ' routed out of structural estimates ('Residual error')
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: "The parameter is Ka (absorption rate constant). The paper text describes it as a 'first-order absorption' process (Eq. 4")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V (mL)); Q22 (CL (mL/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=granisetron

**Extraction notes:**
- unparsed cell T3:row7:col1 = '4.74078E-11 (149.10549)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row9:col1', 'T3:row9:col2', 'T3:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row3:col1', 'T3:row3:col2', 'T3:row3:col3', 'T3:row7:col2', 'T3:row7:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col3', 'T3:row8:col1', 'T3:row8:col2', 'T3:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2542 | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row9:col1', 'T3:row9:col2', 'T3:row9:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000254 L/h | ['T3:row5:col1', 'T3:row5:col2', 'T3:row5:col3', 'T3:row9:col1', 'T3:row9:col2', 'T3:row9:col3'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.00155 L | ['T3:row4:col1', 'T3:row4:col2', 'T3:row4:col3', 'T3:row8:col1', 'T3:row8:col2', 'T3:row8:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgranisetron%5D%20Granisetron_Li2023_reference&body=Drug%3A%20granisetron%0ARecord%3A%20Granisetron_Li2023_reference%0APaper%3A%20Li_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_granisetron/Granisetron_Li2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 13:55 UTC</sub>
