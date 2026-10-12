<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/&quot;},{&quot;label&quot;:&quot;Tadayasu_2013 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linagliptin — `Linagliptin_Tadayasu2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85), gpt-oss:120b (not confirmed, agreement 0.85). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected: the linagliptin binding parameters Bmax (6.07 nmol/L) and KD (0.108 nmol/L) could not be converted to consistent units, and the three-compartment structure contains an unreachable compartment.**

The record for linagliptin in Japanese patients with type 2 diabetes reports a three-compartment disposition model with Fab 1, kabs 1.63 h⁻¹, CL/F 121 L/h, V2/F 633 L, Q3/F 73.0 L/h and V3/F 683 L, plus target-binding parameters Bmax 6.07 nmol/L and KD 0.108 nmol/L. The nmol/L unit on the binding parameters could not be reconciled with the units of the other model parameters, so a dimension mismatch arose on a structural parameter. Separately, the model structure was found to contain an unreachable compartment with no path from the dose. Both findings led to rejection. Extracted — linagliptin: Fab 1, kabs 1.63, CL/F 121 L/h, V2/F 633 L, Q3/F 73 L/h, V3/F 683 L, Bmax 6.07 nmol/L, KD 0.108 nmol/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has linagliptin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:29.280592+00:00) predates the upstream re-run (2026-10-05 00:17:15.142375+00:00). Current validate status: `rejected`.

## Citation
Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013)
  ·  DOI: [10.18433/j3s304](https://doi.org/10.18433/j3s304)

## Model component
<dbs-pgx drug="linagliptin" model-id="Linagliptin_Tadayasu2013_reference" status="rejected" stale="true" population="Japanese patients with type 2 diabetes mellitus" measured-compound="linagliptin" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row2:col1 | — | not captured |
| KA [h -1 ] | `Q49` · kabs | 1.63 | 1/h | 0.00045277777777777775 | 1/h | 22.2 | llm_confirmed (0.6) | tab_2:row3:col1, tab_2:row3:col2 | — | not captured |
| CL/F1 [L/h] | `Q27` · CL/F | 121 | L/h | 3.361111111111111e-05 | [l] / [h] | 15.5 | llm (0.6) | tab_2:row4:col1, tab_2:row4:col2 | — | not captured |
| V2/F1 [L] | `Q82` · V2/F | 633 | L | 0.633 | [l] | 12.7 | llm (0.6) | tab_2:row5:col1, tab_2:row5:col2 | — | not captured |
| Q3/F1 [L/h] | `Q309` · Q3/F | 73.0 | L/h | 2.0277777777777776e-05 | [l] / [h] | 68.8 | llm (0.6) | tab_2:row7:col1, tab_2:row7:col2 | — | not captured |
| V3/F1 [L] | `Q78` · V3/F | 683 | L | 0.683 | [l] | 14.0 | llm (0.6) | tab_2:row9:col1, tab_2:row9:col2 | — | not captured |
| BMAX [nmol/L] | `Q332` · Bmax | 6.07 | nmol/L | not captured | [nM] / [l] | 5.17 | llm_confirmed (0.6) | tab_2:row11:col1, tab_2:row11:col2 | — | 14.2 (None% RSE) |
| KD [nmol/L] | `Q331` · KD | 0.108 | nmol/L | not captured | [nM] / [l] | 28.5 | llm_confirmed (0.6) | tab_2:row13:col1, tab_2:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.85 (17/20 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.85 (17/20 fields) | 3 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amax2/f1[nmol]]` | not captured | 534 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |
| `gpt-oss:120b` | `parameters[amax2/f1[nmol]]` | not captured | 534 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | linagliptin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | linagliptin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1', 'tab_2:row3:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row9:col1', 'tab_2:row9:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 121 L/h | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 633 L | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_linagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tadayasu_2013` / `Tadayasu_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 00:17 UTC</sub>
