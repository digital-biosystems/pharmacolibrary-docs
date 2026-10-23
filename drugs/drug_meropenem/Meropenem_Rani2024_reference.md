<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;meropenem&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/&quot;},{&quot;label&quot;:&quot;Ran\u010di\u0107_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meropenem_Bilal2021_reference&quot;,&quot;label&quot;:&quot;Bilal_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Bilal2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Liu2025_reference&quot;,&quot;label&quot;:&quot;Liu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Liu2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Zyryanov2023_reference&quot;,&quot;label&quot;:&quot;Zyryanov_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Zyryanov2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# meropenem — `Meropenem_Rani2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Meropenem clearance lacked an extracted estimate, leaving the parameter with only a typical value of 5.29 L/h and an unusable placeholder.

<div class="pk-model-meta" hidden drug="meropenem" model-id="Meropenem_Rani2024_reference" status="model_quarantined" stale="false" population="critically ill patients" measured-compound="meropenem" parameterization="mechanistic" topology="1C"></div>

## Citation
Rančić A, Milosavljević MN, Rosić N, Milovanović D, Folić M, Zečević DR et al. Population pharmacokinetics of meropenem in critically ill patients. Open medicine (Warsaw, Poland) 19(1):20241004 (2024).
  ·  DOI: [10.1515/med-2024-1004](https://doi.org/10.1515/med-2024-1004)

## Population and dosing

**Population:** critically ill patients · condition severe infections · age group adult · n = &lt;| 0x40 |&gt;.

**Dosing:** 1000, 2000 mg, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Volume of distribution (L) (θ 2) | V | 2.05 | L | 0.006 |
| Effect of HTA (+ θ 8 × HTA) | equation variable | 0.0000 |  | 0.0000 |
| Clearance (L/h) | Clearance (L/h) | 5.29 | L/h | 0.038 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Meropenem clearance lacked an extracted estimate, leaving the parameter with only a typical value of 5.29 L/h and an unusable placeholder.**

The record lists a typical clearance of 5.29 L/h, but no population estimate for the clearance parameter was found. Consequently, the model was held back because the clearance parameter had no fitted value to use in the final model. Extracted — meropenem: V 2.05 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clearance].rse_percent`: this record has 0.038, the second reading 0.019; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Volume of distribution (L) (θ 2) | `Q61` · V | 2.05 | L | 0.00205 | m3 | L | 0.006 | llm_confirmed (0.6) | j_med-2024-1004_tab_003:row2:col1, j_med-2024-1004_tab_003:row2:col2, j_med-2024-1004_tab_003:row2:col3 |
| Effect of HTA (+ θ 8 × HTA) | `Q900` · equation variable | 0.0000 |  |  |  |  | 0.0000 | llm (0.6) | j_med-2024-1004_tab_003:row5:col1, j_med-2024-1004_tab_003:row5:col2, j_med-2024-1004_tab_003:row5:col3 |
| Clearance (L/h) | `Q900` · Clearance (L/h) | 5.29 | L/h | 1.469e-06 | m3/s |  | 0.038 |  | j_med-2024-1004_tab_003:row1:col1, j_med-2024-1004_tab_003:row1:col2, j_med-2024-1004_tab_003:row1:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Clearance (L/h) (θ 1) | Q22 | space_fold |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Effect of CRE (× (CRE) ^ θ 6)' — extend the ontology if this is a real PK parameter (source ['j_med-2024-1004_tab_003:row3:col1', 'j_med-2024-1004_tab_003:row3:col2', 'j_med-2024-1004_tab_003:row3:col3'])
- dropped unlinked row (NIL): 'Effect of WBCs (× (WBCs) ^ θ 7)' — extend the ontology if this is a real PK parameter (source ['j_med-2024-1004_tab_003:row4:col1', 'j_med-2024-1004_tab_003:row4:col2'])
- dropped unlinked row (NIL): 'Effect of VAN (+ θ 14 × VAN)' — extend the ontology if this is a real PK parameter (source ['j_med-2024-1004_tab_003:row6:col1', 'j_med-2024-1004_tab_003:row6:col2', 'j_med-2024-1004_tab_003:row6:col3'])
- dropped unlinked row (NIL): 'Effect of COL (+ θ 15 × COL)' — extend the ontology if this is a real PK parameter (source ['j_med-2024-1004_tab_003:row7:col1', 'j_med-2024-1004_tab_003:row7:col2', 'j_med-2024-1004_tab_003:row7:col3'])
- implicit units: 'Clearance (L/h) (θ 1)' → L/h (from the paper text: "Table 2 caption states 'CL – clearance (L/h)' and 'θ1 – typical value of CL'.")
- implicit units: 'Volume of distribution (L) (θ 2)' → L (from the paper text: "The text states: 'Typical values of meropenem clearance and volume of distribution were 3.80 L/h and 3.52 L, respectivel")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=meropenem
- bound model equation to Q22 (CL): CL = θ 1 * (AGE/50) ^ θ 3 * Exp[ETA(1)]
- Q22 (CL) is equation-defined: value moved to equation-variable 'Clearance (L/h) (θ 1)'; equation kept verbatim
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell j_med-2024-1004_tab_003:row4:col3 = '−0.219–(−0.110)'
- LLM selected parameter table(s) 3
- captured model equation CL = θ 1 * (AGE/50) ^ θ 3 * Exp[ETA(1)]

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance (l/h)].rse_percent` | 0.038 | 0.019 | mismatch |
| `gpt-oss-120b` | `parameters[clearance].rse_percent` | 0.038 | 0.019 | mismatch |
| `gpt-oss-120b` | `parameters[effect of hta]` | 0.0000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l)].rse_percent` | 0.006 | 0.057 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['j_med-2024-1004_tab_003:row1:col1', 'j_med-2024-1004_tab_003:row1:col2', 'j_med-2024-1004_tab_003:row1:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['j_med-2024-1004_tab_003:row2:col1', 'j_med-2024-1004_tab_003:row2:col2', 'j_med-2024-1004_tab_003:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.05 L | ['j_med-2024-1004_tab_003:row2:col1', 'j_med-2024-1004_tab_003:row2:col2', 'j_med-2024-1004_tab_003:row2:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmeropenem%5D%20Meropenem_Rani2024_reference&body=Drug%3A%20meropenem%0ARecord%3A%20Meropenem_Rani2024_reference%0APaper%3A%20Ran%C4%8Di%C4%87_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_meropenem/Meropenem_Rani2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:34 UTC</sub>
