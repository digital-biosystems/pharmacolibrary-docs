<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 arithmetic_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_arithmetic_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00136, model 0.000822).

<div class="pk-model-meta" hidden drug="belzutifan" model-id="Belzutifan_Marathe2023_arithmetic_mean" status="needs_review" stale="false" population="patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors" measured-compound="belzutifan" parameterization="apparent" topology="1C"></div>

## Citation
Marathe DD, Jauslin PM, Kleijn HJ, de Miranda Silva C, Chain A, Bateman T et al. Population pharmacokinetic analyses for belzutifan to inform dosing considerations and labeling. CPT: pharmacometrics & systems pharmacology 12(10):1499–1510 (2023).
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

## Population and dosing

**Population:** patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors · condition von Hippel–Lindau (VHL) disease · age group adult.

**Dosing:** 120 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean.svg" alt="Belzutifan_Marathe2023_arithmetic_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 8.15 | L/h |
| V d/F (L) | V/F | 137.62 | L |
| KA (1/h) | kabs | 4.40 | 1/h |
| AUC0–24h (μg∙h/mL) | AUCt | 18.86 | μg∙h/mL |
| C min (ng/mL) | Cmin | 406.24 | ng/mL |
| C max (ng/mL) | Cmax | 1463.81 | ng/mL |
| T max (h) | tmax | 1.73 | h |
| t 1/2 alpha (h) | t1/2α | 2.77 | h |
| t 1/2 beta (h) | t1/2β | 15.29 | h |
| t 1/2 eff (h) | t1/2z | 13.42 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00136, model 0.000822).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCt, Cmin and Cmax), so that value has no SI equivalent. Extracted — belzutifan: CL/F 8.15 L/h, V/F 138 L, kabs 4.4 1/h, AUCt 18.9 μg∙h/mL, Cmin 406 ng/mL, Cmax 1.46e+03 ng/mL, tmax 1.73 h, t1/2α 2.77 h, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has belzutifan, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 8.15 | L/h | 2.264e-06 | m3/s | l/h | exact (1) | Marathe_2023_table_5:row0:col4 |
| V d/F (L) | `Q76` · V/F | 137.62 | L | 0.1376 | m3 | l | space_fold (0.95) | Marathe_2023_table_5:row1:col4 |
| KA (1/h) | `Q49` · kabs | 4.40 | 1/h | 0.001222 | 1/s | 1/h | exact (1) | Marathe_2023_table_5:row2:col4 |
| AUC0–24h (μg∙h/mL) | `Q19` · AUCt | 18.86 | μg∙h/mL |  |  | (h·µg)/ml | llm (0.6) | Marathe_2023_table_5:row4:col4 |
| C min (ng/mL) | `Q36` · Cmin | 406.24 | ng/mL |  |  | ng/ml | space_fold (0.95) | Marathe_2023_table_5:row5:col4 |
| C max (ng/mL) | `Q32` · Cmax | 1463.81 | ng/mL |  |  | ng/ml | space_fold (0.95) | Marathe_2023_table_5:row7:col4 |
| T max (h) | `Q56` · tmax | 1.73 | h | 6228 | s | h | space_fold (0.95) | Marathe_2023_table_5:row9:col4 |
| t 1/2 alpha (h) | `Q59` · t1/2α | 2.77 | h | 9972 | s | h | llm_corrected (0.6) | Marathe_2023_table_5:row11:col4 |
| t 1/2 beta (h) | `Q60` · t1/2β | 15.29 | h | 5.504e+04 | s | h | llm_corrected (0.6) | Marathe_2023_table_5:row12:col4 |
| t 1/2 eff (h) | `Q57` · t1/2z | 13.42 | h | 4.831e+04 | s | h | llm (0.6) | Marathe_2023_table_5:row13:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'FMF' — extend the ontology if this is a real PK parameter (source ['Marathe_2023_table_5:row3:col4', 'Marathe_2023_table_5:row6:col4', 'Marathe_2023_table_5:row8:col4', 'Marathe_2023_table_5:row10:col4', 'Marathe_2023_table_5:row15:col4'])
- dropped duplicate Q57 ('t 1/2 abs (h)', value '0.48') — already have one for this compound
- implicit units: 'KA (1/h)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (KA). In population pharmacokinetic modeling, first-order rate constants a')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = CL/Fpop * (WT/73.64)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'arithmetic mean' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- unparsed cell psp413028-tbl-0002:row2:col3 = '5.25; 6.00'
- unparsed cell psp413028-tbl-0002:row3:col3 = '80.55; 90.26'
- unparsed cell psp413028-tbl-0002:row4:col3 = '3.89; 6.85'
- unparsed cell psp413028-tbl-0002:row5:col3 = '26.42; 34.34'
- unparsed cell psp413028-tbl-0002:row6:col3 = '2.04; 2.76'
- unparsed cell psp413028-tbl-0002:row7:col3 = '0.16; 0.17'
- unparsed cell psp413028-tbl-0002:row8:col3 = '−1.00; −0.75'
- unparsed cell psp413028-tbl-0002:row9:col3 = '0.45; 0.84'
- unparsed cell psp413028-tbl-0002:row10:col3 = '0.98; 1.14'
- unparsed cell psp413028-tbl-0002:row11:col3 = '0.24; 0.54'
- unparsed cell psp413028-tbl-0002:row12:col3 = '−0.34; −0.15'
- unparsed cell psp413028-tbl-0002:row13:col3 = '−0.47; −0.25'
- unparsed cell psp413028-tbl-0002:row14:col3 = '0.061;0.16'
- unparsed cell psp413028-tbl-0002:row15:col3 = '−0.79; −0.15'
- unparsed cell psp413028-tbl-0002:row16:col3 = '−0.30; −0.11'
- unparsed cell psp413028-tbl-0002:row17:col3 = '−0.52; −0.20'
- unparsed cell psp413028-tbl-0002:row19:col3 = '0.11; 0.18'
- unparsed cell psp413028-tbl-0002:row20:col3 = '0.0064; 0.019'
- unparsed cell psp413028-tbl-0002:row21:col3 = '0.052; 0.33'
- unparsed cell psp413028-tbl-0002:row22:col3 = '0.78; 1.52'
- unparsed cell psp413028-tbl-0002:row24:col3 = '0.24; 0.28'
- unparsed cell psp413028-tbl-0002:row25:col3 = '0.27; 0.31'
- unparsed cell Marathe_2023_table_3:row0:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row2:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row4:col1 = 'UGT2B17 (intermediate)'
- unparsed cell Marathe_2023_table_3:row4:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row5:col1 = 'UGT2B17 (extensive)'
- unparsed cell Marathe_2023_table_3:row6:col1 = 'UGT2B17 (poor)'
- unparsed cell Marathe_2023_table_3:row7:col1 = 'CYP2C19 (extensive)'
- unparsed cell Marathe_2023_table_3:row7:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row8:col1 = 'CYP2C19 (poor)'
- unparsed cell Marathe_2023_table_3:row9:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row10:col1 = 'UGT2B17 (poor)'
- companion parameter table 3 transcribed (18 record(s))
- transposed table Marathe_2023_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (5 record(s))
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- captured model equation F = CL/Fpop * (WT/73.64)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.706 (12/17 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 abs]` |  | 0.48 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | belzutifan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | belzutifan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Marathe_2023_table_5:row4:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Marathe_2023_table_5:row0:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Marathe_2023_table_5:row7:col4'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['Marathe_2023_table_5:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Marathe_2023_table_5:row2:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Marathe_2023_table_5:row9:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Marathe_2023_table_5:row13:col4'] |
| C5_dimension_Q59 | pass | [time] |  | ['Marathe_2023_table_5:row11:col4'] |
| C5_dimension_Q60 | pass | [time] |  | ['Marathe_2023_table_5:row12:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Marathe_2023_table_5:row1:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.15 L/h | ['Marathe_2023_table_5:row0:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 138 L | ['Marathe_2023_table_5:row1:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=belzutifan) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.001363 | 0.0008219 | 0.603 | ng/mL→SI vs simulated kg/m3 |
| T1_tmax | reference | pass | 1.42 | 1.099 | 0.7742 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_modelica.zip" download>Belzutifan_Marathe2023_arithmetic_mean_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_fmi.zip" download>Belzutifan_Marathe2023_arithmetic_mean_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_matlab.zip" download>Belzutifan_Marathe2023_arithmetic_mean_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_matlab_simbio.zip" download>Belzutifan_Marathe2023_arithmetic_mean_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_sbml.zip" download>Belzutifan_Marathe2023_arithmetic_mean_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_cellml.zip" download>Belzutifan_Marathe2023_arithmetic_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3833 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00012 | kg |
| input | model | `Cl` | 2.264e-06 | m3/s |
| input | model | `VdPerKg` | 0.001966 | m3/kg |
| input | model | `ka` | 0.001222 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Marathe DD, Jauslin PM, Kleijn HJ, de Miranda Silva C, Chain A, Bateman T et al. Population pharmacokinetic analyses for belzutifan to inform dosing considerations and labeling. CPT: pharmacometrics & systems pharmacology 12(10):1499–1510 (2023). [doi:10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

**This record:** Pharmacolibrary v26.09, model `Belzutifan_Marathe2023_arithmetic_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean>

```bibtex
@misc{pharmacolibrary_BelzutifanMarathe2023arithmeticmean,
  title  = {{Pharmacolibrary model Belzutifan_Marathe2023_arithmetic_mean}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean},
  note   = {Parameters from doi:10.1002/psp4.13028},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 4.4 /h, F 1). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean/Belzutifan_Marathe2023_arithmetic_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Belzutifan_Marathe2023_arithmetic_mean_params.json` · controls `Belzutifan_Marathe2023_arithmetic_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelzutifan%5D%20Belzutifan_Marathe2023_arithmetic_mean&body=Drug%3A%20belzutifan%0ARecord%3A%20Belzutifan_Marathe2023_arithmetic_mean%0APaper%3A%20Marathe_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:24 UTC</sub>
