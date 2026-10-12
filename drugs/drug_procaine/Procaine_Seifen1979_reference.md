<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;procaine&quot;,&quot;href&quot;:&quot;drugs/drug_procaine/&quot;},{&quot;label&quot;:&quot;Seifen_1979 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procaine_Seifen1979_reference&quot;,&quot;label&quot;:&quot;Seifen_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procaine/Procaine_Seifen1979_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# procaine — `Procaine_Seifen1979_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has procaine, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 22:56:11.764172+00:00) predates the upstream re-run (2026-10-06 22:54:34.792357+00:00). Current validate status: `extracted`.

## Citation
Seifen AB et al., Pharmacokinetics of intravenous procain…, Anesthesia and analgesia (1979)
  ·  DOI: [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007)

<div class="pk-model-meta" hidden drug="procaine" model-id="Procaine_Seifen1979_reference" status="extracted" stale="true" population="women undergoing hysterectomy" measured-compound="procaine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| distribution half-life (t1/2 alpha) | `Q59` · t1/2α | 2.49 | minutes | 149.4 | [min] | not captured | llm (0.6) | Seifen_1979:abstract | — | not captured |
| elimination half-life (t1/2 beta) | `Q60` · t1/2β | 7.69 | minutes | 461.40000000000003 | [min] | not captured | llm (0.6) | Seifen_1979:abstract | — | not captured |
| volume of distribution at steady-state | `Q65` · Vss | 0.79 | L/kg | 0.0553 | [l] / [kg] | not captured | llm_corrected (0.6) | Seifen_1979:abstract, Seifen_1979:abstract | — | not captured |
| total body clearance | `Q22` · CL | 0.08 | L/kg/min | 9.333333333333334e-05 | [l] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Seifen_1979:abstract, Seifen_1979:abstract | — | not captured |
| Vz | `Q61` · V | 0.51 | L/kg | 0.0357 | L | not captured | review_gapfill (0.7) | Olivarez_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'fraction of drug in the central compartment' — extend the ontology if this is a real PK parameter (source ['Seifen_1979:abstract', 'Seifen_1979:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=procaine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Olivarez_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Seifen_1979_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |
| `gpt-oss:120b` | confirmed | 1.0 (8/8 fields) | none |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[distribution half-life]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution half-life]` | not captured | 2.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | 7.69 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 7.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | not captured | 0.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady-state]` | 0.79 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady-state]` | not captured | 0.79 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz]` | 0.51 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | procaine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | procaine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Seifen_1979:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Seifen_1979:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Olivarez_2022:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.08 | not captured | not captured | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 336 L/h | not captured | not captured | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 35.7 L | not captured | not captured | ['Olivarez_2022:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 55.3 L | not captured | not captured | ['Seifen_1979:abstract', 'Seifen_1979:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=procaine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_procaine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Seifen_1979` / `Seifen_1979::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_procaine/models/modelica/Procaine_Seifen1979_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_procaine/models/modelica/Procaine_Seifen1979_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_procaine/models/modelica/Procaine_Seifen1979_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_modelica.zip" download>Procaine_Seifen1979_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_fmi.zip" download>Procaine_Seifen1979_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_matlab.zip" download>Procaine_Seifen1979_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_matlab_simbio.zip" download>Procaine_Seifen1979_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_sbml.zip" download>Procaine_Seifen1979_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_cellml.zip" download>Procaine_Seifen1979_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference.svg" alt="Procaine_Seifen1979_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_procaine/Procaine_Seifen1979_reference/Procaine_Seifen1979_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Procaine_Seifen1979_reference_params.json` · controls `Procaine_Seifen1979_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:54 UTC</sub>
