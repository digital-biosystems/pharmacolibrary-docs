<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;panitumumab&quot;,&quot;href&quot;:&quot;drugs/drug_panitumumab/&quot;},{&quot;label&quot;:&quot;Lobet_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# panitumumab — `Panitumumab_Lobet2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The intercompartmental clearance Q was rejected because its unit, L.day-1, is dimensionally inconsistent with a flow parameter.

<div class="pk-model-meta" hidden drug="panitumumab" model-id="Panitumumab_Lobet2026_reference" status="rejected" stale="false" population="adults with localized squamous cell carcinoma of the anus" measured-compound="panitumumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Lobet S, Ternant D, Lepage C, Le Malicot K, Azzopardi N, Dolly A et al. Analysis of the relationship between body composition and the pharmacokinetics of panitumumab in the treatment of localized squamous cell carcinoma of the anus - An ancillary study of the FFCD0904 phase I and II trial. Biomedicine & pharmacotherapy = Biomedecine & pharmacotherapie 198:119242 (2026).
  ·  DOI: [10.1016/j.biopha.2026.119242](https://doi.org/10.1016/j.biopha.2026.119242)

## Population and dosing

**Population:** adults with localized squamous cell carcinoma of the anus · condition localized squamous cell carcinoma of the anus · age group adult · n = &gt;=35.

**Dosing:** 210 mg, iv, multiple, every 14 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V1 (L) | V1 | 3.66 | L | 6.73 | 0.390 (None% RSE) |
| CL (L.day-1) | CL | 0.269 | L.day-1 | 8.67 | 0.38 (None% RSE) |
| Q (L.day-1) | Q | 0.389 | L.day-1 | 23.4 |  |
| V2 (L) | V2 | 2.58 | L | 17.8 | 0.434 (None% RSE) |
| Vmax (mg.day-1) | Vmax | 10.6 | mg.day-1 | 14.7 | 0.341 (None% RSE) |
| KM (mg/L) | Km | 0.401 | mg/L |  | 0.726 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance Q was rejected because its unit, L.day-1, is dimensionally inconsistent with a flow parameter.**

The record lists Q as 0.389 L.day-1, but intercompartmental clearance requires units of volume per time, such as L.day-1. The review flagged a dimension mismatch on this structural parameter. Additionally, the reported unit could not be converted to standard SI units, preventing the parameter from being processed with a valid value. Extracted — panitumumab: V1 3.66 L, CL 0.269 L.day-1, Q 0.389 L.day-1, V2 2.58 L, Vmax 10.6 mg.day-1, Km 0.401 mg/L.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 3.66 | L | 0.00366 | m3 | l | 6.73 | exact (1) | Lobet_2026_table_p5_1:row0:col1, Lobet_2026_table_p5_1:row0:col2, Lobet_2026_table_p5_1:row0:col3 | 0.390 (None% RSE) |
| CL (L.day-1) | `Q22` · CL | 0.269 | L.day-1 | 3.113e-09 | m3/s | l/d | 8.67 | exact (1) | Lobet_2026_table_p5_1:row1:col1, Lobet_2026_table_p5_1:row1:col2, Lobet_2026_table_p5_1:row1:col3 | 0.38 (None% RSE) |
| Q (L.day-1) | `Q30` · Q | 0.389 | L.day-1 | 4.502e-09 | m3/s | l/d | 23.4 | exact (1) | Lobet_2026_table_p5_1:row2:col1, Lobet_2026_table_p5_1:row2:col2, Lobet_2026_table_p5_1:row2:col3 |  |
| V2 (L) | `Q64` · V2 | 2.58 | L | 0.00258 | m3 | l | 17.8 | exact (1) | Lobet_2026_table_p5_1:row3:col1, Lobet_2026_table_p5_1:row3:col2, Lobet_2026_table_p5_1:row3:col3 | 0.434 (None% RSE) |
| Vmax (mg.day-1) | `Q66` · Vmax | 10.6 | mg.day-1 |  |  | mg/d | 14.7 | special_case (0.95) | Lobet_2026_table_p5_1:row4:col1, Lobet_2026_table_p5_1:row4:col2, Lobet_2026_table_p5_1:row4:col3 | 0.341 (None% RSE) |
| KM (mg/L) | `Q1` · Km | 0.401 | mg/L |  |  | mg/l |  | exact (1) | Lobet_2026_table_p5_1:row5:col1, Lobet_2026_table_p5_1:row5:col3 | 0.726 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωVC' routed out of structural estimates ('Interindividual variability parameters')
- table section iiv: 'ωCL' routed out of structural estimates ('Interindividual variability parameters')
- table section iiv: 'ωVP' routed out of structural estimates ('Interindividual variability parameters')
- table section iiv: 'ωVmax' routed out of structural estimates ('Interindividual variability parameters')
- table section iiv: 'ωKM' routed out of structural estimates ('Interindividual variability parameters')
- unit_dimension_mismatch: 'Vmax (mg.day-1)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=panitumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'panitumumab' — its concentrations stay mass-only

**Extraction notes:**
- final table tab_1: grid unusable → re-running vision table extraction for Lobet_2026

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (15/15 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Lobet_2026_table_p5_1:row5:col1', 'Lobet_2026_table_p5_1:row5:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lobet_2026_table_p5_1:row1:col1', 'Lobet_2026_table_p5_1:row1:col2', 'Lobet_2026_table_p5_1:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Lobet_2026_table_p5_1:row2:col1', 'Lobet_2026_table_p5_1:row2:col2', 'Lobet_2026_table_p5_1:row2:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Lobet_2026_table_p5_1:row0:col1', 'Lobet_2026_table_p5_1:row0:col2', 'Lobet_2026_table_p5_1:row0:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Lobet_2026_table_p5_1:row3:col1', 'Lobet_2026_table_p5_1:row3:col2', 'Lobet_2026_table_p5_1:row3:col3'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg.day-1 | ['Lobet_2026_table_p5_1:row4:col1', 'Lobet_2026_table_p5_1:row4:col2', 'Lobet_2026_table_p5_1:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.269 | ['Lobet_2026_table_p5_1:row1:col1', 'Lobet_2026_table_p5_1:row1:col2', 'Lobet_2026_table_p5_1:row1:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0112 L/h | ['Lobet_2026_table_p5_1:row1:col1', 'Lobet_2026_table_p5_1:row1:col2', 'Lobet_2026_table_p5_1:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.66 L | ['Lobet_2026_table_p5_1:row0:col1', 'Lobet_2026_table_p5_1:row0:col2', 'Lobet_2026_table_p5_1:row0:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.58 L | ['Lobet_2026_table_p5_1:row3:col1', 'Lobet_2026_table_p5_1:row3:col2', 'Lobet_2026_table_p5_1:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpanitumumab%5D%20Panitumumab_Lobet2026_reference&body=Drug%3A%20panitumumab%0ARecord%3A%20Panitumumab_Lobet2026_reference%0APaper%3A%20Lobet_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_panitumumab/Panitumumab_Lobet2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:04 UTC</sub>
