<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;aldesleukin&quot;,&quot;href&quot;:&quot;drugs/drug_aldesleukin/&quot;},{&quot;label&quot;:&quot;Chen_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aldesleukin_Chen2000_reference&quot;,&quot;label&quot;:&quot;Chen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aldesleukin — `Aldesleukin_Chen2000_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is aldesleukin's own; they describe interleukin-2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has interleukin-2, the second reading IL-2; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chen SA et al., Plasma and lymph pharmacokinetics of re…, The Journal of pharmacology… (2000)

<div class="pk-model-meta" hidden drug="aldesleukin" model-id="Aldesleukin_Chen2000_reference" status="accepted_with_caveats" stale="false" population="Yorkshire pigs" measured-compound="interleukin-2" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| The ratio of the area under the curve in lymph and plasma increased from | `Q21` · AUC ratio | 0.67 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Chen_2000:abstract | — | not captured |
| For PEG-IL-2, bioavailability was | `Q41` · FG | 100 | % | not captured | not captured | not captured | llm_corrected (0.6) | Chen_2000:abstract | — | not captured |
| For PEG-IL-2, clearance was | `Q22` · CL | 5.9 | ml/h/kg | 1.1472222222222223e-07 | [ml] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | Chen_2000:abstract | — | not captured |
| For PEG-IL-2, volume of distribution at steady state was | `Q65` · Vss | 370 | ml/kg | 0.0259 | [ml] / [kg] | not captured | llm_corrected (0.6) | Chen_2000:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Bioavailability of i.v. bolus doses of &gt;/=0.16 MIU/kg | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped value-less row: 'The IL-2 regimens were i.v. bolus'
- dropped value-less row: 'The PEG-IL-2 doses were 15-min i.v.'
- covariate category for CL from footnote/prose kept as documentation only (['Chen_2000:abstract'])
- covariate category for Vss from footnote/prose kept as documentation only (['Chen_2000:abstract'])
- dropped duplicate Q21 ('The ratio of the area under the curve in lymph and plasma to', value 3.4) — already have one for this compound
- dropped unlinked row (NIL): 'delivery advantage' — extend the ontology if this is a real PK parameter (source ['Chen_2000:abstract', 'Chen_2000:abstract', 'Chen_2000:abstract'])
- dropped duplicate Q21 ('The ratio of the area under the curve in lymph and plasma increased from (i.v.) to', value 0.33) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=interleukin-2
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'interleukin-2' ('interleukin-2') — left in mass units
- molar mass: none found for 'aldesleukin' — its concentrations stay mass-only
- molar mass: none found for 'interleukin-2' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'interleukin-2', not aldesleukin — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Chen_2000_metadata.yaml (18 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | not captured | 39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability at 0.1 miu/kg]` | not captured | 39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of i.v. bolus doses of &gt;/=0.16 miu/kg]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 300 | only_one_extracted |
| `gpt-oss-120b` | `parameters[delivery advantage]` | not captured | 3.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[for peg-il-2, bioavailability was]` | 100 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[for peg-il-2, clearance was]` | 5.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[for peg-il-2, volume of distribution at steady state was]` | 370 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ratio of the area under the curve in lymph and plasma]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the ratio of the area under the curve in lymph and plasma increased from]` | 0.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution at steady state]` | not captured | 570 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | interleukin-2 | IL-2 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | interleukin-2 | IL-2 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chen_2000:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chen_2000:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.9 | not captured | not captured | ['Chen_2000:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.413 L/h | not captured | not captured | ['Chen_2000:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 25.9 L | not captured | not captured | ['Chen_2000:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=interleukin-2) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_aldesleukin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2000` / `Chen_2000::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_aldesleukin/models/modelica/Aldesleukin_Chen2000_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_aldesleukin/models/modelica/Aldesleukin_Chen2000_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_aldesleukin/models/modelica/Aldesleukin_Chen2000_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_modelica.zip" download>Aldesleukin_Chen2000_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_fmi.zip" download>Aldesleukin_Chen2000_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_matlab.zip" download>Aldesleukin_Chen2000_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_matlab_simbio.zip" download>Aldesleukin_Chen2000_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_sbml.zip" download>Aldesleukin_Chen2000_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_cellml.zip" download>Aldesleukin_Chen2000_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference.svg" alt="Aldesleukin_Chen2000_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 0.2 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 0.2 mg parenteral (L03AC01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference/Aldesleukin_Chen2000_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Aldesleukin_Chen2000_reference_params.json` · controls `Aldesleukin_Chen2000_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:30 UTC</sub>
