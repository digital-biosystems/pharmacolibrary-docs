<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03B&quot;,&quot;href&quot;:&quot;atc/R03B.md&quot;},{&quot;label&quot;:&quot;revefenacin&quot;,&quot;href&quot;:&quot;drugs/drug_revefenacin/&quot;},{&quot;label&quot;:&quot;Lo_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# revefenacin — `Revefenacin_Lo2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136), gpt-oss:120b (not confirmed, agreement 0.55). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The absorption rate constant for revefenacin is recorded as 200 L/h, a dimensionally invalid unit for a first-order rate constant.**

The record lists the absorption rate constant with a value of 200 and a unit of L/h, which is a volume flow rate rather than a reciprocal time unit. This dimensional mismatch on a structural parameter caused the model to be rejected. A second reader disagreed with this value, suggesting 0, but the primary record retains the invalid unit. Extracted — revefenacin: CL 668 L/h, V1/F 867 L, Q/F 2.61e+03 L/h, V2/F 1.55e+04 L, kabs 200 L/h, Fab 0.553; THRX-195518: CL 53.2 L/h, V1/F 20.4 L, Q/F 36.3 L/h, V2/F 35.8 L, fm 0.21.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has revefenacin, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Lo A et al., Population Pharmacokinetics of Revefena…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00938-3](https://doi.org/10.1007/s40262-020-00938-3)

<div class="pk-model-meta" hidden drug="revefenacin" model-id="Revefenacin_Lo2021_reference" status="rejected" stale="false" population="patients with chronic obstructive pulmonary disease" measured-compound="revefenacin" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted, plus 1 covariate effect.

**Parameterization:** Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Revefenacin | `Q22` · CL | 668 | L/h | 0.00018555555555555556 | L/h | 3.17 | exact (1.0) | Tab2:row1:col2 | — | not captured |
| V1/F, L | `Q290` · V1/F | 867 | L | 0.867 | [l] | not captured | exact (1.0) | Tab2:row2:col1, Tab2:row2:col2 | — | not captured |
| Q/F, L/h | `Q69` · Q/F | 2607 | L/h | 0.0007241666666666667 | [l] / [h] | not captured | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2 | — | not captured |
| V2/F, L | `Q82` · V2/F | 15495 | L | 15.495000000000001 | [l] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2 | — | not captured |
| Ka, L/h | `Q49` · kabs | 200 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| Study 1 effect on F1 | `Q40` · Fab | 0.553 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| THRX-195518 | `Q22` · CL | 53.2 | L/h | 1.4777777777777778e-05 | L/h | 1.84 | exact (1.0) | Tab2:row10:col2 | — | not captured |
| V3/F, L | `Q290` · V1/F | 20.4 | L | 0.020399999999999998 | [l] | not captured | exact (1.0) | Tab2:row11:col1, Tab2:row11:col2 | — | not captured |
| Qmet/F, L/h | `Q69` · Q/F | 36.3 | L/h | 1.0083333333333332e-05 | [l] / [h] | not captured | exact (1.0) | Tab2:row12:col1, Tab2:row12:col2 | — | not captured |
| V4/F, L | `Q82` · V2/F | 35.8 | L | 0.0358 | [l] | not captured | exact (1.0) | Tab2:row13:col1, Tab2:row13:col2 | — | not captured |
| Fmet | `Q45` · fm | 0.21 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row14:col1, Tab2:row14:col2 | — | not captured |
| theta_q_f_weight | `Q900` · theta_q_f_weight | 0.485 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Revefenacin' routed out of structural estimates ('Inter-individual variability (%)')
- table section iiv: 'THRX-195518' routed out of structural estimates ('Inter-individual variability (%)')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- linked 'Revefenacin' as 'CL' → Q22 (CL) for  — compound marker removed
- unit_dimension_mismatch: 'Ka, L/h' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q40 ('Dose effect on F1', value '0.0987') — already have one for this compound
- implicit units: 'Revefenacin' → L/h (from the paper text: "The text states: 'In the final model (Table 2), the population estimate of CL/F was 668 L/h'")
- implicit units: 'THRX-195518' → L/h (from the popPK convention: 'The parameter is a total clearance (CL). In population pharmacokinetics, clearance is conventionally expressed in L/h. T')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=revefenacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 20 linked by role; re-tagged parent→THRX-195518 ×10
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |
| `gpt-oss:120b` | not confirmed | 0.55 (11/20 fields) | 9 |

<details><summary>28 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['revefenacin', 'thrx-195518', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[fmet]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fmet]` | 0.21 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 200 | 0 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 2607 | 31.0 | mismatch |
| `gpt-oss-120b` | `parameters[qmet/f]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qmet/f]` | 36.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[revefenacin]` | 668 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[study 1 effect on f1].value` | 0.553 | 33.7 | mismatch |
| `gpt-oss-120b` | `parameters[thrx-195518]` | not captured | 53.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[thrx-195518]` | 53.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f].value` | 867 | 26.9 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 15495 | 52.2 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 52.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 20.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | 35.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | revefenacin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | revefenacin | unknown | mismatch |
| `gpt-oss:120b` | `parameters[fmet].value` | 0.21 | 0 | mismatch |
| `gpt-oss:120b` | `parameters[ka].value` | 200 | 0 | mismatch |
| `gpt-oss:120b` | `parameters[q/f].value` | 2607 | 31.0 | mismatch |
| `gpt-oss:120b` | `parameters[qmet/f].value` | 36.3 | 0 | mismatch |
| `gpt-oss:120b` | `parameters[study 1 effect on f1].value` | 0.553 | 33.7 | mismatch |
| `gpt-oss:120b` | `parameters[v1/f].value` | 867 | 26.9 | mismatch |
| `gpt-oss:120b` | `parameters[v2/f].value` | 15495 | 52.2 | mismatch |
| `gpt-oss:120b` | `parameters[v3/f].value` | 20.4 | 52.1 | mismatch |
| `gpt-oss:120b` | `parameters[v4/f].value` | 35.8 | 0 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 668 L/h | not captured | not captured | ['Tab2:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 53.2 L/h | not captured | not captured | ['Tab2:row10:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 867 L | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 20.4 L | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.55e+04 L | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 35.8 L | not captured | not captured | ['Tab2:row13:col1', 'Tab2:row13:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_revefenacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lo_2021` / `Lo_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:28 UTC</sub>
