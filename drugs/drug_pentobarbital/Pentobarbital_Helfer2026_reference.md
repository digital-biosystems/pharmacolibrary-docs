<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;pentobarbital&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/&quot;},{&quot;label&quot;:&quot;Helfer_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pentobarbital_Frederiksen1983_reference&quot;,&quot;label&quot;:&quot;Frederiksen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Frederiksen1983_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Helfer2026_reference&quot;,&quot;label&quot;:&quot;Helfer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_base&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pentobarbital_Ketharanathan2023_final&quot;,&quot;label&quot;:&quot;Ketharanathan_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentobarbital/Pentobarbital_Ketharanathan2023_final.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pentobarbital — `Pentobarbital_Helfer2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

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

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pentobarbital, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Helfer VE et al., Population Pharmacokinetics and Dosing…, Journal of clinical pharmac… (2026)
  ·  DOI: [10.1002/jcph.70204](https://doi.org/10.1002/jcph.70204)

<div class="pk-model-meta" hidden drug="pentobarbital" model-id="Pentobarbital_Helfer2026_reference" status="accepted_with_caveats" stale="false" population="pediatric patients (birth to 21 years)" measured-compound="pentobarbital" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/70 kg) | `Q22` · CL | 5.13 | L/h/70 kg | 1.425e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | jcph70204-tbl-0002:row2:col1, jcph70204-tbl-0002:row2:col3, jcph70204-tbl-0002:row2:col4, jcph70204-tbl-0002:row2:col5 | — | not captured |
| V1 (L/70 kg) | `Q63` · V1 | 35.43 | L/70 kg | 0.03543 | [l] / [70kg] | not captured | exact (1.0) | jcph70204-tbl-0002:row3:col1, jcph70204-tbl-0002:row3:col3, jcph70204-tbl-0002:row3:col4, jcph70204-tbl-0002:row3:col5 | — | not captured |
| Q (L/h/70 kg) | `Q30` · Q | 17.81 | L/h/70 kg | 4.947222222222222e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | jcph70204-tbl-0002:row4:col1, jcph70204-tbl-0002:row4:col3, jcph70204-tbl-0002:row4:col4, jcph70204-tbl-0002:row4:col5 | — | not captured |
| V2 (L/70 kg) | `Q64` · V2 | 62.71 | L/70 kg | 0.06271 | [l] / [70kg] | not captured | exact (1.0) | jcph70204-tbl-0002:row5:col1, jcph70204-tbl-0002:row5:col3, jcph70204-tbl-0002:row5:col4, jcph70204-tbl-0002:row5:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (%)' routed out of structural estimates ('Residual error')
- routed 'Shared variability CL and V1 b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'η1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Number of Participants' — extend the ontology if this is a real PK parameter (source ['Helfer_2026_table_3:row0:col1', 'Helfer_2026_table_3:row0:col2', 'Helfer_2026_table_3:row0:col3', 'Helfer_2026_table_3:row0:col4'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 90.4 (source ['jcph70204-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['jcph70204-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate category for IIV from footnote/prose kept as documentation only (['jcph70204-tbl-0002:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pentobarbital

**Extraction notes:**
- unparsed cell jcph70204-tbl-0002:row8:col2 = '23.1 [7]'
- unparsed cell jcph70204-tbl-0002:row10:col2 = '31.4 [24]'
- transposed table Helfer_2026_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 3 transcribed (4 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | pentobarbital | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pentobarbital | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70204-tbl-0002:row4:col1', 'jcph70204-tbl-0002:row4:col3', 'jcph70204-tbl-0002:row4:col4', 'jcph70204-tbl-0002:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70204-tbl-0002:row3:col1', 'jcph70204-tbl-0002:row3:col3', 'jcph70204-tbl-0002:row3:col4', 'jcph70204-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70204-tbl-0002:row5:col1', 'jcph70204-tbl-0002:row5:col3', 'jcph70204-tbl-0002:row5:col4', 'jcph70204-tbl-0002:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.13 | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.13 L/h | not captured | not captured | ['jcph70204-tbl-0002:row2:col1', 'jcph70204-tbl-0002:row2:col3', 'jcph70204-tbl-0002:row2:col4', 'jcph70204-tbl-0002:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.4 L | not captured | not captured | ['jcph70204-tbl-0002:row3:col1', 'jcph70204-tbl-0002:row3:col3', 'jcph70204-tbl-0002:row3:col4', 'jcph70204-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 62.7 L | not captured | not captured | ['jcph70204-tbl-0002:row5:col1', 'jcph70204-tbl-0002:row5:col3', 'jcph70204-tbl-0002:row5:col4', 'jcph70204-tbl-0002:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=pentobarbital) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pentobarbital/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Helfer_2026` / `Helfer_2026::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pentobarbital/models/modelica/Pentobarbital_Helfer2026_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pentobarbital/models/modelica/Pentobarbital_Helfer2026_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pentobarbital/models/modelica/Pentobarbital_Helfer2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_modelica.zip" download>Pentobarbital_Helfer2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_fmi.zip" download>Pentobarbital_Helfer2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_matlab.zip" download>Pentobarbital_Helfer2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_matlab_simbio.zip" download>Pentobarbital_Helfer2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_sbml.zip" download>Pentobarbital_Helfer2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_cellml.zip" download>Pentobarbital_Helfer2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference.svg" alt="Pentobarbital_Helfer2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 27.3 mg infusion over 10 min, single dose. Doses in the paper: 27.3–623 mg.

<dbs-fmusim paramsurl="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_pentobarbital/Pentobarbital_Helfer2026_reference/Pentobarbital_Helfer2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Pentobarbital_Helfer2026_reference_params.json` · controls `Pentobarbital_Helfer2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:43 UTC</sub>
