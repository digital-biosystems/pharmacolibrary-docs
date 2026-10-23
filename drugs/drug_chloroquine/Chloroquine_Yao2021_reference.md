<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/&quot;},{&quot;label&quot;:&quot;Yao_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroquine_Yao2021_reference&quot;,&quot;label&quot;:&quot;Yao_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Chloroquine_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chloroquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_chloroquine/Chloroquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# chloroquine — `Chloroquine_Yao2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:24 UTC) predates the latest extraction (2026-10-07 06:19 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="chloroquine" model-id="Chloroquine_Yao2021_reference" status="extracted" stale="true" population="COVID-19 patients" measured-compound="chloroquine" parameterization="apparent" topology="1C"></div>

## Citation
Yao X, Yan X, Wang X, Cai T, Zhang S, Cui C et al. Population-based meta-analysis of chloroquine: informing chloroquine pharmacokinetics in COVID-19 patients. European journal of clinical pharmacology 77(4):583–593 (2021).
  ·  DOI: [10.1007/s00228-020-03032-6](https://doi.org/10.1007/s00228-020-03032-6)

## Population and dosing

**Population:** COVID-19 patients · condition COVID-19 · age group adult · n = 50.

**Dosing:** 500 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed chloroquine phosphate, measured chloroquine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference.svg" alt="Chloroquine_Yao2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (l/h) | CL/F | 33.3 | l/h | 8.00 | 48.8 (8.50% RSE) |
| V2/F (l) | V2/F | 3630 | l | 13.3 | 67.7 (14.0% RSE) |
| Q/F (l/h) | Q/F | 58.7 | l/h | 15.4 | 48.4 (26.1% RSE) |
| V3/F (l) | V3/F | 5120 | l | 11.8 | 48.2 (18.4% RSE) |
| ka (h−1) | kabs | 0.559 | h−1 | 20.2 | 111 (40.5% RSE) |
| ALAG1 (h) | tlag | 0.149 | h | 20.4 |  |
| theta_q314_weight | theta_q314_weight | 0.75 |  |  |  |
| theta_v2_f_weight | theta_v2_f_weight | 1 |  |  |  |
| V/FPRQ (L) | V/F | 156.0 | L |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The chloroquine model was quarantined because its volume of distribution (Vd) and absorption lag time (Tlag) had no extracted values and library defaults were used instead, with V2/F (3630 l) also left uncovered.**

The record reports CL/F 33.3 l/h, V2/F 3630 l, Q/F 58.7 l/h, V3/F 5120 l and ka 0.559 h-1 for chloroquine in COVID-19 patients, but the volume of distribution and absorption lag time were left at library placeholders rather than given explicit estimates. A coverage check found only 3 of 4 expected parameters covered, with V2/F neither emitted nor defaulted. The builder also assumed F=1 and Fm=1 with no molar correction (apparent parameterization), and the deviations could not be fully adjudicated. A second reader additionally disagreed on how the absorption lag-time parameter should be identified. Extracted — chloroquine: CL/F 33.3 l/h, V2/F 3.63e+03 l, Q/F 58.7 l/h, V3/F 5.12e+03 l, kabs 0.559 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has chloroquine phosphate, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l/h) | `Q27` · CL/F | 33.3 | l/h | 9.25e-06 | m3/s | l/h | 8.00 | exact (1) | Tab4:row1:col1, Tab4:row1:col2 | 48.8 (8.50% RSE) |
| V2/F (l) | `Q82` · V2/F | 3630 | l | 3.63 | m3 | l | 13.3 | exact (1) | Tab4:row2:col1, Tab4:row2:col2 | 67.7 (14.0% RSE) |
| Q/F (l/h) | `Q69` · Q/F | 58.7 | l/h | 1.631e-05 | m3/s | l/h | 15.4 | exact (1) | Tab4:row3:col1, Tab4:row3:col2 | 48.4 (26.1% RSE) |
| V3/F (l) | `Q78` · V3/F | 5120 | l | 5.12 | m3 | l | 11.8 | exact (1) | Tab4:row4:col1, Tab4:row4:col2 | 48.2 (18.4% RSE) |
| ka (h−1) | `Q49` · kabs | 0.559 | h−1 | 0.0001553 | 1/s | 1/h | 20.2 | exact (1) | Tab4:row5:col1, Tab4:row5:col2 | 111 (40.5% RSE) |
| ALAG1 (h) | `Q83` · tlag | 0.149 | h | 536.4 | s | h | 20.4 | llm (0.6) | Tab4:row6:col1, Tab4:row6:col2 |  |
| theta_q314_weight | `Q900` · theta_q314_weight | 0.75 |  |  |  |  |  |  | Tab4:row7:col1 |  |
| theta_v2_f_weight | `Q900` · theta_v2_f_weight | 1 |  |  |  |  |  |  | Tab4:row8:col1 |  |
| V/FPRQ (L) | `Q76` · V/F | 156.0 | L | 0.156 | m3 | L |  | review_gapfill (0.7) | Chairat_2018:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chloroquine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q76 (V/F) from Chairat_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '33.7 (29.2, 38.6)'
- unparsed cell Tab4:row2:col3 = '3598 (2521, 4532)'
- unparsed cell Tab4:row3:col3 = '56.0 (43.7, 72.0)'
- unparsed cell Tab4:row4:col3 = '5044 (4274, 6089)'
- unparsed cell Tab4:row5:col3 = '0.607 (0.370, 1.12)'
- unparsed cell Tab4:row6:col3 = '0.149 (0.130, 0.320)'
- unparsed cell Tab4:row9:col3 = '47.4 (35.8, 61.3)'
- unparsed cell Tab4:row10:col3 = '67.6 (49.8, 88.5)'
- unparsed cell Tab4:row11:col3 = '46.8 (21.8, 63.8)'
- unparsed cell Tab4:row12:col3 = '48.1 (27.8, 63.8)'
- unparsed cell Tab4:row13:col3 = '106 (54.8, 139)'
- unparsed cell Tab4:row14:col3 = '24.7 (19.4, 28.4)'
- unparsed cell Tab4:row15:col3 = '58.6 (48.1, 72.5)'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.095 (2/21 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1]` | 0.149 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag1]` |  | 0.149 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 33.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 33.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.559 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.559 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 58.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 58.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_weight]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_weight]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_weight]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fprq]` | 156.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 3630 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 3630 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 5120 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 5120 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | chloroquine phosphate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | chloroquine | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row1:col1', 'Tab4:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row5:col1', 'Tab4:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab4:row3:col1', 'Tab4:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Chairat_2018:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab4:row4:col1', 'Tab4:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab4:row2:col1', 'Tab4:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.3 L/h | ['Tab4:row1:col1', 'Tab4:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 156 L | ['Chairat_2018:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 3.63e+03 L | ['Tab4:row2:col1', 'Tab4:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_modelica.zip" download>Chloroquine_Yao2021_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_fmi.zip" download>Chloroquine_Yao2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_matlab.zip" download>Chloroquine_Yao2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_matlab_simbio.zip" download>Chloroquine_Yao2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_sbml.zip" download>Chloroquine_Yao2021_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_cellml.zip" download>Chloroquine_Yao2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3199 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 536.4 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0005 | kg |
| input | model | `Cl` | 9.25e-06 | m3/s |
| input | model | `VdPerKg` | 0.002229 | m3/kg |
| input | model | `ka` | 0.0001553 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yao X, Yan X, Wang X, Cai T, Zhang S, Cui C et al. Population-based meta-analysis of chloroquine: informing chloroquine pharmacokinetics in COVID-19 patients. European journal of clinical pharmacology 77(4):583–593 (2021). [doi:10.1007/s00228-020-03032-6](https://doi.org/10.1007/s00228-020-03032-6)

**This record:** Pharmacolibrary v26.09, model `Chloroquine_Yao2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_chloroquine/Chloroquine_Yao2021_reference>

```bibtex
@misc{pharmacolibrary_ChloroquineYao2021reference,
  title  = {{Pharmacolibrary model Chloroquine_Yao2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_chloroquine/Chloroquine_Yao2021_reference},
  note   = {Parameters from doi:10.1007/s00228-020-03032-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 500 mg, single dose, first-order absorption (ka 0.559 /h, lag 8.94 min, F 1). Dose in the paper: 500 mg.

<dbs-fmusim paramsurl="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_chloroquine/Chloroquine_Yao2021_reference/Chloroquine_Yao2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Chloroquine_Yao2021_reference_params.json` · controls `Chloroquine_Yao2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroquine%5D%20Chloroquine_Yao2021_reference&body=Drug%3A%20chloroquine%0ARecord%3A%20Chloroquine_Yao2021_reference%0APaper%3A%20Yao_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloroquine/Chloroquine_Yao2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:19 UTC</sub>
