<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;fexofenadine&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/&quot;},{&quot;label&quot;:&quot;Jang_2023 \u00b7 mean_standard_error&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexofenadine_Jang2023_mean_standard_error&quot;,&quot;label&quot;:&quot;Jang_2023_mean_standard_error&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco1b1_521t_c_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco1b1_521t_c_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco1b1_521t_c_genotypes.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco2b1_1457c_t_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Gaspar2025_reference&quot;,&quot;label&quot;:&quot;Gaspar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Gaspar2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fexofenadine — `Fexofenadine_Jang2023_mean_standard_error`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Fexofenadine’s unreported ka was defaulted, and the model predicts Cmax 0.0001086665312206624 kg/m3, below the paper’s reported values.**

The model does not reproduce the paper’s time of peak concentration (tmax): the paper reports 2.0 h and the model predicts 2.693386773547094 h; it also does not reproduce peak concentration (Cmax) (paper 0.00045017 kg/m3, model 0.0001086665312206624 kg/m3). It does not reproduce terminal half-life either: reported values include 1.84 h and 3.38 h, compared with the model’s 2.397564831472877 h. Ka and Tlag were defaulted rather than estimated from the paper; the model also assumed F=1, Fm=1, no molar correction, and first-order depot input. Extracted — fexofenadine: D1 0.45 h, V/F 259 L, CL/F 75.9 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of relative standard errors (rse) of the typical values of the pharmacokinetic parameters v/f, cl/f, ka, and tlag: this record has none, the second reading 30; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Jang JH et al., Quantitative assessment of the relevanc…, Journal of pharmaceutical a… (2023)
  ·  DOI: [10.1016/j.jpha.2023.04.001](https://doi.org/10.1016/j.jpha.2023.04.001)

<div class="pk-model-meta" hidden drug="fexofenadine" model-id="Fexofenadine_Jang2023_mean_standard_error" status="needs_review" stale="false" population="healthy adults" measured-compound="fexofenadine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A | `Q900` · equation variable | 1846.55 | not captured | not captured | not captured | 0.33 | llm (0.6) | tbl5:row2:col1, tbl5:row2:col2 | — | not captured |
| D | `Q310` · D1 | 0.45 | h | 1620.0 | h | 1.52 | exact (1.0) | tbl5:row5:col1, tbl5:row5:col2 | — | not captured |
| Table 1: V/F (L)∗, TT | `Q76` · V/F | 259.19 | L | 0.25919 | L | not captured | boundary (0.8) | Jang_2023:other_prose | — | not captured |
| Table 1: CL/F (L/h)∗, TT | `Q27` · CL/F | 75.87 | L/h | 2.1075e-05 | L/h | not captured | boundary (0.8) | Jang_2023:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[relative standard errors (rse) of the typical values of the pharmacokinetic parameters v/f, cl/f, ka, and tlag]` | not captured | 30 | only_one_extracted |
| `qwen3.8-27b` | `parameters[table 1: cl/f (l/h), tt]` | 75.87 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[table 1: v/f (l), tt]` | 259.19 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f]` | not captured | 259.19 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 2.45 | 2.368 | 0.9665 | 0.25 | reported t½β |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tbl5:row5:col1', 'tbl5:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 75.9 L/h | not captured | not captured | ['Jang_2023:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 259 L | not captured | not captured | ['Jang_2023:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=fexofenadine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.00045017 | 0.0001086665312206624 | 0.2414 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00056164 | 0.0001086665312206624 | 0.1935 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00077089 | 0.0001086665312206624 | 0.141 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00047017 | 0.0001086665312206624 | 0.2311 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00059383 | 0.0001086665312206624 | 0.183 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00084632 | 0.0001086665312206624 | 0.1284 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0009302799999999999 | 0.0001086665312206624 | 0.1168 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 2.45 | 2.397564831472877 | 0.9786 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.52 | 2.397564831472877 | 0.9514 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.83 | 2.397564831472877 | 0.8472 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.97 | 2.397564831472877 | 1.217 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.84 | 2.397564831472877 | 1.303 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.09 | 2.397564831472877 | 1.1472 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.92 | 2.397564831472877 | 0.8211 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.38 | 2.397564831472877 | 0.7093 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 2.693386773547094 | 1.3467 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 2.693386773547094 | 1.3467 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.5 | 2.693386773547094 | 1.0774 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.84 | 2.693386773547094 | 1.4638 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.93 | 2.693386773547094 | 1.3955 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.39 | 2.693386773547094 | 1.1269 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.72 | 2.693386773547094 | 1.5659 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.83 | 2.693386773547094 | 1.4718 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fexofenadine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jang_2023` / `Jang_2023::mean_standard_error`)
- model: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_mean_standard_error.mo`
- deviation: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_mean_standard_error.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_mean_standard_error.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error.svg" alt="Fexofenadine_Jang2023_mean_standard_error diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 60, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error/Fexofenadine_Jang2023_mean_standard_error_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Fexofenadine_Jang2023_mean_standard_error_params.json` · controls `Fexofenadine_Jang2023_mean_standard_error_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 23:32 UTC</sub>
