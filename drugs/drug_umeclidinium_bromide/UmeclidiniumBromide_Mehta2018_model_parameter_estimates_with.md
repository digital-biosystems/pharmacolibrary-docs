<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/&quot;},{&quot;label&quot;:&quot;Mehta_2018 \u00b7 model_parameter_estimates_with_combined_dataset_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UmeclidiniumBromide_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium bromide — `UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The umeclidinium bromide record was quarantined because volume of distribution and absorption lag time had no extracted values and library defaults were substituted, and the reported V2/F of 271 L was not carried into the model.

<div class="pk-model-meta" hidden drug="umeclidinium bromide" model-id="UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with" status="model_quarantined" stale="false" population="patients with symptomatic COPD" measured-compound="umeclidinium" parameterization="apparent" topology="1C"></div>

## Citation
Mehta R, Pefani E, Beerahee M, Brealey N, Barnacle H, Birk R et al. Population Pharmacokinetic Analysis of Fluticasone Furoate/Umeclidinium/Vilanterol via a Single Inhaler in Patients with COPD. Journal of clinical pharmacology 58(11):1461–1467 (2018).
  ·  DOI: [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253)

## Population and dosing

**Population:** patients with symptomatic COPD · condition COPD · age group adult · n = 74.

**Dosing:** 0.025, 0.0625, 0.1 mg, inhaled, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed fluticasone furoate/umeclidinium/vilanterol, measured umeclidinium.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 41.6 | L/h | 2.9 |
| V2/F (L) | V2/F | 271 | L | 1.12 |
| Q/F (L/h) | Q/F | 116 | L/h | 5.4 |
| V3 /F (L) | V3/F | 1280 | L | 7.28 |
| KA (h‐1) | kabs | 19.6 | 1/h | 300 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The umeclidinium bromide record was quarantined because volume of distribution and absorption lag time had no extracted values and library defaults were substituted, and the reported V2/F of 271 L was not carried into the model.**

The paper reports a three-compartment model for umeclidinium with CL/F 41.6 L/h, V2/F 271 L, Q/F 116 L/h, V3/F 1280 L and kabs 19.6 1/h, but the model builder left Vd and Tlag at library defaults instead of explicit estimates, so the model was held back rather than published with invented numbers. The parameter-coverage check found only 3 of 4 expected parameters covered, with V2/F (271 L) neither emitted nor defaulted. The builder also assumed apparent parameterization (F=1, Fm=1, no molar correction), which was judged not acceptable. Extracted — umeclidinium bromide: CL/F 41.6 L/h, V2/F 271 L, Q/F 116 L/h, V3/F 1.28e+03 L, kabs 19.6 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fluticasone furoate/umeclidinium/vilanterol, the second reading umeclidinium; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 41.6 | L/h | 1.156e-05 | m3/s | l/h | 2.9 | exact (1) | jcph1253-tbl-0002:row2:col1, jcph1253-tbl-0002:row8:col1 |
| V2/F (L) | `Q82` · V2/F | 271 | L | 0.271 | m3 | l | 1.12 | exact (1) | jcph1253-tbl-0002:row3:col1, jcph1253-tbl-0002:row9:col1 |
| Q/F (L/h) | `Q69` · Q/F | 116 | L/h | 3.222e-05 | m3/s | l/h | 5.4 | exact (1) | jcph1253-tbl-0002:row4:col1, jcph1253-tbl-0002:row10:col1 |
| V3 /F (L) | `Q78` · V3/F | 1280 | L | 1.28 | m3 | l | 7.28 | space_fold (0.95) | jcph1253-tbl-0002:row5:col1, jcph1253-tbl-0002:row11:col1 |
| KA (h‐1) | `Q49` · kabs | 19.6 | 1/h | 0.005444 | 1/s | 1/h | 300 | exact (1) | jcph1253-tbl-0002:row6:col1, jcph1253-tbl-0002:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h‐1' (kabs)
- implicit units: 'KA (h‐1)' → 1/h (from the paper text: "Table caption/footnote lists 'KA, absorption rate' and the parameter is given as 'KA (h‐1) = 19.6', indicating units of ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=umeclidinium
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'model parameter estimates with combined dataset (rse%)' subgroup of Mehta_2018 (paper reports 6 populations: combined model ln estimates, historical model ln estimates, historical model parameter estimates, historical model parameter estimates (rse%), model parameter estimates with combined dataset, model parameter estimates with combined dataset (rse%))
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (20 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (7/14 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].value` | 41.6 | 210 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 19.6 | 40.3 | mismatch |
| `gpt-oss-120b` | `parameters[q/f].value` | 116 | 854 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 271 | 1170 | mismatch |
| `gpt-oss-120b` | `parameters[v3 /f].value` | 1280 | 16200 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | fluticasone furoate/umeclidinium/vilanterol | umeclidinium | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | umeclidinium | umeclidium | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1253-tbl-0002:row2:col1', 'jcph1253-tbl-0002:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph1253-tbl-0002:row6:col1', 'jcph1253-tbl-0002:row12:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph1253-tbl-0002:row4:col1', 'jcph1253-tbl-0002:row10:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['jcph1253-tbl-0002:row5:col1', 'jcph1253-tbl-0002:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph1253-tbl-0002:row3:col1', 'jcph1253-tbl-0002:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 41.6 L/h | ['jcph1253-tbl-0002:row2:col1', 'jcph1253-tbl-0002:row8:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 271 L | ['jcph1253-tbl-0002:row3:col1', 'jcph1253-tbl-0002:row9:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bumeclidinium_bromide%5D%20UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with&body=Drug%3A%20umeclidinium_bromide%0ARecord%3A%20UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with%0APaper%3A%20Mehta_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Mehta2018_model_parameter_estimates_with%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:20 UTC</sub>
