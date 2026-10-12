<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;macitentan&quot;,&quot;href&quot;:&quot;drugs/drug_macitentan/&quot;},{&quot;label&quot;:&quot;Bartolucci_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Macitentan_Bartolucci2021_reference&quot;,&quot;label&quot;:&quot;Bartolucci_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_macitentan/Macitentan_Bartolucci2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# macitentan — `Macitentan_Bartolucci2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The macitentan record was rejected because the model was built as a one-compartment enteral structure instead of the required parent–metabolite structure, its output was the parent compartment rather than the measured analyte, and apparent bioavailability assumptions (F=1, Fm=1, no molar correction) were deemed unacceptable.**

The structure is parent–metabolite (macitentan forming aprocitentan via a metabolism rate constant), but the built model used a single-compartment enteral structure with no metabolite compartment (aprocitentan has 0 compartments), so the model's output was the parent central compartment instead of the measured analyte macitentan. The builder also defaulted the lag time and assumed F=1, Fm=1 without molar correction, an apparent parameterization the adjudication ruled not acceptable. The record was built from the abstract alone, so reported summary statistics (tmax 9 h, tss 3 days, V/F 34 L, CL 1.39 L/h, kabs 13.92 h−1) stood in for a fitted model, and a second reader disputed several extracted fields, including the dose compound, primary analyte, and the accumulation factor (12.5) that this record left null. Extracted — macitentan: tmax 9 h, tss 3 days, V/F 34 L, CL 1.39 L/h, kabs 13.9 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has macitentan, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:27:36.044229+00:00) predates the upstream re-run (2026-10-06 15:53:06.800827+00:00). Current validate status: `extracted`.

## Citation
Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3)

<div class="pk-model-meta" hidden drug="macitentan" model-id="Macitentan_Bartolucci2021_reference" status="extracted" stale="true" population="healthy adults and adult subjects with pulmonary arterial hypertension" measured-compound="macitentan" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| maximum concentration after | `Q56` · tmax | 9 | h | 32400.0 | [h] | not captured | llm_corrected (0.6) | Bartolucci_2021:abstract, Bartolucci_2021:abstract | — | not captured |
| steady state after | `Q72` · tss | 3 | days | 259200.0 | [d] | not captured | llm (0.6) | Bartolucci_2021:abstract, Bartolucci_2021:abstract | — | not captured |
| apparent volume of distribution | `Q76` · V/F | 34 | L | 0.034 | [l] | not captured | exact (1.0) | Bartolucci_2021:abstract | — | not captured |
| clearance | `Q22` · CL | 1.39 | L/h | 3.861111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Bartolucci_2021:abstract | — | not captured |
| ka (h−1) | `Q49` · kabs | 13.92 | h−1 | 0.0038666666666666667 | 1/h | not captured | review_gapfill (0.7) | Liu_2020:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'accumulation factor' — extend the ontology if this is a real PK parameter (source ['Bartolucci_2021:abstract', 'Bartolucci_2021:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=macitentan
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 5/5 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Liu_2020's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bartolucci_2021_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aprocitentan reached maximum concentration after]` | not captured | 51 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aprocitentan steady state after]` | not captured | 9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 13.92 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[macitentan reached a maximum concentration after]` | not captured | 9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[macitentan steady state after]` | not captured | 3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum concentration after]` | 9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady state after]` | 3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | macitentan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | macitentan | unknown | mismatch |
| `gpt-oss:120b` | `parameters[accumulation factor]` | not captured | 12.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution was]` | not captured | 34 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | 34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance was]` | not captured | 1.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 1.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[maximum concentration after]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[maximum concentration after]` | 9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral administration at]` | not captured | 10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[steady state after]` | not captured | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[steady state after]` | 3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | macitentan | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | macitentan | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bartolucci_2021:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Liu_2020:review'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Bartolucci_2021:abstract', 'Bartolucci_2021:abstract'] |
| C5_dimension_Q72 | pass | [time] | not captured | not captured | not captured | ['Bartolucci_2021:abstract', 'Bartolucci_2021:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bartolucci_2021:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.39 L/h | not captured | not captured | ['Bartolucci_2021:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 34 L | not captured | not captured | ['Bartolucci_2021:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=macitentan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_macitentan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bartolucci_2021` / `Bartolucci_2021::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_macitentan/models/modelica/Macitentan_Bartolucci2021_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_macitentan/models/modelica/Macitentan_Bartolucci2021_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_macitentan/models/modelica/Macitentan_Bartolucci2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_modelica.zip" download>Macitentan_Bartolucci2021_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_fmi.zip" download>Macitentan_Bartolucci2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_matlab.zip" download>Macitentan_Bartolucci2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_matlab_simbio.zip" download>Macitentan_Bartolucci2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_sbml.zip" download>Macitentan_Bartolucci2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_cellml.zip" download>Macitentan_Bartolucci2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference.svg" alt="Macitentan_Bartolucci2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 13.9 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 10 mg oral (C02KX04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_macitentan/Macitentan_Bartolucci2021_reference/Macitentan_Bartolucci2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Macitentan_Bartolucci2021_reference_params.json` · controls `Macitentan_Bartolucci2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:53 UTC</sub>
