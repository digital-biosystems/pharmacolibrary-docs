<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/&quot;},{&quot;label&quot;:&quot;Morse_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Morse2021_reference&quot;,&quot;label&quot;:&quot;Morse_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Morse2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxycodone — `Oxycodone_Morse2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.318). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Absorption lag time was omitted and a reverse intercompartmental clearance relied on unreported library placeholders, causing this oxycodone record to fail coverage checks.**

The model expected five parameters, but the absorption lag time of 8.7 minutes was excluded, leaving only four covered. Additionally, the reverse intercompartmental clearance lacked an explicit estimate from the abstract, forcing the use of standard library values. These placeholders influence the simulated concentration profile but are not derived from the specific data reported in this abstract-only record. Extracted — oxycodone: CL 48.6 L.h-1 .70 kg-1, Q2 220 L.h-1 .70 kg-1, Q3 1.45 L.h-1 .70 kg-1, V1 98.2 L.70 kg-1, V2 90.1 L., V3 28.9 L.70 kg-1, t1/2ka 1.1 minutes, Frel 0.673 nasogastric, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of .70 kg-1: this record has none, the second reading none; it also differs on 14 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 06:17:52.597439+00:00) predates the upstream re-run (2026-10-07 14:56:47.950146+00:00). Current validate status: `extracted`.

## Citation
Morse JD et al., Population pharmacokinetics of oxycodon…, Paediatric anaesthesia (2021)
  ·  DOI: [10.1111/pan.14283](https://doi.org/10.1111/pan.14283)

<div class="pk-model-meta" hidden drug="oxycodone" model-id="Oxycodone_Morse2021_reference" status="extracted" stale="true" population="preterm neonates to adults" measured-compound="oxycodone" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 48.6 | L.h-1 .70 kg-1 | 0.0009450000000000001 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| Q2 | `Q30` · Q | 220 | L.h-1 .70 kg-1 | 0.004277777777777778 | [l] / [[h] · [kg]] | not captured | special_case (0.95) | Morse_2021:abstract | — | not captured |
| Q3 | `Q308` · Q3 | 1.45 | L.h-1 .70 kg-1 | 2.819444444444444e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| V1 | `Q63` · V1 | 98.2 | L.70 kg-1 | 6.8740000000000006 | [l] / [kg] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| V2 | `Q64` · V2 | 90.1 | L.70 kg-1 | 6.307 | [l] / [kg] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| V3 | `Q77` · V3 | 28.9 | L.70 kg-1 | 2.0229999999999997 | [l] / [kg] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| relative bioavailability | `Q87` · Frel | 0.673 | nasogastric | not captured | not captured | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |
| lag time | `Q83` · tlag | 8.7 | minutes | 522.0 | [min] | not captured | exact (1.0) | Morse_2021:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'TABS' — extend the ontology if this is a real PK parameter (source ['Morse_2021:abstract', 'Morse_2021:abstract', 'Morse_2021:abstract', 'Morse_2021:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxycodone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Morse_2021_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.318 (7/22 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[.70 kg-1]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption halftimes (tabs ) - intramuscular]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 48.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance by end of first year of life]` | not captured | 90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 48.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearances]` | not captured | 220 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2]` | 220 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[rapidly equilibrating peripheral compartment]` | not captured | 90.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability after nasogastric administration]` | not captured | 0.673 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | 0.673 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow equilibrating peripheral compartment]` | not captured | 28.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 98.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 90.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 28.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution in the central compartment]` | not captured | 98.2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Morse_2021:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.6 | not captured | not captured | ['Morse_2021:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.4e+03 L/h | not captured | not captured | ['Morse_2021:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.87e+03 L | not captured | not captured | ['Morse_2021:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.31e+03 L | not captured | not captured | ['Morse_2021:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=oxycodone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxycodone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Morse_2021` / `Morse_2021::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxycodone/models/modelica/Oxycodone_Morse2021_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxycodone/models/modelica/Oxycodone_Morse2021_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxycodone/models/modelica/Oxycodone_Morse2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_modelica.zip" download>Oxycodone_Morse2021_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_fmi.zip" download>Oxycodone_Morse2021_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_matlab.zip" download>Oxycodone_Morse2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_matlab_simbio.zip" download>Oxycodone_Morse2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_sbml.zip" download>Oxycodone_Morse2021_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_cellml.zip" download>Oxycodone_Morse2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference.svg" alt="Oxycodone_Morse2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 30 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 30 mg parenteral (N02AA05) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Oxycodone_Morse2021_reference_params.json` · controls `Oxycodone_Morse2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:56 UTC</sub>
