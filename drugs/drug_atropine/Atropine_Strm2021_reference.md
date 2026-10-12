<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;atropine&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/&quot;},{&quot;label&quot;:&quot;Str\u00f6m_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atropine_Strm2021_reference&quot;,&quot;label&quot;:&quot;Str\u00f6m_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Strm2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atropine — `Atropine_Strm2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.931). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The atropine two-compartment horse model was quarantined because clearance, volume of distribution, absorption rate constant, absorption lag time and both intercompartmental rate constants had no extracted values and library placeholder defaults were substituted.**

The record lists fitted values for atropine (V1 0.646, V2 1.148, CL 1.905, Q 2.477, Fab 0.781, kabs 5.948), but the model builder's substitutions show Cl, Vd, ka, Tlag, k12 and k21 were left at library placeholder defaults because the source reported no values, and the invented absorption (defaulted ka) was judged not acceptable. Additionally, a reported unit could not be converted to SI, so one parameter reached the build without an SI value. A second reader also disagreed on the eye-drop bioavailability, reading 0.685 where this record has null. Extracted — atropine: V1 0.646, V2 1.15, CL 1.91, Q 2.48, Fab 0.781 ilogit, eye drop, kabs 5.95, t1/2ka 0.117, t1/2β 0.798 terminal phase, … (+3).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of bioavailability drop: this record has none, the second reading 0.685; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:14.839615+00:00) predates the upstream re-run (2026-10-04 13:06:09.698248+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `atropine sulfate`, measured `atropine`.

## Citation
Ström L et al., Topical ophthalmic atropine in horses,…, BMC veterinary research (2021)
  ·  DOI: [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4)

## Model component
<dbs-pgx drug="atropine" model-id="Atropine_Strm2021_reference" status="extracted" stale="true" population="horses" measured-compound="atropine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvVc | `Q63` · V1 | 0.646 | L/kg | 0.045219999999999996 | L | 28.03 | tv_prefix (0.95) | Tab1:row2:col2, Tab1:row2:col3, Tab1:row2:col4, Tab1:row2:col5 | — | not captured |
| tvVt | `Q64` · V2 | 1.148 | L/kg | 0.08036 | L | 16.39 | llm (0.6) | Tab1:row3:col2, Tab1:row3:col3, Tab1:row3:col4, Tab1:row3:col5 | — | not captured |
| tvCl | `Q22` · CL | 1.905 | L/h | 5.291666666666666e-07 | L/h | 6.63 | tv_prefix (0.95) | Tab1:row4:col2, Tab1:row4:col3, Tab1:row4:col4, Tab1:row4:col5 | — | not captured |
| tvCld | `Q30` · Q | 2.477 | L/h | 6.880555555555555e-07 | L/h | 23.87 | tv_prefix (0.95) | Tab1:row5:col2, Tab1:row5:col3, Tab1:row5:col4, Tab1:row5:col5 | — | not captured |
| tvfdrop (ilogit, eye drop) | `Q40` · Fab | 0.781 | ilogit, eye drop | not captured | [ilogit] | 172.66 | llm (0.6) | Tab1:row6:col2, Tab1:row6:col3, Tab1:row6:col4, Tab1:row6:col5 | — | not captured |
| tvKa | `Q49` · kabs | 5.948 | 1/h | 0.0016522222222222222 | 1/h | 198.88 | tv_prefix (0.95) | Tab1:row9:col1, Tab1:row9:col2, Tab1:row9:col3, Tab1:row9:col4, Tab1:row9:col5 | — | not captured |
| Half-life_absorption | `Q95` · t1/2ka | 0.117 | h | 421.20000000000005 | h | 53.82 | llm (0.6) | Tab1:row14:col2, Tab1:row14:col3, Tab1:row14:col4, Tab1:row14:col5 | — | not captured |
| Half-life_Beta (terminal phase) | `Q60` · t1/2β | 0.798 | h | 2872.8 | h | 12.77 | llm (0.6) | Tab1:row15:col2, Tab1:row15:col3, Tab1:row15:col4, Tab1:row15:col5 | — | not captured |
| Half-life_alpha (initial phase) | `Q59` · t1/2α | 0.077 | h | 277.2 | h | 20.77 | llm (0.6) | Tab1:row16:col2, Tab1:row16:col3, Tab1:row16:col4, Tab1:row16:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 1.747 | L/kg | 0.12229000000000001 | L | 15.99 | exact (1.0) | Tab1:row17:col2, Tab1:row17:col3, Tab1:row17:col4, Tab1:row17:col5 | — | not captured |
| MRT (Mean residence time (IV) | `Q53` · MRT | 0.884 | h | 3182.4 | h | 16.16 | exact (1.0) | Tab1:row18:col2, Tab1:row18:col3, Tab1:row18:col4, Tab1:row18:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'ilogit, eye drop' (Fab)
- unit_dimension_unknown: 'ilogit, infusion' (Fab)
- dropped duplicate Q40 ('tvfINF (ilogit, infusion)', value '0.738') — already have one for this compound
- unit_dimension_unknown: 'terminal phase' (t1/2β)
- unit_dimension_unknown: 'initial phase' (t1/2α)
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time (IV' (MRT)
- implicit units: 'tvVc' → L/kg (from the paper text: "The abstract states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.' Since Vss is derived ")
- implicit units: 'tvVt' → L/kg (from the paper text: "The abstract states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.' Since Vss is derived ")
- implicit units: 'tvCl' → L/h (from the paper text: "The abstract states: 'Total plasma clearance was 1.9 L/h'. The parameter tvCl corresponds to Total clearance (CL).")
- implicit units: 'tvCld' → L/h (from the popPK convention: 'Intercompartmental clearance (Cld or Q) is a clearance parameter. In population PK, clearances are typically reported in')
- implicit units: 'tvKa' → 1/h (from the popPK convention: 'Absorption rate constant (ka) is a first-order rate constant. The standard unit is 1/h (or h^-1). The magnitude (5.948) ')
- implicit units: 'Half-life_absorption' → h (from the popPK convention: 'Half-life is a time parameter. The standard unit is hours (h). The value 0.117 h is consistent with the absorption half-')
- implicit units: 'Half-life_Beta (terminal phase)' → h (from the popPK convention: 'Terminal half-life is a time parameter. The standard unit is hours (h).')
- implicit units: 'Half-life_alpha (initial phase)' → h (from the popPK convention: 'Initial phase half-life is a time parameter. The standard unit is hours (h).')
- implicit units: 'Vss (steady-state volume of distribution)' → L/kg (from the paper text: "The abstract explicitly states: 'The typical value was 1.7 L/kg for the steady-state volume of distribution.'")
- implicit units: 'MRT (Mean residence time (IV)' → h (from the popPK convention: 'Mean Residence Time (MRT) is a time parameter. The standard unit is hours (h). The value 0.884 h is consistent with the ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atropine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab1:row12:col1 = 'Scalar (0–1)'
- unparsed cell Tab1:row13:col1 = 'Scalar (0–1)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.931 (27/29 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[bioavailability drop]` | not captured | 0.685 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tvfdrop].parameter_id` | Q40 | Q87 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row5:col2', 'Tab1:row5:col3', 'Tab1:row5:col4', 'Tab1:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row9:col1', 'Tab1:row9:col2', 'Tab1:row9:col3', 'Tab1:row9:col4', 'Tab1:row9:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Tab1:row18:col2', 'Tab1:row18:col3', 'Tab1:row18:col4', 'Tab1:row18:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab1:row16:col2', 'Tab1:row16:col3', 'Tab1:row16:col4', 'Tab1:row16:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab1:row15:col2', 'Tab1:row15:col3', 'Tab1:row15:col4', 'Tab1:row15:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row2:col2', 'Tab1:row2:col3', 'Tab1:row2:col4', 'Tab1:row2:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col4', 'Tab1:row3:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row17:col2', 'Tab1:row17:col3', 'Tab1:row17:col4', 'Tab1:row17:col5'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab1:row14:col2', 'Tab1:row14:col3', 'Tab1:row14:col4', 'Tab1:row14:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.905 | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.91 L/h | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 45.2 L | not captured | not captured | ['Tab1:row2:col2', 'Tab1:row2:col3', 'Tab1:row2:col4', 'Tab1:row2:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 80.4 L | not captured | not captured | ['Tab1:row3:col2', 'Tab1:row3:col3', 'Tab1:row3:col4', 'Tab1:row3:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 122 L | not captured | not captured | ['Tab1:row17:col2', 'Tab1:row17:col3', 'Tab1:row17:col4', 'Tab1:row17:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atropine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ström_2021` / `Ström_2021::reference`)
- model: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_modelica.zip" download>Atropine_Strm2021_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_fmi.zip" download>Atropine_Strm2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_matlab.zip" download>Atropine_Strm2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_matlab_simbio.zip" download>Atropine_Strm2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_sbml.zip" download>Atropine_Strm2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_cellml.zip" download>Atropine_Strm2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference.svg" alt="Atropine_Strm2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.14 mg, single dose, first-order absorption (ka 5.95 /h, F 0.685). Doses in the paper: 0.14, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_atropine/Atropine_Strm2021_reference/Atropine_Strm2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Atropine_Strm2021_reference_params.json` · controls `Atropine_Strm2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 13:06 UTC</sub>
