<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mirtazapine&quot;,&quot;href&quot;:&quot;drugs/drug_mirtazapine/&quot;},{&quot;label&quot;:&quot;Yan_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mirtazapine — `Mirtazapine_Yan2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-06 23:41 UTC); the status shown comes from the current checks. The mirtazapine record was rejected because V/F was extracted as 0.131 L, an implausibly small volume of distribution, and the paroxetine covariate effect on clearance (-0.306) was recorded as a negative clearance value.

<div class="pk-model-meta" hidden drug="mirtazapine" model-id="Mirtazapine_Yan2026_reference" status="rejected" stale="true" population="Chinese inpatients with depression" measured-compound="mirtazapine" parameterization="apparent" topology="1C"></div>

## Citation
Yan H, Huang W, Xia H, Luo Y, Li Y, Shang D. Optimizing Mirtazapine Initial Dosing: A Population Analysis of the Effects of BMI, Paroxetine and Fluvoxamine. Drug design, development and therapy 20:601238 (2026).
  ·  DOI: [10.2147/DDDT.S601238](https://doi.org/10.2147/DDDT.S601238)

## Population and dosing

**Population:** Chinese inpatients with depression · condition depression · age group adult · n = 105.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka (L/h) | kabs | 1.2 | L/h |  |
| CL/F (L/h) | CL/F | 28.9 | L/h | 0.0613 (None% RSE) |
| V/F (L) | V/F | 310 | L | 0.131 (None% RSE) |
| ΘCL-Paroxetine | CL | -0.269 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mirtazapine record was rejected because V/F was extracted as 0.131 L, an implausibly small volume of distribution, and the paroxetine covariate effect on clearance (-0.306) was recorded as a negative clearance value.**

The apparent volume of distribution V/F for mirtazapine is listed as 0.131 L, which fails the physiological plausibility window and suggests a unit or scale extraction error; a second reader read the same parameter as 302.315 L. The paroxetine effect on clearance was captured as -0.306, a negative value that is implausible as a clearance entry, and the second reader instead treated it as absent from the record. The second reader also reported an absorption rate constant ka of 1.2 that is missing from this record, so the parameter set is incomplete and the discrepancies were not resolved. Extracted — mirtazapine: CL/F 28.5 L/h, V/F 0.131 L, CL -0.306.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka (L/h) | `Q49` · kabs | 1.2 | L/h |  |  | l/h | exact (1) | t0002:row2:col1, t0002:row2:col4 |  |
| CL/F (L/h) | `Q27` · CL/F | 28.9 | L/h | 8.028e-06 | m3/s | l/h | exact (1) | t0002:row3:col1, t0002:row3:col2, t0002:row3:col4 | 0.0613 (None% RSE) |
| V/F (L) | `Q76` · V/F | 310 | L | 0.31 | m3 | l | exact (1) | t0002:row4:col1, t0002:row4:col2, t0002:row4:col4 | 0.131 (None% RSE) |
| ΘCL-Paroxetine | `Q22` · CL | -0.269 |  |  |  |  | llm_confirmed (0.6) | t0002:row5:col1, t0002:row5:col2, t0002:row5:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV')
- table section iiv: 'V/F (L)' routed out of structural estimates ('IIV')
- unit_dimension_mismatch: 'Ka (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q22 ('ΘCL- Fluvoxamine', value '-0.511') — already have one for this compound
- dropped duplicate Q22 ('ΘCL-BMI', value '-0.294') — already have one for this compound
- routed 'PRO' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mirtazapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell t0002:row3:col5 = '25.423~ 31.343'
- unparsed cell t0002:row4:col5 = '191.154~ 462.256'
- unparsed cell t0002:row5:col5 = '−0.416~ −0.149'
- unparsed cell t0002:row6:col5 = '−0.659~ −0.313'
- unparsed cell t0002:row7:col5 = '−0.382~ −0.178'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q22 | fail |  | -0.269 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['t0002:row3:col1', 't0002:row3:col2', 't0002:row3:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['t0002:row2:col1', 't0002:row2:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['t0002:row5:col1', 't0002:row5:col2', 't0002:row5:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 28.9 L/h | ['t0002:row3:col1', 't0002:row3:col2', 't0002:row3:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 310 L | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirtazapine%5D%20Mirtazapine_Yan2026_reference&body=Drug%3A%20mirtazapine%0ARecord%3A%20Mirtazapine_Yan2026_reference%0APaper%3A%20Yan_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:41 UTC</sub>
