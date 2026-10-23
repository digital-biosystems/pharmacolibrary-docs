<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/&quot;},{&quot;label&quot;:&quot;Patel_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Fratoni2022_reference&quot;,&quot;label&quot;:&quot;Fratoni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Relebactam — `Relebactam_Patel2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The peripheral compartment for relebactam is orphaned because the intercompartmental clearance linking it to the central compartment is unassigned.

<div class="pk-model-meta" hidden drug="Relebactam" model-id="Relebactam_Patel2022_reference" status="rejected" stale="false" population="adults with hospital-acquired/ventilator-associated bacterial pneumonia" measured-compound="relebactam" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Patel M, Bellanti F, Daryani NM, Noormohamed N, Hilbert DW, Young K et al. Population pharmacokinetic/pharmacodynamic assessment of imipenem/cilastatin/relebactam in patients with hospital-acquired/ventilator-associated bacterial pneumonia. Clinical and translational science 15(2):396–408 (2022).
  ·  DOI: [10.1111/cts.13158](https://doi.org/10.1111/cts.13158)

## Population and dosing

**Population:** adults with hospital-acquired/ventilator-associated bacterial pneumonia · condition hospital-acquired/ventilator-associated bacterial pneumonia · age group adult.

**Dosed compound ≠ measured compound:** dosed imipenem/cilastatin/relebactam, measured relebactam.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 7.23 | L/h |
| V1 (L) | V1 | 11.2 | L |
| V2 (L) | V2 | 6.15 | L |
| Q (L/h) | Q | 10.9 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral compartment for relebactam is orphaned because the intercompartmental clearance linking it to the central compartment is unassigned.**

The model specifies a peripheral compartment volume (V2) of 6.15 L for relebactam, yet the link parameter connecting this compartment to the central compartment is marked as none. The record lists an intercompartmental clearance value of 10.9 L/h, but this value is not assigned to any structural link. Consequently, the model structure contains an unreachable compartment, which is the reason for the record's rejection. Extracted — relebactam: CL 7.23 L/h, V1 11.2 L, V2 6.15 L, Q 10.9 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has imipenem/cilastatin/relebactam, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 7.23 | L/h | 2.008e-06 | m3/s | l/h | exact (1) | cts13158-tbl-0003:row3:col5, cts13158-tbl-0003:row3:col7 |
| V1 (L) | `Q63` · V1 | 11.2 | L | 0.0112 | m3 | l | exact (1) | cts13158-tbl-0003:row4:col5, cts13158-tbl-0003:row4:col7 |
| V2 (L) | `Q64` · V2 | 6.15 | L | 0.00615 | m3 | l | exact (1) | cts13158-tbl-0003:row5:col5, cts13158-tbl-0003:row5:col7 |
| Q (L/h) | `Q30` · Q | 10.9 | L/h | 3.028e-06 | m3/s | l/h | exact (1) | cts13158-tbl-0003:row6:col5, cts13158-tbl-0003:row6:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CrCl (power)' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row8:col5', 'cts13158-tbl-0003:row8:col7'])
- dropped unlinked row (NIL): 'Pneumonia f' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row10:col5', 'cts13158-tbl-0003:row10:col7', 'cts13158-tbl-0003:row13:col5', 'cts13158-tbl-0003:row13:col7'])
- dropped unlinked row (NIL): 'WT (power)' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row12:col5', 'cts13158-tbl-0003:row12:col7'])
- dropped unlinked row (NIL): 'Ventilation g' — extend the ontology if this is a real PK parameter (source ['cts13158-tbl-0003:row14:col5', 'cts13158-tbl-0003:row14:col7'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number 10.93 (source ['cts13158-tbl-0003:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=relebactam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell cts13158-tbl-0003:row3:col2 = '12.3 to 13.1'
- unparsed cell cts13158-tbl-0003:row3:col4 = '12.3 to 13.1'
- unparsed cell cts13158-tbl-0003:row3:col6 = '7.00 to 7.47'
- unparsed cell cts13158-tbl-0003:row3:col8 = '7.03 to 7.45'
- unparsed cell cts13158-tbl-0003:row4:col2 = '10.5 to 12.3'
- unparsed cell cts13158-tbl-0003:row4:col4 = '10.3 to 12.7'
- unparsed cell cts13158-tbl-0003:row4:col6 = '10.6 to 11.8'
- unparsed cell cts13158-tbl-0003:row4:col8 = '10.6 to 11.9'
- unparsed cell cts13158-tbl-0003:row5:col2 = '6.90 to 8.68'
- unparsed cell cts13158-tbl-0003:row5:col4 = '6.58 to 8.74'
- unparsed cell cts13158-tbl-0003:row5:col6 = '5.68 to 6.62'
- unparsed cell cts13158-tbl-0003:row5:col8 = '5.66 to 6.69'
- unparsed cell cts13158-tbl-0003:row6:col2 = '18.0 to 28.1'
- unparsed cell cts13158-tbl-0003:row6:col4 = '16.2 to 29.8'
- unparsed cell cts13158-tbl-0003:row6:col6 = '9.22 to 12.6'
- unparsed cell cts13158-tbl-0003:row6:col8 = '8.82 to 13.1'
- unparsed cell cts13158-tbl-0003:row8:col2 = '0.44 to 0.52'
- unparsed cell cts13158-tbl-0003:row8:col4 = '0.44 to 0.52'
- unparsed cell cts13158-tbl-0003:row8:col6 = '0.68 to 0.81'
- unparsed cell cts13158-tbl-0003:row8:col8 = '0.68 to 0.81'
- unparsed cell cts13158-tbl-0003:row9:col2 = '0.19 to 0.39'
- unparsed cell cts13158-tbl-0003:row9:col4 = '0.13 to 0.43'
- unparsed cell cts13158-tbl-0003:row10:col2 = '–0.44 to –0.32'
- unparsed cell cts13158-tbl-0003:row10:col4 = '–0.44 to–0.32'
- unparsed cell cts13158-tbl-0003:row10:col6 = '–0.48 to–0.39'
- unparsed cell cts13158-tbl-0003:row10:col8 = '–0.47 to–0.39'
- unparsed cell cts13158-tbl-0003:row12:col2 = '0.83 to 1.23'
- unparsed cell cts13158-tbl-0003:row12:col4 = '0.75 to 1.31'
- unparsed cell cts13158-tbl-0003:row12:col6 = '0.51 to 0.79'
- unparsed cell cts13158-tbl-0003:row12:col8 = '0.49 to 0.83'
- unparsed cell cts13158-tbl-0003:row13:col2 = '–0.52 to–0.27'
- unparsed cell cts13158-tbl-0003:row13:col4 = '–0.50 to–0.25'
- unparsed cell cts13158-tbl-0003:row13:col6 = '–0.38 to–0.19'
- unparsed cell cts13158-tbl-0003:row13:col8 = '–0.38 to–0.18'
- unparsed cell cts13158-tbl-0003:row14:col2 = '0.02 to 0.45'
- unparsed cell cts13158-tbl-0003:row14:col4 = '0.02 to 0.48'
- unparsed cell cts13158-tbl-0003:row14:col6 = '0.13 to 0.58'
- unparsed cell cts13158-tbl-0003:row14:col8 = '0.15 to 0.58'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['relebactam', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` |  | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | imipenem/cilastatin/relebactam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | relebactam | unknown | mismatch |

</details>

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts13158-tbl-0003:row6:col5', 'cts13158-tbl-0003:row6:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts13158-tbl-0003:row4:col5', 'cts13158-tbl-0003:row4:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts13158-tbl-0003:row5:col5', 'cts13158-tbl-0003:row5:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.23 | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.23 L/h | ['cts13158-tbl-0003:row3:col5', 'cts13158-tbl-0003:row3:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.2 L | ['cts13158-tbl-0003:row4:col5', 'cts13158-tbl-0003:row4:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.15 L | ['cts13158-tbl-0003:row5:col5', 'cts13158-tbl-0003:row5:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brelebactam%5D%20Relebactam_Patel2022_reference&body=Drug%3A%20relebactam%0ARecord%3A%20Relebactam_Patel2022_reference%0APaper%3A%20Patel_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_relebactam/Relebactam_Patel2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:44 UTC</sub>
