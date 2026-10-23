<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;docetaxel&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/&quot;},{&quot;label&quot;:&quot;Heineman_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Docetaxel_Clarke1999_reference&quot;,&quot;label&quot;:&quot;Clarke_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_Clarke1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Docetaxel_LaunayIliadis1995_reference&quot;,&quot;label&quot;:&quot;Launay-Iliadis_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_LaunayIliadis1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# docetaxel — `Docetaxel_Heineman2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Docetaxel model rejected because the second peripheral compartment volume of 132 L was unreachable from the dose.

<div class="pk-model-meta" hidden drug="docetaxel" model-id="Docetaxel_Heineman2021_reference" status="rejected" stale="false" population="adults with non-small cell lung cancer" measured-compound="docetaxel" parameterization="mechanistic" topology="2C"></div>

## Citation
Heineman T, Baumgart M, Nanavati C, Gabrail N, Van Wart SA, Mager DE et al. Safety and pharmacokinetics of docetaxel in combination with pegvorhyaluronidase alfa in patients with non-small cell lung cancer. Clinical and translational science 14(5):1875–1885 (2021).
  ·  DOI: [10.1111/cts.13041](https://doi.org/10.1111/cts.13041)

## Population and dosing

**Population:** adults with non-small cell lung cancer · condition non-small cell lung cancer · age group adult.

**Dosing:** 75 mg/m2, iv, multiple, every 504 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T max (h) | tmax | 1.12 | h |
| C max (μg/L) | Cmax | 2500 | μg/L |
| AUC0–∞ (μg•h/L) | AUC∞ | 3820 | μg•h/L |
| CL (L/h) | CL | 36.7 | L/h |
| V c (L) | V1 | 8.12 | L |
| k 12 (h–1) | k12 | 1.07 | h–1 |
| k 21 (h–1) | k21 | 1.67 | h–1 |
| k 13 (h–1) | k13 | 1.32 | h–1 |
| k 31 (h–1) | k31 | 0.08 | h–1 |
| V p1 (L) | V2 | 5.43 | L |
| V p2 (L) | V3 | 132 | L |
| V ss (L) | Vss | 145 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Docetaxel model rejected because the second peripheral compartment volume of 132 L was unreachable from the dose.**

The record defines a three-compartment structure with central volume 8.12 L, first peripheral volume 5.43 L, and second peripheral volume 132 L. Despite the presence of transfer rates k13 and k31, the review flagged the second peripheral compartment as unreachable from the dose. This structural inconsistency resulted in the rejection of the docetaxel pharmacokinetic model. Extracted — docetaxel: tmax 1.12 h, Cmax 2.5e+03 μg/L, AUC∞ 3.82e+03 μg•h/L, CL 36.7 L/h, V1 8.12 L, k12 1.07 h–1, k21 1.67 h–1, k13 1.32 h–1, … (+4).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T max (h) | `Q56` · tmax | 1.12 | h | 4032 | s | h | space_fold (0.95) | cts13041-tbl-0002:row0:col2, cts13041-tbl-0002:row0:col3 |
| C max (μg/L) | `Q32` · Cmax | 2500 | μg/L |  |  | µg/l | space_fold (0.95) | cts13041-tbl-0002:row1:col2, cts13041-tbl-0002:row1:col3 |
| AUC0–∞ (μg•h/L) | `Q17` · AUC∞ | 3820 | μg•h/L |  |  | (h·µg)/l | exact (1) | cts13041-tbl-0002:row2:col1, cts13041-tbl-0002:row2:col2, cts13041-tbl-0002:row2:col3 |
| CL (L/h) | `Q22` · CL | 36.7 | L/h | 1.019e-05 | m3/s | l/h | exact (1) | cts13041-tbl-0002:row3:col2, cts13041-tbl-0002:row3:col3 |
| V c (L) | `Q63` · V1 | 8.12 | L | 0.00812 | m3 | l | space_fold (0.95) | cts13041-tbl-0002:row4:col2, cts13041-tbl-0002:row4:col3 |
| k 12 (h–1) | `Q301` · k12 | 1.07 | h–1 | 0.0002972 | 1/s | 1/h | space_fold (0.95) | cts13041-tbl-0002:row5:col2 |
| k 21 (h–1) | `Q302` · k21 | 1.67 | h–1 | 0.0004639 | 1/s | 1/h | space_fold (0.95) | cts13041-tbl-0002:row6:col2, cts13041-tbl-0002:row6:col3 |
| k 13 (h–1) | `Q303` · k13 | 1.32 | h–1 | 0.0003667 | 1/s | 1/h | space_fold (0.95) | cts13041-tbl-0002:row7:col2, cts13041-tbl-0002:row7:col3 |
| k 31 (h–1) | `Q304` · k31 | 0.08 | h–1 | 2.222e-05 | 1/s | 1/h | space_fold (0.95) | cts13041-tbl-0002:row8:col2, cts13041-tbl-0002:row8:col3 |
| V p1 (L) | `Q64` · V2 | 5.43 | L | 0.00543 | m3 | l | space_fold (0.95) | cts13041-tbl-0002:row9:col2, cts13041-tbl-0002:row9:col3 |
| V p2 (L) | `Q77` · V3 | 132 | L | 0.132 | m3 | l | space_fold (0.95) | cts13041-tbl-0002:row10:col2, cts13041-tbl-0002:row10:col3 |
| V ss (L) | `Q65` · Vss | 145 | L | 0.145 | m3 | l | space_fold (0.95) | cts13041-tbl-0002:row11:col2, cts13041-tbl-0002:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'μg•h/L' (AUC∞)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=docetaxel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table cts13041-tbl-0002: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell cts13041-tbl-0002:row5:col1 = 'k 12 (h–1)'
- unparsed cell cts13041-tbl-0002:row6:col1 = 'k 21 (h–1)'
- unparsed cell cts13041-tbl-0002:row7:col1 = 'k 13 (h–1)'
- unparsed cell cts13041-tbl-0002:row8:col1 = 'k 31 (h–1)'
- unparsed cell cts13041-tbl-0002:row9:col1 = 'V p1 (L)'
- unparsed cell cts13041-tbl-0002:row10:col1 = 'V p2 (L)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (16/16 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['cts13041-tbl-0002:row5:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['cts13041-tbl-0002:row6:col2', 'cts13041-tbl-0002:row6:col3'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['cts13041-tbl-0002:row7:col2', 'cts13041-tbl-0002:row7:col3'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['cts13041-tbl-0002:row8:col2', 'cts13041-tbl-0002:row8:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['cts13041-tbl-0002:row1:col2', 'cts13041-tbl-0002:row1:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['cts13041-tbl-0002:row0:col2', 'cts13041-tbl-0002:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13041-tbl-0002:row4:col2', 'cts13041-tbl-0002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13041-tbl-0002:row9:col2', 'cts13041-tbl-0002:row9:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['cts13041-tbl-0002:row11:col2', 'cts13041-tbl-0002:row11:col3'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['cts13041-tbl-0002:row10:col2', 'cts13041-tbl-0002:row10:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | μg•h/L | ['cts13041-tbl-0002:row2:col1', 'cts13041-tbl-0002:row2:col2', 'cts13041-tbl-0002:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 36.7 | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 36.7 L/h | ['cts13041-tbl-0002:row3:col2', 'cts13041-tbl-0002:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.12 L | ['cts13041-tbl-0002:row4:col2', 'cts13041-tbl-0002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.43 L | ['cts13041-tbl-0002:row9:col2', 'cts13041-tbl-0002:row9:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 145 L | ['cts13041-tbl-0002:row11:col2', 'cts13041-tbl-0002:row11:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdocetaxel%5D%20Docetaxel_Heineman2021_reference&body=Drug%3A%20docetaxel%0ARecord%3A%20Docetaxel_Heineman2021_reference%0APaper%3A%20Heineman_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_docetaxel/Docetaxel_Heineman2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:51 UTC</sub>
