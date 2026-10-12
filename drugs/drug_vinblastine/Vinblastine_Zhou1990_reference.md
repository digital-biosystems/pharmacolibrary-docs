<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Zhou_1990 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Zhou1990_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.636), gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Vinblastine’s k12 and k21 lack reported numerical estimates and were left at library defaults, so the record was held back.**

K12 and k21 use library defaults, not estimates from this paper; these values affect the simulated profile but are unsupported by the paper. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. A second reader identified both vinblastine and vincristine as dose compounds and listed separate metabolite links, differing from this record’s representation. Extracted — vinblastine: V1 5.86 l/kg, V 11.5 l/kg, CL 1.49 l/h/kg.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has vinblastine and vincristine, the second reading vinblastine; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Zhou XJ et al., In vivo and in vitro pharmacokinetics a…, European journal of drug me… (1990)
  ·  DOI: [10.1007/BF03190222](https://doi.org/10.1007/BF03190222)

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Zhou1990_reference" status="needs_review" stale="false" population="rats given intravenous vinblastine or vincristine" measured-compound="vinblastine and vincristine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 3 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Estimated parameters: Vc (l/kg) | `Q63` · V1 | 5.86 | l/kg | 0.41020000000000006 | [l] / [kg] | not captured | llm_confirmed (0.6) | Zhou_1990_table_1:row5:col1 | — | not captured |
| Estimated parameters: Vt (l/kg) | `Q61` · V | 11.46 | l/kg | 0.8022000000000001 | [l] / [kg] | not captured | llm (0.6) | Zhou_1990_table_1:row6:col1 | — | not captured |
| Estimated parameters: Cls (l/h/kg) | `Q22` · CL | 1.49 | l/h/kg | 2.897222222222222e-05 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Zhou_1990_table_1:row7:col1 | — | not captured |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 87.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Zhou_1990_table_1:row1:col1 | — | not captured |
| theta_q59_weight_power | `Q900` · theta_q59_weight_power | 0.51 | not captured | not captured | not captured | not captured | not captured (not captured) | Zhou_1990_table_1:row2:col1 | — | not captured |
| theta_q900_weight_power | `Q900` · theta_q900_weight_power | 47.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Zhou_1990_table_1:row3:col1 | — | not captured |
| theta_q60_weight_power | `Q900` · theta_q60_weight_power | 7.5 | not captured | not captured | not captured | not captured | not captured (not captured) | Zhou_1990_table_1:row4:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose (mg/kg)' — extend the ontology if this is a real PK parameter (source ['Zhou_1990_table_1:row0:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q59 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q60 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine and vincristine
- molar mass: no plausible PubChem entry for 'vinblastine and vincristine' ('vinblastine and vincristine') — left in mass units
- molar mass: none found for 'vinblastine and vincristine' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Zhou_1990_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.636 (7/11 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['vinblastine', 'metabolites', 'metabolism']] | [['vinblastine', 'vlb metabolite 1', 'metabolism'], ['vinblastine', 'vlb metabolite 2', 'metabolism'], ['vinblastine', 'vlb metabolite 3', 'metabolism'], ['vinblastine', 'vlb metabolite 4', 'metabolism'], ['vincristine', 'vcr metabolite 1', 'metabolism'], ['vincristine', 'vcr metabolite 2', 'metabolism'], ['vincristine', 'vcr metabolite 3', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | vinblastine | vinblastine and vincristine | mismatch |
| `qwen3.8-27b` | `parameters[theta_q86_weight_power]` | not captured | 87.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_weight_power].value` | 87.0 | 47.0 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | vinblastine and vincristine | vinblastine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | vinblastine and vincristine | vinblastine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Zhou_1990_table_1:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zhou_1990_table_1:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zhou_1990_table_1:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.49 | not captured | not captured | ['Zhou_1990_table_1:row7:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 104 L/h | not captured | not captured | ['Zhou_1990_table_1:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 802 L | not captured | not captured | ['Zhou_1990_table_1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 410 L | not captured | not captured | ['Zhou_1990_table_1:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=vinblastine and vincristine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_vinblastine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhou_1990` / `Zhou_1990::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_vinblastine/models/modelica/Vinblastine_Zhou1990_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_vinblastine/models/modelica/Vinblastine_Zhou1990_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_vinblastine/models/modelica/Vinblastine_Zhou1990_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_modelica.zip" download>Vinblastine_Zhou1990_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_fmi.zip" download>Vinblastine_Zhou1990_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_matlab.zip" download>Vinblastine_Zhou1990_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_matlab_simbio.zip" download>Vinblastine_Zhou1990_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_sbml.zip" download>Vinblastine_Zhou1990_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_cellml.zip" download>Vinblastine_Zhou1990_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference.svg" alt="Vinblastine_Zhou1990_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7, 42 mg.

<dbs-fmusim paramsurl="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vinblastine/Vinblastine_Zhou1990_reference/Vinblastine_Zhou1990_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Vinblastine_Zhou1990_reference_params.json` · controls `Vinblastine_Zhou1990_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:15 UTC</sub>
