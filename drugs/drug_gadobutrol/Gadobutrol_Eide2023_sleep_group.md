<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadobutrol&quot;,&quot;href&quot;:&quot;drugs/drug_gadobutrol/&quot;},{&quot;label&quot;:&quot;Eide_2023 \u00b7 sleep_group&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadobutrol — `Gadobutrol_Eide2023_sleep_group`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="gadobutrol" model-id="Gadobutrol_Eide2023_sleep_group" status="rejected" stale="false" population="sleep and sleep-deprivation groups" measured-compound="gadobutrol" parameterization="mechanistic" topology="1C"></div>

## Citation
Eide PK, Lashkarivand A, Pripp AH, Valnes LM, Hovd M, Ringstad G et al. Mechanisms behind changes of neurodegeneration biomarkers in plasma induced by sleep deprivation. Brain communications 5(6):fcad343 (2023).
  ·  DOI: [10.1093/braincomms/fcad343](https://doi.org/10.1093/braincomms/fcad343)

## Population and dosing

**Population:** sleep and sleep-deprivation groups · condition sleep and total sleep deprivation · n = 28.

**Dosing:** 0.5 mmol, other, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption half-life (T1/2, abs) | t1/2ka | 3.5 | h |
| Lag time (Tlag) | tlag | 0.82 | h |
| Area under the curve | AUC | 67.8 |  |
| Maximum concentration (Cmax) | Cmax | 3.9 | Cmax |
| Time to maximum concentration (Tmax) | tmax | 7.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax), so that value has no SI equivalent.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption half-life (T1/2, abs) | `Q95` · t1/2ka | 3.5 | h | 1.26e+04 | s | h | llm_corrected (0.6) | fcad343-T3:row1:col1 |
| Lag time (Tlag) | `Q83` · tlag | 0.82 | h | 2952 | s | h | exact (1) | fcad343-T3:row2:col1 |
| Area under the curve | `Q88` · AUC | 67.8 |  |  |  |  | exact (1) | fcad343-T3:row3:col1 |
| Maximum concentration (Cmax) | `Q32` · Cmax | 3.9 | Cmax |  |  | cmax | exact (1) | fcad343-T3:row4:col1 |
| Time to maximum concentration (Tmax) | `Q56` · tmax | 7.6 | h | 2.736e+04 | s | h | exact (1) | fcad343-T3:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'T1/2, abs' (t1/2ka )
- unit_dimension_unknown: 'Tlag' (tlag)
- unit_dimension_unknown: 'Cmax' (Cmax)
- unit_dimension_unknown: 'Tmax' (tmax)
- dropped unlinked row (NIL): 'GFR (ml/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['fcad343-T3:row7:col1'])
- implicit units: 'Absorption half-life (T1/2, abs)' → h (from the paper text: 'The text states: “The CSF-to-blood clearance variable ‘absorption half-life’ ... of gadobutrol was 3.5 ± 1.8 h.”')
- implicit units: 'Lag time (Tlag)' → h (from the popPK convention: 'A lag time is a time parameter; hours are the standard population-PK unit and are consistent with the value 0.82.')
- implicit units: 'Time to maximum concentration (Tmax)' → h (from the popPK convention: 'Tmax is a time parameter; hours are the standard population-PK unit and are consistent with the value 7.6.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadobutrol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'sleep group' subgroup of Eide_2023 (paper reports 2 populations: sleep deprivation group, sleep group)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['fcad343-T3:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['fcad343-T3:row2:col1'] |
| C5_dimension_Q95 | pass | [time] |  | ['fcad343-T3:row1:col1'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | Cmax | ['fcad343-T3:row4:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['fcad343-T3:row3:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadobutrol%5D%20Gadobutrol_Eide2023_sleep_group&body=Drug%3A%20gadobutrol%0ARecord%3A%20Gadobutrol_Eide2023_sleep_group%0APaper%3A%20Eide_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadobutrol/Gadobutrol_Eide2023_sleep_group%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:36 UTC</sub>
