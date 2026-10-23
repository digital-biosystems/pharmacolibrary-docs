<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;safinamide&quot;,&quot;href&quot;:&quot;drugs/drug_safinamide/&quot;},{&quot;label&quot;:&quot;Loprete_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# safinamide — `Safinamide_Loprete2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The safinamide record was rejected because the absolute bioavailability Fab (0.689, study STUD016) was reported alongside already bioavailability-adjusted parameters CL/F (3.40 L/h) and V/F (110 L), violating apparent-parameter coherence through double correction.

<div class="pk-model-meta" hidden drug="safinamide" model-id="Safinamide_Loprete2016_reference" status="rejected" stale="false" population="adults with Parkinson&#39;s disease on stable levodopa therapy" measured-compound="safinamide" parameterization="apparent" topology="1C"></div>

## Citation
Loprete L, Leuratti C, Cattaneo C, Thapar MM, Farrell C, Sardina M. Population pharmacokinetic and pharmacodynamic analyses of safinamide in subjects with Parkinson's disease. Pharmacology research & perspectives 4(5):e00251 (2016).
  ·  DOI: [10.1002/prp2.251](https://doi.org/10.1002/prp2.251)

## Population and dosing

**Population:** adults with Parkinson's disease on stable levodopa therapy · condition Parkinson's disease · age group adult · n = 623.

**Dosing:** 50, 100, 150, 200 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 3.40 | L/h |
| Vd/F (L) | V/F | 110 | L |
| KA (h−1) | kabs | 0.335 | h−1 |
| F (STUD016) | Fab | 0.689 | STUD016 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The safinamide record was rejected because the absolute bioavailability Fab (0.689, study STUD016) was reported alongside already bioavailability-adjusted parameters CL/F (3.40 L/h) and V/F (110 L), violating apparent-parameter coherence through double correction.**

The paper reports safinamide clearance and volume as F-adjusted apparent values (CL/F 3.40 L/h, V/F 110 L) together with an absolute bioavailability Fab of 0.689, so applying the bioavailability again would double-correct the apparent parameters. Additionally, the Fab parameter was reported with the study identifier 'STUD016' in place of a proper unit, so it could not be expressed in a standard dimensionless form and reached the model builder without a usable value. The coherence check therefore failed and the record was rejected. Extracted — safinamide: CL/F 3.4 L/h, V/F 110 L, kabs 0.335 h−1, Fab 0.689 STUD016.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[ka].value`: this record has 0.335, the second reading 0384; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 3.40 | L/h | 9.444e-07 | m3/s | l/h | exact (1) | prp2251-tbl-0003:row2:col1, prp2251-tbl-0003:row2:col2, prp2251-tbl-0003:row2:col3, prp2251-tbl-0003:row2:col5, prp2251-tbl-0003:row2:col6 |
| Vd/F (L) | `Q76` · V/F | 110 | L | 0.11 | m3 | l | exact (1) | prp2251-tbl-0003:row3:col1, prp2251-tbl-0003:row3:col2, prp2251-tbl-0003:row3:col3, prp2251-tbl-0003:row3:col5, prp2251-tbl-0003:row3:col6 |
| KA (h−1) | `Q49` · kabs | 0.335 | h−1 | 9.306e-05 | 1/s | 1/h | exact (1) | prp2251-tbl-0003:row4:col1, prp2251-tbl-0003:row4:col2, prp2251-tbl-0003:row4:col3, prp2251-tbl-0003:row4:col5, prp2251-tbl-0003:row4:col6 |
| F (STUD016) | `Q40` · Fab | 0.689 | STUD016 |  |  |  | exact (1) | prp2251-tbl-0003:row5:col1, prp2251-tbl-0003:row5:col2, prp2251-tbl-0003:row5:col3, prp2251-tbl-0003:row5:col5, prp2251-tbl-0003:row5:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω 2 Vd' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ 2prop' routed out of structural estimates ('Residual variability')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=safinamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka].value` | 0.335 | 0384 | mismatch |
| `gpt-oss-120b` | `parameters[vd/f].value` | 110 | 107 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 22 | 22.43 | 1.019 | 0.25 | reported t½β |
| C2_base_Q27 | fail | 3.4 | 3.59 | 1.056 | 0.05 | footnote reference category |
| C2_base_Q40 | fail | 0.689 | 3.59 | 5.21 | 0.05 | footnote reference category |
| C2_base_Q76 | fail | 110 | 120 | 1.091 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['prp2251-tbl-0003:row2:col1', 'prp2251-tbl-0003:row2:col2', 'prp2251-tbl-0003:row2:col3', 'prp2251-tbl-0003:row2:col5', 'prp2251-tbl-0003:row2:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['prp2251-tbl-0003:row4:col1', 'prp2251-tbl-0003:row4:col2', 'prp2251-tbl-0003:row4:col3', 'prp2251-tbl-0003:row4:col5', 'prp2251-tbl-0003:row4:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['prp2251-tbl-0003:row3:col1', 'prp2251-tbl-0003:row3:col2', 'prp2251-tbl-0003:row3:col3', 'prp2251-tbl-0003:row3:col5', 'prp2251-tbl-0003:row3:col6'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.689 with apparent parameterization |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.4 L/h |  |  | ['prp2251-tbl-0003:row2:col1', 'prp2251-tbl-0003:row2:col2', 'prp2251-tbl-0003:row2:col3', 'prp2251-tbl-0003:row2:col5', 'prp2251-tbl-0003:row2:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 110 L |  |  | ['prp2251-tbl-0003:row3:col1', 'prp2251-tbl-0003:row3:col2', 'prp2251-tbl-0003:row3:col3', 'prp2251-tbl-0003:row3:col5', 'prp2251-tbl-0003:row3:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsafinamide%5D%20Safinamide_Loprete2016_reference&body=Drug%3A%20safinamide%0ARecord%3A%20Safinamide_Loprete2016_reference%0APaper%3A%20Loprete_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_safinamide/Safinamide_Loprete2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 14:22 UTC</sub>
