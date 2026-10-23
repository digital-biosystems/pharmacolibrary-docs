<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cetuximab&quot;,&quot;href&quot;:&quot;drugs/drug_cetuximab/&quot;},{&quot;label&quot;:&quot;Grisic_2020 \u00b7 mmcl_lcl&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cetuximab — `Cetuximab_Grisic2020_mmcl_lcl`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Vmax has no unit.

<div class="pk-model-meta" hidden drug="cetuximab" model-id="Cetuximab_Grisic2020_mmcl_lcl" status="needs_review" stale="false" population="adults with metastatic colorectal cancer" measured-compound="cetuximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Grisic AM, Khandelwal A, Bertolino M, Huisinga W, Girard P, Kloft C. Semimechanistic Clearance Models of Oncology Biotherapeutics and Impact of Study Design: Cetuximab as a Case Study. CPT: pharmacometrics & systems pharmacology 9(11):628–638 (2020).
  ·  DOI: [10.1002/psp4.12558](https://doi.org/10.1002/psp4.12558)

## Population and dosing

**Population:** adults with metastatic colorectal cancer · condition metastatic colorectal cancer · age group adult · n = 226.

**Dosing:** 250, 300, 350, 400, 450, 500 mg/m2, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| LCL, L/h (RSE%) | CL | 0.0153 | L/h |
| V 1, L (RSE%) | V1 | 3.71 | L |
| Q, L/h (RSE%) | Q | 0.0323 | L/h |
| V 2, L (RSE%) | V2 | 3.25 | L |
| K M, mg/L (RSE%) | Km | 9.81 | mg/L |
| V max, mg/h (RSE%) | Vmax | 0.882 | RSE% |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vmax has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Km and Vmax), so that value has no SI equivalent. Extracted — cetuximab: CL 0.0153 L/h, V1 3.71 L, Q 0.0323 L/h, V2 3.25 L, Km 9.81 mg/L, Vmax 0.882 RSE%.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of lcl: this record has 0.0153, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| LCL, L/h (RSE%) | `Q22` · CL | 0.0153 | L/h | 4.25e-09 | m3/s | L/h | llm (0.6) | psp412558-tbl-0002:row1:col4 |
| V 1, L (RSE%) | `Q63` · V1 | 3.71 | L | 0.00371 | m3 | L | space_fold (0.95) | psp412558-tbl-0002:row2:col4 |
| Q, L/h (RSE%) | `Q30` · Q | 0.0323 | L/h | 8.972e-09 | m3/s | L/h | exact (1) | psp412558-tbl-0002:row3:col4 |
| V 2, L (RSE%) | `Q64` · V2 | 3.25 | L | 0.00325 | m3 | L | space_fold (0.95) | psp412558-tbl-0002:row4:col4 |
| K M, mg/L (RSE%) | `Q1` · Km | 9.81 | mg/L |  |  | mg/L | space_fold (0.95) | psp412558-tbl-0002:row5:col4 |
| V max, mg/h (RSE%) | `Q66` · Vmax | 0.882 | RSE% |  |  | rse% | special_case (0.95) | psp412558-tbl-0002:row6:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mmcl + lcl' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'RSE%' (CL)
- unit_dimension_unknown: 'RSE%' (V1)
- unit_dimension_unknown: 'RSE%' (Q)
- unit_dimension_unknown: 'RSE%' (V2)
- unit_dimension_unknown: 'RSE%' (Km)
- unit_dimension_unknown: 'RSE%' (Vmax)
- dropped unlinked row (NIL): 'AIC (SAEM‐IMP)' — extend the ontology if this is a real PK parameter (source ['psp412558-tbl-0002:row19:col4'])
- implicit units: 'LCL, L/h (RSE%)' → L/h (from the paper text: 'The paper states that baseline linear CL is “0.0174 L/h.”')
- implicit units: 'V 1, L (RSE%)' → L (from the popPK convention: 'No unit is stated for V1 in the provided text. V1 is a central-compartment volume; volumes are conventionally reported i')
- implicit units: 'Q, L/h (RSE%)' → L/h (from the popPK convention: 'No unit is stated for Q in the provided text. Q is an intercompartmental clearance, conventionally reported in L/h; this')
- implicit units: 'V 2, L (RSE%)' → L (from the popPK convention: 'No unit is stated for V2 in the provided text. V2 is a peripheral-compartment volume; volumes are conventionally reporte')
- implicit units: 'K M, mg/L (RSE%)' → mg/L (from the paper text: 'The paper describes Km as the concentration at half Vmax and states that 50% of the maximum value is reached at “a drug ')
- implicit units: 'V max, mg/h (RSE%)' — the LLM proposed 'mg/h', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cetuximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'mmcl + lcl' subgroup of Grisic_2020 (paper reports 5 populations: lcl, mmcl, mmcl + lcl, mmcl + tvarcl, tvarcl)
- molar mass: none found for 'cetuximab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412558-tbl-0002:row1:col6 = '0.0206 (‐)'
- unparsed cell psp412558-tbl-0002:row2:col6 = '3.82 (‐)'
- unparsed cell psp412558-tbl-0002:row3:col6 = '0.0216 (‐)'
- unparsed cell psp412558-tbl-0002:row4:col6 = '3.31 (‐)'
- unparsed cell psp412558-tbl-0002:row17:col6 = '8.65 (‐)'
- unparsed cell psp412558-tbl-0002:row18:col6 = '22.9 (‐)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[lcl]` | 0.0153 |  | only_one_extracted |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['psp412558-tbl-0002:row5:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412558-tbl-0002:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412558-tbl-0002:row3:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412558-tbl-0002:row2:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412558-tbl-0002:row4:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | RSE% | ['psp412558-tbl-0002:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0153 | ['psp412558-tbl-0002:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0153 L/h | ['psp412558-tbl-0002:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.71 L | ['psp412558-tbl-0002:row2:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.25 L | ['psp412558-tbl-0002:row4:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetuximab%5D%20Cetuximab_Grisic2020_mmcl_lcl&body=Drug%3A%20cetuximab%0ARecord%3A%20Cetuximab_Grisic2020_mmcl_lcl%0APaper%3A%20Grisic_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetuximab/Cetuximab_Grisic2020_mmcl_lcl%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:25 UTC</sub>
