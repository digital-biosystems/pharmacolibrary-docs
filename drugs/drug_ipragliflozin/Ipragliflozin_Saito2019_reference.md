<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;ipragliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_ipragliflozin/&quot;},{&quot;label&quot;:&quot;Saito_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipragliflozin_Saito2019_reference&quot;,&quot;label&quot;:&quot;Saito_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Saito_2019_UGE24h&quot;,&quot;label&quot;:&quot;Saito_2019 \u00b7 \u0394UGE24h&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ipragliflozin/pd_Saito_2019_UGE24h.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipragliflozin — `Ipragliflozin_Saito2019_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ipragliflozin, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Saito M et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13972](https://doi.org/10.1111/bcp.13972)

<div class="pk-model-meta" hidden drug="ipragliflozin" model-id="Ipragliflozin_Saito2019_reference" status="accepted_with_caveats" stale="false" population="type 2 diabetes mellitus patients" measured-compound="ipragliflozin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 9.47 | L/h | 2.630555555555556e-06 | [l] / [h] | not captured | exact (1.0) | bcp13972-tbl-0003:row2:col1 | — | 0.0533 (None% RSE) |
| Vc (L) | `Q63` · V1 | 39.4 | L | 0.0394 | [l] | not captured | exact (1.0) | bcp13972-tbl-0003:row3:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 6.63 | L/h | 1.8416666666666665e-06 | [l] / [h] | not captured | exact (1.0) | bcp13972-tbl-0003:row4:col1 | — | not captured |
| Vp (L) | `Q64` · V2 | 68.1 | L | 0.0681 | [l] | not captured | exact (1.0) | bcp13972-tbl-0003:row5:col1 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 6.38 | h−1 | 0.0017722222222222221 | [1] / [h] | not captured | exact (1.0) | bcp13972-tbl-0003:row6:col1 | — | not captured |
| gfr_effect_on_cl | `Q900` · gfr_effect_on_cl | 0.233 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp13972-tbl-0003:row7:col1 | — | not captured |
| BSA effect on CL | `Q319` · allometric_exponent | 0.610 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | bcp13972-tbl-0003:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2: CL' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2' routed out of structural estimates ('Residual error')
- covariate level 'GFR effect on CL' → Q900:gfr_effect_on_cl = 0.233 (linear_fractional on Q22)
- dropped duplicate Q22 ('TPRO effect on CL', value '-0.417') — already have one for this compound
- dropped duplicate Q22 ('TBIL effect on CL', value '-0.0681') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ipragliflozin
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table bcp13972-tbl-0003: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | 9.47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 6.38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[medians (95% prediction intervals) of auc24h]` | 5417 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[population mean oral clearance]` | 9.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 6.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_gfr]` | not captured | 0.233 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 39.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 68.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ipragliflozin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ipragliflozin | unknown | mismatch |
| `gpt-oss:120b` | `parameters[auc24h]` | not captured | 5417 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fold increase in auc24h]` | not captured | 1.17 | only_one_extracted |
| `gpt-oss:120b` | `parameters[medians (95% prediction intervals) of auc24h]` | 5417 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[population mean oral clearance]` | 9.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[population mean oral clearance]` | not captured | 9.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[δuge24h]` | not captured | 85 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ipragliflozin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ipragliflozin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13972-tbl-0003:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp13972-tbl-0003:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13972-tbl-0003:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13972-tbl-0003:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13972-tbl-0003:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.47 L/h | not captured | not captured | ['bcp13972-tbl-0003:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 39.4 L | not captured | not captured | ['bcp13972-tbl-0003:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 68.1 L | not captured | not captured | ['bcp13972-tbl-0003:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ipragliflozin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ipragliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Saito_2019` / `Saito_2019::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ipragliflozin/models/modelica/Ipragliflozin_Saito2019_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ipragliflozin/models/modelica/Ipragliflozin_Saito2019_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ipragliflozin/models/modelica/Ipragliflozin_Saito2019_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_modelica.zip" download>Ipragliflozin_Saito2019_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_fmi.zip" download>Ipragliflozin_Saito2019_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_matlab.zip" download>Ipragliflozin_Saito2019_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_matlab_simbio.zip" download>Ipragliflozin_Saito2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_sbml.zip" download>Ipragliflozin_Saito2019_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_cellml.zip" download>Ipragliflozin_Saito2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference.svg" alt="Ipragliflozin_Saito2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 6.38 /h, F 1). Doses in the paper: 1, 3, 10, 20, 30, 50, 100, 300 mg.

<dbs-fmusim paramsurl="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference/Ipragliflozin_Saito2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ipragliflozin_Saito2019_reference_params.json` · controls `Ipragliflozin_Saito2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:37 UTC</sub>
