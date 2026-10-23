<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lumasiran&quot;,&quot;href&quot;:&quot;drugs/drug_lumasiran/&quot;},{&quot;label&quot;:&quot;Sten_2023 \u00b7 model_fitted_to_olpasiran_data_only_estimate_se&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e&quot;,&quot;label&quot;:&quot;Sten_2023_model_simultaneously_fitted_to_all_data_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lumasiran — `Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

> This record was reviewed on 2026-10-05 12:03 UTC (Needs review), but the paper was screened again on 2026-10-07 17:50 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Lumasiran's clearance, volume, lag time, and rate constant were missing, leaving placeholders in the model.

<div class="pk-model-meta" hidden drug="lumasiran" model-id="Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim" status="needs_review" stale="true" population="healthy adults and patients with specific conditions" measured-compound="GalNAc-siRNAs" parameterization="apparent" topology="2C"></div>

## Citation
Sten S, Cardilin T, Antonsson M, Gennemark P. Plasma Pharmacokinetics of N-Acetylgalactosamine-Conjugated Small-Interfering Ribonucleic Acids (GalNAc-Conjugated siRNAs). Clinical pharmacokinetics 62(12):1661-1672 (2023).
  ·  DOI: [10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7)

## Population and dosing

**Population:** healthy adults and patients with specific conditions · condition various · age group mixed.

**Dosing:** 25, 300 mg, sc, multiple.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.20).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (1/h) | kabs | 0.635 |  | 0.21 |
| V1/F (L) | V1/F | 27.9 | L | 5.6 |
| V2/F (L) | V2/F | 1470 | L | 370 |
| V3/F (L) | V3/F | 296 | L | 39 |
| CL1/F (L/h) | CL/F | 27.7 | L/h | 2.4 |
| CL2/F (L/h) | Q/F | 2.62 | L/h | 1.4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lumasiran's clearance, volume, lag time, and rate constant were missing, leaving placeholders in the model.**

All six extracted parameters describe olpasiran, not the target drug lumasiran. Consequently, lumasiran's clearance, volume of distribution, absorption lag time, and central-to-peripheral rate constant had no values. A second reader also disagreed on the specific numerical values for the olpasiran parameters. Extracted — olpasiran: kabs 0.635 1/h, V1/F 27.9 L, V2/F 1.47e+03 L, V3/F 296 L, CL/F 27.7 L/h, Q/F 2.62 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has GalNAc-siRNAs, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 0.635 |  |  |  |  | 0.21 | exact (1) | Tab3:row1:col1 |
| V1/F (L) | `Q290` · V1/F | 27.9 | L | 0.0279 | m3 | l | 5.6 | exact (1) | Tab3:row2:col1 |
| V2/F (L) | `Q82` · V2/F | 1470 | L | 1.47 | m3 | l | 370 | exact (1) | Tab3:row3:col1 |
| V3/F (L) | `Q78` · V3/F | 296 | L | 0.296 | m3 | l | 39 | exact (1) | Tab3:row4:col1 |
| CL1/F (L/h) | `Q27` · CL/F | 27.7 | L/h | 7.694e-06 | m3/s | l/h | 2.4 | llm_corrected (0.6) | Tab3:row5:col1 |
| CL2/F (L/h) | `Q69` · Q/F | 2.62 | L/h | 7.278e-07 | m3/s | l/h | 1.4 | special_case (0.95) | Tab3:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('CL3/F (L/h)', value '914') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GalNAc-siRNAs
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'model fitted to olpasiran data only [estimate (se)]' subgroup of Sten_2023 (paper reports 2 populations: model fitted to olpasiran data only [estimate (se)], model simultaneously fitted to all data [estimate (se)])
- molar mass: no plausible PubChem entry for 'GalNAc-siRNAs' ('no full name in the paper') — left in mass units
- molar mass: none found for 'lumasiran' — its concentrations stay mass-only
- molar mass: none found for 'GalNAc-siRNAs' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'GalNAc-siRNAs', not lumasiran — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | GalNAc-siRNAs | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | GalNAc-siRNAs | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row5:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab3:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Tab3:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 27.7 L/h | ['Tab3:row5:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 27.9 L | ['Tab3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.47e+03 L | ['Tab3:row3:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumasiran%5D%20Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim&body=Drug%3A%20lumasiran%0ARecord%3A%20Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim%0APaper%3A%20Sten_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumasiran/Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:50 UTC</sub>
