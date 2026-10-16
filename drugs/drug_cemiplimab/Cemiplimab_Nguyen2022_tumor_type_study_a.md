<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Nguyen_2022 \u00b7 tumor_type_study_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cemiplimab_Nguyen2022_tumor_type_study_a&quot;,&quot;label&quot;:&quot;Nguyen_2022_tumor_type_study_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Nguyen2022_tumor_type_study_a`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 473, model 398).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — cemiplimab: V 5.89 L, CL 0.246 L/day.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of baseline cl at first dose: this record has 0.246, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855)

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Nguyen2022_tumor_type_study_a" status="needs_review" stale="false" population="adults with solid tumors (CSCC, BCC, NSCLC, R/M CC)" measured-compound="cemiplimab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Mean (CV%) volume of distribution (Vss) of cemiplimab | `Q61` · V | 5.89 | L | 0.005889999999999999 | L | not captured | boundary (0.8) | Nguyen_2022:other_prose | — | not captured |
| baseline CL at first dose | `Q22` · CL | 0.246 | L/day | 2.8472222222222224e-09 | L/h | not captured | review_gapfill (0.7) | Nguyen_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CSCC (study 1540)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row1:col1', 'Nguyen_2022_table_2:row6:col1', 'Nguyen_2022_table_2:row11:col1', 'Nguyen_2022_table_2:row16:col1', 'Nguyen_2022_table_2:row21:col1', 'Nguyen_2022_table_2:row26:col1', 'Nguyen_2022_table_2:row31:col1', 'Nguyen_2022_table_2:row36:col1'])
- dropped unlinked row (NIL): 'BCC (study 1620)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row2:col1', 'Nguyen_2022_table_2:row7:col1', 'Nguyen_2022_table_2:row12:col1', 'Nguyen_2022_table_2:row17:col1', 'Nguyen_2022_table_2:row22:col1', 'Nguyen_2022_table_2:row27:col1', 'Nguyen_2022_table_2:row32:col1', 'Nguyen_2022_table_2:row37:col1'])
- dropped unlinked row (NIL): 'NSCLC (study 1624)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row3:col1', 'Nguyen_2022_table_2:row8:col1', 'Nguyen_2022_table_2:row13:col1', 'Nguyen_2022_table_2:row18:col1', 'Nguyen_2022_table_2:row23:col1', 'Nguyen_2022_table_2:row28:col1', 'Nguyen_2022_table_2:row33:col1', 'Nguyen_2022_table_2:row38:col1'])
- dropped unlinked row (NIL): 'All solid tumors (study 1423)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row4:col1', 'Nguyen_2022_table_2:row9:col1', 'Nguyen_2022_table_2:row14:col1', 'Nguyen_2022_table_2:row19:col1', 'Nguyen_2022_table_2:row24:col1', 'Nguyen_2022_table_2:row29:col1', 'Nguyen_2022_table_2:row34:col1', 'Nguyen_2022_table_2:row39:col1'])
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('Mean (CV%) volume of distribution (Vss) of cemiplimab'=5.89) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'tumor type (study) a' subgroup of Nguyen_2022 (paper reports 2 populations: final poppk model, tumor type (study) a)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Nguyen_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table psp412855-tbl-0001: ragged_grid
- table psp412855-tbl-0001: unparsed_numeric_cell
- table psp412855-tbl-0001: representations disagree; selected evidence retained, not merged
- table Nguyen_2022_table_2: ragged_grid
- companion parameter table 2 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[baseline cl at first dose]` | 0.246 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean (cv%) volume of distribution (vss) of cemiplimab]` | not captured | 5.89 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 5.89 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 19.7 | 16.596 | 0.8424 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nguyen_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.246 | not captured | not captured | ['Nguyen_2022:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0103 L/h | not captured | not captured | ['Nguyen_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.89 L | not captured | not captured | ['Nguyen_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=cemiplimab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | pass | 472.79999999999995 | 398.3029766037254 | 0.8424 | days→SI vs simulated h |
| T1_t_half_beta | reference | fail | 535.2 | 398.3029766037254 | 0.7442 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cemiplimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nguyen_2022` / `Nguyen_2022::tumor_type_study_a`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cemiplimab/models/modelica/Cemiplimab_Nguyen2022_tumor_type_study_a.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cemiplimab/models/modelica/Cemiplimab_Nguyen2022_tumor_type_study_a.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cemiplimab/models/modelica/Cemiplimab_Nguyen2022_tumor_type_study_a.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_modelica.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_fmi.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_matlab.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_matlab_simbio.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_sbml.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_cellml.zip" download>Cemiplimab_Nguyen2022_tumor_type_study_a_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a.svg" alt="Cemiplimab_Nguyen2022_tumor_type_study_a diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 350 mg infusion over 10 min, single dose. Dose in the paper: 350 mg.

<dbs-fmusim paramsurl="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_cemiplimab/Cemiplimab_Nguyen2022_tumor_type_study_a/Cemiplimab_Nguyen2022_tumor_type_study_a_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Cemiplimab_Nguyen2022_tumor_type_study_a_params.json` · controls `Cemiplimab_Nguyen2022_tumor_type_study_a_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:35 UTC</sub>
