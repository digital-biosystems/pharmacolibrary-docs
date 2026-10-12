<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sarilumab&quot;,&quot;href&quot;:&quot;drugs/drug_sarilumab/&quot;},{&quot;label&quot;:&quot;Xu_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sarilumab — `Sarilumab_Xu2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.741). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the structural parameter Vm/F has the dimensionally inconsistent unit mg/day instead of a volume like litres.**

The parameter labelled θ1 is described as the apparent volume of distribution of a metabolite, yet its extracted unit is mg/day. This dimension mismatch prevents the value of 5.63 from being valid for a volume term in the two-compartment model. Extracted — sarilumab: Vm/F 5.63 mg/day, Km 0.694 mg/L, V1/F 1.54 L, kabs 0.117 day−1, Q/F 0.148 L/day, V/F 12.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of theta_q319_wt: this record has none, the second reading 0.617; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Xu C et al., Modeling, Simulation, and Extrapolation…, Journal of pharmacokinetics… (2026)
  ·  DOI: [10.1007/s10928-026-10024-z](https://doi.org/10.1007/s10928-026-10024-z)

<div class="pk-model-meta" hidden drug="sarilumab" model-id="Sarilumab_Xu2026_reference" status="rejected" stale="false" population="patients with pcJIA and adult RA" measured-compound="sarilumab" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** Q/F, V/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 (Vm, mg/day) | `Q367` · Vm/F | 5.63 | mg/day | not captured | [mg] / [d] | 5.25 | llm (0.6) | Tab1:row1:col1, Tab1:row1:col2 | — | not captured |
| θ2 (Km, mg/L) | `Q1` · Km | 0.694 | mg/L | not captured | [mg] / [l] | 8.55 | llm (0.6) | Tab1:row2:col1, Tab1:row2:col2 | — | not captured |
| θ3 (Vc/F, L) | `Q290` · V1/F | 1.54 | L | 0.0015400000000000001 | [l] | 5.49 | llm (0.6) | Tab1:row3:col1, Tab1:row3:col2 | — | not captured |
| θ5 (Ka, day−1) | `Q49` · kabs | 0.117 | day−1 | 1.3541666666666667e-06 | [1] / [d] | 4.20 | llm (0.6) | Tab1:row5:col1, Tab1:row5:col2 | — | not captured |
| θ6 (Q/F, L/day) | `Q69` · Q/F | 0.148 | L/day | 1.7129629629629628e-09 | [l] / [d] | 3.39 | llm (0.6) | Tab1:row6:col1, Tab1:row6:col2 | — | not captured |
| θ7 (Vp/F, L) | `Q76` · V/F | 12.7 | L | 0.0127 | [l] | 11.1 | llm (0.6) | Tab1:row7:col1, Tab1:row7:col2 | — | not captured |
| θ12 (CLCR effect on Vm) | `Q900` · equation variable | 0.284 | CLCR effect on Vm | not captured | [clcreffectonvm] | 15.4 | llm (0.6) | Tab1:row11:col1, Tab1:row11:col2 | — | not captured |
| theta_vm_f_wt | `Q900` · theta_vm_f_wt | 0.617 | not captured | not captured | not captured | 12.5 | not captured (not captured) | Tab1:row8:col1, Tab1:row8:col2 | — | not captured |
| theta_q63_wt | `Q900` · theta_q63_wt | 0.672 | not captured | not captured | not captured | 16.6 | not captured (not captured) | Tab1:row9:col1, Tab1:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vmd' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'CL0/Fd' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'Vc/Fd' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'Kad' routed out of structural estimates ('Interindividual variability (CV%)')
- table section iiv: 'Block Vm–CL0/Fe' routed out of structural estimates ('Interindividual variability (CV%)')
- table section residual_error: 'σ2' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'θ1 (Vm, mg/day)' → Q367 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- routed 'θ4 (CLO/F, L/day)' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θ11 (WT effect on CL0/F)' — extend the ontology if this is a real PK parameter (source ['Tab1:row10:col1', 'Tab1:row10:col2'])
- unit_dimension_unknown: 'CLCR effect on Vm' (equation variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sarilumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'sarilumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row1:col3 = '5.56 [4.83; 6.52]'
- unparsed cell Tab1:row2:col3 = '0.667 [0.472; 0.970]'
- unparsed cell Tab1:row3:col3 = '1.53 [1.24; 1.90]'
- unparsed cell Tab1:row4:col3 = '0.213 [0.146; 0.267]'
- unparsed cell Tab1:row5:col3 = '0.117 [0.101; 0.133]'
- unparsed cell Tab1:row6:col3 = '0.155 [0.109; 0.209]'
- unparsed cell Tab1:row7:col3 = '13.2 [4.90; 44.3]'
- unparsed cell Tab1:row8:col3 = '0.616 [0.454; 0.801]'
- unparsed cell Tab1:row9:col3 = '0.680 [0.479; 0.903]'
- unparsed cell Tab1:row10:col3 = '1.01 [0.696; 1.58]'
- unparsed cell Tab1:row11:col3 = '0.271 [0.113; 0.409]'
- unparsed cell Tab1:row13:col3 = '39.3 [32.4; 47.1]'
- unparsed cell Tab1:row14:col3 = '74.2 [50.5; 104]'
- unparsed cell Tab1:row15:col3 = '30.1 [13.1; 41.4]'
- unparsed cell Tab1:row16:col3 = '36.4 [29.1; 43.4]'
- unparsed cell Tab1:row17:col3 = '−0.195 [−0.301; −0.094]'
- unparsed cell Tab1:row19:col3 = '0.459 [0.419; 0.500]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.741 (20/27 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q319_wt]` | not captured | 0.617 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_vm_f_wt]` | 0.617 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ12].parameter_id` | Q900 | Q367 | mismatch |
| `gpt-oss-120b` | `parameters[θ1].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[θ1].parameter_id` | Q367 | Q66 | mismatch |
| `gpt-oss-120b` | `parameters[θ4]` | not captured | 0.218 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ7].parameter_id` | Q76 | Q82 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab1:row2:col1', 'Tab1:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row3:col1', 'Tab1:row3:col2'] |
| C5_dimension_Q367 | fail | [mass] / [time] | mg/day | not captured | not captured | ['Tab1:row1:col1', 'Tab1:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row6:col1', 'Tab1:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row7:col1', 'Tab1:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.54 L | not captured | not captured | ['Tab1:row3:col1', 'Tab1:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.7 L | not captured | not captured | ['Tab1:row7:col1', 'Tab1:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sarilumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xu_2026` / `Xu_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:27 UTC</sub>
