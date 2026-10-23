<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;emapalumab&quot;,&quot;href&quot;:&quot;drugs/drug_emapalumab/&quot;},{&quot;label&quot;:&quot;Brossard_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emapalumab_Brossard2025_reference&quot;,&quot;label&quot;:&quot;Brossard_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emapalumab/Emapalumab_Brossard2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emapalumab — `Emapalumab_Brossard2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLNR has no unit.

<div class="pk-model-meta" hidden drug="emapalumab" model-id="Emapalumab_Brossard2024_reference" status="needs_review" stale="false" population="patients with primary HLH or MAS in sJIA" measured-compound="emapalumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Brossard P, Laveille C. Population Pharmacokinetics of the Anti-Interferon-Gamma Monoclonal Antibody Emapalumab: An Updated Analysis. Rheumatology and therapy 11(3):869–880 (2024).
  ·  DOI: [10.1007/s40744-024-00669-y](https://doi.org/10.1007/s40744-024-00669-y)

## Population and dosing

**Population:** patients with primary HLH or MAS in sJIA · condition primary hemophagocytic lymphohistiocytosis (HLH) or macrophage activation syndrome (MAS) in systemic juvenile idiopathic arthritis (sJIA) · age group mixed · n = Yes, I can help with that. Please provide the text you'd like me to work with..

**Dosing:** 70, 210, 420, 700 mg, iv, multiple, every 72 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLL, l/h/70 kg | CL | 0.00876 | L/h/kg | 11.2 |
| V1, l/70 kg | V1 | 4.07 | L/kg | 10.2 |
| Q, l/h/70 kg | Q | 0.0814 | L/h/kg | 14.4 |
| V2, l/70 kg | V2 | 4.21 | L/kg | 10.4 |
| CLNL_IFNγ | CLNR | 0.562 |  | 14.9 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLNR has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — emapalumab: CL 0.00876 L/h/kg, V1 4.07 L/kg, Q 0.0814 L/h/kg, V2 4.21 L/kg, CLNR 0.562.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has emapalumab, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLL, l/h/70 kg | `Q22` · CL | 0.00876 | L/h/kg | 1.703e-07 | m3/s | L/h | 11.2 | llm (0.6) | Tab3:row2:col1, Brossard_2024_table_2:row1:col1 |
| V1, l/70 kg | `Q63` · V1 | 4.07 | L/kg | 0.2849 | m3 | L | 10.2 | llm_confirmed (0.6) | Tab3:row4:col1, Brossard_2024_table_2:row3:col1 |
| Q, l/h/70 kg | `Q30` · Q | 0.0814 | L/h/kg | 1.583e-06 | m3/s | L/h | 14.4 | llm (0.6) | Tab3:row5:col1, Brossard_2024_table_2:row4:col1 |
| V2, l/70 kg | `Q64` · V2 | 4.21 | L/kg | 0.2947 | m3 | L | 10.4 | llm_confirmed (0.6) | Tab3:row6:col1, Brossard_2024_table_2:row5:col1 |
| CLNL_IFNγ | `Q79` · CLNR | 0.562 |  |  |  |  | 14.9 | llm (0.6) | Tab3:row7:col1, Brossard_2024_table_2:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'RUV_add' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('CLNL, l/h/70 kg', value '0.0748') — already have one for this compound
- routed 'CLs_AGE' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q22 ('CLs_V1_TBIL', value '0.162') — already have one for this compound
- dropped unlinked row (NIL): 'Corr V1,V2' — extend the ontology if this is a real PK parameter (source ['Tab3:row18:col1', 'Brossard_2024_table_2:row14:col1'])
- implicit units: 'CLL, l/h/70 kg' → L/h/kg (from the paper text: "The value is listed as '0.00876' with the label 'l/h/70 kg'. In the text, emapalumab CL is explicitly reported in 'l/h' ")
- implicit units: 'V1, l/70 kg' → L/kg (from the paper text: "The value is listed as '4.07' with the label 'l/70 kg'. The text states allometric scaling was implemented on volume par")
- implicit units: 'Q, l/h/70 kg' → L/h/kg (from the paper text: "The value is listed as '0.0814' with the label 'l/h/70 kg'. Q is an intercompartmental clearance. The text confirms allo")
- implicit units: 'V2, l/70 kg' → L/kg (from the paper text: "The value is listed as '4.21' with the label 'l/70 kg'. V2 is a volume of distribution. The text confirms allometric sca")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=emapalumab
- molar mass: none found for 'emapalumab' — its concentrations stay mass-only

**Extraction notes:**
- companion parameter table 2 transcribed (14 record(s), model stage 'base')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clnl_ifnγ]` | 0.562 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | emapalumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | emapalumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1', 'Brossard_2024_table_2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col1', 'Brossard_2024_table_2:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row4:col1', 'Brossard_2024_table_2:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row6:col1', 'Brossard_2024_table_2:row5:col1'] |
| C5_unit_missing_Q79 | fail | [length] ** 3 / [time] |  | ['Tab3:row7:col1', 'Brossard_2024_table_2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00876 | ['Tab3:row2:col1', 'Brossard_2024_table_2:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.613 L/h | ['Tab3:row2:col1', 'Brossard_2024_table_2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 285 L | ['Tab3:row4:col1', 'Brossard_2024_table_2:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 295 L | ['Tab3:row6:col1', 'Brossard_2024_table_2:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bemapalumab%5D%20Emapalumab_Brossard2024_reference&body=Drug%3A%20emapalumab%0ARecord%3A%20Emapalumab_Brossard2024_reference%0APaper%3A%20Brossard_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_emapalumab/Emapalumab_Brossard2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:57 UTC</sub>
