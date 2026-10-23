<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;cinacalcet&quot;,&quot;href&quot;:&quot;drugs/drug_cinacalcet/&quot;},{&quot;label&quot;:&quot;Chen_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cinacalcet_SchappacherTilp2019_reference&quot;,&quot;label&quot;:&quot;Schappacher-Tilp_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cinacalcet/Cinacalcet_SchappacherTilp2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cinacalcet — `Cinacalcet_Chen2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Cinacalcet model V3/F volume of 19824.20 L was rejected due to a dimension mismatch and non-convertible units.

<div class="pk-model-meta" hidden drug="cinacalcet" model-id="Cinacalcet_Chen2019_reference" status="rejected" stale="false" population="adults and paediatrics with secondary hyperparathyroidism on dialysis" measured-compound="cinacalcet" parameterization="apparent" topology="1C"></div>

## Citation
Chen P, Sohn W, Narayanan A, Gisleskog PO, Melhem M. Bridging adults and paediatrics with secondary hyperparathyroidism receiving haemodialysis: a pharmacokinetic-pharmacodynamic analysis of cinacalcet. British journal of clinical pharmacology 85(6):1312–1325 (2019).
  ·  DOI: [10.1111/bcp.13900](https://doi.org/10.1111/bcp.13900)

## Population and dosing

**Population:** adults and paediatrics with secondary hyperparathyroidism on dialysis · condition secondary hyperparathyroidism · age group mixed.

**Dosing:** 1, 300 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (L h−1) | kabs | 0.80 | L h−1 | 10 |
| CL/F (L h−1) | CL/F | 287.74 | L h−1 | 4.7 |
| V2/F (L) | V2/F | 4104.15 | L | 6.78 |
| V3/F (L) | V3/F | 19824.20 | L | 10.2 |
| Q/F (L h−1) | Q/F | 296.3 | L h−1 | 7.3 |
| Tlag (h) | tlag | 0.36 | h | 0.02 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.938). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Cinacalcet model V3/F volume of 19824.20 L was rejected due to a dimension mismatch and non-convertible units.**

The review found a dimension mismatch for the peripheral volume parameter V3/F, which was defined as 19824.20 L. The recorded unit could not be converted to standard SI units, so the model could not be numerically evaluated. Extracted — cinacalcet: kabs 0.8 L h−1, CL/F 288 L h−1, V2/F 4.1e+03 L, V3/F 1.98e+04 L, Q/F 296 L h−1, tlag 0.36 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cinacalcet, the second reading unknown. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (L h−1) | `Q49` · kabs | 0.80 | L h−1 |  |  | l/h | 10 | exact (1) | bcp13900-tbl-0003:row1:col1, bcp13900-tbl-0003:row1:col2 |
| CL/F (L h−1) | `Q27` · CL/F | 287.74 | L h−1 | 7.993e-05 | m3/s | l/h | 4.7 | exact (1) | bcp13900-tbl-0003:row2:col1, bcp13900-tbl-0003:row2:col2 |
| V2/F (L) | `Q82` · V2/F | 4104.15 | L | 4.104 | m3 | l | 6.78 | exact (1) | bcp13900-tbl-0003:row3:col1, bcp13900-tbl-0003:row3:col2 |
| V3/F (L) | `Q78` · V3/F | 19824.20 | L | 19.82 | m3 | l | 10.2 | exact (1) | bcp13900-tbl-0003:row4:col1, bcp13900-tbl-0003:row4:col2 |
| Q/F (L h−1) | `Q69` · Q/F | 296.3 | L h−1 | 8.231e-05 | m3/s | l/h | 7.3 | exact (1) | bcp13900-tbl-0003:row5:col1, bcp13900-tbl-0003:row5:col2 |
| Tlag (h) | `Q83` · tlag | 0.36 | h | 1296 | s | h | 0.02 | exact (1) | bcp13900-tbl-0003:row6:col1, bcp13900-tbl-0003:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka (L h−1)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cinacalcet
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.938 (15/16 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | cinacalcet | unknown | mismatch |

</details>

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bcp13900-tbl-0003:row2:col1', 'bcp13900-tbl-0003:row2:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L h−1 | ['bcp13900-tbl-0003:row1:col1', 'bcp13900-tbl-0003:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['bcp13900-tbl-0003:row5:col1', 'bcp13900-tbl-0003:row5:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['bcp13900-tbl-0003:row4:col1', 'bcp13900-tbl-0003:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['bcp13900-tbl-0003:row3:col1', 'bcp13900-tbl-0003:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['bcp13900-tbl-0003:row6:col1', 'bcp13900-tbl-0003:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 288 L/h | ['bcp13900-tbl-0003:row2:col1', 'bcp13900-tbl-0003:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.1e+03 L | ['bcp13900-tbl-0003:row3:col1', 'bcp13900-tbl-0003:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcinacalcet%5D%20Cinacalcet_Chen2019_reference&body=Drug%3A%20cinacalcet%0ARecord%3A%20Cinacalcet_Chen2019_reference%0APaper%3A%20Chen_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cinacalcet/Cinacalcet_Chen2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:20 UTC</sub>
