<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;favipiravir&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/&quot;},{&quot;label&quot;:&quot;Prasanchaimontri_2024 \u00b7 geometric_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Favipiravir_Agyeman2026_reference&quot;,&quot;label&quot;:&quot;Agyeman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Agyeman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Irie2023_reference&quot;,&quot;label&quot;:&quot;Irie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Irie2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_arithmetic_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_geometric_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Favipiravir_Pertinez2021_reference&quot;,&quot;label&quot;:&quot;Pertinez_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# favipiravir — `Favipiravir_Prasanchaimontri2024_geometric_mean`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0145, model 0.0385).

<div class="pk-model-meta" hidden drug="favipiravir" model-id="Favipiravir_Prasanchaimontri2024_geometric_mean" status="needs_review" stale="false" population="Thai adults with mild COVID-19" measured-compound="favipiravir" parameterization="apparent" topology="1C"></div>

## Citation
Prasanchaimontri IO, Manosuthi W, Pertinez H, Owen A, Niyomnaitham S, Sirijatuphat R et al. Favipiravir pharmacokinetics in Thai adults with mild COVID-19: A sub-study of interpatient variability and ethnic differences in exposure. Pharmacology research & perspectives 12(6):e1233 (2024).
  ·  DOI: [10.1002/prp2.1233](https://doi.org/10.1002/prp2.1233)

## Population and dosing

**Population:** Thai adults with mild COVID-19 · condition mild COVID-19 without pneumonia · age group adult · n = 8.

**Dosing:** 800, 1800 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean.svg" alt="Favipiravir_Prasanchaimontri2024_geometric_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) [%RSE] | CL/F | 1.0 | L/h |
| V/F (L) [%RSE] | V/F | 19.5 | L |
| K A (h−1) [%RSE] | kabs | 3.4 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0145, model 0.0385).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — favipiravir: CL/F 1 L/h, V/F 19.5 L, kabs 3.4 1/h.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) [%RSE] | `Q27` · CL/F | 1.0 | L/h | 2.778e-07 | m3/s | L/h | llm_confirmed (0.6) | prp21233-tbl-0001:row0:col11 |
| V/F (L) [%RSE] | `Q76` · V/F | 19.5 | L | 0.0195 | m3 | L | llm_confirmed (0.6) | prp21233-tbl-0001:row1:col11 |
| K A (h−1) [%RSE] | `Q49` · kabs | 3.4 | 1/h | 0.0009444 | 1/s | 1/h | llm (0.6) | prp21233-tbl-0001:row2:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- implicit units: 'CL/F (L/h) [%RSE]' → L/h (from the paper text: 'The paper states that apparent clearance is parameterized as “CL/F, L/h.”')
- implicit units: 'V/F (L) [%RSE]' → L (from the paper text: 'The paper states that apparent volume of distribution is parameterized as “V/F, L.”')
- implicit units: 'K A (h−1) [%RSE]' → 1/h (from the paper text: 'The paper states that the absorption rate constant is “K A, h−1.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=favipiravir
- population split: 'geometric mean' subgroup of Prasanchaimontri_2024 (paper reports 2 populations: arithmetic mean, geometric mean)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table prp21233-tbl-0001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell prp21233-tbl-0001:row0:col2 = '1.2 [14.7]'
- unparsed cell prp21233-tbl-0001:row0:col3 = '0.7 [17.5]'
- unparsed cell prp21233-tbl-0001:row0:col4 = '1.5 [117.7]'
- unparsed cell prp21233-tbl-0001:row0:col5 = '0.8 [986.7]'
- unparsed cell prp21233-tbl-0001:row0:col6 = '0.7 [1311.9]'
- unparsed cell prp21233-tbl-0001:row0:col7 = '2.7 [23.1]'
- unparsed cell prp21233-tbl-0001:row0:col8 = '1.0 [9.3]'
- unparsed cell prp21233-tbl-0001:row0:col9 = '0.6 [25.4]'
- unparsed cell prp21233-tbl-0001:row1:col2 = '22.8 [18.5]'
- unparsed cell prp21233-tbl-0001:row1:col3 = '13.5 [16.3]'
- unparsed cell prp21233-tbl-0001:row1:col4 = '24.9 [48.6]'
- unparsed cell prp21233-tbl-0001:row1:col5 = '14.7 [2154.2]'
- unparsed cell prp21233-tbl-0001:row1:col6 = '14.1 [4893.9]'
- unparsed cell prp21233-tbl-0001:row1:col7 = '38.0 [34.5]'
- unparsed cell prp21233-tbl-0001:row1:col8 = '17.8 [12.7]'
- unparsed cell prp21233-tbl-0001:row1:col9 = '19.1 [35.1]'
- unparsed cell prp21233-tbl-0001:row2:col1 = 'K A (h−1) [%RSE]'
- unparsed cell prp21233-tbl-0001:row2:col2 = '1.5 [1.0]'
- unparsed cell prp21233-tbl-0001:row2:col3 = '6.3 [1906.0]'
- unparsed cell prp21233-tbl-0001:row2:col4 = '5.9 [6175.6]'
- unparsed cell prp21233-tbl-0001:row2:col5 = '6.0 [1827.2]'
- unparsed cell prp21233-tbl-0001:row2:col6 = '1.8 [14982.2]'
- unparsed cell prp21233-tbl-0001:row2:col7 = '19.4 [0.5]'
- unparsed cell prp21233-tbl-0001:row2:col8 = '7.1 [965.6]'
- unparsed cell prp21233-tbl-0001:row2:col9 = '0.2 [51.7]'
- unparsed cell prp21233-tbl-0001:row3:col2 = '10.6 [41.3]'
- unparsed cell prp21233-tbl-0001:row3:col3 = '−7.8 [324.0]'
- unparsed cell prp21233-tbl-0001:row3:col4 = '6.3 [142.2]'
- unparsed cell prp21233-tbl-0001:row3:col5 = '8.1 [1901.4]'
- unparsed cell prp21233-tbl-0001:row3:col6 = '9.5 [5274.3]'
- unparsed cell prp21233-tbl-0001:row3:col7 = '−3.8 [206.2]'
- unparsed cell prp21233-tbl-0001:row3:col8 = '−7.2 [50.3]'
- unparsed cell prp21233-tbl-0001:row3:col9 = '3.5 [286.8]'
- unparsed cell prp21233-tbl-0001:row3:col10 = '−7.8‐10.6'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (7/7 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['prp21233-tbl-0001:row0:col11'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['prp21233-tbl-0001:row2:col11'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['prp21233-tbl-0001:row1:col11'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1 L/h | ['prp21233-tbl-0001:row0:col11'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 19.5 L | ['prp21233-tbl-0001:row1:col11'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=favipiravir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0145 | 0.03847 | 2.653 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.002 | 0.03847 | 19.23 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 2 | 0.03847 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 12.1 to 132.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 1.6 to 6.7 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_modelica.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_fmi.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_matlab.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_matlab_simbio.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_sbml.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_cellml.zip" download>Favipiravir_Prasanchaimontri2024_geometric_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1571 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0008 | kg |
| input | model | `Cl` | 2.778e-07 | m3/s |
| input | model | `VdPerKg` | 0.0002786 | m3/kg |
| input | model | `ka` | 0.0009444 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Prasanchaimontri IO, Manosuthi W, Pertinez H, Owen A, Niyomnaitham S, Sirijatuphat R et al. Favipiravir pharmacokinetics in Thai adults with mild COVID-19: A sub-study of interpatient variability and ethnic differences in exposure. Pharmacology research & perspectives 12(6):e1233 (2024). [doi:10.1002/prp2.1233](https://doi.org/10.1002/prp2.1233)

**This record:** Pharmacolibrary v26.09, model `Favipiravir_Prasanchaimontri2024_geometric_mean`. <https://pharmacolibrary.github.io/#/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean>

```bibtex
@misc{pharmacolibrary_FavipiravirPrasanchaimontri2024geometricmean,
  title  = {{Pharmacolibrary model Favipiravir_Prasanchaimontri2024_geometric_mean}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean},
  note   = {Parameters from doi:10.1002/prp2.1233},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 3.4 /h, F 1). Doses in the paper: 800, 1800 mg.

<dbs-fmusim paramsurl="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean/Favipiravir_Prasanchaimontri2024_geometric_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Favipiravir_Prasanchaimontri2024_geometric_mean_params.json` · controls `Favipiravir_Prasanchaimontri2024_geometric_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfavipiravir%5D%20Favipiravir_Prasanchaimontri2024_geometric_mean&body=Drug%3A%20favipiravir%0ARecord%3A%20Favipiravir_Prasanchaimontri2024_geometric_mean%0APaper%3A%20Prasanchaimontri_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:17 UTC</sub>
