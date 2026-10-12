<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;upadacitinib&quot;,&quot;href&quot;:&quot;drugs/drug_upadacitinib/&quot;},{&quot;label&quot;:&quot;Kl\u00fcnder_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# upadacitinib — `Upadacitinib_Klnder2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.85). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CL_ratio and Km have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — upadacitinib: CL/F 40.9 L/h, V1/F 156 L, Q/F 3.22 L/h, V2/F 68 L, kabs 0.0523 1/h, tlag 0.154 h, AUC%ext 74.5, D1 3.29 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bioavailability of the extended-release formulation relative to the immediate-release formulation: this record has none, the second reading 76.2; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Klünder B et al., Population Pharmacokinetics of Upadacit…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00739-3](https://doi.org/10.1007/s40262-019-00739-3)

<div class="pk-model-meta" hidden drug="upadacitinib" model-id="Upadacitinib_Klnder2019_reference" status="needs_review" stale="false" population="healthy subjects and subjects with rheumatoid arthritis" measured-compound="upadacitinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 40.9 | L/h | 1.1361111111111111e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 156 | L | 0.156 | [l] | not captured | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 3.22 | L/h | 8.944444444444445e-07 | [l] / [h] | not captured | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 68.0 | L | 0.068 | [l] | not captured | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3 | — | not captured |
| Extended-release Ka (1/h) | `Q49` · kabs | 0.0523 | 1/h | 1.4527777777777777e-05 | 1/h | not captured | boundary_llm_dim_refused (0.8) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3 | — | not captured |
| Extended-release absorption lag time (h) | `Q83` · tlag | 0.154 | h | 554.4 | [h] | not captured | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3 | — | not captured |
| Fraction of extended-release dose absorbed through zero-order process (%) | `Q84` · AUC%ext | 74.5 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row8:col1, Tab3:row8:col2, Tab3:row8:col3 | — | not captured |
| Zero-order infusion duration (h) | `Q310` · D1 | 3.29 | h | 11844.0 | [h] | not captured | exact (1.0) | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3 | — | not captured |
| CL/F ratio of RA patients compared with healthy subjects | `Q31` · CL_ratio | 0.754 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row13:col1, Tab3:row13:col2, Tab3:row13:col3 | — | not captured |
| ISV on CL/F in phase II/III (%) | `Q1` · Km | 36.5 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row18:col1, Tab3:row18:col2, Tab3:row18:col3 | — | not captured |
| theta_cl_f_creatinine_power | `Q900` · theta_cl_f_creatinine_power | 0.256 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row14:col1, Tab3:row14:col2, Tab3:row14:col3 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.804 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row15:col1, Tab3:row15:col2, Tab3:row15:col3 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.132 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row16:col1, Tab3:row16:col2, Tab3:row16:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('Immediate-release Ka (1/h)', value '2.77') — already have one for this compound
- dropped duplicate Q83 ('Immediate-release absorption lag time (h)', value '0.200') — already have one for this compound
- dropped unlinked row (NIL): 'ISV on CL/F in phase I (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row17:col1', 'Tab3:row17:col2', 'Tab3:row17:col3'])
- dropped unlinked row (NIL): 'ISV on Vc/F in phase I (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row19:col1', 'Tab3:row19:col2', 'Tab3:row19:col3'])
- routed 'ISV on Vc/F in phase II/III (%)' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- dropped duplicate Q49 ('ISV on extended-release Ka (%)', value '66.8') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Extended-release Ka (1/h)' → 1/h (from the paper text: "The unit is explicitly provided in the parameter label as '(1/h)'.")
- implicit units: 'ISV on CL/F in phase II/III (%)' — the LLM proposed '%', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=upadacitinib

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.85 (17/20 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability of the extended-release formulation relative to the immediate-release formulation]` | not captured | 76.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of extended-release dose absorbed through zero-order process].parameter_id` | Q84 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[isv on cl/f in phase ii/iii]` | 36.5 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row9:col1', 'Tab3:row9:col2', 'Tab3:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col3'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row18:col1', 'Tab3:row18:col2', 'Tab3:row18:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1', 'Tab3:row13:col2', 'Tab3:row13:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 40.9 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 156 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 68 L | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_upadacitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klünder_2019` / `Klünder_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:01 UTC</sub>
