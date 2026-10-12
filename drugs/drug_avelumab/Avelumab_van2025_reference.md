<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;van_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_van2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; cL_ratio has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — avelumab: CL 0.0285 L/h, CL_ratio 0.217.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has none, the second reading avelumab → anti-drug antibodies (immunogenicity); it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
van der Walt JS et al., Interplay between pharmacokinetics and…, Journal of pharmacokinetics… (2025)
  ·  DOI: [10.1007/s10928-025-09971-w](https://doi.org/10.1007/s10928-025-09971-w)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_van2025_reference" status="needs_review" stale="false" population="patients with several tumor types" measured-compound="avelumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL (L/h) | `Q22` · CL | 0.0285 | L/h | 7.916666666666666e-09 | [l] / [h] | not captured | tv_prefix (0.95) | van_2025_table_2:row3:col2, van_2025_table_2:row3:col4, van_2025_table_2:row3:col5, van_2025_table_2:row3:col6, van_2025_table_2:row3:col9, van_2025_table_2:row3:col10, van_2025_table_2:row3:col12, van_2025_table_2:row3:col13 | — | not captured |
| Maximum change | `Q31` · CL_ratio | 0.217 | not captured | not captured | not captured | not captured | llm (0.6) | van_2025_table_5:row22:col5 | — | not captured |
| theta_q67_category | `Q900` · theta_q67_category | 0.00461 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row4:col1, Tab4:row4:col3, Tab4:row4:col5 | — | not captured |
| theta_q47_category | `Q900` · theta_q47_category | 0.139 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row5:col1, Tab4:row5:col3, Tab4:row5:col5 | — | not captured |
| theta_q900_ada_baseline_change_in_01 | `Q900` · theta_q900_ada_baseline_change_in_01 | 4.84 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row6:col3, Tab4:row6:col5 | — | not captured |
| theta_cl_ratio_ada | `Q900` · theta_cl_ratio_ada | 19.0 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_2:row2:col4, van_2025_table_2:row2:col5, van_2025_table_2:row2:col6, van_2025_table_2:row2:col10, van_2025_table_2:row2:col12, van_2025_table_2:row2:col13 | — | not captured |
| theta_q900_ada_rate_constant_to_ada_01_h | `Q900` · theta_q900_ada_rate_constant_to_ada_01_h | 0.00404 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_5:row12:col2, van_2025_table_5:row12:col4 | — | not captured |
| theta_q335_ada | `Q900` · theta_q335_ada | 0.116 | not captured | not captured | not captured | not captured | not captured (not captured) | van_2025_table_5:row21:col3, van_2025_table_5:row21:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col1', 'Tab4:row2:col3', 'Tab4:row2:col5', 'van_2025_table_5:row1:col1', 'van_2025_table_5:row1:col2', 'van_2025_table_5:row1:col3', 'van_2025_table_5:row1:col4', 'van_2025_table_5:row1:col5'])
- dropped unlinked row (NIL): 'ΔOFV' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1', 'van_2025_table_5:row2:col1'])
- dropped unlinked row (NIL): 'GC/GEJC' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col5'])
- dropped duplicate Q22 ('Clearance (CL), L/h', value '0.028') — already have one for this compound
- dropped PD-category row '50% of maximum change' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['van_2025_table_5:row23:col5', 'van_2025_table_5:row27:col4', 'van_2025_table_5:row27:col5'])
- dropped PD-category row 'Shape of effect curve' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['van_2025_table_5:row24:col5', 'van_2025_table_5:row28:col4', 'van_2025_table_5:row28:col5'])
- covariate effect for Q67 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Maximum change' — the LLM proposed 'dimensionless', whose dimension does not fit Q31; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- molar mass: none found for 'avelumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row3:col3 = '− 31.041'
- unparsed cell Tab4:row3:col5 = '− 87.115'
- unparsed cell Tab4:row4:col2 = '18.10%'
- unparsed cell Tab4:row4:col4 = '18.10%'
- unparsed cell Tab4:row4:col6 = '20.50%'
- unparsed cell Tab4:row5:col2 = '17.60%'
- unparsed cell Tab4:row5:col4 = '17.80%'
- unparsed cell Tab4:row5:col6 = '17.70%'
- unparsed cell Tab4:row6:col4 = '40.50%'
- unparsed cell Tab4:row6:col6 = '42.20%'
- unparsed cell Tab4:row8:col6 = '30%'
- transposed table van_2025_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell van_2025_table_2:row3:col3 = '0.0279/0.335'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell van_2025_table_5:row2:col2 = '− 79.589'
- unparsed cell van_2025_table_5:row2:col3 = '− 75.954'
- unparsed cell van_2025_table_5:row2:col4 = '− 120.121'
- unparsed cell van_2025_table_5:row2:col5 = '− 70.03'
- unparsed cell van_2025_table_5:row4:col1 = '0.0272*'
- unparsed cell van_2025_table_5:row4:col3 = '0.0272*'
- unparsed cell van_2025_table_5:row4:col5 = '0.0272*'
- unparsed cell van_2025_table_5:row12:col1 = '0.00404*'
- unparsed cell van_2025_table_5:row12:col3 = '0.00404*'
- unparsed cell van_2025_table_5:row12:col5 = '0.00404*'
- companion parameter table 5 transcribed (19 record(s))
- LLM selected parameter table(s) 2, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [] | [['avelumab', 'anti-drug antibodies', 'immunogenicity']] | mismatch |
| `qwen3.8-27b` | `parameters[clearance (cl)]` | not captured | 0.028 | only_one_extracted |
| `qwen3.8-27b` | `parameters[maximum change]` | 0.217 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_ratio_ada]` | 19.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q302_category]` | not captured | 0.00461 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q346_ada_baseline_change_in_01]` | not captured | 4.84 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q47_category]` | 0.139 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q67_ada_rate_constant_to_ada_01_h]` | not captured | 0.00404 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q67_category].value` | 0.00461 | 0.139 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q900_ada_baseline_change_in_01]` | 4.84 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_ada_rate_constant_to_ada_01_h]` | 0.00404 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvcl]` | 0.0285 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2025_table_2:row3:col2', 'van_2025_table_2:row3:col4', 'van_2025_table_2:row3:col5', 'van_2025_table_2:row3:col6', 'van_2025_table_2:row3:col9', 'van_2025_table_2:row3:col10', 'van_2025_table_2:row3:col12', 'van_2025_table_2:row3:col13'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2025_table_5:row22:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0285 | not captured | not captured | ['van_2025_table_2:row3:col2', 'van_2025_table_2:row3:col4', 'van_2025_table_2:row3:col5', 'van_2025_table_2:row3:col6', 'van_2025_table_2:row3:col9', 'van_2025_table_2:row3:col10', 'van_2025_table_2:row3:col12', 'van_2025_table_2:row3:col13'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0285 L/h | not captured | not captured | ['van_2025_table_2:row3:col2', 'van_2025_table_2:row3:col4', 'van_2025_table_2:row3:col5', 'van_2025_table_2:row3:col6', 'van_2025_table_2:row3:col9', 'van_2025_table_2:row3:col10', 'van_2025_table_2:row3:col12', 'van_2025_table_2:row3:col13'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2025` / `van_2025::reference`)


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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:40 UTC</sub>
