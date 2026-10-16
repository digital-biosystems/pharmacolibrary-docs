<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;alogliptin&quot;,&quot;href&quot;:&quot;drugs/drug_alogliptin/&quot;},{&quot;label&quot;:&quot;Dudkowski_2017 \u00b7 final_parameter_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alogliptin_Dudkowski2017_final_parameter_estimate&quot;,&quot;label&quot;:&quot;Dudkowski_2017_final_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alogliptin — `Alogliptin_Dudkowski2017_final_parameter_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The alogliptin model was quarantined because volume of distribution, absorption rate constant and absorption lag time had no source values and library placeholders were substituted, with V2/F and Q/F also uncovered.**

Although the record lists kabs 0.590 1/hr, CL/F 14.4 L/hr, V2/F 125 L, V3/F 117 L and Q/F 11.7 L/hr, the coverage check found only 2 of 4 expected parameters covered, with V2/F and Q/F neither emitted nor defaulted. The builder left Vd, ka and Tlag at library defaults, and the absorption rate constant was flagged as invented since it was not reported in the source. Bioavailability was assumed to be 1 (F=1, Fm=1) with no molar correction, an apparent parameterization. Extracted — alogliptin: kabs 0.59, CL/F 14.4 L/hr, V2/F 125 L, V3/F 117 L, Q/F 11.7 L/hr.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has alogliptin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:35:58.903324+00:00) predates the upstream re-run (2026-10-04 22:10:02.381001+00:00). Current validate status: `extracted`.

## Citation
Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017)
  ·  DOI: [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1)

<div class="pk-model-meta" hidden drug="alogliptin" model-id="Alogliptin_Dudkowski2017_final_parameter_estimate" status="extracted" stale="true" population="children, adolescents, and adults with type 2 diabetes mellitus" measured-compound="alogliptin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant [KA] in pediatric subjects (1/hr) | `Q49` · kabs | 0.590 | 1/h | 0.00016388888888888887 | 1/h | not captured | llm_confirmed (0.6) | Dudkowski_2017_table_S1:row1:col1 | — | not captured |
| Oral clearance [CL/F] in pediatric subjects (L/hr) | `Q27` · CL/F | 14.4 | L/hr | 4.000000000000001e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | Dudkowski_2017_table_S1:row2:col1, Dudkowski_2017_table_S1:row2:col4 | — | not captured |
| Central volume of distribution [V2/F] (L) | `Q63` · V1 | 125 | L | 0.125 | [l] | not captured | boundary_compartment (0.9) | Dudkowski_2017_table_S1:row3:col1, Dudkowski_2017_table_S1:row3:col4 | — | not captured |
| Peripheral volume of distribution [V3/F] (L) | `Q64` · V2 | 117 | L | 0.117 | [l] | not captured | boundary_compartment (0.9) | Dudkowski_2017_table_S1:row4:col1 | — | not captured |
| Intercompartmental clearance [Q/F] (L/hr) | `Q69` · Q/F | 11.7 | L/hr | 3.2500000000000002e-06 | [l] / [h] | not captured | llm_corrected (0.6) | Dudkowski_2017_table_S1:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Baseline response [E0] (%)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row6:col1'])
- dropped PD-category row 'Maximal response [Emax] (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row7:col1'])
- dropped PD-category row 'Concentration at half-maximal response [EC50] in pediatric subjects (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row8:col1', 'Dudkowski_2017_table_S1:row8:col4'])
- dropped PD-category row 'Shape factor [γ]' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row9:col1'])
- dropped PD-category row 'Concentration at half-maximal response [EC50] in adult subjects (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Dudkowski_2017_table_S1:row10:col1', 'Dudkowski_2017_table_S1:row10:col4'])
- dropped duplicate Q27 ('Oral clearance [CL/F] in adult subjects (L/hr)', value '13.0') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant [KA] in adult subjects (1/hr)', value '1.66') — already have one for this compound
- implicit units: 'Absorption rate constant [KA] in pediatric subjects (1/hr)' → 1/h (from the popPK convention: "The paper text mentions 'absorption rate constant' as a covariate but does not explicitly state its unit in the provided")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=alogliptin
- population split: 'final parameter estimate' subgroup of Dudkowski_2017 (paper reports 5 populations: 14 to &lt;18 years, adults, alo 12.5 mg, alo 25 mg, final parameter estimate)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Tab3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab3:row0:col3 = '10 to &lt;14 years'
- unparsed cell Tab3:row0:col5 = '10 to &lt;14 years'
- unparsed cell Tab3:row0:col7 = '22a'
- unparsed cell Tab3:row1:col4 = '4.00 (2.00, 4.03)'
- unparsed cell Tab3:row1:col6 = '4.00 (3.97, 4.12)'
- unparsed cell Tab3:row1:col7 = '2.00 (2.00, 4.07)'
- unparsed cell Tab3:row2:col3 = '4.05 (2.00, 4.08)'
- unparsed cell Tab3:row2:col5 = '2.08 (2.00, 4.00)'
- unparsed cell Tab3:row4:col1 = 'AUEC0–24 (%·hr)'
- unparsed cell Tab3:row5:col1 = 'E24 (%)'
- transposed table Dudkowski_2017_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Dudkowski_2017_table_2:row0:col1 = '10 to &lt;14 years'
- unparsed cell Dudkowski_2017_table_2:row0:col3 = '10 to &lt;14 years'
- unparsed cell Dudkowski_2017_table_2:row1:col1 = '5a'
- unparsed cell Dudkowski_2017_table_2:row3:col2 = '3.001.00, 23.97'
- unparsed cell Dudkowski_2017_table_2:row3:col4 = '3.971.00, 4.08'
- unparsed cell Dudkowski_2017_table_2:row3:col5 = '2.001.00, 4.07'
- unparsed cell Dudkowski_2017_table_2:row4:col1 = '4.002.00, 4.08'
- unparsed cell Dudkowski_2017_table_2:row4:col3 = '2.042.00, 2.08'
- companion parameter table 2 transcribed (39 record(s))
- companion parameter table 4 transcribed (14 record(s))
- unparsed cell Dudkowski_2017_table_S1:row2:col3 = '18.5 %CV'
- unparsed cell Dudkowski_2017_table_S1:row3:col3 = '30.1 %CV'
- unparsed cell Dudkowski_2017_table_S1:row4:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row5:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row6:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row7:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row8:col3 = '24.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row9:col3 = '0 %CV'
- unparsed cell Dudkowski_2017_table_S1:row10:col3 = '24.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row11:col3 = '18.5 %CV'
- unparsed cell Dudkowski_2017_table_S1:row13:col3 = '28.6 %CV'
- unparsed cell Dudkowski_2017_table_S1:row14:col3 = '0.100 SD'
- unparsed cell Dudkowski_2017_table_S1:row15:col3 = '1.92 SD'
- companion parameter table S1 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 4, S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | alogliptin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alogliptin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dudkowski_2017_table_S1:row2:col1', 'Dudkowski_2017_table_S1:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Dudkowski_2017_table_S1:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dudkowski_2017_table_S1:row3:col1', 'Dudkowski_2017_table_S1:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dudkowski_2017_table_S1:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dudkowski_2017_table_S1:row5:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.4 L/h | not captured | not captured | ['Dudkowski_2017_table_S1:row2:col1', 'Dudkowski_2017_table_S1:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 125 L | not captured | not captured | ['Dudkowski_2017_table_S1:row3:col1', 'Dudkowski_2017_table_S1:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 117 L | not captured | not captured | ['Dudkowski_2017_table_S1:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alogliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dudkowski_2017` / `Dudkowski_2017::final_parameter_estimate`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alogliptin/models/modelica/_needs_review/Alogliptin_Dudkowski2017_final_parameter_estimate.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_alogliptin/models/modelica/_needs_review/Alogliptin_Dudkowski2017_final_parameter_estimate.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_modelica.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_fmi.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_matlab.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_matlab_simbio.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_sbml.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_cellml.zip" download>Alogliptin_Dudkowski2017_final_parameter_estimate_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate.svg" alt="Alogliptin_Dudkowski2017_final_parameter_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 12.5 mg, single dose, first-order absorption (ka 0.59 /h, F 1). Doses in the paper: 12.5, 25 mg.

<dbs-fmusim paramsurl="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate/Alogliptin_Dudkowski2017_final_parameter_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Alogliptin_Dudkowski2017_final_parameter_estimate_params.json` · controls `Alogliptin_Dudkowski2017_final_parameter_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:10 UTC</sub>
