<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ritlecitinib&quot;,&quot;href&quot;:&quot;drugs/drug_ritlecitinib/&quot;},{&quot;label&quot;:&quot;Wojciechowski_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ritlecitinib — `Ritlecitinib_Wojciechowski2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — ritlecitinib: CL/F 107 L/h, V1/F 151 L, Q/F 0.297 L/h, V2/F 4.87 L, kabs 7.91 ka; /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ritlecitinib, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Wojciechowski J et al., Evolution of Ritlecitinib Population Ph…, Clinical pharmacokinetics (2023)
  ·  DOI: [10.1007/s40262-023-01318-3](https://doi.org/10.1007/s40262-023-01318-3)

<div class="pk-model-meta" hidden drug="ritlecitinib" model-id="Ritlecitinib_Wojciechowski2023_reference" status="rejected" stale="false" population="healthy participants and patients with rheumatoid arthritis, ulcerative colitis, alopecia areata, and vitiligo" measured-compound="ritlecitinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance (CL/F; L/h) | `Q27` · CL/F | 107 | L/h | 2.9722222222222223e-05 | L/h | not captured | exact (1.0) | Wojciechowski_2023_table_p10_1:row3:col1, Wojciechowski_2023_table_p10_1:row3:col2, Wojciechowski_2023_table_p10_1:row3:col3 | — | not captured |
| Apparent volume of the central compartment (Vc/F; L) | `Q290` · V1/F | 151 | L | 0.151 | L | not captured | exact (1.0) | Wojciechowski_2023_table_p10_1:row4:col1, Wojciechowski_2023_table_p10_1:row4:col2, Wojciechowski_2023_table_p10_1:row4:col3 | — | not captured |
| Apparent inter-compartmental clearance (Q/F; L/h) | `Q69` · Q/F | 0.297 | L/h | 8.25e-08 | L/h | not captured | llm_corrected (0.6) | Wojciechowski_2023_table_p10_1:row5:col1, Wojciechowski_2023_table_p10_1:row5:col2, Wojciechowski_2023_table_p10_1:row5:col3 | — | not captured |
| Apparent volume of the peripheral compartment (Vp/F; L) | `Q82` · V2/F | 4.87 | L | 0.00487 | L | not captured | exact (1.0) | Wojciechowski_2023_table_p10_1:row6:col1, Wojciechowski_2023_table_p10_1:row6:col2, Wojciechowski_2023_table_p10_1:row6:col3 | — | not captured |
| First-order absorption rate constant (ka; /h) | `Q49` · kabs | 7.91 | ka; /h | not captured | [ka] | not captured | llm_confirmed (0.6) | Wojciechowski_2023_table_p10_1:row9:col1, Wojciechowski_2023_table_p10_1:row9:col2, Wojciechowski_2023_table_p10_1:row9:col3 | — | not captured |
| theta_q322_category | `Q900` · theta_q322_category | 16.5 | not captured | not captured | not captured | not captured | not captured (not captured) | Wojciechowski_2023_table_p10_1:row8:col1, Wojciechowski_2023_table_p10_1:row8:col2, Wojciechowski_2023_table_p10_1:row8:col3 | — | not captured |
| theta_q41_hepatic | `Q900` · theta_q41_hepatic | 0.255 | not captured | not captured | not captured | not captured | not captured (not captured) | Wojciechowski_2023_table_p10_1:row18:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω²CL/F (% CV)' routed out of structural estimates ('Inter-individual variability')
- dropped unlinked row (NIL): 'Objective function value' — extend the ontology if this is a real PK parameter (source ['Wojciechowski_2023_table_p10_1:row0:col1', 'Wojciechowski_2023_table_p10_1:row0:col2', 'Wojciechowski_2023_table_p10_1:row0:col3'])
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['Wojciechowski_2023_table_p10_1:row1:col1', 'Wojciechowski_2023_table_p10_1:row1:col2', 'Wojciechowski_2023_table_p10_1:row1:col3'])
- unit_dimension_unknown: 'CL/F; L/h' (CL/F)
- unit_dimension_unknown: 'Vc/F; L' (V1/F)
- unit_dimension_unknown: 'Q/F; L/h' (Q/F)
- unit_dimension_unknown: 'Vp/F; L' (V2/F)
- unit_dimension_mismatch: 'First-order absorption rate constant (ka; /h)' → Q49 (unit 'dimensionless' vs ontology '1 / [time]') — route to review
- routed 'Effect of inflammatory disease patients on σ²pro (%)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Effect of severe renal impairment on F (%)' — extend the ontology if this is a real PK parameter (source ['Wojciechowski_2023_table_p10_1:row19:col3'])
- covariate effect for Q322 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q41 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent clearance (CL/F; L/h)' → L/h (from the paper text: "The prompt's parameter list explicitly provides the unit in parentheses: 'Apparent clearance (CL/F; L/h) = 107'. Additio")
- implicit units: 'Apparent volume of the central compartment (Vc/F; L)' → L (from the paper text: "The prompt's parameter list explicitly provides the unit in parentheses: 'Apparent volume of the central compartment (Vc")
- implicit units: 'Apparent inter-compartmental clearance (Q/F; L/h)' → L/h (from the paper text: "The prompt's parameter list explicitly provides the unit in parentheses: 'Apparent inter-compartmental clearance (Q/F; L")
- implicit units: 'Apparent volume of the peripheral compartment (Vp/F; L)' → L (from the paper text: "The prompt's parameter list explicitly provides the unit in parentheses: 'Apparent volume of the peripheral compartment ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ritlecitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Wojciechowski_2023_table_p10_1: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | ritlecitinib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ritlecitinib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row3:col1', 'Wojciechowski_2023_table_p10_1:row3:col2', 'Wojciechowski_2023_table_p10_1:row3:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row4:col1', 'Wojciechowski_2023_table_p10_1:row4:col2', 'Wojciechowski_2023_table_p10_1:row4:col3'] |
| C5_dimension_Q49 | fail | dimensionless | ka; /h | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row9:col1', 'Wojciechowski_2023_table_p10_1:row9:col2', 'Wojciechowski_2023_table_p10_1:row9:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row5:col1', 'Wojciechowski_2023_table_p10_1:row5:col2', 'Wojciechowski_2023_table_p10_1:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row6:col1', 'Wojciechowski_2023_table_p10_1:row6:col2', 'Wojciechowski_2023_table_p10_1:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 107 L/h | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row3:col1', 'Wojciechowski_2023_table_p10_1:row3:col2', 'Wojciechowski_2023_table_p10_1:row3:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 151 L | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row4:col1', 'Wojciechowski_2023_table_p10_1:row4:col2', 'Wojciechowski_2023_table_p10_1:row4:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.87 L | not captured | not captured | ['Wojciechowski_2023_table_p10_1:row6:col1', 'Wojciechowski_2023_table_p10_1:row6:col2', 'Wojciechowski_2023_table_p10_1:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ritlecitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wojciechowski_2023` / `Wojciechowski_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:12 UTC</sub>
