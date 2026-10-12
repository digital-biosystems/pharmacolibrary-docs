<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;canrenone&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/&quot;},{&quot;label&quot;:&quot;Suyagh_2012 \u00b7 final_pharmacokinetic_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canrenone_Suyagh2012_final_pharmacokinetic_model&quot;,&quot;label&quot;:&quot;Suyagh_2012_final_pharmacokinetic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Canrenone_Suyagh2012_median&quot;,&quot;label&quot;:&quot;Suyagh_2012_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2012_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canrenone_Suyagh2013_reference&quot;,&quot;label&quot;:&quot;Suyagh_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canrenone/Canrenone_Suyagh2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canrenone — `Canrenone_Suyagh2012_final_pharmacokinetic_model`

> ## <span class="pk-badge pk-badge--green" title="molar_mass_missing:canrenone: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`molar_mass_missing:canrenone`): a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

### Reviewer guidance

**The canrenone parent–metabolite model was held back because the metabolite's own V, CL and formation clearance were left at zero, ka was defaulted rather than reported, and canrenone's molar mass is missing.**

The record builds canrenone as a metabolite formed from potassium canrenoate in a one-compartment central structure, but the metabolite's own V, CL and formation clearance were all 0, so that compartment would carry placeholder values instead of paper-supported ones. The absorption rate constant ka (and Tlag) were not reported in the paper and were left at library defaults, which the established note says affect the simulated profile without support from this source. The molar mass of canrenone is missing, so metabolite amounts would be formed as 1 mg per mg of parent converted rather than on a molar basis. The model structure also did not match the expected parent–metabolite-central arrangement (a one-compartment enteral structure was obtained instead), and the deviations adjudication returned 'not acceptable' for the defaulted parameters, the apparent F=1/Fm=1 assumption and the invented absorption. Extracted — canrenone: CL/F 11.4 l h -1 70 kg -1, V/F 374 l 70 kg -1, kfm 5.25 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].parameter_id`: this record has Q351, the second reading Q27. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:24:38.163543+00:00) predates the upstream re-run (2026-10-06 17:47:28.716070+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `potassium canrenoate`, measured `canrenone`.

## Citation
Suyagh M et al., Population pharmacokinetic model of can…, British journal of clinical… (2012)
  ·  DOI: [10.1111/j.1365-2125.2012.04257.x](https://doi.org/10.1111/j.1365-2125.2012.04257.x)

<div class="pk-model-meta" hidden drug="canrenone" model-id="Canrenone_Suyagh2012_final_pharmacokinetic_model" status="extracted" stale="true" population="paediatric patients" measured-compound="canrenone" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 70 kg -1 ) | `Q351` · CLm/F | 11.4 | l h -1 70 kg -1 | 0.00022166666666666667 | [l] / [[h] · [kg]] | not captured | exact (1.0) | tab_0:row2:col8, tab_0:row2:col13, tab_0:row2:col14, tab_0:row2:col15 | — | not captured |
| V/F (l 70 kg -1 ) | `Q76` · V/F | 374.2 | l 70 kg -1 | 26.194 | [l] / [kg] | not captured | exact (1.0) | tab_0:row3:col11, tab_0:row3:col15, tab_0:row3:col16, tab_0:row3:col17, tab_0:row3:col18 | — | not captured |
| kf (h -1 ) | `Q305` · kfm | 5.25 | h -1 | 0.0014583333333333334 | [1] / [h] | not captured | exact (1.0) | tab_0:row4:col11, tab_0:row4:col15, tab_0:row4:col16, tab_0:row4:col17, tab_0:row4:col18 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- metabolite canrenone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=canrenone
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V/F (l 70 kg -1 )' is the general volume)
- population split: 'final pharmacokinetic model' subgroup of Suyagh_2012 (paper reports 2 populations: final pharmacokinetic model, median)
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 31 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Suyagh_2012_table_2:row0:col4 = '1.87 Ϯ 1.56'
- unparsed cell Suyagh_2012_table_2:row1:col4 = '34.00 Ϯ 42.95'
- unparsed cell Suyagh_2012_table_2:row2:col4 = '12.12 Ϯ 4.34'
- unparsed cell Suyagh_2012_table_2:row3:col4 = '0.35 Ϯ 0.14'
- unparsed cell Suyagh_2012_table_2:row4:col4 = '5.36 Ϯ 1.18'
- companion parameter table 2 transcribed (20 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (7/8 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | potassium canrenoate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | canrenone | unknown | mismatch |

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
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row4:col11', 'tab_0:row4:col15', 'tab_0:row4:col16', 'tab_0:row4:col17', 'tab_0:row4:col18'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row2:col8', 'tab_0:row2:col13', 'tab_0:row2:col14', 'tab_0:row2:col15'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row3:col11', 'tab_0:row3:col15', 'tab_0:row3:col16', 'tab_0:row3:col17', 'tab_0:row3:col18'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.62e+04 L | not captured | not captured | ['tab_0:row3:col11', 'tab_0:row3:col15', 'tab_0:row3:col16', 'tab_0:row3:col17', 'tab_0:row3:col18'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[canrenone] | not captured | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | not captured | canrenone: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[canrenone] | not captured | skipped | not captured | not captured | not captured | the simulation recorded no per-molecule outputs |
| T3_molar_mass[canrenone] | not captured | fail | not captured | {'MW': 0, 'MW_m1': 0} | not captured | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | deviation_id: not acceptable; defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable; input_model: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canrenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Suyagh_2012` / `Suyagh_2012::final_pharmacokinetic_model`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canrenone/models/modelica/Canrenone_Suyagh2012_final_pharmacokinetic_model.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canrenone/models/modelica/Canrenone_Suyagh2012_final_pharmacokinetic_model.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_modelica.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_fmi.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_matlab.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_matlab_simbio.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_sbml.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_cellml.zip" download>Canrenone_Suyagh2012_final_pharmacokinetic_model_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model.svg" alt="Canrenone_Suyagh2012_final_pharmacokinetic_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 5.25 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_canrenone/Canrenone_Suyagh2012_final_pharmacokinetic_model/Canrenone_Suyagh2012_final_pharmacokinetic_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Canrenone_Suyagh2012_final_pharmacokinetic_model_params.json` · controls `Canrenone_Suyagh2012_final_pharmacokinetic_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:47 UTC</sub>
