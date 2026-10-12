<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;envafolimab&quot;,&quot;href&quot;:&quot;drugs/drug_envafolimab/&quot;},{&quot;label&quot;:&quot;Cui_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# envafolimab — `Envafolimab_Cui2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The envafolimab record, including its reported terminal half-life of 34.0 days, was held back after an inconclusive reference comparison, not a demonstrated parameter fault.**

The reference comparison failed without computing a ratio, so it does not establish that envafolimab’s terminal half-life of 34.0 days—or another reported parameter—is wrong. The record’s hold reflects this inconclusive result. Extracted — envafolimab: t1/2z 34 days, CL 0.0478 L/h, V 15.5 L, kabs 0.0147 1/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].value`: this record has 0.0478, the second reading 0.0484; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Cui C et al., Model-informed drug development of enva…, The oncologist (2024)
  ·  DOI: [10.1093/oncolo/oyae102](https://doi.org/10.1093/oncolo/oyae102)

## Model component
<dbs-pgx drug="envafolimab" model-id="Envafolimab_Cui2024_reference" status="needs_review" stale="false" population="patients with advanced solid tumors" measured-compound="envafolimab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| T 50 | `Q57` · t1/2z | 34.0 | days | 2937600.0 | h | not captured | llm (0.6) | T1:row3:col2, T1:row3:col5, T1:row3:col6 | — | not captured |
| CL | `Q22` · CL | 0.0478 | L/h | 1.3277777777777778e-08 | L/h | not captured | exact (1.0) | T1:row4:col2, T1:row4:col4, T1:row4:col5, T1:row4:col6 | — | not captured |
| V | `Q61` · V | 15.5 | L | 0.0155 | L | not captured | exact (1.0) | T1:row5:col2, T1:row5:col4, T1:row5:col5, T1:row5:col6 | — | not captured |
| K a | `Q49` · kabs | 0.0147 | 1/h | 4.083333333333333e-06 | 1/h | not captured | space_fold (0.95) | T1:row6:col1, T1:row6:col2, T1:row6:col4, T1:row6:col5, T1:row6:col6 | — | not captured |
| Epsilon | `Q900` · equation variable | 0.0501 | not captured | not captured | not captured | not captured | llm (0.6) | T1:row10:col2, T1:row10:col5, T1:row10:col6 | — | not captured |
| theta_equation_variable_crcl_power | `Q900` · theta_equation_variable_crcl_power | 0.475 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row7:col2, T1:row7:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row2:col2', 'T1:row2:col5', 'T1:row2:col6'])
- dropped unlinked row (NIL): 'CL-AMERICAN' — extend the ontology if this is a real PK parameter (source ['T1:row8:col2', 'T1:row8:col6'])
- dropped unlinked row (NIL): 'CL-JAPANESE' — extend the ontology if this is a real PK parameter (source ['T1:row9:col2', 'T1:row9:col6'])
- implicit units: 'T 50' → days (from the paper text: 'The paper states: “the time for clearance to reduce by half was 34 days.”')
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper defines CL/F as apparent systemic clearance but does not state its unit; clearance is conventionally reported ')
- implicit units: 'V' → L (from the popPK convention: 'The paper defines V/F as apparent volume of distribution but does not state its unit; volume is conventionally reported ')
- implicit units: 'K a' → 1/h (from the popPK convention: 'The paper identifies Ka as an absorption rate constant but does not state its unit; first-order rate constants are conve')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q61 (V)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=envafolimab
- molar mass: none found for 'envafolimab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T1:row2:col3 = '(−0.560, −0.318)'
- unparsed cell T1:row2:col4 = '0 FIX (NA)'
- unparsed cell T1:row2:col7 = '(−0.727, −0.253)'
- unparsed cell T1:row3:col3 = '(9.70, 58.3)'
- unparsed cell T1:row3:col4 = '0 FIX (NA)'
- unparsed cell T1:row3:col7 = '(13.8, 77.6)'
- unparsed cell T1:row4:col3 = '(0.0404, 0.0552)'
- unparsed cell T1:row4:col7 = '(0.0400, 0.0630)'
- unparsed cell T1:row5:col3 = '(13.2, 17.8)'
- unparsed cell T1:row5:col7 = '(13.6, 17.1)'
- unparsed cell T1:row6:col3 = '(0.0120, 0.0170)'
- unparsed cell T1:row6:col7 = '(0.0125, 0.0171)'
- unparsed cell T1:row7:col3 = '(0.295, 0.655)'
- unparsed cell T1:row7:col7 = '(0.316, 0.596)'
- unparsed cell T1:row8:col3 = '(0.777, 1.01)'
- unparsed cell T1:row8:col7 = '(0.739, 1.09)'
- unparsed cell T1:row9:col3 = '(0.624, 0.856)'
- unparsed cell T1:row9:col7 = '(0.661, 0.827)'
- unparsed cell T1:row10:col7 = '(0.0418, 0.0604)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | [] | ['power'] | mismatch |
| `qwen3.8-27b` | `parameters[cl].value` | 0.0478 | 0.0484 | mismatch |
| `qwen3.8-27b` | `parameters[epsilon]` | 0.0501 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_crcl_power]` | not captured | 0.474 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_crcl_power]` | 0.475 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v].value` | 15.5 | 15.3 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row4:col2', 'T1:row4:col4', 'T1:row4:col5', 'T1:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row6:col1', 'T1:row6:col2', 'T1:row6:col4', 'T1:row6:col5', 'T1:row6:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T1:row3:col2', 'T1:row3:col5', 'T1:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0478 | not captured | not captured | ['T1:row4:col2', 'T1:row4:col4', 'T1:row4:col5', 'T1:row4:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0478 L/h | not captured | not captured | ['T1:row4:col2', 'T1:row4:col4', 'T1:row4:col5', 'T1:row4:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 15.5 L | not captured | not captured | ['T1:row5:col2', 'T1:row5:col4', 'T1:row5:col5', 'T1:row5:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_envafolimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cui_2024` / `Cui_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:37 UTC</sub>
