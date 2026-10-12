<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/&quot;},{&quot;label&quot;:&quot;Bender_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pregabalin — `Pregabalin_Bender2009_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The pregabalin rat model was rejected because its clearance (0.034 L/hr) and volumes (V1 0.270 L, V2 6.75 L) fall outside plausible physiological windows, suggesting a unit or scale extraction error.**

The plausibility check flagged the magnitudes of CL (0.034 L/hr), V1 (0.270 L) and V2 (6.75 L) as implausible for a rat pregabalin model, consistent with a unit or scale extraction error. The remaining parameters (Q 0.0225 L/hr, kabs 2.0 h⁻¹, tlag 0.495 hour, θSLD 0.302) and the NAT2 covariate effects were recorded, but a second reader returned no values for the NAT2 covariate, kabs, tlag, and no covariate form for CL, so these entries stand without independent confirmation. Extracted — pregabalin: CL 0.034 L/hr, V1 0.27 L, Q 0.0225 L/hr, V2 6.75 L, kabs 2 h À1, tlag 0.495 hour.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of nat2: this record has {'*1/*1': 0.0, '*1/*6': -0.0783, 'C/C': -0.138, 'G/T': -0.2769, 'IM': -0.0496, 'PM': -0.0594, 'T/C': 0.007}, the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:26.012228+00:00) predates the upstream re-run (2026-10-07 07:16:01.203144+00:00). Current validate status: `rejected`.

## Citation
Bender G et al., Population pharmacokinetic model of the…, Pharmaceutical research (2009)
  ·  DOI: [10.1007/s11095-009-9942-y](https://doi.org/10.1007/s11095-009-9942-y)

<div class="pk-model-meta" hidden drug="pregabalin" model-id="Pregabalin_Bender2009_reference" status="rejected" stale="true" population="rats" measured-compound="pregabalin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/hr) | `Q22` · CL | 0.034 | L/hr | 9.444444444444447e-09 | [l] / [h] | not captured | exact (1.0) | Tab4:row3:col1, Tab4:row3:col3, Tab4:row3:col4, Tab4:row3:col5, Tab4:row3:col7, Tab4:row3:col8, Tab4:row3:col9, Tab4:row3:col11, Tab4:row3:col12 | — | not captured |
| V1 (L) | `Q63` · V1 | 0.270 | L | 0.00027 | [l] | not captured | exact (1.0) | Tab4:row4:col1, Tab4:row4:col3, Tab4:row4:col4, Tab4:row4:col5, Tab4:row4:col7, Tab4:row4:col8, Tab4:row4:col9, Tab4:row4:col11, Tab4:row4:col12 | — | not captured |
| Q (L/hr) | `Q30` · Q | 0.0225 | L/hr | 6.25e-09 | [l] / [h] | not captured | exact (1.0) | Tab4:row5:col1, Tab4:row5:col3, Tab4:row5:col4, Tab4:row5:col5, Tab4:row5:col7, Tab4:row5:col8, Tab4:row5:col9, Tab4:row5:col11, Tab4:row5:col12 | — | not captured |
| V2 (L) | `Q64` · V2 | 6.75 | L | 0.00675 | [l] | not captured | exact (1.0) | Tab4:row6:col1, Tab4:row6:col3, Tab4:row6:col4, Tab4:row6:col5, Tab4:row6:col7, Tab4:row6:col8, Tab4:row6:col9, Tab4:row6:col11, Tab4:row6:col12 | — | not captured |
| θSLD | `Q900` · θSLD | 0.302 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| Absorption rate constant (k a ) | `Q49` · kabs | 2.0 | h À1 | 0.0005555555555555556 | 1/h | not captured | review_gapfill (0.7) | Bae_2016:review | — | not captured |
| Lag time (hour) | `Q83` · tlag | 0.495 | hour | 1782.0 | h | not captured | review_gapfill (0.7) | van_2018:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col1', 'Tab4:row1:col2', 'Tab4:row1:col3', 'Tab4:row1:col4', 'Tab4:row1:col5', 'Tab4:row1:col6', 'Tab4:row1:col7', 'Tab4:row1:col8', 'Tab4:row1:col9', 'Tab4:row1:col10', 'Tab4:row1:col11', 'Tab4:row1:col12'])
- routed 'ω1CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ω1V1' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col1', 'Tab4:row8:col3', 'Tab4:row8:col4', 'Tab4:row8:col5', 'Tab4:row8:col7', 'Tab4:row8:col8', 'Tab4:row8:col9', 'Tab4:row8:col11', 'Tab4:row8:col12'])
- routed 'ω1Q' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- kept covariate coefficient θSLD=0.302 (covariate SLD) — not an ontology parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pregabalin
- gap-filled Q49 (kabs) from Bae_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from van_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab4:row3:col2 = '19.08%'
- unparsed cell Tab4:row3:col6 = '14.59%'
- unparsed cell Tab4:row3:col10 = '8.83%'
- unparsed cell Tab4:row4:col2 = '3.38%'
- unparsed cell Tab4:row4:col6 = '3.38%'
- unparsed cell Tab4:row4:col10 = '3.27%'
- unparsed cell Tab4:row5:col2 = '32.00%'
- unparsed cell Tab4:row5:col6 = '35.76%'
- unparsed cell Tab4:row5:col10 = '18.08%'
- unparsed cell Tab4:row6:col2 = '41.48%'
- unparsed cell Tab4:row6:col6 = '51.99%'
- unparsed cell Tab4:row6:col10 = '38.82%'
- unparsed cell Tab4:row7:col2 = '24.74%'
- unparsed cell Tab4:row7:col6 = '15.91%'
- unparsed cell Tab4:row7:col10 = '14.63%'
- unparsed cell Tab4:row8:col2 = '9.38%'
- unparsed cell Tab4:row8:col6 = '9.26%'
- unparsed cell Tab4:row8:col10 = '8.72%'
- unparsed cell Tab4:row9:col2 = '40.00%'
- unparsed cell Tab4:row9:col6 = '40.87%'
- unparsed cell Tab4:row9:col10 = '15.94%'
- unparsed cell Tab4:row10:col2 = '27.07%'
- unparsed cell Tab4:row10:col6 = '19.52%'
- unparsed cell Tab4:row10:col10 = '18.52%'
- unparsed cell Tab4:row11:col2 = '8.96%'
- unparsed cell Tab4:row11:col6 = '8.75%'
- unparsed cell Tab4:row11:col10 = '8.33%'
- unparsed cell Tab4:row12:col6 = '23.05%'
- unparsed cell Tab4:row12:col10 = '28.37%'
- unparsed cell Tab4:row13:col2 = '18.32%'
- unparsed cell Tab4:row13:col6 = '18.53%'
- unparsed cell Tab4:row13:col10 = '18.85%'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (8/11 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.495 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θsld]` | 0.302 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['categorical_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[lag time]` | 0.495 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[nat2]` | {'*1/*1': 0.0, '*1/*6': -0.0783, 'C/C': -0.138, 'G/T': -0.2769, 'IM': -0.0496, 'PM': -0.0594, 'T/C': 0.007} | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row5:col1', 'Tab4:row5:col3', 'Tab4:row5:col4', 'Tab4:row5:col5', 'Tab4:row5:col7', 'Tab4:row5:col8', 'Tab4:row5:col9', 'Tab4:row5:col11', 'Tab4:row5:col12'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2016:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['van_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.034 | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.034 L/h | not captured | not captured | ['Tab4:row3:col1', 'Tab4:row3:col3', 'Tab4:row3:col4', 'Tab4:row3:col5', 'Tab4:row3:col7', 'Tab4:row3:col8', 'Tab4:row3:col9', 'Tab4:row3:col11', 'Tab4:row3:col12'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.27 L | not captured | not captured | ['Tab4:row4:col1', 'Tab4:row4:col3', 'Tab4:row4:col4', 'Tab4:row4:col5', 'Tab4:row4:col7', 'Tab4:row4:col8', 'Tab4:row4:col9', 'Tab4:row4:col11', 'Tab4:row4:col12'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.75 L | not captured | not captured | ['Tab4:row6:col1', 'Tab4:row6:col3', 'Tab4:row6:col4', 'Tab4:row6:col5', 'Tab4:row6:col7', 'Tab4:row6:col8', 'Tab4:row6:col9', 'Tab4:row6:col11', 'Tab4:row6:col12'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pregabalin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bender_2009` / `Bender_2009::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:16 UTC</sub>
