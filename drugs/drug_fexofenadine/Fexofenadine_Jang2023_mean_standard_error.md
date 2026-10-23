<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;fexofenadine&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/&quot;},{&quot;label&quot;:&quot;Jang_2023 \u00b7 mean_standard_error&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexofenadine_Jang2023_mean_standard_error&quot;,&quot;label&quot;:&quot;Jang_2023_mean_standard_error&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco1b1_521t_c_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco1b1_521t_c_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco1b1_521t_c_genotypes.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco2b1_1457c_t_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Gaspar2025_reference&quot;,&quot;label&quot;:&quot;Gaspar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Gaspar2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fexofenadine — `Fexofenadine_Jang2023_mean_standard_error`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Fexofenadine’s unreported ka was defaulted, and the model predicts Cmax 0.0001086665312206624 kg/m3, below the paper’s reported values.

<div class="pk-model-meta" hidden drug="fexofenadine" model-id="Fexofenadine_Jang2023_mean_standard_error" status="needs_review" stale="false" population="healthy adults" measured-compound="fexofenadine" parameterization="apparent" topology="1C"></div>

## Citation
Jang JH, Jeong SH, Lee YB. Quantitative assessment of the relevance of organic-anion-transporting-polypeptide 1B1 and 2B1 polymorphisms in fexofenadine pharmacokinetic variants via pharmacometrics. Journal of pharmaceutical analysis 13(6):660–672 (2023).
  ·  DOI: [10.1016/j.jpha.2023.04.001](https://doi.org/10.1016/j.jpha.2023.04.001)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 60, 180 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error.svg" alt="Fexofenadine_Jang2023_mean_standard_error diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| A | equation variable | 1846.55 |  | 0.33 |
| D | D1 | 0.45 | h | 1.52 |
| Table 1: V/F (L)∗, TT | V/F | 259.19 | L |  |
| Table 1: CL/F (L/h)∗, TT | CL/F | 75.87 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Fexofenadine’s unreported ka was defaulted, and the model predicts Cmax 0.0001086665312206624 kg/m3, below the paper’s reported values.**

The model does not reproduce the paper’s time of peak concentration (tmax): the paper reports 2.0 h and the model predicts 2.693386773547094 h; it also does not reproduce peak concentration (Cmax) (paper 0.00045017 kg/m3, model 0.0001086665312206624 kg/m3). It does not reproduce terminal half-life either: reported values include 1.84 h and 3.38 h, compared with the model’s 2.397564831472877 h. Ka and Tlag were defaulted rather than estimated from the paper; the model also assumed F=1, Fm=1, no molar correction, and first-order depot input. Extracted — fexofenadine: D1 0.45 h, V/F 259 L, CL/F 75.9 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl/f: this record has none, the second reading 75.87; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| A | `Q900` · equation variable | 1846.55 |  |  |  |  | 0.33 | llm (0.6) | tbl5:row2:col1, tbl5:row2:col2 |
| D | `Q310` · D1 | 0.45 | h | 1620 | s | h | 1.52 | exact (1) | tbl5:row5:col1, tbl5:row5:col2 |
| Table 1: V/F (L)∗, TT | `Q76` · V/F | 259.19 | L | 0.2592 | m3 | L |  | boundary (0.8) | Jang_2023:other_prose |
| Table 1: CL/F (L/h)∗, TT | `Q27` · CL/F | 75.87 | L/h | 2.108e-05 | m3/s | L/h |  | boundary (0.8) | Jang_2023:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'mean ± standard error' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q900 ('B', value '2028.31') — already have one for this compound
- dropped duplicate Q900 ('C', value '0.03') — already have one for this compound
- dropped unlinked row (NIL): 'AIC' — extend the ontology if this is a real PK parameter (source ['tbl5:row6:col1'])
- salvaged Q76 ('Table 1: V/F (L)∗, TT'=259.19) from results prose — parameter table was unreadable
- salvaged Q27 ('Table 1: CL/F (L/h)∗, TT'=75.87) from results prose — parameter table was unreadable
- implicit units: 'D' → h (from the popPK convention: 'D is the duration of a zero-order input, so it has units of time; hours are the usual population-PK convention and are c')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fexofenadine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'mean ± standard error' subgroup of Jang_2023 (paper reports 3 populations: mean ± standard error, slco1b1 521t &gt; c genotypes, slco2b1 1457c &gt; t genotypes)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 1 transcribed (27 record(s))
- companion parameter table 2 transcribed (30 record(s))
- companion parameter table 3 transcribed (18 record(s))
- companion parameter table 4 transcribed (20 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f]` |  | 75.87 | only_one_extracted |
| `qwen3.8-27b` | `parameters[table 1: cl/f (l/h), tt]` | 75.87 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[table 1: v/f (l), tt]` | 259.19 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f]` |  | 259.19 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 2.45 | 2.368 | 0.9665 | 0.25 | reported t½β |
| C5_dimension_Q310 | pass | [time] |  |  |  | ['tbl5:row5:col1', 'tbl5:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 75.9 L/h |  |  | ['Jang_2023:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 259 L |  |  | ['Jang_2023:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=fexofenadine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0004502 | 0.0001087 | 0.2414 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0005616 | 0.0001087 | 0.1935 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0007709 | 0.0001087 | 0.141 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0004702 | 0.0001087 | 0.2311 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0005938 | 0.0001087 | 0.183 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0008463 | 0.0001087 | 0.1284 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0009303 | 0.0001087 | 0.1168 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 2.45 | 2.398 | 0.9786 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.52 | 2.398 | 0.9514 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.83 | 2.398 | 0.8472 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.97 | 2.398 | 1.217 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.84 | 2.398 | 1.303 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.09 | 2.398 | 1.147 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.92 | 2.398 | 0.8211 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.38 | 2.398 | 0.7093 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 2.693 | 1.347 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 2.693 | 1.347 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.5 | 2.693 | 1.077 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.84 | 2.693 | 1.464 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.93 | 2.693 | 1.395 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.39 | 2.693 | 1.127 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.72 | 2.693 | 1.566 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.83 | 2.693 | 1.472 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_modelica.zip" download>Fexofenadine_Jang2023_mean_standard_error_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_fmi.zip" download>Fexofenadine_Jang2023_mean_standard_error_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_matlab.zip" download>Fexofenadine_Jang2023_mean_standard_error_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_matlab_simbio.zip" download>Fexofenadine_Jang2023_mean_standard_error_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_sbml.zip" download>Fexofenadine_Jang2023_mean_standard_error_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_cellml.zip" download>Fexofenadine_Jang2023_mean_standard_error_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5017 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-05 | kg |
| input | model | `Cl` | 2.108e-05 | m3/s |
| input | model | `VdPerKg` | 0.003703 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jang JH, Jeong SH, Lee YB. Quantitative assessment of the relevance of organic-anion-transporting-polypeptide 1B1 and 2B1 polymorphisms in fexofenadine pharmacokinetic variants via pharmacometrics. Journal of pharmaceutical analysis 13(6):660–672 (2023). [doi:10.1016/j.jpha.2023.04.001](https://doi.org/10.1016/j.jpha.2023.04.001)

**This record:** Pharmacolibrary v26.09, model `Fexofenadine_Jang2023_mean_standard_error`. <https://pharmacolibrary.github.io/#/drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error>

```bibtex
@misc{pharmacolibrary_FexofenadineJang2023meanstandarderror,
  title  = {{Pharmacolibrary model Fexofenadine_Jang2023_mean_standard_error}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error},
  note   = {Parameters from doi:10.1016/j.jpha.2023.04.001},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 60, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fexofenadine_Jang2023_mean_standard_error_params.json` · controls `Fexofenadine_Jang2023_mean_standard_error_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfexofenadine%5D%20Fexofenadine_Jang2023_mean_standard_error&body=Drug%3A%20fexofenadine%0ARecord%3A%20Fexofenadine_Jang2023_mean_standard_error%0APaper%3A%20Jang_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:32 UTC</sub>
