<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/&quot;},{&quot;label&quot;:&quot;Morse_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Morse2021_reference&quot;,&quot;label&quot;:&quot;Morse_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Morse2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxycodone — `Oxycodone_Morse2021_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 06:17 UTC (Needs review), but the paper was screened again on 2026-10-07 14:56 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="oxycodone" model-id="Oxycodone_Morse2021_reference" status="extracted" stale="true" population="preterm neonates to adults" measured-compound="oxycodone" parameterization="mechanistic" topology="2C"></div>

## Citation
Morse JD, Sundermann M, Hannam JA, Kokki H, Kokki M, Anderson BJ. Population pharmacokinetics of oxycodone: Premature neonates to adults. Paediatric anaesthesia 31(12):1332–1339 (2021).
  ·  DOI: [10.1111/pan.14283](https://doi.org/10.1111/pan.14283)

## Population and dosing

**Population:** preterm neonates to adults · age group mixed · n = These are the top search results for the term “Cancer Research UK” on Bing, as of November 28, 2024.  

**Top Results:**

1. **Cancer Research UK (Homepage)**  
   - URL: https://www.cancerresearchuk.org/  
   - Title: Cancer Research UK | Leading UK charity fighting cancer  
   - Snippet: Discover the latest cancer research news, get support, and help fund research. Cancer Research UK is the leading....

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference.svg" alt="Oxycodone_Morse2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 48.6 | L.h-1 .70 kg-1 |
| Q2 | Q | 220 | L.h-1 .70 kg-1 |
| Q3 | Q3 | 1.45 | L.h-1 .70 kg-1 |
| V1 | V1 | 98.2 | L.70 kg-1 |
| V2 | V2 | 90.1 | L.70 kg-1 |
| V3 | V3 | 28.9 | L.70 kg-1 |
| relative bioavailability | Frel | 0.673 | nasogastric |
| lag time | tlag | 8.7 | minutes |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.318). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption lag time was omitted and a reverse intercompartmental clearance relied on unreported library placeholders, causing this oxycodone record to fail coverage checks.**

The model expected five parameters, but the absorption lag time of 8.7 minutes was excluded, leaving only four covered. Additionally, the reverse intercompartmental clearance lacked an explicit estimate from the abstract, forcing the use of standard library values. These placeholders influence the simulated concentration profile but are not derived from the specific data reported in this abstract-only record. Extracted — oxycodone: CL 48.6 L.h-1 .70 kg-1, Q2 220 L.h-1 .70 kg-1, Q3 1.45 L.h-1 .70 kg-1, V1 98.2 L.70 kg-1, V2 90.1 L., V3 28.9 L.70 kg-1, t1/2ka 1.1 minutes, Frel 0.673 nasogastric, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of .70 kg-1: this record has none, the second reading none; it also differs on 14 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 48.6 | L.h-1 .70 kg-1 | 0.000945 | m3/s | l/(h·kg) | exact (1) | Morse_2021:abstract |
| Q2 | `Q30` · Q | 220 | L.h-1 .70 kg-1 | 0.004278 | m3/s | l/(h·kg) | special_case (0.95) | Morse_2021:abstract |
| Q3 | `Q308` · Q3 | 1.45 | L.h-1 .70 kg-1 | 2.819e-05 | m3/s | l/(h·kg) | exact (1) | Morse_2021:abstract |
| V1 | `Q63` · V1 | 98.2 | L.70 kg-1 | 6.874 | m3 | l/kg | exact (1) | Morse_2021:abstract |
| V2 | `Q64` · V2 | 90.1 | L.70 kg-1 | 6.307 | m3 | l/kg | exact (1) | Morse_2021:abstract |
| V3 | `Q77` · V3 | 28.9 | L.70 kg-1 | 2.023 | m3 | l/kg | exact (1) | Morse_2021:abstract |
| relative bioavailability | `Q87` · Frel | 0.673 | nasogastric |  |  |  | exact (1) | Morse_2021:abstract |
| lag time | `Q83` · tlag | 8.7 | minutes | 522 | s | min | exact (1) | Morse_2021:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[.70 kg-1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption halftimes (tabs ) - intramuscular]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 48.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance by end of first year of life]` |  | 90 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 48.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearances]` |  | 220 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2]` | 220 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rapidly equilibrating peripheral compartment]` |  | 90.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability after nasogastric administration]` |  | 0.673 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | 0.673 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow equilibrating peripheral compartment]` |  | 28.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 98.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 90.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 28.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution in the central compartment]` |  | 98.2 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Morse_2021:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Morse_2021:abstract'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Morse_2021:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Morse_2021:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Morse_2021:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Morse_2021:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Morse_2021:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.6 | ['Morse_2021:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.4e+03 L/h | ['Morse_2021:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 6.87e+03 L | ['Morse_2021:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.31e+03 L | ['Morse_2021:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=oxycodone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3154 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-05 | kg |
| input | model | `Cl` | 0.000945 | m3/s |
| input | model | `VdPerKg` | 0.0982 | m3/kg |
| input | model | `k12` | 0.0006223 | 1/s |
| input | model | `k21` | 0.0006783 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Morse JD, Sundermann M, Hannam JA, Kokki H, Kokki M, Anderson BJ. Population pharmacokinetics of oxycodone: Premature neonates to adults. Paediatric anaesthesia 31(12):1332–1339 (2021). [doi:10.1111/pan.14283](https://doi.org/10.1111/pan.14283)

**This record:** Pharmacolibrary v26.09, model `Oxycodone_Morse2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_oxycodone/Oxycodone_Morse2021_reference>

```bibtex
@misc{pharmacolibrary_OxycodoneMorse2021reference,
  title  = {{Pharmacolibrary model Oxycodone_Morse2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_oxycodone/Oxycodone_Morse2021_reference},
  note   = {Parameters from doi:10.1111/pan.14283},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 30 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 30 mg parenteral (N02AA05) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_oxycodone/Oxycodone_Morse2021_reference/Oxycodone_Morse2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Oxycodone_Morse2021_reference_params.json` · controls `Oxycodone_Morse2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxycodone%5D%20Oxycodone_Morse2021_reference&body=Drug%3A%20oxycodone%0ARecord%3A%20Oxycodone_Morse2021_reference%0APaper%3A%20Morse_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_oxycodone/Oxycodone_Morse2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:56 UTC</sub>
