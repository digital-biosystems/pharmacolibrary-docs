<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;nemolizumab&quot;,&quot;href&quot;:&quot;drugs/drug_nemolizumab/&quot;},{&quot;label&quot;:&quot;Sidbury_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nemolizumab_Fauchet2026_reference&quot;,&quot;label&quot;:&quot;Fauchet_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nemolizumab/Nemolizumab_Fauchet2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nemolizumab — `Nemolizumab_Sidbury2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The absorption rate constant kabs has a mismatched unit (L/day) for nemolizumab, causing a dimension mismatch in the model.**

The record lists the absorption rate constant kabs with a value of 0.402 and a unit of L/day. Since absorption rate constants must be dimensionally reciprocal time (e.g., 1/day), this unit is incorrect. The missing standard conversion prevented the system from resolving this discrepancy, leading to the rejection of the nemolizumab record. Extracted — nemolizumab: CL 0.325 L/d, V/F 7.15 L, t1/2z 16.7 day, kabs 0.402 L/day, Cmax 5.98e+03 ng/mL, AUC∞ 111 ng·d/mL.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Sidbury R et al., Pharmacokinetics, Safety, Efficacy, and…, Dermatology and therapy (2022)
  ·  DOI: [10.1007/s13555-021-00678-7](https://doi.org/10.1007/s13555-021-00678-7)

<div class="pk-model-meta" hidden drug="nemolizumab" model-id="Nemolizumab_Sidbury2022_reference" status="rejected" stale="false" population="adolescents with atopic dermatitis" measured-compound="nemolizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/ | `Q22` · CL | 0.325 | L/d | 3.761574074074074e-09 | L/h | not captured | llm (0.6) | tab_1:row3:col1, tab_1:row3:col2 | — | not captured |
| V d /F (L) | `Q76` · V/F | 7.15 | L | 0.00715 | [l] | not captured | space_fold (0.95) | tab_1:row5:col1, tab_1:row5:col2 | — | not captured |
| t 1/2 (day) | `Q57` · t1/2z | 16.7 | day | 1442880.0 | [d] | not captured | space_fold (0.95) | tab_1:row6:col1, tab_1:row6:col2 | — | not captured |
| k a (1/day) | `Q49` · kabs | 0.402 | L/day | not captured | [l] / [d] | not captured | space_fold (0.95) | tab_1:row7:col1, tab_1:row7:col2 | — | not captured |
| C max (ng/ | `Q32` · Cmax | 5975.5 | ng/mL | not captured | ng/mL | not captured | llm (0.6) | tab_1:row8:col2 | — | not captured |
| AUC inf | `Q17` · AUC∞ | 111.4 | ng·d/mL | not captured | ng·d/mL | not captured | space_fold (0.95) | tab_1:row10:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k a (1/day)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'ng/' (Cmax)
- implicit units: 'CL/' → L/d (from the popPK convention: 'For monoclonal antibodies like nemolizumab, apparent clearance (CL/F) is typically reported in L/day (L/d) or L/h. The v')
- implicit units: 'C max (ng/' → ng/mL (from the paper text: 'The paper text states: "Maximum observed concentrations ranged from 2550 to 11,100 ng/ mL" and "mean observed trough con')
- implicit units: 'AUC inf' → ng·d/mL (from the popPK convention: 'AUC (Area Under the Curve) is the product of concentration and time. Since concentrations are reported in ng/mL and the ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nemolizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'nemolizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 16.7 | 15.249 | 0.9131 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row8:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/day | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0135 L/h | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.15 L | not captured | not captured | ['tab_1:row5:col1', 'tab_1:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nemolizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sidbury_2022` / `Sidbury_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:36 UTC</sub>
