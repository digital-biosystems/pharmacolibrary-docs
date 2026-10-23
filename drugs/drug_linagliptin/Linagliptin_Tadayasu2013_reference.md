<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/&quot;},{&quot;label&quot;:&quot;Tadayasu_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linagliptin — `Linagliptin_Tadayasu2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-05 00:17 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected: the linagliptin binding parameters Bmax (6.07 nmol/L) and KD (0.108 nmol/L) could not be converted to consistent units, and the three-compartment structure contains an unreachable compartment.

<div class="pk-model-meta" hidden drug="linagliptin" model-id="Linagliptin_Tadayasu2013_reference" status="rejected" stale="true" population="Japanese patients with type 2 diabetes mellitus" measured-compound="linagliptin" parameterization="apparent" topology="1C"></div>

## Citation
Tadayasu Y, Sarashina A, Tsuda Y, Tatami S, Friedrich C, Retlich S et al. Population pharmacokinetic/pharmacodynamic analysis of the DPP-4 inhibitor linagliptin in Japanese patients with type 2 diabetes mellitus. Journal of pharmacy & pharmaceutical sciences : a publication of the Canadian Society for Pharmaceutical Sciences, Societe canadienne des sciences pharmaceutiques 16(5):708–721 (2013).
  ·  DOI: [10.18433/j3s304](https://doi.org/10.18433/j3s304)

## Population and dosing

**Population:** Japanese patients with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult · n = &gt;=36.

**Dosing:** 2.5, 10 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F1 | Fab | 1 |  |  |  |
| KA [h -1 ] | kabs | 1.63 | 1/h | 22.2 |  |
| CL/F1 [L/h] | CL/F | 121 | L/h | 15.5 |  |
| V2/F1 [L] | V2/F | 633 | L | 12.7 |  |
| Q3/F1 [L/h] | Q3/F | 73.0 | L/h | 68.8 |  |
| V3/F1 [L] | V3/F | 683 | L | 14.0 |  |
| BMAX [nmol/L] | Bmax | 6.07 | nmol/L | 5.17 | 14.2 (None% RSE) |
| KD [nmol/L] | KD | 0.108 | nmol/L | 28.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected: the linagliptin binding parameters Bmax (6.07 nmol/L) and KD (0.108 nmol/L) could not be converted to consistent units, and the three-compartment structure contains an unreachable compartment.**

The record for linagliptin in Japanese patients with type 2 diabetes reports a three-compartment disposition model with Fab 1, kabs 1.63 h⁻¹, CL/F 121 L/h, V2/F 633 L, Q3/F 73.0 L/h and V3/F 683 L, plus target-binding parameters Bmax 6.07 nmol/L and KD 0.108 nmol/L. The nmol/L unit on the binding parameters could not be reconciled with the units of the other model parameters, so a dimension mismatch arose on a structural parameter. Separately, the model structure was found to contain an unreachable compartment with no path from the dose. Both findings led to rejection. Extracted — linagliptin: Fab 1, kabs 1.63, CL/F 121 L/h, V2/F 633 L, Q3/F 73 L/h, V3/F 683 L, Bmax 6.07 nmol/L, KD 0.108 nmol/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has linagliptin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | tab_2:row2:col1 |  |
| KA [h -1 ] | `Q49` · kabs | 1.63 | 1/h | 0.0004528 | 1/s | 1/h | 22.2 | llm_confirmed (0.6) | tab_2:row3:col1, tab_2:row3:col2 |  |
| CL/F1 [L/h] | `Q27` · CL/F | 121 | L/h | 3.361e-05 | m3/s | l/h | 15.5 | llm (0.6) | tab_2:row4:col1, tab_2:row4:col2 |  |
| V2/F1 [L] | `Q82` · V2/F | 633 | L | 0.633 | m3 | l | 12.7 | llm (0.6) | tab_2:row5:col1, tab_2:row5:col2 |  |
| Q3/F1 [L/h] | `Q309` · Q3/F | 73.0 | L/h | 2.028e-05 | m3/s | l/h | 68.8 | llm (0.6) | tab_2:row7:col1, tab_2:row7:col2 |  |
| V3/F1 [L] | `Q78` · V3/F | 683 | L | 0.683 | m3 | l | 14.0 | llm (0.6) | tab_2:row9:col1, tab_2:row9:col2 |  |
| BMAX [nmol/L] | `Q332` · Bmax | 6.07 | nmol/L |  |  | nM/l | 5.17 | llm_confirmed (0.6) | tab_2:row11:col1, tab_2:row11:col2 | 14.2 (None% RSE) |
| KD [nmol/L] | `Q331` · KD | 0.108 | nmol/L |  |  | nM/l | 28.5 | llm_confirmed (0.6) | tab_2:row13:col1, tab_2:row13:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV in F1 [CV%]' routed out of structural estimates ('Model parameters: IIV parameters')
- table section iiv: 'IIV in KA [CV%]' routed out of structural estimates ('Model parameters: IIV parameters')
- table section iiv: 'IIV in CL [CV%]' routed out of structural estimates ('Model parameters: IIV parameters')
- table section iiv: 'IIV in BMAX [CV%]' routed out of structural estimates ('Model parameters: IIV parameters')
- table section residual_error: 'Proportional residual' routed out of structural estimates ('Model parameters: Residual variability')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'KD [nmol/L]' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'AMAX2/F1[nmol]' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col2'])
- dropped PD-category row 'EMAX [%]' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row16:col1', 'tab_2:row16:col2'])
- implicit units: 'KA [h -1 ]' → 1/h (from the popPK convention: 'The parameter is KA (absorption rate constant). The paper text does not explicitly state the unit for this specific para')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=linagliptin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row19:col2 = '30.8 a)'
- unparsed cell tab_2:row21:col2 = '32.5 a)'
- unparsed cell tab_2:row23:col2 = '25.7 a)'
- unparsed cell tab_2:row24:col2 = '30.5 a)'
- unparsed cell tab_2:row27:col2 = '9.96 b)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.85 (17/20 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amax2/f1[nmol]]` |  | 534 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | ['tab_2:row13:col1', 'tab_2:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row3:col1', 'tab_2:row3:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['tab_2:row9:col1', 'tab_2:row9:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_2:row5:col1', 'tab_2:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 121 L/h | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 633 L | ['tab_2:row5:col1', 'tab_2:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blinagliptin%5D%20Linagliptin_Tadayasu2013_reference&body=Drug%3A%20linagliptin%0ARecord%3A%20Linagliptin_Tadayasu2013_reference%0APaper%3A%20Tadayasu_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 00:17 UTC</sub>
